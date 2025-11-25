---
layout: archive
title: "Software"
permalink: /resources/software/
author_profile: false
header: 
    overlay_image: "/banner/goya_algo.jpg"
    overlay_filter: 0.0
    teaser: "/banner/goya_algo.jpg"
heading: "Software"
subheading: "Software resources developed in the lab" 
tag: resource
---

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



