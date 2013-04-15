var App = {};

App.data = [
    {name: "Washington"},
    {name: "Arizona"},
    {name: "California"},
    {name: "Oregon"},
    {name: "Nevada"},
    {name: "utah"},
];

App.Item = Backbone.Model.extend({});

App.List = Backbone.Collection.extend({
    model: App.Item,
    comparator: function(model) {
        return model.get('name');
        // return model.get('name').toLowerCase();
    },
});

App.ItemView = Backbone.View.extend({
    tagName: 'li',
    // className: 'green',
    template: '<span><%- name %></span>',
    render: function() {
        this.$el.html(_.template(this.template, this.model.toJSON()));
        return this;
    }
});

App.ListView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(options) {
        this.render();
    },
    render: function() {
        this.$el.empty();
        _.each(this.collection.models, this.renderItem, this);
        return this;
    },
    renderItem: function(model) {
        var item = new App.ItemView({model: model});
        this.$el.append(item.render().el);
    },
})


$(function() {
    // Attach the list_view to the div#main
    var list_view = new App.ListView({collection: new App.List(App.data)});
    $('#main').html(list_view.el);
    // list_view.setElement('#main');
    // list_view.render();
});