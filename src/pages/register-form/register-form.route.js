(function () {
    'use strict';

    // Declaring route per module
    angular.module('cd.app')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/register', {
                    templateUrl: 'pages/register-form/register-form.template.html',
                    controller: 'RegisterFormController as rgf'
                });
        }]);
})();
