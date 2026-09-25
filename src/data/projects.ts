export interface ProjectItem {
  id: string;
  number: string;
  client: string;
  rubro: string;
  tagline: string;
  location: string;
  objective: string;
  participation: string;
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
    number: '01',
    client: 'María Beach',
    rubro: 'Parador de playa · Gastronomía · Eventos',
    tagline: 'El río tiene su lugar.',
    location: 'Rincón Santa María · Ituzaingó, Corrientes',
    objective: 'Trasladar al sitio la experiencia del parador y reunir propuesta, agenda, ubicación y consultas en un recorrido claro.',
    participation: 'Definí el recorrido día–atardecer–noche, adapté la identidad del parador al entorno web y dirigí las revisiones de contenido, responsive, accesibilidad e imágenes.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://parador-mariabeach.vercel.app/',
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
    number: '02',
    client: '620 Trío',
    rubro: 'Música instrumental · Shows en vivo · Jazz & Fusión',
    tagline: 'Música en movimiento.',
    location: 'Buenos Aires',
    objective: 'Reunir identidad, historia, integrantes, música, fechas y contratación en un espacio editorial propio.',
    participation: 'Definí la narrativa visual de ruta, organicé el contenido y dirigí las iteraciones de fotografía, navegación y responsive.',
    technologies: ['Astro', 'TypeScript', 'CSS'],
    liveUrl: 'https://web-620.vercel.app/',
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
    number: '03',
    client: 'KITA FITNESS',
    rubro: 'Gimnasio · CrossFit & Funcional · Rendimiento',
    tagline: 'Forjando disciplina. Construyendo rendimiento.',
    location: 'San Justo · Buenos Aires',
    objective: 'Presentar disciplinas y horarios con claridad y convertir visitas en consultas directas por WhatsApp.',
    participation: 'Adapté la identidad de KITA al entorno web, organicé la información comercial y dirigí las revisiones de experiencia, responsive y accesibilidad.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://flitzfa.github.io/kita-fit/',
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
    number: '04',
    client: 'Veterinaria Portex',
    rubro: 'Clínica veterinaria · 18 Especialidades médicas',
    tagline: 'Atención clínica con dedicación para cada paciente.',
    location: 'Isidro Casanova · Buenos Aires',
    objective: 'Comunicar confianza, ordenar 18 prestaciones y facilitar turnos, horarios y ubicación.',
    participation: 'Definí la jerarquía del sitio y dirigí las iteraciones de información médica, consultas por WhatsApp, responsive y SEO local.',
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://flitzfa.github.io/portex-vet/',
    palette: {
      accent: '#0E7C7B',
      bgPreview: '#F0F8F8',
      badgeBg: '#DCF1F1',
      badgeText: '#0B5958'
    },
    layoutReversed: true
  }
];
