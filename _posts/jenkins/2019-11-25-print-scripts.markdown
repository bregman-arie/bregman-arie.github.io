---
layout: single
title:  "Jenkins Scripts: Print Jobs"
date:   2019-11-24
permalink: /jenkins-print-scripts
categories: jenkins
description: "jenkins script for printing jobs with regular expressions"
tags:
  - jenkins
  - jobs
  - script
toc: true
toc_label: "Topics"
---

In this post we'll see how write a very simple script to print a list of all Jenkins jobs.<br>
We'll also see how to print jobs names based on given regex.

## Print Jobs

The following script will first print the number of jobs on our Jenkins and line below it will print the names of all the jobs we have.

```groovy
jobs = jenkins.model.Jenkins.instance.getJobNames()                                                                                                                          
 
println "Number of jobs: " + jobs.size()
println "\nList of jobs:\n" + jobs.join("\n")
```
 
## Print Jobs - Another versions

This following script will print the same information, it's simply using a little bit different syntax.
 
```groovy
jobs = jenkins.model.Jenkins.instance.items
 
println "Number of jobs: " + jobs.size()
println "\nList of jobs:\n"
 
jobs.each { job -> println job.name }
```

## Print Jobs based on given regular expressions

The following script will print only jobs whose name include "prod" and "v1" strings accordingly. If v1 is before prod, the name of the job will not be included in the result.

```groovy
jobs = jenkins.model.Jenkins.instance.items.findAll { job -> job.name =~ /prod.*v1*$/ }

println "Number of jobs: " + jobs.size() + "\n"

jobs.each { job -> println job.name }
```

If you would like to see a different version of the above scripts, let me know in the comments :)
