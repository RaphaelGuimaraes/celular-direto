(function () {
    'use strict';

    angular.module('cd.app.platform')
        .controller('PlatformController', PlatformController);

    /* @ngInject */
    function PlatformController ($location, PlatformService, FormStepsService) {
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
            FormStepsService.setStep(FormStepsService.PACKAGE);
            console.log(FormStepsService.getStep());
            $location.path('/package');
        };

    };

})();