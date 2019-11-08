---
layout: single
title:  "DevOps Interview Questions"
date:   2019-11-08 03:07:35 +0200
categories: jekyll update
---

:information_source: &nbsp;This repository contains interview questions on various DevOps and SRE related topics

:bar_chart: &nbsp;There are currently **506** questions

:books: &nbsp;To learn more about DevOps check the resources in [devops-resources](https://github.com/bregman-arie/devops-resources)

:thought_balloon: &nbsp;Different interviewers focus on different things. Some will focus on your resume while others might focus on scenario questions or specific technical questions. I tried to cover different types of questions for you to practice and test your skills

:pencil: &nbsp;You can add more questions & answers by submitting pull requests :) You can read more about it [here](CONTRIBUTING.md)

:cn: &nbsp;You can find a [中文](README-zh_CN.md) Chinese translation right [here](README-zh_CN.md)

****

<table>
<tr>
<td align="center"><a href="#devops"><img src="/assest/images/devops.png" width="70px;" height="75px;" alt="DevOps" /><br /><b>DevOps</b></a><br /><sub><a href="#devops-beginner">Beginner :baby:</a></sub><br><sub><a href="#devops-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#jenkins"><img src="/assest/images/jenkins.png" width="80px;" height="85px;" alt="Jenkins"/><br /><b>Jenkins</b></a><br /><sub><a href="#jenkins-beginner">Beginner :baby:</a></sub><br><sub><a href="#jenkins-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#git"><img src="/assest/images/git.png" width="110px;" height="75px;" alt="Git"/><br /><b>Git</b></a><br /><sub><a href="#git-beginner">Beginner :baby:</a></sub><br><sub><a href="#git-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#ansible"><img src="/assest/images/ansible.png" width="65px;" height="75px;" alt="Ansible"/><br /><b>Ansible</b></a><br /><sub><a href="#ansible-beginner">Beginner :baby:</a></sub><br><sub><a href="#ansible-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#Network"><img src="/assest/images/network.png" width="80x;" height="75px;" alt="Network"/><br /><b>Network</b></a><br /><sub><a href="#network-beginner">Beginner :baby:</a></sub><br><sub><a href="#network-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#linux"><img src="/assest/images/linux.png" width="75x;" height="75px;" alt="Linux"/><br /><b>Linux</b></a><br /><sub><a href="#linux-beginner">Beginner :baby:</a></sub><br><sub><a href="#linux-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#terraform"><img src="/assest/images/terraform.png" width="75px;" height="75px;" alt="Terraform"/><br /><b>Terraform</b></a><br /><sub><a href="#terraform-beginner">Beginner :baby:</a></sub><br><sub><a href="#terraform-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#docker"><img src="/assest/images/docker.png" width="75px;" height="75px;" alt="Docker"/><br /><b>Docker</b></a><br /><sub><a href="#docker-beginner">Beginner :baby:</a></sub><br><sub><a href="#docker-advanced">Advanced :star:</a></sub></td>
</tr>
<tr>
<td align="center"><a href="#coding"><img src="/assest/images/coding.png" width="75px;" height="75px;" alt="coding"/><br /><b>Coding</b></a><br /><sub><a href="#coding-beginner">Beginner :baby:</a></sub><br><sub><a href="#coding-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#python"><img src="/assest/images/python.png" width="80px;" height="75px;" alt="Python"/><br /><b>Python</b></a><br /><sub><a href="#python-beginner">Beginner :baby:</a></sub><br><sub><a href="#python-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#go"><img src="/assest/images/go.png" width="80px;" height="75px;" alt="Go"/><br /><b>Go</b></a><br /><sub><a href="#go-beginner">Beginner :baby:</a></sub></td>
<td align="center"><a href="#shell-scripting"><img src="/assest/images/bash.png" width="70px;" height="75px;" alt="Bash"/><br /><b>Shell Scripting</b></a><br /><sub><a href="#shell-scripting-beginner">Beginner :baby:</a></sub><br><sub><a href="#shell-scripting-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#kubernetes"><img src="/assest/images/kubernetes.png" width="75px;" height="75px;" alt="kubernetes"/><br /><b>Kubernetes</b></a><br /><sub><a href="#kubernetes-beginner">Beginner :baby:</a></sub></td>
<td align="center"><a href="#prometheus"><img src="/assest/images/prometheus.png" width="75px;" height="75px;" alt="Prometheus"/><br /><b>Prometheus</b></a><br /><sub><a href="#prometheus-beginner">Beginner :baby:</a></sub><br><sub><a href="#prometheus-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#mongo"><img src="/assest/images/mongo.png" width="75px;" height="75px;" alt="Mongo"/><br /><b>Mongo</b></a><br /><sub><a href="#mongo-beginner">Beginner :baby:</a></sub></td>
<td align="center"><a href="#sql"><img src="/assest/images/sql.png" width="75px;" height="75px;" alt="sql"/><br /><b>SQL</b></a><br /><sub><a href="#sql-beginner">Beginner :baby:</a></sub><br><sub><a href="#sql-advanced">Advanced :star:</a></sub></td>
</tr>
<tr>
<td align="center"><a href="#cloud"><img src="/assest/images/cloud.png" width="110px;" height="75px;" alt="Cloud"/><br /><b>Cloud</b></a><br /><sub><a href="#cloud-beginner">Beginner :baby:</a></sub><br><sub></td>
<td align="center"><a href="#aws"><img src="/assest/images/aws.png" width="110px;" height="75px;" alt="AWS"/><br /><b>AWS</b></a><br /><sub><a href="#aws-beginner">Beginner :baby:</a></sub><br><sub></td>
<td align="center"><a href="#azure"><img src="/assest/images/azure.png" width="80px;" height="75px;" alt="azure"/><br /><b>Azure</b></a><br /><sub><a href="#azure-beginner">Beginner :baby:</a></sub></td>
<td align="center"><a href="#gcp"><img src="/assest/images/gcp.png" width="75px;" height="75px;" alt="gcp"/><br /><b>Google Cloud Platform</b></a><br /><sub><a href="#gcp-beginner">Beginner :baby:</a></sub></td>
<td align="center"><a href="#openstack"><img src="/assest/images/openstack.png" width="75px;" height="75px;" alt="openstack"/><br /><b>OpenStack</b></a><br /><sub><a href="#openstack-beginner">Beginner :baby:</a></sub><br><sub><a href="#openstack-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#security"><img src="/assest/images/security.png" width="75px;" height="75px;" alt="security"/><br /><b>Security</b></a><br /><sub><a href="#security-beginner">Beginner :baby:</a></sub><br><sub><a href="#security-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#puppet"><img src="/assest/images/puppet.png" width="75px;" height="75px;" alt="puppet"/><br /><b>Puppet</b></a><br /><sub><a href="#puppet-beginner">Beginner :baby:</a></sub><br><sub><a href="#puppet-advanced">Advanced :star:</a></sub></td>
<td align="center"><a href="#openshift"><img src="/assest/images/openshift.png" width="75px;" height="75px;" alt="OpenShift"/><br /><b>OpenShift</b></a><br /><sub><a href="#openshift-beginner">Beginner :baby:</a></sub></td>
</tr><tr>
<td align="center"><a href="#monitoring"><img src="/assest/images/monitoring.png" width="75px;" height="75px;" alt="Monitoring"/><br /><b>Monitoring</b></a><br /><sub><a href="#monitoring-beginner">Beginner :baby:</a></sub></td>
<td align="center"><a href="#general"><img src="/assest/images/general.png" width="110px;" height="75px;" alt="General"/><br /><b>General</b></a></td>
<td align="center"><a href="#scenarios"><img src="/assest/images/scenarios.png" width="110px;" height="75px;" alt="Scenarios"/><br /><b>Scenarios</b></a></td>
</tr></table>

