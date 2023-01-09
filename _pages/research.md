---
layout: archive
title: "Research"
permalink: /research
banner: 
  video: ../images/banner/blink.mp4
author_profile: false
---

{% include base_path %}
<div class="grid">
  <div class="wrapper">
    {% for post in site.research %}
      {% include archive-single-proj.html type="grid" %}
    {% endfor %}
  </div>
</div>