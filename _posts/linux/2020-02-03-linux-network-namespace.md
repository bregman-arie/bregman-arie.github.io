---
layout: single
permalink: /linux-network-namespace
description: "Linux network namespaces explained step by step for begineers"
title:  "Linux: Network Namespace"
date:   2020-02-03
categories: linux
tags:
  - linux
  - namespace
  - network
toc: true
toc_label: "Topics"
---

## What is a Network Namespace?

Network namespaces allow you to have isolated network environments on a single host.

Each namespace has its own interfaces and routing table, separated from other namespaces. In addition, processes on your system can be associated with a specific network namespace.

Network namespace used in a variety of projects such as OpenStack, Docker and Mininet. To deep dive into these projects, you'll have to be familiar with namespaces and know how to work with them.

## Working with network namespaces

When starting Linux, you'll have one namespace on your system and every newly created process will inherit this namespace from its parent. So, all the processes inherit the network namespace used by init (PID 1).

![]({{ site.url }}/assets/images/blog/namespace_level1.png)

### List namespaces

The way to work with namespaces is by using the 'ip netns' command (man ip-netns).

To list all the network namespace on your system, use 'ip netns' or 'ip netns list'

```
$ ip netns
```


If you haven't added any namespace, the output will be empty. The default namespace is not included in  'ip netns list' output.

### Add namespaces

To add a namespace, use the 'ip netns add <name>' command.  Let's give it a try.

```
$ ip netns add mario
$ ip netns add luigi
```

We created two namespaces. One called 'mario' and the other called 'luigi'.

![]({{ site.url }}/assets/images/blog/namespace_level2.png)

As you can see in the drawing, the new namespaces we just created, separate from the system default namespace.

To ensure they have been created, you can use the 'ip netns list' command, as mentioned earlier.

```
$ ip netns list
mario
luigi
```

Once a namespace is added, a new file created in '/var/run/netns' with the same name as the namespace. In our case, there should be two files there, one for each namespace we created (again, not including the default namespace).

```
$ ls /var/run/netns
mario
luigi
```

### Executing commands in namespaces

To execute commands in a namespace (which is not the 'default' namespace) use 'ip netns exec <namespace> <command>'

```
$ sudo ip netns exec mario ip a

1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1
 link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
```

In the above example, we ran the command 'ip a' in the namespace 'mario'. This should give a different result than running it in the default namespace, as each namespace is an isolated environment with its own interfaces and routing table.

It is possible to run a specific command on all existing namespaces using the '-all' flag

```
$ sudo ip -all netns exec ip a

netns: luigi
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00

netns: mario
1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
```

### Assign a network interface to a specific namespace

This is basically moving interfaces from the default namespace to the namespace you specify

Let's say you have on your default namespace, a network device which called 'toad'.

If you want to set 'toad' on your namespace 'x' rather than on the default namespace, you can use the 'ip link set' command.

sudo ip link set toad netns x

## Ping between two namespaces

Let's take a simple scenario in which we will emulate two nodes (each namespace will represent a node). We'll connect the two namespaces to a virtual switch and send a ping from one namespace to another.

### Add virtual switch

For a virtual switch, I'll use OpenvSwitch and I'll create the switch in the default namespace.

But first, let's install OpenvSwitch and start its service.

```
$ sudo dnf install -y openvswitch
$ sudo systemctl start openvswitch
```

Next, let's add a new virtual switch. I called it 'my_switch' (yes, creativity level over 1000)

```
$ sudo ovs-vsctl add-br my_switch
```

Verify it was added

```
$ sudo ovs-vsctl show

e72385f-ed0a-40fd-97f3-21d49cbf60f3
    Bridge my_switch
        Port my_switch
            Interface my_switch
                type: internal
    ovs_version: "2.4.0"

$ ip a

4: my_switch: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1
    link/ether 3a:99:b4:63:f2:47 brd ff:ff:ff:ff:ff:ff
```

To connect the namespaces to our switch, we'll use 'veth' pairs. Since there is not much documentation on 'veth', let's take a minute to explain what is 'veth'.

### veth

veth (Virtual Ethernet) is a type of network device which always comes in pairs. You can imagine this pair as a tube. Everything you'll send through one end of the tube, will come out at the other end.

You can see it always comes in a pair, by adding such a device in your system

```
$ sudo ip link add type veth

5: veth0@veth1: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether c2:a7:3b:5c:83:d6 brd ff:ff:ff:ff:ff:ff
6: veth1@veth0: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether d6:43:5c:3b:d6:4f brd ff:ff:ff:ff:ff:ff
```

As you can see, there are two devices which compose the pair.  Sending anything through veth0@veth1, would come out through veth1@veth0.

Now, remove it, since we don't need it as it is now, for our example

```
$ sudo ip link del veth0
```

Removing one of them, would also remove the other peer as they always come in pairs.

### Creating veth devices

Now back to connecting the namespaces to our virtual switch.

Let's create veth device to connect 'mario' namespace to the virtual switch.

sudo ip link add mario-netns type veth peer name mario-ovs

This is slightly different than what you saw earlier. Here I specified the name for each end/member of the pair. So mario-netns will be in 'mario' namespace and 'mario-ovs'  will connect to our virtual switch.

Let's verify it's been created

