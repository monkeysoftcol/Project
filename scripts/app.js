'use strict';

var module = angular.module('CampoLimpio', [
    'ngRoute',
    'CampoLimpio.controllers',
    'angularUtils.directives.dirPagination'
]);
module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});

        $routeProvider.when('/Anticipos', {templateUrl: 'partials/anticipos.html', controller: 'AnticiposCtrl'});
        $routeProvider.when('/MiConsolidado', {templateUrl: 'partials/consolidados.html', controller: 'ConsolidadosCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
