(function () {
    'use strict';

    // Declaring route per module
    angular.module('cd.app')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/platform', {
                    templateUrl: 'pages/platform/platform.template.html',
                    controller: 'PlatformController as ptf'
                });
        }]);
})();