---
layout: archive
title: "Resources"
permalink: /resources/
author_profile: false
header: 
    overlay_image: "/banner/htt_dalle_dark.png"
    overlay_filter: 0.5
heading: "Resources"
subheading: "Hardware and software resources developed in the lab" 
---


Welcome to our website dedicated to open hardware and software solutions in light microscopy! Here, you will find information about the latest developments and advancements in open-source hardware for microscope systems. We aim to provide a comprehensive resource for those interested in building their own microscope systems or modifying existing ones using open-source hardware and software. Whether you are a researcher, hobbyist, or student, our goal is to empower you with the knowledge and tools to take control of your microscopy needs. Join us in advancing the field of microscopy through open-source innovation. As a great primer for interesting open hardware projects, consider visiting the [Delft Open Hardware community](https://github.com/delftopenhardware/awesome-open-hardware).


# Hardware 
You can find our open hardware resources below:

<div class="grid">
  <div class="wrapper">
    {% for post in site.resources %}
      {% if post.tag contains 'hardware' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>


# Software

Selected software created or adapted in the lab can be found below or at our [github](https://github.com/GrussmayerLab):

<div class="grid">
  <div class="wrapper">
    {% for post in site.resources %}
      {% if post.tag contains 'software' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>


# Joint projects driven by collaborators 

<div class="grid">
  <div class="wrapper">
    {% for post in site.resources %}
      {% if post.tag contains 'collaboration' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>




