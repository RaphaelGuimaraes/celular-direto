'use strict';

angular.module('myApp.registerForm', ['ngRoute'])

    .controller('RegisterFormCtrl', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            var selectedPlatform = localStorage.getItem('selectedPlatform');
            var selectedPackage = localStorage.getItem('selectedPackage');

            if (!selectedPlatform) {
                $location.path('/platform');
            } else {
                selectedPlatform = JSON.parse(selectedPlatform);
            }

            if (!selectedPackage) {
                $location.path('/package');
            } else {
                selectedPackage = JSON.parse(selectedPackage);
            }

            $scope.registerForm = {
                nome: '',
                email: '',
                dataNascimento: '',
                cpf: '',
                telefone: ''
            };

            $scope.submit = function () {
                console.groupCollapsed('Formulário Enviado');
                console.log('Formulário de registro', $scope.registerForm);
                console.log('Plano Selecionado', selectedPackage);
                console.log('Plataforma Selecionada', selectedPlatform);
                console.groupEnd();
            };
        }
    ]);