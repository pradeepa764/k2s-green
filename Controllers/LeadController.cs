using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using TestUmbPro.Services;

namespace TestUmbPro.Controllers
{
    [ApiController]
    [Route("api/leads")]
    public class LeadController : ControllerBase
    {
        private readonly AuditTrailService _auditService;

        public LeadController(AuditTrailService auditService)
        {
            _auditService = auditService;
        }

        [HttpGet("{leadId}/audits")]
        public IActionResult GetLeadAudits(int leadId)
        {
            var audits = _auditService.GetAuditNodes(leadId)
                .Select(a => new
                {
                    timestamp = a.GetValue<DateTime>("timeStamp"),
                    oldStatus = a.GetValue<string>("oldStatus"),
                    newStatus = a.GetValue<string>("newStatus"),
                    changedBy = a.GetValue<string>("changedBy"),
                    details = a.GetValue<string>("details")
                });

            return Ok(audits);
        }

     /*   [HttpPost("{leadId}/audit")]
        public IActionResult CreateAudit(int leadId)
        {
            _auditService.CreateLeadAuditNode(
                leadId,
                "Manual",
                "Manual",
                "Manual Audit",
                "Audit created manually",
                User?.Identity?.Name ?? "System"
            );

            return Ok();
        }*/
    }
}