using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TestUmbPro.ContentApps;
using TestUmbPro.Notifications;
using TestUmbPro.Notifications.New_folder;
using TestUmbPro.Services;
using Umbraco.Cms.Core;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Models.ContentEditing;
using Umbraco.Cms.Core.Notifications;


var builder = WebApplication.CreateBuilder(args); // ✅ THIS WAS MISSING

// =====================
// Umbraco Builder
// =====================
builder.Services.AddSingleton<AuditTrailService>();
builder.Services.AddScoped<DashboardService>();
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddScoped<IEmailTemplateService, EmailTemplateService>();
builder.Services.AddScoped<ActivityService>();
builder.Services.AddScoped<FollowUpService>();



builder.CreateUmbracoBuilder()

    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()


        // ---------------------
        // Notification handlers
        // ---------------------
      .AddNotificationHandler<ContentSavingNotification, LeadIdNotificationHandler>()
        .AddNotificationHandler<ContentSavingNotification, AssessmentLeadSyncHandler>()
        .AddNotificationHandler<ContentPublishingNotification, FinalPowerRequirementHandler>()

        .AddNotificationHandler<ContentPublishedNotification, AssessmentReportPublishedHandler>()
.AddNotificationHandler<ContentSavingNotification,AssessmentSavingHandler>()




        .AddNotificationHandler<ContentPublishingNotification, AssessmentSubmitHandler>()
        .AddNotificationHandler<ContentPublishingNotification, FinalPowerRequirementHandler>()
.AddNotificationHandler<ContentPublishingNotification, LeadActivityHandler>()
.AddNotificationHandler<ContentPublishingNotification, FollowUpHandler>()
     .AddNotificationHandler<ContentPublishedNotification,ActivityCreationHandler>()

            .AddNotificationHandler<ContentSavedNotification, LeadAuditHandler>()
                .AddNotificationHandler<ContentSavingNotification,LeadSavingHandler>() // 👈 ADD THIS

    .AddNotificationHandler<ContentSavingNotification, ProposalAutoFillHandler>() // 👈 ADD THIS
    .AddNotificationHandler<ContentPublishingNotification, ProposalPublishHandler>()
    .AddNotificationHandler<ContentPublishedNotification, ProposalToLeadStatusHandler>()


    .Build();
builder.Services.AddUnique<IContentAppFactory, LeadAuditTrailContentApp>();


var app = builder.Build();

// =====================
// Boot Umbraco
// =====================
await app.BootUmbracoAsync();

// =====================
// Middleware
// =====================
app.UseStaticFiles();

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseInstallerEndpoints();
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

// =====================
// Run App
// =====================
await app.RunAsync();
