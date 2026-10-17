// delivery: 'lead'  → led and built directly by the studio lead
//           'team'  → delivered with the support of the development team
// ⚠ NEEDS YOUR APPROVAL: confirm each service and its delivery label before launch.

export const services = [
  {
    id: 'shopify',
    title: 'Shopify Development',
    summary: 'Storefronts that are easy to shop and easy to manage.',
    points: [
      'Custom theme development',
      'Product and collection page customisation',
      'Responsive storefront enhancements',
      'Conversion-focused UI improvements',
    ],
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    delivery: 'lead',
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    summary: 'Content-managed websites your team can actually update.',
    points: [
      'Custom theme development',
      'Content-managed business websites',
      'Plugin integration and fixes',
      'Performance-minded, responsive builds',
    ],
    tags: ['WordPress', 'PHP', 'JavaScript'],
    delivery: 'lead',
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    summary: 'Modern interfaces built as clean, reusable components.',
    points: [
      'React, Angular and Svelte applications',
      'Maintainable component architecture',
      'Complex, data-driven interfaces',
      'Performance and accessibility',
    ],
    tags: ['React', 'Angular', 'Svelte', 'JavaScript'],
    delivery: 'lead',
  },
  {
    id: 'websites',
    title: 'Custom Website Development',
    summary: 'Business websites designed and built around how you work.',
    points: [
      'Business and marketing websites',
      'Custom web experiences',
      'Responsive, SEO-ready builds',
      'Design-to-code from Figma or Photoshop files',
    ],
    tags: ['HTML', 'CSS & SCSS', 'React'],
    delivery: 'team',
  },
  {
    id: 'consulting',
    title: 'UI Engineering & Code Review',
    summary: 'A second pair of expert eyes on your frontend.',
    points: [
      'Frontend architecture guidance',
      'Code reviews',
      'UI performance improvements',
      'Technical implementation advice',
    ],
    tags: ['Architecture', 'Code review', 'Performance'],
    delivery: 'lead',
  },
  {
    id: 'support',
    title: 'Ongoing Development Support',
    summary: 'Keep improving after launch, without starting over.',
    points: [
      'Feature development',
      'Bug fixing and maintenance',
      'Working alongside your existing developers and designers',
      'Flexible, as-agreed engagement',
    ],
    tags: ['Maintenance', 'Support'],
    delivery: 'team',
  },
];

export const deliveryLabels = {
  lead: 'Developer-led',
  team: 'Team-supported',
};
