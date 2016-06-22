angular.module('myApp').directive('testResult', function () {
    return {
        restrict: 'EA',
        scope: {
            test: '='
        },
        replace:true,
        templateUrl: 'components/common/test-result/test-result.html',
        //template: '<div google-chart chart="myChartObject" class="chart"></div>',
        link: function ($scope, $elm, $attr) {

            $scope.passedPercent = ($scope.test.passed * 100) / ($scope.test.passed + $scope.test.failed);
            
            $scope.myChartObject = {};
            $scope.myChartObject.type = "PieChart";
            $scope.myChartObject.data = {
                "cols": [
                    {id: "t", label: "Status", type: "string"},
                    {id: "s", label: "Count", type: "number"}
                ], "rows": [
                    {
                        c: [
                            {v: "Failed"},
                            {v: $scope.test.failed}
                        ]
                    },
                    {
                        c: [
                            {v: "Passed"},
                            {v: $scope.test.passed}
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
                },
                slices: [{color: '#f0ad4e'}, {color: '#5cb85c'}]
            }
            
        }
    };
});