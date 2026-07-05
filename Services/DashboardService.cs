using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Persistence.Querying;
using Umbraco.Cms.Core.Services;
using Microsoft.Extensions.Logging;

namespace TestUmbPro.Services
{
    public class DashboardService
    {
        private readonly IContentService _contentService;
        private readonly IContentTypeService _contentTypeService;
        private readonly ILogger<DashboardService> _logger;

        public DashboardService(
    IContentService contentService,
    IContentTypeService contentTypeService,
    ILogger<DashboardService> logger)
        {
            _contentService = contentService;
            _contentTypeService = contentTypeService;
            _logger = logger;
        }
        private string CleanStatus(string status)
        {
            return status?
                .Replace("[", "")
                .Replace("]", "")
                .Replace("\"", "")
                .Trim() ?? "";
        }

        public DashboardData GetDashboardData()
        {
            var dashboard = new DashboardData();

            IQuery<IContent>? filter = null;
            Ordering? ordering = null;

            // =====================================
            // LEADS
            // =====================================

            var leadType = _contentTypeService.Get("lead");

            if (leadType != null)
            {
                var leads = _contentService.GetPagedOfType(
                    leadType.Id,
                    0,
                    1000,
                    out long totalLeads,
                    filter,
                    ordering
                )
                .Where(x => !x.Trashed && x.Published)
                .ToList();
                System.Diagnostics.Debug.WriteLine($"Total Leads Loaded = {leads.Count}");

                // DEBUG ONLY
                foreach (var lead in leads)
                {
                    var source = lead.GetValue<string>("leadSource");
                    var status = lead.GetValue<string>("leadStatus");

                    Console.WriteLine(
    $"Lead={lead.Name}, Source='{source}', Status='{status}'");
                }
                // =====================================
                // KPI COUNTS
                // =====================================

                // =====================================
                // KPI COUNTS
                // =====================================

                dashboard.TotalLeads = leads.Count;

                dashboard.ProposalSent = leads.Count(x =>
                {
                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return status.Equals(
                        "Proposal Sent",
                        StringComparison.OrdinalIgnoreCase);
                });

                dashboard.SoldLeads = leads.Count(x =>
                {
                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return status.Contains(
                        "Proposal Accepted",
                        StringComparison.OrdinalIgnoreCase);
                });
                dashboard.WebsiteLeads = leads.Count(x =>
{
    var source = CleanStatus(
        x.GetValue<string>("leadSource"));

    return source.Equals(
        "Website",
        StringComparison.OrdinalIgnoreCase);
});

                dashboard.ManualLeads = leads.Count(x =>
                {
                    var source = CleanStatus(
                        x.GetValue<string>("leadSource"));

                    return source.Equals(
                        "Manual",
                        StringComparison.OrdinalIgnoreCase);
                });

                dashboard.WebsiteProposalSent = leads.Count(x =>
                {
                    var source = CleanStatus(
                        x.GetValue<string>("leadSource"));

                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return source.Equals("Website",
                        StringComparison.OrdinalIgnoreCase)
                        &&
                        status.Equals("Proposal Sent",
                        StringComparison.OrdinalIgnoreCase);
                });

                dashboard.WebsiteConverted = leads.Count(x =>
                {
                    var source = CleanStatus(
                        x.GetValue<string>("leadSource"));

                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return source.Equals("Website",
                        StringComparison.OrdinalIgnoreCase)
                        &&
                        status.Contains("Proposal Accepted",
                        StringComparison.OrdinalIgnoreCase);
                });




                // =====================================
                // PIPELINE COUNTS
                // =====================================

                dashboard.NewLeads = leads.Count(x =>
                {
                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return status.Equals(
                        "New Lead",
                        StringComparison.OrdinalIgnoreCase);
                });

                dashboard.AssessmentInProgress = leads.Count(x =>
                {
                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return status.Equals(
                        "Assessment Submitted",
                        StringComparison.OrdinalIgnoreCase);
                });

                dashboard.QualifiedLeads = leads.Count(x =>
                {
                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return status.Equals(
                        "Qualified",
                        StringComparison.OrdinalIgnoreCase);
                });

                dashboard.ProposalStage = leads.Count(x =>
                {
                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return status.Equals(
                        "Under Sales Review",
                        StringComparison.OrdinalIgnoreCase)
                        ||
                        status.Equals(
                        "Proposal Sent",
                        StringComparison.OrdinalIgnoreCase);
                });

                dashboard.SoldStage = leads.Count(x =>
                {
                    var status = CleanStatus(
                        x.GetValue<string>("leadStatus"));

                    return status.Contains(
                        "Proposal Accepted",
                        StringComparison.OrdinalIgnoreCase);
                });
                // =====================================
                // RECENT LEADS
                // =====================================

                dashboard.RecentLeads = leads
     .OrderByDescending(x => x.CreateDate)
     .Take(5)
     .Select(x => new LeadItem
     {
         Id = x.Id,
         Name = x.Name,
         Status = CleanStatus(
             x.GetValue<string>("leadStatus")),
         CreateDate = x.CreateDate
     })
     .ToList();
            }

            // =====================================
            // PROPOSALS
            // =====================================

            var proposalType = _contentTypeService.Get("commercialProposal");

            if (proposalType != null)
            {
                var proposals = _contentService.GetPagedOfType(
                    proposalType.Id,
                    0,
                    1000,
                    out long totalProposals,
                    filter,
                    ordering
                )
                .Where(x => !x.Trashed)
                .ToList();

                // =====================================
                // DRAFT PROPOSALS
                // =====================================

                dashboard.DraftProposals = proposals.Count(x =>
                    string.Equals(
                        x.GetValue<string>("proposalStatus"),
                        "Draft",
                        StringComparison.OrdinalIgnoreCase
                    ));

                // =====================================
                // RECENT PROPOSALS
                // =====================================

                dashboard.RecentProposals = proposals
                    .OrderByDescending(x => x.CreateDate)
                    .Take(5)
                    .Select(x => new ProposalItem
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Status = x.GetValue<string>("proposalStatus")
            ?.Replace("[", "")
            .Replace("]", "")
            .Replace("\"", ""),
                        CreateDate = x.CreateDate
                    })
                    .ToList();
            }

