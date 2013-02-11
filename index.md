---
layout: default
---

Getting started with Backbone.js? Check out a [REST-less Introduction to Backbone.js]({{ site.baseurl }}/restless/)

{% for post in site.posts %}
* {{ post.date | date: "%d %B %Y" }} - [{{ post.title }}]({{ site.baseurl }}{{ post.url }}){% if post.excerpt %}: {{ post.excerpt }}{% endif %}
{% endfor %}