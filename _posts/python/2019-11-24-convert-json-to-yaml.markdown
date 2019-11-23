---
layout: single
title:  "Convert JSON to YAML"
date:   2019-11-24
categories: python
description: "convert json to yaml using Python"
tags:
  - python
  - json
  - yaml
toc: true
toc_label: "Topics"
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

You can do it with the same file

```python
#!/usr/bin/env python
import json
import yaml

with open('my_json', 'r') as f:
    f.write(yaml.dump(json.loads(f.read())))
```
