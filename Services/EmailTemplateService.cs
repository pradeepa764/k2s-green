using System;
using System.Linq;
using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Services
{
    public class EmailTemplateService : IEmailTemplateService
    {
        private readonly IContentService _contentService;
        private readonly ILogger<EmailTemplateService> _logger;

        public EmailTemplateService(
            IContentService contentService,
            ILogger<EmailTemplateService> logger)
        {
            _contentService = contentService;
            _logger = logger;
        }

        public (string Subject, string Body) GetTemplate(string templateKey)
        {
            try
            {
                _logger.LogWarning(
                    "📧 Looking for Template Key: {Key}",
                    templateKey);

                // ==================================
                // CRM ROOT
                // ==================================

                var crmNode = _contentService
                    .GetRootContent()
                    .FirstOrDefault(x => x.Name == "CRM");

                if (crmNode == null)
                {
                    _logger.LogWarning("❌ CRM node not found");
                    return (string.Empty, string.Empty);
                }

                _logger.LogWarning(
                    "✅ CRM node found | Id={Id} | Name={Name}",
                    crmNode.Id,
                    crmNode.Name);
                var children = _contentService.GetPagedChildren(
    crmNode.Id, 0, int.MaxValue, out _).ToList();

foreach (var c in children)
{
    _logger.LogWarning(
        "CRM CHILD => Name={Name}, Alias={Alias}",
        c.Name,
        c.ContentType.Alias);
}

                // ==================================
                // EMAIL TEMPLATES FOLDER
                // ==================================

                // ==================================
                // LOAD CRM CHILD NODES
                // ==================================

                // ==================================
                // EMAIL TEMPLATE FOLDER
                // ==================================

                _logger.LogWarning("🔥 USING emailTemplatesContainer");

                var emailTemplateFolder = children
                    .FirstOrDefault(x =>
                        x.ContentType.Alias == "emailTemplatesContainer");

                _logger.LogWarning(
                    "🔥 Folder Selected => {Name} ({Alias})",
                    emailTemplateFolder?.Name,
                    emailTemplateFolder?.ContentType?.Alias);

                if (emailTemplateFolder == null)
                {
                    _logger.LogWarning(
                        "❌ Email Template Folder Not Found");

                    return (string.Empty, string.Empty);
                }

                _logger.LogWarning(
     "✅ Email Template Folder Found | Id={Id}",
     emailTemplateFolder.Id);

                _logger.LogWarning(
                    "Folder Found => Name={Name}, Alias={Alias}",
                    emailTemplateFolder.Name,
                    emailTemplateFolder.ContentType.Alias);

                // ==================================
                // LOAD EMAIL TEMPLATES
                // ==================================

                var templates = _contentService
                    .GetPagedChildren(
                        emailTemplateFolder.Id,
                        0,
                        int.MaxValue,
                        out _)
                    .ToList();
                foreach (var t in templates)
                {
                    _logger.LogWarning(
                        "TEMPLATE => Name={Name}, Alias={Alias}, Id={Id}",
                        t.Name,
                        t.ContentType.Alias,
                        t.Id);
                }

                _logger.LogWarning(
                    "📧 Total Email Templates Found = {Count}",
                    templates.Count);

                _logger.LogWarning(
                    "📧 Total CRM Child Nodes Found = {Count}",
                    templates.Count);

                foreach (var t in templates)
                {
                    _logger.LogWarning(
                        "📧 Child Node => {Name}",
                        t.Name);
                }

                _logger.LogWarning(
                    "📧 Total Templates Found = {Count}",
                    templates.Count);

                foreach (var t in templates)
                {
                    var rawKey = t.GetValue("templateKey");

                    _logger.LogWarning(
                        "📧 Template Found | Name={Name} | RawKey={RawKey}",
                        t.Name,
                        rawKey?.ToString());

                    var allProps = string.Join(", ",
                        t.Properties.Select(p =>
                            $"{p.Alias}=[{p.GetValue()?.ToString()}]"));

                    _logger.LogWarning(
                        "📧 Properties => {Props}",
                        allProps);
                }

                // ==================================
                // FIND MATCHING TEMPLATE
                // ==================================

                _logger.LogWarning(
                    "🔍 Searching For Template Key = [{Key}]",
                    templateKey);

                var template = templates.FirstOrDefault(x =>
                {
                    var key = x.GetValue("templateKey")?.ToString();

                    _logger.LogWarning(
                        "Comparing TemplateKey [{TemplateKey}] With SearchKey [{SearchKey}]",
                        key,
                        templateKey);

                    return string.Equals(
                        key?.Trim(),
                        templateKey?.Trim(),
                        StringComparison.OrdinalIgnoreCase);
                });

                if (template == null)
                {
                    _logger.LogWarning(
                        "❌ Matching template not found");

                    return (string.Empty, string.Empty);
                }
                // ==================================
                // GET SUBJECT & BODY
                // ==================================

                var emailSubject =
                    template.GetValue<string>("emailSubject") ?? "";

                var emailBody =
                    template.GetValue<string>("emailBody") ?? "";

                _logger.LogWarning(
                    "📧 Loaded Subject = [{Subject}]",
                    emailSubject);

                _logger.LogWarning(
                    "📧 Loaded Body Length = {Length}",
                    emailBody.Length);

                _logger.LogWarning(
                    "✅ Template Loaded Successfully");

                return (emailSubject, emailBody);
            }
            catch (Exception ex)
            {
                _logger.LogError(
                    ex,
                    "❌ Error while loading email template");

                return (string.Empty, string.Empty);
            }
        }
    }
}