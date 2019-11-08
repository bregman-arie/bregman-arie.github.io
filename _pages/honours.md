---
title: "Soft Body Dynamics - Honours"
permalink: /pages/honours
---

*My 4th year Honours project researching simulating soft-body dynamics in real-time.*

[Example Scripts]({{"https://github.com/LeSmurk/ExampleCode/tree/master/SoftBodiesHons"}}){: .btn .btn--primary .btn--large}

Using Spring/Mass principles, I am attemping to simulate soft-body physics within a games context and therefore placing a focus on the performance of the simulation within real-time. While I am using the Unity3D engine, I have only used the collision and transform components that come with the engine to create the current Spring/Mass system as I am researching how Entity Component Systems can be used to improve the performance of this soft body system.

The video below demonstrates the feasibility of the Sping/Mass system, using a nearest neighbours approach to determine which masses are connected.

<iframe width="560" height="315" src="https://www.youtube.com/embed/e-H2lSZaFJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here is a snippet of the base spring system

![Spring Img]({{ "/assets/Code Snips/HonsSpringsSnip.JPG" | relative_url }})
