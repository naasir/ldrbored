/**
 * require.js configuration
 */
require.config({
    paths: {
        'jquery'               : '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
        'text'                 : '../vendor/require/text',
        'underscore'           : '../vendor/underscore.min',
        'backbone'             : '../vendor/backbone.min',
        'sugar'                : '../vendor/sugar.min',
        'console'              : '../vendor/ba-debug.min'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    deps: ['sugar']
});

/**
 * define wrapper for Modernizr
 */
define('modernizr', function () { return window.Modernizr; });

/**
 * main entry point for require.js
 */
require(['app'], function(app) {
    app.initialize();
});