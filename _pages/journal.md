---
title: Journal
permalink: "/journal/"
layout: default
showCommentMeta: false
bodyClass: journal
leadImage: "/assets/field_notes_26_9.jpg"
leadImageAlt: Basic Jekyll markdown & syntax
---

{% if page.hideModule == true %}
{% else %}
  {% include _modules/filterCategories.html %}
{% endif %}
