(function () {
    'use strict';

    // Declaring route per module
    angular.module('cd.app.registerForm')
        .config(RegisterFormRoute);

    /* @ngInject */
    function RegisterFormRoute ($routeProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'pages/register-form/register-form.template.html',
                controller: 'RegisterFormController as rgf'
            });
    };

})();
