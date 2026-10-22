/* =====================================================================
   PALMDALE DIGITAL ACCESS — IMPLEMENTATION MATRIX
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to update progress.
   See docs/HOW-TO-UPDATE.md for step-by-step instructions.

   For each strategy you can change:
     status    – one of: "not-started", "planning", "in-progress", "complete"
     lead      – who is responsible (department or partner), in English (en) and Spanish (es)
     partners  – who else is involved, in English (en) and Spanish (es)
     timeframe – e.g. "2026", "Q3 2026", "Ongoing" (Spanish: "Continuo"), in English (en) and Spanish (es)
     measure   – how progress will be tracked
     update    – a short note on the latest progress, in English (en) and Spanish (es)

   Rules of thumb:
     • Keep the quotation marks "like this" around every value.
     • Keep the comma at the end of each line.
     • If you are not sure of something yet, leave it as "".
   ===================================================================== */

window.PROGRESS = {
  // Date of the most recent update (YYYY-MM-DD)
  lastUpdated: "2026-10-13",

  strategies: {
    // ---------------- GOAL 1: Increase Access to the Internet ----------------
    "1.1": {
      status: "in-progress",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Internet Service Providers (Spectrum, Verizon), community-based organizations, schools, libraries", es: "Proveedores de Internet (Spectrum, Verizon), organizaciones comunitarias, escuelas, bibliotecas" },
      timeframe: { en: "Ongoing", es: "Continuo" },
      measure: { en: "Households enrolled in low-cost Internet programs", es: "Hogares inscritos en programas de Internet de bajo costo" },
      update: { en: "Early work underway with Internet service providers and partners to connect income-qualified households to low-cost plans.", es: "Trabajo inicial en curso con proveedores de Internet y aliados para conectar a hogares que califican con planes de bajo costo." },
    },
    "1.2": {
      status: "not-started",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Local businesses, philanthropic partners, Internet Service Providers", es: "Negocios locales, socios filantrópicos, proveedores de Internet" },
      timeframe: { en: "Ongoing once launched", es: "Continuo una vez iniciado" },
      measure: { en: "Dollars raised for the fund; households receiving subsidies", es: "Fondos recaudados; hogares que reciben subsidios" },
      update: { en: "", es: "" },
    },
    "1.3": {
      status: "not-started",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Palmdale FiberCity®, Race Communications, other Internet Service Providers", es: "Palmdale FiberCity®, Race Communications, otros proveedores de Internet" },
      timeframe: { en: "Ongoing", es: "Continuo" },
      measure: { en: "Homes and businesses with new high-speed service available", es: "Hogares y negocios con nuevo servicio de alta velocidad disponible" },
      update: { en: "", es: "" },
    },
    "1.4": {
      status: "not-started",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Local businesses, community-based organizations, Internet Service Providers", es: "Negocios locales, organizaciones comunitarias, proveedores de Internet" },
      timeframe: { en: "", es: "" },
      measure: { en: "Public WiFi locations mapped and new locations added", es: "Sitios de WiFi público mapeados y nuevos sitios agregados" },
      update: { en: "Engineering is tracking where new fiber is being installed, which can inform future WiFi mapping.", es: "El departamento de Ingeniería registra dónde se instala la nueva fibra, lo que servirá para el futuro mapa de WiFi." },
    },

    // ---------------- GOAL 2: Improve Access to Digital Devices ----------------
    "2.1": {
      status: "in-progress",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Homeboy Electronics Recycling, schools, libraries, immigrant support centers", es: "Homeboy Electronics Recycling, escuelas, bibliotecas, centros de apoyo a inmigrantes" },
      timeframe: { en: "Ongoing", es: "Continuo" },
      measure: { en: "Refurbished devices distributed; e-waste events held", es: "Dispositivos reacondicionados distribuidos; eventos de reciclaje realizados" },
      update: { en: "First round of low-cost refurbished devices distributed. More rounds planned as devices become available.", es: "Se distribuyó la primera ronda de dispositivos reacondicionados de bajo costo. Se planean más rondas según haya dispositivos disponibles." },
    },
    "2.2": {
      status: "in-progress",
      lead: { en: "City of Palmdale (citywide)", es: "Ciudad de Palmdale (toda la ciudad)" },
      partners: { en: "Public agencies, community-based organizations, local businesses", es: "Agencias públicas, organizaciones comunitarias, negocios locales" },
      timeframe: { en: "Ongoing", es: "Continuo" },
      measure: { en: "Devices donated for refurbishment", es: "Dispositivos donados para reacondicionamiento" },
      update: { en: "Device donations are already happening across City departments.", es: "Ya se están donando dispositivos en distintos departamentos de la Ciudad." },
    },
    "2.3": {
      status: "in-progress",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Palmdale libraries, senior center, Parks and Recreation, community-based organizations", es: "Bibliotecas de Palmdale, centro para personas mayores, Parques y Recreación, organizaciones comunitarias" },
      timeframe: { en: "Ongoing", es: "Continuo" },
      measure: { en: "Tech support sessions held; languages offered", es: "Sesiones de apoyo técnico realizadas; idiomas ofrecidos" },
      update: { en: "Palmdale libraries and the senior center offer multilingual technical support.", es: "Las bibliotecas de Palmdale y el centro para personas mayores ofrecen apoyo técnico en varios idiomas." },
    },
    "2.4": {
      status: "not-started",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Local businesses, technology companies", es: "Negocios locales, empresas de tecnología" },
      timeframe: { en: "", es: "" },
      measure: { en: "Public charging stations installed", es: "Estaciones de carga públicas instaladas" },
      update: { en: "Public Works will launch the initiative; the long-term program owner will be decided later.", es: "Obras Públicas iniciará la iniciativa; más adelante se decidirá qué departamento la administrará a largo plazo." },
    },
    "2.5": {
      status: "not-started",
      lead: { en: "", es: "" },
      partners: { en: "Palmdale School District, housing authorities, nonprofits", es: "Distrito Escolar de Palmdale, autoridades de vivienda, organizaciones sin fines de lucro" },
      timeframe: { en: "", es: "" },
      measure: { en: "Surplus TAP devices connected to youth", es: "Dispositivos excedentes del programa TAP entregados a jóvenes" },
      update: { en: "", es: "" },
    },

    // ---------------- GOAL 3: Expand Digital Literacy Opportunities ----------------
    "3.1": {
      status: "planning",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Community-based organizations, Internet Service Providers, public agencies", es: "Organizaciones comunitarias, proveedores de Internet, agencias públicas" },
      timeframe: { en: "", es: "" },
      measure: { en: "Digital inclusion hubs designated", es: "Centros de inclusión digital designados" },
      update: { en: "The library already hosts some digital hubs to build on.", es: "La biblioteca ya cuenta con algunos centros digitales que servirán de base." },
    },
    "3.2": {
      status: "in-progress",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Community-based organizations", es: "Organizaciones comunitarias" },
      timeframe: { en: "Q1 2027", es: "1er trimestre de 2027" },
      measure: { en: "Programs cataloged; programs offered in languages other than English", es: "Programas catalogados; programas ofrecidos en otros idiomas además del inglés" },
      update: { en: "Resources cataloged in the study's resource matrix; work continues to post all of them on the City website.", es: "Los recursos están catalogados en la matriz de recursos del estudio; se sigue trabajando para publicarlos todos en el sitio web de la Ciudad." },
    },
    "3.3": {
      status: "in-progress",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Schools, senior centers, community-based organizations", es: "Escuelas, centros para personas mayores, organizaciones comunitarias" },
      timeframe: { en: "Ongoing", es: "Continuo" },
      measure: { en: "Internet safety workshops held; participants reached", es: "Talleres de seguridad en Internet realizados; participantes alcanzados" },
      update: { en: "", es: "" },
    },
    "3.4": {
      status: "not-started",
      lead: { en: "", es: "" },
      partners: { en: "Antelope Valley Chambers of Commerce, local business leaders, educational institutions", es: "Cámaras de Comercio de Antelope Valley, líderes empresariales locales, instituciones educativas" },
      timeframe: { en: "", es: "" },
      measure: { en: "Small business workshops held; businesses served", es: "Talleres para pequeñas empresas realizados; negocios atendidos" },
      update: { en: "", es: "" },
    },
    "3.5": {
      status: "planning",
      lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
      partners: { en: "Libraries, LA County Library / Delete the Divide, community centers", es: "Bibliotecas, Biblioteca del Condado de LA / Delete the Divide, centros comunitarios" },
      timeframe: { en: "", es: "" },
      measure: { en: "Digital navigators trained; residents assisted", es: "Navegadores digitales capacitados; residentes atendidos" },
      update: { en: "The City has signed up for the California Emerging Technology Fund's digital navigators program.", es: "La Ciudad se inscribió en el programa de navegadores digitales del California Emerging Technology Fund." },
    },
  },
};
