---
title: Home
sections:
  - type: hero_section
    title: 
      - en: Welcome to the Engineering Students Society
        fr: Bienvenue à l'Association des Étudiants en Génie
    subtitle:
      - en: The Engineering Students' Society is an organization run by students, for students. Our aim is to provide you a uOttawa engineering student, with services, fun events, and much more! Want to know more? Click below for more information!
        fr: La Société des étudiants en génie est une organisation dirigée par des étudiants, pour des étudiants. Notre objectif est de vous fournir, en tant qu'étudiant en génie de l'Université d'Ottawa, des services, des événements amusants, et bien plus encore ! Vous voulez en savoir plus ? Cliquez ci-dessous pour plus d'informations !
    actions:
      - label: Learn More
        url: /about/who-we-are
        style: primary
      - label: Get Involved
        url: /about/join-our-team
        style: secondary
    align: left
    image: images/site-drawing.svg
    image_alt: SITE Building Drawing
    image_position: right
    has_background: true
    background:
      background_color: white
  - type: banner_section
    slides:
      - src/data/banner-slides/slide-1.yaml
      - src/data/banner-slides/slide-2.yaml
      - src/data/banner-slides/slide-1.yaml
      - src/data/banner-slides/slide-2.yaml
  
  - type: page_map_section
    title: Page Map

seo:
  title: ESS/AEG
  description: Welcome to the Engineering Student Society website
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: ESS/AEG
      keyName: property
    - name: 'og:description'
      value: Welcome to the Engineering Student Society website
      keyName: property
    - name: 'og:image'
      value: images/ess-logo.jpeg
      keyName: property
      relativeUrl: true
    # - name: 'twitter:card'
    #   value: summary_large_image
    # - name: 'twitter:title'
    #   value: Stackbit Starter Theme
    # - name: 'twitter:description'
    #   value: The preview of the Starter theme
    # - name: 'twitter:image'
    #   value: images/starter-preview.png
    #   relativeUrl: true
template: advanced
---
