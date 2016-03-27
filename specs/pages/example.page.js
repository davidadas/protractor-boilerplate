'use strict';

/**
 * An example of a basic 'Page Object'.
 * Use this pattern in order to keep selectors out of your describe statements.
 * @returns {Object} {{get: get, setName: setName, getGreeting: getGreeting}}
 * @constructor
 */
function AngularHomepage() {
    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    function get() {
        browser.get('http://www.angularjs.org');
    }

    function setName(name) {
        nameInput.sendKeys(name);
    }

    function getGreeting() {
        return greeting.getText();
    }

    return {
        get: get,
        setName: setName,
        getGreeting: getGreeting
    };
}

module.exports = AngularHomepage;
