---
layout: single
permalink: /packer-build-your-first-image
title:  "Packer: Build your First Image"
date:   2019-11-21
categories: packer
tags:
  - packer
toc: true
toc_label: "Topics"
---

This is a practical version of how to start with Packer by building your first image.<br>
If you want to understand better what is Packer and why to use it, I suggest reading this [post](packer-getting-started)

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
* artifact - result of a build. The type is different based on the builder. Usually it's an ID or collection of files.

## What are we going to do?

![]({{ site.url }}/assets/images/blog/packer/build-image-process.png)


## Create a template

Create a file called "aws_image.json" with the following content

```
{
}
```

## Validate the image

Before we actually build the image, let's verify the template we wrote is valid

```
$ packer validate aws_image.json
Template validated successfully.
```

## Build the image

Run the following command

```
packer build \   
    -var 'aws_access_key=blip_blop' \
    -var 'aws_secret_key=blop_blop' \
    aws_image.json
```

You should get output similar to the following

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

us-east-1: ami-192612
```
