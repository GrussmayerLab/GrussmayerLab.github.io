---
layout: archive
title: "Research"
permalink: /research/
author_profile: false
header: 
    overlay_image: "/banner/htt_dalle_dark.png"
    overlay_filter: 0.5
heading: "Research"
subheading: "Lab's research themes" 
---

Our research ranges from the biophysics of protein aggregation over microscope design to probe development and beyond. Please have a look below at the spectrum of our current projects.

<hr><br>
<div class='container'>
  {% for post in site.research %}
      {% include archive-single-proj.html type='grid'%}
  {% endfor %}
</div>


<style>
.containter {
    display: flex;
}
</style>
