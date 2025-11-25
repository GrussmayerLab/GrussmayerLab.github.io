---
layout: archive
title: "Protocols"
permalink: /resources/protocols/
author_profile: false
header: 
    overlay_image: "/banner/cellviews_max_ernst.jpg"
    overlay_filter: 0.5
    teaser: /banner/cellviews_max_ernst.jpg
excerpt: "Embrace all the mistakes we went through, so you don't have to." 
tag: resource
---

## Wetlab protocols 
<div class="grid">
  <div class="wrapper">
    {% for post in site.protocols %}
      {% if post.tag contains 'wetlab' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>


## Optics protocols 
<div class="grid">
  <div class="wrapper">
    {% for post in site.protocols %}
      {% if post.tag contains 'optics' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>


