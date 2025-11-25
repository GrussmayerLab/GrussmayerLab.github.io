---
layout: archive
title: "Data"
permalink: /resources/data/
author_profile: false
header: 
    video: "/banner/mp_stack_18fps.mp4"
heading: "Data"
subheading: "Data created in the lab" 
tag: resource
---

We are providing access to selected and representative datasets created in the lab on this site. 
Due to the limited repository size of github pages, we are most likely not able to host the data itself on here, so we will provide links to the respective repositories on 4TU and zenodo where applicable. 
In case you are looking for data that might fall into the realm of our capabilities, please do reach out and we will try to make it available to you. 

<div class="grid">
  <div class="wrapper">
    {% for post in site.resources %}
      {% if post.tag contains 'data' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>





