---
layout: post
title:  "Basic Jekyll markdown & syntax to know"
date:   2015-03-23 00:09:58
categories: jekyll update
leadImage: leadImage.jpg
---
If you are using the basic Jekyll theme posts can be found in your `_posts` directory. You can edit existing blog posts for the site to see how your changes take affetc. Additionally creating a new blog post is as easy as adding a new markdown file within the `_posts` directory.

#### Protip!
> Using the YAML front matter you can set a published state for your posts by placing `published: false` in the front matter.

 You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server. `jekyll serve` also watches & auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and include the necessary front matter.

### Jekyll & inline code blocks: syntax highlighting

Jekyll also offers powerful support for inline code blocks & syntax highlighting:

### Example code blocks:
The opening liquid statement <code>{% raw %}{% highlight ruby %}{% endraw %}</code> followed by <code>{% raw %}{% endhighlight %}{% endraw %}</code> will wrap code in a block and highlight based on the ***ruby*** syntax. Replace the ***ruby*** language name with your prefered language to highlight other languages as well.

#### Protip!
> Liquid tags get processed by the rendering engine before compiling your static pages. In order to write inline liquid you need to wrap your statements in a code block and raw tag as follows.

<pre>
  <code>
    &lt;code>&#123;% raw %} …liquid tag goes here… &#123;% endraw %}&lt;/code>
  </code>
</pre>

#### Extra Protip!
> In order to write the code and raw tags above the leading less that characters and need to be written as html entities

{% highlight html %}
<pre>
  <code>
    &lt;code>&#123;% raw %} …liquid tag goes here… &#123;% endraw %}&lt;/code>
  </code>
</pre>
{% endhighlight %}

### Languages Jekyll syntax highlighting supports:
Jekyll supports syntax highlighting for over [100 languages][languages] thanks to [Pygments][pygments]

### Example Ruby
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

### Example HTML
{% highlight html %}
<div class="post">
  <h1>Heading One</h1>
  <blockquote>I am a blockquote</blockquote>
  <p>Paragraph text</p>
</div>
{% endhighlight %}
### Example CSS
{% highlight css %}
  .body{
    background: honeydew;
    color: #333;
  }
{% endhighlight %}

### Example Javascript
{% highlight javascript %}
var displayComments = true;
function doStuff() {
  if ( displayComments === true ) {
    // do stuff…
  } else {
    // do nothing…
  }
}
dostuff();
{% endhighlight %}


Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. Bugs & feature requests can be filed at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them below in the comments or officially on [Jekyll’s dedicated Help repository][jekyll-help].

[languages]:   http://pygments.org/languages/
[pygments]:    http://pygments.org/
[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
