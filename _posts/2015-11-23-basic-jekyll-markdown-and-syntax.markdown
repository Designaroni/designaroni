---
layout: post
title:  "Basic Jekyll markdown & syntax"
date:   2015-11-23 00:05:00
categories: jekyll update
tags: Front-end Jekyll html css markdown
leadImage: /assets/unsplash_vadim_sherbakov.jpeg
---
If you are using the basic Jekyll theme posts can be found in your `_posts` directory. You can edit existing blog posts for the site to see how your changes take affect. Additionally creating a new blog post is as easy as adding a new markdown file within the `_posts` directory.

#### Protip!
> Using the YAML front matter you can set a published state for your posts by setting `published: false` as a parameter within the front matter.

 You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server. `jekyll serve` also watches & auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and include the necessary front matter.

### Jekyll & Inline Code Blocks: Syntax Highlighting

Jekyll also offers powerful support for inline code blocks & syntax highlighting:

### Example Code Blocks:
The opening liquid statement `{% raw %}{% highlight ruby %}{% endraw %}` followed by <code>{% raw %}{% endhighlight %}{% endraw %}</code> will wrap code in a block and highlight based on the ***ruby*** syntax. Replace the ***ruby*** language name with your preferred language to highlight other languages as well.

#### Protip!
> Liquid tags get processed by the rendering engine before compiling your static pages. In order to write inline liquid you need to wrap your statements in a code block and raw tag as follows.

<pre><code>&lt;code>&#123;% raw %} …liquid tag goes here… &#123;% endraw %}&lt;/code></code></pre>

#### Extra Protip!
> In order to write the code and raw tags above the leading less than character needs to be written as an html entity.
>
>Additionally the returns you would write in well written HTML need to be removed. The `pre` & `code` tags are processed as html but leave extra whitespace resulting in code blocks with extra height.

{% highlight html %}
<pre><code>&lt;code>&#123;% raw %} …liquid tag goes here… &#123;% endraw %}&lt;/code></code></pre>
{% endhighlight %}

#### Extra Extra Protip!
> As much as writing the above code repeatedly in your "clean" blog post... Markdown has a solution for this. Wrap the code you want to display in tick marks ``` `like this` ```

<pre><code>`&#123;% raw %}&#123;% highlight ruby %}&#123;% endraw %}`</code></pre>

> Will Output

`{% raw %}{% highlight ruby %}{% endraw %}`

#### Extra Extra Extra Protip!
> At this point this is starting to feel like inception, the above code block tick mark exmple is written like this.

``<pre><code>`&#123;% raw %}&#123;% highlight ruby %}&#123;% endraw %}`</code></pre>``

#### Tricky Ticks
> The following series of double backtick's & single backticks function similar to double/single quote marks in HTML or javascript. Caveat being that the double ticks need to be place as the wrapping ticks.

    ``<pre><code>`&#123;% raw %}&#123;% highlight ruby %}&#123;% endraw %}`</code></pre>``

### Languages Jekyll Syntax Highlighting Supports:
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
### Example SCSS
{% highlight scss %}
  .body{
    background: honeydew;
    color: #333;
  }
  .post-content {
    margin-bottom: $spacing-unit;
  h2 {
    font-size: 32px;
    @include media-query($on-laptop) {
        font-size: 28px;
    }
  }
  h3 {
    font-size: 26px;
    @include media-query($on-laptop) {
        font-size: 22px;
    }
  }
  h4 {
    font-size: 20px;
    @include media-query($on-laptop) {
        font-size: 18px;
    }
  }
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

### Linking Images to Jekyll Templates & Using Them in Markdown

#### Images in Templates

Using images in Jekyll templates is pretty straight forward, either place them via a liquid variable or straight away as a url inside an HTML `img` tag

{% highlight html %}
<img src="{{ page.leadImage }}" />
{% endhighlight %}

{% highlight html %}
<img src="{% raw %}{{ page.leadImage }}{% endraw %}" />
{% endhighlight %}

Here my index file contains an if statement to check the page for a leadImage that is defined and will conditionally display the markup.

{% highlight html %}
{% raw %}
{% if page.leadImage %}{% endraw %}
  <div class="leadImage">
    <img src="{{ page.leadImage }}" />
  </div>
{% raw %}{% endif %}
{% endraw %}
{% endhighlight %}

#### Images in Markdown

Using images in markdown files is about as easy as it can get. While the image tag styles above will work this isn't true markdown. At it's simplest form use the direct url or as a liquid variable

`![]({{ page.leadImage }})`

`![]({% raw %}{{ page.leadImage }}{% endraw %})`

Syntax says we need to use HTML `alt` attributes. The final output looks like this.

`![alt text]({{page.leadImage}})`

`![alt text]({% raw %}{{ page.leadImage }}{% endraw %})`

Add `title` text by wrapping title in quotes prior to closing the URL parenthesis

`![alt text]({{page.leadImage}} "title text")`

`![alt text]({% raw %}{{ page.leadImage }}{% endraw %} "title text")`

#### That's initially about it…

Basic Jekyll docs, repo & help repo below

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. Bugs & feature requests can be filed at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them below in the comments or officially on [Jekyll’s dedicated Help repository][jekyll-help].

[languages]:   http://pygments.org/languages/
[pygments]:    http://pygments.org/
[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
