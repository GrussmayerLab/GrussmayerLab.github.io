---
layout: archive
title: "Open projects"
permalink: /projects/
author_profile: false
header: 
    overlay_image: "/banner/htt_dalle_dark.png"
    overlay_filter: 0.5
excerpt: "Interested in quantitative (super-resolution) microscopy, working at the interface of optics and cell biology, and shaping the future of a young research group? We are always looking for talented and motivated people to join our team." 
---

<head>
  <style>
    .grid__wrapper{
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: max-content;/* Minimum height for the grid */
      min-height: 450px;
      padding: 20px;
      justify-self: center;
      grid-gap: 50px;
      }
  </style>
</head>

<p>
We have opportunities to join our research group as a technician, PhD student or postdoctoral researcher and for Bachelor or Master projects. As a young and growing research group, your contribution will have a significant impact. Our group aims at research at the highest international level. Experience in fields such as biophysics, single-molecule techniques, optical imaging, nanosciences, and molecular/cellular biology is welcomed. The postdoctoral positions are for 2-4 years. Ph.D. positions are for 4 years. 
We embrace diversity and equality in a serious way and are committed to building a team with a variety of backgrounds, skills and views. The more inclusive we are, the better our work will be. 
For applications and all other questions please contact Kristin Grußmayer by <a href="mailto:k.s.grussmayer@tudelft.nl">email</a>, including your CV and a brief motivation letter summarising your background, research interests and names/email addresses of 3 or more references. Your cover letter and CV may be internally shared with KG lab members for review.

In case you are interested in joining the lab but there is no suitable project announced here, please have a look at our <a href="https://www.tudelft.nl/en/faculty-of-applied-sciences/about-faculty/departments/bionanoscience/research/research-labs/grussmayer-lab">TU Delft website</a>. 
</p>

<h1>Student projects</h1>
<hr>
<p>
If you are a B.Sc. or M.Sc. student and interested in applying super-resolution or quantitative phase imaging or working on microscopy hardware and software, we are happy to work with you. Please contact us to discuss possible projects in case the following do not suit your interests:
</p>



<div class="grid">
  <div class="wrapper">
    {% for post in site.projects %}
      {% if post.tags contains 'student' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<hr-bold>
<hr>

<h1>Job openings for postdocs and graduate students</h1>

<h2>Graduate students</h2>
<p>
We welcome applications from prospective students keen to take on challenging interdisciplinary projects linked to the research interests of the lab, in collaboration with other groups at Bionanoscience and within Applied Science and beyond. A background in (neuro)cell biology or biophysics would be a plus, but not required, as is experience with microscopy, image processing/analysis and programming.

If no positions are explicitely announced here, please apply via the <a href="https://casimir.researchschool.nl/molecular-biophysics-25.html">Casimir Research School in Molecular Biophysics</a> or contact us directly for inquiries.
</p>

<div class="grid">
  <div class="wrapper">
    {% for post in site.projects %}
      {% if post.tags contains 'phd' %}
        {% include archive-single-proj.html type="grid" %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<h2>Postdocs</h2>
<p>We are always looking for promising postdoc candidates with a background in (bio)physics, (bio)chemistry or biology. You can find an overview of our research areas and interests on the group homepage, but you will have the opportunity to develop your own ideas and be encouraged to work closely with our collaborators within Bionanoscience, the whole of Applied Science and beyond.

Please also take a look at fellowships/stipends for external funding opportunities. There may be more opportunities depending on your country of origin and your background. Please get in touch and we can explore options together. A brief listing is provided here: </p>


<div class="grid">
  <div class="wrapper">
  {% for post in site.projects %}
    {% if post.tags contains 'postdoc' %}
      {% include archive-single-proj.html type="grid" %}
    {% endif %}
  {% endfor %}
  </div>
</div>

<ul>
  <li>EMBO Long Term Fellowships</li>
  <li>FEBS Long Term Fellowships</li>
  <li>EU Marie Curie Fellowships</li>
  <li>Human Frontier Science Program Postdoctoral Fellowships</li>
  <li>Kavli Postdoctoral Fellowships</li>
  <li>NWO VENI Postdoctoral Fellowships</li>
  <li>NWO Rubicon Postdoctoral Fellowships (The Rubicon program focuses on Dutch PhD graduates seeking postdoctoral positions abroad, but has a limited number of fellowships for postdocs performing research in The Netherlands)
</li>
</ul>









