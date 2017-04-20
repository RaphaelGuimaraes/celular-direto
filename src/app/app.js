(function () {
    'use strict';

    angular.module('cd.app', [
        'ngRoute',
        'ngMaterial'
    ])
        .config(appConfig);

    /* @ngInject */
    function appConfig ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        
        $routeProvider
            .otherwise({ redirectTo: '/platform' });
    };

})();