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

This will install the latest, from source, version.

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

![]({{ site.url }}/assets/images/blog/packer/build-image-process.png)

### Create a template

Let's create a new file called `aws_image.json`. This file will serve as template we will pass to Packer so it can build the image based on what is described inside the template


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
This is an example taken directly from the official Packer docs

### Validate the image

For the purpose of learning I would like to show you what will happen if you try to validate this version of the template

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

## Build the image

Run the following command

```
packer build \   
    -var 'aws_access_key=blip_blop' \
    -var 'aws_secret_key=blop_blop' \
    aws_image.json
```
Remember earlier we included in the template file the following lines?

```
"access_key": "{{user `aws_access_key`}}",
"secret_key": "{{user `aws_secret_key`}}",
```

So now with the build command, we passed values to use for `access_key` and `secret_key`. You do not want to specify such sensitive information inside the template since most of the time you would probably want to have version control for these templates and sharing your credentials might not be the best idea :)

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
$ aws ec2 describe-images --owners self --region us-east-1

{
    "Images": [
        {
            "Architecture": "x86_64",
            "CreationDate": "2019-11-23T17:29:03.000Z",
            "ImageId": "ami-0c91c71241917ba",
            ...
```

Awesome! Image created successfully :)

## Keep Exploring

That's it. You have created an image with Packer. Well Done :)<br>
Packer has many features and options to keep exploring  and personally, I feel they did good job with their [official documentation](https://www.packer.io/docs/index.html) so I recommend to start there. Enjoy :)
