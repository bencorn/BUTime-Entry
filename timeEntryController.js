(function () {

    "use strict";

    // Retrieving inventory module
    angular.module("time-entry")
        .controller("timeEntryController", timeEntryController);

    // code for controller itself
    function timeEntryController($http) {

        var vm = this;

        vm.newUser = {};

        vm.Text = "ghjewkfh";

        vm.addUser = function () {
            $http.post("api/users", vm.newUser)
                .then(function () {
                    vm.newUser = {};
                },
                    function () {

                    })
                .finally(function () {

                });
        }

    }

})();