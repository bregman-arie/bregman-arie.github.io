---
layout: splash
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

<!-- ALL-TOPICS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<center>
<table>
  <tr>
    <td align="center"><a href="#devops"><img src="![My helpful screenshot]/assets/images/devops.png" width="70px;" height="75px;" alt="DevOps" /><br /><b>DevOps</b></a><br /><sub><a href="#devops-beginner">Beginner :baby:</a></sub><br><sub><a href="#devops-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#jenkins"><img src="images/jenkins.png" width="80px;" height="85px;" alt="Jenkins"/><br /><b>Jenkins</b></a><br /><sub><a href="#jenkins-beginner">Beginner :baby:</a></sub><br><sub><a href="#jenkins-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#git"><img src="images/git.png" width="110px;" height="75px;" alt="Git"/><br /><b>Git</b></a><br /><sub><a href="#git-beginner">Beginner :baby:</a></sub><br><sub><a href="#git-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#ansible"><img src="images/ansible.png" width="65px;" height="75px;" alt="Ansible"/><br /><b>Ansible</b></a><br /><sub><a href="#ansible-beginner">Beginner :baby:</a></sub><br><sub><a href="#ansible-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#Network"><img src="images/network.png" width="80x;" height="75px;" alt="Network"/><br /><b>Network</b></a><br /><sub><a href="#network-beginner">Beginner :baby:</a></sub><br><sub><a href="#network-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#linux"><img src="images/linux.png" width="75x;" height="75px;" alt="Linux"/><br /><b>Linux</b></a><br /><sub><a href="#linux-beginner">Beginner :baby:</a></sub><br><sub><a href="#linux-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#terraform"><img src="images/terraform.png" width="75px;" height="75px;" alt="Terraform"/><br /><b>Terraform</b></a><br /><sub><a href="#terraform-beginner">Beginner :baby:</a></sub><br><sub><a href="#terraform-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#docker"><img src="images/docker.png" width="75px;" height="75px;" alt="Docker"/><br /><b>Docker</b></a><br /><sub><a href="#docker-beginner">Beginner :baby:</a></sub><br><sub><a href="#docker-advanced">Advanced :star:</a></sub></td>
  </tr>
  <tr>
    <td align="center"><a href="#coding"><img src="images/coding.png" width="75px;" height="75px;" alt="coding"/><br /><b>Coding</b></a><br /><sub><a href="#coding-beginner">Beginner :baby:</a></sub><br><sub><a href="#coding-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#python"><img src="images/python.png" width="80px;" height="75px;" alt="Python"/><br /><b>Python</b></a><br /><sub><a href="#python-beginner">Beginner :baby:</a></sub><br><sub><a href="#python-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#go"><img src="images/go.png" width="80px;" height="75px;" alt="Go"/><br /><b>Go</b></a><br /><sub><a href="#go-beginner">Beginner :baby:</a></sub><br><sub></td>
    <td align="center"><a href="#shell-scripting"><img src="images/bash.png" width="70px;" height="75px;" alt="Bash"/><br /><b>Shell Scripting</b></a><br /><sub><a href="#shell-scripting-beginner">Beginner :baby:</a></sub><br><sub><a href="#shell-scripting-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#kubernetes"><img src="images/kubernetes.png" width="75px;" height="75px;" alt="kubernetes"/><br /><b>Kubernetes</b></a><br /><sub><a href="#kubernetes-beginner">Beginner :baby:</a></sub><br><sub></td>
    <td align="center"><a href="#prometheus"><img src="images/prometheus.png" width="75px;" height="75px;" alt="Prometheus"/><br /><b>Prometheus</b></a><br /><sub><a href="#prometheus-beginner">Beginner :baby:</a></sub><br><sub><a href="#prometheus-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#mongo"><img src="images/mongo.png" width="75px;" height="75px;" alt="Mongo"/><br /><b>Mongo</b></a><br /><sub><a href="#mongo-beginner">Beginner :baby:</a></sub><br><sub></td>
    <td align="center"><a href="#sql"><img src="images/sql.png" width="75px;" height="75px;" alt="sql"/><br /><b>SQL</b></a><br /><sub><a href="#sql-beginner">Beginner :baby:</a></sub><br><sub><a href="#sql-advanced">Advanced :star:</a></sub></td>
  </tr>
  <tr>
    <td align="center"><a href="#cloud"><img src="images/cloud.png" width="110px;" height="75px;" alt="Cloud"/><br /><b>Cloud</b></a><br /><sub><a href="#cloud-beginner">Beginner :baby:</a></sub><br><sub></td>
    <td align="center"><a href="#aws"><img src="images/aws.png" width="110px;" height="75px;" alt="AWS"/><br /><b>AWS</b></a><br /><sub><a href="#aws-beginner">Beginner :baby:</a></sub><br><sub></td>
    <td align="center"><a href="#azure"><img src="images/azure.png" width="80px;" height="75px;" alt="azure"/><br /><b>Azure</b></a><br /><sub><a href="#azure-beginner">Beginner :baby:</a></sub><br><sub></td>
    <td align="center"><a href="#gcp"><img src="images/gcp.png" width="75px;" height="75px;" alt="gcp"/><br /><b>Google Cloud Platform</b></a><br /><sub><a href="#gcp-beginner">Beginner :baby:</a></sub><br><sub></td>
    <td align="center"><a href="#openstack"><img src="images/openstack.png" width="75px;" height="75px;" alt="openstack"/><br /><b>OpenStack</b></a><br /><sub><a href="#openstack-beginner">Beginner :baby:</a></sub><br><sub><a href="#openstack-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#security"><img src="images/security.png" width="75px;" height="75px;" alt="security"/><br /><b>Security</b></a><br /><sub><a href="#security-beginner">Beginner :baby:</a></sub><br><sub><a href="#security-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#puppet"><img src="images/puppet.png" width="75px;" height="75px;" alt="puppet"/><br /><b>Puppet</b></a><br /><sub><a href="#puppet-beginner">Beginner :baby:</a></sub><br><sub><a href="#puppet-advanced">Advanced :star:</a></sub></td>
    <td align="center"><a href="#openshift"><img src="images/openshift.png" width="75px;" height="75px;" alt="OpenShift"/><br /><b>OpenShift</b></a><br /><sub><a href="#openshift-beginner">Beginner :baby:</a></sub><br><sub></td>
  </tr>
  <tr>

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
