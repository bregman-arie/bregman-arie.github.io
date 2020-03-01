---
layout: single
title:  "OpenStack Neutron: L2 and L3 agents"
permalink: /openstack-neutron-l2-and-l3-agents
date:   2016-01-03
categories: openstack
tags:
  - openstack
  - neutron
toc: true
toc_label: "Topics"
---

Important note: This post is a written form of [this great presentation](https://www.youtube.com/watch?v=uNAkDfkTGBw) of Carl Baldwin and Rossella Sblendido. Usually when I watching vids, I write down some notes. In this case I decided to gather most of the presentation content here in one post and share it with you as you may find it also useful. Enjoy :)

## L2 Agent

Its main responsibility is to wire new devices (TAP interfaces created by Nova) and to configure the software bridges on the compute nodes. There are usually two bridges: br-int and br-tun.

br-int is the integration bridge. It's the bridge that takes care of tagging & untagging the traffic which coming in or out of the VMs. To tag the traffic, it uses local vlan id and assign it to the network.

br-tun is the tunneling bridge. It takes care of translating the tagged traffic. It translates the vlan id into segmentation and using it then for tunneling. If for example you use GRE tunnels, the segmentation id is used to specify the tunnel id.

The L2 agent is also responsible for applying security group rules (firewall rules) which implemented in neutron by using iptables and ip sets.

L2 constantly communicates with neutron-server using RPC.

### What happens when a VM is created

![]({{ site.url }}/assets/images/blog/openstack/l2_l3_agents.png)

vif driver is the driver that nova uses to plug and unplug the virtual interfaces into the integration bridge. You need to use the vif driver that match the specific neutron driver you are using. If for example you are using neutron with openvswitch, you'll also need to use the vif openswitch driver.

The last step of this process would be L2 agent notifies neutron-server that the device is up.

### L2 Agent Workflow

L2 agent has a loop and there are specific events which trigger some processing. The loop is entered when one of the following events occur:

OVSDB monitor has an update - OVSDB monitor is the tool that L2 agent uses to know if something changed on the compute node (e.g port added/deleted)
Messages from neutron server - messages could be about security group changes and port updates.
OVS restarted.
How ports changes detected?
L2 agent scans all ports in the machine and keeps track of those ports using internal dictionary named 'registered ports'.

When changes occur on the node, the OVSDB monitor signals OVS agent about the changes. The OVS compares between registered_ports to the result of the new scan in order to infer what devices were added or deleted.ovs

Before Liberty, the OVS agent needed to scan the ports most of the time, but in liberty, ovsdb monitor was improved in a way it sends the actual ports that added or deleted instead of simply setting a flag when a change occurred.

### Process 'Port Added' event

When a new port added, L2 agent request the device details. Once it gets the device details it knows how to wire it and by wiring we mean assigning a local VLAN id to the device If it's the first device of the network. Then it installs the proper flows (e.g tagging and untagging the traffic).

Next, it setting up the port filters (= install the proper iptables rules) and the last step would be to notify neutron-server that the device is up.

### Process 'Port Deleted' event

The previous process is reversed. It removes filters ( iptables rules), notifies neutron-server that the device is down (using update_device_down) and the local VLAN id is claimed if it's the last device of the network on the host.

Process 'Updated port' and Security group changes.
The process for 'Updated port' event is the same as for 'Added port'.

For security group changes, the filters are reapplied for all the affected devices.

### OVS Restart

When the L2 agent installed for the first time, it installs a flow called 'canary flow'. Once in every loop it checks if flow is still installed. If it's there, it means OVS is fine. If it's not there it means it restarted and the bridges should be reconfigured along with reprocessing all ports on the host. The flows should also be re-installed in such case.

What happens when an exception is thrown?
If exception is thrown while the agent loop, the L2 agent is doing full rsync because it doesn't know which device has issues. It will clear 'registered_ports' and reprocess all the ports on the node

## L3 Agent

While the L3 agent shares a lot of  the same architectural aspects as the L2 agent,  it's completely different. L2 agent getting you attached to your networks. The L3 agent gets your routers attached to each other. It moving data from one network to anther and from your network to the external world.

### HA and DVR

Since introduced in juno release, HA mode allows you to deploy your router on more than one network node. If you have 50 network nodes in your deployment, you can get it installed on all of them. To monitor the routers, it uses the 'virtual redundancy protocol' which also name the active router. In case of failure, it moves it accordingly.

DVR works differently. It takes the virtually created router, 'breaks into pieces' and push those to the compute nodes. So as soon as the vm produces traffic that needs to be routed to a different network, that traffic routed on the compute node, before it leaves the nic. There is an API to manage those routers location so you could move them around.

Let's examine simple work flow between two VMs on different networks and separate compute hosts.
￼
![]({{ site.url }}/assets/images/blog/openstack/l2_l3_agents.png)

When vm-1 sends data to vm-2, it goes through the br-int which says "I know these packets need to be routed. I'm going to send those straight to the router on my compute host". Then the packets goes through the routing table, coming out and travel to the second compute host just like as the two vms where on the same compute host.

The replies, originate from vm-2, travel based on the same logic. They are sent first to the router on the second compute host, they get routed and sent back to vm-1 on the first compute host.

### L3 Agent Workflow

L3 agent listens for notifications. When anything changes on the router, neutron-server sends notification to the L3 agent. The L3 agent takes the notification it received and push it into processing queue because it may have more work than it handle at a given time. Normally it pops right up to the top of the processing queue and pulled out for processing.

The agent has a capacity of working on few routers at a time. If it's working on every router at the same time, things may get a little slower.

There are two types of events that can be put in the processing queue.

Changes in the router.  Usually caused by user action that changes something in the router configuration.
L3 agent restart or exception thrown - in such case  it does a  full rsync ( similar to L2 agent process when exception thrown).
The user actions getting higher priority than the rsync or maintenance events.

L3 agent also sends status updates in case of ports or floating IPs changes.

### Router Internals

A network namespace is like container or vm for network device. It's all about the network stack virtualization.

Just like nova relies on the L2 agent to plug the port and do all the L2 wiring, L3 relies on the L2 agent for that. Once those ports exists, whether it's the ovs port or a veth pair (virtual cable), they can be moved into a namespace, just like taking a wire and plug it into your device.

Next, the L3 agent configures the IP addresses on the interfaces. It configures the routing, whether it's a basic routing table or extra routes that had been configured on the router. It uses iptables to implement the floating IP functionality. So it allocates a floating IP you associate it with an instance. Neutron figures out which router that instance need to go through to get to the external network and it uses NAT to implement that floating IP.

On the router there is a metadata access, shared access for instances without floating IP and some of the advance service are also integrated into it (VPNaas & FWaas).
