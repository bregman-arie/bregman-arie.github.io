---
layout: single
permalink: /aws-create-s3-lifecycle-policy
description: "AWS Create S3 lifecycle policy transition from one storage class to another like from standard to glacier"
title:  "AWS S3: Create Lifecycle Policy"
date:   2020-05-02
categories: aws
tags:
  - aws
  - practitioner
  - s3
toc: true
toc_label: "Topics"
---

## S3 Lifecycle Policy in a nutshell

Storage can be expensive, especially when storing and using large quantities of data. As you may already know, AWS offers multiple storage classes. Each class has its own characteristics, usually varies in price, availability and retrieval times.

In some cases a user or organization who initially stored data in the default storage class or any class with high availability and quick retrieval times, may want to change the storage class later on as the data can become non-relevant or less-frequent accessed. For such use cases, AWS offers what is known as "S3 Lifecycle Policy" where AWS users can choose, based on different rules, to transition data to different storage classes.

## How to create an S3 Lifecycle Policy?

1. Go to S3 service in AWS console. If you don't have a bucket, create a new one.

2. Create a folder in your bucket by clicking on "Create folder" button and upload there a file. Make sure the file is using the standard storage class.

3. Now go to the S3 buckets page and click on your bucket and then on the "Management" tab. There you'll see a "Add lifecycle rule" button. Click on it and give your rule a name (e.g. std2glacier). Note that in the same page you can choose to add filter such as tag or name where the policy will first check if files match the prefix or the tag specified and only if matched, will then take an action on these matched files.

4. Click on "Next" button which will bring you to the "Transition" page where you can specify whether it will apply only on current version of files or also previous versions (You may not see it if "Versioning" is not enabled in your bucket). Next you would choose the transition which basically specifies to which storage class your files will transition to. In most cases I imagine users will transition to Glacier, again for reasons like cheaper storage and less-frequent access to the data. Once choosing the transition, you would also specify after how many days to transition the files since the creation of the objects. Note you can specify a different transition for previous versions. Click on "Next".

5. Once configured your transitions, you can specify whether to delete the files after a certain period of time. This is useful in case you don't need the files after a certain period of time.

That's it. You have your policy configured and your files will transition to a different storage class and also (if marked) will be permanently deleted after X days.
