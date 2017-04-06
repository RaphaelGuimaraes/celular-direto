'use strict';

describe('myApp.platform module', function() {

  	beforeEach(module('myApp.platform'));

  	describe('platform controller', function(){

    	it('should ....', inject(function($controller) {
      		var $scope = {};

	      	var platformCtrl = $controller('PlatformCtrl', {
	      		$scope: $scope
	      	});
	      
	      	expect(platformCtrl).toBeDefined();
    	}));
  	});
});