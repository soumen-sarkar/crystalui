// Central site configuration. Edit here — no React component changes needed.
// Values read from process.env are inlined at build time (see README → Configuration).

export const site = {
  name: 'CRYSTAL UI',
  // Production URL, used for canonical/OG tags. Set SITE_URL when building.
  url: (process.env.SITE_URL || 'https://your-domain.com').replace(/\/$/, ''),

  // Shows a visible "demo content" flag on anything that still needs your approval.
  // Set to false once real content is in place.
  showDemoNotices: true,

  // Contact. NOTHING here is published until you set it.
  contact: {
    email: process.env.CONTACT_EMAIL || '', // e.g. hello@yourdomain.com
    // Optional form service endpoint (e.g. a Formspree form URL). Public endpoints only — never a secret key.
    formEndpoint: process.env.FORM_ENDPOINT || '',
  },

  // Add URLs when supplied. Empty values are hidden automatically.
  social: {
    linkedin: '',
    github: '',
  },

  nav: [
    { label: 'Services', to: '/services' },
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Clients', to: '/testimonials' },
    { label: 'Contact', to: '/contact' },
  ],

  hero: {
    eyebrow: 'Independent web development studio',
    lines: ['Your vision.', 'Thoughtfully', 'engineered.'],
    lead:
      'CRYSTAL UI designs, builds and improves websites and online stores — on Shopify, WordPress and custom React front ends. You talk directly to the developer doing the work, backed by a small team of skilled developers.',
    primaryCta: 'Discuss your project',
    secondaryCta: 'Explore our work',
    trust: 'Developer-led. Built with care. Supported by a skilled team.',
  },

  trust: {
    heading: 'Selected collaborations',
    platforms: ['Shopify', 'WordPress', 'React', 'Angular', 'Svelte'],
  },

  why: [
    { title: 'Talk to the developer', text: 'You discuss your project directly with the person building it — no account managers in between.' },
    { title: 'Scope before code', text: 'Requirements are reviewed and an estimate is agreed before implementation starts.' },
    { title: 'A team when it helps', text: 'A small team of skilled developers can support delivery when a project needs more hands.' },
    { title: 'Careful UI work', text: 'Layouts that hold up across devices, with attention to detail and design fidelity.' },
    { title: 'Code you can keep', text: 'Maintainable, reusable code that your next developer can pick up without a rewrite.' },
    { title: 'Fast, accessible, responsive', text: 'Performance, accessibility and responsive behaviour are part of the build, not an add-on.' },
  ],

  process: [
    { n: '01', title: 'Understand', text: 'Discuss goals, users, requirements and constraints.' },
    { n: '02', title: 'Define', text: 'Review the scope, propose an approach and agree on an estimate.' },
    { n: '03', title: 'Build', text: 'Implement with attention to design fidelity, code quality, responsiveness and performance.' },
    { n: '04', title: 'Refine', text: 'Review, test, resolve feedback and prepare the work for release.' },
    { n: '05', title: 'Support', text: 'Follow-up improvements and ongoing development support, as agreed.' },
  ],

  about: {
    title: ['A studio you can', 'talk to directly.'],
    intro:
      'CRYSTAL UI is an independent web development studio. Every project is led by one developer who handles the conversation, the scoping and the technical decisions — and brings in skilled developers when a project needs more hands.',
    model: [
      { title: 'One point of contact', text: 'You always know who is responsible for your project and who to ask.' },
      { title: 'Requirements first', text: 'We review what you need, then estimate. Implementation begins once the scope is agreed.' },
      { title: 'Team where it helps', text: 'A small team of skilled developers supports larger builds, parallel workstreams and ongoing maintenance.' },
    ],
    principles: [
      'Maintainable, reusable code over clever shortcuts.',
      'Responsive layouts and accessible interfaces by default.',
      'Clear scope and honest estimates before work begins.',
      'Plain-language communication, whatever your technical background.',
    ],
    capabilities: [
      'Shopify', 'WordPress', 'React', 'Angular', 'Svelte', 'JavaScript',
      'HTML, CSS & SCSS', 'Figma to code', 'Accessibility', 'Performance optimisation',
    ],
  },

  contactPage: {
    title: ['Have a project in mind?', "Let's make it happen."],
    lead: "Tell me what you're building, what needs improving, or where your team needs development support.",
  },

  footer: {
    statement: 'An independent web development studio. Direct access to the developer, with a small team behind the work.',
  },
};

// Per-route SEO. Titles are kept under ~60 characters.
export const seo = {
  home: {
    title: 'CRYSTAL UI — Web development studio for Shopify, WordPress and React',
    description:
      'CRYSTAL UI is an independent web development studio. Work directly with the developer building your site, backed by a small team of skilled developers.',
    path: '/',
  },
  services: {
    title: 'Services — Shopify, WordPress and frontend development | CRYSTAL UI',
    description: 'Shopify and WordPress development, React and Angular frontends, custom websites, UI engineering and ongoing development support.',
    path: '/services',
  },
  work: {
    title: 'Work — Selected projects | CRYSTAL UI',
    description: 'Selected development collaborations: BuyHi, MHW Ltd and Pure Instinct.',
    path: '/work',
  },
  about: {
    title: 'About — A studio you can talk to | CRYSTAL UI',
    description: 'An independent web developer leading a small team of skilled developers. How CRYSTAL UI works with clients.',
    path: '/about',
  },
  testimonials: {
    title: 'Client feedback | CRYSTAL UI',
    description: 'What clients say about working with CRYSTAL UI.',
    path: '/testimonials',
  },
  contact: {
    title: 'Contact — Start a project | CRYSTAL UI',
    description: 'Tell CRYSTAL UI what you are building or what needs improving. Get a clear scope and estimate before work begins.',
    path: '/contact',
  },
  notFound: {
    title: 'Page not found | CRYSTAL UI',
    description: 'This page could not be found.',
    path: '/404',
  },
};
