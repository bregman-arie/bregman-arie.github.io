---
layout: single
title:  "Elasticseach: search examples with Python
permalink: /elasticsearch-python-search
description: "Search in elasticsearch index with Python code"
date:   2020-25-01
categories: elastic
tags:
  - elasticsearch
  - python
---

This post will focus on performing search calls on elasticsearch index using the elasticsearch-python library. Let's start

## Basic Search (match_all)

The following 

```
body={
    "query": {
        "match_all": {}
    }
}

es = Elasticsearch("http://my.elasticsearch:9200")
res = es.search(index="some_index", body=body)
print(res)
```

The result looks like this (I reduced the hits part from 10 items to 2)

```
{
   "took":769,
   "timed_out":false,
   "_shards":{
      "total":1,
      "successful":1,
      "skipped":0,
      "failed":0
   },
   "hits":{
      "total":{
         "value":10000,
         "relation":"gte"
      },
      "max_score":1.0,
      "hits":[
         {
            "_index":"logstash",
            "_type":"_doc",
            "_id":"XaxaaUBe_Owq5UYnY1R",
            "_score":1.0,
            "_source":{
               "job":"build-image",
               "build":2
            }
         },
         {
            "_index":"logstash",
            "_type":"_doc",
            "_id":"WdasdadBe_Owq5UYnY1R",
            "_score":1.0,
            "_source":{
               "job":"compile",
               "build":5
            }
         },
         ...
      ]
   }
}
```

The interesting thing we immediately learn from this output is that it doesn't really returns all documents/hits. I got back 10 documents and that's a good thing, as you probably wouldn't want to get 100,000 documents back.

### Count the number of hits

Counting the number of hits can be done this way: `print("Number of hits:", len(res["hits"]["hits"]))`

### Increase hits size

Use the `size` argument in your search call: `res = es.search(index="logstash", body=body, size=20)`

## Search for word in a given field

From now on, the only thing will be changing is the `body` variable. So I won't be showing the whole code, only the parts that are changing.

```
body={
    "query": {
        "match": {
            "job": {
                "query": "compile"
            }
        }
    }
}
```

Running the above code will basically check in which documents, the field `job` includes the word `compile`. You'll get back all the documents where this condition is met.

### Search for multiple words in a given field

You can also search for multiple words. There basically nothing you need to change in the above code except adding the words you are interested in. The reason is that by default something like `"query": "compile build install"` is treated like `"query": "compile OR build OR install"`

```
body={
    "query": {
        "match": {
            "job": {
                "query": "compile"
            }
        }
    }
}
```

### Search for a sentence in a given field

But you don't always want to search with OR. Sometimes you would like to search for documents where a field contains all the words you mention . For that you can use the `AND` operator. Note that the order doesn't matter. It will simply check the words (separated by space) are in the value of the field.

```
body={
    "query": {
        "match": {
            "job": {
                "query": "compile the package",
                "operator": "AND"
            }
        }
    }
}
```

This Yoda phrasing works exactly the same way:

```
body={
    "query": {
        "match": {
            "job": {
                "query": "the compile package",
                "operator": "AND"
            }
        }
    }
}
```

## Count each unique value of a given field

Aggregations is a powerful tool, allowing you run much more complex queries. Let's see any example where we will count in how many documents each unique value of the field `job` is included.

```
body={
    "aggs": {
        "group_by_job": {
            "terms": {
                "field": "job.keyword"
            }
        }
    }
}
```

The result looks like this:

```
...
{
   "aggregations":{
      "group_by_job":{
         "doc_count_error_upper_bound":0,
         "sum_other_doc_count":1506,
         "buckets":[
            {
               "key":"compile",
               "doc_count":1569
            },
            {
               "key":"build-image",
               "doc_count":873
            }
         ]
      }
   }
}
...
```
