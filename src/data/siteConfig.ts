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
    tagline: 'Desarrollo web · Automatización · Soluciones digitales',
    dotColor: '#6F8F72',
  },
  author: {
    name: 'Fabricio Enriquez',
    nickname: 'flitzfa',
    bio: 'Desarrollo webs, automatizaciones y soluciones digitales a medida para problemas concretos.',
    fullBio: [
      'Soy Fabricio Enriquez. Estudio la Licenciatura en Informática en la UNAHUR.',
      'Desarrollo soluciones digitales combinando desarrollo web, automatización, integraciones y herramientas de inteligencia artificial.',
      'Defino las decisiones de experiencia y los criterios técnicos de cada proyecto, y superviso el resultado hasta su publicación.'
    ],
    availableForWork: true,
    availabilityText: 'Disponible para proyectos freelance y oportunidades remotas',
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
    title: 'flitzfa. — Desarrollo web, automatización y soluciones digitales',
    description: 'Fabricio Enriquez desarrolla sitios web, automatizaciones, integraciones y soluciones digitales a medida para negocios y proyectos.',
    image: '/assets/brand/og-share.png',
    imageAlt: 'flitzfa. — Desarrollo web, automatización y soluciones digitales',
  },
  nav: [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ],
};
