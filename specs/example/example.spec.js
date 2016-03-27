'use strict';

var ExamplePage = require('../pages/').examplePage;

describe('AngularJS Home', function() {
    it('should greet the named user', function() {
        var angularHomepage = new ExamplePage();

        angularHomepage.get();
        angularHomepage.setName('Julie');
        expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });
});
