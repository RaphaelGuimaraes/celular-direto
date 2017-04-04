/**
 * Created by klaus on 04/04/17.
 */
'use strict';

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
}

function FormStepsController ($scope, $element, $attrs) {
    var ctrl = this;

    this.steps = [
        new Step('Plataformas', 'platform')
    ];
}

angular.module('myApp')

    .component('formSteps', {
        transclude: true,
        templateUrl: 'components/form-steps/form-steps.html',
        controller: FormStepsController ,
        bindings: {
            platforms: '<'
        }
    });