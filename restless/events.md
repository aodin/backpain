---
layout: default
title: Events
category: restless

excerpt: Getting Started with Backbone.js Events
---
Events
======

`Backbone.Events` is not only the first topic of the documentation, but it is the first item in the source code.

As of version 0.9.10 (released 15 Jan 2013), this is the interface for `Backbone.Events`:

    bind: function (name, callback, [context])
    listenTo: function (obj, name, callback)
    off: function ([name], [callback], [context])
    on: function (name, callback, [context])
    once: function (name, callback, [context])
    stopListening: function ([obj], [name], [callback])
    trigger: function (name, [*args])
    unbind: function ([name], [callback], [context])

_parameters wrapped in `[]` are optional_  
_parameters with a asterisk (*) prefix can take take multiple variables_ 

Since `bind` is just an alias for `on` and `unbind` for `off`, there are only six unique methods:

* on
* off
* once
* trigger
* listenTo
* stopListening

And the methods `listenTo` and `stopListening` were added in version 0.9.9 on 13 Dec 2012!

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

When run in your console, this code should produce:

    > Hello!

The event name is arbitrary (but no whitespace!), as this code would produce the same result:

{% highlight javascript %}
A.on('talk', A.speak)
A.trigger('talk')
{% endhighlight %}

We can prevent these events from fire by using. We could name the event and callback specifically, or leave the parameters blank, which will turn off all events.

Running this code should produce nothing in the console:

{% highlight javascript %}
A.off()
A.trigger('talk')
{% endhighlight %}


Events are the foundation of the entire Backbone code base. So much that the `Backbone` object itself is given the event methods.

{% highlight javascript %}
_.extend(Backbone, Events);
{% endhighlight %}