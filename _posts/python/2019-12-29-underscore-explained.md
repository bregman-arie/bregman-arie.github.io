---
layout: single
title:  "Python: _ explained"
date:   2019-12-29
description: "python _ underscore explained"
permalink: /python-underscore-explained
author_profile: false
categories: python
toc: true
toc_label: "topics"
---

## What _ is used for in Python?

_ in Python is used for different reasons:

1. Throwaway variable for variables you don't need to use in your code
2. Last valu

## Throwaway variable

In the following block of code you can see we are iterating on input of names and since we only need to print the name which is the input we don't need the element of the range itself so we "throw" it away.

```
for _ in range(int(input())):
        name = input()
        print(name)
```

It's also useful when using functions which return multiple variables and you don't really have a use for all the variables the function returned

```
x, y, _ = get_data()
```
