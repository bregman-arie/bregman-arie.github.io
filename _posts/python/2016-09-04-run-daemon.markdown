---
layout: single
title:  "Python: Run Daemon"
date:   2016-09-04
categories: python
permalink: /python-run-daemon
description: "How to run a daemon using Python. Detailed explanation"
tags:
  - python
  - daemon
toc: true
toc_label: "Topics"
---

## What is a daemon?

Except for nature spirit, a daemon is also a process running in the background, meaning it's a non-interactive program. It's detached from the terminal of an interactive user.

There is no easy way to identify which processes on the system are daemons. It's common to think that processes with ppid (parent pid) of 1 are daemons, but you can easily create in your terminal interactive process with ppid of 1, meaning not all processes with ppid 1 are daemons.

## How to run a daemon process using Python?

There are several ways to achieve that.

### The daemon library

Start by importing the daemon library `import daemon`

Next, we run our service as a daemon

```
with daemon.DaemonContext(pidfile=pid):
    server.run()
```

We used 'with' statement to manage this resource properly by entering _enter_ method. When the daemon finishes to run it will enter the __exit__ method.

The pidfile is the context manager for the pid lock file. So entering and existing the daemon context will go through the pidfile context.

This is probably the best approach for running daemons with Python.

### The long way

I see no reason for you to not use the daemon library, but let's take a look on how to do it without it, just for fun.

Let's start by creating the Daemon class

```
import sys

class Daemon(object):
    """Daemon class."""

    def __init__(self, pidfile):
        self.pidfile = pidfile
```

When creating a Daemon instance, you should pass a pidfile parameter, which is the  path to the pid lock file.

Next, let's add method to the class which will start to run the daemon (if it's not already running):

```
def start(self)
    """Checks if it can start running the daemon."""

    if os.path.isfile(self.pidfile):
        sys.stderr.write("Failed to start. Looks like the daemon already running")
        sys.exit(2)
    else:
        self.run()
```

Next, let's add the method 'run' to handle the forking and write the pid to the pid lock file.

```
def run(self)
    """Runs the daemon."""

    self.fork()
    pid = os.getpid()

    with open(self.pidfile, 'w+') as pf:
        pf.write(str(pid))<br>
```

This is the fork method implementation

```
def fork(self):
    """Forks the process."""

    try:
        pid = os.fork

    except OSError, e:
        sys.stderr.write("Fork failed with: {}".format(e.strerror))
        sys.exit(2)
```

Finally, you can start running a daemon by writing the following lines

```
if __name__ == '__main__':
    daemon = Daemon('/var/lib/mario.pid')
    daemon.start()
```

Of course you can, and probably should, add methods to allow stopping the daemon or restarting it.
