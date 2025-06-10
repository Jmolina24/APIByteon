'use strict';

/**
 * @ngdoc overview
 * @name GMI
 * @description
 * # GMI
 *
 * Main module of the application.
 */
angular
    .module('gmi', [
        'ui.router'
    ])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('gmi', {
            url: "/",
            abstract: true,
            template: '<ui-view/>'
        })
        
});