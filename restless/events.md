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
function speak() { console.log('Hello!'); }
A.on('speak', speak)
A.trigger('speak')
{% endhighlight %}

When this code is run in console, it should produce:

    > Hello!

The event name is arbitrary (but no whitespace!), as this code would produce the same result:

{% highlight javascript %}
A.on('talk', speak)
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
function speak(msg) { console.log(msg); }
A.on('speak', speak)
A.trigger('speak', 'Hello Backbone Events!')
{% endhighlight %}

Running the previous code will produce:

    > Hello Backbone Events!

The third parameter of the callback binding of `on` or `bind` is an optional context.

Why is this important? Well, let's create two objects, `Speaker` and `Prompter` and give the `Speaker` a method that will output a value of an attribute when prompted:

{% highlight javascript %}
var Speaker = {count: 99, speak: function() { console.log('count:', this.count); } }
Speaker = _.extend(Speaker, Backbone.Events)
var Prompter = {}
Prompter = _.extend(Prompter, Backbone.Events)
Prompter.on('prompt', Speaker.speak)
{% endhighlight %}

Calling `Prompter.trigger('prompt')` will produce:

    > count: undefined

Whoops! When the `Speaker.speak` executes, it can't locate any value for `count` because `this` refers to the `Prompter`! Set a value for `Prompter.count` and see for yourself.

How do we fix this? With context of course! We can specify the context as the final parameter of a callback. So instead of our previous line:

    Prompter.on('prompt', Speaker.speak)

We can write:

    Prompter.on('prompt', Speaker.speak, Speaker)

And calling `Prompter.trigger('prompt')` will generate the correct response:

    > count: 99

NOTE: did you encounter a _zombie_ event? Did the speak method fire twice, once with the old response and another with the correct one? More to come on this...

Of course, this example is overly convoluted. We could have simply set the callback and triggers on the Speaker object. But don't think too hard. Not yet, at least.

TODO: a brief description of context...

For those who haven't experienced the fear and anxiety of JavaScript context, especially the `this` keyword, there'll be plenty more of context to come.

Events are the foundation of the entire Backbone code base. So much that the `Backbone` object itself is given the event methods. In the annotated source, you can find:

{% highlight javascript %}
_.extend(Backbone, Events);
{% endhighlight %}

This means that events can be bound and triggered to the global Backbone object, and it can be used as a global dispatch object.

[On to Models and Events >]({{ site.baseurl }}/restless/models-and-views.html)