---
layout: single
title:  "OpenStack Neutron: Troubleshooting and Solving Common Problems"
permalink: /openstack-neutron-solving-common-issues
description: "OpenStack Neutron troubleshooting and solving common problems"
date:   2016-01-06
categories: openstack
tags:
  - openstack
  - neutron
toc: true
toc_label: "Topics"
---

Important note: this post is based on the great sessions 'I Can't Ping My VM! Learn How to Debug Neutron and Solve Common Problems' of Rossella Sblendido & OpenStack Neutron Troubleshooting by Assaf Muller. So the credit goes to them. I simply gathered it here in a written form and added a little bit of description and examples.  Enjoy =)

## Common problems classification

The problems you may experience can be divided into two categories:

* Misconfiguration -  you may experience issues due to an inadequate configuration you put in the config files used by Neutron. The wrong usage of the configuration tools may also be relevant and cause some issues. In addition, a misconfigured underlying network will affect neutron functionality as every packet goes eventually through the physical. For example, it can be an external network that isn't reachable or firewall rule that is blocking traffic from your VMs or to them. So if the underlying network isn't working, Neutron will also fail to work properly.
* Bug in the code - you may found a bug in the code. Good chances you are not the first to bump into this bug so it's worth checking here if someone already reported it. If you can't find the bug there, then you are probably the first one to catch it and you should report it so that the developers can start fixing it.

## Issue #1: I can't ping/ssh my VM using private IP

One of the common issues out there, especially for anyone who is starting to explore the OpenStack world. So In order to debug such an issue, it will be wise to understand how our VM getting an IP in the first place.

### How does a VM get an IP?

In order to answer that we need to introduce the DHCP agent. If you are familiar with networking, you know DHCP is a protocol for distributing different network parameters (including IP addresses).

The DHCP agent communicates with neutron-server over RPC. It ensures network isolation using namespaces, so every network has its own dhcp namepsace. Inside this namespace there is a process called 'dnsmasq' and it's the one that actually serves the DHCP parameters, including the IP address. So the DHCP agent configures this dnsmasq using a lease file.

Let's see in more detail the IP allocation process:

At the end of the process, the new ip will be served and the VM will get its IP.

Let's follow the traffic in more detail. It's important to understand our packets flow. It will allow us to know where to look and hopefully find the issue more quickly.

We have two default implementation in neutron - openvswitch and linux bridge. Let's start with openvswitch:

![]({{ site.url }}/assets/images/blog/openstack/openvswitch_flow.png)

A little bit of explanation on what we can see in the drawing:

The firewall bridge is a linux bridge. It's there to be able to apply security groups which are firewall rules. They are implemented using iptables. You can not apply iptables to an interface that's connected to openvswitch port, so that's why we need the firewall bridge in the middle.

The integration bridge (br-int) is in charge of tagging & untagging the traffic that is coming from the vm and going to the vm, using the VLAN id associated with the network. Every network has a VLAN id and this VLAN id is used internally in the compute host to isolate the traffic (that's why it's called local VLAN id).

The tunnel bridge (br-tun) is the bridge in charge of the tunneling. It has the flows that will translate the VLAN id assigned to the network, into the segmentation id. If for example, you are using GRE tuneel, the GRE tunnel id would be the segmentation id assigned to the network.

Now let's see the flow with using linux bridge:

![]({{ site.url }}/assets/images/blog/openstack/libux_bridge_flow.png)

In linux bridge implementation we have one linux bridge for every network. You can see we have net1 and the VM is connected to this network. We can also see the infterface plugged into net1 bridge is eth0.100, meaning vlan 100 assigned to net1 network.

### Debugging Steps

First of all, check if the instance is up. It may sound trivial, but let's not skip anything:

`nova list`

The output should be similar to this:

In the above output we can see the instance is running. If it wasn't running, we would want to peek in the logs to get a clue on what went wrong. Looking in the logs is always a wise step, as many issues should be reflected there.

`grep -E -R -i "trace|error" /var/log/nova/ /var/log/neutron/`

Remember, at this point, the issue can be caused by anything. It can be even be not directly related to your OpenStack deployment, but rather to your hardware. For example, if you don't have enough space or memory for VMs to boot and run. You can verify it with:

`df -Ph && free -m`

Anther common cause for this issue is the default security group rules. The default is not allowing ICMP (the protocol used by the ping command) traffic. So you may need to configure it so ICMP wouldn't be blocked and you will be able to ping the machine.

As mentioned earlier, the physical underlying network may also cause the issues. Make sure you are able to ping between nodes in your environment.

### Port binding

If the vm didn't boot, check if you ran into port binding failure on either the vm port or router, DHCP ports.

For a vm port, it will be logged as port binding failure and so it will be easy for you to spot. For a DHCP or router, it's not so easy since the ports are created asynchronously, meaning you will not see it right away. Let's take routers for example. When you create a router and adding new interface, the operation will succeeded even if the ports created behind the scenes entered binding failure state. That's because it happens asynchronously.

neutron port-show <port_id> -F "binding:vif_type" -F "binding:host_id"

