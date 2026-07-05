using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Models;
using System.Linq;

public class AssessmentReportAuditHandler : INotificationHandler<ContentPublishedNotification>
{
    private readonly IContentService _contentService;
    private readonly ILogger<AssessmentReportAuditHandler> _logger;

    public AssessmentReportAuditHandler(
        IContentService contentService,
        ILogger<AssessmentReportAuditHandler> logger)
    {
        _contentService = contentService;
        _logger = logger;
    }

    public void Handle(ContentPublishedNotification notification)
    {
        foreach (var publishedContent in notification.PublishedEntities)
        {
            // ✅ Only run for Assessment Report
            if (publishedContent.ContentType.Alias != "assessmentReport")
                continue;

            _logger.LogWarning("✅ Assessment Report Published Triggered");

            // Get Assessment (parent)
            var assessment = _contentService.GetById(publishedContent.ParentId);

            if (assessment == null || assessment.ContentType.Alias != "assessment")
            {
                _logger.LogWarning("❌ Assessment not found.");
                continue;
            }

            // ✅ Climb up to find Lead safely
            IContent current = assessment;
            IContent lead = null;

            while (current != null && current.ParentId > 0)
            {
                current = _contentService.GetById(current.ParentId);

                if (current != null && current.ContentType.Alias == "lead")
                {
                    lead = current;
                    break;
                }
            }

            if (lead == null)
            {
                _logger.LogWarning("❌ Lead not found in hierarchy.");
                continue;
            }

            _logger.LogWarning($"✅ Lead Found: {lead.Name}");

            try
            {
                // ✅ Set Lead Status (Dropdown JSON format)
                lead.SetValue("leadStatus", "[\"Under Sales Review\"]");

                // Optional boolean
                lead.SetValue("submittedForSales", true);

                _contentService.SaveAndPublish(lead);

                _logger.LogWarning("✅ Lead status updated to Under Sales Review");
            }
            catch (System.Exception ex)
            {
                _logger.LogError($"❌ Error updating Lead: {ex.Message}");
            }
        }
    }
}
