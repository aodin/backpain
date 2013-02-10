---
layout: default
---
Has your AJAX code gone to hell? Is your code so intertwined to make the [Gordian Knot](http://en.wikipedia.org/wiki/Gordian_Knot) jealous?

It may just need a bit of [Backbone.js](http://backbonejs.org/).

A REST-less Introduction to Backbone.js
=======================================

This tutorial assumes a working knowledge of [HTML](https://developer.mozilla.org/en-US/docs/HTML), [CSS](https://developer.mozilla.org/en-US/docs/CSS), and [jQuery](http://jquery.com/). No [REST](http://en.wikipedia.org/wiki/Representational_state_transfer) backend is used. It is written in plain javascript instead of [CoffeeScript](http://coffeescript.org/) to reduce the number of prerequisites.

* [Models and Views]({{ site.baseurl }}{% post_url 2013-02-10-models-and-views %})
* Collections
* Events
* Get and Set
* Binding and Context
* Routes and History


### All Posts

{% for post in site.posts %}
* {{ post.date | date: "%d %B %Y" }} - [{{ post.title }}]({{ site.baseurl }}{{ post.url }}){% if post.excerpt %}: {{ post.excerpt }}{% endif %}
{% endfor %}