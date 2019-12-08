---
layout: single
permalink: /ssl-certificate-problem-self-signed
description: "ssl ceritifcate problem self signed certificate"
title:  "SSL Certificate Problem: self signed certificate"
date:   2019-12-08
categories: security
tags:
  - ssl
  - certificate
toc: true
toc_label: "Topics"
---

```
SSL certificate problem: self signed certificate in certificate
```

If you are getting the message above the while trying to perform git command like cloning a project, it means the SSL verification from Git server on your ceritificates failed. Either the certificates are invalid or they are missing.


## Solution

Set up the required certificates in `/etc/pki/ca-trust/source/anchors/`

## Workaround

While not recommended and considered a potential security risk, you can disable the Git SSL verification until you set up the certificates properly. Use the following command to set SSL verification to false (= turn it off)

```
git config --global http.sslVerify false
```
