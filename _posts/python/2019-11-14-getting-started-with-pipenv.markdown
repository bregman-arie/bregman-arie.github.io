---
layout: single
title:  "Getting started with Pipenv"
date:   2019-11-14
categories: python
description: "pipenv tutorial for beginners explained"
tags:
  - python
toc: true
toc_label: "Topics"
---

## Whas is Pipenv?

A package management tool which makes combined use of

* pip – Python package manager
* virtualenv – used for creating isolated Python environments so you can easily use different packages in different projects
* Pipefile – records the package versions used in a given project so you can easily install them on any other system you want. Also considered as the replacement of Python requirements files

So basically with one short pipenv command you can install a package in a virtual environment and record it in pipfile and pipefile.lock files. Think of pipenv as next gen package management tool that should save you time and also provide you with new shiny utilities.

## Why using Pipenv?

* One tool to rule them all – as stated a second ago, no need to use pip and virtualenv separately. You will benefit from all the tools I just mentioned, by using one simple command.
* Provides you with many great utilities like creating a graph of your dependency tree, checking for security vulnerabilities and even assists you with creating issues on Github when bumping into a problem (more on that later on).

Overall, pipenv feels like the proper way to manage packages and dependencies in your Python projects.

## Why not using Pipenv?

It probably seems unusual to have a “why not” section in a tutorial post but I prefer you’ll know the full truth on pipenv rather than getting the feeling it's ultimate package management tool.

Pipenv is not a free-from-bugs tool (like any other software) but in my short experience with it, I have bumped into numerous problems. Sometimes it’s the price you have to pay when switching to newer technology but some will say it’s too buggy to use at this point. Personally, I think you should still give it a try but don't expect a smooth experience.
It also has controversial behaviors that you might not like. This [issue](https://github.com/pypa/pipenv/issues/2910#event-2048173851) describes how pipenv ignores user chosen shell and spawns sh instead (I can confirm it as I’m experiencing the same). Personally, I’m quite disappointed by that according to what was written in the issue, it’s what the community asked for.

Nonetheless, I'm still using it and before you choose whether to use it or not, it’s best to give it a try so let's see how to use it.

## Install pipenv

This step depends on which operating system you are using. If you are using Fedora like me (ore CentOS/RHEL) run the following

```
sudo dnf install pipenv -y
```

## Hello Pipenv

Let’s start using pipenv by installing a requirement. I'm going to install flask, you can install whatever you are using for your projects.

```
pipenv install flask
```

This short command will result in:

Creating a new virtual environment automatically
Creating a new Pipfile & Pipfile.lock files
Installing flask

Pretty nice, no?

## Pipfile

Once the package is installed, you’ll notice pipenv has created a file called ‘Pipfile’ (and ‘Pipfile.lock'). This file basically records all the packages you installed in your virtual environment so when you want to send someone the project, or install it in another environment you can easily do so by using the Pipfile file.

Let’s see how a Pipfile file looks like

```
[source]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]

flask = “*”

[dev-packages]

[requires]

python_version = “3.7”
```

First part, `source`, is pretty standard and fixed for probably most of the projects. It specifies the source for the different packages. In our case, PyPi. The largest (and official) source for Python packages.

Next one is `packages` section which specifies the packages you installed in the virtual environment. An asterisk means no specific version was given. If you installed a specific version of flask, you’d see there a number/version instead of an asterisk.

The last section is ‘requires’ where you can specify which Python version your application should be using. In our case we can see Python 3.7 was used while installing flask.

## Pipfile.lock

At first glance, Pipfile.lock might look similar in its content to the Pipfile file. It also specifies the packages mentioned in Pipfile and their versions but one major difference is that it includes the download hashes.

It includes download hashes since the purpose of this file is to provide deterministic builds, meaning it includes all dependencies and download hashes so you can easily reproduce builds with the exact packages that were used originally when you developed the project.

Note that you can and probably should manage both Pipfile and Pipfile.lock with version control. Similarly to how you are managing requirements files.

## Work within the virtualenv

So far you created a new virtaulenv with pipenv and installed requirements into it but you didn’t actually activate it. So any command you’ll execute (which is not pipenv) will run outside the virtualenv pipenv created for you.

In order to switch to the virtualenv created by pipenv run the command

```pipenv shell```

This will basically spawns a shell inside the virtualenv created by pipenv.

If don’t want to spawn a shell but simply execute one or more specific commands, you can use ```pipenv run <command>``` and it will run the command inside the virtualenv pipenv created.

## Removing virtual environment

If you want to remove your virtualenv you can do it with ```pipenv --rm command```.

Don’t worry about Pipfile files. It will not remove them which means you can instantly recreate the environment you used before removing the virtual environment.

## Install local packages

You might be working on a project, locally on your computer and at some point, you would like to install it in your virtualenv and see how it works. It’s possible by using the following command

pipenv install -e .
It’s equivalent to pip install . which used for the same purpose of local project installations.

Note it will update your Pipfile content with

```
<project_name> = {editable = true, path = "."}
```

## Update Pipfile.lock

It’s possible you’ll make changes in your environment not using pipenv. After all, it takes time to get used to new tools. In case it happens, you can still update your Pipfile.lock accordingly with pipenv lock

This will update your pipfile.lock to reflect the packages used in your virtualenv. If the file doesn’t exist, it will generate it from scratch, allowing you, or anyone using your project, to run deterministic builds.

## Pipenv issues

As I wrote at the beginning of the post, there is a high probability you’ll bump into some issue with pipenv while trying it out. Fortunately, pipenv developers made it quite easy to collect information on your environment with the --supprt flag. Some of the information it collects is:

Python version
PEP 508 information (dependency specification)
System environment variables
The content of Pipfile and Pipfile.lock files
You can then easily copy the output you get from running pipenv --support and paste into a GitHub issue which describes your problem.

I like this approach as it saves time for both users and project maintainers since a user doesn’t need to guess which information would be useful for the maintainers and the maintainers are used to process the same format with every issue.
