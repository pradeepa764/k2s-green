using Umbraco.Cms.Core;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Notifications
{
    public class ProposalAutoFillHandler : INotificationHandler<ContentSavingNotification>
    {
        private readonly IContentService _contentService;

        public ProposalAutoFillHandler(IContentService contentService)
        {
            _contentService = contentService;
        }

        public void Handle(ContentSavingNotification notification)
        {
            foreach (var content in notification.SavedEntities)
            {
                if (content.ContentType.Alias != "commercialProposal")
                    continue;

                // Run only if empty (new proposal)
                if (!content.HasProperty("businessName") ||
                    !string.IsNullOrWhiteSpace(content.GetValue("businessName")?.ToString()))
                    continue;

                var relatedLeadValue = content.GetValue("relatedLead");

                if (relatedLeadValue == null)
                    continue;

                Udi? udi = null;

                if (relatedLeadValue is Udi directUdi)
                {
                    udi = directUdi;
                }
                else
                {
                    var strValue = relatedLeadValue.ToString();

                    if (string.IsNullOrEmpty(strValue))
                        continue;

                    if (strValue.StartsWith("["))
                    {
                        var json = System.Text.Json.JsonDocument.Parse(strValue);

                        if (json.RootElement.GetArrayLength() > 0 &&
                            json.RootElement[0].TryGetProperty("udi", out var udiProp))
                        {
                            var udiString = udiProp.GetString();

                            if (!string.IsNullOrEmpty(udiString))
                                udi = UdiParser.Parse(udiString);
                        }
                    }
                    else
                    {
                        udi = UdiParser.Parse(strValue);
                    }
                }

                if (udi is not GuidUdi guidUdi)
                    continue;

                var lead = _contentService.GetById(guidUdi.Guid);

                if (lead == null)
                    continue;

                // Autofill fields
                content.SetValue("businessName", lead.GetValue("businessName")?.ToString());
                content.SetValue("googleMapUrl", lead.GetValue("googleMapUrl")?.ToString());
                content.SetValue("locationAddress", lead.GetValue("locationAddress")?.ToString());

             
            }
        }
    }
}