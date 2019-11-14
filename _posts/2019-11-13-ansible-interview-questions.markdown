---
layout: single
title:  "10 Ansible Interview Questions"
date:   2019-11-13 
categories: ansible
toc: true
toc_label: "Questions"
---

## Core Components

Describe each of the following components in Ansible, including the relationship between them:

  * Task
  * Module
  * Play
  * Playbook
  * Role

### Answer

Task – a call to a specific Ansible module
Module – the actual unit of code executed by Ansible on your own host or a remote host. Modules are indexed by category (database, file, network, …) and also referred to as task plugins.

Play – One or more tasks executed on a given host(s)

Playbook – One or more plays. Each play can be executed on the same or different hosts

Role – Ansible roles allows you to group resources based on certain functionality/service such that they can be easily reused. In a role, you have directories for variables, defaults, files, templates, handlers, tasks, and metadata. You can then use the role by simply specifying it in your playbook.

![]({{ site.url }}/assets/images/blog/ansible/components.png)


## Simple Task

Write a task to create the directory ‘/tmp/new_directory’

### Answer

A very basic question, but indicates how you work with Ansible. Many will answer this question by using the shell or command modules. It doesn’t necessarily bad, but the best practice is always to use an explicit Ansible module (in our case, the ‘file’ module).

Why? Mainly due to readability. Some actions execute differently on different operating systems, but the module use is always the same and any Ansible user will know what you meant when reading the task (especially if it’s a long shell command).

Note: it doesn’t necessarily mean that modules are faster than the command(s) you specified with ‘shell’ or ‘command’.

The task of creating the directory

```yaml
- name: Create a new directory
  file:
      path: "/tmp/new_directory"
      state: directory
```

## What is the result?

What would be the result of the following play?

{% raw %}
```yaml
---
- name: Print information about my host
  hosts: localhost
  gather_facts: 'no'
  tasks:
      - name: Print hostname
        debug:
            msg: "It's me, {{ ansible_hostname }}"

```
{% endraw %}
        
### Answer

When given a written code, always inspect it thoroughly. If your answer is “this will fail” then you are right. We are using a fact (ansible_hostname), which is a gathered piece of information from the host we are running on. But in this case, we disabled facts gathering (gather_facts: no) so the variable would be undefined which will result in failure.

The purpose of this question is to check if you know what is a fact but also whether you are paying attention to the small details.

Similar/follow-up questions can be:

* How to list all facts available?
* How to set a fact of your own?

## Write a playbook

Write a playbook to install ‘zlib’ and ‘vim’ on all hosts if the file ‘/tmp/mario’ exists on the system

### Answer

```yaml
---
- hosts: all
  vars:
      mario_file: /tmp/mario
      package_list:
          - 'zlib'
          - 'vim'
  tasks:
      - name: Check for mario file
        stat:
            path: "{{ mario_file }}"
        register: mario_f

      - name: Install zlib and vim if mario file exists
        become: "yes"
        package:
            name: "{{ item }}"
            state: present
        with_items: "{{ package_list }}"
        when: mario_f.stat.exists

```

To answer this question you have to be familiar with register, conditionals, and loops*.

The first task uses the ‘stat’ module to check if the file exists on each system then captures the output in a variable called ‘mario_f’ using the ‘register’ term. You can then use the registered variable in any other task. In our case, we capture the stats of ‘/tmp/mario’ file and in the next task, we install the package list if the file exists.

As you can see, for installing the packages we used the “with_items” loop which allow us to iterate over a list and perform the module/task per item in the list. Loops, as in any other language, is a fundamental part of Ansible and you should be aware of the different types of loops supported with Ansible.

Another worth to mention line is ‘become: yes’ which allows us to run the task as root, but can be used with any user we will specify (e.g. become: ‘toad’). The task installing package list will fail unless this line is included since package installation can be done only with sudo permissions on the machine.

* Bonus: Some Ansible modules can receive a list as an argument. In our case, the loop process could have been removed completely by simply providing the package_list variable straight to the ‘package’ module.
Also, we could have removed the “stat” module completely by using the Ansible ‘with_fileglob’ loop, which iterates a list of files found by a regex.
To sum this up:

