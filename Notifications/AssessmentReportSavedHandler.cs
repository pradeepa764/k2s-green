using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Notifications
{
    public class AssessmentReportPublishedHandler
        : INotificationHandler<ContentPublishedNotification>
    {
        private readonly IContentService _contentService;
        private readonly ILogger<AssessmentReportPublishedHandler> _logger;

        public AssessmentReportPublishedHandler(
            IContentService contentService,
            ILogger<AssessmentReportPublishedHandler> logger)
        {
            _contentService = contentService;
            _logger = logger;
        }

        public void Handle(ContentPublishedNotification notification)
        {
            foreach (var content in notification.PublishedEntities)
            {
                // Prevent re-processing the same content
                if (notification.State.ContainsKey($"Handled_{content.Id}"))
                    continue;

                notification.State[$"Handled_{content.Id}"] = true;

                _logger.LogInformation("🔥 AssessmentReportPublishedHandler Triggered");
                _logger.LogInformation($"Published Content: {content.Name}, Alias: {content.ContentType.Alias}");

                // Only handle assessment reports
                if (content.ContentType.Alias != "assessmentReport")
                {
                    _logger.LogInformation("⏭ Skipped - Not an Assessment Report");
                    continue;
                }

                // --- Get Parent Assessment ---
                if (content.ParentId <= 0)
                {
                    _logger.LogWarning("❌ Assessment Report has no parent");
                    continue;
                }

                var assessment = _contentService.GetById(content.ParentId);
                if (assessment == null || assessment.ContentType.Alias != "assessment")
                {
                    _logger.LogWarning($"❌ Parent is not a valid Assessment (Id={content.ParentId})");
                    continue;
                }

                _logger.LogInformation($"Parent Assessment found: {assessment.Name}");

                // --- Lock Assessment ---
                if (!assessment.GetValue<bool>("assessmentLocked"))
                {
                    _logger.LogInformation("🔒 Locking Assessment...");
                    assessment.SetValue("assessmentLocked", true);
                    _contentService.SaveAndPublish(assessment);
                    _logger.LogInformation("✅ Assessment locked successfully");
                }

                // --- Get Lead (Parent of Assessment) ---
                if (assessment.ParentId <= 0)
                {
                    _logger.LogWarning("❌ Assessment has no parent Lead");
                    continue;
                }

                var lead = _contentService.GetById(assessment.ParentId);
                if (lead == null || lead.ContentType.Alias != "lead")
                {
                    _logger.LogWarning($"❌ Lead not found or invalid (ParentId={assessment.ParentId})");
                    continue;
                }

                _logger.LogInformation($"Lead found: {lead.Name}");

                // --- Hardcode Lead status to "Under Sales Review" ---
                lead.SetValue("leadStatus", "[\"Under Sales Review\"]"); // same style as Assessment Submitted
                lead.SetValue("submittedForSales", false);

                _contentService.SaveAndPublish(lead);
                _logger.LogInformation($"✅ Lead {lead.Id} updated to 'Under Sales Review'");
            }
        }
    }
}
