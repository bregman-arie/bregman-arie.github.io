---
layout: single
title:  "Python: Working with Jinja2 templates"
date:   2019-11-14
categories: python
toc: true
toc_label: "Topics"
---

In this post we’ll see how to work with Jinja2 in your Python projects, to easily create and modify templates.

Jinja2 is widely used and you probably already noticed it if you used projects such as Flask and Ansible or even if you simply searched for a templating engine. I can describe its greatness in a couple of paragraphs but the [official doc](https://palletsprojects.com/p/jinja) does it much better.

This post is mainly for those who are looking for a quickstart guide.

## Create a template

To start using Jinja2, we first need a template. Let’s create this basic template

```
Hello {{ name }}!
Thank you for participating in {{ event }} event.

See you next year!
```

We will generate personal “thank you for participating” messages, based on the given name of the participant and the name of the event.
Usually, Jinja2 templates end with .j2, so we’ll create a file for this template named ‘thank_you.j2’

This is how our directory tree looks like

```
my_project/
    templates/
        thank_you.j2 # Our template 
    script.py        # Script for generateing personal messages
```

## Create a Jinja2 Environment instance

Next, in our Python file, we’ll create an Environment object. We’ll use it to load our template. Usually, you’ll create only one Environment object per application and you’ll use it for global configuration and loading templates. Let’s see how it looks like

```
from jinja2 import Environment
from jinja2 import FileSystemLoader

j2_env = Environment(loader=FileSystemLoader('templates'),
                     trim_blocks=True)
```

We created our Environment instance called ‘j2_env’. The first thing we set while defining a new Environment object, is the loader. The loader defines how we load the templates in our application, using the Environment instance we created. In this case, I decided I’m loading the templates from the filesystem by passing the paths for the templates. Usually, I’m also using ‘FunctionLoader’ which expects a function that does the template loading.

The second argument is ‘trim_blocks’ and I’m using it to remove a newline after a block (block is all the code located between { % and % } ).

## Load the template

Now that we have our Jinja2 environment instance, we can use it to load our template. This will allow us, later on, to play with it and render (=replace the variables within it, with the data we would like to have) it.

The loading part is very simple and done with one line

```
template = j2_env.get_template('thank_you.j2')
```

Now we have our template (with the variables) thanks to ‘get_template’. You may ask yourself at this point how did it know to find the template in ‘templates’ directory. This is not a built-in behavior, we simply told our loader the templates are there when we created ‘j2_env’ instance.

## Render the template

Rendering in this context is very similar to its more common context, the computer graphics rendering. In computer graphics, we are creating a photorealistic image from a model. In this case, we are generating a file, or set of data out of a template.

This is done by using our template variable from the previous section.

```
rendered_template = template.render(name='mario', event='e3')
```

We rendered our template and to do that we need to define what are the values for ‘name’ and ‘event’ in the template. After rendering the template, we save the result to ‘rendered_file’. If we’ll print ‘rendered_file’, this is what we’ll get:

```
Hello Mario!
Thank you for participating in e3 event.

See you next year!
```

## Complete code

For your convenience, I gathered all the lines here in one block

from jinja2 import Environment
from jinja2 import FileSystemLoader

j2_env = Environment(loader=FileSystemLoader('templates'),                                                                                                                            
                     trim_blocks=True)

template = j2_env.get_template('thank_you.j2')

rendered_file = template.render(name='mario', event='e3')

print(rendered_file)