## DevOps

<a name="devops-beginner"></a>
#### :baby: Beginner

<details>
<summary>What is DevOps?</summary><br><b>

There are many good answers to this question. I like Amazon's description of DevOps:

"DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market."

You can find more details here: https://aws.amazon.com/devops/what-is-devops
</b></details>

<details>
<summary>What are the benefits of DevOps? What it can help us to achieve?</summary><br><b>

You should mention some or all of the following:

  * Collaboration
  * Improved delivery
  * Security
  * Speed
  * Scale
  * Reliability

Detailed answer can be found here: https://aws.amazon.com/devops/what-is-devops 
</b></details>

<details>
<summary>What are the anti-patterns of DevOps?</summary><br><b>
</b></details>

<details>
<summary>What is Continuous Integration?</summary><br><b>

A development practice where developers integrate code into a shared repository frequently. It can range from a couple of changes every day or a week to a couple of changes in one hour in larger scales.

Each piece of code (change/patch) is verified, to make the change is safe to merge. Today, it's a common practice to test the change using an automated build that makes sure the code can integrated. It can be one build which runs several tests in different levels (unit, functional, etc.) or several separate builds that all or some has to pass in order for the change to be merged into the repository.
</b></details>

<details>
<summary>What is Continuous Deployment?</summary><br><b>
</b></details>

