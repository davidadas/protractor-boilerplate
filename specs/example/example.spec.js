'use strict';

// Initialize our Page Object.
var ExamplePage = require('../pages/').examplePage;

describe('AngularJS Home', function() {
    it('should greet the named user', function() {
        var angularHomepage = new ExamplePage();

        // Perform actions via Page Object.
        angularHomepage.get();
        angularHomepage.setName('Julie');

        // Perform test assertions.
        expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });
});
