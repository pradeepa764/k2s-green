using Microsoft.AspNetCore.Mvc;
using TestUmbPro.Models;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Cms.Web.Website.Controllers;

namespace TestUmbPro.Controllers
{
    public class LeadEnquiryController : SurfaceController
    {
        private readonly IContentService _contentService;
        private const int LeadsFolderId = 3556; // CRM → Leads folder

        public LeadEnquiryController(
            IUmbracoContextAccessor umbracoContextAccessor,
            IUmbracoDatabaseFactory databaseFactory,
            ServiceContext services,
            AppCaches appCaches,
            IProfilingLogger profilingLogger,
            IPublishedUrlProvider publishedUrlProvider,
            IContentService contentService)
            : base(
                umbracoContextAccessor,
                databaseFactory,
                services,
                appCaches,
                profilingLogger,
                publishedUrlProvider)
        {
            _contentService = contentService;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult SubmitLead(LeadEnquiryViewModel model)
        {
            if (!ModelState.IsValid)
            {
                TempData["Error"] = "Please fill all required fields.";
                return CurrentUmbracoPage();
            }

            // 1. Create Lead node in CRM
            var lead = _contentService.Create(
                model.BusinessName,
                LeadsFolderId,
                "lead" // your document type alias
            );

            /*   2. Map fields */
            lead.SetValue("businessName", model.BusinessName);
            lead.SetValue("contactPersonName", model.ContactPersonName);
            lead.SetValue("contactNumber", model.ContactNumber);
            lead.SetValue(
                "businessIndustry",
                $"[\"{model.BusinessIndustry}\"]");           
            lead.SetValue("locationAddress", model.LocationAddress);
            lead.SetValue("googleMapUrl", model.GoogleMapUrl);

            lead.SetValue(
                "expectedPowerRequirement",
                $"[\"{model.ExpectedPowerRequirement}\"]");

            lead.SetValue(
   "leadSource",
   "[\"Website\"]");

            

            lead.SetValue(
    "leadStatus",
    "[\"New Lead\"]");

            // ⭐ IMPORTANT: Default Lead Status for website submissions


           
            // 3. Save + Publish
            _contentService.SaveAndPublish(lead);

            // 4. Success message
            TempData["Success"] =
                $"Request submitted successfully for {model.BusinessName}";

            return RedirectToCurrentUmbracoPage();
        }
    }
}