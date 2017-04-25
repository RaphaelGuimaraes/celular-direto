(function () {
    'use strict';

    angular.module('cd.app.steps', [])
        .component('cdSteps', stepsConfig());

    function stepsConfig () {
        return {
            transclude: true,
            templateUrl: 'components/steps/steps.template.html',
            controller: StepsController
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

    function StepsController ($scope, $element, $attrs, $location) {
        var $ctrl = this;

        $ctrl.currentNavItem = $location.path().replace('/', '');

        $ctrl.steps = [
            new Step('Plataformas', 'platform'),
            new Step('Plano de dados', 'package'),
            new Step('Registro', 'register')
        ];
    };

})();