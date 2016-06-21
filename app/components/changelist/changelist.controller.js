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

        $scope.myChartObject = {};
        $scope.myChartObject.type = "PieChart";
        $scope.myChartObject.data = {
            "cols": [
                {id: "t", label: "Topping", type: "string"},
                {id: "s", label: "Slices", type: "number"}
            ], "rows": [
                {
                    c: [
                        {v: "Olives"},
                        {v: 31}
                    ]
                },
                {
                    c: [
                        {v: "Zucchini"},
                        {v: 18}
                    ]
                },
                {
                    c: [
                        {v: "Pepperoni"},
                        {v: 20}
                    ]
                }
            ]
        };
        $scope.myChartObject.options = {
            legend: 'none',
            enableInteractivity: false,
            backgroundColor: 'transparent',
            chartArea: {
                left: 0, top: 0, width: '100%', height: '100%'
            }
        }

    }]);