---
permalink: /interview_questions/terraform
author_profile: false
layout: single
sidebar:
  nav: "interview_questions"
---

{% include bootstrap_header.html title="Terraform Interview Questions" %}

<h5>Terraform Beginner</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Can you explain what is Terraform? How it works?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Read [here](https://www.terraform.io/intro/index.html#what-is-terraform-)
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What benefits infrastructure-as-code has?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

- fully automated process of provisioning, modifying and deleting your infrastructure
- version control for your infrastructure which allows you to quickly rollback to previous versions
- validate infrastructure quality and stability with automated tests and code reviews
- makes infrastructure tasks less repetitive
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Why Terraform and not other technologies? (e.g. Ansible, Puppet, CloufFormation)</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

A common *wrong* answer is to say that Ansible and Puppet are configuration management tools
and Terraform is a provisioning tool. While technically true, it doesn't mean Ansible and Puppet can't
be used for provisioning infrastructure. Also, it doesn't explain why Terraform should be used over
CloudFormation if at all.

The benefits of Terraform over the other tools:

  * It follows the immutable infrastructure approach which has benefits like avoiding a configuration drift over time
  * Ansible and Puppet are more procedural (you mention what to execute in each step) and Terraform is declarative since you describe the overall desired state and not per resource or task. You can give the example of going from 1 to 2 servers in each tool. In Terraform you specify 2, in Ansible and puppet you have to only provision 1 additional server so you need to explicitly make sure you provision only another one server.
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain what is "Terraform configuration"</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain each of the following:

  * Provider
  * Resource
  * Provisioner
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What <code>terraform.tfstate</code> file is used for?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button> 
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
It keeps track of the IDs of created resources so that Terraform knows what it is managing.
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain what the following commands do:

  * <code>terraform init</code>
  * <code>terraform plan</code>
  * <code>terraform validate</code>
  * <code>terraform apply</code>
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

<code>terraform init</code> scans your code to figure which providers are you using and download them.
<code>terraform plan</code> will let you see what terraform is about to do before actually doing it.
<code>terraform apply</code> will provision the resources specified in the .tf files.
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to write down a variable which changes by an external source or during <code>terraform apply</code>?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
You use it this way: <code>variable “my_var” {}</code>
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">Give an example of several Terraform best practices</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain how implicit and explicit dependencies work in Terraform</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is <code>local-exec</code> and <code>remote-exec</code> in the context of provisioners?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is a "tainted resource"?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
It's a resource which was successfully created but failed during provisioning. Terraform will fail and mark this resource as "tainted".
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">What <code>terraform taint</code> does?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What types of variables are supported in Terraform?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
String
Integer
Map
List
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">What is a data source? In what scenarios for example would need to use it?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What are output variables and what <code>terraform output</code> does?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain Modules</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is the Terraform Registry?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain <code>remote-exec</code> and <code>local-exec</code></div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

<a name="terraform-advanced"></a>
<h5>Advanced</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Explain "Remote State". When would you use it and how?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain "State Locking"</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

    <script async defer src="https://buttons.github.io/buttons.js"></script>

</body>
