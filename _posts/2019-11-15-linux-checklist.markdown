---
layout: single
title:  "Linux Checklist"
date:   2019-11-15 
categories: linux
toc: true
toc_label: "topics"
---

## File System Hierarchy

- [ ] `/` (aka root)
- [ ] `/bin` and `/sbin`
- [ ] `/opt`
- [ ] `/usr`
- [ ] `/var`
- [ ] `/home`
- [ ] `/etc`
- [ ] `/proc`
- [ ] `/tmp`

- [ ] Test
  - [ ] What is '/'?
  - [ ] What is stored in '/bin'? what about `/etc`?
  - [ ] What '/home' is usually used for?
  - [ ] What type of files can you find in '/var'?
  - [ ] What is unique about `/tmp`?

## Navigation

- [ ] Commands
  - [ ] `pwd` - where am I?
  - [ ] `cd` - change directory
- [ ] relative vs. absolute paths

- [ ] Test
  - [ ] How to check your current path?
  - [ ] Where `cd ..` will take you?
  - [ ] What would be the effect of running `cd .`?
  - [ ] What will happen when running 'cd -'?

## Files

- [ ] Types of files
  - [ ] Regular
  - [ ] Directory
  - [ ] Socket
  - [ ] Block
  - [ ] Link

- [ ] Commands
  - [ ] `ls` - list files and directories
    - [ ] `-a` for listing hidden files
    - [ ] `-l` for list formt
    - [ ] `-t` order by time
    - [ ] `-F` better distinguish between regular files and directories
  - [ ] `touch` - creating files (original intention is updating timestamp)
    - [ ] nice to know: `touch file{1..5}`
  - [ ] `rm` - remove files
    - [ ] `-r` for recursive
    - [ ] `-f` to force removal, no questions asked
  - [ ] `mkdir` - create directories
    - [ ] `-p` - for creating multiple nested directories
  - [ ] `rmdir` - remove directories
  - [ ] `echo` - display a line of text
  - [ ] `cat` - concatenate files (common usage: read a file)
  - [ ] `mv` - move files directories (also rename files and directories)
  - [ ] `cp` - copy a file
    - [ ] `-r` for recursive (copy a directory)

- [ ] Test
  - [ ] How to list hidden files?
  - [ ] How to create an empty new file?
  - [ ] How to remove a directory?
  - [ ] How to rename a file?
  - [ ] How to copy an entire directory with all its files?

## Commands

- [ ] `man` - manual for commands
- [ ] `which` - get full path for given command
- [ ] `whatis` - one-line manual page descriptions

## I/O redirection
  - [ ] File Descriptor
    - [ ] stdin 0 (input) <
    - [ ] stdout 1 (output) >
    - [ ] stderr 2 (error) 2>
  - [ ] Append >>

- [ ] Test
  - [ ] How to redirect output?
  - [ ] What would be the result of the following command `blop 2> file`?

## Text Editor

Learning how to use one of them is more than enough

- [ ] vim
  - [ ] `i` to start typing
  - [ ] `:wq` to exit (or `shit+zz`)
- [ ] nano
- [ ] emacs
- [ ] atom
- [ ] sublime

- [ ] Test (mainly for vim)
  - [ ] How to remove an entire line?
  - [ ] How to copy 5 lines?
  - [ ] How to jump to the end of the line
  - [ ] How to remove one word
  - [ ] How to jump to the end of the file

## Users

- [ ] Commands
  - [ ] `useradd` - add users
  - [ ] `usermod` - modify users
  - [ ] `userdel` - delete users
  - [ ] `who` - show who is logged on
  - [ ] `lastlog`

- [ ] Test
  - [ ] how to add a new user?
  - [ ] should you be using your user or root?

## Network

- [ ] netstat

## Monitoring and performence commands

- [ ] top
- [ ] stat

## Processes

- [ ] Running in ackground (&)

## Archives

- [ ] tar
- [ ] zip
- [ ] commands
- [ ] create an archive
- [ ] list archive's content
- [ ] remove an archive

## Storage & Filesystem
- [ ] inode
