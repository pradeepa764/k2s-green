angular.module("umbraco")
    .controller("CrmAuditController", function ($http, editorState) {

        console.log("CrmAuditController loaded");

        var vm = this;

        vm.audits = [];

        var leadId = editorState.current.id;

        if (!leadId)
            return;

        // =========================
        // LOAD AUDITS
        // =========================

        vm.loadAudits = function () {

            $http.get("/api/leads/" + leadId + "/audits")
                .then(function (response) {

                    vm.audits = response.data;

                    console.log("Audits loaded", vm.audits);
                })
                .catch(function (error) {

                    console.error("Audit load error", error);
                });
        };

        // =========================
        // CREATE AUDIT MANUALLY
        // =========================

        vm.createAudit = function () {

            $http.post("/api/leads/" + leadId + "/create-audit")
                .then(function (response) {

                    console.log("Audit created");

                    // reload audit list
                    vm.loadAudits();
                })
                .catch(function (error) {

                    console.error("Audit create error", error);
                });
        };

        // INITIAL LOAD
        vm.loadAudits();
    });