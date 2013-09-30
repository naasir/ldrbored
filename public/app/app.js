// application initializer (singleton)
define([
    'jquery',
    'underscore',
    'console',
    'backbone',
    'router/stat'
], function($, _, console, Backbone, StatRouter) {

    var app = {
        initialize: function() {
            new StatRouter();
            Backbone.history.start();
            console.log("application initialized");
        }
    };

    return app;
});