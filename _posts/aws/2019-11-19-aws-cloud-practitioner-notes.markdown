---
layout: single
permalink: /aws-cloud-practitioner
description: "aws cloud pracitioner certificate summary. Includes everything you need to know in order to pass the certificate exam."
title:  "AWS: Cloud Practitioner Summary"
date:   2019-11-19
categories: aws
tags:
  - aws
  - practitioner
  - certificate
  - summary
toc: true
toc_label: "Topics"
---

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
  
## The Five Pillars of Framework

### Operational Excellence

To run and monitor systems to deliver business value and to continually improve supporting processes and procedures

### Security

The ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies

### Reliability

The ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues

### Performance Efficiency

The ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve

###  Cost Optimization

The ability to run systems to deliver business value at the lowest price point

## Global Infrastructure
  
* Availability Zone is one or more data centres, each with redundant power, networking and connectivity, housed in separate facilities so each AZ is designed to be an independent failure zone
* Region is a geographical/physical area. Region consists of two or more availability zones
* Edge locations are endpoints for AWS which are used for content caching
    
## IAM
  
* IAM (Identity Access Management) is global. You do not need to specify region when dealing with IAM related resources
  * There are 3 ways to access the AWS platform
    * Console
    * Programmatically(CLI)
    * Software Developers Kit (SDK)
  * Root account is the email address you to set up the AWS account and it has full permissions
  * Root account should not be given to anyone, instead the root account should create users
  
## S3

{% include aws/s3.md %}

## EC2

EC2 is Amazon Elastic Compute Cloud. A compute based service. It allows you to create virtual servers in the cloud

### Pricing models

On Demand - pay a fixed rate by the hour/second with no commitment. Good for:
  * users that want low cost and flexibility
  * applications with short terms, spiky or unpredictable workloads that cannot be interrupted
  * application being developed or tested for the first time

Reserved - you get capacity reservation. Contract terms: 1 year or 3 years. The longer, the cheaper. Good for:
  * Good for:
  * Predictable usage
  * Apps that required reserved capacity
  * Users who able to make upfront payments
  * Pricing:
    * Standard reserved instances - The more you pay and longer, the greater is the discount
    * Convertible Reserved Instances - These offer up to 54% off on demand capability to change the attributes of the RI 
    * Scheduled Reserved Instances - Available to launch within the time windows you reserve
        
Spot - Enables you to bid whatever price you want for instances
  * when spot price hit your bid, you'll get the instance
  * when spot price is below your bid price, you'll lose the instance
  * Spot is Good for:
    * Apps which have flexible start and end time
    * Apps that are only feasible at very low compute prices
    * Users with urgent computing needs for large amount of additional capacity

Dedicated Hosts - physical EC2 server dedicated for your use. Good for:
  * Regulatory requirements which may not support multi-tenant virtualization
  * Licenses which don't support multi-tenants or cloud deployments
  * Pricing
    * Can be purchased on on-demand (hourly)
    * Can be purchased as a reservation for up to 70% off the on-demand price

### EBS

Allows you to create storage volumes and attach them to Amazon EC2 instances. Think of it as virtual disk in the cloud.<br>
Volumes are placed in a specific AZ where they are automatically replicated for HA.

Types:

    * SSD
      * General purpose SSD (GP2) - balanced price and performance
      * Provisioned IOPS SSD (IO1) - highest-performance SSD volume for mission-critical low-latency or high-throughput workloads
    * Magnetic
      * Throughput Optimized HDD (ST1) - low cost HDD volume designed for frequently accessed, intensive workloads
      * Cold HDD (SC1) - Lowest cost HDD volume for less frequent access
      * Magnetic - deprecated

In order to keep the data on EBS volumes safe you should ensure that EBS is encrypted at rest and also create EBS snapshots.

### Security Group
  * A set of firewall rules that control the traffic to your instance

## CloudFront

CloudFront is a content delivery network (CDN) is a system of distributed servers that deliver web content to users based on the geographic location of:

  * the user
  * the origin of the web content
  * the content delivery server

### Terminology

