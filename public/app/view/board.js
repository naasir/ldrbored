define([
    'jquery',
    'underscore',
    'console',
    'backbone',
    'text!../../template/board.html'
], function($, _, console, Backbone, BoardTemplate) {

    return Backbone.View.extend({

        template: _.template(BoardTemplate),

        events: {
        },

        initialize: function() {
        },

        render: function() {
            this.$el.html(this.template({ stats: this.collection.toJSON() }));
            return this;
        }
    });
});