```
$ ip a

9: mario-ovs@mario-netns: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN qlen 1000
 link/ether 5e:58:bc:b3:f2:8c brd ff:ff:ff:ff:ff:ff
10: mario-netns@mario-ovs: <BROADCAST,MULTICAST,M-DOWN> mtu 1500 qdisc noop state DOWN qlen 1000
 link/ether aa:08:cc:71:43:61 brd ff:ff:ff:ff:ff:ff
```

Now let's set 'mario-netns' in 'mario' namespace

```
sudo ip link set mario-netns netns mario
```

Remember we said that namespace is an isolated network environment and 'default' namespace is separated from other namespaces? If that's true, you should not see 'mario-netns' anymore in the 'default' namespace, since we put it in 'mario' namespace

```
$ ip a

9: mario-ovs@if10: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether 5e:58:bc:b3:f2:8c brd ff:ff:ff:ff:ff:ff link-netnsid 0

$ ip netns exec mario ip a

1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
10: mario-netns@if9: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN qlen 1000
    link/ether aa:08:cc:71:43:61 brd ff:ff:ff:ff:ff:ff link-netnsid 0
```

As you can see 'mario-netns' is now in 'mario' namespace. That is why you can't see it in the default namespace.

Now let's add the other end (mario-ovs) to our virtual switch.

```
$ ovs-vsctl add-port my_switch mario-ovs
$ ovs-vsctl show

9e72385f-ed0a-40fd-97f3-21d49cbf60f3
    Bridge my_switch
        Port mario-ovs
            Interface mario-ovs
        Port my_switch
            Interface my_switch
                type: internal
    ovs_version: "2.4.0"
```

We can see in the above output that 'mario-ovs' is now a port in 'my_switch', after we added it with the 'ovs-vsctl add-port' command.

Let's do the same for 'luigi' namespace, but this time, all the commands one after another.

```
$ sudo ip link add luigi-netns type veth peer name luigi-ovs
$ sudo ip link set luigi-netns netns luigi
$ sudo ovs-vsctl add-port my_switch luigi-ovs
```

What we achieved so far? we created veth pair for each one of our namespaces. So on 'my_switch' we have two ports, one for each namespace and in each namespace we have the other end of the veth pair.

This how it's should look like (and please excuse me for my (virtual) drawing skills :) )

![]({{ site.url }}/assets/images/blog/namespace_level3.png)

Does it mean that we can now reach from 'mario' namespace to 'luigi' namespace? not yet. It might sound basic, but we need to assign addresses to our devices and bring them up :D

### Bringing up our devices

First, let's bring up our devices in the 'default' namespace

```
$ sudo ip link set mario-ovs up
$ sudo ip link set luigi-ovs up
```

Now, let's bring up all the devices in 'mario' and 'luigi' namespaces

```
$ sudo ip netns exec mario ip link set dev lo up
$ sudo ip netns exec mario ip link set dev mario-netns up

$ sudo ip netns exec luigi ip link set dev lo up
$ sudo ip netns exec luigi ip link set dev luigi-netns up
```

### Assign addresses

Next, we should assign addresses for both 'mario-netns' and 'luigi-netns' devices in the namespces

```
$ sudo ip netns exec mario ip addr add 10.0.0.1/24 dev mario-netns
$ sudo ip netns exec luigi ip addr add 10.0.0.2/24 dev luigi-netns
```

We can verify the devices are up and assigned with IP address

```
$ sudo ip netns exec mario ip a

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
12: mario-netns@if11: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP qlen 1000
    link/ether f2:8b:fa:e9:c7:b8 brd ff:ff:ff:ff:ff:ff link-netnsid 0
    inet 10.0.0.1/24 scope global mario-netns
       valid_lft forever preferred_lft forever
    inet6 fe80::f08b:faff:fee9:c7b8/64 scope link
       valid_lft forever preferred_lft forever
```

### Ping test

That's it. Our namespaces connected to the switch, the devices are up with an assigned IP address and we are ready for our ping test.

Let's ping from 'mario' namespace to 'luigi' namespace

```
$ sudo ip netns exec mario ping 10.0.0.2

PING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.
64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=0.136 ms
64 bytes from 10.0.0.2: icmp_seq=2 ttl=64 time=0.022 ms
64 bytes from 10.0.0.2: icmp_seq=3 ttl=64 time=0.037 ms
```

Amazing, it's working :D

## Commands reference

Before saying goodbye, I gathered all the commands we used in this post, for an easier reference:

* List all namespace, except for the default/global one.
`ip netns`

* Same as above, list all namespaces.
`ip netns list`

* Execute command inside a specific namespace
`ip netns exec <namespace_name> <command>`

* Sets specified interface in the specified namespace
`ip link set <interface> netns <namespace>`

* Bring interface up
`ip link set <interface> up`

* Add veth pair
`ip link add type veth`

* Add veth pair by specifying the name for each peer
`ip link add <veth-peer1> type veth peer name <veth-peer2>`

* Adds a new bridge
`ovs-vsctl add-br <bridge_name>`

* Adds a new port in the specific bridge
`ovs-vsctl add-port <bridge_name> <port_name>`

### Q&A

Q: How can I work fluently inside a namespace, without using 'ip netns exec' for each command?

A: You can use 'ip netns exec <ns_name> bash' which will spawn a shell where you'll be able to work inside a specific namespace.
