var PhoneCallCollection = Backbone.Collection.extend({
    model: Application.Models.Phonecall,
    url: '/phones.json',
    parse: function (response) {
        return response;
    }
});