---
layout: single
permalink: /aws-solutions-architect-associate
description: "AWS Solutions Architect Associate"
title:  "AWS: Solutions Architect Associate"
date:   2019-11-25
categories: aws
tags:
  - aws
  - associate
  - architect
  - summary
toc: true
toc_label: "Topics"
---

## Global Infrastructure
  
* Availability Zone is one or more data centres, each with redundant power, networking and connectivity, housed in separate facilities so each AZ is designed to be an independent failure zone
* Region is a geographical/physical area. Region consists of two or more availability zones
* Edge locations are endpoints for AWS which are used for content caching

## IAM

IAM is used for managing users and their level of access to AWS Console.

### Terms

* Users - People who are using AWS
* Groups - A collection of users who inherit their permissions from the group permissions
* Policies - These are Policy documents. They are in JSON format and their purpose is to give permissions as to what a user, group or role is able to do
* Roles - a way to allowing some part of AWS to do something with another part of AWS. You assign roles to AWS resources

### Features

* Granular Permissions - you can determine who has access to different services
* Shared Access for AWS account
* MFA (Multi-Factor Authentication)
* Authentication from external identities source like Facebook, Linkedin, etc.
* PCI DSS Compliance compatible
* Temporary access for users, services and devices
* Customized password policy
* Integration with other AWS services
* Centralized location for AWS account
