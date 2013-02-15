---
layout: default
---

Getting started with Backbone.js? Check out a [REST-less Introduction to Backbone.js]({{ site.baseurl }}/restless/)

{% for post in site.posts %}
* ### [{{ post.title }}]({{ site.baseurl }}{{ post.url }})

    {{ post.date | date: "%d %B %Y" }}

    {% if post.excerpt %}{{ post.excerpt }}{% endif %}
{% endfor %}