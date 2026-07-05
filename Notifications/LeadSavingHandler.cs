using Microsoft.Extensions.Logging;
using System;
using TestUmbPro.Helpers;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Notifications
{
    public class LeadSavingHandler : INotificationHandler<ContentSavingNotification>
    {
        private readonly IContentService _contentService;
        private readonly ILogger<LeadSavingHandler> _logger;

        public LeadSavingHandler(
            IContentService contentService,
            ILogger<LeadSavingHandler> logger)
        {
            _contentService = contentService;
            _logger = logger;
        }

        public void Handle(ContentSavingNotification notification)
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

                    if (!content.IsPropertyDirty("leadStatus"))
                    {
                        continue;
                    }

                    var existingLead = _contentService.GetById(content.Id);

                    if (existingLead == null)
                    {
                        continue;
                    }

                    var oldStatus = existingLead.GetValue("leadStatus")?.ToString() ?? "";
                    var newStatus = content.GetValue("leadStatus")?.ToString() ?? "";

                    _logger.LogWarning("===== Lead Status Debug =====");
                    _logger.LogWarning("Lead Id: {LeadId}", content.Id);
                    _logger.LogWarning("Old Status (Existing): {OldStatus}", oldStatus);
                    _logger.LogWarning("New Status (Current): {NewStatus}", newStatus);

                    LeadStatusStore.OldStatuses.AddOrUpdate(
                        content.Id,
                        oldStatus,
                        (k, v) => oldStatus);

                    _logger.LogWarning(
                        "Stored old status for Lead {LeadId}: {Status}",
                        content.Id,
                        oldStatus);
                }
                catch (Exception ex)
                {
                    _logger.LogError(
                        ex,
                        "Error in LeadSavingHandler");
                }
            }
        }
    }
}