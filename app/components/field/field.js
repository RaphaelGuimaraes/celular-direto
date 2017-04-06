'use strict';

function FieldController ($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.$onInit = function () {
        if (!ctrl.type) {
            ctrl.type = 'text';
        }

        if (!ctrl.placeholder) {
            ctrl.placeholder = ctrl.label ? ctrl.label : '';
        }
    };
}

angular.module('myApp.field', [])

    .component('field', {
        transclude: true,
        templateUrl: 'components/field/field.html',
        controller: FieldController,
        bindings: {
            label: '@?',
            placeholder: '@?',
            maxlength: '@?',
            type: '@?',
            value: '='
        }
    });