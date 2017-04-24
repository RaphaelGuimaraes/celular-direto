'use strict';

describe('cd.app.package', function () {

	// beforeEach(module('cd.app.package', ['ngRoute']));
	beforeEach(function () {
		module('ngRoute');
		module('cd.app.package');
	});

	var $controller;

	beforeEach(inject(function (_$controller_) {
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	describe('PackageController', function () {
		it('should instatiate', function () {
			var $scope = {};
			var pckCtrl = $controller('PackageController', { $scope: $scope });
			expect(pckCtrl).toBeDefined();
		});
	});
});
