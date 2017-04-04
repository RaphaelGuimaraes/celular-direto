'use strict';

angular.module('myApp.platform', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/platform', {
    templateUrl: 'platform/platform.html',
    controller: 'PlatformCtrl'
  });
}])

.controller('PlatformCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas')
            .then(function (response) {
                $scope.platforms = response.data.plataformas;
            });
    }
]);