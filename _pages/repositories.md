---
layout: page
permalink: /repositories/
title: Repositories
description: Selected GitHub repositories for open transport data, routing, and the academic one-pager.
nav: false
---

## GitHub Repositories

{% if site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
