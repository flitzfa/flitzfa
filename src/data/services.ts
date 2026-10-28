export interface ServiceItem {
  title: string;
  description: string;
}

export interface MethodologyStep {
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    title: 'Sitios web',
    description: 'Webs para comercios, profesionales, artistas e instituciones. Puede ser una sola página con tus datos y un botón de WhatsApp o un sitio con varias secciones, siempre con tu logo y tus colores.'
  },
  {
    title: 'Automatizaciones',
    description: 'Para lo que hacés igual todos los días: ordenar consultas, actualizar una planilla, armar un reporte o acordarte de hacer un seguimiento. Se configura una vez y después corre sola.'
  },
  {
    title: 'Integraciones',
    description: 'Conectar lo que ya usás, como la web, los formularios, el mail, las planillas o un CRM, para que los datos pasen de uno a otro sin copiarlos a mano.'
  },
  {
    title: 'Sistemas a medida',
    description: 'Paneles, catálogos, pequeñas aplicaciones o herramientas administrativas para un proceso puntual de tu negocio, cuando la planilla ya te queda chica.'
  }
];

export const methodologySteps: MethodologyStep[] = [
  {
    title: 'Charlamos',
    description: 'Me contás cómo funciona tu negocio y cómo te llegan hoy los clientes. Pregunto bastante, porque de eso depende qué te conviene hacer.'
  },
  {
    title: 'Te muestro una propuesta',
    description: 'Con lo que hablamos te armo una propuesta concreta: qué incluiría y cómo se vería. La ves antes de que empiece a programar.'
  },
  {
    title: 'Lo armo y lo ves funcionando',
    description: 'Programo la web o la automatización y te la muestro andando, para que la pruebes como la va a usar tu cliente.'
  },
  {
    title: 'Ajusto con lo que me digas',
    description: 'Lo que no te cierre o falte, lo cambiamos. Se publica cuando estás conforme.'
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
