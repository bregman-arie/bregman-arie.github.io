---
permalink: /interview_questions/aws
author_profile: false
layout: single
sidebar:
  nav: "interview_questions"
---

{% include bootstrap_header.html title="AWS Interview Questions" %}

<h5>AWS Beginner</h5>

<h5>Global Infrastructure</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Explain the following

  * Availability zone
  * Region
  * Edge location
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
AWS regions are data centers hosted across different geographical locations worldwide, each region is completely independent of one another. 
Within each region,There are multiple isolated locations known as Availability Zones. Multiple availability zones insure high availability in case one of them goes down.

Edge locations are basically content delivery network which caches data and insures lower latency and faster delivery to the users in any location. They are located in major cities in the world.
                    </pre>
                    </code>
   </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is IAM?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<h5>S3</h5>
 
<br><h5>Question</h5>
<div class="bs-example dob-question">Explain what is S3 and what is it used for</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
S3 stands for 3 S, Simple Storage Service.
S3 is a object storage service which is fast, scalable and durable. S3 enables customers to upload, download or store any file or object that is up to 5 TB in size. While having a maximum size of 5 GB per file (multipart upload if more than 5 GB in size).
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is a bucket?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
An S3 bucket is a resource which is similar to folders in a file system and allows storing objects, which consist of data and its  meta data.
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">True or False? A bucket name must be globally unique</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
True
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What objects in S3 consists of?
  * Another way to ask it: explain key, value, version id and meta data in context of objects</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain data consistency</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Can you host dynamic websites on S3?. What about static websites?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>


<br><h5>Question</h5>
<div class="bs-example dob-question">What security measures have you taken in context of S3?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is a storage class? What storage classes are you familiar with?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<h5>EC2</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is EC2? What is it used for?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What EC2 pricing models are there?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to increase RAM for a given EC2 instance?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

Stop the instance, the type of the instance to match the desired RAM and start the instance.
                    </pre>
                    </code>
   </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is an AMI?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How many storage options are there for EC2 Instances?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What happens when an EC2 instance is stopped or terminated?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What are Security Groups?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to migrate an instance to another availability zone?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What are spot instances?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<h5>CloudFront</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Explain what is CloudFront and what is it used for</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain the following
  * Origin
  * Edge location
  * Distribution</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What delivery methods available for the user with CDN?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">True or False?. Objects are cached for the life of TTL</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<h5>Load Balancers</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">What types of load balancers are supported in EC2 and what are they used for?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
  * Application LB - layer 7 traffic
  * Network LB - ultra-high performances or static IP address
  * Classic LB - low costs, good for test or dev environments
                    </pre>
                    </code>
                    </div>


<h5>Databases</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is RDS?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What are some features or benefits of using RDS?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
1. Multi AZ - great for Disaster Recovery
2. Read Replicas - for better performances
                    </pre>
                    </code>
                    </div>



<br><h5>Question</h5>
<div class="bs-example dob-question">What is EBS?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is VPC?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>

    <script async defer src="https://buttons.github.io/buttons.js"></script>

</body>
