---
layout: single
---
## DevOps Checklists

### Linux

- [ ] **Basic commands**
  - [ ] pwd
  - [ ] ls
    - [ ] How to list hidden files?
    - [ ] How to list content using long list format?
  - [ ] cd
    - [ ] What 'cd ..' means?
    - [ ] What will happen when running 'cd -'?
  - [ ] touch
  - [ ] rm
      - [ ] how to remove a directory?

- [ ] **File system hierarchy**
  - [ ] What is '/'?
  - [ ] What is stored in '/bin'?
  - [ ] What '/home' is usually used for?
  - [ ] What can you find in '/var'?

- [ ] **I/O redirection**

- [ ] **Network**
    - [ ] netstat

- [ ] **Users**
    - [ ] commands
        - [ ] useradd
        - [ ] usermod
        - [ ] who
    - [ ] how to add a new user?
    - [ ] should you be using your user or root?

- [ ] **Monitoring and performence commands**
    - [ ] top
    - [ ] stat

- [ ] **Processes**
    - [ ] Running in ackground (&)

- [ ] **Archives**
    - [ ] what is it good for
    - [ ] tar
    - [ ] zip
    - [ ] commands
        - [ ] create an archive
        - [ ] list archive's content
        - [ ] remove an archive

- [ ] **Storage, Filesystem**
    - [ ] inode

### Aws

#### Cloud Practicioner

- [ ] **Cloud Computing**

  - [ ] What is cloud computing?

  - [ ] The 6 advantages of cloud computing
    - [ ] Trade capital expense for variable expense - pay for what you consume instead of investing in something you don't fully utilize
    - [ ] Benefit from massive economies of scale
    - [ ] Stop guess about capacity - Cloud scales with your needs
    - [ ] Increase speed and agility - You can use the cloud to quickly build platforms using architectures such as serverless for example
    - [ ] Stop spending money running and maintaining data centers - Focus on what you want instead of focusing on managing infrastructure
    - [ ] Go global in minutes - Easily deploy your application in multiple regions around the world which results in better experience (like lower latency) for users of your app

  - [ ] 3 Types of cloud computing
    - [ ] Infrastructure as a service (IAAS) - You are managing the server. It can virtual or physical. The provider (e.g. Amazon) will have no access to your server. EC2 is an example of IAAS.
    - [ ] Platform As a service (PAAS) - Someone else manages the underlying hardware and OS. You focus on the application side. Heroku and Google app engine are examples of PAAS.
    - [ ] Software As A service (SAAS) - You only worry about the software. As opposed to PAAS, you don't have to worry about the installation and the setup of the application. You just have to use the software itself.

  - [ ] 3 types of cloud computing deployments
    - [ ] Public Cloud - AWS, Azure & GCP
    - [ ] Hybrid - Mixture of public and private.
    - [ ] Private Cloud / On Premise - You manage it in your datacenter. OpenStack for example.
  
- [ ] **Global Infrastructure**
  
    - [ ] Availability Zone is one or more data centres, each with redundant power, networking and connectivity, housed in separate facilities.
    - [ ] Region is a geographical/physical area. Region consists of two or more availability zones
    - [ ] Edge locations are endpoints for AWS which are use for caching content.
    
- [ ] **IAM**
  
  - [ ] IAM (Identity Access Management) is global. You do not need to specify region when dealing with IAM related resources
  - [ ] There are 3 ways to access the AWS platform
    - [ ] Console
    - [ ] Programmatically(CLI)
    - [ ] Software Developers Kit (SDK)
  - [ ] Root account is the email address you to set up the AWS account and it has full permissions
  - [ ] Root account should not be given to anyone, instead the root account should create users
  
