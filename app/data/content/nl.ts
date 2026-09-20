import type { Service } from '~/data/services'
import type { CaseStudy } from '~/data/portfolio'
import type { BlogPost } from '~/data/blog'

export const services: Service[] = [
  {
    slug: 'web-application-development',
    icon: 'lucide:layout-panel-left',
    title: 'Webapplicatieontwikkeling',
    tagline: 'Full-stack webplatforms en automatiseringstools',
    summary: 'Maatwerk webapplicaties en interne platforms, end-to-end gebouwd met de automatisering en integraties die een systeem daadwerkelijk handmatig werk laten vervangen.',
    description: 'We bouwen productiewebapplicaties en platforms, geen marketingsites: interne tools, content- en mediapipelines, en systemen die aansluiten op de andere software die een bedrijf al gebruikt. Recent werk omvat een geautomatiseerde pipeline die opnames van live webinars omzet in korte clips en quotes en deze dezelfde dag nog verspreidt via social media en e-mail, ter vervanging van een handmatig proces dat voorheen een week of langer kostte.',
    capabilities: [
      'Maatwerk webplatforms en interne tools',
      'Media- en contentpipelines (inlezen, verwerken, publiceren, verspreiden)',
      'API-ontwerp en integratie tussen interne en externe systemen',
      'Automatisering van handmatige, repetitieve operationele workflows',
      'Dashboards en beheerinterfaces voor niet-technische teams',
      'CI/CD-pipelines met stagingomgevingen en demo\'s'
    ],
    techStack: ['Next.js', 'Nuxt', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    idealFor: ['Teams die handmatige, spreadsheet-gedreven processen vervangen', 'Pipelines voor content- en mediadistributie', 'Interne dashboards en beheertools', 'Systemen die met meerdere bestaande tools moeten communiceren'],
    metaTitle: 'Diensten voor webapplicatieontwikkeling',
    metaDescription: 'Maatwerk webapplicatieontwikkeling: platforms, interne tools en geautomatiseerde contentpipelines gebouwd met Next.js, Nuxt, React en Node.js.',
    process: [
      { title: 'Baken de workflow af, niet alleen de functie', description: 'We beginnen met het in kaart brengen van het daadwerkelijke handmatige proces, de betrokken tools en overdrachten, niet alleen het functieverzoek, zodat het systeem dat we bouwen het echte knelpunt oplost en niet slechts een symptoom ervan.' },
      { title: 'Ontwerp eerst het datamodel en de integraties', description: 'Voordat we aan de interface beginnen, bepalen we hoe data stroomt tussen je bestaande tools en het nieuwe systeem. Integraties achteraf toevoegen is meestal de reden dat een project qua planning volledig ontspoort.' },
      { title: 'Bouw in een stagingomgeving die je kunt zien', description: 'Je krijgt vanaf week één toegang tot een stagingomgeving, met regelmatige demo\'s, geen zwarte doos die pas aan het einde verschijnt.' },
      { title: 'Lanceer, en blijf itereren', description: 'De meeste trajecten lopen door na de lancering, omdat het proces dat de software vervangt blijft evolueren en het systeem daarin mee moet groeien.' }
    ],
    faqs: [
      { question: 'Hoe lang duurt een typisch webapplicatieproject?', answer: 'Dat hangt af van de scope, maar de meeste eerste versies gaan live binnen 6-12 weken, met doorlopende iteratie daarna. We baseren de tijdlijn op de specifieke workflow die wordt vervangen, niet op een generieke schatting.' },
      { question: 'Werken jullie met een bestaande codebase, of alleen aan projecten vanaf nul?', answer: 'Beide. Sommige trajecten beginnen vanaf nul; andere breiden een systeem uit dat je al gebruikt of integreren ermee.' },
      { question: 'Wat als onze vereisten halverwege veranderen?', answer: 'Dat gebeurt vaak. We werken in gefaseerde mijlpalen juist om scopewijzigingen per fase op te vangen, in plaats van de hele bouw te laten ontsporen.' },
      { question: 'Wie is eigenaar van de code en infrastructuur na de lancering?', answer: 'Jij. Je krijgt toegang tot dezelfde repositories, omgevingen en accounts die wij gebruiken om het te bouwen, geen systeem dat alleen wij kunnen onderhouden.' }
    ]
  },
  {
    slug: 'ai-llm-integration',
    icon: 'lucide:sparkles',
    title: 'AI & Maatwerk LLM-integratie',
    tagline: 'AI-functies die echt werk verzetten binnen een bestaand systeem',
    summary: 'AI geïntegreerd in een werkende pipeline, geen losstaande chatbot: het herkennen van de belangrijke clip in een uur video, of de productupdate die er daadwerkelijk toe doet.',
    description: 'We integreren AI waar het echte handmatige inspanning wegneemt binnen een systeem dat we al hebben gebouwd, in plaats van als los toegevoegde chatwidget. In onze pipeline voor webinardistributie herkent AI de clips en quotes die het publiceren waard zijn uit een volledige opname. In ons e-commerce ERP-werk brengt AI aan het licht welke productupdates en vermeldingen daadwerkelijk aandacht nodig hebben, verspreid over tientallen SKU\'s. Het doel is altijd een kleinere, duidelijk afgebakende taak die het model betrouwbaar kan uitvoeren, gekoppeld aan een workflow waarop een team al vertrouwt.',
    capabilities: [
      'AI-ondersteunde contentextractie (herkenning van clips en quotes uit langere video\'s)',
      'AI-ondersteunde product- en catalogusaanbevelingen',
      'Maatwerk LLM-integratie in bestaande producten en workflows',
      'Retrieval en samenvatting van eigen (proprietary) data',
      'Modelevaluatie en betrouwbaarheidscontroles voordat een functie live gaat',
      'AI-functieontwerp met oog voor kosten en latency'
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Python', 'Node.js', 'TypeScript', 'Vector search'],
    idealFor: ['Media- en contentteams met te veel ruw beeldmateriaal om handmatig te verwerken', 'E-commerceteams die grote, snel veranderende catalogi beheren', 'Interne tools die een nauwkeurig afgebakende, betrouwbare AI-functie nodig hebben, geen algemene chatbot'],
    metaTitle: 'Diensten voor maatwerk AI & LLM-integratie',
    metaDescription: 'AI-functies geïntegreerd in echte workflows: contentextractie, productaanbevelingen en maatwerk LLM-integratie in bestaande systemen.',
    process: [
      { title: 'Zoek de afgebakende taak, niet de brede visie', description: 'We zoeken naar één specifieke, duidelijk afgebakende taak binnen een bestaande workflow, geen algemene AI-functie die los aan een product wordt gehangen.' },
      { title: 'Prototype vroeg met echte data', description: 'We testen het model vanaf week één tegen echte, productie-achtige input, want demodata verbergt precies de faalscenario\'s die er in de praktijk toe doen.' },
      { title: 'Bouw een evaluatieset voordat je live gaat', description: 'We maken een gelabelde set echte voorbeelden die moet blijven slagen terwijl we prompts of retrieval aanpassen, zodat regressies worden opgemerkt voordat een klant ze vindt.' },
      { title: 'Ontwerp voor kosten, latency en gecontroleerd falen', description: 'Welk model welke zoekopdracht afhandelt, wanneer wordt teruggevallen op een mens, en wat er gebeurt als het model niet zeker is, zijn expliciete productbeslissingen, geen bijzaak achteraf.' }
    ],
    faqs: [
      { question: 'Bouwen jullie maatwerk chatbots?', answer: 'Niet standaard. We hebben gemerkt dat afgebakende, geïntegreerde AI-functies (zoals clipextractie of catalogusmarkering) betrouwbaardere waarde leveren dan een algemene chatwidget. Als een chatbot echt het juiste middel is voor jouw workflow, zeggen we dat eerlijk.' },
      { question: 'Welke AI-providers gebruiken jullie?', answer: 'Voornamelijk OpenAI en Anthropic, per taak gekozen op basis van nauwkeurigheid, kosten en latency-eisen, niet één standaardleverancier.' },
      { question: 'Hoe gaan jullie om met AI-fouten of hallucinaties?', answer: 'Evaluatiesets, betrouwbaarheidsdrempels en menselijke tussenkomst voor alles wat klantgericht is. Een systeem dat zegt "ik weet het niet zeker" verslaat een systeem dat zelfverzekerd en fout antwoordt.' },
      { question: 'Kunnen jullie AI toevoegen aan een systeem dat jullie niet zelf hebben gebouwd?', answer: 'Ja, zolang we toegang krijgen tot de data en de workflow waarin het moet worden geïntegreerd.' }
    ]
  },
  {
    slug: 'crm-erp-systems',
    icon: 'lucide:building-2',
    title: 'CRM- & ERP-systemen',
    tagline: 'Systemen voor multichannel commerce en bedrijfsvoering',
    summary: 'ERP- en bedrijfsvoeringssystemen die losstaande platforms (Amazon, Shopify, WooCommerce en vergelijkbare) samenbrengen tot één bron van waarheid voor producten, voorraad en verkoop.',
    description: 'Bedrijven die via meerdere webshops verkopen, beheren producten, voorraad en bestellingen vaak apart op elk platform. Wij bouwen maatwerk ERP- en bedrijfsvoeringssystemen die dat werk centraliseren: beheer een product één keer, en laat het automatisch synchroniseren naar elke gekoppelde webshop, met voorraad en verkoop op één plek bijgehouden in plaats van handmatig afgestemd tussen platforms.',
    capabilities: [
      'Integratie met meerdere webshops (Amazon, Shopify, WooCommerce en vergelijkbare)',
      'Gecentraliseerd product-, voorraad- en stockbeheer',
      'Automatische synchronisatie van verkoop en voorraad tussen gekoppelde platforms',
      'Maatwerk CRM- en pipelinetools voor sales- en operationsteams',
      'Workflowautomatisering en goedkeuringsketens',
      'Rapportages en dashboards over gecombineerde verkoopkanalen'
    ],
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST / platform APIs', 'React'],
    idealFor: ['Bedrijven die via meerdere e-commerceplatforms verkopen', 'Operationsteams die data handmatig tussen systemen afstemmen', 'Sales- en operationsteams die uit hun spreadsheets zijn gegroeid'],
    metaTitle: 'Diensten voor maatwerk CRM- & ERP-ontwikkeling',
    metaDescription: 'Maatwerk ERP-systemen die multichannel e-commerce (Amazon, Shopify, WooCommerce) samenbrengen tot één bron van waarheid voor producten en voorraad.',
    process: [
      { title: 'Breng elke webshop en elk systeem in kaart dat je nu handmatig afstemt', description: 'Voordat we code schrijven, documenteren we precies welke platforms, spreadsheets en handmatige stappen je product- en voorraadgegevens nu synchroon houden.' },
      { title: 'Ontwerp het systeem als de bron van waarheid', description: 'Je nieuwe ERP-systeem is eigenaar van de product-, voorraad- en prijsgegevens; elke webshop wordt een gesynchroniseerd kanaal in plaats van een apart, handmatig bij te werken systeem.' },
      { title: 'Migreer één webshop tegelijk', description: 'We koppelen en valideren één platform voordat we naar het volgende gaan, zodat een fout in één integratie niet de data van alle andere kan beschadigen.' },
      { title: 'Voeg rapportage en automatisering pas als laatste toe', description: 'Dashboards, goedkeuringsworkflows en AI-ondersteunde signalen worden pas toegevoegd zodra de basissynchronisatie solide is, niet daarvoor.' }
    ],
    faqs: [
      { question: 'Met welke platforms integreren jullie?', answer: 'Vooral met Amazon, Shopify en WooCommerce; op verzoek hebben we ook maatwerk integraties gebouwd met andere webshop- en marketplace-API\'s.' },
      { question: 'Vervangt dit ons bestaande CRM/ERP volledig?', answer: 'Dat hangt af van je situatie. Sommige trajecten vervangen een lappendeken van spreadsheets en handmatige afstemming volledig; andere breiden een bestaand systeem uit met de integraties die het mist.' },
      { question: 'Wat gebeurt er met onze data tijdens de migratie?', answer: 'We migreren en valideren de data per webshop, terwijl je bestaande systemen parallel blijven draaien tot elke koppeling is geverifieerd.' },
      { question: 'Kan het systeem later meegroeien met meer verkoopkanalen?', answer: 'Ja. Een nieuwe webshop toevoegen wordt dan één nieuwe integratie op een bestaande bron van waarheid, geen herontwerp.' }
    ]
  },
  {
    slug: 'dotnet-desktop-development',
    icon: 'lucide:monitor',
    title: '.NET & Desktoptoepassingen',
    tagline: '.NET-webplatforms, Angular-frontends en native Windows-desktopsoftware',
    summary: '.NET-backends, Angular-frontends en native desktoptoepassingen voor bedrijven die software nodig hebben die rechtstreeks op Windows-machines draait, niet alleen in een browser.',
    description: 'Sommige workflows horen nog steeds thuis op de desktop: kassasystemen, interne bedrijfsvoeringstools en software die directe toegang nodig heeft tot lokale hardware of bestanden, zonder dat een browser in de weg zit. We bouwen end-to-end op de .NET-stack: C#-backends en -services, Angular-frontends voor het webgedeelte van een .NET-systeem, en native Windows-desktoptoepassingen, voor teams van wie de tooling buiten de browser moet functioneren.',
    capabilities: [
      'Native Windows-desktoptoepassingen (WPF / WinForms)',
      '.NET / C#-backendservices en API\'s',
      'Angular-frontends voor .NET-gebaseerde webapplicaties',
      'Desktop-naar-cloud-synchronisatie (lokale app die communiceert met een gehoste backend)',
      'Onderhoud en modernisering van legacy .NET-applicaties',
      'Installatiepakketten en updatedistributie voor desktopsoftware'
    ],
    techStack: ['.NET / C#', 'Angular', 'WPF', 'WinForms', 'SQL Server'],
    idealFor: ['Bedrijven die software nodig hebben die op lokale Windows-machines draait', 'Kassasystemen en interne bedrijfsvoeringstools', 'Teams met een bestaande .NET-codebase om uit te breiden of te moderniseren'],
    metaTitle: '.NET- & Windows-desktoptoepassingsontwikkeling',
    metaDescription: '.NET-backends, Angular-frontends en native Windows-desktoptoepassingen (WPF/WinForms) voor software die buiten de browser moet draaien.',
    process: [
      { title: 'Begrijp wat écht buiten de browser moet functioneren', description: 'Toegang tot lokale hardware, offline gebruik of een legacy-afhankelijkheid zijn veelvoorkomende redenen; we bevestigen de desktop-eis voordat we die als standaard aannemen.' },
      { title: 'Beoordeel de bestaande .NET-codebase, indien aanwezig', description: 'Bij moderniseringswerk brengen we eerst in kaart welke onderdelen van een legacy systeem dragend zijn, voordat we die aanraken, zodat jarenlang gecodeerde bedrijfsregels niet stilzwijgend verdwijnen.' },
      { title: 'Bouw backend en interface parallel, vanaf het begin geïntegreerd', description: 'C#-services en de Angular- of desktopinterface worden vanaf het begin van de bouw gekoppeld, niet pas aan het einde aan elkaar geplakt.' },
      { title: 'Verpak en lever met een echt updatepad', description: 'Installatiepakketten en updatedistributie maken deel uit van het opleverbare product, niet iets dat iemand anders later moet uitzoeken.' }
    ],
    faqs: [
      { question: 'Bouwen jullie alleen nieuwe desktoptoepassingen, of onderhouden jullie ook bestaande?', answer: 'Beide. Een groot deel van ons .NET-werk bestaat uit het moderniseren of uitbreiden van een bestaand legacy systeem, in plaats van vanaf nul bouwen.' },
      { question: 'Waarom zouden we een desktopapp nodig hebben in plaats van een webapp?', answer: 'Meestal vanwege directe hardware- of bestandstoegang, offline-eisen, of een bestaande kassa-/bedrijfsvoeringstool die al op Windows-machines draait. We vertellen je eerlijk als een webapp beter zou passen.' },
      { question: 'Gebruiken jullie WPF of WinForms?', answer: 'Dat hangt af van het project. We werken met beide en adviseren op basis van wat past bij je bestaande codebase en vereisten, niet op basis van een standaardvoorkeur.' },
      { question: 'Kan de desktopapp communiceren met clouddiensten?', answer: 'Ja, desktop-naar-cloud-synchronisatie (een lokale app die communiceert met een gehoste backend) is een mogelijkheid die we regelmatig bouwen.' }
    ]
  }
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-webinar-clip-distribution',
    title: 'Live webinars omzetten in social- en e-mailcontent op dezelfde dag',
    client: 'Een zorgorganisatie in Europa',
    industry: 'Zorg (Europa)',
    serviceSlug: 'ai-llm-integration',
    timeline: 'Doorlopend traject',
    icon: 'lucide:video',
    summary: 'Bouwde een geautomatiseerde pipeline die de beste clips en quotes uit live webinars haalt en deze dezelfde dag nog verspreidt via social media en e-mail, in plaats van een week of twee later.',
    challenge: 'De organisatie organiseerde regelmatig live webinars met waardevolle momenten en quotes van verschillende sprekers, maar het omzetten van die beelden in korte clips en het verspreiden ervan via social media en e-mail was een volledig handmatig proces. Tegen de tijd dat de content de deur uitging, was dat vaak een week of twee na het webinar, ruim nadat het publiek nog geïnteresseerd was.',
    approach: 'We keken naar waar de vertraging daadwerkelijk vandaan kwam: iemand moest de volledige opname terugkijken, handmatig de beste momenten vinden, clips knippen en ze vervolgens apart over de kanalen verspreiden. Die hele keten, niet slechts één stap ervan, moest worden geautomatiseerd wilde het timingprobleem echt verdwijnen.',
    solution: 'We bouwden een pipeline die elke webinaropname verwerkt zodra deze eindigt, AI gebruikt om de clips en quotes te herkennen die het publiceren waard zijn van elke spreker, en deze automatisch verspreidt via de social-media- en e-mailkanalen van de organisatie. Wat vroeger een week of meer aan handmatig monteren en plannen kostte, gaat nu dezelfde dag nog de deur uit als het webinar plaatsvindt.',
    results: [
      { label: 'Distributievertraging', value: 'Weken naar dezelfde dag' },
      { label: 'Handmatig knipwerk', value: 'Geautomatiseerd' },
      { label: 'Distributiekanalen', value: 'Social + e-mail, automatisch' }
    ],
    tags: ['AI/LLM', 'Media-automatisering', 'Webplatform']
  },
  {
    slug: 'multi-channel-ecommerce-erp',
    title: 'Eén systeem om producten te beheren op Amazon, Shopify en WooCommerce',
    client: 'Een multichannel e-commerceretailer',
    industry: 'E-commerce / Retail',
    serviceSlug: 'crm-erp-systems',
    timeline: 'Doorlopend traject',
    icon: 'lucide:layers',
    summary: 'Bouwde een centraal ERP-systeem dat verbinding maakt met webshops op Amazon, Shopify en WooCommerce, zodat producten, voorraad en verkoop op één plek worden beheerd in plaats van apart per platform.',
    challenge: 'Het bedrijf verkocht dezelfde producten via Amazon, Shopify en WooCommerce, maar beheerde voorraad en vermeldingen apart op elk platform. Voorraadaantallen en productgegevens consistent houden over drie systemen betekende dubbel handmatig werk en een reëel risico op oververkoop wanneer de voorraad niet overal op tijd werd bijgewerkt.',
    approach: 'In plaats van te proberen de drie webshops rechtstreeks met elkaar te laten communiceren, bouwden we een centraal systeem dat eigenaar is van de product- en voorraadgegevens, waarbij elke webshop wordt behandeld als een gekoppeld kanaal dat ermee synchroniseert. Dat betekende dat het integratiewerk één keer per platform gebeurde, in plaats van dat er tussen elk paar systemen aparte logica nodig was.',
    solution: 'Het ERP-systeem is nu de enige plek waar producten, voorraad en prijzen worden beheerd. Het maakt verbinding met de API van elke webshop, synchroniseert automatisch verkoop- en voorraadniveaus zodra er op een willekeurig kanaal bestellingen binnenkomen, zodat het team een product één keer bijwerkt in plaats van drie keer. AI-ondersteunde aanbevelingen signaleren welke producten en vermeldingen aandacht nodig hebben, op basis van verkoop- en voorraadpatronen over alle kanalen.',
    results: [
      { label: 'Samengevoegde webshops', value: 'Amazon, Shopify, WooCommerce' },
      { label: 'Productbeheer', value: 'Eén bron van waarheid' },
      { label: 'Synchronisatie voorraad & verkoop', value: 'Automatisch, platformoverstijgend' }
    ],
    tags: ['ERP', 'E-commerce-integratie', 'AI']
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-between-nextjs-nuxt-and-angular',
    title: 'Kiezen tussen Next.js, Nuxt en Angular voor je volgende project',
    excerpt: 'Framework-keuze is een van de meest ingrijpende technische beslissingen die een nieuw project maakt, en een van de meest overdreven bediscussieerde. Zo pakken wij het in de praktijk aan.',
    category: 'Engineering',
    date: '2026-07-14',
    author: 'DigSolutions Engineeringteam',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close-up van kleurrijke, syntax-gemarkeerde code op een monitor',
    keyTakeaways: [
      'Framework-keuze moet worden bepaald door teamachtergrond, hostingopzet en de balans tussen content en interactie, niet door trends.',
      'Next.js en Nuxt lossen hetzelfde probleem op voor respectievelijk React en Vue: kies op basis van het mentale model dat je team al heeft.',
      'De structuur van Angular betaalt zich het meest uit voor grote, langlopende enterprise-teams, niet voor kleine startupteams.',
      'Optimaliseer voor wat je team over drie jaar nog steeds prettig kan onderhouden.'
    ],
    metaDescription: 'Een praktisch afwegingskader om te kiezen tussen Next.js, Nuxt, React, Vue en Angular op basis van team, tijdlijn en productvereisten, niet van trends.',
    relatedServiceSlugs: ['web-application-development', 'dotnet-desktop-development'],
    content: [
      'Elk framework-debat online behandelt de keuze alsof het een ideologische kwestie is. In de praktijk wordt het juiste framework voor een project bepaald door een klein aantal concrete factoren: wat je team al kent, hoe je hosting en infrastructuur eruitzien, hoe content- of interactiegedreven het product is, en hoe lang de codebase moet meegaan.',
      'Next.js en Nuxt danken hun populariteit aan het feit dat ze hetzelfde onderliggende probleem oplossen, namelijk server-rendering, routering en datafetching in één samenhangend framework, voor respectievelijk React en Vue. Als je team al in React denkt, haalt Next.js frictie weg. Als je team denkt vanuit het eenvoudigere, meer templategedreven mentale model van Vue, doet Nuxt hetzelfde werk met minder omhaal.',
      'Angular is vaker de juiste keuze dan zijn reputatie doet vermoeden, met name voor grote enterprise-teams die waarde hechten aan een uitgesproken structuur, ingebouwde dependency injection en stabiliteit op lange termijn boven flexibiliteit. Een team van twintig engineers dat een systeem tien jaar lang onderhoudt, profiteert van de kaders die Angular biedt op een manier waarop een startupteam van vijf mensen dat niet doet.',
      'Renderingstrategie is waar de framework-keuze er echt toe doet, niet de syntax. Een marketingsite of blog wil statische generatie: één keer bouwen, serveren vanaf een CDN, en rendering bij elke aanvraag vermijden. Een dashboard achter een login wil client-side rendering, omdat er toch niets te indexeren valt en de data sowieso per gebruiker verschilt. De meeste echte producten hebben een mix nodig, en precies daar verdienen Next.js en Nuxt hun complexiteit: renderingmodi per route (statisch, server-rendered, incrementeel geregenereerd) in plaats van een alles-of-niets-keuze die op projectniveau vastligt.',
      'SEO-vereisten veranderen de afweging meer dan de meeste teams vooraf verwachten. Een contentrijke marketingsite of een meertalige webshop heeft echte, server-gerenderde HTML nodig voor crawlers en een snelle eerste weergave, wat de balans doet doorslaan naar Next.js of Nuxt boven een pure client-side Angular-SPA. Een interne beheertool heeft helemaal geen SEO-vereiste, wat die beperking volledig wegneemt en de beslissing terugbrengt naar teamvertrouwdheid en het component-ecosysteem.',
      'Migratiekosten zijn de factor die teams het meest onderschatten. Een team van vijf mensen van Vue naar React (of andersom) laten overstappen om een framework achterna te jagen, is niet gratis: het betekent weken van verminderde snelheid terwijl mensen idiomen opnieuw moeten leren die ze al beheersten. We hebben verzoeken om te "moderniseren naar X" afgewezen wanneer de bestaande stack goed functioneerde en de eigenlijke klacht een ongerelateerd architectuurprobleem was dat elk framework net zo goed zou hebben geërfd.',
      'De fout die we het vaakst zien, is het kiezen van een framework op basis van wat trending is, in plaats van wat het team over drie jaar nog steeds prettig kan onderhouden. We beginnen elk traject met het in kaart brengen van de daadwerkelijke randvoorwaarden, teamachtergrond, integratie-eisen, SEO-behoeften, tijdlijn, voordat we een stack aanbevelen, en we vertellen een potentiële klant om bij het huidige framework te blijven wanneer dat de juiste keuze is, zelfs als dat voor ons een kleiner project betekent.'
    ]
  },
  {
    slug: 'production-grade-rag-lessons',
    title: 'Wat we hebben geleerd van het bouwen van productie-RAG-systemen voor enterprise-klanten',
    excerpt: 'Retrieval-augmented generation oogt eenvoudig in een demo en wordt snel lastig in productie. Dit zijn de faalscenario\'s die we daadwerkelijk zijn tegengekomen.',
    category: 'AI & LLM\'s',
    date: '2026-06-02',
    author: 'DigSolutions AI-praktijk',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Serverrack met verlichte netwerkbekabeling',
    keyTakeaways: [
      'Chunking en documentstructuur zijn belangrijker voor de kwaliteit van antwoorden dan welke LLM je gebruikt.',
      'Bouw een gelabelde evaluatieset op basis van echte zoekopdrachten voordat je live gaat, en voer deze opnieuw uit bij elke wijziging in prompt of retrieval.',
      'Een systeem dat zegt "ik weet het niet zeker" is beter dan een systeem dat zelfverzekerd en fout antwoordt.',
      'Kosten, latency en modelroutering zijn productbeslissingen, geen bijzaak van de infrastructuur.'
    ],
    metaDescription: 'Lessen uit het bouwen van productie-retrieval-augmented generation (RAG)-systemen voor enterprise-klanten: chunking, evaluatie en waarborgen die ertoe doen.',
    relatedServiceSlugs: ['ai-llm-integration'],
    content: [
      'Een RAG-demo is eenvoudig: embed een aantal documenten, haal de beste matches op, stop ze in een prompt. RAG in productie is een compleet andere discipline, en de meeste lastige problemen bevinden zich buiten het model.',
      'Chunkingstrategie is belangrijker dan modelkeuze. Slecht gechunkte documenten, midden in een zin afgekapt, ontbrekende kopjes, geen metadata, leveren zelfverzekerd foute antwoorden op, ongeacht welke LLM eronder ligt. We besteden onevenredig veel tijd vroeg in een traject aan documentstructuur en metadata, voordat we de retrieval-pipeline aanraken.',
      'Evaluatie moet worden opgebouwd voordat de functie live gaat, niet nadat gebruikers klagen. We bouwen vroeg in elk project een kleine, gelabelde evaluatieset op basis van echte zoekopdrachten, en voeren deze opnieuw uit bij elke wijziging in prompt of retrieval, zodat regressies worden opgemerkt voordat een klant ze vindt.',
      'Zuivere vectorsimilariteitszoekopdrachten falen bij zoekopdrachten die afhangen van een exacte term, een productcode of een naam waar het embeddingmodel niet veel gewicht aan geeft. Hybride zoeken, dat vectorsimilariteit combineert met keyword-/BM25-matching en de samengevoegde resultaten herrangschikt, presteert consistent beter dan elke aanpak afzonderlijk zodra de documentenset groot is of de zoekopdrachten specifiek worden. Het kost meer om te bouwen en af te stemmen, en dat is het waard voor alles wat verder gaat dan een kleine, homogene kennisbank.',
      'Metadatafiltering is wat retrieval betrouwbaar maakt op schaal, niet alleen nauwkeurig. Door chunks te taggen met bron, datum, toegangsniveau en documenttype kun je retrieval afbakenen voordat de similariteitszoekopdracht überhaupt draait, wat belangrijk is voor zowel antwoordkwaliteit (geen verouderd beleidsdocument ophalen) als toegangscontrole (geen document ophalen dat deze gebruiker niet zou mogen zien, ongeacht hoe goed het overeenkomt met de zoekopdracht).',
      'Waarborgen en betrouwbaarheidssignalen zijn net zo belangrijk als nauwkeurigheid. Een systeem dat zegt "ik weet het niet zeker, hier is iemand die je kunt vragen" presteert beter dan een systeem dat zelfverzekerd en fout antwoordt, vooral in support- en compliance-achtige toepassingen waar een fout antwoord meer kost dan een traag antwoord.',
      'Observability moet vanaf dag één worden ingebouwd, niet pas worden toegevoegd als er iets misgaat. We loggen de opgehaalde chunks samen met het gegenereerde antwoord bij elke productiezoekopdracht, niet alleen het eindresultaat, want als een antwoord fout is, ligt de oorzaak vrijwel altijd bij retrieval, en je kunt niet debuggen wat je niet hebt vastgelegd.',
      'Kosten en latency zijn productbeslissingen, geen bijzaak van de infrastructuur. Welk model welke zoekopdracht afhandelt, wanneer je cachet, en wanneer een kleiner model goed genoeg is, zijn beslissingen die we expliciet nemen, omdat ze de unit economics van de functie veranderen.'
    ]
  },
  {
    slug: 'signs-your-saas-needs-real-multi-tenancy',
    title: '5 signalen dat jouw SaaS-product echte multi-tenant architectuur nodig heeft',
    excerpt: 'Veel vroege SaaS-producten doen alsof ze multi-tenant zijn totdat het misgaat. Zo herken je dat je dat punt hebt bereikt, voordat een enterprise-klant het doet.',
    category: 'SaaS',
    date: '2026-04-21',
    author: 'DigSolutions Engineeringteam',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Oprichter die aan een laptop werkt aan een cafétafel',
    keyTakeaways: [
      'Een gedeelde database met een customer_id-kolom is geen echte multi-tenancy, en dat blijkt vaak tijdens een inkoopbeoordeling.',
      'Let op eenmalige scripts om datalekken tussen tenants te herstellen en onvoorspelbare queryprestaties door je grootste klant.',
      'Configuratiebehoeften per klant en compliance-verzoeken zijn waarschuwingssignalen in een laat stadium.',
      'Een echte multi-tenant migratie verloopt meestal incrementeel, uitgevoerd voorafgaand aan een deal in plaats van onder druk tijdens een deal.'
    ],
    metaDescription: 'Hoe je herkent dat een SaaS-product zijn vroege data-architectuur is ontgroeid en echte multi-tenant isolatie nodig heeft, voordat het een blokkade wordt.',
    relatedServiceSlugs: ['web-application-development', 'crm-erp-systems'],
    content: [
      'De meeste SaaS-producten beginnen met een datamodel dat technisch meerdere klanten ondersteunt, maar daar niet voor is ontworpen: één gedeelde database met een aan de zijkant toegevoegde customer_id-kolom. Dat werkt prima, tot het moment dat het niet meer werkt, en dat moment doet zich meestal voor op het slechtst denkbare tijdstip: tijdens een enterprise-verkooptraject.',
      'Het eerste signaal is een prospect die tijdens de inkoopbeoordeling vraagt naar garanties voor data-isolatie. Het tweede is een engineer die een eenmalig script moet schrijven om data te herstellen die tussen tenant-grenzen is gelekt. Het derde is queryprestaties die onvoorspelbaar verslechteren naarmate het datavolume van je grootste klant groeit en invloed begint te hebben op iedereen die dezelfde tabellen deelt.',
      'Het vierde signaal is de behoefte aan configuratie per klant, feature flags, aangepaste velden, verschillend retentiebeleid, en de constatering dat het huidige schema daar nergens netjes plaats voor heeft. Het vijfde is een klant die vraagt om een dedicated omgeving of specifieke compliance-garanties die je architectuur niet netjes kan bieden.',
      'Rijniveau-beveiliging, afgedwongen op databaseniveau in plaats van alleen in applicatiecode, is wat de isolatiekloof daadwerkelijk dicht. Een conventie op applicatieniveau als "altijd filteren op tenant_id" werkt totdat ergens een query dat vergeet, en precies die ene misser is het incident dat eindigt in een beveiligingsreview. Row-level security-policies in Postgres (of het equivalent in jouw database) maken de isolatiegrens iets wat de database afdwingt, zelfs als de applicatiecode een fout bevat.',
      'Isolatie testen moet adversarial zijn, niet alleen functioneel. Het is niet genoeg om te controleren dat tenant A de data van tenant A ziet; je hebt tests nodig die actief proberen tenant A de data van tenant B te laten zien via elk codepad, inclusief achtergrondtaken, cachelagen en zoekindexen, precies de plekken waar isolatiefouten zich daadwerkelijk verstoppen.',
      'De migratie zelf is meer een volgordeprobleem dan een engineeringprobleem. We beginnen meestal met de tabellen met het hoogste risico (die al prestatie- of lekkagesymptomen vertonen), voegen tenant-bewuste indexering en row-level security-policies toe achter een feature flag, valideren tegen productieverkeer in schaduwmodus, en migreren dan tabel voor tabel in plaats van in één release.',
      'Geen van deze signalen betekent dat een volledige herbouw nodig is. Echte multi-tenant architectuur is meestal een incrementele migratie: rijniveau-beveiliging, tenant-bewuste indexering en een duidelijke isolatiegrens, uitgevoerd in fasen achter het product dat je klanten al gebruiken. De kostbare versie is degene die onder druk wordt uitgevoerd, tijdens een deal, in plaats van daarvoor.'
    ]
  },
  {
    slug: 'legacy-dotnet-modernization-without-a-rewrite',
    title: 'Een legacy .NET-systeem moderniseren zonder volledige herbouw',
    excerpt: 'Een volledige herbouw is zelden het juiste antwoord voor een legacy systeem dat de bedrijfsvoering nog steeds draaiende houdt. Dit is het incrementele pad dat wij daadwerkelijk aanbevelen.',
    category: 'Enterprise',
    date: '2026-02-18',
    author: 'DigSolutions Engineeringteam',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bril met een weerspiegeling van regels code op meerdere monitoren',
    keyTakeaways: [
      'Een volledige herbouw loopt het risico stilzwijgend bedrijfsregels te laten vallen die nooit volledig zijn gedocumenteerd.',
      'Het strangler-patroon laat nieuwe services achter de legacy-interface functioneren, terwijl oude functionaliteit stap voor stap migreert.',
      'Databasemodernisering moet zich richten op de specifieke tabellen en queries die daadwerkelijk problemen veroorzaken, niet uniform op alles.',
      'Een incrementele migratie houdt de bedrijfsvoering de hele tijd draaiende, en ruilt snelheid in voor geconcentreerd, omkeerbaar risico.'
    ],
    metaDescription: 'Een praktische, incrementele aanpak voor het moderniseren van legacy .NET-systemen, zonder het risico en de kosten van een volledige herbouw.',
    relatedServiceSlugs: ['dotnet-desktop-development'],
    content: [
      'De reflex wanneer een legacy .NET Framework-systeem traag aanvoelt en lastig te wijzigen is, is om een volledige herbouw voor te stellen. Dat is zelden de juiste keuze. Een systeem dat oud genoeg aanvoelt om legacy te zijn, is meestal ook oud genoeg om jarenlange bedrijfsregels te bevatten die niemand volledig heeft gedocumenteerd, regels die een herbouw stilzwijgend zou laten vallen.',
      'Wij geven de voorkeur aan het strangler-patroon: nieuwe functionaliteit wordt gebouwd als aparte, moderne services (doorgaans .NET 8+ of een JS/TS-service waar dat passend is) die achter dezelfde interface functioneren die het legacy systeem blootstelt, terwijl oude functionaliteit stap voor stap wordt gemigreerd zodra die toch al moet worden gewijzigd.',
      'Databasemodernisering moet meestal parallel plaatsvinden, aangezien legacy schema\'s vaak dezelfde opgebouwde technische schuld dragen als de applicatiecode. We geven prioriteit aan de tabellen en queries die daadwerkelijk prestatie- of betrouwbaarheidsproblemen veroorzaken, in plaats van alles uniform te moderniseren.',
      'Karakteriseringstests komen vóór elke refactoring, niet erna. Voordat we een module met ongedocumenteerde bedrijfsregels aanraken, schrijven we tests die het huidige gedrag exact vastleggen zoals het is, fouten inbegrepen, zodat we kunnen weten of een latere wijziging een bewuste correctie was of een onbedoelde regressie. Zonder deze stap verandert het "moderniseren" van een legacy systeem stilzwijgend wat het doet, wat vaak erger is dan het niet aanraken.',
      'De overgang van teamvaardigheden is een reële kostenpost die projecttijdlijnen routinematig negeren. Een team dat tien jaar lang .NET Framework en WebForms heeft onderhouden, wordt niet in een weekend vloeiend in modern .NET en een nieuw frontend-framework door documentatie te lezen. We bouwen pairing en kennisoverdracht in het traject zelf in, niet als apart nagerecht, zodat het team van de klant het gemoderniseerde systeem kan onderhouden, niet alleen wij.',
      'Het resultaat is een systeem dat de bedrijfsvoering gedurende het hele proces blijft ondersteunen, met risico geconcentreerd in kleine, omkeerbare stappen in plaats van één hoogrisico-overgang na achttien maanden. Het duurt langer om een volledig moderne codebase te bereiken, maar het is de versie die de bedrijfsvoering onderweg niet in gevaar brengt.'
    ]
  }
]
