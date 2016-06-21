'use strict';

angular.module('myApp')
    .factory('changelistFactory', function ($http) {
        var factory = {};
        factory.load = function () {
            return $http.get('api/changelist.json').then(function (payload) {
                return payload.data;
            });
        };
        return factory;
    });