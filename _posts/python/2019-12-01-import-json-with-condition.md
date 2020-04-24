---
layout: single
title:  "Import JSON and check for condition"
date:   2019-12-01
description: "Import JSON and check for condition"
categories: json
permalink: /import-json-with-conditions
author_profile: false
toc: true
toc_label: "topics"
---

## Task

Given the following JSON file, print the name of every horror book

```
{
  "books":[
    {
      "name":"X",
      "genere":"horror",
      "publisher":"A"
    },
    {
      "name":"Y",
      "genere":"tech",
      "publisher":"B"
    },
    {
      "name":"Z",
      "genere":"horror",
      "publisher":"C"
    }
  ]
}
```

## Solution

```python
from json import load

with open("json_file") as f:
    books = load(f)
    for book in books:
        if book['genere'] == "horror":
            print(book['name'])
```
