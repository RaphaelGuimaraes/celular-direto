(function () {
    'use strict';
    
    angular.module('cd.app.formSteps')
        .factory('FormStepsService', FormStepsService);

    function FormStepsService() {
        var service = {
            PLATFORM: 0,
            PACKAGE: 1,
            REGISTER: 2,
            getStep: getStep,
            setStep: setStep,
            currentStep: 0
        };

        return service;

        function getStep () {
            return service.currentStep;
        }

        function setStep(stepNumber) {
            service.currentStep = stepNumber;
        };
    };

})();