export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
  colSpan?: 1 | 2;
  textColor?: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overviewText: string[];
  mission: string;
  client: string;
  impactMetric: { value: string; label: string; subtext: string };
  tags: { name: string; colorClass: string }[];
  heroImage: string;
  demoLink: string;
  features: ProjectFeature[];
  techStack: string[];
  gallery: string[];
  filterTag: string;
}

const IMG_LUMINA_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbgHuAHUU7i8lu4v7ZRsdfrrG0VqIEC35GLkO7eMUzOLQ3jEGjZRyJDDNyfMFofaPIWRZhgceMcQqUQDEiKIjo4Qj3BkWpIftZcBhRK6z6no5yp-Q1ahO0gkO2KZJSduTgCmSdtVO4Sd7yKbDo0mtwYJNKY9w7F5HLfvCZASp-OHJD3lSSqTun5nj5boMegQ6eBbxAlNdcuWon_-LcLnSzACtYV_ABB3-laAYdUvAzNOuVs6750FLjJlsO1aL57U2A5-UI-yK1us1m';
const IMG_LUMINA_G1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu1Wgab1ToOCq-UNEcZS1Q6CfiPgn61rv1sseLczctz6Fm7gR22lI2AXDUZul3KUIIOsmeQrLKF2PHPquK6YqJ4MOs1_9_GbiocERvywNfjpolP--6fCeJZm05BLtii8P3n5zViGHOZN9rM6H5pfh75Ge3PaMRbFK3_PPht2MTTHywc22iWHkfDB8hL_vWUIqbC3kytw3CfFUl57ubrs7p3MIpTlpVpDxdy5OGU5U7tVWMaBlzq5EMPpwZDFlCp7FjD_Y_jcvAEd-8';
const IMG_LUMINA_G2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR6GqDigc7evX7gNtcemO3GipyxTtg5pUDWQj__jhsFLb8t0VqhI9CHyxhsOtXmcyjSzFpNftDZYQw0J1-_JYq-pAFI9SOAaFkyqrLExU3domfT8PEYKOuDKx-7penDx5eQvQqHYL2gU1VJ8nO6czhIWuBgdVWo4rmcOf3V632cZYfuZJ9Xtg2iiV0PZiltNq75vPMokX1ujZjr8DG3BmW-ZlOa8qZiigZmcIndZW-PhIlWF78x8MHhA_3ICrTs8fDgqca4L311_Vl';
const IMG_LUMINA_G3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsA65CW780XPlausXn9wwh8u7uU5GkOwELtv_lHohd-EWuIAxelDMccFveDxiDb-kqg6PFVr_YSssk8iV9-awYg381542LPat8owbZYz4n0roMJb9uZ7f097av6E72A2zK4i0TPedaiTm290MzGo8hT8etzfW-q4VmsbfADYyTZAuiPTtGbn3PwHI1zw_SiE3Sowv86ij7HYywgYuk09VB3XQbiKGYhJo7YPlvha63VdLrkhY6IlwCwXN1BDEtTXEW2V6voc7Z2rAy';
const IMG_VORTEX = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX4FZdquPJ_etk-VHBX6HXEcp0Oj_TcfeuKvEez4kr67U9eltMwhLhrphzmM5ilIXG5deAbM7Urqm8hvMpRYW_Oj33cadJF_hdhqBV4_GiGmhCmmdsUcV1GzOeNGHBQ39yhDmbkYTq_vY3bgZFHVH3ktu81sheCCSzYWZ4pNk1O2M1L6FbjSRApNyNhns1qolug_KAO0SCaF8Xc1XwcD2DvRNc4tvIKsjiAJXOMSbmNHWqtaAONtB9TWFLBA-CCITmov6SAYUjHP3t';
const IMG_PULSE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk5INmoHxS4iaotYHSk0fN6jeaAkNCpvSxvo1bu8L_knLeog9wA3XylALdar1edJ6V9iNBq8SQ7RA47xP4KbbtqBZE4PXjnYXbK20sHmyrHCKrdlymRA9tkxMFzw8bh1Fi1CLjmX-hqGV86-QE7sm9L4c7DuJ1B_vlPfZBjEAZyhkpGQ3yyyR806HozXk67hjsvdtIG2MSiaI7jjxP_Ais0MuIgIfbffJnhuUXGuPdMPRq-773Kj2C-lW1XtOJYrTzFUnsoim1nq4v';
const IMG_MODURA = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4mwao1FTpdQgudQ8nUJnLymJxtpL7YyU3SUcUlCE65Qt8xYgakRz8NpIMzxRjBjnSp88agWLC2Mji8fPerzncaCLYlZ-4JPpuLhFCryAbRrDz8gkap9lUwAbLXKW0AzX75KNsb3RJ7GDuHLHtnPfAEKpWknTuBlnjWEfBq6DM8TjH4kcEhi2kmOp69uczYiQ6HMr6Ic6GPnTT7jGWq8rgMiUuPh6N20Lv-91pfElxzPwkmokAA4FuVJrEUxsKmHrMF2hlaDPqWEEb';

