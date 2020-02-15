---
layout: single
title:  "Ansible: write and run your first playbook"
permalink: /ansible-write-and-run-first-playbook
date:   2015-12-25
categories: ansible
tags:
  - ansible
toc: true
toc_label: "Topics"
---

## What is Ansible?

Ansible is an open source automation tool. It focuses on east-of-use and it provides the user with many built-in modules to allow quick and simple automation. It uses ssh to connect the nodes it manages so from requirements perspective, you can start using it quickly. The only thing you need on your machine in order to run Ansible is Python.

In this post I'm going to show you how to easily write your first playbook and run it. But before that let's go over some basic definitions:

### Task 

A task is simply the use of one of the existing Ansible modules. A module implements specific functionality. For example, installing a package would be a task since it will require us to use the 'package' module. There are many modules, so a task can be running a service, fetching files, adding a user and many other modules.

Let's see how a task looks like:

```
- name: Ensure python-ryu is installed
  package:
    name: python-ryu
    state: present
```

In the above example we use package module to install a package named 'python-ryu'. The state is the action we are using on this package. so 'present' tells Ansible to make sure python-ryu is installed on the system.
There are additional states, as 'latest' which means 'make sure latest package is installed', so if you have python-ryu-1.0 installed in your system, but there is python-ryu-2.0 available, it will be updated. This is not the case for 'state: present', which simply cares on whether the package is installed or not.

TIP: to see what states and other options available for yum module, use this command: `ansible-doc package`

### Play

Play is a collection of tasks running on one or more hosts. It includes one or more tasks.

### Playbook

Playbook composed of one or more plays.

It's important to be familiar with the relation between task, play and and playbook

![]({{ site.url }}/assets/images/blog/ansible/ansible_relation.png)

## Install Ansible & prepare your environment

Before writing and running playbooks, you need to make sure Ansible is installed on your system.

For Fedora/RHEL/CentOS simply run the following

```
sudo dnf install ansible
```

Now we need to add the hosts you would like to manage and configure to `/etc/ansible/hosts`.
Let's say you have two nodes, named hostA and hostB. You can simply add these two lines to `/etc/ansible/hosts`

```
hostA
hostB
```

but to easily refer the two nodes in one word, you should use 'group' name for both of them

```
[my_hosts]
hostA
hostB
```

This way, to run tasks on both nodes, you can simply use 'my_hosts' group name.

## Writing your first playbook

Before writing any lines, we need to have clear picture of what we want to run on our hosts and how we would like them to look after running the playbook.
So imagine our environment consists of two hosts: hostA and hostB

We would like to have two plays:

First play: one simple task - create file in /tmp named 'yallo'.
Second play: two tasks - task to add user named 'mario' with zsh as default shell, and anther task to install the latest 'zlib' package.

We know what we want to run and on what hosts we want to run it. All that is left is to write it. Let's start with the first play:

```
vi first_playbook.yml
---
- hosts: hostB
  tasks:
      - name: Create file
        file:
            path: /tmp/yallo
            state: touch
```

`- hosts: hostB` tells Ansible on which nodes to run the task in the above playbook. We chose hostB, but as we'll see later, it's possible to run task on several hosts or group of hosts.

tasks: is a list of tasks, each using one of the available modules of Ansible that you would like to execute on remote hosts. In our case, hostB.

Our list contain only one task that uses 'file' module. 'file' module allows us to create/remove files and directories or modify their attributes. In the example above we simply create empty file. the 'path=/tmp/yallo' used by the module to to create 'yallo' file in /tmp dir. by "state=touch" we are actually telling Ansible we would like to ensure such file exists. If it exists, ansible will do nothing, but if it doesn't, it will create it.

Simple right? we finished writing our first play! Let's now extend it to include the second one also:

