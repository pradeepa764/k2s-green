using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Notifications
{
    public class LeadActivityHandler
        : INotificationHandler<ContentPublishingNotification>
    {
        private readonly IContentService _contentService;
        private readonly ILogger<LeadActivityHandler> _logger;

        public LeadActivityHandler(
            IContentService contentService,
            ILogger<LeadActivityHandler> logger)
        {
            _contentService = contentService;
            _logger = logger;
        }

        public void Handle(ContentPublishingNotification notification)
        {
            foreach (var content in notification.PublishedEntities)
            {
                if (content.ContentType.Alias != "leadActivity")
                    continue;

                var activityType =
                    content.GetValue("activityType")?.ToString();

                _logger.LogWarning(
                    "Activity Published | Type={Type}",
                    activityType);

                if (activityType != "Assessment Submitted")
                    continue;

                var lead = _contentService.GetById(content.ParentId);

                if (lead == null)
                {
                    _logger.LogWarning(
                        "Parent Lead not found");
                    continue;
                }

                lead.SetValue(
                    "leadStatus",
                    "[\"Assessment Submitted\"]");

                _contentService.SaveAndPublish(lead);

                _logger.LogWarning(
                    "Lead {Id} updated to Assessment Submitted",
                    lead.Id);
            }
        }
    }
}