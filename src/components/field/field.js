(function () {

    'use strict';

    angular.module('cd.app.field', [])
        .component('cdField', fieldConfig());

    function FieldController ($scope, $element, $attrs) {
        var $ctrl = this;

        $ctrl.onInit = onInit;

        function onInit () {
            if (!$ctrl.type) {
                $ctrl.type = 'text';
            }

            if (!$ctrl.placeholder) {
                $ctrl.placeholder = $ctrl.label ? $ctrl.label : '';
            }
        };
    };

    function fieldConfig () {
        return {
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
        };
    };

})();