---
layout: default
title: Events
category: restless

excerpt: Getting Started with Backbone.js Events
---
Events
======

The secret sauce of Backbone.js is its event handling. While only a fraction of the total code, `Backbone.Events` is not only the first topic of the documentation, but it is the first item in the annotated source.

As of version `0.9.10` (released 15 Jan 2013), this is the interface for `Backbone.Events`:

    bind: function (name, callback, [context])
    listenTo: function (obj, name, callback)
    off: function ([name], [callback], [context])
    on: function (name, callback, [context])
    once: function (name, callback, [context])
    stopListening: function ([obj], [name], [callback])
    trigger: function (name, [*args])
    unbind: function ([name], [callback], [context])

NOTE:
* _parameters wrapped in `[]` are optional_  
* _parameters with a asterisk `\*` prefix can take take multiple variables_ 

Since `bind` is just an alias for `on` and `unbind` for `off`, there are only six unique methods:

* on
* off
* once
* trigger
* listenTo
* stopListening

And the methods `listenTo` and `stopListening` were added in version `0.9.9` on 13 Dec 2012!

Let's experiment with `Backbone.Events` by making a new object and attaching its methods using the `clone()` method of Underscore.js:

{% highlight javascript %}
var A = _.clone(Backbone.Events)
{% endhighlight %}

With this new clone of Events, we can create some new methods, bind them to a trigger and then call that trigger:

{% highlight javascript %}
A.speak = function() { console.log('Hello!'); }
A.on('speak', A.speak)
A.trigger('speak')
{% endhighlight %}

When this code is run in console, it should produce:

    > Hello!

The event name is arbitrary (but no whitespace!), as this code would produce the same result:

{% highlight javascript %}
A.on('talk', A.speak)
A.trigger('talk')
{% endhighlight %}

We can prevent these events from fire by using `off`. We could name the event and callback specifically, or leave the parameters for `off` blank, which will turn off all events on the object.

Running this code should produce nothing in the console:

{% highlight javascript %}
A.off()
A.trigger('talk')
{% endhighlight %}

Events can also take an arbitrary number of parameters:

{% highlight javascript %}
A.speak = function(msg) { console.log(msg); }
A.on('speak', A.speak)
A.trigger('speak', 'Hello Backbone Events!')
{% endhighlight %}

Running the previous code will produce:

    > Hello Backbone Events!

The third parameter of the callback binding of `on` or `bind` is an optional context.

Why is this important? Well, let's create two objects and give them both a function that will output the value of an attribute:


For those who haven't experienced the fear and anxiety of JavaScript context, especially the `this` keyword, there'll be plenty more of context to come.

Events are the foundation of the entire Backbone code base. So much that the `Backbone` object itself is given the event methods. In the annotated source, you can find:

{% highlight javascript %}
_.extend(Backbone, Events);
{% endhighlight %}

This means that events can be bound and triggered to the global Backbone object, and it can be used as a global dispatch object.

[On to Models and Events >]({{ site.baseurl }}/restless/models-and-views.html)