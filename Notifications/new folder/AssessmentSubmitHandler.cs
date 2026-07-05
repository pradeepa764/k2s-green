using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace TestUmbPro.Notifications
{

    public class AssessmentSubmitHandler
        : INotificationHandler<ContentPublishingNotification>
    {
        private readonly ILogger<AssessmentSubmitHandler> _logger;

        public AssessmentSubmitHandler(
            ILogger<AssessmentSubmitHandler> logger)
        {
            _logger = logger;
        }

        public void Handle(ContentPublishingNotification notification)
        {
            _logger.LogWarning(
                "🔥 AssessmentSubmitHandler TRIGGERED");

            foreach (var content in notification.PublishedEntities)
            {
                try
                {
                    if (content == null)
                    {
                        _logger.LogWarning(
                            "❌ Content is NULL");
                        continue;
                    }

                    _logger.LogWarning(
                        "👉 Processing Content | Id={Id} | Alias={Alias}",
                        content.Id,
                        content.ContentType.Alias);

                    // ONLY FOR LEAD DOCUMENT TYPE
                    if (!string.Equals(
                        content.ContentType.Alias,
                        "lead",
                        StringComparison.OrdinalIgnoreCase))
                    {
                        _logger.LogWarning(
                            "⛔ Skipped - Not Lead Type");
                        continue;
                    }
                    _logger.LogWarning(
    "✅ LEAD FOUND | Id={Id} | Name={Name}",
    content.Id,
    content.Name);

                    // GET STATUS
                    var rawStatus =
                        content.GetValue("leadStatus")
                        ?.ToString();

                    // GET FLAG
                    var submittedForSales =
                        content.GetValue<bool>(
                            "submittedForSales");

                    _logger.LogWarning(
                        "📌 RAW Status = {Status}",
                        rawStatus);

                    _logger.LogWarning(
                        "📌 SubmittedForSales = {Submitted}",
                        submittedForSales);

                    string finalStatus = "";

                    // HANDLE JSON ARRAY VALUE
                    if (!string.IsNullOrWhiteSpace(rawStatus)
                        && rawStatus.StartsWith("["))
                    {
                        try
                        {
                            var result =
                                JsonSerializer.Deserialize<List<string>>(
                                    rawStatus);

                            finalStatus =
                                result?.FirstOrDefault() ?? "";
                        }
                        catch (Exception ex)
                        {
                            _logger.LogError(
                                ex,
                                "❌ JSON Parse Failed");

                            finalStatus = rawStatus;
                        }
                    }
                    else
                    {
                        finalStatus = rawStatus ?? "";
                    }

                    _logger.LogWarning(
                        "📌 FINAL Status = {Status}",
                        finalStatus);

                    // CHECK FLAG
                    if (!submittedForSales)
                    {
                        _logger.LogWarning(
                            "⛔ Skipped - submittedForSales FALSE");
                        continue;
                    }

                    // CHECK STATUS
                    if (!finalStatus.Equals(
                        "Qualified",
                        StringComparison.OrdinalIgnoreCase))
                    {
                        _logger.LogWarning(
                            "⛔ Skipped - Status is not Qualified");
                        continue;
                    }

                    // UPDATE VALUES BEFORE PUBLISH
                    content.SetValue(
                        "leadStatus",
                        "[\"Assessment Submitted\"]");

                    content.SetValue(
                        "submittedForSales",
                        false);

                    _logger.LogWarning(
                        "✅ Lead {Id} updated to Assessment Submitted",
                        content.Id);
                }
                catch (Exception ex)
                {
                    _logger.LogError(
                        ex,
                        "❌ ERROR in AssessmentSubmitHandler");
                }
            }
        }
    }
}