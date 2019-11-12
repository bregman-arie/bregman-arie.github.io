---
layout: single
title:  "Python: remvoe duplicates from a sorted list"
date:   2019-11-12 
categories: python
toc: true
toc_label: "Solutions"
---

The goal: remove any duplicates from a sorted list.<br>
Example: given the list `[2, 2, 4, 5, 5]` we want to get the result: `[2, 4, 5]`

## Set

One way to remove duplicates from a list is using `set` this way:

{% highlight python %}

list1 = [2, 2, 4, 5, 5]
set(list1)
#=> the result is {2, 4, 5}
{% endhighlight %}

Note that we will get back a set. To get a list, we can convert the set back to a list: `list(set(list1))`

## New list comparison

We can create another empty list and check whether an item from the original list is in the new list.<br> We will add the item to the new list only if it's already there.
This way is quite popular as it can also be applied in other languages (as opposed to the `set` way)

{% highlight python %}

list2 = []
for i in list1:
    if i not in list2:
        list2.append(i)

#=> the result is [2, 4, 5]
{% endhighlight %}

This can also be done in a form of list comprehension:

{% highlight python %}

list2 = []
[list2.append(i) for i in list1 if i not in list2]

{% endhighlight %}

## In-place removal

In the previous solution we used a new list. Let's see how to achieve the same result with in-place modification of the list we have:

{% highlight python %}

i = 0
while i < len() - 1:
    if list1[i]  == list1[i+1]:
        del list1[i]
    else:
        i = i + 1

#=> the result is [2, 4, 5]
{% endhighlight %}

## Pandas

There is a way to get a list without duplicates using `pandas`.<br>
Personally, I don't see a particular reason to use this way but nonetheless, it's another way out there so let's see how it's done

{% highlight python %}

import pandas
pandas.unique(list1).tolist()

#=> the result is [2, 4, 5]
# The same way is supported by using Numpy
{% endhighlight %}