```yaml
---
- hosts: all
  vars:
      package_list:
        - 'zlib'
        - 'vim'
  tasks:
      - name: Install zlib and vim if mario file exists
        become: "yes"
        package:
            name:"{{ package_list }}"
            state: present
        with_fileglob:
            - 'tmp/mario'
```

## Using Templates

Write a playbook to deploy the file ‘/tmp/system_info’ on all hosts except for controllers group, with the following content

```yaml
I'm [HOSTNAME] and my operating system is [OS]
```
replace [HOSTNAME] and  [OS] with the actual data for the specific host you are running on

### Answer

The playbook to deploy the system_info file

```yaml
---
- name: Deploy /tmp/system_info file
  hosts: all:!controllers
  tasks:
      - name: Deploy /tmp/system_info
        template:
            src: system_info.j2
            dest: /tmp/system_info
```

The content of the system_info.j2 template

{% raw %}
```
I'm {{ ansible_hostname }} and my operating system is {{ ansible_distribution }}
```
{% endraw %}

Using a template will make your playbooks and roles much more dynamic and easily adjusted to different scenarios. Ansible uses a powerful templating engine called ‘Jinja2‘ to construct dynamic templates of files. Many popular projects and companies are using it (Flask, Mozilla, …) and we strongly recommend you take the time and learn using it as it will serve you well in the future.

When writing jinja templates for Ansible it is considered best practice to add the variable ‘ansible_managed’ at the top of the template. This variable expands to a string letting whoever reads the output file that this file was generated by Ansible and managed by it.
Next, we use ansible_hostname which is the unqualified name of the host and ansible_distribution which is the OS distro.

Be aware that this question could be implemented in other ways. For example, instead of using ansible_hostname, someone could use inventory_hostname. They are not the same, but they both would fit fine in this case.

## Testing Ansible based projects

How do you test your Ansible based projects?

### Answer

When I ask this question in some interviews, I get many different answers. Let’s go over some of them.

* Manual run: “I simply run it and check if the system is in the desired state” – Personally I don’t like this answer when provided solely. I could agree this is the easiest one (or laziest) but it potentially quite dangerous. Even if you tested your new written role in a development environment, it doesn’t mean you’ll get the same result in a production environment.
* Check mode – yes, check mode is a good way to test your Ansible code as it will report to you what it would have done if it would actually run without check mode. So you can easily see if the Ansible run behavior is meeting your expectations.
But the follow-up question here is “and what about scripts?”. Usually, the answer I get here is “what about them?” 🙂 that’s fine if you didn’t have to use scripts in your roles and playbooks, but if you did, you would know that check mode doesn’t run scripts and commands. To run them, you would have to disable check mode for specific tasks with “check_mode: no”.
* Asserts:  I like asserts as a method of testing as it also resembles how you test in other languages such as Python and more importantly, it makes sure that your system reached the desired state, not as a draft like in check mode, but as an actual verification that the task changed certain resource to the desired state.
To summarize, simply be confident when explaining your choice (also, it’s not realistic to expect someone to use them all, so don’t go this way 🙂 )

## Writing another playbook

Write a playbook to install PostgreSQL on all servers in database group (assume Redhat) and update postgresql.conf with a configuration from the template postgresql.conf.j2 (assume it’s there, don’t write one).

In addition, provide users with a way to run only the configuration update task (without installing the packages).

### Answer

There are two things you should not miss here: handlers and tags. Your playbook should look similar to the following:

```yaml
---

- name: Installing PostgreSQL
  hosts: databases
  vars:
      pg_packages:
        - postgresql
        - postgresql-client
      pg_service: postgresql
      pg_admin_user: postgres
      pg_admin_group: postgres
      pg_version: 1981

  tasks:
      - name: Install PostgreSQL packages
        become: yes
        yum:
            name: "{{ item }}"
            state: latest
        loop: "{{ pg_packages }}"
        notify:
            - start_postgresql

      - name: Update postgres.conf file
        template:
            src: postgres.conf.j2
            dest: /etc/postgresql/{{ pg_version }}/postgresql.conf
            owner: {{ pg_admin_user }}
            group: {{ pg_admin_group }}
            mode: 0644
        become: yes
        notify:
            - restart postgresql
        tags:
            - postgres_config

  handlers:
      - name: start_postgresql
        service:
            name: "{{ pg_service }}"
            state: started

      - name: restart_postgresql
        service:
            name: "{{ pg_service }}"
            state: restarted
```
As you can see I have put everything in the same file, but a better solution would be to create a role and put each section into its own directory (vars, handlers, tasks, …). We’ll have detailed question and answer on roles later on.

