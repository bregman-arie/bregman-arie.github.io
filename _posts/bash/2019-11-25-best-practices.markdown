---
layout: single
title:  "Bash Best Practices"
date:   2019-11-25 
categories: bash
description: "bash best practices what to do and what dont"
tags:
  - bash
  - practices
toc: true
toc_label: "Topics"
---

## Exit script when a certain command fails

When a script written in Bash fails to run a certain command it will keep
running and will execute all other commands mentioned after the command which failed.
Most of the time we would actually want the opposite to happen.
In order to make Bash exist when a specific command fails, use 'set -e' in your script.

```
#!/usr/bin/env bash
set -e

ls /usr/lib/cowabunga
date # It will never run this (unless you have /usr/lib/cowabunga on your system for some reason...)
```

## Allow some commands to fail

Not every failure is a good reason to exit a script.
You will probably want to allows some commands to fail and keep running
To achieve that simple append '|| true' to your command

```
#!/usr/bin/env bash
set -e

dance || true
ls /tmp #  This command will run even if `dance` failed
```

## Get used to using curly braces {}

It's a good habit to use curly braces when
referring to variables. Let's see few examples.

`echo \${foo}bar` if not used you would expand \$foobar
`echo ${10}` to expand any positional parameter beyond you'll have to use {}
`echo ${A[0]}` to expand array elements

There are additional advantages covered in next sections.

## Undeclared Variables

The following one-line "script" will work just fine

```
ls ${x}
```

It's reasonable to think that whoever wrote this amazing script
wanted x to be defined somewhere and either forgot to do it or the
user didn't follow the instructions.
In order to avoid strange failures with your script you would
want to execute 'set -u' in order to make sure variable are not
undefined

```
#!/usr/bin/env bash
set -u

ls ${x}
```

Now the script will return error trying to use undefined x variable.

## Use ':-' for allowing undeclared variables

Sometimes you would want to allow variables to be undeclared.
In that case use this syntax to do so: '\${X:-}'.
You can also set default value if variable is undeclared
like this: '\${X:-mario}'

```
#!/usr/bin/env bash

echo "Nothing more than emptiness ${X:-}"
echo "But here, there is ${X:-something}"

X='anymore'

echo "It doesn't feel empty ${X:-}"
```

## Things you should never do

### Don't use backticks (``) for running commands

backticks were (and still are) used for executing a command and using its
output as a command as well. For some reason people are still using backticks
in scripts although they are deprecated long time ago and were replaced
by \$(...) which was introduced by ksh for the first time and now part of
POSIX standardization.

```
x=`date` -> No!
x=$(date) -> Yes :D
```
