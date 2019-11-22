---
layout: single
permalink: /aws-cloud-practicioner
title:  "AWS: Cloud Practicioner Notes"
date:   2019-11-19
categories: aws
toc: true
toc_label: "Topics"
---

These are my notes from studying to the AWS cloud practicioner exam.

## Cloud Computing

### What is cloud computing?

On-demand delivery of IT resources such as compute, networking, database and storage, through cloud platform via the Internet.

The definition in the dictionary is as follows: "the practice of using a network of remove servers hosted on the internet to store, manage, and process data, rather than a local server or a personal computer".

### The differences between Cloud Provides and On-Premise Solution

Cloud Providers:

* Someone else owns the hardware (servers, switches, ...)
* Someone else hires IT teams responsible for developing and maintaining the infrastructure
* Someone else pays for the real-estate required for both the hardware and the IT teams
* You are making use of the cloud and its resources

On-Premise Solution:

* You own the hardware (servers, switches, ...)
* You have to hire IT teams to manage and maintain the on-premise solution
* You pay for the real-estate required for the hardware and the IT teams
* Cost can be expensive or cheaper when compared to cloud providers but there is also a risk of not being able to set up the solution successfully or not being able to manage it in long term.

### The 6 advantages of cloud computing

* Trade capital expense for variable expense - pay for what you consume instead of investing in something you don't fully utilize (no upfront-cost).
* Capacity based on your needs - Cloud scales down or up based on your needs, no need to guess how much capacity you will need.
* Benefit from massive economies of scale - using the same infrastructure with other users and companies leads to great savings.
* Increase speed and agility - You can use the cloud to quickly build platforms and you don't depend on opening requests to your IT teams.
* Stop spending money running and maintaining data centers - Focus on what you want (your business goals and customers) instead of focusing on managing infrastructure.
* Go global in minutes - Easily deploy your application in multiple regions around the world. Have lower latency for the users of your app.

### 3 Types of cloud computing

* Infrastructure as a service (IAAS) - You are managing the server. It can virtual or physical. The provider (e.g. Amazon) will have no access to your server. EC2 is an example of IAAS.
* Platform As a service (PAAS) - Someone else manages the underlying hardware and OS. You focus on the application side. Heroku and Google app engine are examples of PAAS.
* Software As A service (SAAS) - You only worry about the software. As opposed to PAAS, you don't have to worry about the installation and the setup of the application. Examples: Office365, Gmail.


<div style="text-align:center" markdown="1">
![]({{ site.url }}/assets/images/blog/aws/cloud_computing_types.png)
</div>

### 3 types of cloud computing deployments

* Public Cloud - AWS, Azure & GCP
* Hybrid - Mixture of public and private.
* Private Cloud / On Premise - You own the infrastructure, hire the IT teams and buy/rent the real-estate. OpenStack for example.
  
### Global Infrastructure
  
* Availability Zone is one or more data centres, each with redundant power, networking and connectivity, housed in separate facilities.
* Region is a geographical/physical area. Region consists of two or more availability zones
* Edge locations are endpoints for AWS which are use for caching content.
    
### IAM
  
* IAM (Identity Access Management) is global. You do not need to specify region when dealing with IAM related resources
  * There are 3 ways to access the AWS platform
    * Console
    * Programmatically(CLI)
    * Software Developers Kit (SDK)
  * Root account is the email address you to set up the AWS account and it has full permissions
  * Root account should not be given to anyone, instead the root account should create users
  
### S3

* Simple Storage Service
* S3 is a secure, highly scalable object based storage
* S3 features:
  * Tiered Storage Available
  * Lifecycle Management - manage which storage tier the file you uploaded goes to
  * Versioning - managing different versions of your file and restore previous versions
  * Encryption
  * Security - using ACL (Access Control Lists) and bucket policies
* S3 is object-based storage. The data itself is spread across multiple locations.
* Files can be from 0 Bytes to 5 TB. There is unlimited storage.

### CloudFront

CloudFront is a content delivery network (CDN) is a system of distributed servers that deliver web content to users based on the geographic location of:

  * the user
  * the origin of the web content
  * the content delivery server

##### Terminology

* Edge location - the location where the content is cached. These location allow both read and write
* Origin - The origin of the files which CDN will distribute (can be EC2 instance, S3 bucket, Elastic LB, ...)
* Distribution - This name given the CDN (which consists of Edge locations)

##### How it works

* Users will try to query a file which happens to be on another geographic location.
* Since it's not available in the edge location, they will get it from the origin location
* The file which wasn't available in the edge location will now be stored at the edge location
* Any future users will get it from the edge location in their area instead of going to the origin

##### Delivery Methods

* Web Distribution - typically used for websites
* RTMP - used for media streaming

##### Cache

* objects are cached for the life of TTL in seconds
* it's possible to clear cached objects but it's not free

### CLI

It's possible (and common) to manage AWS resources from the CLI using the `aws` command.

* use `aws configure` to set up the CLI
  * it stores configuration in `~/.aws`

Note: roles are more secure than using access key id's and secret access keys. Roles can be applied to EC2 instances at any time and they are universal (no need to specify region)

* The general usage of the `aws` cli is: `aws <service> <args>`
For example:
  * `aws ec2 ls`
  * `aws s3 ls`

### Load Balancer

* In order to create a load balancer go to EC2 -> Load Balancer in the left side panel -> Create load balancer

##### Types of load balancers

* Application Load Balancer - for layer 7 (HTTP, HTTPS) traffic
* Network Load Balancer - for ultra-high performances or static IP addresses)
* Classic Load Balancer - when your app is running in the EC2-Classic network. Good for low costs and test environments

### Databases

* Relational DB - Consists of tables when each table has several rows and each row includes several fields/columns
* Relational DB on AWS are called **RDS**. There are several DBs of this type:
* SQL server, Oracle, MySQL Server, PostgreSQL, Aurora and MariaDB
* RDS has two key features
* Multi availability zone. This is good for Disaster Recovery
* Read Replicas which are copies of your database. This is great for performance as you read from this copies.
* You can 5 copies of your database
