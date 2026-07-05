using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Services
{
    public class FollowUpService
    {
        private readonly IContentService _contentService;
        private readonly ILogger<FollowUpService> _logger;

        public FollowUpService(
            IContentService contentService,
            ILogger<FollowUpService> logger)
        {
            _contentService = contentService;
            _logger = logger;
        }

        public void CreateFollowUp(
            int leadId,
            DateTime followUpDate,
            string status,
            string type,
            string notes,
            string assignedTo)
        {
            try
            {
                var followUp = _contentService.Create(
                    $"Follow-up - {DateTime.Now:yyyyMMddHHmmss}",
                    leadId,
                    "followUp"); // Your Follow-up document type alias

                followUp.SetValue("followUpDate", followUpDate);
                followUp.SetValue("status", $"[\"{status}\"]");
                followUp.SetValue("followUpType", $"[\"{type}\"]");
                followUp.SetValue("notes", notes);
                followUp.SetValue("assignedTo", assignedTo);

                _contentService.SaveAndPublish(followUp);

                _logger.LogInformation(
                    "Follow-up created. Id={Id}, Lead={LeadId}",
                    followUp.Id,
                    leadId);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex,
                    "Failed to create Follow-up for Lead {LeadId}",
                    leadId);
            }
        }
    }
}