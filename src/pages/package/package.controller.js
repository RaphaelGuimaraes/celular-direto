(function () {
    'use strict';

    angular.module('cd.app.package')
        .controller('PackageController', PackageController);

    /* @ngInject */
    function PackageController ($location, PackageService, StepsService) {
        var $ctrl = this;

        $ctrl.packages;
        $ctrl.selectPackage = selectPackage;
        $ctrl.selectedPlatform = JSON.parse(localStorage.getItem('selectedPlatform'));

        if (StepsService.currentStep < StepsService.PACKAGE) {
            $location.path('/platform');
        } else {
            _init();
        }

        function _init () {
            return PackageService.getPackages()
                .then(_onSuccess)
                .catch(_onError);

            function _onSuccess (data) {
                $ctrl.packages = data;
            };

            function _onError (error) {
                console.error(error);
            };
        };

        function selectPackage (data) {
            localStorage.setItem('selectedPackage', JSON.stringify(data));
            StepsService.setStep(StepsService.REGISTER);
            $location.path('/register');
        };
    };

})();
