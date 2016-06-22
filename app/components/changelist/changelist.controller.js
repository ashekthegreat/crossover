'use strict';

angular.module('myApp')
    .controller('ChangelistController', ["$scope", "changelistFactory", function ($scope, changelistFactory) {
        $scope.changelist = [];
        $scope.active = false;

        $scope.loadData = function () {

            changelistFactory.load()
                .then(function (data) {
                    $scope.changelist = data;
                });
        };

        $scope.isExpandable = function (item) {
            return ((item.metrics.value + item.build.value + item.unitTest.value + item.functionalTest.value) == 400);
        };
        
        $scope.expandItem = function (item) {
            if ($scope.active == item.id) {
                // it's already expanded. Lets collapse it
                $scope.active = false;
            } else if ($scope.isExpandable(item)) {
                $scope.active = item.id;
            }
        };

        $scope.loadData();
    }]);