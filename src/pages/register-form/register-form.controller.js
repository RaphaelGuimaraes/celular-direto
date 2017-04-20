(function() {
    'use strict';

    angular.module('cd.app')
        .controller('RegisterFormController', RegisterFormController);
    
    /* @ngInject */
    function RegisterFormController ($location) {
        var $ctrl = this;

        $ctrl.selectedPlatform = JSON.parse(localStorage.getItem('selectedPlatform'));
        $ctrl.selectedPackage = JSON.parse(localStorage.getItem('selectedPackage'));

        if (!$ctrl.selectedPlatform && !$ctrl.selectedPackage) {          
            $location.path('/package');
        } else {
            _init();
        }

        function _init () {
            $ctrl.registerForm = {
                nome: '',
                email: '',
                nascimento: '',
                cpf: '',
                telefone: ''
            };

            $ctrl.submit = submit;
            
            function submit () {
                console.groupCollapsed('Formulário Enviado');
                console.log('Formulário de registro', $ctrl.registerForm);
                console.log('Plano Selecionado', $ctrl.selectedPackage);
                console.log('Plataforma Selecionada', $ctrl.selectedPlatform);
                console.groupEnd();
            };
        };
    };
            
})();