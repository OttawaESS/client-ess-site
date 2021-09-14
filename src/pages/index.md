---
title: Home
sections:
  - type: hero_section
    en:
      title: Welcome to the Engineering Students Society 
      subtitle: >- 
        The Engineering Students' Society is an organization run by students, for students. Our aim is to provide you a uOttawa engineering student, with services, fun events, and much more! Want to know more? Click below for more information!
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

    fr:
      title: Bienvenue à l'association des étudiants en génie
      subtitle: >- 
        L'association des étudiants en génie est une organisation dirigée par des étudiants, pour des étudiants. Notre objectif est de vous fournir, en tant qu'étudiant en génie de l'Université d'Ottawa, des services, des événements amusants, et bien plus encore ! Vous voulez en savoir plus ? Cliquez ci-dessous pour plus d'informations !
      actions:
        - label: En apprendre plus
          url: /about/who-we-are
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
      - src/data/banner-slides/slide-1.yaml
      - src/data/banner-slides/slide-2.yaml
  
  - type: page_map_section
    en:
      title: Quick Access
      cards:
        - title: Important Documents
          description: >-
            Want to know more about the ESS’ constitution? Curious about our internal operations? Click here to access all the ESS’ most important documents!
          icon: documents_icon
          link: /resources/important-documents
  
        - title: Resources
          description: >-
            As a member, you have access to all of ESS’ resources. From accessibility to scholarships, we want to do what we can to help you out. Click here for more information.
          icon: resources_icon
          link: /resources
          
        - title: Services
          description: >-
            Need to rent a locker? Want to buy some cool ESS merch? Click here to learn about the services available to you as an ESS member!
          icon: services_icon
          link: /services
          
    fr:
      title: Accès rapide
      cards:
        - title: Document Importants
          description: >-
            Vous voulez en savoir plus sur la constitution de l'AEG ? Vous êtes curieux de connaître notre fonctionnement interne ? Cliquez ici pour accéder à tous les documents les plus importants de l'AEG !
          icon: documents_icon
          link: /resources/important-documents
  
        - title: Ressources
          description: >-
            En tant que membre, vous avez accès à toutes les ressources de l'AEG. De l'accessibilité aux bourses d'études, nous voulons faire tout ce qui est en notre pouvoir pour vous aider. Cliquez ici pour plus d'informations.
          icon: resources_icon
          link: /resources
          
        - title: Services
          description: >-
            Vous avez besoin de louer un casier ? Vous voulez acheter des produits de l'AEG ? Cliquez ici pour en savoir plus sur les services qui vous sont offerts en tant que membre de l'AEG !
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
