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
    title: 'Sitios web',
    description: 'Landing pages, webs para negocios, profesionales, artistas e instituciones, portfolios y experiencias digitales diseñadas alrededor de una identidad y un objetivo concretos.'
  },
  {
    number: '02',
    title: 'Automatizaciones',
    description: 'Flujos que se ocupan de tareas repetitivas: ordenar consultas, actualizar planillas, clasificar información, generar reportes o hacer seguimientos de forma automática.'
  },
  {
    number: '03',
    title: 'Integraciones',
    description: 'Conexiones entre las herramientas que ya usa un proyecto —sitio, formularios, correo, planillas, bases de datos o CRM— para que la información circule con menos pasos manuales.'
  },
  {
    number: '04',
    title: 'Sistemas a medida',
    description: 'Dashboards, paneles internos, catálogos, pequeñas aplicaciones y herramientas administrativas construidas para resolver un proceso específico del negocio.'
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
    description: 'Definir la arquitectura, el recorrido y las decisiones de experiencia o de proceso que necesita la solución.'
  },
  {
    number: '03',
    title: 'Construir',
    description: 'Convertir esas decisiones en una web, una automatización o una herramienta funcional, integrando IA cuando realmente aporta valor.'
  },
  {
    number: '04',
    title: 'Probar y refinar',
    description: 'Revisar el resultado real en el navegador y dirigir las iteraciones de contenido, diseño, accesibilidad y funcionamiento.'
  }
];

export const technologiesUsed: string[] = [
  'JavaScript / TypeScript',
  'Node.js',
  'React / Astro',
  'APIs & webhooks',
  'Git / GitHub',
  'IA aplicada'
];

export const appliedCriteria: string[] = [
  'Responsive',
  'Accesibilidad',
  'Performance',
  'SEO técnico',
  'Revisión visual y funcional',
  'Automatización de procesos'
];
