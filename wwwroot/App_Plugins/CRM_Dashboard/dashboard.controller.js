angular.module("umbraco").controller(
    "crmDashboardController",
    function ($http, $timeout) {

        var vm = this;

        vm.loading = true;
        vm.data = {};
        vm.activeTab = "dashboard";
        vm.chartInstance = null;

        vm.setTab = function (tab) {

            vm.activeTab = tab;

            if (tab === "analytics") {

                $timeout(function () {

                    vm.renderCharts();

                }, 300);
            }
        };

        vm.loadDashboard = function () {

            $http.get("/api/dashboard/getdashboarddata")

                .then(function (response) {

                    vm.data = response.data;

                    $timeout(function () {

                        vm.renderCharts();

                    }, 500);
                })

                .catch(function (error) {

                    console.log(error);

                })

                .finally(function () {

                    vm.loading = false;

                });
        };

        vm.renderCharts = function () {

            if (typeof Chart === "undefined") {

                console.log("Chart.js not loaded");
                return;
            }

            // =========================================
            // DESTROY OLD CHARTS
            // =========================================

            if (vm.pieChart) {
                vm.pieChart.destroy();
            }

            if (vm.doughnutChart) {
                vm.doughnutChart.destroy();
            }

            if (vm.barChart) {
                vm.barChart.destroy();
            }

            // =========================================
            // PIE CHART
            // =========================================

            var pieCanvas = document.getElementById("leadPieChart");

            if (pieCanvas) {

                vm.pieChart = new Chart(pieCanvas, {

                    type: "pie",

                    data: {

                        labels: [
                            "New Leads",
                            "Assessment",
                            "Qualified",
                            "Proposal",
                            "Sold"
                        ],

                        datasets: [{
                            data: [
                                vm.data.newLeads || 0,
                                vm.data.assessmentInProgress || 0,
                                vm.data.qualifiedLeads || 0,
                                vm.data.proposalStage || 0,
                                vm.data.soldStage || 0
                            ],

                            backgroundColor: [
                                "#42A5F5",
                                "#FFA726",
                                "#66BB6A",
                                "#AB47BC",
                                "#26C6DA"
                            ]
                        }]
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }

            // =========================================
            // DOUGHNUT CHART
            // =========================================

            var doughnutCanvas = document.getElementById("proposalDoughnutChart");

            if (doughnutCanvas) {

                vm.doughnutChart = new Chart(doughnutCanvas, {

                    type: "doughnut",

                    data: {

                        labels: [
                            "Proposal Sent",
                            "Draft",
                            "Sold"
                        ],

                        datasets: [{
                            data: [
                                vm.data.proposalSent || 0,
                                vm.data.draftProposals || 0,
                                vm.data.soldLeads || 0
                            ],

                            backgroundColor: [
                                "#5C6BC0",
                                "#FF7043",
                                "#26A69A"
                            ]
                        }]
                    },

                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: "60%"
                    }
                });
            }

            // =========================================
            // BAR CHART
            // =========================================

            var barCanvas = document.getElementById("pipelineBarChart");

            if (barCanvas) {

                vm.barChart = new Chart(barCanvas, {

                    type: "bar",

                    data: {

                        labels: [
                            "Total Leads",
                            "New Lead",
                            "Assessment",
                            "Qualified",
                            "Proposal",
                            "Sold"
                        ],

                        datasets: [{
                            label: "Pipeline",

                            data: [
                                vm.data.totalLeads || 0,
                                vm.data.newLeads || 0,
                                vm.data.assessmentInProgress || 0,
                                vm.data.qualifiedLeads || 0,
                                vm.data.proposalStage || 0,
                                vm.data.soldStage || 0
                            ],

                            backgroundColor: [
                                "#1E88E5",
                                "#42A5F5",
                                "#FFA726",
                                "#66BB6A",
                                "#AB47BC",
                                "#26C6DA"
                            ],

                            borderRadius: 8
                        }]
                    },

                    options: {

                        responsive: true,
                        maintainAspectRatio: false,

                        plugins: {
                            legend: {
                                display: false
                            }
                        },

                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        };
        vm.loadDashboard();
    }
);