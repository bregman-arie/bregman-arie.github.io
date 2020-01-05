---
layout: single
permalink: /linux-proc-deep-dive
description: "linux proc deep dive"
title:  "Linux: /proc deep dive"
date:   2020-01-29
categories: linux
tags:
  - linux
  - proc
toc: true
toc_label: "Topics"
---

## What is /proc exactly?

Let's start by stating that /proc isn't a regular filesystem. Don't believe me? good, let's take a closer look

```
 ~ df /proc
Filesystem     1K-blocks  Used Available Use% Mounted on
proc                   0     0         0    - /proc
```

Interesting, a filesystem with 0 blocks used although there are files under /proc<br>
/proc is also not listed in /etc/fstab

```
/dev/mapper/fedora-root /                       ext4    defaults        1 1
UUID=0ablip2-e5blop2-5lol4-6mario5 /boot        ext4    defaults        1 2
/dev/mapper/fedora-home /home                   ext4    defaults        1 2
/dev/mapper/fedora-swap swap                    swap    defaults        0 0
```

This is because /proc resides in the RAM. It's available only when you are running the operating system as opposed to other filesystems that reside on the disk itself and data there can be inspected on another hardware.<br>
You can't create files under /proc. Let's give it a try

```
touch file
touch: cannot touch 'file': No such file or directory
```

Later on we'll see that although we can't create new files there, we can modify existing files which will affect the kernel behaviour.<br>
So we are now pretty sure it's not a regular filesystem, but we didn't answer the question "What is it?"

/proc is known as a virtual filesystem (for reasons we explained above). It holds runtime system information which can be categorized into two categories - performances and processes. Let's deep dive and see what we can find there.

### /proc/meminfo - Memory Information

```
MemTotal:       32247880 kB  # Total physical RAM you have in your system (used + unused)
MemFree:         3432720 kB  # The amount of unused physical RAM in your system
MemAvailable:   21118008 kB  # The amount of available memory for new workloads (without pushing system to use swap) based 
                               on MemFree, Active(file), Inactive(file), and SReclaimable and the watermarks from /proc/zoneinfo.
Buffers:         4778704 kB
Cached:         10015396 kB
SwapCached:            0 kB
Active:         17366256 kB
Inactive:        4904752 kB
Active(anon):    8189116 kB
Inactive(anon):   718336 kB
Active(file):    9177140 kB
Inactive(file):  4186416 kB
Unevictable:      828916 kB
Mlocked:          179112 kB
SwapTotal:      16220156 kB
SwapFree:       16220156 kB
Dirty:               860 kB
Writeback:             0 kB
AnonPages:       8305412 kB
Mapped:          1326808 kB
Shmem:           1379852 kB
KReclaimable:    4791664 kB
Slab:            5256456 kB
SReclaimable:    4791664 kB
SUnreclaim:       464792 kB
KernelStack:       30868 kB
PageTables:       132424 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:    32344096 kB
Committed_AS:   32145288 kB
VmallocTotal:   34359738367 kB
VmallocUsed:       58112 kB
VmallocChunk:          0 kB
Percpu:            39776 kB
HardwareCorrupted:     0 kB
AnonHugePages:         0 kB
ShmemHugePages:        0 kB
ShmemPmdMapped:        0 kB
CmaTotal:              0 kB
CmaFree:               0 kB
HugePages_Total:       0
HugePages_Free:        0
HugePages_Rsvd:        0
HugePages_Surp:        0
Hugepagesize:       2048 kB
Hugetlb:               0 kB
DirectMap4k:      920856 kB
DirectMap2M:    28839936 kB
DirectMap1G:     4194304 kB
```

### /proc/cpuinfo - CPU Information
