(function () {
    'use strict';

    angular.module('cd.app')
        .factory('PlatformService', PlatformService);

    PlatformService.$inject = ['$http'];

    function PlatformService ($http) {
        var service = {
            getPlatforms: getPlatforms
        };

        return service;

        function getPlatforms () {
            return $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas')
                .then(_onSuccess)
                .catch(_onError);

            function _onSuccess (response) {
                return response.data.plataformas;
            };

            function _onError (error) {
                return error;
            };
        };
    };

})();