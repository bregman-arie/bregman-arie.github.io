---
layout: single
permalink: /aws-solutions-architect-associate
description: "AWS Solutions Architect Associate certificate summary"
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

IAM is used for managing users and their level of access to AWS Console.<br>
It is universal meaning, it's not applied per region.

### Terms

* Users - People who are using AWS
* Groups - A collection of users who inherit their permissions from the group permissions
* Policies - These are Policy documents. They are in JSON format and their purpose is to give permissions as to what a user, group or role are able to do
* Roles - A way for allowing a service of AWS to use another service of AWS. You assign roles to AWS resources.

* Root account - This is the account created when you create your AWS account.

Note: when new users created they don't have permissions. They are assigned with Access Key ID and Secret access which used for CLI and API access but can't be used for AWS console.

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

## S3

{% include aws/s3.md %}
