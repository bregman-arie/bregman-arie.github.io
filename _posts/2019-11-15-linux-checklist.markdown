---
layout: single
title:  "Linux Checklist"
date:   2019-11-15 
categories: linux
toc: true
toc_label: "topics"
---

### File System Hierarchy

- [ ] `/` (aka root)
- [ ] `/bin` and `/sbin`
- [ ] `/opt`
- [ ] `/usr`
- [ ] `/var`
- [ ] `/home`
- [ ] `/etc`
- [ ] `/proc`
- [ ] `/tmp`

- [ ] Test
  - [ ] What is '/'?
  - [ ] What is stored in '/bin'? what about `/etc`?
  - [ ] What '/home' is usually used for?
  - [ ] What type of files can you find in '/var'?
  - [ ] What is unique about `/tmp`?

### Navigation

- [ ] Commands
  - [ ] `pwd` - where am I?
  - [ ] `cd` - change directory
- [ ] relative vs. absolute paths

- [ ] Test
  - [ ] How to check your current path?
  - [ ] Where `cd ..` will take you?
  - [ ] What would be the effect of running `cd .`?
  - [ ] What will happen when running 'cd -'?

### Files

- [ ] Types of files
  - [ ] Regular
  - [ ] Directory
  - [ ] Socket
  - [ ] Block
  - [ ] Link

- [ ] Commands
  - [ ] `ls` - list files and directories
    - [ ] `-a` for listing hidden files
    - [ ] `-l` for list formt
    - [ ] `-t` order by time
    - [ ] `-F` better distinguish between regular files and directories
  - [ ] `touch` - creating files (original intention is updating timestamp)
    - [ ] nice to know: `touch file{1..5}`
  - [ ] `rm` - remove files
    - [ ] `-r` for recursive
    - [ ] `-f` to force removal, no questions asked
  - [ ] `mkdir` - create directories
    - [ ] `-p` - for creating multiple nested directories
  - [ ] `rmdir` - remove directories
  - [ ] `echo` - display a line of text
  - [ ] `cat` - concatenate files (common usage: read a file)
  - [ ] `mv` - move files directories (also rename files and directories)
  - [ ] `cp` - copy a file
    - [ ] `-r` for recursive (copy a directory)

- [ ] Test
  - [ ] How to list hidden files?
  - [ ] How to create an empty new file?
  - [ ] How to remove a directory?
  - [ ] How to rename a file?
  - [ ] How to copy an entire directory with all its files?

### Commands

- [ ] `man` - manual for commands
- [ ] `which` - get full path for given command
- [ ] `whatis` - one-line manual page descriptions

### I/O redirection
  - [ ] File Descriptor
    - [ ] stdin 0 (input) <
    - [ ] stdout 1 (output) >
    - [ ] stderr 2 (error) 2>
  - [ ] Append >>

- [ ] Test
  - [ ] How to redirect output?
  - [ ] What would be the result of the following command `blop 2> file`?

### Text Editor

Learning how to use one of them is more than enough

- [ ] vim
  - [ ] `i` to start typing
  - [ ] `:wq` to exit (or `shit+zz`)
- [ ] nano
- [ ] emacs
- [ ] atom
- [ ] sublime

- [ ] Test (mainly for vim)
  - [ ] How to remove an entire line?
  - [ ] How to copy 5 lines?
  - [ ] How to jump to the end of the line
  - [ ] How to remove one word
  - [ ] How to jump to the end of the file

### Users

- [ ] Types of users
  - [ ] regular
  - [ ] root

- [ ] Commands
  - [ ] `useradd` - add users
  - [ ] `usermod` - modify users
  - [ ] `userdel` - delete users
  - [ ] `who` - show who is logged on
  - [ ] `lastlog` - recent login of users

- [ ] Files
  - [ ] `/etc/passwd` - stores users information
  - [ ] `/etc/shadow` - passwords

- [ ] Test
  - [ ] how to add a new user?
  - [ ] should you be using your user or root?

### Network

- [ ] Commands
  - [ ] `ping` - test the reachability of a host
    - [ ] `-c` for number of packets
  - [ ] `ip` - manage routing, network devices, interfaces and tunnels
    - [ ] `ip a` for interfaces 
    - [ ] `ip r` for routing
    - [ ] `ip neigh` for any ARP related operation
  - [ ] `ethtool` - query and manipulate driver and hardware settings
    - [ ] `-p` for interface led blinking
    - [ ] `-t` for running tests to check your network interface
    - [ ] `-S` for getting statistics
  - [ ] `arp`- manipulate the system ARP cache
  - [ ] `dhclient`- DHCP client
  - [ ] `netstat` - display network connections
    - [ ] `-n` for IP addresses instead of hostnames
    - [ ] `-t` to show only TCP connections
    - [ ] `-p` to show the PID of the program
    - [ ] `-l` to show only listening sockets
  - [ ] `lsof` - list open files
    - [ ] `-i` for sockets
  - [ ] `traceroute` - print the route packets trace to network host
  - [ ] `mtr` - network diagnostic tool (traceroute + ping)

- [ ] Files
  - [ ] `/proc/net/dev` - network interfaces list
  - [ ] `/pro/net/arp` - ARP table
  - [ ] `/etc/sysconfig/network-scripts/*` - network configuration files in RHEL based OSs 
  - [ ] `/etc/network/interfaces` - network configuration files in Ubuntu

- [ ] Types of interfaces
  - [ ] Regular
  - [ ] Dummy
  - [ ] Virtual IP
  - [ ] Veth

- [ ] Bonding
  - [ ] Modes
  - [ ] How to activate

- [ ] Network Namespaces
  - [ ] `ip netns`
    - [ ] `ip netns add` for adding namespaces
    - [ ] `ip netns list` for listing namespaces
    - [ ] `ip netns del` for removing namespaces
    - [ ] `ip netns exec` for executing commands inside a network namespace

- [ ] Network Kernel Parameters
  - [ ] `sysctl net.*`
  - [ ] `/proc/sys/net/*`

- [ ] Packet Sniffers (one is enough)
  - [ ] `tcpdump`
  - [ ] `wireshark`
  - [ ] `dhcpdump`
  - [ ] `httpry`

- [ ] Test
  - [ ] How to list the interfaces in your system?
  - [ ] How to display the routing table?
  - [ ] How to change the MTU of an interface?

### Debugging & Troubleshooting

- [ ] CPU and Memory
  - [ ] `top`
  - [ ] `free`

- [ ] Network Commands
  - [ ] `netstat` - network connections
  - [ ] `traceroute` - network connections

- [ ] Filesystem
  - [ ] `stat`

### Processes

- [ ] Process states
- [ ] Running in background (&)

### Archives

- [ ] Commands
  - [ ] tar
  - [ ] zip

- [ ] tar
- [ ] zip
- [ ] commands
- [ ] create an archive
- [ ] list archive's content
- [ ] remove an archive

### Storage & Filesystem
- [ ] inode

### Hardware

- [ ] Commands
  - [ ] `lshw` - list hardware
  - [ ] `lspci` - list all PCI devices
  - [ ] `dmidecode` - DMI table decoder
