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
        });

        var vm = this;

        vm.save_options = function () {
            chrome.storage.sync.set({
                "Monday": vm.Monday,
                "Tuesday": vm.Tuesday,
                "Wednesday": vm.Wednesday,
                "Thursday": vm.Thursday,
                "Friday": vm.Friday
            }, function () {
                vm.Response = "Changes saved successfully."

                chrome.tabs.executeScript({
                    file: "background.js"
                });
            });
        }

    }

})();