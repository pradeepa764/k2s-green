using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Services;

namespace TestUmbPro.Services
{
    public class ActivityService
    {
        private readonly IContentService _contentService;
        private readonly ILogger<ActivityService> _logger;

        public ActivityService(
            IContentService contentService,
            ILogger<ActivityService> logger)
        {
            _contentService = contentService;
            _logger = logger;
        }

        public void CreateActivity(
            int leadId,
            string type,
            string notes,
            string userName)
        {
            try
            {
                var activity = _contentService.Create(
                    $"Activity - {DateTime.Now:yyyyMMddHHmmss}",
                    leadId,
                    "leadActivity");
                activity.SetValue(
                    "activityType",
                    $"[\"{type}\"]");
                activity.SetValue("activityDate", DateTime.Now);
                activity.SetValue("activityNotes", notes);
                activity.SetValue("performedBy", userName);

                _contentService.SaveAndPublish(activity);

                _logger.LogWarning(
                    "✅ Activity Created | ActivityId={ActivityId} | LeadId={LeadId}",
                    activity.Id,
                    leadId);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex,
                    "Failed to create activity for Lead {LeadId}",
                    leadId);
            }
        }
    }
}