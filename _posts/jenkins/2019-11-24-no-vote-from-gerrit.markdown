---
layout: single
title:  "Gerrit: No Vote from Jenkins"
date:   2019-11-12 
categories: jenkins
description: "no vote from jenknis in gerrit"
tags:
  - python
  - list
  - duplicates
toc: true
toc_label: "Topics"
---

## No vote :(

You finished to write a nice piece of code and submitted it to Gerrit for code reviews. Next, the gates on Jenkins start to work and you soon should get your +1 (or -1 if it's not a good piece of code as you thought at the beginning).<br>
You wait a couple of minutes, hours, days, seasons, but you never got the vote from Jenkins. Why? What went wrong?

I'll cover several possible reasons

## Gerrit project permissions

Jenkins, like every other user, needs permissions in order to vote on change submitted to Gerrit.

Go to your project on Gerrit (projects -> click on the name of the project in the list) and click on the access tab. In the opened page, you should see under each type of permissions (push, label verified, ...) the groups and users assigned to this type of permissions.

In order for Jenkins to verify changes (vote with +-1), you should add Jenkins user under 'label verified' section. Make sure to click on 'save' when you have done in order to save the changes.

Jenkins should be able now to vote with +-1 on your changes.

## Job Configuration

It's probably too silly to mention, but it can happen to anyone - have you forgotten to configure the job so it votes with +1 on a successful build? You did? great :) forget I asked.

## Last Resort - Jenkins Manual verification

In case you tried everything mentioned in this post and Jenkins is still not voting but the gates passed successfully and you must have +1 from Jenkins, there is a workaround.

I don't recommend to use this method unless you really don't have any other choice since it's bypassing the actual mechanism which should work and do it manual fake vote.

Basically, the next command will give you the required result of Jenkins voting verified +1

```
ssh -i ~/.ssh/<key_to_gerrit> <jenkins_user>@<gerrit_server> gerrit review 125212,1  --verified +1
```

With the above command, we are connecting to Gerrit with the Jenkins user and execute 'gerrit review'. To execute 'gerrit review' we need to pass the change number (in our case 125212) and the number of the patchset (1). Finally, we place our vote. In this case, +1 for verified, but we could also use --code-review.
