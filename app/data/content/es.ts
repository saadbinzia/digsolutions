import type { Service } from '~/data/services'
import type { CaseStudy } from '~/data/portfolio'
import type { BlogPost } from '~/data/blog'

export const services: Service[] = [
  {
    slug: 'web-application-development',
    icon: 'lucide:layout-panel-left',
    title: 'Desarrollo de Aplicaciones Web',
    tagline: 'Plataformas web full-stack y herramientas de automatización',
    summary: 'Aplicaciones web y plataformas internas a medida, desarrolladas de principio a fin con la automatización e integraciones que hacen que un sistema realmente reemplace el trabajo manual.',
    description: 'Desarrollamos aplicaciones web y plataformas en producción, no solo sitios de marketing: herramientas internas, pipelines de contenido y medios, y sistemas que se conectan con el resto del software que una empresa ya utiliza. Un trabajo reciente incluye un pipeline automatizado que convierte grabaciones de webinars en vivo en clips y citas breves y los distribuye por redes sociales y correo electrónico el mismo día, reemplazando un proceso manual que antes tardaba una semana o más.',
    capabilities: [
      'Plataformas web a medida y herramientas internas',
      'Pipelines de contenido y medios (ingesta, procesamiento, publicación, distribución)',
      'Diseño de APIs e integración entre sistemas internos y de terceros',
      'Automatización de flujos de trabajo operativos manuales y repetitivos',
      'Paneles de control e interfaces de administración para equipos no técnicos',
      'Pipelines de CI/CD con entornos de staging y demostraciones'
    ],
    techStack: ['Next.js', 'Nuxt', 'React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    idealFor: ['Equipos que reemplazan procesos manuales basados en hojas de cálculo', 'Pipelines de distribución de contenido y medios', 'Paneles de control internos y herramientas de administración', 'Sistemas que necesitan comunicarse con varias herramientas existentes'],
    metaTitle: 'Servicios de Desarrollo de Aplicaciones Web',
    metaDescription: 'Desarrollo de aplicaciones web a medida: plataformas, herramientas internas y pipelines de contenido automatizados construidos con Next.js, Nuxt, React y Node.js.',
    process: [
      { title: 'Delimitar el flujo de trabajo, no solo la función', description: 'Empezamos por mapear el proceso manual real, las herramientas y las transferencias de trabajo involucradas, no solo la función solicitada, para que el sistema que construimos elimine el cuello de botella real y no un síntoma de él.' },
      { title: 'Diseñar primero el modelo de datos y las integraciones', description: 'Antes de trabajar en la interfaz, definimos cómo fluyen los datos entre sus herramientas existentes y el nuevo sistema. Añadir integraciones después es lo que más suele descontrolar el cronograma de un proyecto.' },
      { title: 'Construir en un entorno de staging que usted pueda ver', description: 'Tiene acceso a un entorno de staging desde la primera semana, con demostraciones periódicas, no una caja negra que aparece al final del proyecto.' },
      { title: 'Lanzar, y seguir iterando', description: 'La mayoría de los proyectos continúan después del lanzamiento, porque el proceso que el software reemplaza sigue evolucionando y el sistema tiene que evolucionar con él.' }
    ],
    faqs: [
      { question: '¿Cuánto dura normalmente un proyecto de aplicación web?', answer: 'Depende del alcance, pero la mayoría de las primeras versiones salen en 6-12 semanas, con iteración continua después. Calculamos el cronograma según el flujo de trabajo específico que se está reemplazando, no una estimación genérica.' },
      { question: '¿Trabajan con una base de código existente, o solo con proyectos desde cero?', answer: 'Ambos casos. Algunos proyectos empiezan de cero; otros implican ampliar o integrar un sistema que usted ya utiliza.' },
      { question: '¿Qué pasa si nuestros requisitos cambian a mitad del proyecto?', answer: 'Suele pasar. Trabajamos en hitos por etapas justamente para que los cambios de alcance se absorban en cada etapa en lugar de descontrolar toda la construcción.' },
      { question: '¿Quién es dueño del código y la infraestructura después del lanzamiento?', answer: 'Usted. Tiene acceso a los mismos repositorios, entornos y cuentas que usamos para construirlo, no a un sistema que solo nosotros podemos mantener.' }
    ]
  },
  {
    slug: 'ai-llm-integration',
    icon: 'lucide:sparkles',
    title: 'IA e Integración de LLM a Medida',
    tagline: 'Funciones de IA que realizan trabajo real dentro de un sistema existente',
    summary: 'IA integrada en un pipeline en funcionamiento, no un chatbot independiente: identifica el clip importante en una hora de video, o la actualización de producto que realmente importa.',
    description: 'Integramos IA donde elimina esfuerzo manual real dentro de un sistema que ya hemos construido, en lugar de añadirla como un widget de chat sobrepuesto. En nuestro pipeline de distribución de webinars, la IA identifica los clips y citas que vale la pena publicar de una grabación completa. En nuestro trabajo de ERP para e-commerce, la IA señala qué actualizaciones de producto y fichas realmente necesitan atención entre docenas de referencias (SKU). El objetivo siempre es una tarea más pequeña y bien definida que el modelo pueda realizar de forma fiable, integrada en un flujo de trabajo del que un equipo ya depende.',
    capabilities: [
      'Extracción de contenido asistida por IA (identificación de clips y citas en video de larga duración)',
      'Recomendaciones de producto y catálogo asistidas por IA',
      'Integración de LLM a medida en productos y flujos de trabajo existentes',
      'Recuperación y resumen de información sobre datos propios',
      'Evaluación de modelos y verificaciones de fiabilidad antes de salir a producción',
      'Diseño de funciones de IA con criterios de costo y latencia'
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Python', 'Node.js', 'TypeScript', 'Vector search'],
    idealFor: ['Equipos de medios y contenido con demasiado material sin procesar para revisar manualmente', 'Equipos de e-commerce que gestionan catálogos grandes y de movimiento rápido', 'Herramientas internas que necesitan una función de IA acotada y fiable, no un chatbot genérico'],
    metaTitle: 'Servicios de Integración de IA y LLM a Medida',
    metaDescription: 'Funciones de IA integradas en flujos de trabajo reales: extracción de contenido, recomendaciones de producto e integración de LLM a medida en sistemas existentes.',
    process: [
      { title: 'Encontrar la tarea acotada, no la visión amplia', description: 'Buscamos una tarea específica y bien definida dentro de un flujo de trabajo existente, no una función de IA genérica añadida a un lado del producto.' },
      { title: 'Prototipar con datos reales desde el principio', description: 'Probamos el modelo contra entradas reales similares a producción desde la primera semana, ya que los datos de demostración ocultan los modos de falla que importan en la práctica.' },
      { title: 'Construir un conjunto de evaluación antes de lanzar', description: 'Creamos un conjunto etiquetado de ejemplos reales que debe seguir aprobando a medida que cambiamos los prompts o la recuperación, para detectar regresiones antes de que las encuentre un cliente.' },
      { title: 'Diseñar para el costo, la latencia y el fallo controlado', description: 'Qué modelo atiende qué consulta, cuándo recurrir a una persona y qué pasa cuando el modelo no tiene confianza son decisiones de producto explícitas, no detalles posteriores.' }
    ],
    faqs: [
      { question: '¿Construyen chatbots personalizados?', answer: 'No como opción predeterminada. Hemos comprobado que las funciones de IA acotadas e integradas (como la extracción de clips o el marcado de catálogo) aportan un valor más fiable que un widget de chat genérico. Si un chatbot es realmente la herramienta adecuada para su flujo de trabajo, se lo diremos.' },
      { question: '¿Qué proveedores de IA usan?', answer: 'Principalmente OpenAI y Anthropic, elegidos según la tarea en función de la precisión, el costo y los requisitos de latencia, no un proveedor único por defecto.' },
      { question: '¿Cómo manejan los errores o alucinaciones de la IA?', answer: 'Conjuntos de evaluación, umbrales de confianza y respaldo humano para todo lo que sea de cara al cliente. Un sistema que dice "no estoy seguro" supera a uno que responde con confianza y se equivoca.' },
      { question: '¿Pueden añadir IA a un sistema que ustedes no construyeron?', answer: 'Sí, siempre que podamos acceder a los datos y al flujo de trabajo en el que necesita integrarse.' }
    ]
  },
  {
    slug: 'crm-erp-systems',
    icon: 'lucide:building-2',
    title: 'Sistemas CRM y ERP',
    tagline: 'Sistemas de comercio y operaciones multicanal',
    summary: 'Sistemas ERP y de operaciones que unifican plataformas separadas (Amazon, Shopify, WooCommerce y similares) bajo una única fuente de verdad para productos, stock y ventas.',
    description: 'Las empresas que venden en múltiples tiendas suelen terminar gestionando productos, inventario y pedidos por separado en cada plataforma. Desarrollamos sistemas ERP y de operaciones a medida que centralizan ese trabajo: gestione un producto una sola vez y se sincronizará automáticamente con cada tienda conectada, con el stock y las ventas controlados en un solo lugar en lugar de conciliarse a mano entre plataformas.',
    capabilities: [
      'Integración multitienda (Amazon, Shopify, WooCommerce y similares)',
      'Gestión centralizada de productos, inventario y stock',
      'Sincronización automática de ventas y stock entre plataformas conectadas',
      'Herramientas de CRM y pipeline a medida para equipos de ventas y operaciones',
      'Automatización de flujos de trabajo y cadenas de aprobación',
      'Reportes y paneles de control combinando todos los canales de venta'
    ],
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST / platform APIs', 'React'],
    idealFor: ['Empresas que venden en múltiples plataformas de e-commerce', 'Equipos de operaciones que concilian datos entre sistemas a mano', 'Equipos de ventas y operaciones que han superado las hojas de cálculo'],
    metaTitle: 'Servicios de Desarrollo de CRM y ERP a Medida',
    metaDescription: 'Sistemas ERP a medida que unifican el comercio electrónico multitienda (Amazon, Shopify, WooCommerce) en una única fuente de verdad para productos y stock.',
    process: [
      { title: 'Mapear cada tienda y sistema que hoy concilia a mano', description: 'Antes de escribir código, documentamos exactamente qué plataformas, hojas de cálculo y pasos manuales mantienen hoy sincronizados sus datos de producto y stock.' },
      { title: 'Diseñar el sistema como la fuente única de verdad', description: 'Su nuevo ERP es dueño de los datos de producto, inventario y precios; cada tienda se convierte en un canal sincronizado en lugar de un sistema separado que actualizar a mano.' },
      { title: 'Migrar una tienda a la vez', description: 'Conectamos y validamos una plataforma antes de pasar a la siguiente, para que un error en una integración no pueda corromper los datos de todas las demás.' },
      { title: 'Añadir reportes y automatización al final', description: 'Los paneles de control, los flujos de aprobación y las señales asistidas por IA se añaden una vez que la sincronización básica es sólida, no antes.' }
    ],
    faqs: [
      { question: '¿Con qué plataformas se integran?', answer: 'Con Amazon, Shopify y WooCommerce sobre todo; también hemos construido integraciones a medida con otras APIs de tiendas y marketplaces bajo pedido.' },
      { question: '¿Esto reemplazará por completo nuestro CRM/ERP actual?', answer: 'Depende de su configuración. Algunos proyectos reemplazan por completo un mosaico de hojas de cálculo y conciliación manual; otros amplían un sistema existente con las integraciones que le faltan.' },
      { question: '¿Qué pasa con nuestros datos durante la migración?', answer: 'Migramos y validamos los datos tienda por tienda, con sus sistemas actuales funcionando en paralelo hasta que se verifica cada conexión.' },
      { question: '¿El sistema puede crecer con más canales de venta más adelante?', answer: 'Sí. Añadir una nueva tienda se convierte en una integración más sobre una fuente de verdad existente, no en un rediseño.' }
    ]
  },
  {
    slug: 'dotnet-desktop-development',
    icon: 'lucide:monitor',
    title: 'Aplicaciones .NET y de Escritorio',
    tagline: 'Plataformas web en .NET, frontends en Angular y software de escritorio nativo para Windows',
    summary: 'Backends en .NET, frontends en Angular y aplicaciones de escritorio nativas para empresas que necesitan software que funcione directamente en equipos Windows, no solo en un navegador.',
    description: 'Algunos flujos de trabajo siguen perteneciendo al escritorio: sistemas de punto de venta, herramientas internas de operaciones y software que necesita acceso directo a hardware o archivos locales sin un navegador de por medio. Trabajamos con el stack .NET de principio a fin: backends y servicios en C#, frontends en Angular para la parte web de un sistema .NET, y aplicaciones de escritorio nativas para Windows, para equipos cuyas herramientas necesitan vivir fuera del navegador.',
    capabilities: [
      'Aplicaciones de escritorio nativas para Windows (WPF / WinForms)',
      'Servicios backend y APIs en .NET / C#',
      'Frontends en Angular para aplicaciones web basadas en .NET',
      'Sincronización de escritorio a la nube (aplicación local que se comunica con un backend alojado)',
      'Mantenimiento y modernización de aplicaciones .NET heredadas',
      'Empaquetado de instaladores y distribución de actualizaciones para software de escritorio'
    ],
    techStack: ['.NET / C#', 'Angular', 'WPF', 'WinForms', 'SQL Server'],
    idealFor: ['Empresas que necesitan software que funcione en equipos Windows locales', 'Herramientas de punto de venta y operaciones internas', 'Equipos con una base de código .NET existente para ampliar o modernizar'],
    metaTitle: 'Desarrollo de Aplicaciones .NET y de Escritorio para Windows',
    metaDescription: 'Backends en .NET, frontends en Angular y aplicaciones de escritorio nativas para Windows (WPF/WinForms) para software que necesita funcionar fuera del navegador.',
    process: [
      { title: 'Entender qué realmente necesita vivir fuera del navegador', description: 'El acceso a hardware local, el uso sin conexión o una dependencia heredada son motivos habituales; confirmamos el requisito de escritorio antes de asumirlo por defecto.' },
      { title: 'Evaluar la base de código .NET existente, si la hay', description: 'Para trabajos de modernización, identificamos qué partes de un sistema heredado son estructurales antes de tocarlas, para que las reglas de negocio codificadas hace años no se pierdan en silencio.' },
      { title: 'Construir el backend y la interfaz en paralelo, integrados desde el principio', description: 'Los servicios en C# y la interfaz en Angular o de escritorio se conectan desde el inicio de la construcción, no se ensamblan al final.' },
      { title: 'Empaquetar y lanzar con un camino real de actualización', description: 'El empaquetado del instalador y la distribución de actualizaciones forman parte del entregable, no algo que alguien más deba resolver después.' }
    ],
    faqs: [
      { question: '¿Solo construyen aplicaciones de escritorio nuevas, o también mantienen las existentes?', answer: 'Ambos casos. Buena parte de nuestro trabajo en .NET consiste en modernizar o ampliar un sistema heredado existente en lugar de construir desde cero.' },
      { question: '¿Por qué necesitaríamos una app de escritorio en lugar de una app web?', answer: 'Normalmente por acceso directo a hardware o archivos, requisitos sin conexión, o una herramienta de punto de venta u operaciones existente que ya vive en equipos Windows. Le diremos con honestidad si una app web le serviría mejor.' },
      { question: '¿Usan WPF o WinForms?', answer: 'Depende del proyecto. Trabajamos con ambos, y recomendamos según lo que encaje con su base de código y requisitos existentes, no una preferencia por defecto.' },
      { question: '¿La app de escritorio puede comunicarse con servicios en la nube?', answer: 'Sí, la sincronización de escritorio a la nube (una app local que se comunica con un backend alojado) es una capacidad que construimos con regularidad.' }
    ]
  }
]

export const caseStudies: CaseStudy[] = [
  {
    slug: 'healthcare-webinar-clip-distribution',
    title: 'Convertir webinars en vivo en contenido para redes sociales y correo el mismo día',
    client: 'Una organización de salud en Europa',
    industry: 'Salud (Europa)',
    serviceSlug: 'ai-llm-integration',
    timeline: 'Proyecto en curso',
    icon: 'lucide:video',
    summary: 'Desarrollamos un pipeline automatizado que extrae los mejores clips y citas de webinars en vivo y los distribuye por redes sociales y correo electrónico el mismo día, en lugar de una o dos semanas después.',
    challenge: 'La organización realizaba webinars en vivo periódicos con momentos y citas valiosas de distintos ponentes, pero convertir ese material en clips breves y distribuirlo por redes sociales y correo electrónico era un proceso totalmente manual. Para cuando el contenido salía, a menudo había pasado una semana o dos desde el webinar, mucho después de que a la audiencia le siguiera importando.',
    approach: 'Analizamos de dónde venía realmente el retraso: alguien tenía que volver a ver la grabación completa, encontrar manualmente los mejores momentos, cortar los clips y luego publicarlos por separado en cada canal. Había que automatizar toda esa cadena, no solo un paso de ella, para que el problema de los tiempos realmente desapareciera.',
    solution: 'Desarrollamos un pipeline que procesa cada grabación de webinar en cuanto termina, usa IA para identificar los clips y citas que vale la pena publicar de cada ponente, y los distribuye automáticamente por los canales de redes sociales y correo electrónico de la organización. Lo que antes requería una semana o más de edición y programación manual, ahora sale el mismo día del webinar.',
    results: [
      { label: 'Retraso en la distribución', value: 'De semanas a el mismo día' },
      { label: 'Trabajo manual de recorte', value: 'Automatizado' },
      { label: 'Canales de distribución', value: 'Redes sociales y correo, automático' }
    ],
    tags: ['AI/LLM', 'Automatización de Medios', 'Plataforma Web']
  },
  {
    slug: 'multi-channel-ecommerce-erp',
    title: 'Un solo sistema para gestionar productos en Amazon, Shopify y WooCommerce',
    client: 'Un minorista de e-commerce multicanal',
    industry: 'E-commerce / Retail',
    serviceSlug: 'crm-erp-systems',
    timeline: 'Proyecto en curso',
    icon: 'lucide:layers',
    summary: 'Desarrollamos un ERP central que se conecta con las tiendas de Amazon, Shopify y WooCommerce, de modo que productos, stock y ventas se gestionan en un solo lugar en lugar de por separado en cada plataforma.',
    challenge: 'La empresa vendía los mismos productos en Amazon, Shopify y WooCommerce, pero gestionaba el inventario y las fichas por separado en cada plataforma. Mantener el conteo de stock y los detalles de producto consistentes entre tres sistemas implicaba trabajo manual duplicado y un riesgo real de sobreventa cuando el stock no se actualizaba a tiempo en todas partes.',
    approach: 'En lugar de intentar que las tres tiendas se comunicaran directamente entre sí, desarrollamos un sistema central que es dueño de los datos de producto e inventario, y trata cada tienda como un canal conectado que se sincroniza con él en ambos sentidos. Eso significó que el trabajo de integración se hizo una sola vez por plataforma, en lugar de necesitar lógica personalizada entre cada par de sistemas.',
    solution: 'El ERP es ahora el único lugar donde se gestionan productos, stock y precios. Se conecta con la API de cada tienda, sincronizando automáticamente las ventas y los niveles de stock a medida que llegan pedidos por cualquier canal, de modo que el equipo actualiza un producto una vez en lugar de tres. Recomendaciones asistidas por IA señalan qué productos y fichas necesitan atención, según los patrones de ventas y stock en todos los canales.',
    results: [
      { label: 'Tiendas unificadas', value: 'Amazon, Shopify, WooCommerce' },
      { label: 'Gestión de productos', value: 'Fuente única de verdad' },
      { label: 'Sincronización de stock y ventas', value: 'Automática, entre plataformas' }
    ],
    tags: ['ERP', 'Integración de E-commerce', 'AI']
  }
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-between-nextjs-nuxt-and-angular',
    title: 'Cómo elegir entre Next.js, Nuxt y Angular para su próximo proyecto',
    excerpt: 'La elección de framework es una de las decisiones técnicas más determinantes que toma un proyecto nuevo, y una de las más sobrediscutidas. Así es como lo decidimos en realidad.',
    category: 'Ingeniería',
    date: '2026-07-14',
    author: 'Ingeniería de DigSolutions',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Primer plano de código con resaltado de sintaxis en un monitor',
    keyTakeaways: [
      'La elección de framework debe seguir la experiencia del equipo, la configuración de hosting y el equilibrio entre contenido e interacción, no las tendencias.',
      'Next.js y Nuxt resuelven el mismo problema para React y Vue respectivamente: elija según el modelo mental que su equipo ya maneja.',
      'La estructura de Angular rinde más para equipos empresariales grandes y de larga duración, no para equipos pequeños de startup.',
      'Optimice para lo que su equipo seguirá manteniendo cómodamente dentro de tres años.'
    ],
    metaDescription: 'Un marco práctico para elegir entre Next.js, Nuxt, React, Vue y Angular según el equipo, el cronograma y los requisitos del producto, no las tendencias.',
    relatedServiceSlugs: ['web-application-development', 'dotnet-desktop-development'],
    content: [
      'Todos los debates sobre frameworks en internet tratan la elección como algo ideológico. En la práctica, el framework adecuado para un proyecto lo determina un pequeño número de factores concretos: lo que su equipo ya conoce, cómo es su infraestructura de hosting, cuánto peso tiene el contenido frente a la interacción en el producto, y cuánto tiempo necesita vivir la base de código.',
      'Next.js y Nuxt se ganan su popularidad porque resuelven el mismo problema de fondo, renderizado en servidor, enrutamiento y obtención de datos en un framework coherente, para React y Vue respectivamente. Si su equipo ya piensa en React, Next.js elimina fricción. Si su equipo piensa con el modelo mental más simple y orientado a plantillas de Vue, Nuxt hace el mismo trabajo con menos ceremonia.',
      'Angular sigue siendo la decisión correcta con más frecuencia de lo que su reputación sugiere, sobre todo para equipos empresariales grandes que valoran una estructura predefinida, inyección de dependencias integrada y estabilidad a largo plazo por encima de la flexibilidad. Un equipo de veinte ingenieros que mantiene un sistema durante una década se beneficia de las barreras de contención de Angular de una forma que un equipo de startup de cinco personas no.',
      'La estrategia de renderizado es donde la elección de framework realmente importa, no la sintaxis. Un sitio de marketing o un blog necesita generación estática: compilar una vez, servir desde una CDN, y evitar un renderizado en cada solicitud. Un panel de control detrás de un login necesita renderizado en el cliente, ya que no hay nada que indexar y los datos son por usuario de todos modos. La mayoría de los productos reales necesitan una combinación, y es justo ahí donde Next.js y Nuxt justifican su complejidad: modos de renderizado por ruta (estático, renderizado en servidor, regenerado de forma incremental) en lugar de una elección de todo o nada fijada a nivel de proyecto.',
      'Los requisitos de SEO cambian el cálculo más de lo que la mayoría de los equipos espera al principio. Un sitio de marketing con mucho contenido o una tienda multi-idioma necesita HTML realmente renderizado en servidor para los rastreadores y una primera carga rápida, lo que inclina la balanza hacia Next.js o Nuxt frente a una SPA de Angular solo en cliente. Una herramienta interna de administración no tiene ningún requisito de SEO, lo que elimina esa restricción por completo y devuelve la decisión a la familiaridad del equipo y al ecosistema de componentes.',
      'El costo de migración es el factor que los equipos más subestiman. Mover a un equipo de cinco personas de Vue a React (o al revés) para perseguir un framework no sale gratis: son semanas de velocidad reducida mientras la gente vuelve a aprender modismos que ya dominaba. Hemos rechazado peticiones de "modernicemos a X" cuando el stack existente funcionaba bien y la queja real era un problema de arquitectura sin relación que cualquier framework habría heredado igual.',
      'El error que vemos con más frecuencia es elegir un framework según lo que está de moda en lugar de lo que el equipo seguirá manteniendo cómodamente dentro de tres años. Empezamos cada proyecto analizando las restricciones reales, la experiencia del equipo, los requisitos de integración, las necesidades de SEO y el cronograma, antes de recomendar un stack, y le diremos a un cliente potencial que se quede con su framework actual cuando esa sea la decisión correcta, incluso si eso significa un proyecto más pequeño para nosotros.'
    ]
  },
  {
    slug: 'production-grade-rag-lessons',
    title: 'Lo que aprendimos construyendo sistemas RAG en producción para clientes empresariales',
    excerpt: 'La generación aumentada por recuperación (RAG) parece sencilla en una demo y se complica rápido en producción. Estos son los modos de falla con los que realmente nos hemos topado.',
    category: 'IA y LLM',
    date: '2026-06-02',
    author: 'Práctica de IA de DigSolutions',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Bastidor de servidores con cableado de red iluminado',
    keyTakeaways: [
      'La segmentación (chunking) y la estructura del documento importan más a la calidad de la respuesta que el LLM que se use.',
      'Construya un conjunto de evaluación etiquetado a partir de consultas reales antes de lanzar, y vuelva a ejecutarlo con cada cambio de prompt o de recuperación.',
      'Un sistema que dice "no estoy seguro" es mejor que uno que responde con confianza y se equivoca.',
      'El costo, la latencia y el enrutamiento de modelos son decisiones de producto, no detalles de infraestructura de segundo plano.'
    ],
    metaDescription: 'Lecciones de la construcción de sistemas de generación aumentada por recuperación (RAG) en producción para clientes empresariales: segmentación, evaluación y salvaguardas que importan.',
    relatedServiceSlugs: ['ai-llm-integration'],
    content: [
      'Una demo de RAG es sencilla: vectorizar algunos documentos, recuperar las mejores coincidencias, incluirlas en un prompt. El RAG en producción es una disciplina completamente distinta, y la mayoría de los problemas difíciles viven fuera del modelo.',
      'La estrategia de segmentación importa más que la elección del modelo. Los documentos mal segmentados, cortados a mitad de una frase, sin encabezados, sin metadatos, producen respuestas equivocadas con total confianza sin importar qué LLM esté detrás. Dedicamos una parte desproporcionada del inicio de cada proyecto a la estructura del documento y los metadatos antes de tocar el pipeline de recuperación.',
      'La evaluación tiene que construirse antes de lanzar la función, no después de que los usuarios se quejen. Construimos un pequeño conjunto de evaluación etiquetado a partir de consultas reales desde el inicio de cada proyecto, y lo volvemos a ejecutar con cada cambio de prompt o de recuperación para detectar regresiones antes de que un cliente las encuentre.',
      'La búsqueda por similitud vectorial pura falla en consultas que dependen de un término exacto, un código de producto o un nombre al que el modelo de embeddings no da suficiente peso. La búsqueda híbrida, que combina similitud vectorial con coincidencia de palabras clave/BM25 y reordena los resultados combinados, supera de forma consistente a cualquiera de los dos enfoques por separado una vez que el conjunto de documentos es grande o las consultas se vuelven específicas. Cuesta más construirla y ajustarla, y vale la pena para cualquier caso que vaya más allá de una base de conocimiento pequeña y homogénea.',
      'El filtrado por metadatos es lo que hace que la recuperación sea confiable a escala, no solo precisa. Etiquetar los fragmentos con fuente, fecha, nivel de acceso y tipo de documento permite acotar la recuperación antes de que se ejecute siquiera la búsqueda por similitud, lo cual importa tanto para la calidad de la respuesta (no recuperar un documento de política ya reemplazado) como para el control de acceso (no recuperar un documento que este usuario no debería ver, sin importar cuán bien coincida con la consulta).',
      'Las salvaguardas y las señales de confianza importan tanto como la precisión. Un sistema que dice "no estoy seguro, aquí tiene a una persona a quien preguntar" supera a uno que responde con confianza y se equivoca, especialmente en casos de soporte y cercanos al cumplimiento normativo, donde una respuesta equivocada cuesta más que una lenta.',
      'La observabilidad tiene que construirse desde el primer día, no añadirse cuando algo se rompe. Registramos los fragmentos recuperados junto con la respuesta generada en cada consulta de producción, no solo el resultado final, porque cuando una respuesta está mal, la causa casi siempre está en la recuperación, y no se puede depurar lo que no se capturó.',
      'El costo y la latencia son decisiones de producto, no detalles de infraestructura de segundo plano. Qué modelo atiende qué consulta, cuándo usar caché y cuándo un modelo más pequeño es suficiente son decisiones que tomamos de forma explícita, porque cambian la economía unitaria de la función.'
    ]
  },
  {
    slug: 'signs-your-saas-needs-real-multi-tenancy',
    title: '5 señales de que su producto SaaS necesita una arquitectura multiinquilino real',
    excerpt: 'Muchos productos SaaS en etapa temprana simulan el multiinquilino hasta que se rompe. Así se reconoce que ha llegado ese punto, antes de que lo note un cliente empresarial.',
    category: 'SaaS',
    date: '2026-04-21',
    author: 'Ingeniería de DigSolutions',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fundador trabajando en una laptop en la mesa de un café',
    keyTakeaways: [
      'Una base de datos compartida con una columna customer_id no es multiinquilino real, y suele romperse durante la revisión de compras del cliente.',
      'Esté atento a scripts puntuales que corrigen fugas de datos entre inquilinos y a un rendimiento de consultas impredecible causado por su cliente más grande.',
      'Las necesidades de configuración por cliente y las solicitudes de cumplimiento normativo son señales de advertencia tardías.',
      'La migración real a multiinquilino suele ser incremental, y se hace antes de cerrar un trato, no bajo presión durante uno.'
    ],
    metaDescription: 'Cómo reconocer cuándo un producto SaaS ha superado su arquitectura de datos inicial y necesita un aislamiento multiinquilino real, antes de que se convierta en un obstáculo.',
    relatedServiceSlugs: ['web-application-development', 'crm-erp-systems'],
    content: [
      'La mayoría de los productos SaaS empiezan con un modelo de datos que técnicamente admite varios clientes pero no fue diseñado para eso: una única base de datos compartida con una columna customer_id añadida después. Eso funciona bien hasta que deja de funcionar, y ese momento suele llegar en el peor momento posible: durante un ciclo de ventas empresarial.',
      'La primera señal es que un prospecto pregunte por las garantías de aislamiento de datos durante la revisión de compras. La segunda es que un ingeniero tenga que escribir un script puntual para corregir datos que se filtraron entre los límites de los inquilinos. La tercera es que el rendimiento de las consultas se degrade de forma impredecible a medida que crece el volumen de datos de su cliente más grande y empieza a afectar a todos los demás en las mismas tablas.',
      'La cuarta señal es necesitar configuración por cliente, feature flags, campos personalizados, políticas de retención distintas, y darse cuenta de que el esquema actual no tiene un lugar limpio dónde ponerlo. La quinta es que un cliente pida un entorno dedicado o garantías de cumplimiento específicas que su arquitectura no puede ofrecer de forma limpia.',
      'La seguridad a nivel de fila, aplicada en la capa de base de datos y no solo en el código de la aplicación, es lo que realmente cierra la brecha de aislamiento. Una convención a nivel de aplicación de "siempre filtrar por tenant_id" funciona hasta que una consulta en algún lugar se olvida de hacerlo, y ese único descuido es el incidente que termina en una revisión de seguridad. Las políticas de seguridad a nivel de fila de Postgres (o el equivalente en su base de datos) hacen que el límite de aislamiento sea algo que la base de datos aplica incluso cuando el código de la aplicación tiene un error.',
      'Probar el aislamiento tiene que ser adversarial, no solo funcional. No basta con verificar que el inquilino A ve los datos del inquilino A; se necesitan pruebas que intenten activamente hacer que el inquilino A vea los datos del inquilino B a través de cada ruta de código, incluyendo tareas en segundo plano, capas de caché e índices de búsqueda, que son los lugares donde realmente se esconden los errores de aislamiento.',
      'La migración en sí es más un problema de secuenciación que de ingeniería. Normalmente empezamos con las tablas de mayor riesgo (las que ya muestran síntomas de rendimiento o fugas), añadimos indexación consciente del inquilino y políticas de seguridad a nivel de fila detrás de un feature flag, validamos contra tráfico de producción en modo sombra, y luego migramos tabla por tabla en lugar de en una sola versión.',
      'Ninguna de estas señales implica una reconstrucción completa. La arquitectura multiinquilino real suele ser una migración incremental: seguridad a nivel de fila, indexación consciente del inquilino y un límite de aislamiento claro, hecha por fases detrás del producto que sus clientes ya usan. La versión costosa es la que se hace bajo presión, durante un trato, en lugar de antes de uno.'
    ]
  },
  {
    slug: 'legacy-dotnet-modernization-without-a-rewrite',
    title: 'Modernizar un sistema .NET heredado sin una reescritura completa',
    excerpt: 'Una reescritura completa rara vez es la respuesta correcta para un sistema heredado que todavía sostiene el negocio. Este es el camino incremental que realmente recomendamos.',
    category: 'Empresarial',
    date: '2026-02-18',
    author: 'Ingeniería de DigSolutions',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Lentes reflejando líneas de código en varios monitores',
    keyTakeaways: [
      'Una reescritura completa corre el riesgo de eliminar en silencio reglas de negocio que nunca quedaron del todo documentadas.',
      'El patrón strangler permite que nuevos servicios convivan detrás de la interfaz heredada mientras la funcionalidad antigua migra por etapas.',
      'La modernización de la base de datos debe centrarse en las tablas y consultas específicas que causan problemas reales, no en todo por igual.',
      'Una migración incremental mantiene el negocio funcionando durante todo el proceso, cambiando velocidad por un riesgo concentrado y reversible.'
    ],
    metaDescription: 'Un enfoque práctico e incremental para modernizar sistemas .NET heredados, sin el riesgo y el costo de una reescritura completa.',
    relatedServiceSlugs: ['dotnet-desktop-development'],
    content: [
      'El instinto cuando un sistema .NET Framework heredado se siente lento y difícil de cambiar es proponer una reescritura completa. Rara vez es la decisión correcta. Un sistema lo bastante antiguo como para sentirse heredado suele ser lo bastante antiguo como para tener codificados años de reglas de negocio que nadie ha documentado del todo, reglas que una reescritura eliminaría en silencio.',
      'Preferimos el patrón strangler: la nueva funcionalidad se construye como servicios modernos y separados (normalmente .NET 8+ o un servicio en JS/TS cuando corresponde) que conviven detrás de la misma interfaz que expone el sistema heredado, mientras la funcionalidad antigua se migra pieza por pieza a medida que de todos modos necesita cambiar.',
      'La modernización de la base de datos suele tener que ocurrir en paralelo, ya que los esquemas heredados a menudo cargan la misma deuda acumulada que el código de la aplicación. Priorizamos las tablas y consultas que realmente causan problemas de rendimiento o fiabilidad en lugar de modernizar todo por igual.',
      'Las pruebas de caracterización van antes de cualquier refactorización, no después. Antes de tocar un módulo con reglas de negocio no documentadas, escribimos pruebas que capturan su comportamiento actual tal cual es, errores incluidos, para tener una forma de saber si un cambio posterior fue una corrección deliberada o una regresión accidental. Sin este paso, "modernizar" un sistema heredado cambia en silencio lo que hace, lo cual suele ser peor que no tocarlo.',
      'La transición de habilidades del equipo es un costo real que los cronogramas de proyecto suelen ignorar. Un equipo que ha mantenido .NET Framework y WebForms durante una década no se vuelve fluido en .NET moderno y un nuevo framework de frontend leyendo documentación un fin de semana. Incorporamos la programación en pareja y la transferencia de conocimiento al propio proyecto, no como algo aparte, para que el equipo del cliente pueda mantener el sistema modernizado, no solo nosotros.',
      'El resultado es un sistema que sigue sosteniendo el negocio durante todo el proceso, con el riesgo concentrado en pasos pequeños y reversibles en lugar de una única puesta en marcha de alto riesgo dieciocho meses después. Llegar a una base de código totalmente moderna toma más tiempo, pero es la versión que no pone en riesgo al negocio en el camino.'
    ]
  }
]
