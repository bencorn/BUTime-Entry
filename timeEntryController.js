(function () {

    "use strict";

    // Retrieving inventory module
    angular.module("time-entry")
        .controller("timeEntryController", timeEntryController);

    // code for controller itself
    function timeEntryController($http) {

        chrome.storage.sync.get(null, function (obj) {

            var response = obj;

            vm.Monday = response.Monday;
            vm.Tuesday = response.Tuesday;
            vm.Wednesday = response.Wednesday;
            vm.Thursday = response.Thursday;
            vm.Friday = response.Friday;

            $('.MB1')
                .dropdown('set exactly', vm.Monday.Begin1)
            ;
            $('.MB2')
                .dropdown('set exactly', vm.Monday.Begin2)
            ;
            $('.MB3')
                .dropdown('set exactly', vm.Monday.Begin3)
            ;
            $('.ME1')
                .dropdown('set exactly', vm.Monday.End1)
            ;
            $('.ME2')
                .dropdown('set exactly', vm.Monday.End2)
            ;
            $('.ME3')
                .dropdown('set exactly', vm.Monday.End3)
            ;

            $('.TB1')
                .dropdown('set exactly', vm.Tuesday.Begin1)
            ;
            $('.TB2')
                .dropdown('set exactly', vm.Tuesday.Begin2)
            ;
            $('.TB3')
                .dropdown('set exactly', vm.Tuesday.Begin3)
            ;
            $('.TE1')
                .dropdown('set exactly', vm.Tuesday.End1)
            ;
            $('.TE2')
                .dropdown('set exactly', vm.Tuesday.End2)
            ;
            $('.TE3')
                .dropdown('set exactly', vm.Tuesday.End3)
            ;

            $('.WB1')
                .dropdown('set exactly', vm.Wednesday.Begin1)
            ;
            $('.WB2')
                .dropdown('set exactly', vm.Wednesday.Begin2)
            ;
            $('.WB3')
                .dropdown('set exactly', vm.Wednesday.Begin3)
            ;
            $('.WE1')
                .dropdown('set exactly', vm.Wednesday.End1)
            ;
            $('.WE2')
                .dropdown('set exactly', vm.Wednesday.End2)
            ;
            $('.WE3')
                .dropdown('set exactly', vm.Wednesday.End3)
            ;

            $('.THB1')
                .dropdown('set exactly', vm.Thursday.Begin1)
            ;
            $('.THB2')
                .dropdown('set exactly', vm.Thursday.Begin2)
            ;
            $('.THB3')
                .dropdown('set exactly', vm.Thursday.Begin3)
            ;
            $('.THE1')
                .dropdown('set exactly', vm.Thursday.End1)
            ;
            $('.THE2')
                .dropdown('set exactly', vm.Thursday.End2)
            ;
            $('.THE3')
                .dropdown('set exactly', vm.Thursday.End3)
            ;

            $('.FB1')
                .dropdown('set exactly', vm.Friday.Begin1)
            ;
            $('.FB2')
                .dropdown('set exactly', vm.Friday.Begin2)
            ;
            $('.FB3')
                .dropdown('set exactly', vm.Friday.Begin3)
            ;
            $('.FE1')
                .dropdown('set exactly', vm.Friday.End1)
            ;
            $('.FE2')
                .dropdown('set exactly', vm.Friday.End2)
            ;
            $('.FE3')
                .dropdown('set exactly', vm.Friday.End3)
            ;

        });

        var vm = this;
        vm.Response = "";

        vm.save_options = function () {
            vm.Response = "Changes saved successfully.";
            chrome.storage.sync.set({
                "Monday": vm.Monday,
                "Tuesday": vm.Tuesday,
                "Wednesday": vm.Wednesday,
                "Thursday": vm.Thursday,
                "Friday": vm.Friday
            }, function () {
                
            });
        };

        vm.load_options = function () {
            vm.Response = "Changes applied successfully."
            chrome.tabs.executeScript({
                file: "background.js"
            });
        };

        vm.show_help = function () {
            $('.ui.modal')
                .modal('show')
            ;
        };

    }

})();