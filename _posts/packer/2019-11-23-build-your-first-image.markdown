---
layout: single
permalink: /packer-build-your-first-image
title:  "Packer: Build your First Image"
date:   2019-11-21
categories: packer
description: "how to build a packer image for AWS step by step. Installation. Terminology, Using packager for building image"
tags:
  - packer
toc: true
toc_label: "Topics"
---

This is a practical version of how to start with Packer by building your first image.<br>
If you would like to understand better what is Packer and why to use it, I suggest reading this version of the [post](packer-getting-started)

## Install Packer

To install Packer 1.4.5 using a precompiled binary, run the following commands

```
wget https://releases.hashicorp.com/packer/1.4.5/packer_1.4.5_linux_amd64.zip
sudo unzip -d /usr/sbin packer_1.4.5_linux_amd64.zip
```

If you would like to install Packer from source (latest), use the following commands

```
mkdir -p $(go env GOPATH)/src/github.com/hashicorp && cd $_
git clone https://github.com/hashicorp/packer.git
cd packer && make dev
```

## Terminology

* template - this is the JSON configuration file used to define what image we would like to build and how
* builder - a component of Packer which responsible for creating a machine based on your template and turn this machine into an image
* artifact - result of a build. What exactly is the result depends on the builder. Usually it's the ID of the image or collection of files.

## What are we going to do?

![]({{ site.url }}/assets/images/blog/packer/build-image-process.png)

First we will create a template which will describe what image we would like to build.<br>
Next, we will validate the template we wrote. Once the template is validated, we will run the actual build process. This process will produce the image we described in the template.<br>
Let's start :)

## Create a template

Create a file called "aws_image.json" with the following content (this is an official example from Hashicorp docs):

{% raw %}
```
{
  "variables": {
    "aws_access_key": "",
    "aws_secret_key": ""
  },
  "builders": [{
    "type": "amazon-ebs",
    "access_key": "{{user `aws_access_key`}}",
    "secret_key": "{{user `aws_secret_key`}}",
    "region": "us-east-1",
    "source_ami_filter": {
      "filters": {
        "virtualization-type": "hvm",
        "name": "ubuntu/images/*ubuntu-xenial-16.04-amd64-server-*",
        "root-device-type": "ebs"
      },
      "owners": ["099720109477"],
      "most_recent": true
    },
    "instance_type": "t2.micro",
    "ssh_username": "ubuntu",
    "ami_name": "packer-example {{timestamp}}"
  }]
}
```
{% endraw %}

Few notes:

  * Getting AMI owner ID isn't as straightforward as you might expect. This [post](https://blog.gruntwork.io/locating-aws-ami-owner-id-and-image-name-for-packer-builds-7616fe46b49a) is great a explanation for how to locate such information
  * Be careful with changing instance type to anything other than t2.micro since you might be charged for that. t2.micro qualifies under free-tier so no charge :)
  * As you can see we are not providing credentials through the template but by using variables. We'll pass the values when we will run the build command

## Validate the image

Before we actually build the image, let's verify the template we wrote is valid

```
$ packer validate aws_image.json
Template validated successfully.
```

Great, we can proceed to actually building the image.<br>
Note that validating an image doesn't mean you will not run into issues when building the image but it's good to validate a template to make sure you didn't forget to pass must-use options and you don't have syntax issues.

## Build the image

Run the following command

```
packer build \   
    -var 'aws_access_key=blip_blop' \
    -var 'aws_secret_key=blop_blop' \
    aws_image.json
```

You need to provide your own aws keys so the client can connect to AWS for creating the image. I'm afraid using blip_blop will not work :)


## Output

Depends on the builder/template used, you will get slightly different output.
This is the output for the AWS template we used

```
amazon-ebs: amazon-ebs output will be in this color.

==> amazon-ebs: Creating temporary keypair for this instance...
==> amazon-ebs: Creating temporary security group for this instance...
==> amazon-ebs: Authorizing SSH access on the temporary security group...
==> amazon-ebs: Launching a source AWS instance...
==> amazon-ebs: Waiting for instance to become ready...
==> amazon-ebs: Connecting to the instance via SSH...
==> amazon-ebs: Stopping the source instance...
==> amazon-ebs: Waiting for the instance to stop...
==> amazon-ebs: Creating the AMI: packer-example 1371856345
==> amazon-ebs: AMI: ami-19601070
==> amazon-ebs: Waiting for AMI to become ready...
==> amazon-ebs: Terminating the source AWS instance...
==> amazon-ebs: Deleting temporary security group...
==> amazon-ebs: Deleting temporary keypair...
==> amazon-ebs: Build finished.

==> Builds finished. The artifacts of successful builds are:
--> amazon-ebs: AMIs were created:

us-east-1: ami-0c91c71241917ba
```

You can verify it was created with the following command

```
aws ec2 describe-images --owners self --region us-east-1
```

## Keep Exploring

That's it. You have created your first image. Well Done :)<br>
Packer has many features and options to keep exploring  and personally, I feel they did good job with their [official documentation](https://www.packer.io/docs/index.html) so I recommend to start there. Enjoy :)
