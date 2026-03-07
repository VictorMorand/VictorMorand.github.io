---
layout: archive
permalink: /
title: "Victor Morand"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi ! I'm Victor, currently PhD Student working in the [MLIA](https://www.isir.upmc.fr/equipes/mlia/) team of the [Institute of Intelligent Systems and Robotics (ISIR)](https://www.isir.upmc.fr/) located in Sorbonne Université, under the supervision of [Benjamin Piwowarski](https://www.piwowarski.fr) and [Josiane Mothe](https://www.linkedin.com/in/mothe-josiane-0a29186).

# 🎓 Towards Language models that know what they know

My thesis is entitled _Domain adaptation in Pretrained Language Models, Applications to information retrieval and Conversational search_.

Put more simply, we aim at improving information acess using the amazing ability of Pretrained Language Models to _understand_ text, while they're not that amazing at manipulating factual information yet...

--- 
## 📄 Publications

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on my <a href="{{site.author.googlescholar}}"> 🎓 Google Scholar</a>.</div>
{% endif %}

{% include base_path %}

<!-- New style rendering if publication categories are defined -->
{% if site.publication_category %}
  {% for category in site.publication_category  %}
    {% assign title_shown = false %}
    {% for post in site.publications reversed %}
      {% if post.category != category[0] %}
        {% continue %}
      {% endif %}
      {% unless title_shown %}
        {% assign title_shown = true %}
      {% endunless %}
      {% include archive-single.html %}
    {% endfor %}
  {% endfor %}
{% else %}
  {% for post in site.publications reversed %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}