export interface ProjectItem {
  id: string;
  number: string;
  client: string;
  tagline: string;
  category: string;
  location: string;
  summary: string;
  deliverables: string[];
  link: string;
  liveUrl?: string;
  // Acento de color específico del cliente
  palette: {
    accent: string;
    accentSoft: string;
    bgPreview: string;
    textPreview: string;
    badgeBg: string;
    badgeText: string;
  };
  image: {
    src: string;
    alt: string;
    aspectRatio?: string;
  };
  layoutReversed: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'maria-beach',
    number: '01',
    client: 'María Beach',
    tagline: 'El río tiene su lugar.',
    category: 'Parador · Gastronomía · Eventos',
    location: 'Rincón Santa María, Corrientes',
    summary: 'Sitio web diseñado para capturar la atmósfera del río Paraná. Desarrollado con una estética cálida y veraniega, destacando los tres momentos clave del parador: día de playa, atardecer con amigos y noches de música en vivo.',
    deliverables: ['Identidad digital', 'Landing editorial', 'Carta y eventos', 'Reservas directas'],
    link: '#',
    liveUrl: 'https://flitzfa.github.io/parador-mariabeach/',
    palette: {
      accent: '#2A7B9B',
      accentSoft: '#E2F3F8',
      bgPreview: '#EBF4F7',
      textPreview: '#12303D',
      badgeBg: '#77C8E9',
      badgeText: '#0F3445'
    },
    image: {
      src: '/assets/projects/mariabeach-preview.png',
      alt: 'Sitio web de María Beach - Parador frente al río Paraná'
    },
    layoutReversed: false
  },
  {
    id: '620-trio',
    number: '02',
    client: '620 Trío',
    tagline: 'Música en movimiento.',
    category: 'Música · Cultura · Shows en vivo',
    location: 'Buenos Aires',
    summary: 'Plataforma web para un trío instrumental de fusión, jazz y folclore. Una estética nocturna y visceral con fotografía de alta intensidad, agenda de conciertos en vivo integrada con venta de tickets y reproductor de lanzamientos.',
    deliverables: ['Web de artista', 'Agenda interactiva', 'Lanzamientos & Audio', 'Prensa & Bio'],
    link: '#',
    liveUrl: 'https://flitzfa.github.io/620trio-music/',
    palette: {
      accent: '#E6A15C',
      accentSoft: '#2D2824',
      bgPreview: '#16171A',
      textPreview: '#F2EFE9',
      badgeBg: '#33261D',
      badgeText: '#FFBE76'
    },
    image: {
      src: '/assets/projects/620trio-preview.png',
      alt: 'Plataforma web para 620 Trío - Música y shows en vivo'
    },
    layoutReversed: true
  },
  {
    id: 'kita-fitness',
    number: '03',
    client: 'KITA FITNESS',
    tagline: 'Forjando disciplina. Construyendo rendimiento.',
    category: 'Fitness · CrossFit · Rendimiento',
    location: 'San Justo, Buenos Aires',
    summary: 'Landing page de alta energía y conversión para gimnasio de entrenamiento funcional, calistenia y musculación. Tipografía con fuerza editorial y sistema directo de consulta para inscripciones y planes.',
    deliverables: ['Landing de conversión', 'Horarios & Actividades', 'Galería de instalaciones', 'Canal WhatsApp directo'],
    link: '#',
    liveUrl: 'https://flitzfa.github.io/kita-fit/',
    palette: {
      accent: '#C7FF24',
      accentSoft: '#232A15',
      bgPreview: '#141416',
      textPreview: '#F5F5F5',
      badgeBg: '#2C3516',
      badgeText: '#D6FF38'
    },
    image: {
      src: '/assets/projects/kitafit-preview.png',
      alt: 'Sitio web de KITA FITNESS - Gimnasio de entrenamiento funcional y musculación'
    },
    layoutReversed: false
  },
  {
    id: 'portex-vet',
    number: '04',
    client: 'Veterinaria Portex',
    tagline: 'Atención clínica y 18 especialidades médicas.',
    category: 'Salud Animal · Especialidades Médicas',
    location: 'Isidro Casanova, Buenos Aires',
    summary: 'Presencia institucional moderna para una clínica veterinaria de alta complejidad. Arquitectura enfocada en transmitir tranquilidad a familias de perros, gatos y animales no tradicionales, con acceso rápido a turnos y guardias.',
    deliverables: ['Sitio institucional', 'Catálogo de 18 especialidades', 'Acceso a urgencias', 'Ficha de profesionales'],
    link: '#',
    liveUrl: 'https://flitzfa.github.io/portex-vet/',
    palette: {
      accent: '#0E7C7B',
      accentSoft: '#E6F4F4',
      bgPreview: '#F0F8F8',
      textPreview: '#0D3B3A',
      badgeBg: '#D1EBEB',
      badgeText: '#0B5958'
    },
    image: {
      src: '/assets/projects/portex-preview.png',
      alt: 'Sitio institucional para Veterinaria Portex - Especialidades médicas y guardia'
    },
    layoutReversed: true
  }
];
