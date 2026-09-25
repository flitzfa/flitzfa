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
    tagline: 'Diseño & Producción Web',
    dotColor: '#6F8F72',
  },
  author: {
    name: 'Fabricio',
    nickname: 'flitzfa',
    bio: 'Diseño y dirijo la producción de sitios web a medida, desde la definición de la idea hasta su publicación.',
    fullBio: [
      'Soy Fabricio. Diseño y dirijo la producción de sitios web a medida.',
      'Trabajo directamente con cada proyecto para definir qué necesita, cómo debería verse y qué experiencia debe ofrecer.',
      'Coordino la implementación con agentes de IA y conduzco las revisiones, pruebas e iteraciones hasta llegar a una versión lista para publicarse.'
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
    title: 'flitzfa. — Diseño y producción web a medida',
    description: 'Diseño y dirección de sitios web a medida para negocios, profesionales y proyectos que necesitan una presencia digital propia.',
    image: '/assets/brand/og-share.png',
    imageAlt: 'flitzfa. — Diseño y producción web a medida',
  },
  nav: [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ],
};
