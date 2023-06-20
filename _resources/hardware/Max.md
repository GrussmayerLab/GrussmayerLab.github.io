---
title: "Open Blink"
layout: archive
permalink: /resources/max/
collection: resources
tag: hardware
author_profile: false
excerpt: "An Open TIRF Microscope with Homogeneous Illumination For Super-resolution Imaging"
header: 
    teaser: /resources/max_header_image.png
    overlay_image: /resources/max_header_image.png
    overlay_filter: 0.5
    caption: "Image credit: [**Kristin Grussmayer**](https://www.nature.com/articles/ncomms6830)"
toc: false
toc_label: "Table of Contents"
---
## Components List
![Max_optical_path]({{ site.url }}{{ site.baseurl }}/images/resources/Max_optical_path.webp){:class="img-responsive"}

### Laser Machine
![Max_laserbox_3D]({{ site.url }}{{ site.baseurl }}/images/resources/Max_laserbox_3D.webp){:class="img-responsive"}

| ID | Name                     | Supplier                | Comment    | Cost |
|----|--------------------------|-------------------------|------------|------|
| 1  | Diode laser 405nm        | LAB-405-500, Lasertack  | 500 mW, MM |      |
| 2  | Diode laser 488nm        | LAB-488-2000, Lasertack | 2 W, MM    |      |
| 3  | DPSS laser 561nm         | MGL-FN-561, CNI Laser   | 1 W, SM    |      |
| 4  | Diode Laser 638nm *2     | LAB-638-1000, Lasertack | 1 W, MM    |      |



### TIRF module

| ID | Name                     | Supplier                | Comment                                             | Cost |
|----|--------------------------|-------------------------|-----------------------------------------------------|------|
| 5  | Motorized stage          | KMTS25E/M, Thorlabs     | Bundle with base plate, controller and power supply |      |
| 6  | TIRF lens, Ach 150 mm    | #147-643, Edmund Optics |                                                     |      |
| 7  | Lens mount               | CXY1A, Thorlabs         | For XY adjustment                                                    |      |
| 8  | Ellliptical mirror       | BBE1-E02, Thorlabs      |                                                     |      |
| 9  | Right angle mirror mount | KCB1E/M, Thorlabs       |                                                     |      |
| 10 | Cage and pedetral system | Thorlabs                |                                                     |      |

### Microscope Body

| ID | Name              | Supplier                     | Comment                                                                                                                     | Cost |
|----|-------------------|------------------------------|-----------------------------------------------------------------------------------------------------------------------------|------|
| 11 | Microscope body   | home-built, download CAD     | Adapted from [**MiCube**](https://hohlbeinlab.github.io/miCube/index.html), reduced width to accommodate 150 mm TIRF lens)  |      |
| 12 | Objective         | UPLAPO60XOHR, Olympus        | 60X oil immersion, NA=1.5, mounted with adaptor (RMSA3, Thorlabs)                                                           |      |
| 13 | XYZ stage         | CLS5252, SmarAct             | With MCS2 controller; Mounted with a home-made base plate, download CAD                                                     |      |
| 14 | Sample holder     | home-built, download CAD     |                                                                                                                             |      |
| 15 | Polychroic        | zt405/488/561/640rpc, Chroma | Mounted on DFM1/M (Thorlabs)                                                                                                |      |
| 16 | Elliptical Mirror | BBE1-E02, Thorlabs           | Mounted on KCB1E/M (Thorlabs)                                                                                               |      |

### Detection Path

| ID | Name         | Supplier                                | Comment                                          | Cost |
|----|--------------|-----------------------------------------|--------------------------------------------------|------|
| 17 | Tube lens    | TTL180-A, Thorlabs                      | Mounted on cage system                           |      |
| 18 | Slit         | tba                                     |                                                  |      |
| 19 | Dichroic     | ET525/50, ET595/50, Chroma; 685/70, AHF | Glued on compact KMS/M (Thorlabs), with Twinsil  |      |
| 20 | Notch filter | ZET405/488/561/640mv2, Chroma           |                                                  |      |

### Alignment Instructions
TBA