define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {

    return Backbone.Model.extend({

        // gets the url for syncing this model
        urlRoot: function() {
            return "/stats/";
        }
    });
});