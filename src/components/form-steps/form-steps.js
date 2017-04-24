(function () {
    'use strict';

    angular.module('cd.app.formSteps', [])
        .component('cdFormSteps', formStepsConfig());

    function formStepsConfig () {
        return {
            transclude: true,
            templateUrl: 'components/form-steps/form-steps.html',
            controller: FormStepsController
        };
    };

    function Step (title, route) {
        this.init = function (title, route) {
            this.title = title;
            this.setRoute(route);
        };

        this.setRoute = function (route) {
            this.route = route;
        };

        this.getRoute = function () {
            return '#/' + this.route;
        };

        this.init(title, route);
    };

    function FormStepsController ($scope, $element, $attrs, $location, FormStepsService) {
        var $ctrl = this;

        $ctrl.currentNavItem = $location.path().replace('/', '');

        $ctrl.steps = [
            new Step('Plataformas', 'platform'),
            new Step('Plano de dados', 'package'),
            new Step('Registro', 'register')
        ];
    };

})();