The first thing to note here is handlers. Handlers allow us to trigger action (usually a task) upon a change. As you can see, the syntax is quite simple, using the keyword ‘notify’ we can provide a list of actions to execute. This makes a clear separation between what are the main tasks, required for installing and configuring PostgreSQL and what are the small “sub” actions required for the tasks to be complete.

The second thing to note here is ‘tags’. This answers the second part of the question on how to allow users to run only the configuration update part. Imagine you have 100 tasks and you want only run a small portion of them, let’s say four tasks which responsible for updating your application. Without tags, you would have to run everything in your playbook, but tags allow you to run only those you marked with a specific tag.

## Variable precedence

Let’s say you used the same variable name (whoami) in several places with different values:

* role defaults -> whoami: mario
* extra vars (variables you pass to Ansible CLI with -e) -> whoami: toad
* host facts -> whoami: luigi
* inventory variables (doesn’t matter which type) -> whoami: browser
* Which one will be used eventually? Why?

### Answer

The right answer is ‘toad’.

Variable precedence is about how variables override each other when they set in different locations. If you didn’t experience it so far I’m sure at some point you will, which makes it a useful topic to be aware of.

In the context of our question, the order will be extra vars (always override any other variable) -> host facts -> inventory variables -> role defaults (the weakest).

A full list can be found at the link above. Also, note there is a significant difference between Ansible 1.x and 2.x.

## Ansible Best Practices

Which Ansible best practices are you familiar with? name at least three

### Answer

* When using several parameters it’s better to use the YAML dictionary format. I personally find it much more readable.

```yaml
# BAD

- name: Update postgres.conf file
  template: src=postgres.conf.j2
            dest=/etc/postgresql/{{ pg_version }}/postgresql.conf
            owner={{ pg_admin_user }} group={{ pg_admin_group }}
            mode=0644
# GOOD

- name: Update postgres.conf file
  template:
      src: postgres.conf.j2
      dest: /etc/postgresql/{{ pg_version }}/postgresql.conf
      owner: {{ pg_admin_user }}
      group: {{ pg_admin_group }}
      mode: 0644
```

* “Always Name Tasks”. It’s good to get used to name every task you add. Even the simple among them, like using the ‘debug’ module. The name of the task gives some indication as to what it does and why it was added. It can be a workaround a known bug or it can be a long and juicy command so the user reads/using your playbook will appreciate if you describe shortly what it does.

```yaml
# BAD

- template:
    src: postgres.conf.j2
    dest: /etc/postgresql/{{ pg_version }}/postgresql.conf

# GOOD

- name: Update postgres.conf file
  template:
      src: postgres.conf.j2
      dest: /etc/postgresql/{{ pg_version }}/postgresql.conf
```

* Any change to Ansible code should pass ansible-lint. This is another non-official best practice which is basically a best-practices checker.  This is why I consider it as one of the most important best practices to implement as it makes it easier to make sure other best practices are being followed, especially in a shared repository where you have several contributors.

As already stated, not every mentioned best practice is an official one (= in Ansible docs) and that’s totally fine as long as you can explain why it’s a best practice (or more accurately a good practice).

## Ad-Hoc

Write an Ansible Ad-Hoc command to create the file ‘/tmp/info” on all hosts with the content: “The inventory file is in [inventory_file_path] and the inventory groups are [inventory_groups]”

Note: you should also list the hosts which included in the  inventory groups

### Answer

Knowing the different ways to execute Ansible can save you time in the future. One of them is the Ad-Hoc way which is a very quick way to run anything on a remote host.

In our case, our ad-hoc command will look like this

{% raw %}
ansible all -m copy -a 'content="The inventory file is in {{ inventory_dir }} and the inventory groups are {{ groups }}" dest=/tmp/info'
{% endraw %}

-m for specifying the module name. We used ‘copy’ but you could also use other modules for achieving the same result.

-a are the arguments we are passing to the module like the content of the file and where to create it (‘dest’)

I suggest running a couple of ad-hoc commands in order to be familiar with it and feel comfortable enough to run them on demand.
