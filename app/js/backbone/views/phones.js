Application.Views.Phones = Backbone.View.extend({
  template: JST['backbone/phones'],

  render: function () {
    $(this.el).html(this.template());
    return this;
  }
});

var call_list_view = Backbone.View.extend({
    el: $('#phonecall'),
    initialize: function() {
        this.collection.bind("add", this.render, this);
    },

    render: function() {
        _.each(this.collection.models, function(data) {
            this.$el.append(new call_view({
                model: data
            }).render().el);
        }, this);
        return this;
    }
});