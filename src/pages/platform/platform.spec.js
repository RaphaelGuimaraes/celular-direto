'use strict';

describe('cd.app.platform', function () {

    beforeEach(module('cd.app.platform'));

    describe('PlatformController', function () {

        it('should instantiate', inject(function ($controller) {
            var platformCtrl = $controller('PlatformController');
            expect(platformCtrl).toBeDefined();
        }));

    });

});