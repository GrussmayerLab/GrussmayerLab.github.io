---
layout: archive
title: "People"
heading: "People"
permalink: /people/
header: 
    overlay_image: /people/kg_group_01.jpg
    overlay_filter: 0.5
excerpt: "KG lab members"
author_profile: false # true to include follow button thats rather useless it seems without further configuration
search: true
---


# Meet the team

![Grussmayer_lab_2022]({{ site.url }}{{ site.baseurl }}/images/banner/kg_group_01_1200x800.png){:class="img-responsive"}
*Grussmayer Lab, Oct 2022*

<hr><br>

<h1>Principal Investigator</h1>
<hr><br>
  {% for post in site.people %}
    {% if post.tags contains 'PI' %}
      {% include archive-idcard-proj.html %}
    {% endif %}
  {% endfor %}

<hr-bold>
<h1>Staff</h1>
<hr><br>
  {% for post in site.people %}
    {% if post.tags contains 'staff' %}
      {% include archive-idcard-proj.html %}
    {% endif %}
  {% endfor %}

<hr-bold>
<h1>Post-doctoral researchers</h1>
<hr><br>
  {% for post in site.people %}
    {% if post.tags contains 'post-doc' %}
      {% include archive-idcard-proj.html %}
    {% endif %}
  {% endfor %}

<hr-bold>
<h1>PhD students</h1>
<hr><br>
  {% for post in site.people %}
    {% if post.tags contains 'phd' %}
      {% include archive-idcard-proj.html%}
    {% endif %}
  {% endfor %}

<hr-bold>
<h1>Undergraduate students</h1>
<hr><br>
  {% for post in site.people %}
    {% if post.tags contains 'student' %}
      {% include archive-idcard-proj.html %}
    {% endif %}
  {% endfor %}


<hr-bold>
<h1>Alumni</h1>
<hr><br>
  {% assign sortedPages = site.people | sort: 'date' | reverse %}
  {% for post in sortedPages %}
    {% if post.tags contains 'alumni' %}
      {% include archive-idcard-proj-alumni.html %}
    {% endif %}
  {% endfor %}


<hr-bold>
<h1>Archive</h1>
<hr><br>



