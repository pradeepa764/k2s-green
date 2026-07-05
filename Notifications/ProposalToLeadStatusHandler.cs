using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using TestUmbPro.Services;

namespace TestUmbPro.Notifications
{
    public class ProposalToLeadStatusHandler
        : INotificationHandler<ContentPublishedNotification>
    {
        private readonly IContentService _contentService;
        private readonly ILogger<ProposalToLeadStatusHandler> _logger;
        private readonly IEmailTemplateService _emailTemplateService;
        private readonly IEmailService _emailService;

        public ProposalToLeadStatusHandler(
       IContentService contentService,
       ILogger<ProposalToLeadStatusHandler> logger,
       IEmailTemplateService emailTemplateService, IEmailService emailService)
        {
            _contentService = contentService;
            _logger = logger;
            _emailTemplateService = emailTemplateService;
            _emailService = emailService;
        }

        public void Handle(ContentPublishedNotification notification)
        {
            _logger.LogWarning("🔥 ProposalToLeadStatusHandler STARTED");

            foreach (var content in notification.PublishedEntities)
            {
                try
                {
                    if (content == null)
                        continue;

                    _logger.LogWarning(
                        "👉 Processing Content | Id={Id} | Alias={Alias}",
                        content.Id,
                        content.ContentType.Alias);

                    // Only Commercial Proposal
                    if (!content.ContentType.Alias.Equals(
                        "commercialProposal",
                        StringComparison.OrdinalIgnoreCase))
                    {
                        _logger.LogWarning("⛔ Not Commercial Proposal");
                        continue;
                    }

                    // ==================================
                    // GET PROPOSAL STATUS
                    // ==================================

                    var rawProposalStatus =
                        content.GetValue("proposalStatus")?.ToString();

                    _logger.LogWarning(
                        "📌 Raw Proposal Status = {Status}",
                        rawProposalStatus);

                    string proposalStatus = string.Empty;

                    if (!string.IsNullOrWhiteSpace(rawProposalStatus))
                    {
                        if (rawProposalStatus.StartsWith("["))
                        {
                            try
                            {
                                var statuses =
                                    JsonSerializer.Deserialize<List<string>>(
                                        rawProposalStatus);

                                proposalStatus =
                                    statuses?.FirstOrDefault() ?? "";
                            }
                            catch
                            {
                                proposalStatus = rawProposalStatus;
                            }
                        }
                        else
                        {
                            proposalStatus = rawProposalStatus;
                        }
                    }

                    _logger.LogWarning(
                        "📌 Final Proposal Status = {Status}",
                        proposalStatus);

                    if (string.IsNullOrWhiteSpace(proposalStatus))
                    {
                        _logger.LogWarning(
                            "⛔ Proposal Status Empty");

                        continue;
                    }

                    // ==================================
                    // GET RELATED LEAD
                    // ==================================

                    var relatedLeadRaw =
                        content.GetValue("relatedLead");

                    if (relatedLeadRaw == null)
                    {
                        _logger.LogWarning(
                            "⛔ Related Lead Empty");

                        continue;
                    }

                    _logger.LogWarning(
                        "📌 Related Lead Raw = {Lead}",
                        relatedLeadRaw);

                    Udi? udi = null;

                    if (relatedLeadRaw is Udi directUdi)
                    {
                        udi = directUdi;
                    }
                    else
                    {
                        var strValue =
                            relatedLeadRaw.ToString();

                        if (string.IsNullOrWhiteSpace(strValue))
                        {
                            _logger.LogWarning(
                                "⛔ Related Lead String Empty");

                            continue;
                        }

                        if (strValue.StartsWith("["))
                        {
                            try
                            {
                                var json =
                                    JsonDocument.Parse(strValue);

                                if (json.RootElement.GetArrayLength() > 0 &&
                                    json.RootElement[0]
                                        .TryGetProperty(
                                            "udi",
                                            out var udiProp))
                                {
                                    var udiString =
                                        udiProp.GetString();

                                    if (!string.IsNullOrWhiteSpace(
                                        udiString))
                                    {
                                        udi =
                                            UdiParser.Parse(
                                                udiString);
                                    }
                                }
                            }
                            catch (Exception ex)
                            {
                                _logger.LogError(
                                    ex,
                                    "❌ Failed parsing relatedLead JSON");
                            }
                        }
                        else
                        {
                            try
                            {
                                udi = UdiParser.Parse(strValue);
                            }
                            catch (Exception ex)
                            {
                                _logger.LogError(
                                    ex,
                                    "❌ Failed parsing UDI");
                            }
                        }
                    }

                    if (udi is not GuidUdi guidUdi)
                    {
                        _logger.LogWarning(
                            "⛔ Invalid Lead UDI");

                        continue;
                    }

                    _logger.LogWarning(
                        "📌 Lead UDI = {Guid}",
                        guidUdi.Guid);

                    // ==================================
                    // LOAD LEAD
                    // ==================================

                    var lead =
                        _contentService.GetById(
                            guidUdi.Guid);

                    if (lead == null)
                    {
                        _logger.LogWarning(
                            "⛔ Lead Not Found");

                        continue;
                    }

                    _logger.LogWarning(
                        "✅ Lead Found | Id={LeadId}",
                        lead.Id);

                    // ==================================
                    // UPDATE STATUS
                    // ==================================

                    lead.SetValue(
                        "leadStatus",
                        $"[\"{proposalStatus}\"]");

                    _logger.LogWarning(
                        "✅ Updating Lead Status To {Status}",
                        proposalStatus);

                    var result =
                        _contentService.SaveAndPublish(
                            lead);

                    if (!result.Success)
                    {
                        _logger.LogError(
                            "❌ SaveAndPublish Failed For Lead {LeadId}",
                            lead.Id);

                        continue;
                    }

                    _logger.LogWarning(
                        "✅ Lead {LeadId} Published Successfully",
                        lead.Id);
                    string templateKey = proposalStatus switch
                    {
                        "Proposal Sent" => "ProposalSent",
                        "Proposal Accepted(Sold)" => "ProposalAccepted",
                        "Proposal Rejected(Closed)" => "ProposalRejected",
                        _ => proposalStatus.Replace(" ", "")
                    };

                    _logger.LogWarning(
                        "📧 Template Key Used = {Key}",
                        templateKey);

                    _logger.LogWarning(
    "🚀 Calling GetTemplate with Key={Key}",
    templateKey);

                    var template =
     _emailTemplateService.GetTemplate(templateKey);

                    if (string.IsNullOrWhiteSpace(template.Subject) &&
                        string.IsNullOrWhiteSpace(template.Body))
                    {
                        _logger.LogWarning(
                            "❌ Template Not Found Or Empty");

                        continue;
                    }

                    _logger.LogWarning(
                        "📧 Template Subject: {Subject}",
                        template.Subject);

                    _logger.LogWarning(
                        "📧 Template Body: {Body}",
                        template.Body);
                    var leadEmail = lead.GetValue<string>("contactEmai");

                    if (string.IsNullOrWhiteSpace(leadEmail))
                    {
                        _logger.LogWarning(
                            "❌ Lead Email Empty");

                        continue;
                    }

                    _emailService.SendEmailAsync(
                        leadEmail,
                        template.Subject,
                        template.Body)
                        .GetAwaiter()
                        .GetResult();

                    _logger.LogWarning(
                        "✅ Email Sent To {Email}",
                        leadEmail); 
                }

             

                catch (Exception ex)
                {
                    _logger.LogError(
                        ex,
                        "❌ Error in ProposalToLeadStatusHandler");
                }
            }
        }
    }
}