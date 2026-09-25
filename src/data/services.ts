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
    description: 'Definir la arquitectura, la jerarquía, el recorrido y una dirección visual coherente con la identidad del proyecto.'
  },
  {
    number: '03',
    title: 'Producir',
    description: 'Coordinar la implementación con agentes de IA y convertir las decisiones de diseño en un sitio funcional y responsive.'
  },
  {
    number: '04',
    title: 'Probar y refinar',
    description: 'Revisar el resultado real en el navegador y dirigir las iteraciones de contenido, diseño, accesibilidad y funcionamiento.'
  }
];

export const technologiesUsed: string[] = [
  'Astro',
  'Tailwind CSS',
  'TypeScript',
  'HTML',
  'CSS',
  'JavaScript'
];

export const appliedCriteria: string[] = [
  'Responsive',
  'Accesibilidad',
  'Performance',
  'SEO técnico',
  'Revisión visual y funcional'
];
