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
    metaDescription: "Développement d'applications web sur mesure : plateformes, outils internes et pipelines de contenu automatisés, construits avec Next.js, Nuxt, React et Node.js."
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
    metaDescription: "Des fonctionnalités d'IA intégrées à de véritables flux de travail : extraction de contenu, recommandations produits et intégration de LLM sur mesure dans des systèmes existants."
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
    metaDescription: 'Des systèmes ERP sur mesure qui unifient le e-commerce multi-boutiques (Amazon, Shopify, WooCommerce) en une source de vérité unique pour les produits et les stocks.'
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
    metaDescription: 'Back-ends .NET, interfaces Angular et applications de bureau Windows natives (WPF/WinForms) pour des logiciels devant fonctionner en dehors du navigateur.'
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
    readTime: '7 min de lecture',
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
    content: [
      'Tous les débats en ligne sur les frameworks traitent ce choix comme une question idéologique. En pratique, le bon framework pour un projet est déterminé par un petit nombre de facteurs concrets : ce que votre équipe maîtrise déjà, à quoi ressemble votre hébergement et votre infrastructure, la part de contenu versus d\'interaction dans le produit, et la durée de vie prévue du code.',
      'Next.js et Nuxt doivent leur popularité au fait qu\'ils résolvent le même problème de fond, le rendu côté serveur, le routage et la récupération de données dans un framework cohérent, respectivement pour React et Vue. Si votre équipe pense déjà en React, Next.js élimine les frictions. Si votre équipe raisonne selon le modèle plus simple et davantage orienté templates de Vue, Nuxt remplit le même rôle avec moins de formalisme.',
      'Angular reste le bon choix plus souvent que sa réputation ne le laisse penser, en particulier pour les grandes équipes d\'entreprise qui privilégient une structure normative, une injection de dépendances intégrée et une stabilité à long terme plutôt que la flexibilité. Une équipe de vingt ingénieurs qui maintient un système pendant dix ans profite des garde-fous d\'Angular d\'une manière qu\'une équipe de startup de cinq personnes ne le ferait pas.',
      'L\'erreur que nous constatons le plus souvent consiste à choisir un framework en fonction des tendances plutôt que de ce que l\'équipe sera encore à l\'aise de maintenir dans trois ans. Nous commençons chaque collaboration en cartographiant les contraintes réelles, le profil de l\'équipe, les besoins d\'intégration, les exigences SEO et le calendrier, avant de recommander une stack.'
    ]
  },
  {
    slug: 'production-grade-rag-lessons',
    title: 'Ce que nous avons appris en construisant des systèmes RAG en production pour des clients d\'entreprise',
    excerpt: 'La génération augmentée par récupération (RAG) paraît simple en démonstration, mais devient rapidement complexe en production. Voici les modes de défaillance que nous avons réellement rencontrés.',
    category: 'IA et LLM',
    date: '2026-06-02',
    readTime: '9 min de lecture',
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
    content: [
      'Une démonstration RAG est simple : vectoriser quelques documents, récupérer les meilleures correspondances, les insérer dans un prompt. Le RAG en production est une discipline entièrement différente, et la plupart des problèmes difficiles se situent en dehors du modèle.',
      'La stratégie de découpage compte plus que le choix du modèle. Des documents mal découpés, coupés en plein milieu d\'une phrase, sans titres, sans métadonnées, produisent des réponses erronées mais formulées avec assurance, quel que soit le LLM utilisé en aval. Nous consacrons une part disproportionnée du début de chaque collaboration à la structure des documents et aux métadonnées, avant même de toucher au pipeline de récupération.',
      'L\'évaluation doit être mise en place avant la mise en production de la fonctionnalité, pas après que les utilisateurs se plaignent. Nous constituons, dès le début de chaque projet, un petit jeu d\'évaluation annoté à partir de requêtes réelles, et le relançons à chaque modification du prompt ou de la récupération, afin que les régressions soient détectées avant qu\'un client ne les découvre.',
      'Les garde-fous et les signaux de confiance comptent autant que la précision. Un système qui dit « je ne suis pas sûr, voici une personne à contacter » surpasse un système qui répond avec assurance et se trompe, en particulier dans les cas d\'usage liés au support et à la conformité, où une mauvaise réponse coûte plus cher qu\'une réponse lente.',
      'Le coût et la latence sont des décisions produit, pas des considérations d\'infrastructure secondaires. Quel modèle traite quelle requête, quand mettre en cache, et quand un modèle plus petit suffit, sont des décisions que nous prenons explicitement, car elles modifient l\'économie unitaire de la fonctionnalité.'
    ]
  },
  {
    slug: 'signs-your-saas-needs-real-multi-tenancy',
    title: '5 signes indiquant que votre produit SaaS a besoin d\'une véritable architecture multi-tenant',
    excerpt: 'Beaucoup de produits SaaS en phase initiale simulent le multi-tenant jusqu\'à ce que cela craque. Voici comment savoir que vous avez atteint ce point, avant qu\'un client grand compte ne le découvre.',
    category: 'SaaS',
    date: '2026-04-21',
    readTime: '6 min de lecture',
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
    content: [
      'La plupart des produits SaaS démarrent avec un modèle de données qui prend techniquement en charge plusieurs clients mais n\'a pas été conçu pour cela : une base de données partagée unique avec une colonne customer_id ajoutée après coup. Cela fonctionne bien, jusqu\'au jour où cela ne fonctionne plus, et ce moment tend à survenir au pire moment possible : en plein cycle de vente à une grande entreprise.',
      'Le premier signe est un prospect qui interroge sur les garanties d\'isolation des données lors d\'une revue d\'achat. Le deuxième est un ingénieur devant écrire un script ponctuel pour corriger des données ayant fui entre tenants. Le troisième est une dégradation imprévisible des performances des requêtes à mesure que le volume de données de votre plus gros client augmente et commence à affecter tous les autres sur les mêmes tables.',
      'Le quatrième signe est le besoin de configurations par client, de feature flags, de champs personnalisés, de politiques de rétention différentes, et le constat que le schéma actuel n\'a nulle part où les intégrer proprement. Le cinquième est un client demandant un environnement dédié ou des garanties de conformité spécifiques que votre architecture ne peut pas fournir proprement.',
      'Rien de tout cela n\'implique une reconstruction complète. Une véritable architecture multi-tenant est généralement une migration incrémentale : sécurité au niveau des lignes, indexation consciente des tenants et une frontière d\'isolation claire, réalisée par phases derrière le produit que vos clients utilisent déjà. La version coûteuse est celle réalisée sous pression, en pleine négociation, plutôt qu\'en amont de celle-ci.'
    ]
  },
  {
    slug: 'legacy-dotnet-modernization-without-a-rewrite',
    title: 'Moderniser un système .NET existant sans réécriture complète',
    excerpt: 'Une réécriture complète est rarement la bonne réponse pour un système existant qui fait encore tourner l\'entreprise. Voici la trajectoire incrémentale que nous recommandons réellement.',
    category: 'Entreprise',
    date: '2026-02-18',
    readTime: '8 min de lecture',
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
    content: [
      'Le réflexe, lorsqu\'un système .NET Framework existant semble lent et difficile à faire évoluer, est de proposer une réécriture complète. C\'est rarement le bon choix. Un système suffisamment ancien pour être considéré comme existant a généralement encodé des années de règles métier que personne n\'a entièrement documentées, des règles qu\'une réécriture ferait disparaître silencieusement.',
      'Nous privilégions le modèle « strangler » : les nouvelles fonctionnalités sont construites sous forme de services modernes distincts (généralement .NET 8+ ou un service JS/TS lorsque cela est pertinent) placés derrière la même interface exposée par le système existant, tandis que les anciennes fonctionnalités sont migrées pièce par pièce, au fur et à mesure qu\'elles doivent de toute façon évoluer.',
      'La modernisation de la base de données doit généralement se faire en parallèle, car les schémas existants portent souvent la même dette accumulée que le code applicatif. Nous priorisons les tables et requêtes à l\'origine de véritables problèmes de performance ou de fiabilité, plutôt que de moderniser tout de manière uniforme.',
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
