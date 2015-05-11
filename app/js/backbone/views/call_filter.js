//a (row) view to render each call
Application.Views.CallFilter = Backbone.View.extend({
    tagName: "tr",
    template: JST['backbone/call_filter'],

    initialize: function() {
    	// collection; -> renderTable
    	
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});