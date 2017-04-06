'use strict';

describe('myApp.registerForm module', function() {

  	beforeEach(module('myApp.registerForm'));

  	describe('RegisterFormCtrl controller', function(){

	    it('should define RegisterFormCtrl', inject(function($controller) {
	    	var $scope = {};
			
			localStorage.setItem('selectedPlatform', JSON.stringify({sku: "TBT01", nome: "Tablet", descricao: "Chip para navegar à vontade"}));
	      	localStorage.setItem('selectedPackage', JSON.stringify({sku: "TI00001NA_NOVA_LINHA", franquia: "1GB", valor: "21,50", ativo: true}));
	      	
	      	var registerFormCtrl = $controller('RegisterFormCtrl', { 
      			$scope: $scope
      		});
	      	
	      	expect(registerFormCtrl).toBeDefined();
	    }));
  	});
});