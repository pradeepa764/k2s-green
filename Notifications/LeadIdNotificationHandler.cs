using System;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace TestUmbPro.Notifications
{
    public class LeadIdNotificationHandler
        : INotificationHandler<ContentSavingNotification>
    {
        public void Handle(ContentSavingNotification notification)
        {
            foreach (var content in notification.SavedEntities)
            {
                // Only for Lead document type
                if (content.ContentType.Alias != "lead")
                    continue;

                var companyIdAlias = "companyId";

                // Read existing value (IContent way)
                var existingValue = content.GetValue(companyIdAlias);

                // Generate ONLY if empty
                if (existingValue != null &&
                    !string.IsNullOrWhiteSpace(existingValue.ToString()))
                {
                    continue;
                }

                var year = DateTime.Now.Year;
                var uniqueNumber = DateTime.Now.Ticks.ToString().Substring(10);

                var generatedId = $"K2S-LEAD-{year}-{uniqueNumber}";

                content.SetValue(companyIdAlias, generatedId);
            }
        }
    }
}
