'use strict';

describe('cd.app.registerForm', function() {

  	beforeEach(module('cd.app.registerForm'));

  	describe('RegisterFormController', function(){

	    it('should instantiate', inject(function($controller) {
	      	var rgfCtrl = $controller('RegisterFormController');
	      	expect(rgfCtrl).toBeDefined();
	    }));

  	});

});