export interface ProjectItem {
  id: string;
  client: string;
  rubro: string;
  tagline: string;
  location: string;
  story: string;
  quote?: string;
  technologies: string[];
  liveUrl?: string;
  palette: {
    accent: string;
    bgPreview: string;
    badgeBg: string;
    badgeText: string;
  };
  layoutReversed: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'maria-beach',
    client: 'María Beach',
    rubro: 'Parador de playa · Gastronomía · Eventos',
    tagline: 'El río tiene su lugar.',
    location: 'Rincón Santa María · Ituzaingó, Corrientes',
    // TODO(Fabri): si conseguís una frase real de alguien de María Beach, cargala en `quote` y se muestra debajo de la historia.
    story: 'María Beach es un parador sobre el río en Ituzaingó, Corrientes. Necesitaban una web que transmitiera lo que se vive ahí y que juntara en un solo lugar la propuesta, la agenda, cómo llegar y las consultas. Organicé el sitio como un día en el parador: arranca de día, pasa por el atardecer y termina de noche. También adapté su identidad a la web y revisé textos, imágenes, accesibilidad y cómo se ve en el celular.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://www.paradormariabeach.com.ar/',
    palette: {
      accent: '#2A7B9B',
      bgPreview: '#EBF4F7',
      badgeBg: '#D8EFF8',
      badgeText: '#0F3445'
    },
    layoutReversed: false
  },
  {
    id: '620-trio',
    client: '620 Trío',
    rubro: 'Música instrumental · Shows en vivo · Fusión de folklore, jazz y rock',
    tagline: 'Música en movimiento.',
    location: 'Buenos Aires',
    // TODO(Fabri): si conseguís una frase real de alguien de 620 Trío, cargala en `quote` y se muestra debajo de la historia.
    story: 'Un trío de música instrumental que mezcla folklore, jazz y rock. Querían un sitio propio con su identidad, su historia, los integrantes, la música, las fechas y una forma clara de contratarlos. Armé el diseño alrededor de la idea de una ruta y ordené todo ese contenido. Después trabajé las fotos, la navegación y la versión para celular.',
    technologies: ['Astro', 'TypeScript', 'CSS'],
    liveUrl: 'https://620.com.ar/',
    palette: {
      accent: '#E6A15C',
      bgPreview: '#121316',
      badgeBg: '#2A221C',
      badgeText: '#FFC88A'
    },
    layoutReversed: true
  },
  {
    id: 'kita-fitness',
    client: 'KITA FITNESS',
    rubro: 'Gimnasio · CrossFit & Funcional · Rendimiento',
    tagline: 'Forjando disciplina. Construyendo rendimiento.',
    location: 'San Justo · Buenos Aires',
    // TODO(Fabri): si conseguís una frase real de alguien de KITA, cargala en `quote` y se muestra debajo de la historia.
    story: 'KITA es un gimnasio de San Justo con CrossFit, funcional y otras disciplinas. Lo importante era que se entendieran rápido las disciplinas y los horarios, y que quien entra a mirar termine escribiendo por WhatsApp. Pasé su identidad a la web, ordené la información comercial y revisé que se use bien desde el celular.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://kita.flitzfa.com.ar/',
    palette: {
      accent: '#C7FF24',
      bgPreview: '#141416',
      badgeBg: '#232912',
      badgeText: '#D6FF38'
    },
    layoutReversed: false
  },
  {
    id: 'portex-vet',
    client: 'Veterinaria Portex',
    rubro: 'Clínica veterinaria · 18 Especialidades médicas',
    tagline: 'Atención clínica con dedicación para cada paciente.',
    location: 'Isidro Casanova · Buenos Aires',
    // TODO(Fabri): si conseguís una frase real de alguien de Portex, cargala en `quote` y se muestra debajo de la historia.
    story: 'Veterinaria en Isidro Casanova con 18 especialidades. Había que ordenar toda esa información médica sin que abrume, transmitir confianza y que pedir turno, ver los horarios o encontrar la dirección fuera inmediato. Definí qué va primero en cada página, armé las consultas por WhatsApp y trabajé el SEO local para que aparezca cuando alguien de la zona busca una veterinaria.',
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://portex.flitzfa.com.ar/',
    palette: {
      accent: '#0E7C7B',
      bgPreview: '#F0F8F8',
      badgeBg: '#DCF1F1',
      badgeText: '#0B5958'
    },
    layoutReversed: true
  },
  {
    id: 'prospeccion-automatica',
    client: 'Sistema automático de prospección',
    rubro: 'Automatización · Investigación · Organización comercial',
    tagline: 'Información preparada para decidir y contactar.',
    location: 'Proyecto propio · En desarrollo',
    story: 'Es un proyecto mío, todavía en desarrollo. Antes de contactar a un negocio hay que buscarlo, investigarlo y anotarlo, y quiero sacarme ese trabajo manual de encima. Diseñé el flujo, la estructura de datos y los criterios para clasificar cada candidato. Junta automatización, IA y Google Sheets, sin exponer información privada.',
    technologies: ['Node.js', 'TypeScript', 'Webhooks', 'Google Sheets', 'IA aplicada'],
    palette: {
      accent: '#6F8F72',
      bgPreview: '#E7EDE2',
      badgeBg: '#DCE7D7',
      badgeText: '#263B2B'
    },
    layoutReversed: false
  }
];
