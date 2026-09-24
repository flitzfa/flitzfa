export interface ProjectItem {
  id: string;
  number: string;
  client: string;
  rubro: string;
  tagline: string;
  location: string;
  summary: string;
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
    location: 'Rincón Santa María · Corrientes',
    summary: 'Una experiencia web diseñada para transmitir el pulso del río Paraná: desde el descanso bajo el sol hasta los atardeceres con música en vivo y las noches de cantina.',
    liveUrl: 'https://flitzfa.github.io/parador-mariabeach/',
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
    summary: 'Plataforma para un trío instrumental independiente. Fotografía analógica de alta intensidad en Estudios ION, lanzamientos de álbum y agenda de conciertos en vivo con venta de tickets.',
    liveUrl: 'https://flitzfa.github.io/620trio-music/',
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
    summary: 'Presencia digital directa y de alta energía. Tipografía contundente, fotografía real de instalaciones y un canal ágil para canalizar consultas y nuevos socios por WhatsApp.',
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
    summary: 'Diseño enfocado en transmitir calma, profesionalismo y rigor médico. Organización clara de 18 especialidades médicas, guardias y atención de animales no tradicionales.',
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