```
---
- hosts: hostB
  tasks:
      - name: Create file
        file:
            path: /tmp/yallo
            state: touch

- hosts: my_hosts
  sudo: yes
  tasks:
      - name: Create user
        user:
            name: mario
            shell: /bin/zsh

      - name: Install zlib
        yum:
            name: zlib
            state: latest
```

We now have two plays. How do we know that? We can see end of tasks list of our firs play and you can notice a start of new play by the line that starts with "-hosts ...'.

There are two tasks - First one is for creating new user. We used the 'user' module for that. Remember we wanted him to have zsh as default shell? that is the 'shell=/bin/zsh'.

Second task is about installing new package in your system. It using the 'yum' module with two options - name  of the package to be installed and state=latest. In the first example of this post we used 'state=present' to simply have the package installed in our system. 'state=latest' makes sure that if there is newer package available, it will be installed.

You probably noticed we have something new in the second play, except the different tasks. That is the 'sudo: yes". While for the first play you didn't have to be root, because every user can create files in '/tmp', for the second play you must be. Not every user can create new users in the system. So we ran the second play with sudo to make sure the play will not fail due to lack of permissions.

We finished writing our playbook. You have defined a playbook which will result in created file, user and installed package without knowing the actual commands to do so. Pretty neat!.

## Running playbooks

Congrats! you wrote your first playbook. Just so you know, I'm proud of you. What are you waiting for? run it!
The command for running playbooks is pretty straightforward: `ansible-playbook <playbook name>`

```
ansible-playbook first_playbook.yml
The results would look like

PLAY [hostB] ****************************************************************** 

GATHERING FACTS *************************************************************** 
ok: [hostB]

TASK: [Create file] *********************************************************** 
changed: [hostB]

PLAY [my_hosts] *************************************************************** 

GATHERING FACTS *************************************************************** 
ok: [hostA]
ok: [hostB]

TASK: [Create user] *********************************************************** 
changed: [hostA]
changed: [hostB]

TASK: [Install zlib] ********************************************************** 
ok: [hostA]
ok: [hostB]

PLAY RECAP ******************************************************************** 
hostA                      : ok=5    changed=2    unreachable=0    failed=0   
hostB                     : ok=3    changed=1    unreachable=0    failed=0
```

That was quick! Look how what detailed output we got here (and it can be even more detailed).

First of all, you can see each new play starts with 'PLAY: [host on which tasks applied]'. So the first play starts with 'PLAY: [hostB]'.

'GATHERING FACTS' is a step in which Ansible gather all kind of information about your remote system (memory, os distribution, ip addresses, etc), ready for you to use in your playbooks. To see what information gathered in this step you can use: `ansible -m setup <hostname>`

The tasks lines start with 'TASK: [task name]'.  But the important information is right below those lines and it tells us whether the task ran successfully or failed and whether the nodes changed or not.

The user 'mario' wasn't in the remote systems before running the playbook, that's why you see 'changed' for each node. But the package 'zlib' was already installed on both them. When task doesn't change anything and the node is already configured, you'll get 'ok'.

The summary lines start with 'PLAY RECAP'.  They tell us how many  tasks ran successfully and how many failed. In case of failure due to connectivity issues, you'll see unreachable is is greater than zero.

## More playbooks!

You are ready, my young padawan! You have all the knowledge you need for writing additional great playbooks and start manage your nodes automatically.
But that's not all. There are plenty of things left for you to learn about Ansible. Remember 'ansible-doc' is your friend!.

### Q & A

Q: How can I install Ansible in my system if no 'ansible' rpm available?
A: you can use: 'pip install ansible' inside a virtual environment or directly on the host

---

Q: Where can I find a list of all Ansible core modules?
A: ansible-doc -l

---

Q: In 'Running Playbooks' you wrote "output can be even more detailed'. How?
A: ansible-playbook -vvvv <playbook name>

---

Q: Is there a way to configure hosts simply by using the command line, without writing any playbooks?
A: Yes, there is!  For example, our task for creating user in one simple line: ansible -m user -a "name=mario shell=/bin/zsh" my_hosts