- [ ] **S3**

  - [ ] Simple Storage Service
  - [ ] S3 is a secure, highly scalable object based storage
  - [ ] S3 features:
      - [ ] Tiered Storage Available
      - [ ] Lifecycle Management - manage which storage tier the file you uploaded goes to
      - [ ] Versioning - managing different versions of your file and restore previous versions
      - [ ] Encryption
      - [ ] Security - using ACL (Access Control Lists) and bucket policies
  - [ ] S3 is object-based storage. The data itself is spread across multiple locations.
  - [ ] Files can be from 0 Bytes to 5 TB. There is unlimited storage.
  - [ ] Files are stored in buckets
  - [ ] Bucket name must be globally unique
      - [ ] For example: https://s3-eu-west-1.amazonaws.com/mybucket
  - [ ] HTTP 200 code is returned when a file is uploaded successfully to S3
  - [ ] Objects consist of:
      - [ ] Key - name of the object
      - [ ] Value - the data itself
      - [ ] Version ID - used for versioning
      - [ ] Metadata - data about the data
  - [ ] Data consistency
      - [ ] New objects - writing a new file, you will be able immediately read it
      - [ ] Overwrite and deletes - updating a file or deleting it, you may get the older version when reading it as changes to objects can take some time to be applied
  - [ ] Transfer Acceleration
      - [ ] when used, users will upload a file to the edge location which will then upload the files from edge locations to the bucket in specific location using optimized network path (Amazon internal network)
  - [ ] Cross Region Replication
      - [ ] For example: you have a bucket in Europe and you upload there a file from USA. This file will be replicated to USA region.
  - [ ] Charges
      - [ ] You are charged for the following: storage, requests, storage management, data transfer, transfer acceleration and cross region replication
  - [ ] Storage Classes
      - [ ] S3 standard - 99.99% availability and 11x9 durability
      - [ ] S3 IA - Infrequently access but rapid access when needed
      - [ ] S3 One Zone IA - lower cost option for IA without multiple AZ data resilience
      - [ ] S3 Intelligent Tiering -  ML based, designed to optimized costs by automatically moving to most cost-effective access tier
      - [ ] S3 Glacier - secure, durable and low-cost storage for data archiving
      - [ ] S3 Glacier Deep Archive - most lost cost storage class where a retrieval time of 12 hours is fine
  - [ ] Hosting a website
      - [ ] You can host static websites on s3
      - [ ] You cannot host dynamic websites on s3
      - [ ] s3 scales automatically to meet your website demands
  
- [ ] **EC2**

    - [ ] EC2 is Amazon Elastic Compute Cloud. A compute based service
        - [ ] Allow you to create virtual servers in the cloud
    - [ ] Pricing models
        - [ ] On Demand - pay a fixed rate by the hour/second with no commitment
            - [ ] Good for:
                - [ ] users that want low cost and flexibility
                - [ ] applications with short terms, spiky or unpredictable workloads that cannot be interrupted
                - [ ] application being developed or tested for the first time
        - [ ] Reserved - you get capacity reservation
            - [ ] Contract terms: 1 year or 3 years. The longer, the cheaper
            - [ ] Good for:
                - [ ] Predictable usage
                - [ ] Apps that required reserved capacity
                - [ ] Users who able to make upfront payments
            - [ ] Pricing
                - [ ] Standard reserved instances - The more you pay and longer, the greater is the discount
                - [ ] Convertible Reserved Instances - These offer up to 54% off on demand capability to change the attributes of the RI 
                - [ ] Scheduled Reserved Instances - Available to launch within the time windows you reserve
        - [ ] Spot - Enables you to bid whatever price you want for instances
            - [ ] when spot price hit your bid, you'll get the instance
            - [ ] when spot price is below your bid price, you'll lose the instance
            - [ ] Good for:
                - [ ] Apps which have flexible start and end time
                - [ ] Apps that are only feasible at very low compute prices
                - [ ] Users with urgent computing needs for large amount of additional capacity
        - [ ] Dedicated Hosts - physical EC2 server dedicated for your use
            - [ ] Good for:
                - [ ] Regulatory requirements which may not support multi-tenant virtualization
                - [ ] Licenses which don't support multi-tenants or cloud deployments
            - [ ] Pricing
                - [ ] Can be purchased on on-demand (hourly)
                - [ ] Can be purchased as a reservation for up to 70% off the on-demand price
        - [ ] EBS
            - [ ] Allows you to create storage volumes and attach them to Amazon EC2 instances
            - [ ] Think of it as virtual disk in the cloud
            - [ ] Volumes are placed in a specific AZ where they are automatically replicated for HA
            - [ ] SSD
                - [ ] General purpose SSD (GP2) - balanced price and performance
                - [ ] Provisioned IOPS SSD (IO1) - highest-performance SSD volume for mission-critical low-latency or high-throughput workloads
            - [ ] Magnetic
                - [ ] Throughput Optimized HDD (ST1) - low cost HDD volume designed for frequently accessed, intensive workloads
                - [ ] Cold HDD (SC1) - Lowest cost HDD volume for less frequent access
                - [ ] Magnetic - deprecated
        - [ ] Security Group
            - [ ] A set of firewall rules that control the traffic to your instance

