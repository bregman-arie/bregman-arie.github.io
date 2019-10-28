---
layout: single
permalink: /gerrit-dependency/
title: "Adding dependent patches in Gerrit"
tags: git gerrit
comments: true
---

Sometimes you want to push a patch that is based on another patch.
Following are the steps you need to do:

Create a new branch
```bash
$ git checkout -b <your branch name>
```

Download the parent patch and checkout to a new branch
```bash
$ git review -d <parent patch gerrit id>
```
The above will result in a new branch with a name based on the parent's patch author and the name of a topic. You may want to change it:
```bash
$ git branch -m <old branch name> <new branch name>
```

Add your changes and push the patch:

```bash
$ git add <file1> <file2> ..

$ git commit

$ git review
```

## Dealing with outdated patches
### Using CLI
When the parent patch is being updated you need to do the following:

```bash
$ git checkout master
```
Download the parent patch and checkout to a new branch
```bash
$ git review -d <parent patch gerrit id>
```

Download and cherry pick the child patch
```bash
$ git review -x <child id>
```

Upload the patch
```bash
$ git review
```

Change the branch name if needed:
```bash
$ git branch -m <old branch name> <new branch name>
```

### Using GUI
If there are no conflicts you can go to your patch page and hit the 'Rebase' button and will update your patch automatically.
