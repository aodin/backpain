---
layout: default
title: Utilizing Underscore
published: false

excerpt: More than just a pre-requisite, underscore.js provides a number of functions to enchance any Backbone project.
---
Utilizing Underscore.js
=======================


clone
=====

_.clone(object)


throttle
========


has
===

_.has(object, key)


isEmpty
=======

_.isEmpty(object)


isEqual
=======

_.isEqual(object, other)



isUndefined
===========

_.isUndefined(value)


isArray
=======

_.isArray(object)



escape
======

_.escape(string)

To prevent Cross-site Scripting (XSS)

{% highlight javascript %}
<div><%= _.escape(name) %></div>
{% endhighlight %}




find
====

The `_.find(list, iterator, [context])` function will return the first element of the given list that passes the truth test given in `iterator`.

I use `_.find` for improving yet-to-be-saved additions to a collection. This check will prevent more than one unsaved model existing in a collection at anytime. 

{% highlight javascript %}
var newItem = _.find(this.collection.models, function(model) {
  return model.isNew();
});
if (typeof newItem === 'undefined') {
  newItem = new this.collection.model();
  this.collection.add(newItem, {silent: true, sort: false});
}
{% endhighlight %}