- [ ] **CloudFront**

    - [ ] What is CloudFront? a content delivery network (CDN) is a system of distributed servers that deliver web content to users based on the geographic location of:
        - [ ] the user
        - [ ] the origin of the web content
        - [ ] the content delivery server
    - [ ] Terminology
        - [ ] Edge location - the location where the content is cached
            - [ ] These location allow both read and write
        - [ ] Origin - The origin of the files which CDN will distribute (can be EC2 instance, S3 bucket, Elastic LB, ...)
        - [ ] Distribution - This name given the CDN (which consists of Edge locations)
    - [ ] How it works:
        - [ ] Users will try to query a file which happens to be on another geographic location.
        - [ ] Since it's not available in the edge location, they will get it from the origin location
        - [ ] The file which wasn't available in the edge location will now be stored at the edge location
        - [ ] Any future users will get it from the edge location in their area instead of going to the origin
    - [ ] Delivery Methods
        - [ ] Web Distribution - typically used for websites
        - [ ] RTMP - used for media streaming
    - [ ] Cache
        - [ ] objects are cached for the life of TTL in seconds
        - [ ] it's possible to clear cached objects but it's not free

- [ ] **CLI**

    - [ ] `aws configure` to set up the CLI
        - [ ] It's stored in `~/.aws`
        - [ ] Note: roles are more secure than using access key id's and secret access keys. Roles can be applied to EC2 instances at any time and they are universal (no need to specify region)
    - [ ] Usage: `aws <service> <args>`
    - [ ] Examples
        - [ ] `aws ec2 ls`
        - [ ] `aws s3 ls`

- [ ] Load Balancer

    - [ ] EC2 -> Load Balancer in the left side panel -> Create load balancer
    - [ ] Types of load balancers
        - [ ] Application Load Balancer - for layer 7 (HTTP, HTTPS) traffic
        - [ ] Network Load Balancer - for ultra-high performances or static IP addresses)
        - [ ] Classic Load Balancer - when your app is running in the EC2-Classic network. Good for low costs and test environments

- [ ] Databases

    - [ ] Relational DB - Consists of tables when each table has several rows and each row includes several fields/columns
        - [ ] Relational DB on AWS are called **RDS**. There are several DBs of this type:
            - [ ] SQL server, Oracle, MySQL Server, PostgreSQL, Aurora and MariaDB
        - [ ] RDS has two key features
            - [ ] Multi availability zone. This is good for Disaster Recovery
            - [ ] Read Replicas which are copies of your database. This is great for performance as you read from this copies.
                - [ ] You can 5 copies of your database
                - [ ] When your primary DB will fail it doesn't mean you will be able to write to one of the copies
    - [ ] Non Relational DB - Consists of collections and inside these collections we can find documents and each document consists of key value pairs
        - [ ] The fields can be different in each document as opposed to Relational DB

### Jenkins

- [ ] **Terms & Entities**
  - [ ] Job
  - [ ] Build
  - [ ] Plugin
  - [ ] Slave

- [ ] **Job**
  - [ ] Freestyle
  - [ ] Pipeline
    - [ ] Declarative 
    - [ ] Scripted
  - [ ] Checkpoint (cloudbees only at this point)

- [ ] **Slave**
  - [ ] Agent
  - [ ] Executor
  - [ ] Label

### Network

- [ ] **OSI model**
  - [ ] What layers the OSI model has and what is the purpose of each one of them?

- [ ] **Ethernet**
  - [ ] What is CSMA/CD and how it works?

- [ ] **MAC address**
  - [ ] What is it used for? Is it unique?
  - [ ] How many bits are in a MAC address?

- [ ] **IP address**
  - [ ] What is it used for? Is it unique worldwide?
  - [ ] What are the two parts of an IP address?
  - [ ] How many bits are in an IP address?

- [ ] **Subnets**
  - [ ] Two hosts are on the same subnet if they have the same '_____'
  - [ ] What is a netmask?
  - [ ] What two syntaxes exist for expressing a netmask?

- [ ] **ARP**
  - [ ] Which layer of the OSI model do ARP belong to?
  - [ ] What ARP table includes?
  - [ ] Give an example of how ARP protocol works

- [ ] **IP**
  - [ ] What it defines?
  - [ ] What is a routing table? When is it being used?

- [ ] **TCP**
  - [ ] What are the differences between TCP and UDP? When would you prefer to use TCP over UDP?
  - [ ] What is a "three-way handshake"?

- [ ] **UDP** 
  - [ ] Why UDP considered to be unreliable when compared to TCP?
  - [ ] Which layer of the OSI model do UDP belong to?

- [ ] **DHCP**
  - [ ] How DHCP client locates the DHCP server?
  - [ ] Does the client has to be on the same local network as the server?
  - [ ] How the exchange between client and the server looks like? what steps are included?
  - [ ] Is it using TCP or UDP?
  - [ ] What ports is it using?

