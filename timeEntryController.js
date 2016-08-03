(function () {

    "use strict";

    // Retrieving inventory module
    angular.module("time-entry")
        .controller("timeEntryController", timeEntryController);

    // code for controller itself
    function timeEntryController($http) {

        var vm = this;

        vm.save_options = function() {
            chrome.storage.sync.set({
                Monday: vm.Monday,
                Tuesday: vm.Tuesday,
                Wednesday: vm.Wednesday,
                Thursday: vm.Thursday,
                Friday: vm.Friday
            }, function () {
                // Update status to let user know options were saved.
                alert(chrome.storage.get("Monday", function () {
                }));
                setTimeout(function () {
                    status.textContent = '';
                }, 750);
            });
        }

    }

})();