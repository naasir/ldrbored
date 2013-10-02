define([
    'jquery',
    'underscore',
    'console',
    'backbone',
    'collection/stat',
    'view/board'
], function($, _, console, Backbone, Stats, BoardView) {

    return Backbone.Router.extend({

        // routes hash that matches routes to actions
        routes: {
            ''                   : 'list',
            'stats/:name/p:page' : 'list'
        },

        // initializes the router
        initialize: function(options) {
            this.stats = new Stats();
        },
 
        // path: reservation/:filter/p:page
        list: function(name, page) {
            name = name || "rank";
            page = page || "1";
            
            this.stats.fetch({
                data: {
                    name: name,
                    page: page
                },
                success: function(collection, response, options) {
                    var view = new BoardView({
                        collection: collection
                    });
                    $('body').html(view.render().el);
                }
            });
        }
    });
});
    