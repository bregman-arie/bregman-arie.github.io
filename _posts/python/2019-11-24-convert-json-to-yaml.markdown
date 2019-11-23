---
layout: single
title:  "Python: Convert JSON to YAML"
permalink: /python-convert-json-to-yaml
date:   2019-11-24
categories: python
description: "convert json to yaml using Python"
tags:
  - python
  - json
  - yaml
toc: true
---

Use the following code to convert a JSON file into a YAML file

```python
#!/usr/bin/env python
import json
import yaml

with open('my_json', 'r') as f:
    json_data = json.loads(f.read())

with open('my_yaml', 'w+') as f:
    f.write(yaml.dump(json_data))
```
