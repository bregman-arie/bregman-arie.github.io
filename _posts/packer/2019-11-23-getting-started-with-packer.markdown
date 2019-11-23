---
layout: single
permalink: /packer-getting-started
title:  "Getting Started with Packer"
date:   2019-11-23
categories: packer
tags:
  - packer
toc: true
toc_label: "Topics"
---

## What is Packer?

Packer, which is part of the HashiCorp Suite, is a tool for creating images for different platforms from a single source.

If you ever had to prepare identical images for different platforms you know it can be quite challenging and involves a lot of automation and maintenance. Packer, from my experience, is a robust solution for many of the hassle involved in creating and maintaining images.

## Should I stop using CM tools such as Ansible in favor of Packer?

Packer is not a replacement for configuration management tools. It's true Configuration Management and Images can seem to overlap because one can use either of them in order to achieve certain tasks.

For example, if you would like to have a web server, you can use an image which includes a web server or you can take a clean server and configure it with Ansible or Chef so it becomes a web server, just like when using an image.

The common approach today is using both. Use an image to quickly bring up an instance with packages and services you need, and from that point on, use CM for any additional tasks. This is actually also the case with Packer which allows you to use configuration management tools to install software onto the image.

## Sounds interesting but where exactly it fits?

Packer is great for:

* Preparing images as part of your CD pipeline where you build an image for every change in the code and deploy an instance using the image to run tests and verify the change doesn't break anything

* Environments with different platforms and providers. Let's say you are using On-Premise solution such as OpenStack but at the same time you also use cloud providers such as AWS or Azure. You can use Packer once to prepare images for OpenStack, AWS and Azure which can save you a lot of time

## How to install Packer?

There are two main options for installing Packer - precompiled binary and soruce. I'll cover both.

### Precompiled binary

This will install a specific precompiled version (1.4.5) in this case.<br>
On Linux, run the following:

```
wget https://releases.hashicorp.com/packer/1.4.5/packer_1.4.5_linux_amd64.zip
sudo unzip -d /usr/sbin packer_1.4.5_linux_amd64.zip
```

### Source

This will install latest version.

```
mkdir -p $(go env GOPATH)/src/github.com/hashicorp && cd $_
git clone https://github.com/hashicorp/packer.git
cd packer && make dev
```

### Verify Packer is installed

Run `packer` and you will get a similar output to:

```
Usage: packer [--version] [--help] <command> [<args>]

Available commands are:
    build       build image(s) from template
    console     creates a console for testing variable interpolation
    fix         fixes templates from old versions of packer
    inspect     see components of a template
    validate    check that a template is valid
    version     Prints the Packer version
```

## Create your first image with Packer

There are several steps to follow in order to create your first image

### Validate the image


For the purpose of learning I must show you what would happen if you tried to validate this version of the template

```
{       
    "builders": [{
    "type": "amazon-ebs"
    }]                                                                                                                                                                       
}
```

The result would be

```
Errors validating build 'amazon-ebs'. 6 error(s) occurred:

* ami_name must be specified
* ami_name must be between 3 and 128 characters long
* An ssh_username must be specified
  Note: some builders used to default ssh_username to "root".
* A source_ami or source_ami_filter must be specified
* For security reasons, your source AMI filter must declare an owner.
* either instance_type or spot_instance_types must be specified
```

And this is one of the nice features of Packer. not only Packer will output what is missing for the builder but it will also mention any specific requirements like number of characters. Nice Job HashiCorp :)

### Build the image

Run

```
packer build aws_iamge.json
```
