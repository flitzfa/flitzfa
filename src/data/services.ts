export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'landing',
    number: '01',
    title: 'Landing pages',
    subtitle: 'Foco y conversión directa',
    description: 'Páginas diseñadas para presentar una propuesta clara, un producto, evento o servicio específico. Sin distracciones, con jerarquía visual potente y llamadas a la acción que invitan a conversar.',
    tags: ['Campañas', 'Lanzamientos', 'Eventos', 'Conversión']
  },
  {
    id: 'negocios',
    number: '02',
    title: 'Sitios para negocios',
    subtitle: 'Presencia digital con identidad propia',
    description: 'Webs para paradores, gastronomía, gimnasios y comercios locales que necesitan transmitir el clima de su espacio físico en la pantalla y facilitar consultas o reservas a sus clientes.',
    tags: ['Gastronomía', 'Comercios', 'Gimnasios', 'Experiencias']
  },
  {
    id: 'portfolios',
    number: '03',
    title: 'Portfolios editoriales',
    subtitle: 'Para artistas, músicos y creadores',
    description: 'Espacios web donde la obra es la protagonista. Diseñados con cuidado tipográfico y ritmo visual para bandas, fotógrafos, diseñadores y profesionales independientes.',
    tags: ['Músicos', 'Artistas', 'Fotografía', 'Creative Dev']
  },
  {
    id: 'institucional',
    number: '04',
    title: 'Sitios institucionales y clínicas',
    subtitle: 'Claridad, confianza y orden de servicios',
    description: 'Estructuras pensadas para veterinarias, consultorios y empresas que manejan múltiples especialidades, horarios y requieren generar confianza inmediata en quien busca atención.',
    tags: ['Salud animal', 'Consultorios', 'Turnos', 'Empresas']
  },
  {
    id: 'custom',
    number: '05',
    title: 'Experiencias a medida',
    subtitle: 'Diseños que no caben en una plantilla',
    description: 'Proyectos con requerimientos visuales o interactivos únicos: microinteracciones sutiles, narrativas visuales continuas y adaptabilidad total al concepto de la marca.',
    tags: ['A medida', 'Microinteracciones', 'Identidad', 'Creatividad']
  },
  {
    id: 'rediseno',
    number: '06',
    title: 'Rediseño y modernización',
    subtitle: 'Actualización visual y técnica',
    description: 'Transformación de sitios existentes que quedaron desactualizados, lentos o difíciles de navegar en dispositivos móviles, llevándolos a los estándares de diseño y rendimiento actuales.',
    tags: ['Responsive', 'Optimización', 'Refactor visual', 'Performance']
  }
];

export const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Entender',
    subtitle: 'Escuchar antes de proyectar',
    description: 'Conocer a fondo la idea, la personalidad de la marca, el público al que le habla y las necesidades reales del proyecto antes de proponer cualquier solución.'
  },
  {
    number: '02',
    title: 'Diseñar',
    subtitle: 'Darle forma a la identidad',
    description: 'Definir la arquitectura de información, la paleta cromática, la tipografía y la experiencia visual completa. Cada decisión responde al carácter específico de tu proyecto.'
  },
  {
    number: '03',
    title: 'Desarrollar',
    subtitle: 'Construcción limpia y sólida',
    description: 'Transformar el diseño en código moderno, ultra rápido, accesible y perfectamente adaptado a cualquier pantalla (mobile, tablet y desktop).'
  },
  {
    number: '04',
    title: 'Refinar',
    subtitle: 'Mirada crítica en vivo',
    description: 'Inspeccionar visualmente en el navegador, probar interacciones, verificar contraste y pulir detalles hasta que la experiencia se sienta natural y profesional.'
  }
];

export const toolsAndTech: string[] = [
  'Astro',
  'Tailwind CSS',
  'TypeScript',
  'HTML Semántico',
  'CSS Moderno & Responsive',
  'Diseño UI/UX en Figma',
  'Optimización Web (CWV)',
  'Accesibilidad (WCAG)'
];
