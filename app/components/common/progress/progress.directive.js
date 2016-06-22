angular.module('myApp').directive('progress', function ($timeout) {
    return {
        restrict: 'EA',
        scope: {
            part: '='
        },
        replace: true,
        templateUrl: 'components/common/progress/progress.html',
        link: function ($scope, $elm, $attr) {
            console.log($scope.part);
        }
    };
});