import type { Service } from '~/data/services'
import type { CaseStudy } from '~/data/portfolio'
import type { BlogPost } from '~/data/blog'

export const services: Service[] = [
  {
    slug: 'web-application-development',
    icon: 'lucide:layout-panel-left',
    title: 'Webanwendungsentwicklung',
    tagline: 'Full-Stack-Webplattformen und Automatisierungstools',
    summary: 'Individuelle Webanwendungen und interne Plattformen, end-to-end entwickelt mit genau der Automatisierung und den Integrationen, die ein System tatsächlich manuelle Arbeit ersetzen lassen.',
    description: 'Wir entwickeln produktive Webanwendungen und Plattformen, nicht nur Marketing-Websites: interne Tools, Content- und Media-Pipelines sowie Systeme, die sich an die übrige Software eines Unternehmens anbinden. Ein aktuelles Projekt umfasst eine automatisierte Pipeline, die Aufzeichnungen von Live-Webinaren am selben Tag in kurze Clips und Zitate verwandelt und über Social Media und E-Mail verteilt, statt wie zuvor manuell, was eine Woche oder länger dauerte.',
    capabilities: [
      'Individuelle Webplattformen und interne Tools',
      'Media- und Content-Pipelines (Erfassung, Verarbeitung, Veröffentlichung, Distribution)',
      'API-Design und Integration zwischen internen und externen Systemen',
      'Automatisierung manueller, sich wiederholender operativer Abläufe',
      'Dashboards und Admin-Oberflächen für nicht-technische Teams',
      'CI/CD-Pipelines mit Staging-Umgebungen und Demos'
    ],
    techStack: ['Next.js', 'Nuxt', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    idealFor: ['Teams, die manuelle, tabellenbasierte Prozesse ablösen möchten', 'Pipelines für Content- und Media-Distribution', 'Interne Dashboards und Admin-Tools', 'Systeme, die mit mehreren bestehenden Tools kommunizieren müssen'],
    metaTitle: 'Webanwendungsentwicklung als Dienstleistung',
    metaDescription: 'Individuelle Webanwendungsentwicklung: Plattformen, interne Tools und automatisierte Content-Pipelines, entwickelt mit Next.js, Nuxt, React und Node.js.',
    process: [
      { title: 'Den Workflow abgrenzen, nicht nur das Feature', description: 'Wir beginnen damit, den tatsächlichen manuellen Prozess, die beteiligten Tools und Übergaben zu erfassen, nicht nur die Feature-Anfrage, damit das System, das wir bauen, den echten Engpass beseitigt und nicht nur ein Symptom davon.' },
      { title: 'Datenmodell und Integrationen zuerst festlegen', description: 'Bevor die Oberfläche entsteht, legen wir fest, wie Daten zwischen Ihren bestehenden Tools und dem neuen System fließen. Integrationen nachträglich einzubauen ist der Hauptgrund, warum Projekte zeitlich aus dem Ruder laufen.' },
      { title: 'In einer sichtbaren Staging-Umgebung entwickeln', description: 'Sie erhalten ab der ersten Woche Zugriff auf eine Staging-Umgebung mit regelmäßigen Demos, keine Blackbox, die erst am Ende auftaucht.' },
      { title: 'Launchen, und weiter iterieren', description: 'Die meisten Projekte laufen über den Launch hinaus weiter, weil sich der Prozess, den die Software ersetzt, ständig weiterentwickelt und das System mit ihm mitwachsen muss.' }
    ],
    faqs: [
      { question: 'Wie lange dauert ein typisches Webanwendungsprojekt?', answer: 'Das hängt vom Umfang ab, aber die meisten ersten Versionen gehen nach 6–12 Wochen live, mit fortlaufender Iteration danach. Wir kalkulieren den Zeitplan anhand des konkreten Workflows, der ersetzt wird, nicht anhand einer pauschalen Schätzung.' },
      { question: 'Arbeiten Sie mit einer bestehenden Codebasis, oder nur an komplett neuen Projekten?', answer: 'Beides. Manche Projekte starten bei null; andere erweitern oder integrieren ein System, das Sie bereits betreiben.' },
      { question: 'Was, wenn sich unsere Anforderungen mitten im Projekt ändern?', answer: 'Das passiert häufig. Wir arbeiten gezielt in gestaffelten Meilensteinen, damit Umfangsänderungen in jeder Phase abgefangen werden, statt den gesamten Bau zu gefährden.' },
      { question: 'Wem gehören Code und Infrastruktur nach dem Launch?', answer: 'Ihnen. Sie erhalten Zugriff auf dieselben Repositories, Umgebungen und Konten, die wir für den Bau verwenden, kein System, das nur wir warten können.' }
    ]
  },
  {
    slug: 'ai-llm-integration',
    icon: 'lucide:sparkles',
    title: 'KI & individuelle LLM-Integration',
    tagline: 'KI-Funktionen, die echte Arbeit innerhalb eines bestehenden Systems leisten',
    summary: 'KI, eingebettet in eine funktionierende Pipeline, kein eigenständiger Chatbot: Sie erkennt den wichtigen Clip in einer Stunde Video oder das Produktupdate, das wirklich zählt.',
    description: 'Wir integrieren KI dort, wo sie innerhalb eines bereits von uns entwickelten Systems echten manuellen Aufwand ersetzt, statt sie als aufgesetztes Chat-Widget zu behandeln. In unserer Webinar-Distributionspipeline identifiziert KI die veröffentlichungswürdigen Clips und Zitate aus einer vollständigen Aufzeichnung. In unseren E-Commerce-ERP-Projekten zeigt KI, welche Produktupdates und Listings unter Dutzenden von SKUs tatsächlich Aufmerksamkeit brauchen. Das Ziel ist immer eine kleinere, klar definierte Aufgabe, die das Modell zuverlässig erledigen kann, eingebunden in einen Workflow, auf den sich ein Team bereits verlässt.',
    capabilities: [
      'KI-gestützte Content-Extraktion (Erkennung von Clips und Zitaten aus langen Videos)',
      'KI-gestützte Produkt- und Katalogempfehlungen',
      'Individuelle LLM-Integration in bestehende Produkte und Workflows',
      'Retrieval und Zusammenfassung über firmeneigene Daten',
      'Modellevaluierung und Zuverlässigkeitsprüfungen vor dem Go-live',
      'KI-Feature-Design mit Blick auf Kosten und Latenz'
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Python', 'Node.js', 'TypeScript', 'Vector search'],
    idealFor: ['Media- und Content-Teams mit zu viel Rohmaterial für die manuelle Verarbeitung', 'E-Commerce-Teams mit großen, schnelllebigen Katalogen', 'Interne Tools, die eine eng begrenzte, verlässliche KI-Funktion brauchen, keinen allgemeinen Chatbot'],
    metaTitle: 'Individuelle KI- & LLM-Integration als Dienstleistung',
    metaDescription: 'KI-Funktionen, eingebettet in reale Workflows: Content-Extraktion, Produktempfehlungen und individuelle LLM-Integration in bestehende Systeme.',
    process: [
      { title: 'Die enge Aufgabe finden, nicht die große Vision', description: 'Wir suchen eine konkrete, klar abgegrenzte Aufgabe innerhalb eines bestehenden Workflows, keine allgemeine KI-Funktion, die seitlich an ein Produkt angeflanscht wird.' },
      { title: 'Früh mit echten Daten prototypisieren', description: 'Wir testen das Modell ab der ersten Woche gegen tatsächliche, produktionsnahe Eingaben, denn Demo-Daten verdecken genau die Fehlermodi, auf die es in der Praxis ankommt.' },
      { title: 'Ein Evaluationsset aufbauen, bevor es live geht', description: 'Wir erstellen ein gelabeltes Set echter Beispiele, das bei jeder Prompt- oder Retrieval-Änderung weiterhin bestehen muss, damit Regressionen auffallen, bevor sie ein Kunde findet.' },
      { title: 'Für Kosten, Latenz und kontrolliertes Scheitern entwerfen', description: 'Welches Modell welche Anfrage bearbeitet, wann an einen Menschen übergeben wird und was passiert, wenn das Modell unsicher ist, sind explizite Produktentscheidungen, keine nachträglichen Überlegungen.' }
    ],
    faqs: [
      { question: 'Bauen Sie individuelle Chatbots?', answer: 'Nicht standardmäßig. Wir haben festgestellt, dass eng begrenzte, eingebettete KI-Funktionen (wie Clip-Extraktion oder Katalog-Kennzeichnung) verlässlicheren Nutzen bringen als ein allgemeines Chat-Widget. Wenn ein Chatbot wirklich das richtige Werkzeug für Ihren Workflow ist, sagen wir Ihnen das ehrlich.' },
      { question: 'Welche KI-Anbieter nutzen Sie?', answer: 'Vor allem OpenAI und Anthropic, je nach Aufgabe ausgewählt anhand von Genauigkeit, Kosten und Latenzanforderungen, nicht ein einzelner Standardanbieter.' },
      { question: 'Wie gehen Sie mit KI-Fehlern oder Halluzinationen um?', answer: 'Evaluationssets, Konfidenzschwellen und menschliches Eingreifen für alles Kundenseitige. Ein System, das sagt "Ich bin mir nicht sicher", schlägt eines, das selbstbewusst und falsch antwortet.' },
      { question: 'Können Sie KI in ein System einbauen, das Sie nicht selbst gebaut haben?', answer: 'Ja, solange wir Zugriff auf die Daten und den Workflow bekommen, in den sie eingebunden werden muss.' }
    ]
  },
  {
    slug: 'crm-erp-systems',
    icon: 'lucide:building-2',
    title: 'CRM- & ERP-Systeme',
    tagline: 'Systeme für Multichannel-Commerce und Betriebsabläufe',
    summary: 'ERP- und Betriebssysteme, die getrennte Plattformen (Amazon, Shopify, WooCommerce und ähnliche) unter einer einzigen verlässlichen Datenquelle für Produkte, Bestände und Umsätze zusammenführen.',
    description: 'Unternehmen, die über mehrere Storefronts verkaufen, verwalten Produkte, Bestände und Bestellungen oft getrennt auf jeder einzelnen Plattform. Wir entwickeln individuelle ERP- und Betriebssysteme, die diese Arbeit zentralisieren: Ein Produkt wird einmal gepflegt und automatisch mit jeder verbundenen Storefront synchronisiert, während Bestände und Umsätze an einem Ort erfasst werden, statt plattformübergreifend von Hand abgeglichen zu werden.',
    capabilities: [
      'Integration mehrerer Storefronts (Amazon, Shopify, WooCommerce und ähnliche)',
      'Zentrale Verwaltung von Produkten, Inventar und Beständen',
      'Automatische Synchronisation von Umsätzen und Beständen über verbundene Plattformen hinweg',
      'Individuelle CRM- und Pipeline-Tools für Vertriebs- und Betriebsteams',
      'Workflow-Automatisierung und Freigabeprozesse',
      'Reporting und Dashboards über alle Vertriebskanäle hinweg'
    ],
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST / platform APIs', 'React'],
    idealFor: ['Unternehmen, die über mehrere E-Commerce-Plattformen verkaufen', 'Betriebsteams, die Daten systemübergreifend von Hand abgleichen', 'Vertriebs- und Betriebsteams, die aus Tabellenkalkulationen herausgewachsen sind'],
    metaTitle: 'Individuelle CRM- & ERP-Entwicklung als Dienstleistung',
    metaDescription: 'Individuelle ERP-Systeme, die Multichannel-E-Commerce (Amazon, Shopify, WooCommerce) in einer einzigen verlässlichen Datenquelle für Produkte und Bestände vereinen.',
    process: [
      { title: 'Jede Storefront und jedes System erfassen, das Sie heute manuell abgleichen', description: 'Bevor wir Code schreiben, dokumentieren wir genau, welche Plattformen, Tabellenkalkulationen und manuellen Schritte Ihre Produkt- und Bestandsdaten heute synchron halten.' },
      { title: 'Das System als verlässliche Datenquelle konzipieren', description: 'Ihr neues ERP-System besitzt die Produkt-, Bestands- und Preisdaten; jede Storefront wird zu einem synchronisierten Kanal statt zu einem separaten, manuell zu pflegenden System.' },
      { title: 'Eine Storefront nach der anderen migrieren', description: 'Wir verbinden und validieren eine Plattform, bevor wir zur nächsten übergehen, damit ein Fehler in einer Integration nicht die Daten aller anderen beschädigen kann.' },
      { title: 'Reporting und Automatisierung zuletzt einbauen', description: 'Dashboards, Freigabeprozesse und KI-gestützte Hinweise kommen erst hinzu, wenn die grundlegende Synchronisation stabil läuft, nicht vorher.' }
    ],
    faqs: [
      { question: 'Mit welchen Plattformen integrieren Sie?', answer: 'Am häufigsten mit Amazon, Shopify und WooCommerce; auf Anfrage haben wir auch individuelle Integrationen mit anderen Storefront- und Marktplatz-APIs gebaut.' },
      { question: 'Ersetzt das unser bestehendes CRM/ERP vollständig?', answer: 'Kommt auf Ihre Ausgangslage an. Manche Projekte ersetzen einen Flickenteppich aus Tabellenkalkulationen und manuellem Abgleich vollständig; andere erweitern ein bestehendes System um die fehlenden Integrationen.' },
      { question: 'Was passiert mit unseren Daten während der Migration?', answer: 'Wir migrieren und validieren die Daten Storefront für Storefront, während Ihre bestehenden Systeme parallel weiterlaufen, bis jede Verbindung geprüft ist.' },
      { question: 'Kann das System später um weitere Vertriebskanäle wachsen?', answer: 'Ja. Eine neue Storefront hinzuzufügen wird zu einer weiteren Integration auf Basis einer bestehenden verlässlichen Datenquelle, nicht zu einem Neuentwurf.' }
    ]
  },
  {
    slug: 'dotnet-desktop-development',
    icon: 'lucide:monitor',
    title: '.NET- & Desktop-Anwendungen',
    tagline: '.NET-Webplattformen, Angular-Frontends und native Windows-Desktopsoftware',
    summary: '.NET-Backends, Angular-Frontends und native Desktopanwendungen für Unternehmen, die Software brauchen, die direkt auf Windows-Rechnern läuft, nicht nur im Browser.',
    description: 'Manche Arbeitsabläufe gehören nach wie vor auf den Desktop: Kassensysteme, interne Betriebstools und Software, die direkten Zugriff auf lokale Hardware oder Dateien braucht, ohne dass ein Browser im Weg steht. Wir entwickeln durchgängig auf dem .NET-Stack, C#-Backends und -Services, Angular-Frontends für die Web-Seite eines .NET-Systems sowie native Windows-Desktopanwendungen, für Teams, deren Tools außerhalb des Browsers laufen müssen.',
    capabilities: [
      'Native Windows-Desktopanwendungen (WPF / WinForms)',
      '.NET / C#-Backend-Services und APIs',
      'Angular-Frontends für .NET-basierte Webanwendungen',
      'Desktop-zu-Cloud-Synchronisation (lokale App kommuniziert mit gehostetem Backend)',
      'Wartung und Modernisierung bestehender .NET-Altanwendungen',
      'Installer-Paketierung und Update-Distribution für Desktopsoftware'
    ],
    techStack: ['.NET / C#', 'Angular', 'WPF', 'WinForms', 'SQL Server'],
    idealFor: ['Unternehmen, die Software für lokale Windows-Rechner benötigen', 'Kassensysteme und interne Betriebstools', 'Teams mit einer bestehenden .NET-Codebasis, die erweitert oder modernisiert werden soll'],
    metaTitle: '.NET- & Windows-Desktopanwendungsentwicklung',
    metaDescription: '.NET-Backends, Angular-Frontends und native Windows-Desktopanwendungen (WPF/WinForms) für Software, die außerhalb des Browsers laufen muss.',
    process: [
      { title: 'Verstehen, was wirklich außerhalb des Browsers laufen muss', description: 'Zugriff auf lokale Hardware, Offline-Nutzung oder eine Legacy-Abhängigkeit sind häufige Gründe; wir bestätigen die Desktop-Anforderung, bevor wir sie standardmäßig annehmen.' },
      { title: 'Die bestehende .NET-Codebasis bewerten, falls vorhanden', description: 'Bei Modernisierungsprojekten identifizieren wir zunächst, welche Teile eines Legacy-Systems tragend sind, bevor wir sie anfassen, damit vor Jahren kodierte Geschäftsregeln nicht stillschweigend verloren gehen.' },
      { title: 'Backend und Oberfläche parallel und von Anfang an integriert entwickeln', description: 'C#-Services und die Angular- oder Desktop-Oberfläche werden von Beginn des Baus an verbunden, nicht erst am Ende zusammengefügt.' },
      { title: 'Mit einem echten Update-Pfad paketieren und ausliefern', description: 'Installer-Paketierung und Update-Distribution sind Teil des Liefergegenstands, nicht etwas, das später jemand anderes lösen muss.' }
    ],
    faqs: [
      { question: 'Bauen Sie nur neue Desktop-Anwendungen, oder pflegen Sie auch bestehende?', answer: 'Beides. Ein großer Teil unserer .NET-Arbeit besteht darin, ein bestehendes Legacy-System zu modernisieren oder zu erweitern, statt von null zu bauen.' },
      { question: 'Warum bräuchten wir eine Desktop-App statt einer Web-App?', answer: 'Typischerweise wegen direktem Hardware- oder Dateizugriff, Offline-Anforderungen oder einem bestehenden Kassen-/Betriebstool, das bereits auf Windows-Rechnern läuft. Wir sagen Ihnen ehrlich, wenn eine Web-App die bessere Wahl wäre.' },
      { question: 'Verwenden Sie WPF oder WinForms?', answer: 'Kommt auf das Projekt an. Wir arbeiten mit beidem und empfehlen anhand dessen, was zu Ihrer bestehenden Codebasis und Ihren Anforderungen passt, nicht anhand einer Standardpräferenz.' },
      { question: 'Kann die Desktop-App mit Cloud-Diensten kommunizieren?', answer: 'Ja, Desktop-zu-Cloud-Synchronisation (eine lokale App, die mit einem gehosteten Backend kommuniziert) ist eine Fähigkeit, die wir regelmäßig umsetzen.' }
    ]
  }
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-webinar-clip-distribution',
    title: 'Live-Webinare werden am selben Tag zu Social- und E-Mail-Content',
    client: 'Eine Gesundheitsorganisation in Europa',
    industry: 'Gesundheitswesen (Europa)',
    serviceSlug: 'ai-llm-integration',
    timeline: 'Laufendes Projekt',
    icon: 'lucide:video',
    summary: 'Eine automatisierte Pipeline entwickelt, die die besten Clips und Zitate aus Live-Webinaren extrahiert und noch am selben Tag über Social Media und E-Mail verteilt, statt wie zuvor mit ein bis zwei Wochen Verzögerung.',
    challenge: 'Die Organisation veranstaltete regelmäßig Live-Webinare mit wertvollen Momenten und Zitaten verschiedener Sprecherinnen und Sprecher, doch die Umwandlung dieses Materials in kurze Clips und deren Verteilung über Social Media und E-Mail war ein vollständig manueller Prozess. Bis der Content veröffentlicht wurde, war meist schon eine bis zwei Wochen nach dem Webinar vergangen, lange nachdem das Publikum noch interessiert war.',
    approach: 'Wir haben analysiert, woher die Verzögerung tatsächlich kam: Jemand musste die komplette Aufzeichnung erneut ansehen, die besten Momente manuell finden, Clips schneiden und diese anschließend separat über die einzelnen Kanäle verteilen. Diese gesamte Kette, nicht nur ein einzelner Schritt, musste automatisiert werden, damit das Zeitproblem tatsächlich verschwindet.',
    solution: 'Wir haben eine Pipeline entwickelt, die jede Webinar-Aufzeichnung direkt nach deren Ende verarbeitet, per KI die veröffentlichungswürdigen Clips und Zitate jeder sprechenden Person identifiziert und diese automatisch über die Social-Media- und E-Mail-Kanäle der Organisation verteilt. Was früher eine Woche oder mehr an manuellem Schnitt und Planung erforderte, geht heute noch am Tag des Webinars live.',
    results: [
      { label: 'Verzögerung bis zur Veröffentlichung', value: 'Von Wochen auf denselben Tag' },
      { label: 'Manuelle Schnittarbeit', value: 'Automatisiert' },
      { label: 'Vertriebskanäle', value: 'Social Media + E-Mail, automatisch' }
    ],
    tags: ['AI/LLM', 'Medienautomatisierung', 'Webplattform']
  },
  {
    slug: 'multi-channel-ecommerce-erp',
    title: 'Ein System zur Produktverwaltung über Amazon, Shopify und WooCommerce hinweg',
    client: 'Ein Multichannel-E-Commerce-Händler',
    industry: 'E-Commerce / Einzelhandel',
    serviceSlug: 'crm-erp-systems',
    timeline: 'Laufendes Projekt',
    icon: 'lucide:layers',
    summary: 'Ein zentrales ERP-System entwickelt, das sich mit den Storefronts von Amazon, Shopify und WooCommerce verbindet, sodass Produkte, Bestände und Umsätze an einem Ort statt getrennt auf jeder Plattform verwaltet werden.',
    challenge: 'Das Unternehmen verkaufte dieselben Produkte über Amazon, Shopify und WooCommerce, verwaltete Bestände und Listings jedoch getrennt auf jeder Plattform. Bestandszahlen und Produktdetails über drei Systeme hinweg konsistent zu halten, bedeutete doppelte manuelle Arbeit und ein reales Risiko von Überverkäufen, wenn Bestände nicht überall rechtzeitig aktualisiert wurden.',
    approach: 'Statt zu versuchen, die drei Storefronts direkt miteinander kommunizieren zu lassen, haben wir ein zentrales System entwickelt, das die Produkt- und Bestandsdaten verwaltet, wobei jede Storefront als angebundener Kanal behandelt wird, der mit diesem System synchronisiert. Dadurch fiel die Integrationsarbeit einmal pro Plattform an, statt individuelle Logik zwischen jedem Systempaar zu erfordern.',
    solution: 'Das ERP-System ist heute die einzige Stelle, an der Produkte, Bestände und Preise verwaltet werden. Es verbindet sich mit der API jeder Storefront und synchronisiert Umsätze und Bestände automatisch, sobald auf einem beliebigen Kanal eine Bestellung eingeht, sodass das Team ein Produkt einmal statt dreimal pflegt. KI-gestützte Empfehlungen zeigen an, welche Produkte und Listings basierend auf Umsatz- und Bestandsmustern über alle Kanäle hinweg Aufmerksamkeit brauchen.',
    results: [
      { label: 'Vereinte Storefronts', value: 'Amazon, Shopify, WooCommerce' },
      { label: 'Produktverwaltung', value: 'Eine einzige verlässliche Datenquelle' },
      { label: 'Bestands- & Umsatzsynchronisation', value: 'Automatisch, plattformübergreifend' }
    ],
    tags: ['ERP', 'E-Commerce-Integration', 'AI']
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-between-nextjs-nuxt-and-angular',
    title: 'Next.js, Nuxt oder Angular: Die richtige Wahl für Ihr nächstes Projekt',
    excerpt: 'Die Framework-Wahl ist eine der folgenreichsten technischen Entscheidungen eines neuen Projekts und zugleich eine der am meisten überdiskutierten. So entscheiden wir tatsächlich.',
    category: 'Engineering',
    date: '2026-07-14',
    author: 'DigSolutions Engineering',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Nahaufnahme von farbig hervorgehobenem Code auf einem Monitor',
    keyTakeaways: [
      'Die Framework-Wahl sollte sich am Hintergrund des Teams, am Hosting-Setup und am Verhältnis von Content zu Interaktion orientieren, nicht an Trends.',
      'Next.js und Nuxt lösen dasselbe Problem für React beziehungsweise Vue: Entscheiden Sie danach, welches Denkmodell Ihr Team bereits mitbringt.',
      'Die Struktur von Angular zahlt sich vor allem für große, langlebige Enterprise-Teams aus, nicht für kleine Startup-Teams.',
      'Optimieren Sie darauf, womit Ihr Team auch in drei Jahren noch gut zurechtkommt.'
    ],
    metaDescription: 'Ein praktischer Leitfaden zur Wahl zwischen Next.js, Nuxt, React, Vue und Angular, basierend auf Team, Zeitplan und Produktanforderungen, nicht auf Trends.',
    relatedServiceSlugs: ['web-application-development', 'dotnet-desktop-development'],
    content: [
      'Jede Framework-Debatte im Netz behandelt die Wahl als Glaubensfrage. In der Praxis wird das richtige Framework für ein Projekt von einer kleinen Zahl konkreter Faktoren bestimmt: was Ihr Team bereits kennt, wie Ihr Hosting und Ihre Infrastruktur aussehen, wie content- oder interaktionslastig das Produkt ist und wie lange die Codebasis bestehen muss.',
      'Next.js und Nuxt verdanken ihre Popularität der Tatsache, dass sie dasselbe zugrunde liegende Problem lösen, Server-Rendering, Routing und Datenabfrage in einem einzigen, in sich stimmigen Framework, für React beziehungsweise Vue. Wenn Ihr Team bereits in React denkt, nimmt Next.js Reibung heraus. Wenn Ihr Team in Vues einfacherem, stärker templategetriebenem Denkmodell arbeitet, erledigt Nuxt dieselbe Aufgabe mit weniger Aufwand.',
      'Angular ist häufiger die richtige Wahl, als sein Ruf vermuten lässt, insbesondere für große Enterprise-Teams, die Wert auf eine klar vorgegebene Struktur, eingebaute Dependency Injection und langfristige Stabilität statt Flexibilität legen. Ein zwanzigköpfiges Team, das ein System über ein Jahrzehnt pflegt, profitiert von den Leitplanken von Angular auf eine Weise, wie es ein fünfköpfiges Startup-Team nicht tut.',
      'Die Rendering-Strategie ist der Punkt, an dem die Framework-Wahl wirklich zählt, nicht die Syntax. Eine Marketing-Website oder ein Blog braucht statische Generierung: einmal bauen, über ein CDN ausliefern und Rendering bei jeder Anfrage vermeiden. Ein Dashboard hinter einem Login braucht Client-seitiges Rendering, da es ohnehin nichts zu indexieren gibt und die Daten pro Nutzer unterschiedlich sind. Die meisten realen Produkte brauchen eine Mischung, und genau hier rechtfertigen Next.js und Nuxt ihre Komplexität: Rendering-Modi pro Route (statisch, serverseitig gerendert, inkrementell regeneriert) statt einer projektweiten Alles-oder-nichts-Entscheidung.',
      'SEO-Anforderungen verändern die Rechnung stärker, als die meisten Teams zu Beginn erwarten. Eine content-lastige Marketing-Website oder ein mehrsprachiger Shop braucht echtes, serverseitig gerendertes HTML für Crawler und einen schnellen ersten Seitenaufbau, was die Waage zugunsten von Next.js oder Nuxt gegenüber einer reinen Client-seitigen Angular-SPA neigt. Ein internes Admin-Tool hat überhaupt keine SEO-Anforderung, was diese Einschränkung vollständig entfernt und die Entscheidung zurück zur Vertrautheit des Teams und zum Komponenten-Ökosystem verschiebt.',
      'Migrationskosten sind der Faktor, den Teams am stärksten unterschätzen. Ein fünfköpfiges Team von Vue zu React (oder umgekehrt) zu bewegen, nur um einem Framework hinterherzulaufen, ist nicht kostenlos: Es bedeutet Wochen reduzierter Geschwindigkeit, während Menschen Idiome neu lernen, die sie bereits beherrschten. Wir haben Anfragen nach dem Motto "Lasst uns auf X modernisieren" abgelehnt, wenn der bestehende Stack gut funktionierte und die eigentliche Beschwerde ein unabhängiges Architekturproblem war, das jedes Framework gleichermaßen geerbt hätte.',
      'Der Fehler, den wir am häufigsten sehen, ist die Wahl eines Frameworks danach, was gerade im Trend liegt, statt danach, womit das Team auch in drei Jahren noch gut zurechtkommt. Wir beginnen jedes Projekt damit, die tatsächlichen Rahmenbedingungen zu erfassen, Team-Hintergrund, Integrationsanforderungen, SEO-Bedarf, Zeitplan, bevor wir einen Stack empfehlen, und sagen einem potenziellen Kunden auch dann, beim bestehenden Framework zu bleiben, wenn das die richtige Entscheidung ist, selbst wenn es für uns ein kleineres Projekt bedeutet.'
    ]
  },
  {
    slug: 'production-grade-rag-lessons',
    title: 'Was wir beim Aufbau produktiver RAG-Systeme für Enterprise-Kunden gelernt haben',
    excerpt: 'Retrieval-Augmented Generation wirkt in der Demo einfach und wird im produktiven Einsatz schnell schwierig. Das sind die Fehlerquellen, auf die wir tatsächlich gestoßen sind.',
    category: 'AI & LLMs',
    date: '2026-06-02',
    author: 'DigSolutions AI Practice',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Serverschrank mit beleuchteter Netzwerkverkabelung',
    keyTakeaways: [
      'Chunking und Dokumentstruktur beeinflussen die Antwortqualität stärker als die Wahl des LLM.',
      'Bauen Sie vor dem Launch ein gelabeltes Evaluationsset aus echten Anfragen auf und führen Sie es bei jeder Prompt- oder Retrieval-Änderung erneut aus.',
      'Ein System, das „Ich bin mir nicht sicher" sagt, ist besser als eines, das selbstbewusst und falsch antwortet.',
      'Kosten, Latenz und Modell-Routing sind Produktentscheidungen, keine nachrangigen Infrastrukturfragen.'
    ],
    metaDescription: 'Erkenntnisse aus dem Aufbau produktiver Retrieval-Augmented-Generation-Systeme (RAG) für Enterprise-Kunden: Chunking, Evaluation und die Schutzmechanismen, auf die es ankommt.',
    relatedServiceSlugs: ['ai-llm-integration'],
    content: [
      'Eine RAG-Demo ist einfach: einige Dokumente einbetten, die besten Treffer abrufen, in einen Prompt packen. Produktives RAG ist eine völlig andere Disziplin, und die meisten schwierigen Probleme liegen außerhalb des Modells.',
      'Die Chunking-Strategie zählt mehr als die Modellwahl. Schlecht aufgeteilte Dokumente, mitten im Satz abgeschnitten, ohne Überschriften, ohne Metadaten, erzeugen selbstbewusst falsche Antworten, unabhängig davon, welches LLM dahinterliegt. Wir verbringen einen überproportionalen Teil der frühen Projektphase mit Dokumentstruktur und Metadaten, bevor wir die Retrieval-Pipeline überhaupt anfassen.',
      'Evaluation muss aufgebaut werden, bevor das Feature live geht, nicht erst, wenn sich Nutzerinnen und Nutzer beschweren. Wir bauen früh in jedem Projekt ein kleines, gelabeltes Evaluationsset aus echten Anfragen auf und führen es bei jeder Prompt- oder Retrieval-Änderung erneut aus, damit Regressionen auffallen, bevor ein Kunde sie findet.',
      'Reine Vektor-Ähnlichkeitssuche versagt bei Anfragen, die von einem exakten Begriff, einem Produktcode oder einem Namen abhängen, den das Embedding-Modell nicht stark gewichtet. Hybride Suche, die Vektor-Ähnlichkeit mit Keyword-/BM25-Abgleich kombiniert und die zusammengeführten Ergebnisse neu bewertet, schlägt beide Ansätze einzeln konsequent, sobald der Dokumentbestand groß oder die Anfragen spezifisch werden. Sie ist aufwendiger zu bauen und abzustimmen, und das lohnt sich für alles, was über eine kleine, homogene Wissensbasis hinausgeht.',
      'Metadaten-Filterung ist es, was Retrieval im großen Maßstab vertrauenswürdig macht, nicht nur genau. Chunks mit Quelle, Datum, Zugriffsebene und Dokumenttyp zu markieren, erlaubt es, das Retrieval einzugrenzen, bevor die Ähnlichkeitssuche überhaupt läuft, was sowohl für die Antwortqualität wichtig ist (kein überholtes Richtliniendokument abrufen) als auch für die Zugriffskontrolle (kein Dokument abrufen, das diese Person nicht sehen darf, egal wie gut es zur Anfrage passt).',
      'Schutzmechanismen und Vertrauenssignale sind genauso wichtig wie Genauigkeit. Ein System, das sagt „Ich bin mir nicht sicher, hier ist eine Ansprechperson", schneidet besser ab als eines, das selbstbewusst und falsch antwortet, besonders in Support- und compliance-nahen Anwendungsfällen, in denen eine falsche Antwort mehr kostet als eine langsame.',
      'Observability muss von Tag eins an eingebaut werden, nicht erst, wenn etwas kaputtgeht. Wir protokollieren die abgerufenen Chunks zusammen mit der generierten Antwort bei jeder produktiven Anfrage, nicht nur das Endergebnis, denn wenn eine Antwort falsch ist, liegt der Fehler fast immer im Retrieval, und man kann nicht debuggen, was man nicht erfasst hat.',
      'Kosten und Latenz sind Produktentscheidungen, keine nachrangigen Infrastrukturfragen. Welches Modell welche Anfrage bearbeitet, wann gecacht wird und wann ein kleineres Modell ausreicht, sind Entscheidungen, die wir bewusst treffen, weil sie die Unit Economics des Features verändern.'
    ]
  },
  {
    slug: 'signs-your-saas-needs-real-multi-tenancy',
    title: '5 Anzeichen, dass Ihr SaaS-Produkt echte Multi-Tenant-Architektur braucht',
    excerpt: 'Viele frühe SaaS-Produkte täuschen Multi-Tenancy nur vor, bis es nicht mehr funktioniert. So erkennen Sie, dass Sie diesen Punkt erreicht haben, bevor es ein Enterprise-Kunde tut.',
    category: 'SaaS',
    date: '2026-04-21',
    author: 'DigSolutions Engineering',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gründerin arbeitet an einem Laptop an einem Cafétisch',
    keyTakeaways: [
      'Eine gemeinsame Datenbank mit einer customer_id-Spalte ist keine echte Multi-Tenancy und bricht in der Regel während der Einkaufsprüfung auf.',
      'Achten Sie auf Einzelskripte zur Behebung von Datenlecks zwischen Mandanten und auf unvorhersehbare Abfrageleistung durch Ihren größten Kunden.',
      'Kundenspezifischer Konfigurationsbedarf und Compliance-Anfragen sind späte Warnsignale.',
      'Eine echte Multi-Tenant-Migration erfolgt meist schrittweise, im Vorfeld eines Abschlusses statt unter Druck während eines Abschlusses.'
    ],
    metaDescription: 'Wie Sie erkennen, dass ein SaaS-Produkt seiner frühen Datenarchitektur entwachsen ist und echte Multi-Tenant-Isolation braucht, bevor sie zum Hindernis wird.',
    relatedServiceSlugs: ['web-application-development', 'crm-erp-systems'],
    content: [
      'Die meisten SaaS-Produkte starten mit einem Datenmodell, das technisch mehrere Kunden unterstützt, aber nicht dafür entworfen wurde: eine einzelne gemeinsame Datenbank mit einer nachträglich angefügten customer_id-Spalte. Das funktioniert gut, bis es das nicht mehr tut, und dieser Moment tritt meist zum denkbar ungünstigsten Zeitpunkt ein: mitten in einem Enterprise-Vertriebszyklus.',
      'Das erste Anzeichen ist ein Interessent, der während der Einkaufsprüfung nach Garantien zur Datenisolation fragt. Das zweite ist eine Entwicklerin oder ein Entwickler, die oder der ein Einzelskript schreiben muss, um Daten zu korrigieren, die über Mandantengrenzen hinweg ausgetreten sind. Das dritte ist eine Abfrageleistung, die unvorhersehbar sinkt, während das Datenvolumen Ihres größten Kunden wächst und andere auf denselben Tabellen zu beeinträchtigen beginnt.',
      'Das vierte Anzeichen ist der Bedarf an kundenspezifischer Konfiguration, Feature-Flags, benutzerdefinierten Feldern und unterschiedlichen Aufbewahrungsrichtlinien, verbunden mit der Erkenntnis, dass das aktuelle Schema dafür keinen sauberen Platz bietet. Das fünfte ist ein Kunde, der nach einer dedizierten Umgebung oder bestimmten Compliance-Garantien fragt, die Ihre Architektur nicht sauber liefern kann.',
      'Sicherheit auf Zeilenebene, durchgesetzt in der Datenbankschicht statt nur im Anwendungscode, schließt die Isolationslücke tatsächlich. Eine anwendungsseitige Konvention wie „immer nach tenant_id filtern" funktioniert, bis irgendwo eine Abfrage das vergisst, und genau dieser eine Ausrutscher ist der Vorfall, der in einer Sicherheitsprüfung landet. Row-Level-Security-Policies in Postgres (oder das Äquivalent in Ihrer Datenbank) machen die Isolationsgrenze zu etwas, das die Datenbank durchsetzt, selbst wenn der Anwendungscode einen Fehler enthält.',
      'Isolation zu testen muss angriffsorientiert sein, nicht nur funktional. Es reicht nicht zu prüfen, dass Mandant A die Daten von Mandant A sieht; es braucht Tests, die aktiv versuchen, Mandant A die Daten von Mandant B über jeden Codepfad sehen zu lassen, einschließlich Hintergrundjobs, Caching-Schichten und Suchindizes, genau dort, wo sich Isolationsfehler tatsächlich verstecken.',
      'Die Migration selbst ist eher ein Sequenzierungs- als ein Engineering-Problem. Wir beginnen typischerweise mit den risikoreichsten Tabellen (denen, die bereits Leistungs- oder Leck-Symptome zeigen), fügen mandantenbewusste Indizierung und Row-Level-Security-Policies hinter einem Feature-Flag hinzu, validieren gegen Produktionstraffic im Schattenmodus und stellen dann Tabelle für Tabelle um, statt in einem einzigen Release.',
      'Keines dieser Anzeichen bedeutet einen kompletten Neubau. Echte Multi-Tenant-Architektur ist meist eine schrittweise Migration: Sicherheit auf Zeilenebene, mandantenbewusste Indizierung und eine klare Isolationsgrenze, umgesetzt in Phasen hinter dem Produkt, das Ihre Kunden bereits nutzen. Teuer wird es nur in der Version, die unter Druck, während eines Abschlusses, statt im Vorfeld umgesetzt wird.'
    ]
  },
  {
    slug: 'legacy-dotnet-modernization-without-a-rewrite',
    title: 'Ein Legacy-.NET-System modernisieren, ohne es komplett neu zu schreiben',
    excerpt: 'Ein kompletter Neuaufbau ist für ein Legacy-System, das noch immer den Geschäftsbetrieb trägt, selten die richtige Antwort. Das ist der schrittweise Weg, den wir tatsächlich empfehlen.',
    category: 'Enterprise',
    date: '2026-02-18',
    author: 'DigSolutions Engineering',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Brille spiegelt Codezeilen auf mehreren Monitoren',
    keyTakeaways: [
      'Ein kompletter Neuaufbau riskiert, Geschäftsregeln stillschweigend zu verlieren, die nie vollständig dokumentiert wurden.',
      'Das Strangler-Pattern lässt neue Services hinter der Legacy-Schnittstelle sitzen, während alte Funktionalität Stück für Stück migriert wird.',
      'Die Modernisierung der Datenbank sollte gezielt die Tabellen und Abfragen adressieren, die tatsächlich Probleme verursachen, nicht alles gleichmäßig.',
      'Eine schrittweise Migration hält den Geschäftsbetrieb durchgehend am Laufen und tauscht Geschwindigkeit gegen konzentriertes, umkehrbares Risiko.'
    ],
    metaDescription: 'Ein praktischer, schrittweiser Ansatz zur Modernisierung von Legacy-.NET-Systemen, ohne das Risiko und die Kosten eines kompletten Neuaufbaus.',
    relatedServiceSlugs: ['dotnet-desktop-development'],
    content: [
      'Der Reflex, wenn sich ein Legacy-.NET-Framework-System langsam und schwer veränderbar anfühlt, ist der Vorschlag eines kompletten Neuaufbaus. Das ist selten die richtige Entscheidung. Ein System, das alt genug wirkt, um als Legacy zu gelten, kodiert meist jahrelange Geschäftsregeln, die niemand vollständig dokumentiert hat, Regeln, die ein Neuaufbau stillschweigend fallen lässt.',
      'Wir bevorzugen das Strangler-Pattern: Neue Funktionalität wird als separate, moderne Services (in der Regel .NET 8+ oder, wo passend, ein JS/TS-Service) gebaut, die hinter derselben Schnittstelle sitzen, die das Legacy-System bereitstellt, während alte Funktionalität Stück für Stück migriert wird, sobald sie ohnehin geändert werden muss.',
      'Die Modernisierung der Datenbank muss meist parallel erfolgen, da Legacy-Schemas oft dieselbe Altlast tragen wie der Anwendungscode. Wir priorisieren die Tabellen und Abfragen, die tatsächlich Leistungs- oder Zuverlässigkeitsprobleme verursachen, statt alles gleichmäßig zu modernisieren.',
      'Charakterisierungstests kommen vor jedem Refactoring, nicht danach. Bevor wir ein Modul mit undokumentierten Geschäftsregeln anfassen, schreiben wir Tests, die sein aktuelles Verhalten exakt so erfassen, wie es ist, Fehler eingeschlossen, damit wir wissen, ob eine spätere Änderung eine bewusste Korrektur oder eine versehentliche Regression war. Ohne diesen Schritt verändert die "Modernisierung" eines Legacy-Systems stillschweigend, was es tut, was oft schlimmer ist, als es nicht anzufassen.',
      'Der Kompetenzübergang im Team ist ein realer Kostenfaktor, den Projektzeitpläne routinemäßig ignorieren. Ein Team, das ein Jahrzehnt lang .NET Framework und WebForms gepflegt hat, wird nicht an einem Wochenende durch Dokumentation lesen fließend in modernem .NET und einem neuen Frontend-Framework. Wir bauen Pairing und Wissenstransfer in das Projekt selbst ein, nicht als separaten Nachgang, damit das Team des Kunden das modernisierte System warten kann, nicht nur wir.',
      'Das Ergebnis ist ein System, das den Geschäftsbetrieb während des gesamten Prozesses aufrechterhält, mit Risiko, das auf kleine, umkehrbare Schritte konzentriert ist, statt auf eine einzelne folgenreiche Umstellung achtzehn Monate später. Es dauert länger, bis eine vollständig moderne Codebasis erreicht ist, aber es ist die Variante, die den Geschäftsbetrieb auf dem Weg dorthin nicht aufs Spiel setzt.'
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
