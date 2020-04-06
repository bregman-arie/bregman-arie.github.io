---
layout: single
title:  "Python: Working with Parquest Files"
date:   2020-04-06
categories: python
permalink: /python-working-with-parquet-files
description: "How to use Python to work with parquet files. Reading parquest files. Remvoing rows from parquet data"
tags:
  - python
  - parquet
toc: true
toc_label: "Topics"
---

## Requirements

Start by creating a virtualenv and install pyarrow in it

```
virtualenv ~/pq_venv && source ~/pq_venv/bin/activate
pip install pyarrow
```
## Reading parquet files

Assuming you have in your current directory a parquet file called "data.parquet", run the following

```
>>> table = pq.read_table('data_paruqet')
```

Let's see what we have now stored in table variable

```
>>> table

{b'pandas': b'{"index_columns": [], "column_indexes": [], "columns": [{"name":'
            b' "createddate", "field_name": "createddate", "pandas_type": "uni'
            b'code", "numpy_type": "object", "metadata": null}, {"name": "atta'
            b'chment_uuid", "field_name": "attachment_uuid", "pandas_type": "u'
            b'nicode", "numpy_type": "object", "metadata": null}, {"name": "pa'
            b'th", "field_name": "path", "pandas_type": "unicode", "numpy_type'
            b'": "object", "metadata": null}, {"name": "content", "field_name"'
            b': "content", "pandas_type": "unicode", "numpy_type": "object", "'
            b'metadata": null}, {"name": "hostname", "field_name": "hostname",'
```

That's not really readable. Let's try again.

```
>>> table.to_pandas()

             createddate                       path      version
0    2020-01-02 03:13:48  installed-rpms             ...     6.7
1    2020-01-02 03:24:53  commands/rpm/package-data  ...     7.1
2    2020-01-02 03:44:42  commands/rpm/package-data  ...     7.5
3    2020-01-02 03:50:25  installed-rpms             ...    5.11
4    2020-01-02 03:58:02  commands/rpm/package-data  ...     7.6
..                   ...                             ...     ...
103  2020-01-02 12:12:18  commands/rpm/package-data  ...    6.10
104  2020-01-02 12:16:22  commands/rpm/package-data  ...    6.10
105  2020-01-02 12:16:34  commands/rpm/package-data  ...     7.7
106  2020-01-02 12:17:51  commands/rpm/package-data  ...     7.4
107  2020-01-02 12:21:57  commands/rpm/package-data  ...     7.4
```

Much better. We can see there 108 rows and 4 columns.


### Accessing specific columns and rows

As you've seen the table represented in a dimensional list, meaning you can access its columns the same as you access an item in a regular list. Let's see an example

```
# First column
>>> table[0]

[
  [
    "2020-01-02 03:13:48",
    "2020-01-02 03:24:53",
    "2020-01-02 03:44:42",
    ...

# Last column
>>> table[-1]

[
  [
    "6.7",
    "7.1",
    "7.5",
    ...
```

Now let's see how to access specific row on a specific column

```
# Last column, third row
>>> table[-1][2]

# First column, first row
>>> table[0][0]
"2020-01-02 03:13:48",
```

## Modifying Parquet Files

While removing columns from a parquet table/file is quite easy and there is a method for doing so, the same doesn't applies on removing rows.<br>
The way I remove rows is by converting a table to a dictionary where keys=columns names and values=columns values=rows. Once converted, I remove the rows I would like to remove and convert it back to a parquet table which I can then choose to save to a file.

Let's see how it's done. We'll remove rows 4-106 from a given table.

```
table = pq.read_table('x.parquet')
data_dict = table.to_pydict()
for k, v in data_dict.items():
    del v[4:107]
new_table = table.from_pydict(data_dict)
```
