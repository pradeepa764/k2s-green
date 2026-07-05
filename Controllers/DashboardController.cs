using Microsoft.AspNetCore.Mvc;
using TestUmbPro.Services;

namespace TestUmbPro.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly DashboardService _dashboardService;

        public DashboardController(
            DashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }

        [HttpGet("getdashboarddata")]
        public IActionResult GetDashboardData()
        {
            var data = _dashboardService.GetDashboardData();

            return Ok(data);
        }
    }
}