'use strict';

describe('myApp.package module', function() {

  	beforeEach(module('myApp.package'));

  	describe('PackageCtrl controller', function() {

    	it('should define PackageCtrl', inject(function($controller) {
    		var $scope = {};
			
			localStorage.setItem('selectedPlatform', JSON.stringify({sku: "TBT01", nome: "Tablet", descricao: "Chip para navegar à vontade"}));
      		
      		var packageCtrl = $controller('PackageCtrl', { 
      			$scope: $scope
      		});
      		
      		expect(packageCtrl).toBeDefined();
    	}));
  	});
});