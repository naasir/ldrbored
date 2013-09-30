// a collection of stats
define([
    'jquery',
    'underscore',
    'backbone',
    'model/stat'
], function($, _, Backbone, Stat) {

    return Backbone.Collection.extend({
        
        model: Stat,
        
        // gets the base url for syncing this collection
        url: function() {
            return "/stats";
        }
    });
});