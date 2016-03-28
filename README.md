protractor-boilerplate
================
[![Circle CI](https://circleci.com/gh/davidadas/protractor-boilerplate.png?style=badge)](https://circleci.com/gh/davidadas/protractor-boilerplate)

A boilerplate for Protractor with Gulp and CircleCI integration.

## Running Locally

If you wish to run these locally, run `npm install` within your terminal and then execute the following from a different tab:
```shell
  webdriver-manager update --standalone
  webdriver-manager start
```

Then, from within the project directory, run the following to start your tests:
```shell
  gulp
```

## Structure

The following structure is used / recommended for organizing tests.

    .
    ├── specs                   # Root of all Protractor tests.
      └── feature1              # Sub-directory for features.
      └── feature2              # Sub-directory for features.
      └── pages                 # Place Page Objects here (see below). 

In order to simplify the process of exporting [Page Objects](https://github.com/angular/protractor/blob/master/docs/page-objects.md), an `index.js` file has been placed in the `/pages` directory.  To export a new Page Object, create the associated file within the `/pages` directory then export it in `index.js` as follows:

```js
'use strict';

var fooPage = require('./fooPage.page');

module.exports = {
    fooPage: fooPage
};

```

## Linting

The boilerplate currently uses the standard set of `eslint` options as well as [a custom Protractor-specific plugin](https://github.com/alecxe/eslint-plugin-protractor) for linting specs.  

In order to help enforce spec-case best practices, each rule has been set to error rather than warning.  If you wish to change this, simply open the `.eslintrc.yaml` file and set the following rules to 1 under 'Default':

Rule                         | Default       | Options
----                         | -------       | -------
[missing-perform][]          | 2             |
[no-browser-pause][]         | 2             |
[missing-wait-message][]     | 1             |
[no-browser-sleep][]         | 1             |
[no-by-xpath][]              | 1             |
[no-describe-selectors][]    | 1             |

## Author

© 2016 David Adams

## License

Licensed under the [MIT license](LICENSE).
