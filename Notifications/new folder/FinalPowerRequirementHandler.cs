using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using System;
using System.Linq;
using Newtonsoft.Json.Linq;

namespace TestUmbPro.Notifications.New_folder
{
    public class FinalPowerRequirementHandler
        : INotificationHandler<ContentPublishingNotification>
    {
        public void Handle(ContentPublishingNotification notification)
        {
            foreach (var content in notification.PublishedEntities)
            {
                if (content.ContentType.Alias != "lead")
                    continue;

                string? expected = null;

                var rawExpected = content.GetValue("expectedPowerRequirement");

                if (rawExpected is JArray jArray)
                {
                    expected = jArray.FirstOrDefault()?.ToString();
                }
                else if (rawExpected is string str)
                {
                    expected = str;
                }

                expected = expected?
                    .Replace("[", "")
                    .Replace("]", "")
                    .Replace("\"", "")
                    .Trim();

                var custom =
                    content.GetValue<string>("customPowerRequirement")?.Trim();

                string? finalValue =
                    !string.IsNullOrWhiteSpace(expected) &&
                    !string.Equals(expected, "Other", StringComparison.OrdinalIgnoreCase)
                        ? expected
                        : custom;

                content.SetValue("finalPowerRequirement", finalValue);
            }
        }
    }
}
