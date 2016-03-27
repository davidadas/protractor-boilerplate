'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    protractor = require('gulp-protractor').protractor;

var config = {
    protractor: {
        configFile: 'config/protractor.config.js'
    },
    paths: {
        js: [
            '*.js',
            'specs/**/*.js'
        ],
        specs: [
            'specs/**/*.spec.js'
        ]
    }
};

function onError(e) {
    throw e;
}

gulp.task('lint', function() {
    gulp.src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('protractor', function() {
    gulp.src(config.paths.specs)
        .pipe(protractor(config.protractor))
        .on('error', onError);
});

gulp.task('default', ['lint', 'protractor']);
