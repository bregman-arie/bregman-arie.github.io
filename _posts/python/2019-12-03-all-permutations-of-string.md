---
layout: single
title:  "Python: Find all the permutations of a string"
date:   2019-12-03
description: "python all string permutations"
permalink: /python-all-string-permutations
author_profile: false
categories: python
toc: true
toc_label: "topics"
---

## Task

Find all the permutations of a given string

For example, all the permutations of the string "abc" are: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

## What are permutations?

Permutation is the act of arranging the members of a set into a sequence or order.
All permutations = all the possible sequences as seen in the example above.

## Solution #1 - Itertools

```python
from itertools import permutations

[''.join(p) for p in permutations("abc")]
```

## Solution #2

```python
def permutations(string, step):

    if step == len(string):
        print(''.join(string))

    for i in range(step, len(string)):
        str_copy = [char for char in string]
        str_copy[step], str_copy[i] = str_copy[i], str_copy[step]
        permutations(str_copy, step + 1)

permutations("abc", 0)
```

This is a nice solution using recursion to swap to characters every time.
In case you find it hard to follow you can try using a debugger or add print statements

## Solutins #3

```python
def permute_string(string):

    if len(string) == 1:
        return [string]

    permutations = []
    for i in range(len(string)):
        print(i)
        swaps = permute_string(string[:i] + string[(i+1):])                                                                                                                  
        print("swaps: %s" % swaps)
        for swap in swaps:
            permutations.append(string[i] + swap)

    return permutations
         
print(permute_string("abc"))
```

Similar idea but cleaner invocation, without providing step number.
