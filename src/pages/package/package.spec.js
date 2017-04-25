'use strict';

describe('Package module', function () { 

	beforeEach(function () {
		module('ngRoute');
		module('cd.app.package');
	});

	var controller;

	beforeEach(inject(function ($controller) {
		// The injector unwraps the underscores (_) from around the parameter names when matching
		controller = $controller('PackageController', {});
	}));

	// describe('PackageController', function () {
		it('should instatiate', function () {
			console.log(controller);
			expect(controller.pck).toBeDefined();
		});
	// });
});
