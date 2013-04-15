var App = {};

App.data = [
    {name: "Washington"},
    {name: "Arizona"},
    {name: "California"},
    {name: "Oregon"},
    {name: "Nevada"},
    {name: "utah"},
];

App.Item = Backbone.Model.extend({
    validate: function(attrs) {
        if (!_.has(attrs, 'name') || !attrs['name']) {
        // if (!(attrs.hasOwnProperty('name')) || !attrs['name']) {
            return "A name must be provided";
        }
    },
});

App.List = Backbone.Collection.extend({
    model: App.Item,
    comparator: function(model) {
        return model.get('name').toLowerCase();
    },
});

App.ItemView = Backbone.View.extend({
    tagName: 'li',
    template: '<span><%- name %></span>',
    editTemplate: '<input type="text" value="<%- name %>"><button class="delete">X</button>',
    events: {
        'dblclick span': 'editItem',
        'change input': 'saveItem',
        'click .delete': 'deleteItem',
    },
    initialize: function() {
        this.listenTo(this.model, 'change:name', this.render);
        // this.model.on('change', this.render, this);
    },
    deleteItem: function() {
        this.remove();
        this.model.destroy();
    },
    editItem: function() {
        this.renderEdit();
    },
    saveItem: function() {
        var newName = this.$('input').val();
        this.model.set('name', newName, {validate: true});
    },
    renderEdit: function() {
        this.$el.html(_.template(this.editTemplate, this.model.toJSON()));
        return this;
    },
    render: function() {
        this.$el.html(_.template(this.template, this.model.toJSON()));
        return this;
    },
});

App.ListView = Backbone.View.extend({
    el: '#main',
    template: '<input id="addItem"><ul id="items"></ul><button id="lowercase">Make Lowercase!</button>',
    events: {
        'click button': 'lowercase',
        'change input': 'addItem',
    },
    initialize: function(options) {
        this.render();
        this.listenTo(this.collection, 'add', this.render);
    },
    addItem: function() {
        var newName = this.$('input').val();
        if (!newName) return;
        // var newItem = new App.Item({name: newName});
        // this.collection.add(newItem);
        this.collection.add({name: newName});
        this.$('input').val('');
    },
    render: function() {
        this.$el.html(_.template(this.template));
        this.$items = this.$('#items');
        _.forEach(this.collection.models, this.renderItem, this);
        return this;
    },
    renderItem: function(model) {
        var item = new App.ItemView({model: model});
        this.$items.append(item.render().el);
    },
    lowercase: function() {
        // Make every object name lowercase
        _.forEach(this.collection.models, function(model) {
            model.set('name', model.get('name').toLowerCase());
        }, this);
    },
});


$(function() {
    // Attach the list_view to the div#main
    var list_view = new App.ListView({collection: new App.List(App.data)});
});