<details>
<summary>What is Continuous Delivery?</summary><br><b>
</b></details>

<details>
<summary>What CI/CD best practices are you familiar with? Or what do you consider as CI/CD best practice?</summary><br><b>
</b></details>

<details>
<summary>What systems and/or tools are you using for the following?:

  * CI/CD
  * Provisioning infrastructure
  * Configuration Management
  * Monitoring & alerting - Prometheus, DataDog, Sensu, Grafana
  * Logging - ELK (Elastic Search, Logstash, Kibana), EFK (Elastic Search, Fluentd, Kibana)
  * Code review
  * Code coverage
  * Tests</summary><br><b>
  * CI/CD - Jenkins, Circle CI, Travis
  * Provisioning infrastructure - Terraform, CloudFormation
  * Configuration Management - Ansible, Puppet, Chef
  * Monitoring & alerting - Prometheus, Nagios
  * Logging - Logstash, Graylog, Fluentd
  * Code review - Gerrit, Review Board
  * Code coverage - Cobertura, Clover, JaCoCo
  * Tests - Robot, Serenity, Gauge
</b></details>

<details>
<summary>What are you taking into consideration when choosing a tool/technology?</summary><br><b>

In your answer you can mention one or more of the following:
  * mature vs. cutting edge
  * community size
  * architecture aspects - agent vs. agentless, master vs. masterless, etc.
</b></details>

<details>
<summary>Explain mutable vs. immutable infrastructure</summary><br><b>

In mutable infrastructure paradigm, changes are applied on top of the existing infrastructure and over time
the infrastructure builds up a history of changes. Ansible, Puppet and Chef are examples to tools which
follow mutable infrastructure paradigm.

In immutable infrastructure paradigm, every change is actually new infrastructure. So a change
to a server will result in a new server instead of updating it. Terraform is an example of technology
which follows the immutable infrastructure paradigm.
</b></details>

