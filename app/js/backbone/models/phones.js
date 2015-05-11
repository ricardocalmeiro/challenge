Application.Models.Phonecall = Backbone.Model.extend({
});

var calls = new PhoneCallCollection();

calls.fetch({
    success: function() {
        console.log(calls.toJSON());
        new call_list_view({collection: calls}).render();
    },
    error: function() {
        console.log('Failed to fetch!');
    }
});