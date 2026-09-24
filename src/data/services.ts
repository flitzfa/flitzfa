export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: 'Landing pages & Lanzamientos',
    description: 'Páginas diseñadas para presentar una propuesta con fuerza: un producto, un evento o un servicio clave. Sin rodeos, con jerarquía clara y foco absoluto en iniciar una conversación.'
  },
  {
    number: '02',
    title: 'Sitios para negocios & Marcas',
    description: 'La identidad y el clima de tu espacio físico llevados a la pantalla. Para paradores, gastronomía, gimnasios y proyectos que necesitan transmitir quiénes son y facilitar reservas o consultas directas.'
  },
  {
    number: '03',
    title: 'Portfolios & Espacios editoriales',
    description: 'Espacios donde la obra y la música son las protagonistas. Cuidado tipográfico, fotografía en gran formato y ritmo visual para artistas, bandas y profesionales independientes.'
  },
  {
    number: '04',
    title: 'Webs institucionales & Salud',
    description: 'Estructuras pensadas para transmitir confianza inmediata. Claridad en especialidades, horarios, guardias y canales rápidos de atención para consultorios, veterinarias y empresas.'
  }
];

export const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Entender',
    description: 'Conocer a fondo la idea, la personalidad de la marca y las necesidades reales del proyecto antes de proponer cualquier solución.'
  },
  {
    number: '02',
    title: 'Diseñar',
    description: 'Construir la identidad digital, la paleta cromática, la tipografía y una experiencia visual pensada para tu público.'
  },
  {
    number: '03',
    title: 'Desarrollar',
    description: 'Convertir el concepto en una web rápida, accesible, perfectamente responsive y técnicamente sólida.'
  },
  {
    number: '04',
    title: 'Refinar',
    description: 'Inspeccionar visualmente en el navegador, probar en pantallas reales y pulir cada detalle hasta conseguir un resultado memorable.'
  }
];

export const toolsAndTech: string[] = [
  'Astro',
  'Tailwind CSS',
  'TypeScript',
  'HTML Semántico',
  'CSS Moderno & Responsive',
  'Figma',
  'Web Performance',
  'Accesibilidad'
];
