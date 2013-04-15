Backpain
========

Tutorials and Design Patterns for Backbone.js


### Hidden Operations:

* The `initialize` function and its parameters
* Caching of `$el` parameter
* The `url` versus `urlRoot` of `Model` and `url` of `Collection`
* Extending `url` and `parse` functions for your server-side setup
* Operations that are `silent` by default
* Promotion of certain `options` to the root `this`
* DOM elements can be jQuery selectors or the jQuery object itself
* The `this.$()` shortcut for `this.$el.find()`


### Syntax Reminders

* End every attribute with a comma
* Ending `render` functions with return this;`


### Design Patterns

* Separation of `Collection` render methods: `render` and `renderItem`
* Underscore templates, especially caching templates
* Returning an object from `Model.validate`


### Gotchas

* Memory leaks / duplicate events when binding to views
* Bootstraping data does not fire events
* Overwriting the `el` element in views
* Forgetting the `new` operator
* The View `setElement` will create a new `$el` object and replace `tagName`