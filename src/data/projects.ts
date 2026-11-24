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
    story: 'Reuní la propuesta, la agenda, el mapa y las consultas en un recorrido pensado como un día en el parador: arranca de día, pasa por el atardecer y termina de noche.',
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
    rubro: 'Folklore, jazz y rock instrumental · Shows en vivo',
    tagline: 'Música en movimiento.',
    location: 'Buenos Aires',
    // TODO(Fabri): si conseguís una frase real de alguien de 620 Trío, cargala en `quote` y se muestra debajo de la historia.
    story: 'Diseño armado alrededor de la idea de una ruta: reúne su historia, música, fechas y un acceso directo para contrataciones en un recorrido ágil desde el celular.',
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
    story: 'Un solo lugar para todos sus proyectos: discografía, agenda de shows, enlaces a Spotify y contacto directo por mail y WhatsApp.',
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
    story: 'Sitio pensado para ordenar varios proyectos a la vez: discos, lanzamientos y fechas, con reproductor de muestra y formulario de contacto.',
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
    story: 'Flujo propio que busca comercios, los analiza con IA, los prioriza por potencial y deja la lista ordenada en Google Sheets.',
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
