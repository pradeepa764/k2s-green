using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace TestUmbPro.Notifications
{
    public class ProposalPublishHandler : INotificationHandler<ContentPublishingNotification>
    {
        public void Handle(ContentPublishingNotification notification)
        {
            foreach (var content in notification.PublishedEntities)
            {
                if (content.ContentType.Alias != "commercialProposal")
                    continue;

                var status = content.GetValue("proposalStatus")?.ToString();

                // Only change if still Draft
                if (string.IsNullOrEmpty(status) || status == "Draft")
                {
                    if (content.HasProperty("proposalStatus"))
                    {
                        content.SetValue("proposalStatus", "Proposal Sent");
                    }
                }
            }
        }
    }
}