There are two reasons this usually happens:

1. OVS agent was dead when you added new subnet or new interface port in your router.  This can be easily verified with:

neutron agent-list

You would see in 'Open vSwitch agent' line, under the 'alive' column, this: 'xxx'.

Another symptom of dead OVS agent is no VLAN tag under the tap device. You can verify it with:

ovs-vsctl show | grep tap -A 3

At the moment, the only solution for this issue is to recreate the resource.

2. Misconfiguration in your agents or server config files.  This usually happens when you are using non-defaults values in the configuration file

Did the VM receive an IP?

So now that you know how a VM gets an IP, check if it happened. To check if your vm has an IP,  you can simply issue from the VM console:

ip a

No IP? Check If the DHCP agent is up and running:

neutron agent-list

The above command will list all the agents with their status. If the DHCP agent is up and running, you should see under the 'alive' column a smiley like this:   :-)

Next, you can check if dnsmasq is running on the network node on the specific network you are dealing with.

ps -ef | grep dnsmasq | grep <network_id>

You can also check if the lease file is populated and your VM mac is in the host file.

cat /var/lib/neutron/dhcp/<network_id>/host

Still, no IP and everything looks fine? check the DHCP agent log and look for errors and traces.

less /var/log/neutron/dhcp-agent.log

At this point, you would also want to ensure we are not having cross node connectivity issues,  so try ping between hosts and VMs. Don't forget to set fixed IP first, using the console.

Remember,  if you have issues in the underlying network, it will affect neutron. For example, if certain VLAN ids are not allowed in the physical switch, it will reflect in neutron and you may have connectivity issues.

Still didn't find any issue? time to pull out the ultimate tool - tcpdump.  tcpdump will allow you to track the full course of your packets and see how they changed at each step. There are many great online tutorials that explains how to use it, but for the most basic use, try running: 'tcpdump -i <name_of_the_device>

## Issue #2:  my VM can't reach the external network


To handle this issue, we need to understand how L3 agent works. Its main responsibility is to allow L3 connectivity/routing. It also providing NAT. and uses namespaces for network isolation. Normally it will be installed on the network node. It's also the agent that provides access to the external network.

Let's follow the packet course when a VM trying to reach the external network:

Now let's do the same, but this time from the external network to the VM and with linux bridge:

Debugging Steps

First, make sure you have the right security group rules configured in you environment. You need to allow ssh and ping explicitly.

neutron security-group-rule-list

Check if you can ping the private IP.  If not, don't expect the floating IP to work.  Check also if the vm can reach the router, because it will not be able to reach external network unless it can get to the router first.

From the router namespace (on the network node)  try to ping the VM using the floating IP:

sudo ip netns exec qrouter-078766fe-c4b6-4a14-82fa-e7f85e26c248 ping <vm_floating_ip>

That may be stupid check since the floating IP basically lives in the router namespace, but at least it will give an idea on how bad the situation is.

You may spot issue with the bridges configuration. Check it with the following command:

`ovs-vsctl show`

Don't forget to check L3 agent log for errors:

sudo grep -E -i "error|trace" /var/log/neutron/l3-agent.log

Use the console to access the instance and check if it got an IP address

`ip a`

From the console try also ping the default gateway and see if you can reach it.

```
route -n
ping <default_gateway_ip>
```

## Issue #3:  my VM can't reach Metadata server

The metadata server is the service that serves the metadata for the VM. The data can be ssh keys, ip addresses, hostname.

The metadata is agent responsible for proxying the requests from the VMs to the metadata server or nova. There are two ways to configure it:

Routed networks - when you have a network that connected to a router
Non routed networks - when you have network that is not connected to a router, so it's isolated.

Let's see routed networks work-flow in more detail:

![]({{ site.url }}/assets/images/blog/openstack/routed_networks_metadata.png)

Note: the metdata proxy spawned by L3 agent and it listens for requests. When a request from the vm reaches the metadata proxy, it adds some information to the header - IP of the vm and router id and forward it to the metadata agent.

Now let's look more closely on the other configuration - isolated networks:

![]({{ site.url }}/assets/images/blog/openstack/isolated_network_metadata.png)

Note: in order for this to work you will have to set a flag in the dhcp configuration file like this:

enable_isolated_metadata = True

We also used option 121 in the above work-flow to inject a route to the VM when it's requesting an IP address from the DHCP server. So the metadata proxy is the next hop to reach the metadata server.

Debugging Steps

First, check if the metadata agent is up

neutron agent-list

You should see in metadata agent line, under the 'alive' column, this smiley -> :-)

Next, check if the metadata proxy is up. Remember, it's get spawned by L3 agent in router (or DHCP) namespace, so you should check if it's in the process table of the namespace:

sudo ip netns exec qrouter-f6396cfe-2ac9-4d6a-9437-eb8e7d26c776 ps -ef | grep metadata-proxy

The issues should be reflected in the metadata logs. check them with the following command:

sudo grep -E -i "error|trace" /var/log/neutron/metadata-agent.log /var/log/neutron/neutron-ns-metadata-proxy-51b4c102-94ce-4b2b-a367-464a1619d427.log

