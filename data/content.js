/* =====================================================================
   PALMDALE DIGITAL ACCESS — DASHBOARD CONTENT (English + Spanish)
   ---------------------------------------------------------------------
   Text, figures and resources drawn from the City of Palmdale Digital
   Access Study (July 2025). Data: U.S. Census Bureau, American Community
   Survey 2023 5-Year Estimates (tables S2801 and S2802).

   Progress/status lives in data/progress.js — not here.
   Edit this file only to change wording, figures or resource listings.
   ===================================================================== */

window.CONTENT = {
  // Link to the full study PDF. Put the file in /docs or link to the city site.
  studyUrl: "",
  contactEmail: "",

  ui: {
    en: {
      skip: "Skip to main content",
      cityName: "City of Palmdale",
      title: "Digital Access Dashboard",
      subtitle: "Tracking progress on the City of Palmdale Digital Access Study",
      langToggle: "Español",
      langToggleLabel: "Ver esta página en español",
      lastUpdated: "Progress last updated",
      nav: { progress: "Progress", need: "The need", heard: "What we heard", funding: "Funding", resources: "Get connected" },

      introTitle: "Every resident connected",
      intro: "Internet access is now as essential as any utility. In 2024 the City heard from more than 250 residents and 20+ partner organizations to understand who is being left behind and why. The Digital Access Study sets three goals and 14 strategies to close the gap. This dashboard tracks how that work is moving.",

      kpis: [
        { value: "3,627", ratio: "1 in 13", of: 13, icon: "home", label: "households has no home Internet subscription", note: "3,627 households (7.8%)" },
        { value: "6,862", ratio: "1 in 7", of: 7, icon: "phone", label: "households relies only on a cellular data plan for Internet", note: "6,862 households (14.8%)" },
        { value: "1,841", ratio: "1 in 25", of: 25, icon: "home", label: "households has no computer, tablet or smartphone", note: "1,841 households (4.0%)" },
      ],
      kpiTitle: "The digital divide in Palmdale",
      kpiSub: "This is the gap the Digital Access Study sets out to close.",
      momentumSub: "Success on digital access in Palmdale so far",
      momentumTitle: "Building momentum",
      momentum: [
        { count: 345, prefix: "$", suffix: "K", label: "in grants secured to plan and launch digital access work" },
        { count: 6000, suffix: "+", label: "homes getting new high-speed fiber service across Palmdale" },
        { count: 250, suffix: "+", label: "residents shared their experiences through workshops, fairs and a survey" },
        { count: 60, prefix: "1 of ", label: "communities named a National Digital Inclusion Trailblazer in 2024" },
      ],

      progressTitle: "Implementation progress",
      progressIntro: "Status of each of the study's 14 strategies. Select a strategy to see who is involved and how progress will be measured.",
      overall: "strategies complete",
      overallLabel: "All 14 strategies",
      underway: "underway (planning or in progress)",
      filterLabel: "Show strategies",
      filterAll: "All",
      viewCards: "By goal",
      viewTable: "Implementation matrix",
      viewLabel: "Choose a view",
      download: "Download matrix (CSV)",
      print: "Print",
      fields: { lead: "Lead", partners: "Partners", timeframe: "Timeframe", measure: "How we'll measure it", update: "Latest update", status: "Status", strategy: "Strategy", goal: "Goal" },
      tbd: "To be determined",
      noUpdate: "No update yet.",
      noMatch: "No strategies with this status yet.",
      status: { "not-started": "Not started", planning: "Planning", "in-progress": "In progress", complete: "Complete" },

      milestonesTitle: "Progress to date",

      needTitle: "Who is most affected",
      needIntro: "Share of Palmdale households without a home Internet subscription.",
      compareTitle: "How Palmdale compares",
      compareNote: "Households without an Internet subscription",
      deviceCompareNote: "Households without any digital device",
      source: "Source: U.S. Census Bureau, American Community Survey 2023 5-Year Estimates.",

      heardTitle: "What we heard",
      heardIntro: "Residents and partners named three barriers that cut across the community.",
      photoCaption: "Workshops and resource fairs, 2024",
      groupsTitle: "Groups facing unique barriers",

      fundingTitle: "Funding",
      fundingSecured: "Secured for digital access",
      fundingWatch: "Opportunities to watch",

      providersTitle: "Home Internet options in Palmdale",
      providersIntro: "Monthly prices for residential plans, from each provider's lowest to highest tier. Low-cost programs for eligible households start at $14.99 a month.",
      providersNote: "Prices gathered from highspeedinternet.com in December 2024 for the Digital Access Study. Availability and prices vary by address and change over time.",
      lowCost: "Low-cost programs",
      perMonth: "per month",
      upTo: "Up to",
      coverage: "Where",
      citywideSoon: "Citywide, coming soon",
      zipCount: "ZIP codes",
      zipOne: "ZIP code",
      types: { fiber: "Fiber", cable: "Cable", "5g": "5G home Internet", fixed: "Fixed wireless", satellite: "Satellite" },
      providerCols: { provider: "Provider", price: "Monthly price", speed: "Max download speed" },
      resourcesTitle: "Get connected: resources for residents",
      resourcesIntro: "Free and low-cost programs for Internet service, devices and digital skills. Programs and prices may change; contact each provider to confirm eligibility.",
      cost: "Cost",
      visit: "Visit website",

      footerStudy: "Read the full Digital Access Study",
      footerContact: "Questions? Contact",
      footerNote: "Spanish translation pending review by a native speaker.",
    },

    es: {
      skip: "Saltar al contenido principal",
      cityName: "Ciudad de Palmdale",
      title: "Tablero de Acceso Digital",
      subtitle: "Seguimiento del progreso del Estudio de Acceso Digital de la Ciudad de Palmdale",
      langToggle: "English",
      langToggleLabel: "View this page in English",
      lastUpdated: "Última actualización del progreso",
      nav: { progress: "Progreso", need: "La necesidad", heard: "Lo que escuchamos", funding: "Financiamiento", resources: "Conéctese" },

      introTitle: "Todos los residentes conectados",
      intro: "El acceso a Internet es hoy tan esencial como cualquier servicio público. En 2024, la Ciudad escuchó a más de 250 residentes y a más de 20 organizaciones aliadas para entender quiénes se están quedando atrás y por qué. El Estudio de Acceso Digital establece tres metas y 14 estrategias para cerrar la brecha. Este tablero muestra cómo avanza ese trabajo.",

      kpis: [
        { value: "3,627", ratio: "1 de cada 13", of: 13, icon: "home", label: "hogares no tiene suscripción de Internet en casa", note: "3,627 hogares (7.8%)" },
        { value: "6,862", ratio: "1 de cada 7", of: 7, icon: "phone", label: "hogares depende solo de un plan de datos celulares para conectarse", note: "6,862 hogares (14.8%)" },
        { value: "1,841", ratio: "1 de cada 25", of: 25, icon: "home", label: "hogares no tiene computadora, tableta ni teléfono inteligente", note: "1,841 hogares (4.0%)" },
      ],
      kpiTitle: "La brecha digital en Palmdale",
      kpiSub: "Esta es la brecha que el Estudio de Acceso Digital busca cerrar.",
      momentumSub: "Logros en acceso digital en Palmdale hasta ahora",
      momentumTitle: "Avanzando",
      momentum: [
        { count: 345, prefix: "$", suffix: "K", label: "en subvenciones obtenidas para planificar e iniciar el trabajo de acceso digital" },
        { count: 6000, suffix: "+", label: "hogares recibirán nuevo servicio de fibra de alta velocidad en Palmdale" },
        { count: 250, suffix: "+", label: "residentes compartieron sus experiencias en talleres, ferias y una encuesta" },
        { count: 60, prefix: "1 de ", label: "comunidades reconocidas como Pioneras Nacionales en Inclusión Digital en 2024" },
      ],

      progressTitle: "Progreso de implementación",
      progressIntro: "Estado de cada una de las 14 estrategias del estudio. Seleccione una estrategia para ver quién participa y cómo se medirá el progreso.",
      overall: "estrategias completadas",
      overallLabel: "Las 14 estrategias",
      underway: "en marcha (en planificación o en curso)",
      filterLabel: "Mostrar estrategias",
      filterAll: "Todas",
      viewCards: "Por meta",
      viewTable: "Matriz de implementación",
      viewLabel: "Elija una vista",
      download: "Descargar matriz (CSV)",
      print: "Imprimir",
      fields: { lead: "Responsable", partners: "Aliados", timeframe: "Plazo", measure: "Cómo lo mediremos", update: "Última novedad", status: "Estado", strategy: "Estrategia", goal: "Meta" },
      tbd: "Por determinar",
      noUpdate: "Aún no hay novedades.",
      noMatch: "Todavía no hay estrategias con este estado.",
      status: { "not-started": "Sin iniciar", planning: "En planificación", "in-progress": "En curso", complete: "Completada" },

      milestonesTitle: "Logros a la fecha",

      needTitle: "Quiénes están más afectados",
      needIntro: "Porcentaje de hogares de Palmdale sin suscripción de Internet en casa.",
      compareTitle: "Cómo se compara Palmdale",
      compareNote: "Hogares sin suscripción de Internet",
      deviceCompareNote: "Hogares sin ningún dispositivo digital",
      source: "Fuente: Oficina del Censo de EE. UU., Encuesta sobre la Comunidad Estadounidense, estimaciones de 5 años 2023.",

      heardTitle: "Lo que escuchamos",
      heardIntro: "Residentes y aliados identificaron tres barreras comunes en toda la comunidad.",
      photoCaption: "Talleres y ferias de recursos, 2024",
      groupsTitle: "Grupos que enfrentan barreras particulares",

      fundingTitle: "Financiamiento",
      fundingSecured: "Fondos obtenidos para el acceso digital",
      fundingWatch: "Oportunidades a seguir",

      providersTitle: "Opciones de Internet en casa en Palmdale",
      providersIntro: "Precios mensuales de los planes residenciales, desde el plan más económico hasta el más alto de cada proveedor. Los programas de bajo costo para hogares elegibles comienzan en $14.99 al mes.",
      providersNote: "Precios obtenidos de highspeedinternet.com en diciembre de 2024 para el Estudio de Acceso Digital. La disponibilidad y los precios varían según la dirección y cambian con el tiempo.",
      lowCost: "Programas de bajo costo",
      perMonth: "al mes",
      upTo: "Hasta",
      coverage: "Dónde",
      citywideSoon: "Toda la ciudad, próximamente",
      zipCount: "códigos postales",
      zipOne: "código postal",
      types: { fiber: "Fibra óptica", cable: "Cable", "5g": "Internet 5G en casa", fixed: "Inalámbrico fijo", satellite: "Satelital" },
      providerCols: { provider: "Proveedor", price: "Precio mensual", speed: "Velocidad máx. de descarga" },
      resourcesTitle: "Conéctese: recursos para residentes",
      resourcesIntro: "Programas gratuitos y de bajo costo para servicio de Internet, dispositivos y habilidades digitales. Los programas y precios pueden cambiar; comuníquese con cada proveedor para confirmar los requisitos.",
      cost: "Costo",
      visit: "Visitar sitio web",

      footerStudy: "Lea el Estudio de Acceso Digital completo",
      footerContact: "¿Preguntas? Comuníquese con",
      footerNote: "Traducción al español pendiente de revisión por un hablante nativo.",
    },
  },

  // ------------------------------------------------------------------
  // GOALS AND STRATEGIES (from the study, pages 24–35)
  // ------------------------------------------------------------------
  goals: [
    {
      id: "1", icon: "wifi", color: "goal1",
      name: { en: "Increase Access to the Internet", es: "Aumentar el acceso a Internet" },
      strategies: [
        { id: "1.1", en: "Work with partners and Internet Service Providers to increase enrollment in low-cost Internet programs", es: "Colaborar con aliados y proveedores de Internet para aumentar la inscripción en programas de Internet de bajo costo" },
        { id: "1.2", en: "Develop a local fund to subsidize Internet access costs for low-income households", es: "Crear un fondo local para subsidiar el costo del Internet para hogares de bajos ingresos" },
        { id: "1.3", en: "Explore solutions for enhanced connectivity in underserved areas such as mobile home parks and rural communities", es: "Explorar soluciones para mejorar la conectividad en zonas desatendidas, como parques de casas móviles y comunidades rurales" },
        { id: "1.4", en: "Update WiFi availability maps and expand free WiFi where the community gathers", es: "Actualizar los mapas de WiFi disponible y ampliar el WiFi gratuito donde se reúne la comunidad" },
      ],
    },
    {
      id: "2", icon: "devices", color: "goal2",
      name: { en: "Improve Access to Digital Devices", es: "Mejorar el acceso a dispositivos digitales" },
      strategies: [
        { id: "2.1", en: "Distribute free or low-cost refurbished devices to underserved communities", es: "Distribuir dispositivos reacondicionados gratuitos o de bajo costo a comunidades desatendidas" },
        { id: "2.2", en: "Encourage public agencies, community organizations and local businesses to donate retired devices for refurbishment", es: "Animar a agencias públicas, organizaciones comunitarias y negocios locales a donar dispositivos en desuso para reacondicionarlos" },
        { id: "2.3", en: "Partner with community-based organizations to provide multilingual technical support", es: "Colaborar con organizaciones comunitarias para ofrecer apoyo técnico en varios idiomas" },
        { id: "2.4", en: "Explore opportunities to provide public charging stations for phones, tablets and computers", es: "Explorar opciones para ofrecer estaciones de carga públicas para teléfonos, tabletas y computadoras" },
        { id: "2.5", en: "Leverage the TAP Program to connect surplus devices to youth in need", es: "Aprovechar el programa TAP para entregar dispositivos excedentes a jóvenes que los necesitan" },
      ],
    },
    {
      id: "3", icon: "literacy", color: "goal3",
      name: { en: "Expand Digital Literacy Opportunities", es: "Ampliar las oportunidades de alfabetización digital" },
      strategies: [
        { id: "3.1", en: "Create digital inclusion hubs at popular community spaces and raise awareness of hub resources", es: "Crear centros de inclusión digital en espacios comunitarios concurridos y dar a conocer sus recursos" },
        { id: "3.2", en: "Catalog current digital literacy resources and ensure multilingual access", es: "Catalogar los recursos actuales de alfabetización digital y garantizar el acceso en varios idiomas" },
        { id: "3.3", en: "Provide digital literacy programs on Internet safety and privacy for parents, seniors and others", es: "Ofrecer programas sobre seguridad y privacidad en Internet para padres, personas mayores y otros" },
        { id: "3.4", en: "Work with the Chamber and others to develop digital literacy workshops for small businesses", es: "Trabajar con la Cámara de Comercio y otros para crear talleres de alfabetización digital para pequeñas empresas" },
        { id: "3.5", en: "Establish a volunteer-based digital navigator program to provide free technology support", es: "Establecer un programa de navegadores digitales voluntarios que ofrezca apoyo tecnológico gratuito" },
      ],
    },
  ],

  // ------------------------------------------------------------------
  // PROGRESS TO DATE (study pages 3–4, 7, 22–23)
  // ------------------------------------------------------------------
  // (Grants, fiber homes, engagement and the national award appear in the
  //  "Building momentum" band, so they are not repeated here.)
  milestones: [
    { date: { en: "July 2025", es: "Julio 2025" }, en: "Digital Access Study completed, setting three goals and 14 strategies.", es: "Se completó el Estudio de Acceso Digital, con tres metas y 14 estrategias." },
    { date: { en: "2025", es: "2025" }, en: "Partnership with Homeboy Electronics Recycling launched; first round of low-cost refurbished devices distributed.", es: "Se inició la alianza con Homeboy Electronics Recycling; se distribuyó la primera ronda de dispositivos reacondicionados de bajo costo." },
    { date: { en: "Underway", es: "En curso" }, en: "Two new fiber networks under construction: Palmdale FiberCity®'s open-access network (with T-Mobile Fiber) and Race Communications.", es: "Dos nuevas redes de fibra en construcción: la red de acceso abierto de Palmdale FiberCity® (con T-Mobile Fiber) y Race Communications." },
    { date: { en: "Recent", es: "Reciente" }, en: "City joins the California Emerging Technology Fund's digital navigators program.", es: "La Ciudad se une al programa de navegadores digitales del California Emerging Technology Fund." },
  ],

  // ------------------------------------------------------------------
  // WHO IS MOST AFFECTED — % of households without a home Internet
  // subscription (study pages 11–13)
  // ------------------------------------------------------------------
  breakdowns: [
    {
      title: { en: "By household income", es: "Por ingreso del hogar" },
      rows: [
        { en: "Less than $20K", es: "Menos de $20K", value: 21.6 },
        { en: "$20K–$75K", es: "$20K–$75K", value: 10.8 },
        { en: "More than $75K", es: "Más de $75K", value: 3.2 },
      ],
    },
    {
      title: { en: "By age", es: "Por edad" },
      rows: [
        { en: "Under 18", es: "Menores de 18", value: 6.0 },
        { en: "18–64", es: "18–64", value: 5.6 },
        { en: "65 and over", es: "65 o más", value: 13.9 },
      ],
    },
    {
      title: { en: "By education (age 25+)", es: "Por nivel educativo (25 años o más)" },
      rows: [
        { en: "Less than high school", es: "Sin diploma de preparatoria", value: 11.9 },
        { en: "High school / some college", es: "Preparatoria / algo de universidad", value: 6.8 },
        { en: "Bachelor's or higher", es: "Licenciatura o más", value: 3.3 },
      ],
    },
    {
      title: { en: "By race and ethnicity", es: "Por raza y origen étnico" },
      rows: [
        { en: "Native Hawaiian / Pacific Islander", es: "Nativo de Hawái / Islas del Pacífico", value: 17.8 },
        { en: "Black or African American", es: "Afroamericano", value: 8.7 },
        { en: "Hispanic or Latino", es: "Hispano o latino", value: 6.7 },
        { en: "American Indian / Alaska Native", es: "Indígena americano / nativo de Alaska", value: 6.0 },
        { en: "White", es: "Blanco", value: 5.8 },
        { en: "Asian", es: "Asiático", value: 4.0 },
      ],
    },
  ],

  comparisons: {
    internet: [
      { en: "United States", es: "Estados Unidos", value: 10.1 },
      { en: "Los Angeles County", es: "Condado de Los Ángeles", value: 8.2 },
      { en: "Palmdale", es: "Palmdale", value: 7.8, highlight: true },
      { en: "California", es: "California", value: 7.4 },
    ],
    devices: [
      { en: "United States", es: "Estados Unidos", value: 5.2 },
      { en: "Palmdale", es: "Palmdale", value: 4.0, highlight: true },
      { en: "Los Angeles County", es: "Condado de Los Ángeles", value: 3.9 },
      { en: "California", es: "California", value: 3.6 },
    ],
  },

  // ------------------------------------------------------------------
  // WHAT WE HEARD (study pages 17–21)
  // ------------------------------------------------------------------
  engagement: [
    { value: "3", en: "workshops", es: "talleres" },
    { value: "2", en: "resource fairs", es: "ferias de recursos" },
    { value: "100+", en: "survey responses (English & Spanish)", es: "respuestas a la encuesta (inglés y español)" },
    { value: "20+", en: "partner organizations", es: "organizaciones aliadas" },
  ],
  // Photos from the 2024 workshops and resource fairs (assets/img)
  eventPhotos: [
    { src: "assets/img/event-group.jpg?v=2", alt: { en: "Community partners and City staff gathered for a group photo at a digital access event", es: "Aliados comunitarios y personal de la Ciudad reunidos para una foto grupal en un evento de acceso digital" } },
    { src: "assets/img/event-workshop.jpg", alt: { en: "Participants seated around tables during a digital access workshop", es: "Participantes sentados alrededor de mesas durante un taller de acceso digital" } },
    { src: "assets/img/event-fair-display.jpg", alt: { en: "Residents reading Digital Access Study display boards at a resource fair", es: "Residentes leyendo los carteles del Estudio de Acceso Digital en una feria de recursos" } },
    { src: "assets/img/event-fair-tables.jpg", alt: { en: "Community organizations hosting information tables at a resource fair", es: "Organizaciones comunitarias con mesas informativas en una feria de recursos" } },
  ],
  challenges: [
    { icon: "dollar", title: { en: "Affordability", es: "Costo" }, en: "The cost of devices and Internet subscriptions is a key barrier.", es: "El costo de los dispositivos y del servicio de Internet es una barrera clave." },
    { icon: "lightbulb", title: { en: "Knowledge gap", es: "Falta de conocimiento" }, en: "Lack of familiarity and awareness can lead to mistrust and fear about online safety.", es: "La falta de familiaridad e información puede generar desconfianza y temor sobre la seguridad en línea." },
    { icon: "devices", title: { en: "Lack of appropriate devices", es: "Falta de dispositivos adecuados" }, en: "Low-quality devices, or only having a smartphone, can limit Internet use.", es: "Los dispositivos de baja calidad, o tener solo un teléfono inteligente, pueden limitar el uso de Internet." },
  ],
  groups: [
    { en: "Seniors", es: "Personas mayores", detail: { en: "Fixed incomes, need for skills training, and concerns about scams and privacy.", es: "Ingresos fijos, necesidad de capacitación y preocupación por fraudes y privacidad." } },
    { en: "Low-income households", es: "Hogares de bajos ingresos", detail: { en: "Internet bills compete with housing, food and other utilities.", es: "La factura de Internet compite con la vivienda, la comida y otros servicios." } },
    { en: "Students and youth", es: "Estudiantes y jóvenes", detail: { en: "Some rely on smartphones for homework and college applications.", es: "Algunos dependen del teléfono para tareas y solicitudes universitarias." } },
    { en: "Rural residents", es: "Residentes rurales", detail: { en: "Few provider choices; slow and unreliable service.", es: "Pocas opciones de proveedor; servicio lento y poco confiable." } },
    { en: "Racial and ethnic minority groups", es: "Minorías raciales y étnicas", detail: { en: "Language barriers and low awareness of discount programs.", es: "Barreras de idioma y poco conocimiento de programas de descuento." } },
    { en: "Migrant and immigrant residents", es: "Residentes migrantes e inmigrantes", detail: { en: "Frequent moves create a need for mobile devices.", es: "Las mudanzas frecuentes crean la necesidad de dispositivos móviles." } },
    { en: "Residents experiencing homelessness", es: "Residentes sin hogar", detail: { en: "Need mobile devices and places to charge them.", es: "Necesitan dispositivos móviles y lugares para cargarlos." } },
    { en: "Veterans", es: "Veteranos", detail: { en: "Knowledge gaps and skepticism of technology.", es: "Falta de conocimiento y desconfianza hacia la tecnología." } },
  ],

  // ------------------------------------------------------------------
  // FUNDING (study pages 22, 36–38). Placeholder until the city confirms.
  // ------------------------------------------------------------------
  funding: {
    secured: [
      { amount: "$325,000", en: "CPUC Local Agency Technical Assistance grant (2022)", es: "Subvención de Asistencia Técnica para Agencias Locales de la CPUC (2022)" },
      { amount: "$20,000", en: "California Emerging Technology Fund, via LA DEAL", es: "California Emerging Technology Fund, a través de LA DEAL" },
    ],
    watch: [
      { en: "California Digital Equity Capacity Sub-Grant Program (California Department of Technology)", es: "Programa de Subvenciones de Capacidad para la Equidad Digital de California (Departamento de Tecnología de California)" },
      { en: "California Advanced Services Fund (CASF): Broadband Adoption and Public Housing accounts", es: "Fondo de Servicios Avanzados de California (CASF): cuentas de Adopción de Banda Ancha y de Vivienda Pública" },
      { en: "California Emerging Technology Fund annual programs", es: "Programas anuales del California Emerging Technology Fund" },
      { en: "Local business and philanthropic partners (for the proposed Digital Access Fund)", es: "Negocios locales y socios filantrópicos (para el Fondo de Acceso Digital propuesto)" },
    ],
  },

  // ------------------------------------------------------------------
  // RESIDENTIAL INTERNET PROVIDERS (study page 16; prices from Dec 2024)
  // type: fiber | cable | 5g | fixed | satellite
  // zips: [] with citywide: true means citywide service is forthcoming
  // ------------------------------------------------------------------
  providers: [
    { name: "Easy Internet Now", type: "fiber", min: 79, max: 98, speed: "1 Gbps", zips: ["93550"] },
    { name: "Frontier", type: "fiber", min: 29.99, max: 129.99, speed: "5 Gbps", zips: ["93534", "93535", "93536", "93551"] },
    { name: "HughesNet", type: "satellite", min: 49.99, max: 94.99, speed: "100 Mbps", zips: ["93510", "93534", "93535", "93536", "93551", "93591"] },
    { name: "Race Communications", type: "fiber", min: 35, max: 120, speed: "1 Gbps", zips: [], citywide: true },
    { name: "Spectrum", type: "cable", min: 25, max: 70, speed: "1 Gbps", zips: ["91390", "93510", "93534", "93535", "93536", "93550", "93551", "93552", "93543", "93591"] },
    { name: "T-Mobile Fiber (Palmdale FiberCity®)", type: "fiber", min: 55, max: 110, speed: "2 Gbps", zips: [], citywide: true },
    { name: "T-Mobile 5G Home Internet", type: "5g", min: 50, max: 70, speed: "245 Mbps", zips: ["91390", "93510", "93536", "93550", "93551", "93552", "93543", "93591"] },
    { name: "TekWorks", type: "fixed", min: 65, max: 65, speed: "100 Mbps", zips: ["93534"] },
    { name: "Verizon 5G", type: "5g", min: 35, max: 109, speed: "300 Mbps", zips: ["93550", "93552"] },
    { name: "Viasat", type: "satellite", min: 69.99, max: 149.99, speed: "150 Mbps", zips: ["91390", "93510", "93534", "93535", "93536", "93550", "93552", "93543", "93591"] },
  ],
  lowCostRange: [14.99, 25],

  // ------------------------------------------------------------------
  // RESOURCE DIRECTORY (study Appendix A). Links verified October 2026.
  // Removed as out of date: Tech2Go (an LA Public Library program, not LA County)
  // and Cox Digital Academy (discontinued). IC3 at AV College: link not found.
  // ------------------------------------------------------------------
  resources: [
    {
      id: "internet", icon: "wifi",
      title: { en: "Internet service", es: "Servicio de Internet" },
      items: [
        { name: "Human-I-T Low-Cost Internet", cost: { en: "$14.99/month", es: "$14.99 al mes" }, en: "Low-cost Internet for eligible low-income households.", es: "Internet de bajo costo para hogares elegibles de bajos ingresos.", url: "https://www.human-i-t.org/low-cost-internet/" },
        { name: "Verizon Forward", cost: { en: "From $20/month", es: "Desde $20 al mes" }, en: "Discounted home Internet for households in SNAP, WIC, Lifeline and other programs.", es: "Internet en casa con descuento para hogares en SNAP, WIC, Lifeline y otros programas.", url: "https://www.verizon.com/discounts/verizon-forward/" },
        { name: "Spectrum Internet Assist", cost: { en: "$25/month", es: "$25 al mes" }, en: "Up to 50 Mbps for households in school lunch programs or SSI.", es: "Hasta 50 Mbps para hogares en programas de almuerzo escolar o SSI.", url: "https://www.spectrum.com/internet/spectrum-internet-assist" },
        { name: "California LifeLine", cost: { en: "Up to $19/month off", es: "Hasta $19 de descuento al mes" }, en: "Discounted home and cell phone service for eligible households.", es: "Descuento en servicio telefónico fijo y celular para hogares elegibles.", url: "https://www.californialifeline.com/" },
        { name: "EveryoneOn Offer Locator", cost: { en: "Free", es: "Gratis" }, en: "Search for low-cost Internet offers by ZIP code.", es: "Busque ofertas de Internet de bajo costo por código postal.", url: "https://www.everyoneon.org/find-offers" },
        { name: "Palmdale City Library WiFi", cost: { en: "Free", es: "Gratis" }, en: "Free WiFi at the library.", es: "WiFi gratuito en la biblioteca.", url: "https://www.cityofpalmdaleca.gov/318/Palmdale-City-Library" },
        { name: "LA County Library WiFi", cost: { en: "Free", es: "Gratis" }, en: "Free WiFi inside and in the parking lots of all 85 branches.", es: "WiFi gratuito dentro y en los estacionamientos de las 85 sucursales.", url: "https://lacountylibrary.org/wifi/" },
      ],
    },
    {
      id: "devices", icon: "devices",
      title: { en: "Computers and devices", es: "Computadoras y dispositivos" },
      items: [
        { name: "Homeboy Electronics Recycling", cost: { en: "Varies", es: "Varía" }, en: "Affordable refurbished devices through an online store.", es: "Dispositivos reacondicionados económicos en su tienda en línea.", url: "https://www.ebay.com/str/homeboyelectronicsrecycling" },
        { name: "Human-I-T", cost: { en: "Varies", es: "Varía" }, en: "Low-cost devices, extra discounts for eligible residents, and a free-device waitlist.", es: "Dispositivos de bajo costo, descuentos adicionales para residentes elegibles y lista de espera para dispositivos gratuitos.", url: "https://store.human-i-t.org/categories/shop-all/" },
        { name: "PCs for People", cost: { en: "Varies", es: "Varía" }, en: "Refurbished computers for eligible customers.", es: "Computadoras reacondicionadas para clientes elegibles.", url: "https://www.pcsforpeople.org/get-tech/" },
        { name: "Computers with Causes", cost: { en: "Free", es: "Gratis" }, en: "Free devices for individuals and nonprofits in need.", es: "Dispositivos gratuitos para personas y organizaciones que los necesitan.", url: "https://www.computerswithcauses.org/application/" },
        { name: "Technology Access Program (Palmdale School District)", cost: { en: "Free", es: "Gratis" }, en: "Free Chromebook or Chrome PC for district students; priority for foster and homeless students.", es: "Chromebook o Chrome PC gratis para estudiantes del distrito; prioridad para estudiantes en hogares temporales o sin hogar.", url: "https://www.palmdalesd.org/apps/pages/index.jsp?uREC_ID=4369891&type=d&pREC_ID=2572160" },
        { name: "Palmdale City Library laptops", cost: { en: "Free", es: "Gratis" }, en: "Use a library laptop for up to four hours with a library card.", es: "Use una laptop de la biblioteca hasta por cuatro horas con su tarjeta.", url: "https://www.cityofpalmdaleca.gov/318/Palmdale-City-Library" },
        { name: "LA County Library computers", cost: { en: "Free", es: "Gratis" }, en: "Public computers at all 85 branches, up to two hours a day.", es: "Computadoras públicas en las 85 sucursales, hasta dos horas al día.", url: "https://lacountylibrary.org/public-computers/" },
      ],
    },
    {
      id: "skills", icon: "literacy",
      title: { en: "Digital skills and help", es: "Habilidades digitales y ayuda" },
      items: [
        { name: "Digital Assistants (LA County Library & Delete the Divide)", cost: { en: "Free", es: "Gratis" }, en: "In-person help with computers and online services.", es: "Ayuda en persona con computadoras y servicios en línea.", url: "https://www.deletethedivide.org/digital-assistants/" },
        { name: "Antelope Valley Adult School", cost: { en: "Free", es: "Gratis" }, en: "Computer Basics and Computer Basics Advanced courses.", es: "Cursos de computación básica y básica avanzada.", url: "https://www.avadulted.org/information/computer-basics" },
        { name: "SALVA computer classes", cost: { en: "Free", es: "Gratis" }, en: "Beginner classes from email to graphic design, also in Spanish.", es: "Clases para principiantes, desde correo electrónico hasta diseño gráfico, también en español.", url: "https://www.salvaorganization.org/education-and-learning" },
        { name: "GetSetUp", cost: { en: "See website", es: "Consulte el sitio web" }, en: "Live online classes for older adults in English, Spanish, Hindi and Mandarin.", es: "Clases en vivo en línea para adultos mayores en inglés, español, hindi y mandarín.", url: "https://www.getsetup.io/" },
        { name: "Human-I-T Digital Literacy", cost: { en: "Free", es: "Gratis" }, en: "Self-paced computer and Internet training in English and Spanish.", es: "Capacitación a su propio ritmo sobre computadoras e Internet, en inglés y español.", url: "https://www.human-i-t.org/digital-literacy/" },
        { name: "LA County Library classes", cost: { en: "Free", es: "Gratis" }, en: "In-person and virtual classes, including Spanish digital literacy and cybersecurity.", es: "Clases presenciales y virtuales, incluidas alfabetización digital en español y ciberseguridad.", url: "https://visit.lacountylibrary.org/events" },
        { name: "DigitalLearn.org", cost: { en: "Free", es: "Gratis" }, en: "Short, plain-language video lessons on basic skills.", es: "Lecciones breves en video, en lenguaje sencillo, sobre habilidades básicas.", url: "https://www.digitallearn.org/" },
        { name: "Library learning platforms", cost: { en: "Free with library card", es: "Gratis con tarjeta de biblioteca" }, en: "Brainfuse HelpNow, Gale Courses, LinkedIn Learning, Learning Express and Universal Class.", es: "Brainfuse HelpNow, Gale Courses, LinkedIn Learning, Learning Express y Universal Class.", url: "https://lacountylibrary.org/learn/" },
        { name: "CoderDojo (Santa Clarita Valley)", cost: { en: "Free", es: "Gratis" }, en: "Volunteer-run coding classes for K–12 youth.", es: "Clases de programación para jóvenes de K–12, a cargo de voluntarios.", url: "https://codeclub.org/en/clubs/us/santa-clarita-ca/scv" },
        { name: "IC3 Digital Literacy course (Antelope Valley College)", cost: { en: "$545; aid available", es: "$545; hay ayuda financiera" }, en: "Certification course in computer, application and Internet skills.", es: "Curso de certificación en computación, aplicaciones e Internet.", url: "" },
      ],
    },
  ],
};