* Edge location - the location where the content is cached. These location allow both read and write
* Origin - The origin of the files which CDN will distribute (can be EC2 instance, S3 bucket, Elastic LB, ...)
* Distribution - This name given the CDN (which consists of Edge locations)

### How it works

* Users will try to query a file which happens to be on another geographic location.
* Since it's not available in the edge location, they will get it from the original location
* The file which wasn't available in the edge location will now be stored at the edge location
* Any future users will get it from the edge location in their area instead of going to the origin

### Delivery Methods

* Web Distribution - typically used for websites
* RTMP - used for media streaming

### Cache

* objects are cached for the life of TTL in seconds
* it's possible to clear cached objects but it's not free

## AWS Snowball

A transport solution which was designed for transferring large amounts of data (petabyte-scale) into and out the AWS cloud.

## CLI

It's possible (and common) to manage AWS resources from the CLI using the `aws` command.

* use `aws configure` to set up the CLI
  * it stores configuration in `~/.aws`

Note: roles are more secure than using access key id's and secret access keys. Roles can be applied to EC2 instances at any time and they are universal (no need to specify region)

* The general usage of the `aws` cli is: `aws <service> <args>`
For example:
  * `aws ec2 ls`
  * `aws s3 ls`

## Load Balancer

* In order to create a load balancer go to EC2 -> Load Balancer in the left side panel -> Create load balancer

### Types of load balancers

* Application Load Balancer - for layer 7 (HTTP, HTTPS) traffic
* Network Load Balancer - for ultra-high performances or static IP addresses)
* Classic Load Balancer - when your app is running in the EC2-Classic network. Good for low costs and test environments

## Databases

* Relational DB - Consists of tables when each table has several rows and each row includes several fields/columns
* Relational DB on AWS are called **RDS**. There are several DBs of this type:
* SQL server, Oracle, MySQL Server, PostgreSQL, Aurora and MariaDB
* RDS has two key features
* Multi availability zone. This is good for Disaster Recovery
* Read Replicas which are copies of your database. This is great for performance as you read from this copies.
* You can 5 copies of your database

### ElastiCache

AWS Elasticache is a fully managed Redis or Memcached in-memory data store.

It's great for use cases like two-tier web applications where the most frequently accesses data is stored in ElastiCache so response time is optimal.

### Amazon Aurora

A MySQL & Postgresql based relational database.
Great for use cases like two-tier web applications that has a MySQL or Postgresql database layer and you need automated backups for your application.

### AWS Database Migration Service

A service used to migrate databases (e.g. Oracle database) to AWS.

## Organizations & Accounts

* Organizations - allow you to centrally manage billing, control access, compliance security, and share resources accross your AWS accounts
* Root Account User - is a single sign-in identity that has complete access to all AWS services and resources in an account. Each account has a Root Account User
* Organization Units - are a group of AWS accounts within an organization which can also contain other organizational units - creating a hierarchy
* Services Control Policies - give central control over the allowed permissions for all accounts in your organization helping to ensure your accounts stay within your organization's guidelines.

## AWS Pricing

AWS philosophy regarding pricing:

* You pay as you go
* You pay for what you use
* You pay less as you use more
* You pay less when you reserve capacity

### Drivers of cost with AWS

* Compute
* Storage
* 

## CloudFormation

An infrastructure-as-a-code service which allows you to create resources and set up services by using templating scripts.

This is great for re-using work (setup of different AWS environments and resources) for different users/customers.

## CloudTrail

Monitors and logs all api calls between aws services.<br>
It basically records AWS management console actions and API calls and by using it you can tell:

* What users, accounts made the calls
* Where the calls were made from (IP addresses) and when

Some examples of when to use it:

* EC2 instances were terminated and you would like to find out who did it

## CloudWatch

A collection of multiple services:

  * CloudWatch Logs - any custom log data, memory usage, Rails logs, Nginx logs
  * CloudWatch Metrics - metrics that are based off of logs eg. Memory Usage
  * CloudWatch Events - trigger an event based on a condition (e.g. take snapshot every hour)
  * CloudWatch Alarms - triggeres notifications based on metrics
  * CloudWatch Dashboard - create visualization based on metrics

In one short line,  CloudWatch monitors performances.

