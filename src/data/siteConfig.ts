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
    // Placeholders configurables para el usuario
    email: 'fabrix.enriquez@gmial.com', // TODO: Reemplazar por tu correo real
    whatsapp: 'https://wa.me/5491123191413', // TODO: Reemplazar por tu número de WhatsApp
    whatsappFormatted: '+54 9 11 1123-191413',
    instagram: 'https://instagram.com/flitzfa', // TODO: Reemplazar por tu usuario de Instagram
    github: 'https://github.com/flitzfa',
    location: 'Buenos Aires, Argentina',
  },
  nav: [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ],
};