- [ ] **Netowrk Devices**
  - [ ] What is a HUB?
  - [ ] What is a Switch?
    - [ ] Forwarding table or (aka forwarding information base)
  - [ ] What is a Router?
  - [ ] What are differences between the three devices above?

- [ ] **Delivery schemes**
  - [ ] What is unicast?
  - [ ] What is multicast?
  - [ ] What is broadcast?
    - [ ] What is the broadcast address?
    - [ ] What protocols use broadcast?
    - [ ] What is a broadcast domain?

- [ ] **VLAN**
  - [ ] What are the advantages of using VLAN?
  - [ ] What is the range for VLAN IDs?
  - [ ] What is a trunk port?

- [ ] **Topologies**
  - [ ] Bus topology
  - [ ] Ring topology
  - [ ] Star topology
  - [ ] Tree topology

- [ ] **IP**
  - [ ] What layer of OSP model it belongs to?
  - [ ] IPv4
  - [ ] IPv6
    - [ ] Why IPv6 is needed if IPv4 exists?

- [ ] **ICMP**
  - [ ] What is it used for?
  - [ ] How do you use it?

- [ ] **NAT**
  - [ ] What is it and why it's needed?
  - [ ] What is SNAT? how it is different from NAT?
  - [ ] What is DNAT? how it is different from SNAT?

##### Intermediate

- [ ] **Routing**
  - [ ] Distance Vector Routing
    - [ ] "Count-to-infinity" problem
  - [ ] Dijkstra's algorithm

- [ ] **TCP**
  - [ ] Silly window syndrome
    - [ ] Nagle's algorithm
    - [ ] Clark's solution

##### Linux Networking

- [ ] **Commands**
  - [ ] ping
  - [ ] ip addr
  - [ ] ip neigh
  - [ ] ip link
  - [ ] ip route
  - [ ] ip netns
  - [ ] ethtool
  - [ ] netstat
  - [ ] traceroute
  - [ ] tcpdump
  - [ ] mtr

- [ ] **ARP**
  - [ ] How to view the contents of the ARP cache?
  - [ ] How to initiate an ARP request manually?

- [ ] **MTU**
  - [ ] How to see what is the MTU of a given interface?
  - [ ] How do you set MTU?

- [ ] **Namespaces**
  - [ ] How to create & delete namespaces?
  - [ ] How to enter a specific namespace?

- [ ] **Routing*
  - [ ] How to display the routing table?
  - [ ] How to print the IP address of each router that an IP packet traverses along its path to its destination?

- [ ] **ICMP**
  - [ ] How do you use it?

##### Academic Level

- [ ] **Digital Modulation**
  - [ ] What is Amplitude Shift keying?
  - [ ] What is Frequency Shift Keying?
  - [ ] What is Phase Shift keying?

- [ ] **Multiplexing**
  - [ ] What is it used for and how it works?

- [ ] **Wireless networks**
  - [ ] The hidden terminal problem
  - [ ] The exposed terminal problem
  - [ ] **MACA**
    - [ ] What is RTS?
    - [ ] What is CTS?

- [ ] **ALOHA**
  - [ ] Pure
  - [ ] Slotted

- [ ] **Noisy-channel coding theorem**
  - [ ] Shannon capacity/limit

- [ ] **CSMA**
  - [ ] The Binary Exponential Backoff Algorithm

- [ ] **Stop and Wait**

- [ ] **The adaptive tree walk**

- [ ] **Cryptography**
  - [ ] Symmetric
  - [ ] Asymmetric
  - [ ] Digital Signature

- [ ] **Error Detection**
  - [ ] Parity Bit
  - [ ] Checksum
  - [ ] CRC code

- [ ] Data transmission
  - [ ] Piggybacking

- [ ] **Error Correction**
    - [ ] Hamming Code
    - [ ] Reed Solomon code
    - [ ] The NASA binary convolutional code
    - [ ] Low-Density Parity Check code

##### Cloud Networking (OpenStack Neutron)

- [ ] **Components**
  - [ ] API Server
  - [ ] Plugins
  - [ ] Agents
  - [ ] Messaging Queue

- [ ] **Entities**
  - [ ] Network
  - [ ] Router
  - [ ] Port
  - [ ] Subnet
  - [ ] Security Group

- [ ] **ML2 Plugin**
  - [ ] What is it used for?
  - [ ] Explain type drivers
  - [ ] Explain mechanism drivers

- [ ] **dnsmasq***

- [ ] **Floating IP**

- [ ] **Provider Network**
