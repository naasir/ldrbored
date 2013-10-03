define([
    'jquery',
    'underscore',
    'console',
    'backbone',
    'text!../../template/board.html'
], function($, _, console, Backbone, BoardTemplate) {

    return Backbone.View.extend({

        className: 'board',

        template: _.template(BoardTemplate),

        render: function() {
            if (this.collection.isEmpty()) { return; }

            var max = this.collection.max(function(model) { return model.get('value'); }),
                units = max.get('name').startsWith('time') ? ' mins' : '';

            this.$el.html(this.template({
                stats: this.collection.toJSON(),
                max: max.get('value'),
                units: units
            }));

            // highlight the active filter
            this.$('[href*="{1}"]'.assign(max.get('name'))).addClass('active');

            return this;
        }
    });
});