'use strict';

angular.module('myApp.platform', ['ngRoute'])

.controller('PlatformCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.selectPlatform = function (platform) {
            localStorage.setItem('selectedPlatform', JSON.stringify(platform));
            $location.path('/package');
        };

        $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas')
            .then(function (response) {
                $scope.platforms = response.data.plataformas;
            });
    }
]);