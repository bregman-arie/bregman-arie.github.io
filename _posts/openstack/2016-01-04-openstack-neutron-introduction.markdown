---
layout: single
title:  "OpenStack Neutron Introduction"
permalink: /openstack-neutron-introduction
description: "An introduction to OpenStack neutorn including Neutron core concepts, resources and services"
date:   2016-01-04
categories: openstack
tags:
  - openstack
  - neutron
toc: true
toc_label: "Topics"
---

## Neutron Core Concepts

Neutron three core concepts ( aka core resources) are:

* Port - A port is a connection point for attaching a single device, such as the NIC of a virtual server, to a virtual network. The port also describes the associated network configuration, such as the MAC and IP addresses to be used with this port.
* Network - a virtual isolated layer-2 broadcast domain which is typically reserved to the tenant who created it, unless the network has been explicitly configured to be shared.
* Subnet - A block of IP addresses and associated configuration state. Subnets are used to allocate IP addresses when new ports are created on a network.
virtual neutron core concepts

## Neutron Resources

### Routers

Neutron allows you to create virtual routers and manage routing using L3 agent that is is usually installed on the network node. Routing is possible between networks in your OpenStack environment or between your instances and the external network.

### NAT

Network Address Translation is  used  for modifying the source or destination IP address. Whenever your instance  is trying to the reach  Host_C on the public network, the NAT protocol will translate your instance IP address from 192.168.1.x address  to a routable address that can be used outside of OpenStack environment, on the public network. This process takes place on the Network node, using the virtual router.

The same goes for Host_C, trying to reach the instances in your tenant.

There several NAT types, but we'll leave that for anther post =)

### Floating IP

Allows public connectivity to your OpenStack instances from the outside. The internal address of your instances is not known for hosts on the external network hence, the 192.180.1.2 address can't be used by Host_C to reach Host_A.

To allow such connectivity you would use Floating IP. The floating ip would be allocated on provider network range.

Types of Network Traffic
Guest/VM data - Actual instances traffic.
External - Similar to VM data traffic but with access to the public network.
API - Access to the API OpenStack services. Services like horizon, neutron, nova, glace. It should be accessible from public network.
Management - Internal communication between services. Services like the different agents (L3, metadata, dhcp...), routers.  The communication between services is done via RPC.

### Network Node

Network node get data moved between networks and to the external world.

## Neutron Services & Agents

### neutron-server

It provides the REST API. Normally you would find it installed on the controller. It receiving API calls like creating network, delete subnet, delete router and manages the SQL database accordingly, making the it persistent in the database.

It also uses the Messaging broker to forward notifications to the different agents resides on the different nodes over RPC.

One short work flow for example: neutron-server receives API call for creating router -> Make it persistent in the database -> Forward notification message to the L3 agent that resides on the network node.

PLUGIN is an important component of neutron-server. The plugin can be a monolithic plugin or modular plugin like  ML2 plugin which also includes mechanism drivers for using variety of technologies. You can find more information about it later in dedicated section.

### message queue

Used for interaction (messages/notifications) between services. Common implementations are  qpid, rabbitmq, amqp.

### DHCP agent

In charge of IP address allocation. It receives delete/create network notifications from neutron  server and then it using dsnmasq technology as a dhcp server. When you boot vm, it will send dhcp request using the guest/vm data network. The request will reach the network node, specifically the   dnsmasq instace of this network that  will send a reply back to the instance with the IP address.

### L3 agent

An extension in neutron. It Receives notifications from neutron-server to to manage routers. It resides on the network node. So it manages routing and also floating IPs.

L3 uses  linux network namespace. It provides isolated copy of network stack. You get your own private loopback and the scope is limited to namespace which allows you to reuse addresses. You can also spawn processes with namespace. You can have multiple DHCP servers with overlapping IPs.

You can setup HA by using L3 on anther network node with separate namespace and sync the states between them using vrrp.

### L2 agent

L2 agent runs on hypervisor and and communicates with neutron server using RPC. Normally will be installed on the network and compute nodes. Its main job is to watch and notify when devices added or removed and to configure the network on the host accordingly.  It can handle linux bridges, OVS and  security group rules.

One common example for its usage would be new created vm with single nic that must be connected to some network. The actual connection is done by L2 agent that makes sure it connected to the right network. It also handles  OVS flows, Linux bridges, VLAN tagging and security groups.

### OVS L2 agent

Openvswitch L2 agent configured to work with OVS, using ovsdb. It supports Tenant Isolation ( VLAN, GRE, VXLAN).  The way it works with tunnel networks is that its actually configures two bridges on the host and the tunnel networks are configured between the hosts. On the host itself it using local vlans to segregate traffic.

### Metadata agent

Proxy to nova metadata service. Provides any own information requested by the instances. for example: IP address, hostname, tenants. Normally installed on network node.

Neutron - Nova Interaction

Here is an example of Neutron-Nova interaction, using simple vm creation work flow:

Tap device  - virtual device that represents the virtual nic on the virtual machine. It simulates a link layer device and it used to create linux bridge. You can think of it as a cable that one end of of it connected to network X and the other end connected to the virtual nic of the virtual instace.

## Plugins

In the previous sections you saw that neutron can handle a variety protocols .  It accomplished by using plugins. Neutron API is pluggable, meaning you can write and use any plugin you want to use new features and technologies  as L2, L3 and QoS for example. Each plugin implements API differently.

Plugins can be monolithic or modular. Monolithic means they include full implementation of core resources, allowing you direct control or proxy. An example for modular plugin would be the popular ML2 which implements v2 API. It delegates the calls to the different drivers. There are mechanism drivers and type drivers. Types are types of segmentation like VLAN, gre, vxlan. Mechanism drivers suppose to ensure that the type driver properly applied given the specific networking mechanisms that have been enabled.

The plugin code of neutron is executed as part of neutron server service. The plugins are classified into two categories - core plugins and service plugins. Core plugin implements the core API (port, network, subnet). ML2 is an example to  core plugin which is an integral part of neutron today. It handles a variety of L2 technologies.

L3 (routing) is an example for widely used service plugin.  Additional  examples of service plugins you can use are:

Firewall as a service - Filter traffic at router level.

VPN as a service - Extend your tenant network off-site

Load Balancer as a service - Distribute incoming messages to a pool of VMs.

## Extensions

Neutron support extensions to the REST API to extend the core resources. Common extensions are security groups, L3, DHCP, binding. You can access those by using the url: `$serverUrl/v2.0/extensions`.

## Tenant isolation

Tenant network isolation is achieved by using VLANs or GRE / VXLAN tunnels. Historically speaking, tunneling was less mature and used to flood broadcast information to know where the vm is located. Since l2 population implemented, peer to peer tunnels are now being done in much more intelligent way. This is an important part of neutron and it will be covered in much more detail on separate post.
