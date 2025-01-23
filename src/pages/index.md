---
title: Home
en:
  sections:
    - type: hero_section
      title: Welcome to the Engineering Students Society
      subtitle: >-
        The Engineering Students' Society is an organization run by students, for students. Our aim is to provide you, a uOttawa engineering student, with services, fun events, and much more! Want to know more? Click below for more information!
      actions:
        - label: Learn More
          url: /about/who-are-we
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
        - src/data/banner-slides/slide-3.yaml
        # - src/data/banner-slides/slide-4.yaml

    - type: page_map_section
      title: Quick Access
      cards:
        - title: Important Documents
          description: >-
            Want to know more about the ESS’ constitution? Curious about our internal operations? Click here to access all the ESS’ most important documents!
          icon: documents_icon
          link: /resources/important-documents
  
        - title: Office Hours
          description: >-
            Want to know when you can purchase some patches or print your documents? Click here to access ESS office hours!
          icon: office-hours_icon
          link: /resources/office-hours
          
        - title: Services
          description: >-
            Need to rent a locker? Want to buy some cool ESS merch? Click here to learn about the services available to you as an ESS member!
          icon: services_icon
          link: /services

fr:
  sections:
    - type: hero_section
      title: Bienvenue à l'association des étudiants en génie
      subtitle: >-
        L’Association des étudiants en génie est une organisation dirigée par des étudiants, pour des étudiants. Notre objectif est de vous offrir, en tant qu'étudiant en génie de l'Université d'Ottawa, des services, des événements amusants et bien plus encore! Vous voulez en savoir plus? Cliquez ci-dessous pour plus d'informations!
      actions:
        - label: Apprendre plus
          url: /about/who-are-we
          style: primary
        - label: Impliquez-vous
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
        - src/data/banner-slides/slide-3.yaml
        # - src/data/banner-slides/slide-4.yaml

    - type: page_map_section
      title: Accès rapide
      cards:
        - title: Document Importants
          description: >-
            Voulez-vous en savoir plus sur la constitution de l’AÉG ? Êtes-vous curieux de connaître nos opérations internes ? Cliquez ici pour accèder toutes les documents importants de l’AÉG!
          icon: documents_icon
          link: /resources/important-documents
  
        - title: Ressources
          description: >-
            Vous voulez savoir quand vous pouvez acheter des patchs ou imprimer vos documents ? Cliquez ici pour accéder aux heures de bureau de l'ESS !
          icon: office-hours_icon
          link: /resources/office-hours
          
        - title: Services
          description: >-
            Vous avez besoin de louer un casier ? Voulez-vous acheter de la marchandise AÉG ? Cliquez ici pour en apprendre plus au sujet des services disponibles à vous comme membre de l’AÉG!
          icon: services_icon
          link: /services      
          
seo:
  title: ESS/AEG
  description: Welcome to the Engineering Student Society website
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Welcome to uOttawa's Engineering Student Society website
      keyName: property
    - name: 'og:description'
      value: The Engineering Students' Society is an organization run by students, for students. Our aim is to provide you, a uOttawa engineering student, with services, fun events, and much more! Want to know more? Click below for more information!
      keyName: property
    - name: 'og:image'
      value: images/ess-logo.jpeg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Welcome to uOttawa's Engineering Student Society website
    - name: 'twitter:description'
      value: The Engineering Students' Society is an organization run by students, for students. Our aim is to provide you, a uOttawa engineering student, with services, fun events, and much more! Want to know more? Click below for more information!
    - name: 'twitter:image'
      value: images/ess-logo.jpeg
      relativeUrl: true

template: advanced
---