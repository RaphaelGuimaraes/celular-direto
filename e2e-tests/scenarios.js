'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    it('should automatically redirect to /platform when location hash/fragment is empty', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/platform");
    });

    describe('platform', function() {

        beforeEach(function() {
            browser.get('index.html#!/platform');
        });


        it('should render platform when user navigates to /platform', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for view 1/);
        });
    });
});
