'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngMaterial',
    'myApp.platform',
    'myApp.package',
    'myApp.registerForm',
    'myApp.version',
    'myApp.field',
    'myApp.formSteps'
])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/platform', {
                templateUrl: 'platform/platform.html',
                controller: 'PlatformCtrl'
            })
            .when('/package', {
                templateUrl: 'package/package.html',
                controller: 'PackageCtrl'
            })
            .when('/register', {
                templateUrl: 'register-form/register-form.html',
                controller: 'RegisterFormCtrl'
            })
            .otherwise({redirectTo: '/platform'});
    }]);
