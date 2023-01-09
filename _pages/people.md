---
layout: framework
title: "People"
heading: "People"
permalink: /people
banner: "images/group.jpg"
author_profile: false # true to include follow button thats rather useless it seems without further configuration
---
<head>
  <style>
    .grid{
      display: grid;
      grid-template-columns: 1ft 1ft 1ft 1ft;
    }
      .box1 {
        grid-column-start: 1;
          grid-column-end: 4;
        }
  </style>
</head>


<h1>Principal Investigator</h1>
<hr><br>
  <div class="grid">
  {% for post in site.team %}
    {% if post.tags contains 'PI' %}
      {% include people_horizontal_double.html %}
    {% endif %}
  {% endfor %}
  </div>



<hr-bold>
<h1>Post-doctoral researchers</h1>
<hr><br>
  <div class="grid">
  {% for post in site.team %}
    {% if post.tags contains 'post-doc' %}
      {% include people_horizontal_double.html  type="grid" %}
    {% endif %}
  {% endfor %}
  </div>

<hr-bold>
<h1>PhD students</h1>
<hr><br>
  {% for post in site.team %}
    {% if post.tags contains 'phd' %}
      {% include people_horizontal_double.html  type="grid" %}
    {% endif %}
  {% endfor %}

<hr-bold>
<h1>Master students</h1>
<hr><br>

  {% for post in site.team %}
    {% if post.tags contains 'msc' %}
      {% include people_horizontal_double.html  type="grid" %}
    {% endif %}
  {% endfor %}

<hr-bold>
<h1>Internship students</h1>
<hr><br>

  {% for post in site.team %}
    {% if post.tags contains 'internship' %}
      {% include people_horizontal_double.html  type="grid" %}
    {% endif %}
  {% endfor %}


<hr-bold>
<h1>Alumni</h1>
<hr><br>
  {% for post in site.team %}
    {% if post.tags contains 'alumni' %}
      {% include people_horizontal_double.html  type="grid" %}
    {% endif %}
  {% endfor %}




