---
layout: single
permalink: /linux-limit-number-of-open-files
description: "linux limit number of open files"
title:  "Linux: Ulimit and number of open file descriptors"
date:   2019-12-07
categories: linux
tags:
  - linux
  - ulimit
toc: true
toc_label: "Topics"
---

The goal of this post is to show you how to raise the limit on the number of open file descriptors in your system.

## List the limits

Depends on the operating system you are using, you might have a limit of 4096 open files. This means that any application that will try to open more than 4096 files will fail to do so unless the user who ran the application has different (non default) set of limits.<br>

You can check what is the current limit with the `ulimit -Hn` command.<br>
This will show you the hard limit of the maximum number of open files for your user. You can also use -S to check the soft limit.

if you wish to check the max open file descriptors for a specific process, use the following command

```
cat /proc/[Process ID]/limits
```

To check what is the system limit for the number of files descriptors, use the following command:

```
cat /proc/sys/fs/file-max
```

## Change the limit

Let's change the limit for the user mario. All the limits are configured in /etc/security/limits.conf

```
vi /etc/security/limits.conf
```

Now add or change the following lines:

```
mario soft nofile 4096
mario hard nofile 20480
```

save the file and verify the result by using the `ulimit` command.

Note: If you want to set maximum number of processes use nproc instead of nofile<br>
Note 2: If you want to set this setting to all users use * instead of specify user name

Let's also change the limit for the entire system. For this we'll edit /etc/sysctl.conf

```
vi /etc/sysctl.conf
```

Put the following line in the file

```
fs.file-max = 200500
```

Now update the system with the following command

```
sysctl -p
```

## List the number of open files

To check the number of open files on your system, use the lsof command

```
lsof | wc -l
```

You can also check the allocated file descriptors by using:

```
cat /proc/sys/fs/files-nr
```

* The first field in the output is the number of total allocated files descriptors.
* The second field is unused file descriptors and finally
* The third field is the maximum file descriptors that can be used.
