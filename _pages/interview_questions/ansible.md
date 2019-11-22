---
permalink: /interview_questions/ansible
author_profile: false
layout: single
sidebar:
  nav: "interview_questions"
---

{% include bootstrap_header.html title="Ansible Interview Questions" %}

<h5>Ansible Beginner</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Describe each of the following components in Ansible, including the relationship between them:

  * Task
  * Module
  * Play
  * Playbook
  * Role
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Task – a call to a specific Ansible module
Module – the actual unit of code executed by Ansible on your own host or a remote host. Modules are indexed by category (database, file, network, …) and also referred as task plugins.

Play – One or more tasks executed on a given host(s)

Playbook – One or more plays. Each play can be executed on the same or different hosts

Role – Ansible roles allows you to group resources based on certain functionality/service such that they can be easily reused. In a role, you have directories for variables, defaults, files, templates, handlers, tasks, and metadata. You can then use the role by simply specifying it in your playbook.
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Which Ansible best practices are you familiar with?. Name at least three</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is an inventory file and how you define one?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
An inventory file defines hosts and/or groups of hosts on which Ansible tasks executed upon.

An example of inventory file:

192.168.1.2
192.168.1.3
192.168.1.4

[web_servers]
190.40.2.20
190.40.2.21
190.40.2.22
                    </pre>
                    </code>
   </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is a dynamic inventory file? When you would use one?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button><br><br>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

A dynamic inventory file tracks hosts from one or more sources like cloud providers and CMDB systems.

You should use one when using external sources and especially when the hosts in your environment are being automatically<br>
spun up and shut down, without you tracking every change in these sources.
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">You want to run Ansible playbook only on specific minor version of your OS, how would you achieve that?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Write a task to create the directory ‘/tmp/new_directory’</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

- name: Create a new directory
  file:
      path: "/tmp/new_directory"
      state: directory
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What would be the result of the following play?
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

- name: Print information about my host
  hosts: localhost
  gather_facts: 'no'                                                                                                                                                                           
  tasks:
      - name: Print hostname
        debug:
            msg: "It's me, \{\{ ansible_hostname \}\}"

When given a written code, always inspect it thoroughly. If your answer is “this will fail” then you are 
right. We are using a fact (ansible_hostname), which is a gathered piece of information from the host we are running on. But in this
case, we disabled facts gathering (gather_facts: no) so the variable would be undefined which will result in failure.
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Write a playbook to install ‘zlib’ and ‘vim’ on all hosts if the file ‘/tmp/mario’ exists on the system.</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

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

                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Write a playbook to deploy the file ‘/tmp/system_info’ on all hosts except for controllers group, with the following content

  I'm [HOSTNAME] and my operating system is [OS]

  Replace [HOSTNAME] and  [OS] with the actual data for the specific host you are running on
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
The playbook to deploy the system_info file

- name: Deploy /tmp/system_info file
  hosts: all:!controllers
  tasks: 
      - name: Deploy /tmp/system_info
        template:
            src: system_info.j2 
            dest: /tmp/system_info

The content of the system_info.j2 template

# \{\{ ansible_managed \}\}
I'm \{\{ ansible_hostname \}\} and my operating system is \{\{ ansible_distribution \}\}
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">The variable 'whoami' defined in the following places:

  * role defaults -> whoami: mario
  * extra vars (variables you pass to Ansible CLI with -e) -> whoami: toad
  * host facts -> whoami: luigi
  * inventory variables (doesn’t matter which type) -> whoami: browser

According to variable precedence, which one will be used?
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

The right answer is ‘toad’.

Variable precedence is about how variables override each other when they set in different locations. If you didn’t experience it so far I’m sure at some point you will, which makes it a useful topic to be aware of.

In the context of our question, the order will be extra vars (always override any other variable) -> host facts -> inventory variables -> role defaults (the weakest).

A full list can be found at the link above. Also, note there is a significant difference between Ansible 1.x and 2.x.
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">For each of the following statements determine if it's true or false:
  * A module is a collection of tasks
  * It’s better to use shell or command instead of a specific module
  * Host facts override play variables
  * A role might include the following: vars, meta, and handlers
  * Dynamic inventory is generated by extracting information from external sources
  * It’s a best practice to use indention of 2 spaces instead of 4
  * ‘notify’ used to trigger handlers
  * This “hosts: all:!controllers” means ‘run only on controllers group hosts</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is ansible-pull?  How it’s different compared to ansible-playbook?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>



<a name="ansible-advanced"></a>
<h5>Advanced</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">What are filters? Do you have experience with writing filters?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Write a filter to capitalize a string</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
<code>
def cap(self, string):
    return string.capitalize()
</code>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How do you test your Ansible based projects?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What are callback plugins? What can you achieve by using callback plugins?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

    <script async defer src="https://buttons.github.io/buttons.js"></script>

</body>
