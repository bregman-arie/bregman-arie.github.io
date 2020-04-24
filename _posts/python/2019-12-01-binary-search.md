---
layout: single
title:  "Python: Binary Search"
date:   2019-12-02
description: "python binary search"
author_profile: false
permalink: /python-binary-search
categories: python
toc: true
toc_label: "topics"
---

## What is Binary Search?

It's a search algorithm used with sorted arrays/lists to find a target value by dividing the array each iteration and comparing the middle value to the target value. If the middle value is smaller than target value, then the target value is searched in the right part of the divided array, else in the left side. This continues until the value is found (or the array divided max times)

## Implementation #1

```
import random

rand_num_li = sorted([random.randint(1, 50) for iter in range(10)])
target = random.randint(1, 50)

def binary_search(li, le, ri, target):
    if le <= ri:
        mid = ri + le // 2
        if li[mid] == target:
            return mid
        elif li[mid] < target:
            return binary_search(li, mid + 1, ri, target)
        else:
            return binary_search(li, le, mid - 1, target)
    else:
        return -1


print("List: {}\nTarget: {}\nIndex: {}".format(
    rand_num_li, target,
    binary_search(rand_num_li, 0, len(rand_num_li) - 1, target)))
```

## Performance

Best case: O(1)<br>
Average case: O(log n)<br>
Worst case: O(log n)<br>