            // =====================================
            // ASSESSMENTS
            // =====================================

            var assessmentType = _contentTypeService.Get("assessment");

            if (assessmentType != null)
            {
                var assessments = _contentService.GetPagedOfType(
                    assessmentType.Id,
                    0,
                    1000,
                    out long totalAssessments,
                    filter,
                    ordering
                )
                .Where(x => !x.Trashed)
                .ToList();

                // =====================================
                // PENDING ASSESSMENTS
                // =====================================

                dashboard.PendingAssessments = assessments.Count(x =>
                {
                    var status = x.GetValue<string>("assessmentStatus");

                    return !string.IsNullOrWhiteSpace(status)
                           &&
                           (
                               status.Contains(
                                   "Assigned",
                                   StringComparison.OrdinalIgnoreCase)
                               ||
                               status.Contains(
                                   "In Progress",
                                   StringComparison.OrdinalIgnoreCase)
                           );
                });

                // =====================================
                // RECENT ASSESSMENTS
                // =====================================

                dashboard.RecentAssessments = assessments
                    .OrderByDescending(x => x.CreateDate)
                    .Take(5)
                    .Select(x => new AssessmentItem
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Status = x.GetValue<string>("assessmentStatus")
    ?.Replace("[", "")
    .Replace("]", "")
    .Replace("\"", ""),
                        CreateDate = x.CreateDate
                    })
                    .ToList();
            }
            // =====================================
            // CHART DATA
            // =====================================

            dashboard.ChartLabels = new List<string>
{
                "Total Leads",
    "New Lead",
    "Assessment",
    "Qualified",
    "Proposal",
    "Sold"
};

            dashboard.ChartValues = new List<int>
{
                dashboard.TotalLeads,
    dashboard.NewLeads,
    dashboard.AssessmentInProgress,
    dashboard.QualifiedLeads,
    dashboard.ProposalStage,
    dashboard.SoldStage
};
            // =====================================
            // FOLLOW UPS
            // =====================================

            var followUpType = _contentTypeService.Get("followUp");

