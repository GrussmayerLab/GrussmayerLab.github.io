---
layout: framework
title: "Projects"
permalink: /projects
author_profile: false
banner: "/images/banner/htt_dalle_dark.png"
heading: "Open projects"
subheading: "Interested in quantitative (super-resolution) microscopy, working at the interface of optics and cell biology, and shaping the future of a young research group? We are always looking for talented and motivated people to join our team." 
---

<head>
  <style>
    p{
      text-align: left;
      font-size: large;
    }
  </style>
</head>

<p>
We have opportunities to join our research group as a technician, PhD student or postdoctoral researcher and for Bachelor or Master projects. As a young and growing research group, your contribution will have a significant impact. Our group aims at research at the highest international level. Experience in fields such as biophysics, single-molecule techniques, optical imaging, nanosciences, and molecular/cellular biology is welcomed. The postdoctoral positions are for 2-4 years. Ph.D. positions are for 4 years. 
We embrace diversity and equality in a serious way and are committed to building a team with a variety of backgrounds, skills and views. The more inclusive we are, the better our work will be. 
For applications and all other questions please contact Kristin Grußmayer by <a href="mailto:k.s.grussmayer@tudelft.nl">email</a>, including your CV and a brief motivation letter summarising your background, research interests and names/email addresses of 3 or more references. Your cover letter and CV may be internally shared with KG lab members for review.
</p>

<h1>Student projects</h1>
<hr>
<p>
If you are a B.Sc. or M.Sc. student and interested in applying super-resolution or quantitative phase imaging or working on microscopy hardware and software, we are happy to work with you. Please contact us to discuss possible projects in case the following do not suit your interests:
</p>

<div class="grid__wrapper">
  {% for post in site.projects %}
    {% if post.tags contains 'student' %}
      {% include archive-single-proj_horizontal.html type="grid" %}
    {% endif %}
  {% endfor %}
</div>

<hr-bold>
<hr>

<h1>Job openings for postdocs and graduate students</h1>

<h2>Graduate students</h2>
<p>
We welcome applications from prospective students keen to take on challenging interdisciplinary projects linked to the research interests of the lab, in collaboration with other groups at Bionanoscience and within Applied Science and beyond. A background in (neuro)cell biology or biophysics would be a plus, but not required, as is experience with microscopy, image processing/analysis and programming.

If no positions are explicitely announced here, please apply via the <a href="https://casimir.researchschool.nl/molecular-biophysics-25.html">Casimir Research School in Molecular Biophysics</a> or contact us directly for inquiries.
</p>

<div class="grid__wrapper">
  {% for post in site.projects %}
    {% if post.tags contains 'phd' %}
      {% include archive-single-proj.html type="grid" %}
    {% endif %}
  {% endfor %}
</div>

<h2>Postdocs</h2>
<p>We are always looking for promising postdoc candidates with a background in (bio)physics, (bio)chemistry or biology. You can find an overview of our research areas and interests on the group homepage, but you will have the opportunity to develop your own ideas and be encouraged to work closely with our collaborators within Bionanoscience, the whole of Applied Science and beyond.

Please also take a look at fellowships/stipends for external funding opportunities. There may be more opportunities depending on your country of origin and your background. Please get in touch and we can explore options together. A brief listing is provided here: </p>
