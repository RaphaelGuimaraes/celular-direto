'use strict';

describe('myApp.package module', function() {

  	beforeEach(module('myApp.package'));

  	describe('package controller', function() {

    	it('should ....', inject(function($controller) {
      		var packageCtrl = $controller('PackageCtrl');
      		expect(packageCtrl).toBeDefined();
    	}));
  	});
});