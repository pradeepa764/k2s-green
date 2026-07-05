using System;
using TestUmbPro.Services;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

public class FollowUpHandler
    : INotificationHandler<ContentPublishingNotification>
{
    private readonly ActivityService _activityService;

    public FollowUpHandler(ActivityService activityService)
    {
        _activityService = activityService;
    }

    public void Handle(ContentPublishingNotification notification)
    {
        foreach (var content in notification.PublishedEntities)
        {
            if (content.ContentType.Alias != "followUp")
                continue;

            var status = content.GetValue<string>("status")
                ?.Replace("[", "")
                .Replace("]", "")
                .Replace("\"", "")
                .Trim();

            if (!string.Equals(status, "Completed", StringComparison.OrdinalIgnoreCase))
                continue;

            _activityService.CreateActivity(
                content.ParentId,
                "Follow-up Completed",
                content.GetValue<string>("notes") ?? "",
                "System");
        }
    }
}