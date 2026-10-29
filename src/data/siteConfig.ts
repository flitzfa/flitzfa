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
    tagline: 'Webs, automatizaciones y soluciones digitales · Buenos Aires',
    dotColor: '#6F8F72',
  },
  author: {
    name: 'Fabricio Enriquez',
    nickname: 'flitzfa',
    availableForWork: true,
    availabilityText: 'Tomando proyectos freelance',
  },
  contact: {
    email: 'hola@flitzfa.com.ar',
    whatsapp: 'https://wa.me/5491123191413',
    whatsappFormatted: '+54 9 11 2319-1413',
    instagram: 'https://www.instagram.com/flitzfa/',
    github: 'https://github.com/flitzfa',
    location: 'Buenos Aires, Argentina',
  },
  seo: {
    title: 'flitzfa. — Webs y soluciones digitales para negocios',
    description: 'Soy Fabricio Enriquez. Hago webs y soluciones digitales para comercios y pymes de Buenos Aires, desde una página simple hasta un sitio con catálogo, turnos o pedidos, y automatizo tareas repetitivas.',
    image: '/assets/brand/og-share.jpg',
    imageAlt: 'flitzfa. — Webs y soluciones digitales para negocios',
  },
  nav: [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Demos', href: '#demos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ],
};
