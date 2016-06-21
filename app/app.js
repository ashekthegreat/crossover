'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}])
    .config([
        '$routeProvider',
        function ($routes) {
            $routes.when('/', {
                templateUrl: 'components/changelist/changelist.html',
                controller: 'ChangelistController'
            });
            $routes.otherwise({
                redirectTo: '/'
            });
        }
    ]);
