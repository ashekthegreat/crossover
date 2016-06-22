'use strict';

describe('ChangelistController', function () {
    beforeEach(module('myApp'));

    var $controller;

    // this item is expandable as all the steps are complete
    var expandableItem = {
        "id": 4,
        "metrics": {
            "value": 100
        },
        "build": {
            "value": 100
        },
        "unitTest": {
            "value": 100
        },
        "functionalTest": {
            "value": 100
        }
    };

    // this item is not expandable as the last item is not complete yet
    var nonExpandableItem = {
        "id": 5,
        "metrics": {
            "value": 100
        },
        "build": {
            "value": 100
        },
        "unitTest": {
            "value": 100
        },
        "functionalTest": {
            "value": 63
        }
    };

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.active', function () {
        it('should set as false by default', function () {
            var $scope = {};
            var controller = $controller('ChangelistController', {$scope: $scope});
            expect($scope.active).toEqual(false);
        });
    });

    describe('$scope.isExpandable', function () {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('ChangelistController', { $scope: $scope });
        });

        it('should return TRUE for completed item', function () {
            var ret = $scope.isExpandable(expandableItem)
            expect(ret).toEqual(true);
        });

        it('should return FALSE for running item', function () {
            var ret = $scope.isExpandable(nonExpandableItem)
            expect(ret).toEqual(false);
        });
    });

    describe('$scope.expandItem', function () {
        var $scope, controller;

        beforeEach(function() {
            $scope = {};
            controller = $controller('ChangelistController', { $scope: $scope });
        });

        it('should set active with item.id when active does not already has it and item is expandable', function () {
            $scope.active = 1;
            $scope.expandItem(expandableItem);
            expect($scope.active).toEqual(4);
        });

        it('should set clear out active for already expanded item', function () {
            $scope.active = 4;
            $scope.expandItem(expandableItem);
            expect($scope.active).toEqual(false);
        });

        it('should do nothing for non expandable item', function () {
            $scope.active = 2;
            $scope.expandItem(nonExpandableItem);
            expect($scope.active).toEqual(2);
        });


    });
});