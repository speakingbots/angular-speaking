'use strict';

    module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    grunt.util.linefeed = '\n';
    grunt.initConfig({
        concat: {
            options: {
                banner:
                    'angular.module(\'angular-speaking\', [\'angular-speaking-ui-directive\']);\n'
            },
            dist: {
                src: ['./scripts/*.js'],
                dest: './dist/angular-speaking.js'
            }
        },
        html2js: {
            app: {
                options: {
                    base: './',
                    useStrict: true,
                    quoteChar: '\'',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                src: ['./views/{,*/}*.html'],
                dest: './scripts/templates.js',
                module: 'SpeakingBots.Templates'
            }
        }
    });

    grunt.registerTask('default', [
        'html2js',
        'concat'
    ]);

};
