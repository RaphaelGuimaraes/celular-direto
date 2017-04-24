(function () {
    'use strict';

    // Declaring route per module
    angular.module('cd.app.platform')
        .config(PlatformRoute);

    /* @ngInject */
    function PlatformRoute ($routeProvider) {
        $routeProvider
            .when('/platform', {
                templateUrl: 'pages/platform/platform.template.html',
                controller: 'PlatformController as ptf'
            });
    };

})();