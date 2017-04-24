(function () {
    'use strict';

    angular.module('cd.app.package')
        .factory('PackageService', PackageService);

    /* @ngInject */
    function PackageService ($http) {
        var service = {
                getPackages: getPackages
            };

        return service;

        function getPackages () {
            var selectedPlatform = JSON.parse(localStorage.getItem('selectedPlatform'));

            return $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/' + selectedPlatform.sku)
                .then(_onSuccess)
                .catch(_onError);

            function _onSuccess (response) {
                var packages = [];
                
                angular.forEach(response.data.planos, function (plano) {
                    if (plano.ativo) {
                        packages.push(plano);
                    }
                });

                return packages;
            };

            function _onError (error) {
                return error;
            };
        };
    };

})();
