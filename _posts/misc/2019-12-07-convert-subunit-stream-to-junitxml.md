---
layout: single
permalink: /convert-subunit-to-junitxml
description: "Convert Subunit stream to Junitxml"
title: "Convert Subunit stream to Junitxml"
date:   2019-12-07
categories: tests
tags:
  - subunit
  - convert
  - junitxml
toc: true
toc_label: "Topics"
---

## What is Subunit?

Subunit is a streaming protocol for test results and widely used in many open source projects. The subunit stream is created while you are running tests.

Subunit comes with a lot of useful filters such as:

subunit2gtk
subunit2pyunit
tap2subunit

I will focus on subunit2junitxml which converts a subunit stream into a junitXML representation. It's useful in cases where your system is not supporting publishing tests using pure subunit stream.

## Installation

First let's start with installing the required packages.

```
yum install -y subunit-filters python-junitxml
```

## Convert

Now run the following command on your subunit stream

```
cat my_subunit_stream | subunit2junitxml > tests_results.xml
```

This command will use the subunit filters to convert the stream into junitXML.<br>
In order to verify it worked, read the file and see if it's in the desired format.

If it didn't work, you may need first to convert the stream into the newer protocol version 2. In such case simply run:

```
cat my_subunit_stream | subunit-1to2 > my_subunit_stream_v2
cat my_subunit_stream_v2 | subunit2junitxml > tests_results.xml
```

That's it. Now you have it in junitXML format.
