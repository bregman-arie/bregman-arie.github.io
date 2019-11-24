---
permalink: /interview_questions/go
author_profile: false
layout: single
description: "Golang interview questions"
sidebar:
  nav: "interview_questions"
---

{% include bootstrap_header.html title="Go Interview Questions" %}

<br><h5>Question</h5>
<div class="bs-example dob-question">What are some characteristics of the Go programming language?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

  * Strong and static typing - the type of the variables can't be changed over time and they have to be defined at compile time
  * Simplicity 
  * Fast compile times
  * Built-in concurrency
  * Garbage collected
  * Platform independent
  * Compile to standalone binary - anything you need to run your app will be compiled into one binary. Very useful for version management in run-time. 

Go also has good community.
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is the difference between <code>var x int = 2</code> and <code>x := 2</code>?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

The result is the same, a variable with the value 2.
With <code>var x int = 2</code> we are setting the variable type to integer while with <code>x := 2</code> we are letting Go figure out by itself the type.
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">True or False? In Go we can redeclare variables and once declared we must use it.</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
  <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

False. We can't redeclare variables but yes, we must used declared variables.
                    </pre>
                    </code>
  </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What libraries of Go have you used?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

This should be answered based on your usage but some examples are:

  * fmt - formatted I/O
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is the problem with the following block of code? How to fix it?

```
func main() {
    var x float32 = 13.5
    var y int
    y = x
}
```
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">The following block of code tries to convert the integer 101 to a string but instead we get "e". Why is that? How to fix it?

```
package main

import "fmt"

func main() {
    var x int = 101
    var y string
    y = string(x)
    fmt.Println(y)
}
```
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

It looks what unicode value is set at 101 and uses it for converting the integer to a string.
If you want to get "101" you should use the package "strconv" and replace <code>y = string(x)</code> with <code>y = strconv.Itoa(x)</code>
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is wrong with the following code?:

```
package main

func main() {
    var x = 2
    var y = 3
    const someConst = x + y
}
```
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What will be the output of the following block of code?:

```
package main

import "fmt"

const (
	x = iota
	y = iota
)
const z = iota

func main() {
	fmt.Printf("%v\n", x)
	fmt.Printf("%v\n", y)
	fmt.Printf("%v\n", z)
}
```
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What _ is used for in Go?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What will be the output of the following block of code?:

```
package main

import "fmt"

const (
	_ = iota + 3
	x
)

func main() {
	fmt.Printf("%v\n", x)
}
```
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


</body>
