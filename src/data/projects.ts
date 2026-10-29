export interface ProjectItem {
  id: string;
  client: string;
  rubro: string;
  tagline?: string;
  location?: string;
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
    id: 'walter-zelaya',
    client: 'Walter Zelaya',
    rubro: 'Guitarra · Composición · Jazz y folklore',
    tagline: 'Cuerdas en movimiento.',
    location: 'Buenos Aires',
    // TODO(Fabri): si conseguís una frase real de Walter, cargala en `quote` y se muestra debajo de la historia.
    story: 'Walter toca la guitarra en 620 Trío y además compone jazz y folklore con otros proyectos. Necesitaba que todo eso estuviera en un mismo lugar, así que le armé un sitio con su discografía, la agenda de fechas, sus links de Spotify y contacto directo por mail y WhatsApp.',
    technologies: ['Astro', 'TypeScript', 'CSS'],
    liveUrl: 'https://walterzelaya.com.ar/',
    palette: {
      accent: '#C08A4E',
      bgPreview: '#16130F',
      badgeBg: '#2A221C',
      badgeText: '#E3B57E'
    },
    layoutReversed: false
  },
  {
    id: 'juan-enriquez',
    client: 'Juan Enriquez',
    rubro: 'Música · Composición · Docencia',
    tagline: 'Música con historia.',
    // TODO(Fabri): si conseguís una frase real de Juan, cargala en `quote` y se muestra debajo de la historia.
    story: 'La web de Juan tenía que mostrar mucho: es músico, compositor y docente, con discos, lanzamientos, shows y varios proyectos a la vez. La organicé para que se recorra fácil y sumé un reproductor de muestra y un formulario de contacto.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://juanenriquez.com.ar/',
    palette: {
      accent: '#C9974F',
      bgPreview: '#241B19',
      badgeBg: '#3A2A22',
      badgeText: '#E2B66F'
    },
    layoutReversed: true
  },
  {
    id: 'prospeccion-automatica',
    client: 'Sistema automático de prospección',
    rubro: 'Automatización · Investigación · Organización comercial',
    tagline: 'Negocios investigados y listos para contactar.',
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
