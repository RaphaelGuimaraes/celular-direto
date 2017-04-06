'use strict';

angular.module('myApp.package', ['ngRoute'])

    .controller('PackageCtrl', ['$scope', '$http', '$location',
        function($scope, $http, $location) {
            var selectedPlatform = localStorage.getItem('selectedPlatform');
            if (!selectedPlatform) {
                $location.path('/platform');
            } else {
                selectedPlatform = JSON.parse(selectedPlatform);
            }

            $scope.selectPackage = function (dataPackage) {
                localStorage.setItem('selectedPackage', JSON.stringify(dataPackage));
                $location.path('/register');
            };

            $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/' + selectedPlatform.sku)
                .then(function (response) {
                    $scope.packages = [];
                    angular.forEach(response.data.planos, function(plano) {
                        if (plano.ativo) {
                            $scope.packages.push(plano);
                        }
                    });
                });
        }
    ]);