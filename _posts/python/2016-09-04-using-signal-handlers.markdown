---
layout: single
title:  "Python: Signal Handlers"
date:   2016-09-04
categories: python
permalink: /python-signal-handlers
description: "python management of signal handlers"
tags:
  - python
  - signal
toc: true
toc_label: "Topics"
---

## What is a signal?

Software interrupts sent to the program to notify on significant event or request the program  to run special sequence .

For example, the following command uses SIGHUP signal to request the program to reload it's configuration

kill -HUP <pid>

Anther common signal is the SIGTERM which is used to terminate the program

`kill -15 <pid>`

In the example above we used the signal number instead of 'SIGTERM'

Next, I'll show you how display all the signals and their numbers.

## How to list all the signals?

To list all the signals on your system, you can use 'kill -l'

```
> kill -l

 1) SIGHUP	 2) SIGINT	 3) SIGQUIT	 4) SIGILL	 5) SIGTRAP
 6) SIGABRT	 7) SIGBUS	 8) SIGFPE	 9) SIGKILL	10) SIGUSR1
11) SIGSEGV	12) SIGUSR2	13) SIGPIPE	14) SIGALRM	15) SIGTERM
16) SIGSTKFLT	17) SIGCHLD	18) SIGCONT	19) SIGSTOP	20) SIGTSTP
21) SIGTTIN	22) SIGTTOU	23) SIGURG	24) SIGXCPU	25) SIGXFSZ
26) SIGVTALRM	27) SIGPROF	28) SIGWINCH	29) SIGIO	30) SIGPWR
31) SIGSYS	34) SIGRTMIN	35) SIGRTMIN+1	36) SIGRTMIN+2	37) SIGRTMIN+3
38) SIGRTMIN+4	39) SIGRTMIN+5	40) SIGRTMIN+6	41) SIGRTMIN+7	42) SIGRTMIN+8
43) SIGRTMIN+9	44) SIGRTMIN+10	45) SIGRTMIN+11	46) SIGRTMIN+12	47) SIGRTMIN+13
48) SIGRTMIN+14	49) SIGRTMIN+15	50) SIGRTMAX-14	51) SIGRTMAX-13	52) SIGRTMAX-12
53) SIGRTMAX-11	54) SIGRTMAX-10	55) SIGRTMAX-9	56) SIGRTMAX-8	57) SIGRTMAX-7
58) SIGRTMAX-6	59) SIGRTMAX-5	60) SIGRTMAX-4	61) SIGRTMAX-3	62) SIGRTMAX-2
63) SIGRTMAX-1	64) SIGRTMAX
```

As you can see it prints list of all the signals and their numbers. So if, for example, we want to used SIGKILL to kill a program, we can use it this way:

`kill -9 <pid>`

## How to use signals with Python?

In Python you have the 'signal' module, which is part of the standard library.

Here is an example of how to catch/handle SIGTERM signal sent to your python program

```
import signal

def signal_terminate_handler(signum, frame):
    print "Received signal: {}. You shall not terminate this program!".format(signum)

signal.signal(signal.SIGTERM, signal_terminate_handler)
```

First step is to import the signal module.
Next, we defined function that will handle the signal SIGTERM. First param is signum which is the signal number and the second is frame which is the  stack frame.

This is how your signal handle function signature should look like. The content of the function is up to you, in this example I simply printed a specific string.
Last line is how we set the signal handler for the signal SIGTERM

## Can I define my own signals?

Yes, for this you have SIGUSR1 and SIGUSR2 which are user defined signals.

```
signal.signal(signal.SIGUSR2, signal_user_handler)
```
