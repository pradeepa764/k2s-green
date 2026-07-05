using System.Linq;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Security;

namespace TestUmbPro.Notifications
{
    public class AssessmentSavingHandler
        : INotificationHandler<ContentSavingNotification>
    {
        private readonly IBackOfficeSecurityAccessor _security;

        public AssessmentSavingHandler(IBackOfficeSecurityAccessor security)
        {
            _security = security;
        }

        public void Handle(ContentSavingNotification notification)
        {
            var user = _security.BackOfficeSecurity?.CurrentUser;

            // ✅ Allow Administrator to bypass lock
            if (user != null && user.Groups.Any(g => g.Alias == "admin"))
                return;

            foreach (var content in notification.SavedEntities)
            {
                if (content.ContentType.Alias != "assessment")
                    continue;

                var isLocked = content.GetValue<bool>("assessmentLocked");

                if (isLocked)
                {
                    notification.CancelOperation(
                        new EventMessage(
                            "Locked",
                            "Assessment is locked and cannot be edited.",
                            EventMessageType.Error));
                }
            }
        }
    }
}
