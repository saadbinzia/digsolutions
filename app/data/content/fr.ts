import type { Service } from '~/data/services'
import type { CaseStudy } from '~/data/portfolio'
import type { BlogPost } from '~/data/blog'

export const services: Service[] = [
  {
    slug: 'web-application-development',
    icon: 'lucide:layout-panel-left',
    title: "Développement d'applications web",
    tagline: "Plateformes web full-stack et outils d'automatisation",
    summary: "Des applications web sur mesure et des plateformes internes, conçues de bout en bout avec l'automatisation et les intégrations qui permettent à un système de véritablement remplacer le travail manuel.",
    description: "Nous construisons des applications et plateformes web en production, pas seulement des sites vitrines : outils internes, pipelines de contenu et de médias, et systèmes qui se connectent aux autres logiciels qu'une entreprise utilise déjà. Parmi nos réalisations récentes : un pipeline automatisé qui transforme les enregistrements de webinaires en direct en courts extraits et citations, puis les diffuse sur les réseaux sociaux et par e-mail le jour même, remplaçant un processus manuel qui prenait auparavant une semaine ou plus.",
    capabilities: [
      'Plateformes web sur mesure et outils internes',
      'Pipelines de médias et de contenu (ingestion, traitement, publication, diffusion)',
      "Conception d'API et intégration entre systèmes internes et tiers",
      'Automatisation des flux de travail opérationnels manuels et répétitifs',
      "Tableaux de bord et interfaces d'administration pour les équipes non techniques",
      'Pipelines CI/CD avec environnements de préproduction et démonstrations'
    ],
    techStack: ['Next.js', 'Nuxt', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    idealFor: ['Équipes qui remplacent des processus manuels basés sur des tableurs', 'Pipelines de diffusion de contenu et de médias', "Tableaux de bord internes et outils d'administration", 'Systèmes devant communiquer avec plusieurs outils existants'],
    metaTitle: "Services de développement d'applications web",
    metaDescription: "Développement d'applications web sur mesure : plateformes, outils internes et pipelines de contenu automatisés, construits avec Next.js, Nuxt, React et Node.js.",
    process: [
      { title: 'Cadrer le flux de travail, pas seulement la fonctionnalité', description: "Nous commençons par cartographier le processus manuel réel, les outils et les transmissions impliqués, pas seulement la fonctionnalité demandée, afin que le système que nous construisons élimine le véritable goulot d'étranglement, et non un simple symptôme." },
      { title: "Concevoir d'abord le modèle de données et les intégrations", description: "Avant de travailler sur l'interface, nous déterminons comment les données circulent entre vos outils existants et le nouveau système. Ajouter des intégrations après coup est ce qui fait le plus dérailler le calendrier d'un projet." },
      { title: 'Construire dans un environnement de préproduction visible', description: "Vous avez accès à un environnement de préproduction dès la première semaine, avec des démonstrations régulières, pas une boîte noire qui apparaît à la fin." },
      { title: 'Lancer, puis continuer à itérer', description: "La plupart des collaborations se poursuivent après le lancement, car le processus que le logiciel remplace continue d'évoluer et le système doit évoluer avec lui." }
    ],
    faqs: [
      { question: "Combien de temps dure généralement un projet d'application web ?", answer: "Cela dépend du périmètre, mais la plupart des premières versions sont livrées en 6 à 12 semaines, avec une itération continue ensuite. Nous calculons le calendrier en fonction du flux de travail spécifique remplacé, pas d'une estimation générique." },
      { question: 'Travaillez-vous avec une base de code existante, ou uniquement sur des projets partant de zéro ?', answer: "Les deux. Certaines collaborations démarrent de zéro ; d'autres consistent à étendre ou intégrer un système que vous utilisez déjà." },
      { question: 'Que se passe-t-il si nos besoins changent en cours de projet ?', answer: "C'est fréquent. Nous travaillons par jalons échelonnés précisément pour que les changements de périmètre soient absorbés à chaque étape, au lieu de faire dérailler l'ensemble de la construction." },
      { question: "Qui est propriétaire du code et de l'infrastructure après le lancement ?", answer: 'Vous. Vous avez accès aux mêmes dépôts, environnements et comptes que nous utilisons pour le construire, pas à un système que nous seuls pourrions maintenir.' }
    ]
  },
  {
    slug: 'ai-llm-integration',
    icon: 'lucide:sparkles',
    title: 'IA et intégration de LLM sur mesure',
    tagline: "Des fonctionnalités d'IA qui accomplissent un vrai travail au sein d'un système existant",
    summary: "Une IA intégrée à un pipeline en fonctionnement, pas un chatbot autonome : elle identifie l'extrait important dans une heure de vidéo, ou la mise à jour produit qui compte vraiment.",
    description: "Nous intégrons l'IA là où elle supprime un véritable effort manuel au sein d'un système que nous avons déjà construit, plutôt que sous la forme d'un widget de chat greffé après coup. Dans notre pipeline de diffusion de webinaires, l'IA identifie les extraits et citations à publier à partir d'un enregistrement complet. Dans nos projets d'ERP e-commerce, l'IA repère quelles mises à jour et fiches produit nécessitent réellement une attention parmi des dizaines de références. L'objectif est toujours une tâche plus restreinte et bien définie, que le modèle peut accomplir de manière fiable, intégrée à un flux de travail dont une équipe dépend déjà.",
    capabilities: [
      'Extraction de contenu assistée par IA (identification de clips et de citations dans des vidéos longues)',
      'Recommandations produits et catalogues assistées par IA',
      'Intégration de LLM sur mesure dans des produits et flux de travail existants',
      'Recherche documentaire et synthèse sur des données propriétaires',
      "Évaluation des modèles et vérifications de fiabilité avant la mise en production d'une fonctionnalité",
      'Conception de fonctionnalités d\'IA tenant compte des coûts et de la latence'
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Python', 'Node.js', 'TypeScript', 'Vector search'],
    idealFor: ['Équipes médias et contenu disposant de trop de rushs à traiter manuellement', 'Équipes e-commerce gérant de grands catalogues en évolution rapide', 'Outils internes nécessitant une fonctionnalité d\'IA précise et fiable, plutôt qu\'un chatbot généraliste'],
    metaTitle: "Services d'intégration d'IA et de LLM sur mesure",
    metaDescription: "Des fonctionnalités d'IA intégrées à de véritables flux de travail : extraction de contenu, recommandations produits et intégration de LLM sur mesure dans des systèmes existants.",
    process: [
      { title: 'Trouver la tâche précise, pas la vision large', description: "Nous recherchons une tâche spécifique et bien définie au sein d'un flux de travail existant, pas une fonctionnalité d'IA généraliste greffée sur le côté d'un produit." },
      { title: 'Prototyper tôt avec des données réelles', description: "Nous testons le modèle dès la première semaine sur des données réelles proches de la production, car les données de démonstration masquent précisément les modes de défaillance qui comptent en pratique." },
      { title: "Constituer un jeu d'évaluation avant la mise en production", description: "Nous créons un ensemble annoté d'exemples réels qui doit continuer à réussir à mesure que nous modifions les prompts ou la récupération, afin de détecter les régressions avant qu'un client ne les découvre." },
      { title: "Concevoir en tenant compte du coût, de la latence et de l'échec maîtrisé", description: "Quel modèle traite quelle requête, quand basculer vers un humain, et ce qui se passe lorsque le modèle n'est pas sûr sont des décisions produit explicites, pas des réflexions après coup." }
    ],
    faqs: [
      { question: 'Construisez-vous des chatbots sur mesure ?', answer: "Pas par défaut. Nous avons constaté que des fonctionnalités d'IA précises et intégrées (comme l'extraction de clips ou le signalement de catalogue) apportent une valeur plus fiable qu'un widget de chat généraliste. Si un chatbot est réellement le bon outil pour votre flux de travail, nous vous le dirons honnêtement." },
      { question: "Quels fournisseurs d'IA utilisez-vous ?", answer: "Principalement OpenAI et Anthropic, choisis selon la tâche en fonction de la précision, du coût et des exigences de latence, pas un fournisseur unique par défaut." },
      { question: "Comment gérez-vous les erreurs ou hallucinations de l'IA ?", answer: 'Des jeux d\'évaluation, des seuils de confiance et une intervention humaine pour tout ce qui est visible des clients. Un système qui dit « je ne suis pas sûr » vaut mieux qu\'un système qui répond avec assurance et se trompe.' },
      { question: "Pouvez-vous ajouter de l'IA à un système que vous n'avez pas construit ?", answer: "Oui, tant que nous pouvons accéder aux données et au flux de travail dans lequel elle doit s'intégrer." }
    ]
  },
  {
    slug: 'crm-erp-systems',
    icon: 'lucide:building-2',
    title: 'Systèmes CRM et ERP',
    tagline: 'Systèmes de commerce et d\'opérations multicanaux',
    summary: "Des systèmes ERP et d'opérations qui réunissent des plateformes distinctes (Amazon, Shopify, WooCommerce et similaires) sous une source de vérité unique pour les produits, les stocks et les ventes.",
    description: "Les entreprises qui vendent sur plusieurs boutiques en ligne finissent souvent par gérer produits, stocks et commandes séparément sur chaque plateforme. Nous construisons des systèmes ERP et d'opérations sur mesure qui centralisent ce travail : gérez un produit une seule fois, et laissez-le se synchroniser automatiquement avec chaque boutique connectée, avec un suivi des stocks et des ventes en un seul endroit plutôt qu'une réconciliation manuelle entre plateformes.",
    capabilities: [
      'Intégration multi-boutiques (Amazon, Shopify, WooCommerce et similaires)',
      'Gestion centralisée des produits, des inventaires et des stocks',
      'Synchronisation automatique des ventes et des stocks entre plateformes connectées',
      'Outils de CRM et de pipeline sur mesure pour les équipes commerciales et opérationnelles',
      'Automatisation des flux de travail et chaînes de validation',
      'Rapports et tableaux de bord consolidés sur l\'ensemble des canaux de vente'
    ],
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST / platform APIs', 'React'],
    idealFor: ['Entreprises vendant sur plusieurs plateformes e-commerce', 'Équipes opérationnelles réconciliant manuellement des données entre systèmes', 'Équipes commerciales et opérationnelles qui ont dépassé les limites des tableurs'],
    metaTitle: 'Services de développement CRM et ERP sur mesure',
    metaDescription: 'Des systèmes ERP sur mesure qui unifient le e-commerce multi-boutiques (Amazon, Shopify, WooCommerce) en une source de vérité unique pour les produits et les stocks.',
    process: [
      { title: "Cartographier chaque boutique et système que vous réconciliez aujourd'hui manuellement", description: "Avant d'écrire le moindre code, nous documentons précisément quelles plateformes, tableurs et étapes manuelles maintiennent aujourd'hui vos données produits et stocks synchronisées." },
      { title: 'Concevoir le système comme source de vérité', description: "Votre nouvel ERP détient les données produits, d'inventaire et de prix ; chaque boutique devient un canal synchronisé plutôt qu'un système distinct à mettre à jour manuellement." },
      { title: 'Migrer une boutique à la fois', description: "Nous connectons et validons une plateforme avant de passer à la suivante, afin qu'une erreur dans une intégration ne puisse pas corrompre les données de toutes les autres." },
      { title: 'Ajouter reporting et automatisation en dernier', description: "Les tableaux de bord, les flux de validation et les signaux assistés par IA ne sont ajoutés qu'une fois la synchronisation de base solide, pas avant." }
    ],
    faqs: [
      { question: 'Avec quelles plateformes vous intégrez-vous ?', answer: "Le plus souvent Amazon, Shopify et WooCommerce ; nous avons aussi construit des intégrations sur mesure avec d'autres API de boutiques et de marketplaces sur demande." },
      { question: 'Cela remplacera-t-il entièrement notre CRM/ERP actuel ?', answer: 'Cela dépend de votre situation. Certaines collaborations remplacent entièrement un patchwork de tableurs et de réconciliation manuelle ; d\'autres étendent un système existant avec les intégrations qui lui manquent.' },
      { question: 'Que deviennent nos données pendant la migration ?', answer: 'Nous migrons et validons les données boutique par boutique, vos systèmes actuels continuant à fonctionner en parallèle jusqu\'à ce que chaque connexion soit vérifiée.' },
      { question: 'Le système peut-il évoluer avec davantage de canaux de vente plus tard ?', answer: 'Oui. Ajouter une nouvelle boutique devient alors une intégration supplémentaire sur une source de vérité existante, pas une refonte.' }
    ]
  },
  {
    slug: 'dotnet-desktop-development',
    icon: 'lucide:monitor',
    title: 'Applications .NET et de bureau',
    tagline: 'Plateformes web .NET, interfaces Angular et logiciels de bureau Windows natifs',
    summary: "Back-ends .NET, interfaces Angular et applications de bureau natives pour les entreprises ayant besoin de logiciels s'exécutant directement sur des machines Windows, et pas seulement dans un navigateur.",
    description: "Certains flux de travail ont encore leur place sur le bureau : systèmes de point de vente, outils d'opérations internes, et logiciels nécessitant un accès direct au matériel ou aux fichiers locaux sans qu'un navigateur ne s'interpose. Nous construisons sur la stack .NET de bout en bout : back-ends et services C#, interfaces Angular pour le volet web d'un système .NET, et applications de bureau Windows natives, pour les équipes dont les outils doivent exister en dehors du navigateur.",
    capabilities: [
      'Applications de bureau Windows natives (WPF / WinForms)',
      'Services back-end et API en .NET / C#',
      'Interfaces Angular pour les applications web basées sur .NET',
      'Synchronisation bureau-cloud (application locale communiquant avec un back-end hébergé)',
      'Maintenance et modernisation d\'applications .NET existantes',
      'Packaging d\'installateurs et distribution de mises à jour pour logiciels de bureau'
    ],
    techStack: ['.NET / C#', 'Angular', 'WPF', 'WinForms', 'SQL Server'],
    idealFor: ['Entreprises ayant besoin de logiciels fonctionnant sur des machines Windows locales', 'Outils de point de vente et d\'opérations internes', 'Équipes disposant d\'une base de code .NET existante à faire évoluer ou moderniser'],
    metaTitle: 'Développement d\'applications .NET et de bureau Windows',
    metaDescription: 'Back-ends .NET, interfaces Angular et applications de bureau Windows natives (WPF/WinForms) pour des logiciels devant fonctionner en dehors du navigateur.',
    process: [
      { title: 'Comprendre ce qui doit réellement fonctionner en dehors du navigateur', description: "L'accès au matériel local, l'utilisation hors ligne ou une dépendance héritée en sont des raisons courantes ; nous confirmons le besoin d'une application de bureau avant de le considérer par défaut." },
      { title: 'Évaluer la base de code .NET existante, le cas échéant', description: "Pour les projets de modernisation, nous identifions d'abord quelles parties d'un système existant sont structurantes avant d'y toucher, afin que des règles métier codées il y a des années ne disparaissent pas silencieusement." },
      { title: 'Construire le back-end et l\'interface en parallèle, intégrés dès le début', description: "Les services C# et l'interface Angular ou de bureau sont connectés dès le début de la construction, pas assemblés à la fin." },
      { title: 'Packager et livrer avec un véritable parcours de mise à jour', description: "Le packaging de l'installateur et la distribution des mises à jour font partie du livrable, pas quelque chose que quelqu'un d'autre devra résoudre plus tard." }
    ],
    faqs: [
      { question: 'Construisez-vous uniquement de nouvelles applications de bureau, ou en maintenez-vous aussi des existantes ?', answer: 'Les deux. Une grande partie de notre travail .NET consiste à moderniser ou étendre un système existant plutôt qu\'à construire de zéro.' },
      { question: "Pourquoi aurions-nous besoin d'une application de bureau plutôt que d'une application web ?", answer: "Généralement pour un accès direct au matériel ou aux fichiers, des exigences hors ligne, ou un outil de point de vente/d'opérations existant déjà déployé sur des machines Windows. Nous vous dirons honnêtement si une application web serait plus adaptée." },
      { question: 'Utilisez-vous WPF ou WinForms ?', answer: "Cela dépend du projet. Nous travaillons avec les deux, et recommandons en fonction de ce qui correspond à votre base de code et à vos exigences existantes, pas d'une préférence par défaut." },
      { question: "L'application de bureau peut-elle communiquer avec des services cloud ?", answer: 'Oui, la synchronisation bureau-cloud (une application locale communiquant avec un back-end hébergé) est une capacité que nous mettons en œuvre régulièrement.' }
    ]
  }
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-webinar-clip-distribution',
    title: 'Transformer des webinaires en direct en contenu diffusé le jour même sur les réseaux sociaux et par e-mail',
    client: 'Une organisation de santé en Europe',
    industry: 'Santé (Europe)',
    serviceSlug: 'ai-llm-integration',
    timeline: 'Collaboration en cours',
    icon: 'lucide:video',
    summary: 'Mise en place d\'un pipeline automatisé qui extrait les meilleurs extraits et citations des webinaires en direct et les diffuse sur les réseaux sociaux et par e-mail le jour même, au lieu d\'une semaine ou deux plus tard.',
    challenge: 'L\'organisation organisait régulièrement des webinaires en direct riches en moments et citations marquants de différents intervenants, mais transformer ces enregistrements en courts extraits et les diffuser sur les réseaux sociaux et par e-mail était un processus entièrement manuel. Le contenu sortait souvent une semaine ou deux après le webinaire, bien après que l\'audience s\'y intéresse encore.',
    approach: 'Nous avons cherché à comprendre d\'où venait réellement le retard : quelqu\'un devait revisionner l\'enregistrement complet, repérer manuellement les meilleurs moments, découper les extraits, puis les diffuser séparément sur chaque canal. C\'est l\'ensemble de cette chaîne, et non une seule étape, qu\'il fallait automatiser pour que le problème de délai disparaisse réellement.',
    solution: 'Nous avons construit un pipeline qui traite chaque enregistrement de webinaire dès sa fin, utilise l\'IA pour identifier les extraits et citations à publier pour chaque intervenant, et les diffuse automatiquement sur les canaux sociaux et e-mail de l\'organisation. Ce qui nécessitait auparavant une semaine ou plus de montage et de planification manuels est désormais diffusé le jour même du webinaire.',
    results: [
      { label: 'Délai de diffusion', value: 'De plusieurs semaines à le jour même' },
      { label: 'Découpage manuel des extraits', value: 'Automatisé' },
      { label: 'Canaux de diffusion', value: 'Réseaux sociaux + e-mail, automatique' }
    ],
    tags: ['AI/LLM', 'Automatisation média', 'Plateforme web']
  },
  {
    slug: 'multi-channel-ecommerce-erp',
    title: 'Un seul système pour gérer les produits sur Amazon, Shopify et WooCommerce',
    client: 'Un détaillant e-commerce multicanal',
    industry: 'E-commerce / Distribution',
    serviceSlug: 'crm-erp-systems',
    timeline: 'Collaboration en cours',
    icon: 'lucide:layers',
    summary: 'Mise en place d\'un ERP central connecté aux boutiques Amazon, Shopify et WooCommerce, afin que les produits, les stocks et les ventes soient gérés en un seul endroit plutôt que séparément sur chaque plateforme.',
    challenge: 'L\'entreprise vendait les mêmes produits sur Amazon, Shopify et WooCommerce, mais gérait les inventaires et les fiches produit séparément sur chaque plateforme. Maintenir la cohérence des niveaux de stock et des détails produits sur trois systèmes impliquait un travail manuel dupliqué et un vrai risque de survente lorsque le stock n\'était pas mis à jour partout à temps.',
    approach: 'Plutôt que de tenter de faire communiquer directement les trois boutiques entre elles, nous avons construit un système central qui détient les données produits et d\'inventaire, chaque boutique étant traitée comme un canal connecté qui se synchronise avec lui dans les deux sens. Le travail d\'intégration n\'a ainsi été effectué qu\'une seule fois par plateforme, au lieu de nécessiter une logique sur mesure entre chaque paire de systèmes.',
    solution: 'L\'ERP est désormais l\'endroit unique où sont gérés les produits, les stocks et les prix. Il se connecte à l\'API de chaque boutique, synchronisant automatiquement les ventes et les niveaux de stock à mesure que les commandes arrivent sur n\'importe quel canal, de sorte que l\'équipe met à jour un produit une seule fois au lieu de trois. Des recommandations assistées par IA signalent les produits et fiches nécessitant une attention, en fonction des tendances de ventes et de stock sur l\'ensemble des canaux.',
    results: [
      { label: 'Boutiques unifiées', value: 'Amazon, Shopify, WooCommerce' },
      { label: 'Gestion des produits', value: 'Source de vérité unique' },
      { label: 'Synchronisation stocks et ventes', value: 'Automatique, multiplateforme' }
    ],
    tags: ['ERP', 'Intégration e-commerce', 'AI']
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-between-nextjs-nuxt-and-angular',
    title: 'Choisir entre Next.js, Nuxt et Angular pour votre prochain projet',
    excerpt: 'Le choix d\'un framework est l\'une des décisions techniques les plus lourdes de conséquences pour un nouveau projet, et l\'une des plus débattues. Voici comment nous tranchons réellement.',
    category: 'Ingénierie',
    date: '2026-07-14',
    author: 'DigSolutions Ingénierie',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gros plan sur du code coloré avec coloration syntaxique à l\'écran',
    keyTakeaways: [
      'Le choix du framework doit découler du profil de l\'équipe, de l\'infrastructure d\'hébergement et de l\'équilibre contenu/interaction, pas des tendances.',
      'Next.js et Nuxt résolvent le même problème, respectivement pour React et Vue : choisissez en fonction du modèle mental que votre équipe maîtrise déjà.',
      'La structure d\'Angular est surtout rentable pour les grandes équipes d\'entreprise appelées à durer, pas pour les petites équipes de startup.',
      'Optimisez pour ce que votre équipe sera encore à l\'aise de maintenir dans trois ans.'
    ],
    metaDescription: 'Une méthode concrète pour choisir entre Next.js, Nuxt, React, Vue et Angular en fonction de l\'équipe, du calendrier et des besoins du produit, et non des tendances.',
    relatedServiceSlugs: ['web-application-development', 'dotnet-desktop-development'],
    content: [
      'Tous les débats en ligne sur les frameworks traitent ce choix comme une question idéologique. En pratique, le bon framework pour un projet est déterminé par un petit nombre de facteurs concrets : ce que votre équipe maîtrise déjà, à quoi ressemble votre hébergement et votre infrastructure, la part de contenu versus d\'interaction dans le produit, et la durée de vie prévue du code.',
      'Next.js et Nuxt doivent leur popularité au fait qu\'ils résolvent le même problème de fond, le rendu côté serveur, le routage et la récupération de données dans un framework cohérent, respectivement pour React et Vue. Si votre équipe pense déjà en React, Next.js élimine les frictions. Si votre équipe raisonne selon le modèle plus simple et davantage orienté templates de Vue, Nuxt remplit le même rôle avec moins de formalisme.',
      'Angular reste le bon choix plus souvent que sa réputation ne le laisse penser, en particulier pour les grandes équipes d\'entreprise qui privilégient une structure normative, une injection de dépendances intégrée et une stabilité à long terme plutôt que la flexibilité. Une équipe de vingt ingénieurs qui maintient un système pendant dix ans profite des garde-fous d\'Angular d\'une manière qu\'une équipe de startup de cinq personnes ne le ferait pas.',
      "La stratégie de rendu est le point où le choix du framework compte vraiment, pas la syntaxe. Un site vitrine ou un blog a besoin de génération statique : construire une fois, servir depuis un CDN, et éviter un rendu à chaque requête. Un tableau de bord derrière une connexion a besoin de rendu côté client, puisqu'il n'y a de toute façon rien à indexer et que les données sont propres à chaque utilisateur. La plupart des produits réels ont besoin d'un mélange, et c'est précisément là que Next.js et Nuxt justifient leur complexité : des modes de rendu par route (statique, rendu côté serveur, régénéré de façon incrémentale) plutôt qu'un choix tout-ou-rien fixé au niveau du projet.",
      "Les exigences SEO changent le calcul plus que la plupart des équipes ne l'anticipent au départ. Un site vitrine riche en contenu ou une boutique multilingue a besoin d'un véritable HTML rendu côté serveur pour les robots d'indexation et un premier affichage rapide, ce qui fait pencher la balance vers Next.js ou Nuxt plutôt qu'une SPA Angular purement côté client. Un outil d'administration interne n'a aucune exigence SEO, ce qui supprime entièrement cette contrainte et ramène la décision à la familiarité de l'équipe et à l'écosystème de composants.",
      'Le coût de migration est le facteur que les équipes sous-estiment le plus. Faire passer une équipe de cinq personnes de Vue à React (ou l\'inverse) pour suivre un framework n\'est pas gratuit : cela signifie des semaines de vélocité réduite pendant que les gens réapprennent des idiomes qu\'ils maîtrisaient déjà. Nous avons refusé des demandes du type « modernisons vers X » lorsque la stack existante fonctionnait bien et que la véritable plainte concernait un problème d\'architecture sans rapport, que n\'importe quel framework aurait hérité de la même façon.',
      'L\'erreur que nous constatons le plus souvent consiste à choisir un framework en fonction des tendances plutôt que de ce que l\'équipe sera encore à l\'aise de maintenir dans trois ans. Nous commençons chaque collaboration en cartographiant les contraintes réelles, le profil de l\'équipe, les besoins d\'intégration, les exigences SEO et le calendrier, avant de recommander une stack, et nous dirons à un client potentiel de rester sur son framework actuel lorsque c\'est la bonne décision, même si cela signifie un projet plus modeste pour nous.'
    ]
  },
  {
    slug: 'production-grade-rag-lessons',
    title: 'Ce que nous avons appris en construisant des systèmes RAG en production pour des clients d\'entreprise',
    excerpt: 'La génération augmentée par récupération (RAG) paraît simple en démonstration, mais devient rapidement complexe en production. Voici les modes de défaillance que nous avons réellement rencontrés.',
    category: 'IA et LLM',
    date: '2026-06-02',
    author: 'DigSolutions Pratique IA',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Baie de serveurs avec câblage réseau illuminé',
    keyTakeaways: [
      'Le découpage en segments et la structure des documents influencent davantage la qualité des réponses que le choix du LLM.',
      'Constituez un jeu d\'évaluation annoté à partir de requêtes réelles avant la mise en production, et relancez-le à chaque modification du prompt ou de la récupération.',
      'Un système qui dit « je ne suis pas sûr » vaut mieux qu\'un système qui répond avec assurance et se trompe.',
      'Le coût, la latence et le routage des modèles sont des décisions produit, pas des considérations d\'infrastructure secondaires.'
    ],
    metaDescription: 'Les leçons tirées de la construction de systèmes de génération augmentée par récupération (RAG) en production pour des clients d\'entreprise : découpage, évaluation et garde-fous essentiels.',
    relatedServiceSlugs: ['ai-llm-integration'],
    content: [
      'Une démonstration RAG est simple : vectoriser quelques documents, récupérer les meilleures correspondances, les insérer dans un prompt. Le RAG en production est une discipline entièrement différente, et la plupart des problèmes difficiles se situent en dehors du modèle.',
      'La stratégie de découpage compte plus que le choix du modèle. Des documents mal découpés, coupés en plein milieu d\'une phrase, sans titres, sans métadonnées, produisent des réponses erronées mais formulées avec assurance, quel que soit le LLM utilisé en aval. Nous consacrons une part disproportionnée du début de chaque collaboration à la structure des documents et aux métadonnées, avant même de toucher au pipeline de récupération.',
      'L\'évaluation doit être mise en place avant la mise en production de la fonctionnalité, pas après que les utilisateurs se plaignent. Nous constituons, dès le début de chaque projet, un petit jeu d\'évaluation annoté à partir de requêtes réelles, et le relançons à chaque modification du prompt ou de la récupération, afin que les régressions soient détectées avant qu\'un client ne les découvre.',
      'La recherche par similarité vectorielle pure échoue sur les requêtes qui dépendent d\'un terme exact, d\'un code produit ou d\'un nom auquel le modèle d\'embedding n\'accorde pas beaucoup de poids. La recherche hybride, qui combine similarité vectorielle et correspondance par mots-clés/BM25 puis reclasse les résultats fusionnés, surpasse systématiquement chacune des deux approches prise isolément dès que l\'ensemble de documents est important ou que les requêtes deviennent spécifiques. Elle coûte plus cher à construire et à ajuster, et cela en vaut la peine pour tout ce qui dépasse une petite base de connaissances homogène.',
      'Le filtrage par métadonnées est ce qui rend la récupération fiable à grande échelle, pas seulement précise. Étiqueter les segments avec la source, la date, le niveau d\'accès et le type de document permet de restreindre la récupération avant même que la recherche par similarité ne s\'exécute, ce qui importe autant pour la qualité des réponses (ne pas récupérer un document de politique obsolète) que pour le contrôle d\'accès (ne pas récupérer un document que cet utilisateur ne devrait pas voir, quelle que soit sa pertinence par rapport à la requête).',
      'Les garde-fous et les signaux de confiance comptent autant que la précision. Un système qui dit « je ne suis pas sûr, voici une personne à contacter » surpasse un système qui répond avec assurance et se trompe, en particulier dans les cas d\'usage liés au support et à la conformité, où une mauvaise réponse coûte plus cher qu\'une réponse lente.',
      'L\'observabilité doit être intégrée dès le premier jour, pas ajoutée quand quelque chose casse. Nous journalisons les segments récupérés avec la réponse générée pour chaque requête en production, pas seulement le résultat final, car lorsqu\'une réponse est fausse, la cause se situe presque toujours dans la récupération, et on ne peut pas déboguer ce qu\'on n\'a pas capturé.',
      'Le coût et la latence sont des décisions produit, pas des considérations d\'infrastructure secondaires. Quel modèle traite quelle requête, quand mettre en cache, et quand un modèle plus petit suffit, sont des décisions que nous prenons explicitement, car elles modifient l\'économie unitaire de la fonctionnalité.'
    ]
  },
  {
    slug: 'signs-your-saas-needs-real-multi-tenancy',
    title: '5 signes indiquant que votre produit SaaS a besoin d\'une véritable architecture multi-tenant',
    excerpt: 'Beaucoup de produits SaaS en phase initiale simulent le multi-tenant jusqu\'à ce que cela craque. Voici comment savoir que vous avez atteint ce point, avant qu\'un client grand compte ne le découvre.',
    category: 'SaaS',
    date: '2026-04-21',
    author: 'DigSolutions Ingénierie',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fondateur travaillant sur un ordinateur portable à la table d\'un café',
    keyTakeaways: [
      'Une base de données partagée avec une colonne customer_id n\'est pas un véritable multi-tenant, et cela tend à craquer lors des revues d\'achat.',
      'Méfiez-vous des scripts ponctuels destinés à corriger des fuites de données entre tenants, et des performances de requêtes imprévisibles causées par votre plus gros client.',
      'Les besoins de configuration par client et les demandes de conformité sont des signaux d\'alerte tardifs.',
      'Une véritable migration multi-tenant est généralement incrémentale, réalisée en amont d\'un contrat plutôt que sous pression pendant sa négociation.'
    ],
    metaDescription: 'Comment reconnaître qu\'un produit SaaS a dépassé son architecture de données initiale et a besoin d\'une véritable isolation multi-tenant, avant que cela ne devienne un frein.',
    relatedServiceSlugs: ['web-application-development', 'crm-erp-systems'],
    content: [
      'La plupart des produits SaaS démarrent avec un modèle de données qui prend techniquement en charge plusieurs clients mais n\'a pas été conçu pour cela : une base de données partagée unique avec une colonne customer_id ajoutée après coup. Cela fonctionne bien, jusqu\'au jour où cela ne fonctionne plus, et ce moment tend à survenir au pire moment possible : en plein cycle de vente à une grande entreprise.',
      'Le premier signe est un prospect qui interroge sur les garanties d\'isolation des données lors d\'une revue d\'achat. Le deuxième est un ingénieur devant écrire un script ponctuel pour corriger des données ayant fui entre tenants. Le troisième est une dégradation imprévisible des performances des requêtes à mesure que le volume de données de votre plus gros client augmente et commence à affecter tous les autres sur les mêmes tables.',
      'Le quatrième signe est le besoin de configurations par client, de feature flags, de champs personnalisés, de politiques de rétention différentes, et le constat que le schéma actuel n\'a nulle part où les intégrer proprement. Le cinquième est un client demandant un environnement dédié ou des garanties de conformité spécifiques que votre architecture ne peut pas fournir proprement.',
      'La sécurité au niveau des lignes, appliquée dans la couche base de données plutôt que seulement dans le code applicatif, est ce qui referme réellement la faille d\'isolation. Une convention côté application du type « toujours filtrer par tenant_id » fonctionne jusqu\'à ce qu\'une requête quelque part l\'oublie, et c\'est précisément cet unique oubli qui devient l\'incident qui finit en revue de sécurité. Les politiques de sécurité au niveau des lignes dans Postgres (ou l\'équivalent dans votre base de données) font de la frontière d\'isolation quelque chose que la base de données applique, même si le code applicatif contient une erreur.',
      'Tester l\'isolation doit être offensif, pas seulement fonctionnel. Il ne suffit pas de vérifier que le tenant A voit les données du tenant A ; il faut des tests qui tentent activement de faire voir au tenant A les données du tenant B via chaque chemin de code, y compris les tâches en arrière-plan, les couches de cache et les index de recherche, précisément les endroits où se cachent réellement les failles d\'isolation.',
      'La migration elle-même est davantage un problème de séquencement qu\'un problème d\'ingénierie. Nous commençons généralement par les tables les plus à risque (celles qui montrent déjà des symptômes de performance ou de fuite), ajoutons une indexation consciente des tenants et des politiques de sécurité au niveau des lignes derrière un feature flag, validons face au trafic de production en mode fantôme, puis basculons table par table plutôt qu\'en une seule mise en production.',
      'Rien de tout cela n\'implique une reconstruction complète. Une véritable architecture multi-tenant est généralement une migration incrémentale : sécurité au niveau des lignes, indexation consciente des tenants et une frontière d\'isolation claire, réalisée par phases derrière le produit que vos clients utilisent déjà. La version coûteuse est celle réalisée sous pression, en pleine négociation, plutôt qu\'en amont de celle-ci.'
    ]
  },
  {
    slug: 'legacy-dotnet-modernization-without-a-rewrite',
    title: 'Moderniser un système .NET existant sans réécriture complète',
    excerpt: 'Une réécriture complète est rarement la bonne réponse pour un système existant qui fait encore tourner l\'entreprise. Voici la trajectoire incrémentale que nous recommandons réellement.',
    category: 'Entreprise',
    date: '2026-02-18',
    author: 'DigSolutions Ingénierie',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Lunettes reflétant des lignes de code sur plusieurs écrans',
    keyTakeaways: [
      'Une réécriture complète risque de faire disparaître silencieusement des règles métier qui n\'ont jamais été entièrement documentées.',
      'Le modèle « strangler » permet à de nouveaux services de se placer derrière l\'interface existante pendant que les anciennes fonctionnalités migrent pièce par pièce.',
      'La modernisation de la base de données doit cibler les tables et requêtes précises à l\'origine de vrais problèmes, et non tout uniformément.',
      'Une migration incrémentale permet à l\'entreprise de continuer à fonctionner tout du long, en échangeant la vitesse contre un risque concentré et réversible.'
    ],
    metaDescription: 'Une approche concrète et incrémentale pour moderniser des systèmes .NET existants, sans le risque ni le coût d\'une réécriture complète.',
    relatedServiceSlugs: ['dotnet-desktop-development'],
    content: [
      'Le réflexe, lorsqu\'un système .NET Framework existant semble lent et difficile à faire évoluer, est de proposer une réécriture complète. C\'est rarement le bon choix. Un système suffisamment ancien pour être considéré comme existant a généralement encodé des années de règles métier que personne n\'a entièrement documentées, des règles qu\'une réécriture ferait disparaître silencieusement.',
      'Nous privilégions le modèle « strangler » : les nouvelles fonctionnalités sont construites sous forme de services modernes distincts (généralement .NET 8+ ou un service JS/TS lorsque cela est pertinent) placés derrière la même interface exposée par le système existant, tandis que les anciennes fonctionnalités sont migrées pièce par pièce, au fur et à mesure qu\'elles doivent de toute façon évoluer.',
      'La modernisation de la base de données doit généralement se faire en parallèle, car les schémas existants portent souvent la même dette accumulée que le code applicatif. Nous priorisons les tables et requêtes à l\'origine de véritables problèmes de performance ou de fiabilité, plutôt que de moderniser tout de manière uniforme.',
      'Les tests de caractérisation précèdent toute refactorisation, pas l\'inverse. Avant de toucher à un module contenant des règles métier non documentées, nous écrivons des tests qui capturent son comportement actuel exactement tel qu\'il est, bugs compris, afin de savoir si un changement ultérieur est une correction délibérée ou une régression accidentelle. Sans cette étape, « moderniser » un système existant en change silencieusement le comportement, ce qui est souvent pire que de ne pas y toucher.',
      'La transition des compétences de l\'équipe est un coût réel que les calendriers de projet ignorent systématiquement. Une équipe qui a maintenu .NET Framework et WebForms pendant dix ans ne devient pas à l\'aise en .NET moderne et avec un nouveau framework front-end en lisant de la documentation le temps d\'un week-end. Nous intégrons le pair programming et le transfert de connaissances au projet lui-même, pas comme un à-côté séparé, afin que l\'équipe du client puisse maintenir le système modernisé, pas seulement nous.',
      'Le résultat est un système qui continue de faire fonctionner l\'entreprise tout au long du processus, avec un risque concentré dans de petites étapes réversibles plutôt que dans une bascule unique à fort enjeu après dix-huit mois. C\'est plus lent pour atteindre une base de code entièrement moderne, mais c\'est la version qui ne met pas l\'entreprise en péril pour y parvenir.'
    ]
  }
]

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug)
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(c => c.slug === slug)
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}