Check if you can reach the metadata server from the router/DHCP namespace:

sudo ip netns exec qrouter-f6396cfe-2ac9-4d6a-9437-eb8e7d26c776 ping <metadata-server IP>

Check if the image you are using supports Option 121. If not, your vm will not be able to get route and reach the metadata server.

Tried everything and still couldn't find the issue? tcpdump to the rescue.

## Issue #4:  VIF plugging timeout

In order to understand why we are getting plugging timeout, we need to introduce L2 agent.

L2 agent runs on the hypervisor (compute host). Its main responsibility is to configure the local switches on the node and wire new devices. It communicates with neutron-server over RPC. It also in charge of applying security group rules which are implemented using iptables and ip sets.

Let's see in more detail how VIF plugging done:

![]({{ site.url }}/assets/images/blog/openstack/vif_plugging.png)

When Nova sends the allocate_network request, it sets a timeout of 5 minutes. If Nova doesn't get a reply from Neutron in 5 minutes, you will get vif plugging timeout

Debugging Steps

Check the logs. L2 agent, neutron and nova logs can help you identify the problem. On the compute hosts:

`sudo grep -E -i "error|trace" /var/log/nova/nova-compute.log /var/log/neutron/openvswitch-agent.log`

On the controller:

`sudo grep -E -i "error|trace" /var/log/neutron/server.log`

If your system is slow because it's loaded or you are performing stress tests, you might want to adjust server configurations in /etc/nova/nova.conf file:

Try to increase vif_plugging_timeout in order to give more time for plugging the interface
Try to increase rpc_thread_pool_size & rpc_conn_pool_size to make the processing faster

## Tools for a better tomorrow


Let's go over some useful tools for debugging neutron and networking issues.

`ip a`

ip addr (ip a is just a shortcut) is really usefull to inspect the devices in your machine/namespace. It allows you to get devices names, see if the devices up, IP addresses, MTU and bunch of other network parameters.

`route -n`

It will display the routing table. With routing table displayed you can know which path your packets will take when they travel out, to the big world. It's actually also possible to see with the previous command - ip route.

### iptables -L

See what firewall rules exist on the node. If your packets suddenly disappear or don't get to the final destination, a deny rule might be the cause.

### arp

See the arp table on the machine. Using it, you will know if your node is not able to find the addresses of other nodes.

### tcpdump

I have mentioned it several times in this post. It's a great packet sniffing tool. Easy to install and use. I'm going to cover it in a different post since there many ways to use and it's better to dedicate time to learn it solely.  For the most basic use, simply run:

`tcpdump -i eth0`

### ip netns

Used for working with namespaces. you can't solve most of the problems without it. In order to list the namespaces available on you node, use:

`ip netns list`

You can every previous command I mentiones inside a namespace, using 'ip netns exec'. For example to display the routing table in a namespace, use:

`ip netns exec qrouter-UUID route -n`

### OpenVSwich

If you are using openvswitch in your deployment, you have several tools for debugging and troubleshooting:

ovs-vsctl show- shows the configuration of the bridges on the machine
ovs-ofctl show - shows datapaths
ovs-ofctl dump-flows - dump all the flows installed on the machine
ovs-ofctl dump-flows br-tun - dump all the flows on br-tun
ovs-ofctl dump-flows br-tun table=21 - dump all the flows on br-tun in specific table

### LinuxBridge

for linux bridge, use the following:

brctl show - shows the configuration of the bridges on the machine
brctl show <bridge name> - shows the configuration for specific bridge

## Post Update

I didn't cover several  important networking devices you might probably want to be familiar with .

Let's start with a TAP device. A TAP device is a virtual network interface. It used for connecting the virtual instance, implemented by your hypervisor ( KVM, Xen, etc).  Traffic that reach to the TAP device, received by the instance.  A good thing to remember is that TAP device is usually the starting point. You would want to start following the traffic there.

To see the tap device on your instance, simply run:

`ip a | grep -i tap`

Usually, it will be called tap<port_prefix>, so you could also use:

`ip a | grep -i tap<port_prefix>`

Detailed information on a TAP device, can be found HERE.

The TAP device is bridged using a Linux bridge. Usually the Linux bridge name starts with qbr, which is a shortcut for quantum bridge ( qunaum is the former name of neutron ). You can list the linux bridges on your system with brctl.

`brctl show`

You should see in the output the TAP interface and qvb interface.

qvb (Quantum veth bridge ) and the other end - qvo (Quantum veth openvswitch) form a Virtual Ethernet Pair (veth).  It used to connect the Linux Bridge and OVS bridge. Anything that comes in on one device, should  leave the other device end. You can think of it as a tube.

If you'll list the ports on the integration bridge, you will see that one of the ports is the qvo, which connects you to the Linux Bridge.

`ovs-vsctl list-ports br-int`

Router and DHCP devices connected directly to br-int. You can see TAP device entry when listing the interfaces in the DHCP namespace or listing the ports on the integration bridge.

`ip netns exec qdhcp-<network_id> ip address`
`ovs-vsctl list-ports br-int`
