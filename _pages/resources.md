---
layout: framework
title: "Resources"
permalink: /resources
banner: ../images/banner/vis_dalle.png
author_profile: false
---

{% include base_path %}

We are maintaing our <a href="https://https://github.com/GrussmayerLab" title="Grussmayer Lab github">Github page</a> actively, so check this out for the most up-to-date versions. The projects described here give more background info and developments of the tech by the developers themselves. 


<h1>Hardware & software developed in the lab</h1>
<div class="grid">
  <div class="wrapper">
    {% for post in site.resources %}
      {% if post.type != "from_others" and post.type != "other" %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<h1>By others with our contribution</h1>
<div class="grid">
  <div class="wrapper">
    {% for post in site.resources %}
      {% if post.type == "from_others" %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<h1>Other tools</h1>
<div class="grid">
  <div class="wrapper">
    {% for post in site.resources %}
      {% if post.type == "other" %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>
