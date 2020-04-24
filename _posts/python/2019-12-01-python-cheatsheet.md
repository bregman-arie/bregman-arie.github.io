---
layout: single
title:  "Python Cheatsheet"
date:   2019-12-01
description: "Python Cheatsheet"
categories: python
toc: true
toc_label: "topics"
---

## Lists

### Generate a list with 10 random numbers

```
import random

[random.randint(1, 50) for iter in range(10)]
```
