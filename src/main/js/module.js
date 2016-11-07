/**
 * @author Ruslan Lazin
 */
var app = angular.module('texas', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/register', {template: '<registration></registration>'})
        .when('/login', {template: '<pass>'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);


});
