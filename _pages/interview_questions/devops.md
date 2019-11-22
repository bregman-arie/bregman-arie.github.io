---
permalink: /interview_questions/devops
author_profile: false
layout: single
sidebar:
  nav: "interview_questions"
---

{% include bootstrap_header.html title="DevOps Interview Questions" %}


                    <br><h5>Question</h5>

                    <div class="bs-example dob-question">
                        What is DevOps?
                    </div>
                    
                    <button type="button" class="btn btn-info dob-answer-btn">Answer</button>

                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
There are many good answers to this question. I like Amazon's description of DevOps:

"DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market."

You can find more details here: https://aws.amazon.com/devops/what-is-devops
                    </pre>
                    </code>
                    </div>
                    

                    <br>
                    <h5>Question</h5>

                    <div class="bs-example dob-question">
                        What are the benefits of DevOps? What it can help us to achieve?
                    </div>
                    
                    <button type="button" class="btn btn-info dob-answer-btn">Answer</button>

                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
You should mention some or all of the following:

Collaboration
Improved delivery
Security
Speed
Scale
Reliability
Detailed answer can be found here: https://aws.amazon.com/devops/what-is-devops
                    </pre>
                    </code>
                    </div>

<br>
<h5>Question</h5>

<div class="bs-example dob-question">What are anti-patterns of DevOps?</div>
  <button type="button" class="btn btn-info dob-answer-btn">Answer</button>

  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
No Answer :(
                    </pre>
                    </code>
  </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is Continuous Integration?
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
  <code class="language-html" data-lang="html">
  <pre>

A development practice where developers integrate code into a shared repository frequently.
It can range from a couple of changes every day or a week to a couple of changes in one hour in larger scales.

Each piece of code (change/patch) is verified, to make the change is safe to merge.
Today, it's a common practice to test the change using an automated build that makes sure the code can integrated.
It can be one build which runs several tests in different levels (unit, functional, etc.) or several separate builds
that all or some has to pass in order for the change to be merged into the repository.
  </pre>
  </code>
  </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is Continuous Deployment?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is Continuous Delivery?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What CI/CD best practices are you familiar with? Or what do you consider as CI/CD best practice?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What systems and/or tools are you using for the following?:

  * CI/CD
  * Provisioning infrastructure
  * Configuration Management
  * Monitoring & alerting - Prometheus, DataDog, Sensu, Grafana
  * Logging - ELK (Elastic Search, Logstash, Kibana), EFK (Elastic Search, Fluentd, Kibana)
  * Code review
  * Code coverage
  * Tests
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>

  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
  * CI/CD - Jenkins, Circle CI, Travis
  * Provisioning infrastructure - Terraform, CloudFormation
  * Configuration Management - Ansible, Puppet, Chef
  * Monitoring & alerting - Prometheus, Nagios
  * Logging - Logstash, Graylog, Fluentd
  * Code review - Gerrit, Review Board
  * Code coverage - Cobertura, Clover, JaCoCo
  * Tests - Robot, Serenity, Gauge
                    </pre>
                    </code>
  </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What are you taking into consideration when choosing a tool/technology?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
In your answer you can mention one or more of the following:
  * mature vs. cutting edge
  * community size
  * architecture aspects - agent vs. agentless, master vs. masterless, etc.
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain mutable vs. immutable infrastructure</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
  <pre>

In mutable infrastructure paradigm, changes are applied on top of the existing infrastructure and over time
the infrastructure builds up a history of changes. Ansible, Puppet and Chef are examples to tools which
follow mutable infrastructure paradigm.

In immutable infrastructure paradigm, every change is actually new infrastructure. So a change
to a server will result in a new server instead of updating it. Terraform is an example of technology
which follows the immutable infrastructure paradigm.
  </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What ways are you familiar with to deliver a software? What are the advantages and disadvantages of each method?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
  * Archive - collect all your app files into one archive (e.g. tar) and deliver it to the user.
  * Package - depends on the OS, you can use your OS package format (e.g. in RHEL/Fefodra it's RPM) to deliver your software with a way to install, uninstall and update it using the standard packager commands
  * Images - Either VM or container images where your package is included with everything it needs in order to run successfully.
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is caching? How it works? Why is it important?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain stateless vs. stateful</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Stateless applications don't store any data in the host which makes it ideal for horizontal scaling and microservices.
Stateful applications depend on the storage to save state and data, typically databases are stateful applications.
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is HTTP and how it works?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Describe the workflow of setting up some type of web server (Apache, IIS, Tomact, ...)</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
   <pre>

   </pre>
                    </code>
   </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">Explain "Open Source"</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<h4>SRE</h4>

<h5>Question</h5>
<div class="bs-example dob-question">Compare SRE to DevOps</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What SRE team is responsible for?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
   <pre>

One can argue whether it's per company definition or a global one but at least according to a large companies, like Google for example, the SRE team is responsible for availability, latency, performance, efficiency, change management, monitoring, emergency response, and capacity planning of their services

   </pre>
                    </code>
   </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is an error budget?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What are MTTF (mean time to failure) and MTTR (mean time to repair)? What these metrics help us to evaluate?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is a post-mortem meeting? Why is it important?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is "infrastructure as code"? What implementation of IAC are you familiar with?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>



<h4>Advanced</h4>

<h5>Question</h5>
<div class="bs-example dob-question">Tell me how you perform plan capacity for your CI/CD resources (e.g. servers, storage, etc.)</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How would you structure/implement CD for an application which depends on several other applications?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How do you measure your CI/CD quality? Are there any metrics you are using for measuring the quality?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is a configuration drift? What problems is it causing?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Configuration drift happens when in an environment of servers with the exact same configuration and software, a certain server
or servers are being applied with updates or configuration which other servers don't get and over time these servers become
slightly different than all others.

This situation might lead to bugs which hard to identify and reproduce.
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to deal with a configuration drift?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">Do you have experience with testing cross-projects changes? (aka cross-dependency)</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>

Note: cross-dependency is when you have two or more changes to separate projects and you would like to test them in mutual build instead of testing each change separately.
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Have you contributed to an open source project? Tell me about this experience</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">When you publish a project, you usually publish it with a license. What types of licenses are you familiar with and which one do you prefer to use?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


    <script async defer src="https://buttons.github.io/buttons.js"></script>

</body>
