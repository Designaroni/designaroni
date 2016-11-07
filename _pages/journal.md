---
title: Journal
permalink: "/journal/"
layout: default
showCommentMeta: false
bodyClass: journal
leadImage: "/assets/unsplash_vadim_sherbakov_26-9.jpeg"
leadImageAlt: Basic Jekyll markdown & syntax
---

{% if page.hideModule == true %}
{% else %}
  {% include _modules/filterCategories.html %}
{% endif %}
