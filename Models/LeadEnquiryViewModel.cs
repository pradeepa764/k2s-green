using System.ComponentModel.DataAnnotations;

namespace TestUmbPro.Models
{
    public class LeadEnquiryViewModel
    {
        [Required]
        public string BusinessName { get; set; }

        [Required]
        public string ContactPersonName { get; set; }

        [Required]
        public string ContactNumber { get; set; }

        [Required]
        public string BusinessIndustry { get; set; }

        [Required]
        public string LocationAddress { get; set; }

        [Url]
        public string GoogleMapUrl { get; set; }

        [Required]
        public string ExpectedPowerRequirement { get; set; }
    }

}