## CloudSearch

It's a search engine. Use case: you have an ecommerce website and you want to add search bar

## AWS Networking

* VPC - a logically isolated section of the AWS Cloud where you can launch AWS resources
* Subnets - a logical partition of an IP network into multiple, smaller network segments
* Internet Gateway - enable access to the internet
* Route Tables - determine where network traffic from your subnets are directed
* NACLs - Acts as a firewalls at the subnet level
* Security Groups - Acts as firewall at the instance level

## AWS Security

### Shared Responsibility Model

Shared Responsibility Model is about who is responsible for what in AWS cloud.

* Customers are responsible for security in the cloud
    * You are responsible for any data you upload to AWS
    * You are responsible for configuring the services you are using
    * You are responsible for platform, applications identity and access management

* AWS is responsible for security of the cloud
    * Hardware & Global Infrastructure
    * Operation of Managed services
        * Compute, Storage, Database, Networking

Responsibilities vary depending on the service used. AWS is basically responsible for anything you can't touch.



### AWS Compliance Programs

Compliance programs is a set of internal policies and procedures of a company to comply with laws, rules, and regulations or to uphold business reputation.

The idea is that you can choose compliance program based on the type of your buissness. Few examples:

* Health: HIPAA
* Payment Card Industry Data Security Standard: PCI

### AWS Artifact

* Artifacts is about why an enterprise should trust AWS
* You can access AWS artifacts to download the files to prove you meet the compliance.

Steps to get the files from an artifact:

* Go to AWS Artifacts
* Choose an artifact -> click on agree & download
* Open the downloaded PDF
* Follow the steps in the document (click on paperclip and choose the file you want)

### AWS Inspector

* Helps you with determining whether your app is secured by running an automated security assessment
* Once it's done running assessment, it provides you with detailed report on any vulnerabilities it found and orders them based on severity
* Inspector runs in your EC2 instance and performs host and network assessments

The way it does the assessment:

* Installs the AWS agent on your EC2 instances
* Run an assessment for your assessment target
* Review your finding and remediate security issues

### AWS WAF

* AWS Web Application Firewall protects your web applications from the common web exploits
* You write your own rules to allow or deny traffic based on the contents of an HTTP requests
* You can use a ruleset from a trusted AWS Security Partner in the AWS WAF Rules marketplace
* WAF can be attached to either CloudFront or an Application Load Balancer

### AWS Shield

* AWS Shield is a managed DDoS (Distributed Denial Of Service) mitigation service that safeguards applications running on AWS from DDOS attacks
* A DDoS attack is a malicious attempt to disrupt normal traffic by flooding a website a large amount of fake traffic
* All AWS customers use it (the standard plan) when they route their traffic through Route53 or ClodFront
* Protects you against layer 3, 4 and 7 attacks
* Two Plans
    * Shield Standard - Free, for protection against most common DDoS attacks
    * Shield Advanced - 3000 USD / Year for additional protection against larger and more sophisticated attacks

### VPN

AWS VPN allows you to establish a secure and private tunnel from your network or device to the AWS network.

Two types:
 * AWS Site-to-Site VPN - Securely connect on-premises network or branch office site to VPC
     * Use case: connect an entire office or network to AWS
 * AWS Client VPN - Securely connect to AWS or on-premises networks
     * Use case: connect employee working on his/her laptop to the AWS network

## AWS Trusted Advisor

* Online resource which helps you to reduce costs, improve security and increase performances
* It provides you with advises and guidance on how to improve security, optimize costs and improve performances based on AWS best practices

There are two modes for using it:

1. Core Checks and Recommendations - free.
2. Full Trusted Advisor - for enterprises and business companies

Use cases:

* Let's say you have 500 Elastic IP addresses. You can use the Trusted Advisor to find out how many of them are unused

## AWS Personal Health Dashboard

The benefits of using the AWS Personal Health Dashboard are:

* It provides detailed guidance to address AWS events impacting your resources
* Personalized view of service health

## AWS Quick Starts

From AWS Quick Starts web page: "Quick Starts are built by AWS solutions architects and partners to help you deploy popular technologies on AWS, based on AWS best practices for security and high availability."
