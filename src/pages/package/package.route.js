(function () {
    'use strict';

    // Declaring route per module
    angular.module('cd.app')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/package', {
                    templateUrl: 'pages/package/package.template.html',
                    controller: 'PackageController as pck'
                });
        }]);
})();