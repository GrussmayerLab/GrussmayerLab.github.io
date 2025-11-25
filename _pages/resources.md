---
layout: archive
title: "Resources"
permalink: /resources/
author_profile: false
header: 
    overlay_image: "/banner/htt_dalle_dark.png"
    overlay_filter: 0.5
heading: "Resources"
subheading: "Main hub for resources" 
---

Explore the open resources our lab provides below. 

<div class="grid">
  <div class="wrapper">
    {% for post in site.pages %}
      {% if post.tag contains 'resource' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>