export const projectsData: ProjectData[] = [
  {
    slug: 'homeliving',
    title: 'HomeLiving Furniture E-Commerce',
    category: 'E-commerce',
    filterTag: 'Website',
    shortDescription: 'A modern e-commerce platform for furniture and home living products.',
    overviewText: [
      'HomeLiving is an online furniture store that focuses on selling home decor and furniture products across Indonesia.',
      'The challenge was to create a scalable e-commerce system that is easy to manage while providing a smooth shopping experience for customers.'
    ],
    mission: 'Build a reliable and user-friendly e-commerce platform to increase online sales and brand trust.',
    client: 'HomeLiving Indonesia',
    impactMetric: {
      value: 'Online Presence',
      label: 'Improved Sales Channel',
      subtext: 'Helping business transition into digital commerce.'
    },
    tags: [
      { name: 'Laravel', colorClass: 'text-primary' },
      { name: 'MySQL', colorClass: 'text-secondary' },
      { name: 'Tailwind', colorClass: 'text-tertiary' },
    ],
    heroImage: '/projects/homeliving/homeliving1.png',
    demoLink: 'https://homeliving.co.id', // Placeholder
    features: [
      { icon: 'shopping_cart', title: 'E-commerce System', description: 'Full online store with product management, cart, and checkout.', colSpan: 2 },
      { icon: 'inventory', title: 'Product Management', description: 'Admin can easily manage products, categories, and stock.', colSpan: 1 },
      { icon: 'payments', title: 'Flexible Payment', description: 'Supports manual payment and integration-ready structure.', colSpan: 1 },
      { icon: 'dashboard', title: 'Admin Dashboard', description: 'Centralized dashboard for managing orders and customers.', colSpan: 2 },
    ],
    techStack: ['Laravel', 'MySQL', 'Blade', 'Tailwind'],
    gallery: ['/projects/homeliving/homeliving2.png', '/projects/homeliving/homeliving3.png', '/projects/homeliving/homeliving4.png'],
  },

  {
    slug: 'holiday-bali-villa',
    title: 'Holiday Bali Villa Platform',
    category: 'Website',
    filterTag: 'Website',
    shortDescription: 'Villa listing and discovery platform for Bali tourism market.',
    overviewText: [
      'Holiday Bali Villa is a platform that showcases villa listings in Bali to attract tourists and potential customers.',
      'The focus was to create a visually appealing and informative website that builds trust for international visitors.'
    ],
    mission: 'Help villa businesses gain online visibility and attract international bookings.',
    client: 'Bali Villa Listing Platform',
    impactMetric: {
      value: 'Global Reach',
      label: 'Tourist Visibility',
      subtext: 'Designed to target international users.'
    },
    tags: [
      { name: 'Laravel', colorClass: 'text-primary' },
      { name: 'API', colorClass: 'text-secondary' },
    ],
    heroImage: '/projects/holidaybalivilla/holidaybalivilla1.png',
    demoLink: '', // Empty as requested to test disabled state
    features: [
      { icon: 'villa', title: 'Villa Listings', description: 'Display villa data with images, pricing, and details.', colSpan: 2 },
      { icon: 'map', title: 'Location Integration', description: 'Google Maps integration for better navigation.', colSpan: 1 },
      { icon: 'language', title: 'International Ready', description: 'Content optimized for global audience.', colSpan: 1 },
      { icon: 'contact_phone', title: 'Direct Inquiry', description: 'Users can directly contact via WhatsApp.', colSpan: 2 },
    ],
    techStack: ['Laravel', 'Google Maps API', 'Blade'],
    gallery: ['/projects/holidaybalivilla/holidaybalivilla2.png', '/projects/holidaybalivilla/holidaybalivilla3.png', '/projects/holidaybalivilla/holidaybalivilla4.png'],
  },

  {
    slug: 'paulus-connect',
    title: 'PaulusConnect Mobile App',
    category: 'Mobile App',
    filterTag: 'Mobile App',
    shortDescription: 'A mobile app for church services, community, and spiritual engagement.',
    overviewText: [
      'PaulusConnect is a mobile application designed to help church members access services, events, and spiritual content.',
      'The app integrates backend API and notification systems to improve communication between church and members.'
    ],
    mission: 'Digitize church services and improve engagement with members.',
    client: 'Church Community',
    impactMetric: {
      value: 'Community Engagement',
      label: 'Better Communication',
      subtext: 'Improved interaction between admin and members.'
    },
    tags: [
      { name: 'Flutter', colorClass: 'text-primary' },
      { name: 'Laravel API', colorClass: 'text-secondary' },
      { name: 'Firebase', colorClass: 'text-tertiary' },
    ],
    heroImage: '/projects/paulusconnect/paulusconnect1.png',
    demoLink: 'https://paulus-connect.homeliving.co.id/', // Placeholder
    features: [
      { icon: 'notifications', title: 'Push Notifications', description: 'Send real-time notifications for events and announcements.', colSpan: 2 },
      { icon: 'event', title: 'Event Management', description: 'Users can view and register for church events.', colSpan: 1 },
      { icon: 'account_circle', title: 'User Profile', description: 'Manage personal data and participation.', colSpan: 1 },
      { icon: 'menu_book', title: 'Spiritual Content', description: 'Access articles and religious materials.', colSpan: 2 },
    ],
    techStack: ['Flutter', 'Laravel', 'Firebase'],
    gallery: ['/projects/paulusconnect/paulusconnect2.png', '/projects/paulusconnect/paulusconnect3.png', '/projects/paulusconnect/paulusconnect4.png'],
  },

  {
    slug: 'strive-to-high',
    title: 'StriveToHigh Learning App',
    category: 'Mobile App',
    filterTag: 'Mobile App',
    shortDescription: 'A mental preparation learning app for people with disabilities.',
    overviewText: [
      'StriveToHigh is an educational application focused on mental preparation and personal development for people with disabilities.',
      'The system was designed to be simple, accessible, and easy to use for a wide range of users.'
    ],
    mission: 'Provide accessible learning tools to empower users with disabilities.',
    client: 'Educational / Social Initiative',
    impactMetric: {
      value: 'Accessibility',
      label: 'Inclusive Learning',
      subtext: 'Focused on usability and accessibility.'
    },
    tags: [
      { name: 'Flutter', colorClass: 'text-primary' },
      { name: 'Local Storage', colorClass: 'text-secondary' },
    ],
    heroImage: '/projects/strivetohigh/strivetohigh1.png',
    demoLink: 'https://strivetohigh.org/', // Empty as requested to test disabled state
    features: [
      { icon: 'school', title: 'Learning Modules', description: 'Structured content for mental preparation.', colSpan: 2 },
      { icon: 'accessibility', title: 'Accessible Design', description: 'Designed for ease of use and inclusivity.', colSpan: 1 },
      { icon: 'offline_bolt', title: 'Offline Support', description: 'Works without internet connection.', colSpan: 1 },
      { icon: 'psychology', title: 'Self Development', description: 'Focus on mindset and personal growth.', colSpan: 2 },
    ],
    techStack: ['Flutter', 'SQLite'],
    gallery: ['/projects/strivetohigh/strivetohigh2.png', '/projects/strivetohigh/strivetohigh3.png'],
  },
];

export const getProjectBySlug = (slug: string) =>
  projectsData.find((p) => p.slug === slug);

export const getAllProjectSlugs = () =>
  projectsData.map((p) => p.slug);