<details>
<summary>What ways are you familiar with to deliver a software? What are the advantages and disadvantages of each method?</summary><br><b>

  * Archive - collect all your app files into one archive (e.g. tar) and deliver it to the user.
  * Package - depends on the OS, you can use your OS package format (e.g. in RHEL/Fefodra it's RPM) to deliver your software with a way to install, uninstall and update it using the standard packager commands
  * Images - Either VM or container images where your package is included with everything it needs in order to run successfully.
</b></details>

<details>
<summary>What is caching? How it works? Why is it important?</summary><br><b>
</b></details>

<details>
<summary>Explain stateless vs. stateful</summary><br><b>

Stateless applications don't store any data in the host which makes it ideal for horizontal scaling and microservices.
Stateful applications depend on the storage to save state and data, typically databases are stateful applications.
</b></details>

<details>
<summary>What is HTTP and how it works?</summary><br><b>
</b></details>

<details>
<summary>Describe the workflow of setting up some type of web server (Apache, IIS, Tomact, ...)</summary><br><b>
</b></details>

<details>
<summary>Explain "Open Source"</summary><br><b>
</b></details>

##### SRE

<details>
<summary>Compare SRE to DevOps</summary><br><b>
</b></details>

<details>
<summary>What SRE team is responsible for?</summary><br><b>

One can argue whether it's per company definition or a global one but at least according to a large companies, like Google for example, the SRE team is responsible for availability, latency, performance, efficiency, change management, monitoring, emergency response, and capacity planning of their services
</b></details>

<details>
<summary>What is an error budget?</summary><br><b>
</b></details>

<details>
<summary>What are MTTF (mean time to failure) and MTTR (mean time to repair)? What these metrics help us to evaluate?</summary><br><b>
</b></details>

<details>
<summary>What is a post-mortem meeting? Why is it important?</summary><br><b>
</b></details>

<details>
<summary>What is "infrastructure as code"? What implementation of IAC are you familiar with?</summary><br><b>
</b></details>


<a name="devops-advanced"></a>
#### :star: Advanced

<details>
<summary>Tell me how you perform plan capacity for your CI/CD resources (e.g. servers, storage, etc.)</summary><br><b>
</b></details>

<details>
<summary>How would you structure/implement CD for an application which depends on several other applications?</summary><br><b>
</b></details>

<details>
<summary>How do you measure your CI/CD quality? Are there any metrics you are using for measuring the quality?</summary><br><b>
</b></details>

<details>
<summary>What is a configuration drift? What problems is it causing?</summary><br><b>

Configuration drift happens when in an environment of servers with the exact same configuration and software, a certain server
or servers are being applied with updates or configuration which other servers don't get and over time these servers become
slightly different than all others.

This situation might lead to bugs which hard to identify and reproduce.
</b></details>

<details>
<summary>How to deal with a configuration drift?</summary><br><b>
</b></details>

<details>
<summary>Do you have experience with testing cross-projects changes? (aka cross-dependency)</summary><br><b>

Note: cross-dependency is when you have two or more changes to separate projects and you would like to test them in mutual build instead of testing each change separately.
</b></details>

<details>
<summary>Have you contributed to an open source project? Tell me about this experience</summary><br><b>
</b></details>

<details>
<summary>When you publish a project, you usually publish it with a license. What types of licenses are you familiar with and which one do you prefer to use?</summary><br><b>
</b></details>

## Jenkins

<a name="jenkins-beginner"></a>
#### :baby: Beginner

<details>
<summary>What is Jenkins? What have you used it for?</summary><br><b>
</b></details>

<details>
<summary>What are the advantages of Jenkins over its competitors? Can you compare it to one of the following systems?

  * Travis
  * Bamboo
  * Teamcity
  * CircleCI</summary><br><b>
</b></details>

<details>
<summary>Explain the following:

  * Job
  * Build
  * Plugin
  * Slave
  * Executor</summary><br><b>
</b></details>

<details>
<summary>What plugins have you used in Jenkins?</summary><br><b>
</b></details>

<details>
<summary>Explain CI/CD and how you implemented it in Jenkins</summary><br><b>
</b></details>

<details>
<summary>What type of jobs are there? Which types have you used?</summary><br><b>
</b></details>

<details>
<summary>How did you report build results to users? What ways are you familiar with for reporting results?</summary><br><b>
</b></details>

<details>
<summary>You need to run unit tests every time a change submitted to a given project. Describe in details how your pipeline would look like and what will be executed in each stage</summary><br><b>
</b></details>

<details>
<summary>How to secure Jenkins?</summary><br><b>
</b></details>

<details>
<summary>Can you describe some of Jenkins best practices?</summary><br><b>
</b></details>

<details>
<summary>Describe how do you add new slaves to Jenkins</summary><br><b>

You can describe the UI way to add new slaves but better to explain how to do in a way that scales like a script or using dynamic source for slaves like one of the existing clouds.
</b></details>

<a name="jenkins-advanced"></a>
#### :star: Advanced

<details>
<summary>How to acquire multiple slaves for one specific build?</summary><br><b>
</b></details>

<details>
<summary>There are four teams in your organization. How to prioritize the builds of each team? So the jobs of team x will always run before team y for example</summary><br><b>
</b></details>

<details>
<summary>If you are managing a dozen of jobs, you can probably use the Jenkins UI. How do you manage the creation and deletion of hundreds of jobs every week/month?</summary><br><b>
</b></details>

<details>
<summary>What are some of Jenkins limitations?</summary><br><b>

  * Testing cross-dependencies (changes from multiple projects together)
  * Starting builds from any stage (although cloudbees implemented something called checkpoints)
</b></details>

<details>
<summary>How would you implement an option of a starting a build from a certain stage and not from the beginning?<summary><br><b>
</b></details>

##### Jenkins Dev

<details>
<summary>Do you have experience with developing a Jenkins plugin? Can you describe this experience?</summary><br><b>
</b></details>

<details>
<summary>There are four teams in your organization. How to prioritize the builds of each team? So the jobs of team x will always run before team y for example</summary><br><b>
</b></details>

<details>
<summary>If you are managing a dozen of jobs, you can probably use the Jenkins UI. How do you manage the creation and deletion of hundreds of jobs every week/month?</summary><br><b>
</b></details>

<details>
<summary>What are some of Jenkins limitations?</summary><br><b>

  * Testing cross-dependencies (changes from multiple projects together)
  * Starting builds from any stage (although cloudbees implemented something called checkpoints)
</b></details>

<details>
<summary>How would you implement an option of a starting a build from a certain stage and not from the beginning?<summary><br><b>
</b></details>

##### Jenkins Dev

<details>
<summary>Do you have experience with developing a Jenkins plugin? Can you describe this experience?</summary><br><b>
</b></details>

<details>
<summary>Have you written Jenkins scripts? If yes, what for and how they work?</summary><br><b>
</b></details>

## Cloud 

<a name="cloud-beginner"></a>
#### :baby: Beginner

<details>
<summary>What are the advantages of cloud computing? Mention at least 3 advantages</summary><br><b>
</b></details>

<details>
<summary>What types of Cloud Computing are there?</summary><br><b>

IAAS
PAAS
SAAS
</b></details>

<details>
<summary>Explain each of the following Cloud Computing Deployments:

  * Public
  * Hybrid
  * Private</summary><br><b>
</b></details>


## AWS

<a name="aws-beginner"></a>
#### :baby: Beginner

##### Global Infrastructure

<details>
<summary>Explain the following

  * Availability zone
  * Region
  * Edge location</summary><br><b>
AWS regions are data centers hosted across different geographical locations worldwide, each region is completely independent of one another. 
Within each region,There are multiple isolated locations known as Availability Zones. Multiple availability zones insure high availability in case one of them goes down.

Edge locations are basically content delivery network which caches data and insures lower latency and faster delivery to the users in any location. They are located in major cities in the world.
</b></details>

<details>
<summary>What is IAM?</summary><br><b>
</b></details>

##### S3
 
<details>
<summary>Explain what is S3 and what is it used for</summary><br>
<b>
S3 stands for 3 S, Simple Storage Service.
S3 is a object storage service which is fast, scalable and durable. S3 enables customers to upload, download or store any file or object that is up to 5 TB in size. While having a maximum size of 5 GB per file (multipart upload if more than 5 GB in size).
</b>
</details>

<details>
<summary>What is a bucket?</summary><br><b>
An S3 bucket is a resource which is similar to folders in a file system and allows storing objects, which consist of data and its  meta data.
</b></details>

<details>
<summary>True or False? A bucket name must be globally unique</summary><br><b>
True
</b></details>

<details>
<summary>What objects in S3 consists of?
