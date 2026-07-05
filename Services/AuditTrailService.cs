using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Services
{
    public class AuditTrailService
    {
        private readonly IContentService _contentService;

        public AuditTrailService(IContentService contentService)
        {
            _contentService = contentService;
        }

        public IEnumerable<IContent> GetAuditNodes(int leadId)
        {
            long total;

            var children =
                _contentService.GetPagedChildren(
                    leadId,
                    0,
                    int.MaxValue,
                    out total);

            return children
                .Where(x => x.ContentType.Alias == "leadAuditTrail")
                .OrderByDescending(x => x.GetValue<DateTime>("timeStamp"));
        }

        public void CreateLeadAuditNode(
            int leadId,
            string oldStatus,
            string newStatus,
          /*  string action, */
            int changedByUserId,
            string details)
        {
            var leadNode = _contentService.GetById(leadId);

            if (leadNode == null)
                return;

            string nodeName =
                $"Audit-{DateTime.Now:yyyyMMddHHmmss}";

            var auditNode =
                _contentService.Create(
                    nodeName,
                    leadId,
                    "leadAuditTrail");

            auditNode.SetValue("leadID", leadId);
          /*  auditNode.SetValue("action", action);*/
            auditNode.SetValue("oldStatus", oldStatus);
            auditNode.SetValue("newStatus", newStatus);
            auditNode.SetValue("changedBy", changedByUserId);
            auditNode.SetValue("details", details);
            auditNode.SetValue("timeStamp", DateTime.Now);

            _contentService.SaveAndPublish(auditNode);
        }
    }
}