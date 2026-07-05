using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.ContentEditing;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;

namespace TestUmbPro.ContentApps
{
    public class LeadAuditTrailContentApp : IContentAppFactory
    {
        public ContentApp? GetContentAppFor(object source, IEnumerable<IReadOnlyUserGroup> userGroups)
        {
            if (source is IContent content)
            {
                if (content.ContentType.Alias == "lead")
                {
                    return new ContentApp
                    {
                        Alias = "leadAuditTrail",
                        Name = "Audit Trail",
                        Icon = "icon-time",
                        View = "/App_Plugins/CrmAudit/audit.html",
                        Weight = 100
                    };
                }
            }

            return null;
        }
    }
}
