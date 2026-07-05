using Microsoft.Extensions.Logging;
using System;
using TestUmbPro.Helpers;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Notifications
{
    public class LeadAuditHandler : INotificationHandler<ContentSavedNotification>
    {
        private readonly IContentService _contentService;
        private readonly IUserService _userService;
        private readonly ILogger<LeadAuditHandler> _logger;

        public LeadAuditHandler(
            IContentService contentService,
            IUserService userService,
            ILogger<LeadAuditHandler> logger)
        {
            _contentService = contentService;
            _userService = userService;
            _logger = logger;
        }

        public void Handle(ContentSavedNotification notification)
        {
            foreach (var content in notification.SavedEntities)
            {
                try
                {
                    if (content == null)
                        continue;

                    if (!string.Equals(
                        content.ContentType.Alias,
                        "lead",
                        StringComparison.OrdinalIgnoreCase))
                    {
                        continue;
                    }

                    if (!LeadStatusStore.OldStatuses.TryGetValue(
                        content.Id,
                        out var oldStatus))
                    {
                        continue;
                    }

                    var newStatus =
                        content.GetValue("leadStatus")?.ToString() ?? "";

                    _logger.LogInformation(
                        "Lead {LeadId}: Old={OldStatus}, New={NewStatus}",
                        content.Id,
                        oldStatus,
                        newStatus);

                    if (string.Equals(
                        oldStatus,
                        newStatus,
                        StringComparison.OrdinalIgnoreCase))
                    {
                        LeadStatusStore.OldStatuses.TryRemove(
                            content.Id,
                            out _);

                        continue;
                    }

                    var user =
                        _userService.GetUserById(content.WriterId);

                    var userId = user?.Id ?? 0;
                    var userName = user?.Name ?? "System";

                    var audit = _contentService.Create(
                        $"Audit-{DateTime.Now:yyyyMMddHHmmss}",
                        content.Id,
                        "leadAuditTrail");

                    if (audit == null)
                    {
                        _logger.LogError(
                            "Failed to create audit node.");

                        continue;
                    }

                    audit.SetValue("oldStatus", oldStatus);
                    audit.SetValue("newStatus", newStatus);
                    audit.SetValue("changedBy", userId);
                    audit.SetValue("timeStamp", DateTime.Now);

                    audit.SetValue(
                        "details",
                        $"Lead status changed from '{oldStatus}' to '{newStatus}' by '{userName}'");

                    var result =
                        _contentService.SaveAndPublish(audit);

                    if (!result.Success)
                    {
                        _logger.LogError(
                            "Failed to save audit node for Lead {LeadId}",
                            content.Id);
                    }
                    else
                    {
                        _logger.LogInformation(
                            "Audit created successfully for Lead {LeadId}",
                            content.Id);
                    }

                  //  LeadStatusStore.OldStatuses.TryRemove(
                   //     content.Id,
                    //    out _);
                }
                catch (Exception ex)
                {
                    _logger.LogError(
                        ex,
                        "Error creating Lead audit trail");
                }
            }
        }
    }
}