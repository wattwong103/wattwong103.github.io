---
layout: page
title: Projects
permalink: /projects/
description: Current UTokyo work, railway and mobility projects, earlier CUTI / ARIISE collaborations, collaborators and code.
nav: true
nav_order: 2
display_categories: [tokyo, railways, mobility, other]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<div class="projects">
<a id="collaborators" href=".#collaborators">
  <h2 class="category">collaborators</h2>
</a>

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/w_leo.jpg" title="Wachira Muanyoksakul" class="img-fluid rounded z-depth-1" %}
    <p class="mt-2 mb-1"><a href="https://ariise.eng.chula.ac.th/en/author/wachira-muanyoksakul/"><strong>Wachira Muanyoksakul</strong></a></p>
    <p class="mb-1">Railway flood-risk and buckling-prediction research; co-author on the buckling, ICCBEI 2023, ICRT 2024 and Bangkok accessibility-index papers.</p>
    <p class="text-muted">ARIISE Research Unit, Dept. of Civil Engineering, Chulalongkorn University, Bangkok</p>
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/king.JPG" title="Kittipat Phunjanna" class="img-fluid rounded z-depth-1" %}
    <p class="mt-2 mb-1"><strong>Kittipat Phunjanna</strong></p>
    <p class="mb-1">Data scientist (B.Eng. Electronic Engineering, The Chinese University of Hong Kong, First Class Honours); co-author on the ICRT 2024 and Smart Cities 2025 papers.</p>
    <p class="text-muted">On education leave, Budapest, Hungary</p>
  </div>
</div>

<a id="code" href=".#code">
  <h2 class="category">code</h2>
</a>

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
</div>
