---
layout: single
title:  "Python: Check whether a string is a Palindrome"
date: 2019-12-07
description: "python check if string is palindrome"
author_profile: false
permalink: /python-check-if-palindrome
categories: python
toc: true
toc_label: "topics"
---

## What is a Palindrome? 

A palindrome is a sequence of characters which reads the same backward or forward.

For example dad, mom, kayak, a santa at nasa, anna.<br>
Not palindromes: mario, luigi, ice cream.

There is more than one way in python to check whether given string is palindrome or not. Let's have a look.

## Method #1

```python
def is_palindrome():
    return my_str == my_str[::-1]
```

defiantly one of the shortest ways to do it.<br>
[::-1] taking care of inverting the string and all is left is simply compare between the original to inverted string.

## Method #2

The following way is slower than the first method

```
def is_palindrome():
    return my_str == ''.join(reversed(my_str))
```

## Method #3

My least favorite but quite common (especially in other languages)

```
def is_palindrome():
    for i in xrange(0, len(my_str)/2):
        if my_str[i] != my_str[len(my_str)-i-1]:
            return False
    return True
```

## How to handle case-sensitive palindrome?

You can use upper() when comparing the reversed and the original strings.
