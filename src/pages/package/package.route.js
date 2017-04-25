(function () {
    'use strict';

    // Declaring route per module
    angular.module('cd.app.package')
        .config(PackageRoute);

    /* @ngInject */
    function PackageRoute ($routeProvider) {
        $routeProvider
            .when('/package', {
                templateUrl: 'pages/package/package.template.html',
                controller: 'PackageController as pck'
            });
    };

})();