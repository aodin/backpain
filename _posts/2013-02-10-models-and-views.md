---
layout: default
title: Models and Views
category: restless

excerpt: Getting Started with Backbone.js Models and Views
---
Models and Views
================

Introductions to Backbone often start with a short discussion of the [Model-View-Controller (MVC)](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) paradigm _(Oh fuck, did I just use the word 'paradigm?')_.

Why we use MVC is a relatively simple question to answer: We want portions of our code to be reusable, and separating how something _looks_ from how something _acts_ is a good place to start.

But that's already an over-simplification, and for the more pedantic among us, I've already provided enough fuel to ignite a flame-war.

So let's skip the bullshit and code.

## Models

A `model` is the foundational element of your collection. 

What the fuck does that mean?

Well, if you have some experience programming, you can think of it as an object class, or as the schema for a database table.

For instance, if we were coding a page full of profiles, our foundational unit would a single profile.

To create a model in Bacbkbone, we `extend` the included `Backbone.Model` object.

_TODO Why the fuck we do this_

{% highlight javascript %}
var Profile = new Backbone.Model.extend({});
{% endhighlight %}

_TODO A Note on why we use `var` and `new`?_

Now careful, this Profile variable isn't an _instance_ of a profile, it's the class object itself.

Thanks to the beauty (read: not) of javascript's prototypical system, both the class and the instance of the class are constructed in a similar manner (using the `new` operator and, optionally, the `var` keyword).

{% highlight javascript %}
var jims_profile = new Profile();
{% endhighlight %}

To continue with the parallel to other aspects of programming, `jims_profile` is an instance of the our Profile class, or a row of data in our Profile Table.

_Pedantism Note: Yes, I am using [snake_case](http://en.wikipedia.org/wiki/Snake_case) for instances of classes and [CamelCase](http://en.wikipedia.org/wiki/Camelcase) for the classes themselves._