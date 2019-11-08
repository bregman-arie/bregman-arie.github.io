---
title: "Procedural Module"
permalink: /pages/proceduralmodule/
gallery:
  - url: /assets/UniWork/DiamondSquareImproved.PNG
    image_path: /assets/UniWork/DiamondSquareImproved.PNG
    alt: "placeholder image 0"
  - url: /assets/UniWork/DiamondSquareRegularHills2.PNG
    image_path: /assets/UniWork/DiamondSquareRegularHills2.PNG
    alt: "placeholder image 1"    
  - url: /assets/UniWork/DiamondSquareSand.PNG
    image_path: /assets/UniWork/DiamondSquareSand.PNG
    alt: "placeholder image 2"
gallery1:
  - url: /assets/Code Snips/ProcGen/DiaSquCodeLoop.PNG
    image_path: /assets/Code Snips/ProcGen/DiaSquCodeLoop.PNG
    alt: "placeholder image 0"
  - url: /assets/Code Snips/ProcGen/DiaStepCode.PNG
    image_path: /assets/Code Snips/ProcGen/DiaStepCode.PNG
    alt: "placeholder image 1" 
gallerySnipDS1:
  - url: /assets/Code Snips/ProcGen/RandomStep.PNG
    image_path: /assets/Code Snips/ProcGen/RandomStep.PNG
    alt: "placeholder image 0"
  - url: /assets/Code Snips/ProcGen/SquStepCode.PNG
    image_path: /assets/Code Snips/ProcGen/SquStepCode.PNG
    alt: "placeholder image 1"  
gallerySnipCA:
  - url: /assets/Code Snips/ProcGen/CellularCodeRule1.PNG
    image_path: /assets/Code Snips/ProcGen/CellularCodeRule1.PNG
    alt: "placeholder image 0"
  - url: /assets/Code Snips/ProcGen/CellularCodeRule2.PNG
    image_path: /assets/Code Snips/ProcGen/CellularCodeRule2.PNG
    alt: "placeholder image 1"
---
*3rd year procedural generation module within Directx11*

[Example Scripts]({{"https://github.com/LeSmurk/ExampleCode/tree/master/ProcGen"}}){: .btn .btn--primary .btn--large}

I began by creating a simple Perlin noise terrain, by converting Ken Perlin's original algorithm into C++ and then adding environmental texturing through the use of a pixel shader.
The same Perlin noise was also used in conjunction with a compound sine wave to create the water that is seen in all the images.

![PerlinNoise]({{ "/assets/UniWork/PerlinEnviroTex.PNG" | relative_url }})

I then developed a more complex type of terrian, using the Diamond-Square algorithm, which created the outputs seen below.

{% include gallery %}

Here are a couple of snippets of the Diamond Square code

{% include gallery id="gallery1" %}
{% include gallery id="gallerySnipDS1" %}

Finally I used cellular automata to produce the final terrain type, which was my favourite method to implement.

![Cellular Automata]({{ "/assets/UniWork/CellularSmoother.PNG" | relative_url }})

Here are a couple of snippets of the Cellular Automata code

{% include gallery id="gallerySnipCA" %}
