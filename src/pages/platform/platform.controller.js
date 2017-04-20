(function () {
    'use strict';

    angular.module('cd.app')
        .controller('PlatformController', PlatformController);

    PlatformController.$inject = ['$location', 'PlatformService'];

    function PlatformController ($location, PlatformService) {
        var $ctrl = this;

        $ctrl.platforms;
        $ctrl.currentNavItem = 'platform';
        $ctrl.selectPlatform = selectPlatform;

        _init();

        function _init () {
            return PlatformService.getPlatforms()
                .then(_onSuccess)
                .catch(_onError);

            function _onSuccess (data) {
                $ctrl.platforms = data;
            };

            function _onError (error) {
                console.error(error);
            };
        };

        function selectPlatform (platform) {
            localStorage.setItem('selectedPlatform', JSON.stringify(platform));
            $location.path('/package');
        };
    }

})();