            if (followUpType != null)
            {
                var followUps = _contentService.GetPagedOfType(
                    followUpType.Id,
                    0,
                    1000,
                    out long totalFollowUps,
                    filter,
                    ordering)
                    .Where(x => !x.Trashed && x.Published)
                    .ToList();

                dashboard.RecentFollowUps = followUps
                    .OrderByDescending(x => x.CreateDate)
                    .Take(10)
                    .Select(x =>
                    {
                        var followUpFolder = _contentService.GetById(x.ParentId);
                        var lead = followUpFolder != null
                            ? _contentService.GetById(followUpFolder.ParentId)
                            : null;
                        _logger.LogInformation("FollowUp: {Name}", x.Name);
                        _logger.LogInformation("FollowUp Id: {Id}", x.Id);
                        _logger.LogInformation("ParentId: {ParentId}", x.ParentId);


                        _logger.LogInformation("Lead: {Lead}", lead?.Name);

                        _logger.LogInformation("AssignedTo: {AssignedTo}", x.GetValue<string>("assignedTo"));
                        _logger.LogInformation("Status: {Status}", x.GetValue<string>("status"));
                        _logger.LogInformation("Type: {Type}", x.GetValue<string>("followUpType"));
                        _logger.LogInformation("Date: {Date}", x.GetValue<DateTime>("followUpDate"));
                        _logger.LogInformation("Folder: {Folder}", followUpFolder?.Name);
                        _logger.LogInformation("Lead: {Lead}", lead?.Name);
                        return new FollowUpItem
                        {
                            Id = x.Id,
                            LeadName = lead?.Name ?? "",
                            FollowUpDateTime = x.GetValue<DateTime>("followUpDate"),
                            Type = CleanStatus(x.GetValue<string>("followUpType")),
                            Status = CleanStatus(x.GetValue<string>("status")),
                            Notes = x.GetValue<string>("notes") ?? "",
                             AssignedTo = x.GetValue<string>("assignedTo") ?? ""
                        };
                    })
                    .ToList();
                dashboard.TotalFollowUps = followUps.Count();

                dashboard.PendingFollowUps = followUps.Count(x =>
                    CleanStatus(x.GetValue<string>("status"))
                        .Equals("Pending", StringComparison.OrdinalIgnoreCase));

                dashboard.CompletedFollowUps = followUps.Count(x =>
                    CleanStatus(x.GetValue<string>("status"))
                        .Equals("Completed", StringComparison.OrdinalIgnoreCase));
            }
            return dashboard;
        }
    }

    // =====================================
    // DASHBOARD DTO
    // =====================================

    public class DashboardData
    {
        // KPI CARDS

        public int TotalLeads { get; set; }

        public int ProposalSent { get; set; }

        public int SoldLeads { get; set; }

        public int DraftProposals { get; set; }

        public int PendingAssessments { get; set; }
        public List<string> ChartLabels { get; set; } = new();

        public List<int> ChartValues { get; set; } = new();



        // PIPELINE

        public int NewLeads { get; set; }

        public int AssessmentInProgress { get; set; }

        public int QualifiedLeads { get; set; }

        public int ProposalStage { get; set; }

        public int SoldStage { get; set; }

        //Website Source

        public int WebsiteLeads { get; set; }

        public int ManualLeads { get; set; }

        public int WebsiteProposalSent { get; set; }

        public int WebsiteConverted { get; set; }

        //Follow Up Kpi
        public int TotalFollowUps { get; set; }
        public int PendingFollowUps { get; set; }
        public int CompletedFollowUps { get; set; }

        // TABLES

        public List<LeadItem> RecentLeads { get; set; } = new();

        public List<ProposalItem> RecentProposals { get; set; } = new();

        public List<AssessmentItem> RecentAssessments { get; set; } = new();

        public List<FollowUpItem> RecentFollowUps { get; set; } = new();

    }

    // =====================================
    // LEAD MODEL
    // =====================================

    public class LeadItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Status { get; set; }

        public DateTime CreateDate { get; set; }
    }

    // =====================================
    // PROPOSAL MODEL
    // =====================================

    public class ProposalItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Status { get; set; }

        public DateTime CreateDate { get; set; }
    }

    // =====================================
    // ASSESSMENT MODEL
    // =====================================

    public class AssessmentItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Status { get; set; }

        public DateTime CreateDate { get; set; }
    }


    //=========================================
    // Follow Up Model
    //=========================================

    public class FollowUpItem
    {
        public int Id { get; set; }
        public string LeadName { get; set; }
        public DateTime FollowUpDateTime { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public string Notes { get; set; }

        public string AssignedTo { get; set; }

    }
}
