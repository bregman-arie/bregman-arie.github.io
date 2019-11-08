---
title: "Augmented Reality on the PSVita"
permalink: /pages/ar-vita
gallery:
  - url: /assets/UniWork/Diagrams/PlumbARGameLogic.JPG
    image_path: /assets/UniWork/Diagrams/PlumbARGameLogic.JPG
    alt: "placeholder image 0"
  - url: /assets/UniWork/Diagrams/PlumbARUMLDiagram.JPG
    image_path: /assets/UniWork/Diagrams/PlumbARUMLDiagram.JPG
    alt: "placeholder image 1"    
---

*PlumbAR was a game created for the PSVita as part of an Applied Games Technology module during my 4th year at university.*

[Example Scripts]({{"https://github.com/LeSmurk/ExampleCode/tree/master/PlumbAR"}}){: .btn .btn--primary .btn--large}

The principle of the game is to use the markers to move pipes within the augmented reality application so that a path from start to finish is created. The Sony marker detection and a games education framework were used to get the markers' matrices and render the pipe objects relative to each marker, detecting collisions between each pipe. The game also features a level creation tool, allowing the user to move the start and end pipe pieces as well as change the types of pipe (junction, bend, etc) and then save that level for future play.

The project was made in C++, using the Sony Playstation Vita development kits.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cJRQNncv-Kw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Below is a UML diagram and a main game loop overview diagram

{% include gallery %}
