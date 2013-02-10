
How to get this shit working with jekyll:

{{ site.baseurl }} in front of url and in _config


See issues:

* https://github.com/mojombo/jekyll/issues/181
* https://github.com/mojombo/jekyll/issues/332


{% highlight javascript %}
{% endhighlight %}

NOT

```javascript
```

(i.e. the github flavored markdown styles)

There are no default layouts

MUST specify YAML Front Matter in each post
A layout (even if named default) MUST be included


Using markdown on your index