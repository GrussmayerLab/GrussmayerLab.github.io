---
layout: archive
title: "Hardware"
permalink: /resources/hardware/
author_profile: false
header: 
    overlay_image: "/resources/max/laserbox_3d.png"
    overlay_filter: 0.5
    teaser: /resources/max/laserbox_3d.png
heading: "Hardware"
subheading: "Hardware resources developed in the lab" 
tag: resource
---


Welcome to our website dedicated to open hardware solutions in light microscopy! Here, you will find information about the latest developments and advancements in open-source hardware for microscope systems. We aim to provide a comprehensive resource for those interested in building their own microscope systems or modifying existing ones using open-source hardware and software. Whether you are a researcher, hobbyist, or student, our goal is to empower you with the knowledge and tools to take control of your microscopy needs. Join us in advancing the field of microscopy through open-source innovation. As a great primer for interesting open hardware projects, consider visiting the [Delft Open Hardware community](https://github.com/delftopenhardware/awesome-open-hardware).


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

