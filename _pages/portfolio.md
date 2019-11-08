---
title: "Portfolio"
layout: splash
permalink: /portfolio/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: 
  # cta_label: "Download"
  # cta_url: "https://github.com/mmistakes/minimal-mistakes/"
  # caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "My Work."

feature_rowFeditor:
  - image_path: /assets/Feditor/MainCapsuleImage.png
    alt: "placeholder image 1"
    title: "Feditor"
    excerpt: '[Solo] My first ever released Steam Game.'
    url: "/pages/feditor"
    btn_label: "Feditor"
    btn_class: "btn--primary"
feature_rowHonours:
  - image_path: /assets/UniWork/HonoursSplash.jpg
    alt: "placeholder image 1"
    title: "Soft Body Dynamics in real-time"
    excerpt: '[Solo] My honours project researching soft-body dynamics.'
    url: "/pages/honours"
    btn_label: "Honours"
    btn_class: "btn--primary"
feature_rowVox:
  - image_path: /assets/Voxracers/voxSplash.jpg
    alt: "placeholder image 1"
    title: "Voxracers"
    excerpt: '[Team] Currently my biggest project creating a voxel-based racing game.'
    url: "/pages/voxracers"
    btn_label: "Voxracers"
    btn_class: "btn--primary"


    

  
feature_rowAR:
  - image_path: /assets/UniWork/PlumbAR.png
    alt: "placeholder image 1"
    title: "Augmented Reality PSVita"
    excerpt: "[Solo] Augmented Reality game for the PSVita"
    url: "/pages/ar-vita"
    btn_label: "PlumbAR"
    btn_class: "btn--primary"
feature_rowProf:
  - image_path: /assets/UniWork/temp.jpg
    alt: "placeholder image 1"
    title: "Professional Project"
    excerpt: '[Team] A group project for university working with a client.'
    url: "/pages/profproj"
    btn_label: "Prof Proj"
    btn_class: "btn--primary"
feature_rowProc:
  - image_path: /assets/UniWork/CellularSmoother.PNG
    alt: "placeholder image 1"
    title: "Procedural Module"
    excerpt: "[Solo] Directx11 Procedural Generation"
    url: "/pages/proceduralmodule"
    btn_label: "Proc Gen"
    btn_class: "btn--primary"
feature_rowRush:
  - image_path: /assets/UniWork/IceCreamRushSplash.JPG
    alt: "placeholder image 2"
    title: "Ice Cream Rush"
    excerpt: "[Solo] A PSVita ice cream stacking game."
    url: "/pages/icecreamrush"
    btn_label: "Ice Cream Rush"
    btn_class: "btn--primary"
feature_rowNet:
  - image_path: /assets/UniWork/NetGame.jpg
    alt: "placeholder image 1"
    title: "Networking UDP vs TCP"
    excerpt: "[Solo] A Networked game testing UDP and TCP systems"
    url: "/pages/networking"
    btn_label: "Networking"
    btn_class: "btn--primary"

feature_rowShadow:
  - image_path: assets/UniWork/shadowWalkerImage.JPG
    alt: "placeholder image 1"
    title: "Shadow Walker"
    excerpt: "[Solo] 48 hour Unity shadow controlling puzzle game."
    url: "/pages/shadowwalker"
    btn_label: "Shadow Walker"
    btn_class: "btn--primary"
 
feature_rowGBA:
  - image_path: /assets/UniWork/LemmingsGBASized.jpg
    title: "Lemmings"
    excerpt: "[Solo] A lemmings demo on GBA."
    url: "/pages/lemmings"
    btn_label: "Lemmings"
    btn_class: "btn--primary"
    
---

 *Most of the projects have an 'Example Code' button, which is a Github repository with some of the scripts created for them.*
 {: .text-center}
[Example Scripts]({{"https://github.com/LeSmurk/ExampleCode"}}){: .btn .btn--primary .btn--large}
{: .text-center}

**Some of my bigger, recent projects being developed**
{: .text-center}

{% include feature_row id="feature_rowFeditor" type="center" %}

{% include feature_row id="feature_rowHonours" type="center" %}

{% include feature_row id="feature_rowVox" type="center" %}


**Some of my smaller completed projects.**
{: .text-center}

{% include feature_row id="feature_rowAR" type="left" %}

{% include feature_row id="feature_rowProc" type="right" %}

{% include feature_row id="feature_rowProf" type="left" %}

{% include feature_row id="feature_rowRush" type="right" %}

{% include feature_row id="feature_rowNet" type="left" %}

{% include feature_row id="feature_rowShadow" type="right" %}

{% include feature_row id="feature_rowGBA" type="left" %}
