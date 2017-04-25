(function () {
    'use strict';

    angular.module('cd.app', [
        /* Angular modules */
        'ngRoute',
        'ngMaterial',
        /* Shared modules */
        'cd.app.platform',
        'cd.app.package',
        'cd.app.registerForm',
        /* Shared components */
        'cd.app.steps'
    ])
        .config(appConfig);

    /* @ngInject */
    function appConfig ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        
        $routeProvider
            .otherwise({ redirectTo: '/platform' });
    };

})();