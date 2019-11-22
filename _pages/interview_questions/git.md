---
permalink: /interview_questions/git
author_profile: false
layout: single
sidebar:
  nav: "interview_questions"
---

{% include bootstrap_header.html title="Git Interview Questions" %}

<h5>Git Beginner</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is the difference between <code>git pull</code> and <code>git fetch</code>?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
 <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Shortly, git pull = git fetch + git merge

When you run git pull, it gets all the changes from the remote or central
repository and attaches it to your corresponding branch in your local repository.

git fetch gets all the changes from the remote repository, stores the changes in
a separate branch in your local repository
                    </pre>
                    </code>
 </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">Explain the following: <code>git directory</code>, <code>working directory</code> and <code>staging area</code></div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
 <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

The Git directory is where Git stores the meta data and object database for your project. This is the most important part of Git, and it is what is copied when you clone a repository from another computer.

The working directory is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk for you to use or modify.

The staging area is a simple file, generally contained in your Git directory, that stores information about what will go into your next commit. It’s sometimes referred to as the index, but it’s becoming standard to refer to it as the staging area.

This answer taken from [git-scm.com](https://git-scm.com/book/en/v1/Getting-Started-Git-Basics#_the_three_states)
                    </pre>
                    </code>
 </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How to resolve git merge conflicts?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
First, you open the files which are in conflict and identify what are the conflicts.
Next, based on what is accepted in your company or team, you either discuss with your
colleagues on the conflicts or resolve them by yourself
After resolving the conflicts, you add the files with `git add [file_name]`
Finally, you run `git rebase --continue`
                    </pre>
                    </code>
                    </div>

<br><h5>Question</h5>
<div class="bs-example dob-question">What is the difference between <code>git reset</code> and <code>git revert</code>?
</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
git revert creates a new commit which undoes the changes from last commit.
git reset depends on the usage, can modify the index or change the commit which the branch head
is currently pointing at.
                    </pre>
                    </code>
    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">You would like to move forth commit to the top. How would you achieve that?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
Using <code>git rebase></code> command
                    </pre>
                    </code>
    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">In what situations are you using <code>git rebase</code>?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What merge strategies are you familiar with?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

Mentioning two or three should be enough and it's probably good to mention that 'recursive' is the default one.

recursive
resolve
ours
theirs

This page explains it the best: https://git-scm.com/docs/merge-strategies
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How can you see which changes have done before committing them?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

<code>git diff</code>
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">How do you revert a specific file to previous commit?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
git checkout HEAD~1 -- /path/of/the/file
                    </pre>
                    </code>
   </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What is the <code>.git</code> directory? What can you find there?</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
                    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>
                    </pre>
                    </code>
                    </div>


<br><h5>Question</h5>
<div class="bs-example dob-question">What are some Git anti-patterns? Things that you shouldn't do</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
    <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

  * Not waiting to long between commits
  * Not removing the .git directory :)
                    </pre>
                    </code>
    </div>


<a name="git-advanced"></a>
<h5>Advanced Git</h5>

<br><h5>Question</h5>
<div class="bs-example dob-question">Explain Git octopus merge</div><button type="button" class="btn btn-info dob-answer-btn">Answer</button>
   <div class="container bg-light dob-answer">
                    <code class="language-html" data-lang="html">
                    <pre>

Probably good to mention that it's:

  * It's good for cases of merging more than one branch (and also the default of such use cases)
  * It's primarily meant for bundling topic branches together 

This is a great article about Octopus merge: http://www.freblogg.com/2016/12/git-octopus-merge.html
                    </pre>
                    </code>
   </div>


    <script async defer src="https://buttons.github.io/buttons.js"></script>

</body>
