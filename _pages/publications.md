---
layout: framework
title: "publications"
heading: "Publications"
subheading: ""
banner: "/images/banner/htt_dalle.png"
permalink: /publications
---
{% include base_path %}

You can find the complete publication list on <a href="https://scholar.google.ca/citations?user=V6ZqAogAAAAJ&hl=en">
<span style="color:gray">our Google Scholar profile</span></a>. A complete list of bio<font color="red">R</font>xiv preprints on <a href="https://rxivist.org/authors/695234">
<span style="color:gray">our Rxivist profile</span></a>.

<ul style="margin:0;padding:0">
{% for post in site.publications reversed %}

  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2 id="y{{post.date | date: "%Y"}}"><span style="color:gray">{{ currentdate }}</span></h2>
    <ul style="margin:0;padding:0">
    {% assign date = currentdate %}
  {% endif %}
  {% if post.authors contains 'Kristin Grussmayer' %}
    {% include archive-single-pub.html %}
  {% endif %}
  {% if forloop.last %}</ul>{% endif %}

{% endfor %}