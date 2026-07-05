using Microsoft.Extensions.Logging;
using TestUmbPro.Helpers;
using TestUmbPro.Services;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace TestUmbPro.Notifications
{
    public class ActivityCreationHandler
        : INotificationHandler<ContentPublishedNotification>
    {
        private readonly ActivityService _activityService;
        private readonly ILogger<ActivityCreationHandler> _logger;

        public ActivityCreationHandler(
            ActivityService activityService,
            ILogger<ActivityCreationHandler> logger)
        {
            _activityService = activityService;
            _logger = logger;
        }

        public void Handle(ContentPublishedNotification notification)
        {
            _logger.LogWarning(
    "🚀 ActivityCreationHandler STARTED");

            foreach (var content in notification.PublishedEntities)
            {
                if (content.ContentType.Alias != "lead")
                    continue;

                _logger.LogWarning(
                    "ActivityCreationHandler Triggered | LeadId={Id}",
                    content.Id);

                var leadStatus =
     content.GetValue("leadStatus")?.ToString() ?? "";



                _logger.LogWarning(
                    "Lead Status = {Status}",
                    leadStatus);

                if (string.IsNullOrWhiteSpace(leadStatus))
                    continue;

                var exists = LeadStatusStore.OldStatuses.TryGetValue(
    content.Id,
    out var oldStatus);

                _logger.LogWarning("Dictionary Contains Key = {Exists}", exists);
                _logger.LogWarning("Lead Id = {LeadId}", content.Id);
                _logger.LogWarning("Dictionary Old Status = {OldStatus}", oldStatus);

                oldStatus ??= "";

                _logger.LogWarning(
    "OLD Status = {OldStatus}",
    oldStatus);

                _logger.LogWarning(
                    "NEW Status = {NewStatus}",
                    leadStatus);



                if (oldStatus == leadStatus)
                {
                    _logger.LogWarning(
                        "No status change for Lead {Id}",
                        content.Id);

                    continue;
                }

                _logger.LogWarning(
                    "Status changed: {Old} -> {New}",
                    oldStatus,
                    leadStatus);

                oldStatus = (oldStatus ?? "")
    .Replace("[\"", "")
    .Replace("\"]", "");

                var activityType = leadStatus
                    .Replace("[\"", "")
                    .Replace("\"]", "");

                _activityService.CreateActivity(
                    content.Id,
                    activityType,
                    $"Lead status changed from {oldStatus} to {activityType}",
                    "System");

                _logger.LogWarning(
                    "Activity Created for Lead {LeadId}",
                    content.Id);
            }
        }
    }
}