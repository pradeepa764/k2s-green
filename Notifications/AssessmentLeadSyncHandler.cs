using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Notifications
{
    public class AssessmentLeadSyncHandler
        : INotificationHandler<ContentSavingNotification>
    {
        private readonly IContentService _contentService;

        public AssessmentLeadSyncHandler(IContentService contentService)
        {
            _contentService = contentService;
        }

        public void Handle(ContentSavingNotification notification)
        {
            foreach (var content in notification.SavedEntities)
            {
                // Only run for Assessment
                if (content.ContentType.Alias != "assessment")
                    continue;

                // Get linked lead UDI
                var leadValue = content.GetValue("linkedLead")?.ToString();
                if (string.IsNullOrWhiteSpace(leadValue))
                    continue;

                if (!UdiParser.TryParse(leadValue, out Udi udi))
                    continue;

                if (udi is not GuidUdi guidUdi)
                    continue;

                // Get Lead (latest data - draft + published)
                var lead = _contentService.GetById(guidUdi.Guid);
                if (lead == null)
                    continue;

                // Copy fields
                content.SetValue("companyId", lead.GetValue("companyId")?.ToString());
                content.SetValue("contactPersonName", lead.GetValue("contactPersonName")?.ToString());
                content.SetValue("locationAddress", lead.GetValue("locationAddress")?.ToString());

                // ✅ Google Map URL (Textstring)
                var mapUrl = lead.GetValue("googleMapUrl")?.ToString();

                if (!string.IsNullOrWhiteSpace(mapUrl))
                {
                    content.SetValue("googleMapUrl", mapUrl);
                }
            }
        }
    }
}