export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    dotColor: string;
  };
  author: {
    name: string;
    nickname: string;
    bio: string;
    fullBio: string[];
    availableForWork: boolean;
    availabilityText: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    whatsappFormatted: string;
    instagram: string;
    github: string;
    location: string;
  };
  seo: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  nav: NavItem[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'flitzfa',
    tagline: 'Web Design & Development',
    dotColor: '#6F8F72',
  },
  author: {
    name: 'Fabricio',
    nickname: 'flitzfa',
    bio: 'Desarrollo sitios web a medida y me interesa especialmente el punto donde diseño, tecnología e identidad se encuentran.',
    fullBio: [
      'Soy Fabricio. Desarrollo sitios web y me interesa especialmente el punto donde diseño, tecnología e identidad se encuentran.',
      'Trabajo cada proyecto buscando entender qué necesita realmente antes de decidir cómo debería verse o funcionar.',
      'No utilizo la misma plantilla para todos: cada negocio, artista o profesional tiene una personalidad propia, y su web debe reflejarla con precisión técnica y sensibilidad visual.'
    ],
    availableForWork: true,
    availabilityText: 'Disponible para nuevos proyectos',
  },
  contact: {
    email: 'fabrix.enriquez@gmail.com',
    whatsapp: 'https://wa.me/5491123191413',
    whatsappFormatted: '+54 9 11 2319-1413',
    instagram: 'https://www.instagram.com/flitzfa/',
    github: 'https://github.com/flitzfa',
    location: 'Buenos Aires, Argentina',
  },
  seo: {
    title: 'flitzfa. — Diseño y Desarrollo Web a Medida',
    description: 'Diseño y desarrollo sitios web a medida para negocios, profesionales y proyectos que necesitan una presencia digital propia. Cada proyecto es distinto, su web también.',
    image: '/assets/brand/og-share.png',
    imageAlt: 'flitzfa. — Diseño y desarrollo web a medida',
  },
  nav: [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ],
};
