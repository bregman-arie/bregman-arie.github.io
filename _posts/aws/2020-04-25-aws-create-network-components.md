---
layout: single
permalink: /aws-create-network-components
description: "AWS Create VPC, internet gateway, Subnet, Route Table and NACL. Also learn how to attach and associate route table and network ACLs"
title:  "AWS: Create VPC, IGW, Subnet, Route Table and NACL"
date:   2020-04-25
categories: aws
tags:
  - aws
  - practitioner
  - network
toc: true
toc_label: "Topics"
---

## AWS network components overview

Before we jump to creating the components mentioned in this post's subject, let's first understand what is it exactly that we are going to create.

VPC - described by Amazon as "logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define". Basically think on it as your own section of the cloud, where nobody else create create resources or send traffic (unless you permit it).

Internet Gateway - officially described as "a horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet". In simpler words, a component which allows your traffic to get out or in the VPC. Without it, there is no way for data to be sent or received in the VPC.

In addition, we are going to create subnets and route tables which are known network concepts and we are not going to cover them in this post. So let's jump now to the practical part of this post.

## Create a VPC

Once logged in to AWS console, go to services -> VPC.
Then, make sure you are in "Your VPCs" page and click on "Create VPC" button. You will see a form with multiple fields you need to fill in.
First, set the name of the VPC, this is a label which you will see when using the different parts of AWS so pick up a name that indicates it's a VPC. Next, IPv4 CIDR block is the range of of IPv4 addresses for our VPC. You can set it to 10.0.0.0/16 for example. Once you finished to fill the form, click on "Create" and that's it. You have a non-default VPC created.

## Create an Internet Gateway

To create an Internet Gateway go to Internet Gateways page and click on the Create button. This form is even simpler as you only have to provide the Internet Gateway name. Once you decided what should be its name, click on Create and you are done. Now, notice the Internet Gateway is in "detached" state. This is because it doesn't attached to any VPC. Let's attach it to the VPC we created by clicking on actions -> attach to VPC. Choose the VPC we created from the list and click on attach.

What we have so far is a VPC and Internet Gateway attached to that VPC.

## Create a subnet

To create a subnet go to "Subnets" page, click on "Create Subnet" and fill the form where Name tag is just the label of the subnet, similar to previous resources we created. In VPC field, choose the VPC we have created. For Availability Zone, choose simply the first one in the list. I've chosen "us-east-1a" and last but not least, set "IPv4 CIDR block" to "172.16.1.0/24". Click on "Create" and that's it, we have a subnet.

## Create a route table and add routes

Go to "Route Tables" page and click on "Create Route Table". Give it a name and for the VPC field choose again the VPC we have created. Click on "Create" and you now have a route table. But we are not done. We don't have a route to the Internet (through the IGW we created earlier). To fix that, in the route tables page, click on your newly created route table and in the bottom of the page click on "Routes" tab and then on "Edit Routes". Click on "Add Route" and put the following values for each field:

* Destination: 0.0.0.0/0
* Target: The IGW we've created

That's it. Click on "Save Route" and now go to "Subnets Associations" tab in the same area and click  on "Edit subnet associations". You'll see the subnet we've created earlier. Choose it and click on "Save". Now our traffic is able to get in and out from the subnet to the internet.

## Network ACL

By default, any traffic is allowed to get in and out from our subnet. In most cases, you would like to have it more restricted. The way to do it is with Network ACLs. Let's see how it can be done.

Go to "Network ACLs" page. Click on "Create Network ACL" and start filling the fields by choosing a name and setting the VPC we've created earlier. Once done, click on "Create" button. We are not done yet. Choose the NACL we have just created and in the page bottom go to "Inbound Rules" and click on "Edit". Next, click on "Add Rule" and choose which type of traffic you would like to allow (remember, the default for a newly created NACL is to deny everything). Typical type of traffic to allow is SSH (22) but for specific source of course and not everyone. Once finished, click on "Save".
You can do the same for "Outbound Rules" for traffic sent from your subnet outside. Usually there you would set "Custom TCP Rule" as the chosen type and a port range of "1024-65535". 

Same as in Route Tables, you need to associate it by going to "Subnet Associations", click on "Edit", choose the subnet we've created and click on "Edit".
