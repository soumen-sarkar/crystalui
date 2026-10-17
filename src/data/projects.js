// Featured work. Facts in `context`, `industry` and `platform` come from each project's public website.
// Anything starting with "[To confirm]" is a placeholder for YOUR details and is highlighted on the page.
// ⚠ NEEDS YOUR APPROVAL: permission to show each project, your exact contribution, and any outcomes.
// Do not add results or screenshots unless they are real and you are permitted to publish them.
//
// To add a real screenshot: put the file in src/assets/ and set  image: new URL('../assets/file.webp', import.meta.url)
// (or import it) — the placeholder composition is replaced automatically.

export const projects = [
  {
    slug: 'buyhi',
    name: 'BuyHi',
    brand: 'Human Improvement',
    url: 'https://buyhi.co/',
    industry: 'Health & wellness — dietary supplements',
    type: 'E-commerce storefront',
    platform: 'Shopify',
    summary: 'A Shopify storefront for a supplement brand selling single products, bundles and accessories.',
    context:
      'Human Improvement (buyhi.co) is a supplement brand selling products such as MSM and creatine, plus protein powders, shakers and bundles. The storefront combines a clear hero, benefit highlights, customer reviews and product collections.',
    challenge: '[To confirm] Describe the brief the client came with — for example, what needed building or improving on the storefront.',
    role: '[To confirm] Describe your specific contribution and where team members supported delivery. Delivered through a development collaboration; CRYSTAL UI does not own the brand.',
    implementation: '[To confirm] Describe the theme or storefront work you implemented.',
    uiDecisions: '[To confirm] Describe the key UI/UX decisions — product pages, navigation, mobile behaviour, and so on.',
    outcomes: [], // Add only verified outcomes, e.g. 'Reduced theme JavaScript by X%' — leave empty otherwise.
    tech: ['Shopify', '[To confirm] Liquid', '[To confirm] JavaScript', '[To confirm] SCSS'],
    visual: { variant: 'a', accent: '#9FE870', ground: '#163D2A' },
    image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/14568229/676820805-87ccefd4-4a5a-4eda-bfdb-a08bed0b3ae0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20261017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261017T184650Z&X-Amz-Expires=300&X-Amz-Signature=b4cceeb00cddc4ab3d870ac63e29b942c3c47b0ceb9ec302ac7f2ca9405db1b7&X-Amz-SignedHeaders=host&response-content-type=image%2Fpng',
  },
  {
    slug: 'mhw-ltd',
    name: 'MHW Ltd',
    brand: 'MHW',
    url: 'https://www.mhwltd.com/',
    industry: 'Beverage alcohol — importing, wholesale and back-office services',
    type: 'Corporate website with client resources',
    platform: '[To confirm]',
    summary: 'A content-rich corporate website for a US and EU beverage alcohol importer and wholesaler.',
    context:
      'MHW is a beverage alcohol importer, wholesaler and back-office service provider for the US and EU. The website explains its services, company and insights, and links clients and customers to portals and order tools.',
    challenge: '[To confirm] Describe the brief — for example, organising a large amount of service, client and resource content.',
    role: '[To confirm] Describe your specific contribution and where team members supported delivery. Delivered through a development collaboration; CRYSTAL UI does not own the brand.',
    implementation: '[To confirm] Describe the build — platform, templates, components and integrations.',
    uiDecisions: '[To confirm] Describe the key UI/UX decisions — navigation structure, content hierarchy, responsive behaviour.',
    outcomes: [],
    tech: ['[To confirm]'],
    visual: { variant: 'b', accent: '#C9F5AE', ground: '#17231D' },
    image: null,
  },
  {
    slug: 'pure-instinct',
    name: 'Pure Instinct',
    brand: 'Pure Instinct',
    url: 'https://pureinstinct.co/',
    industry: 'Beauty — pheromone fragrances',
    type: 'E-commerce storefront',
    platform: 'Shopify',
    summary: 'A Shopify storefront for a fragrance brand with a broad catalogue of perfume oils, sprays and mists.',
    context:
      'Pure Instinct (pureinstinct.co) is an online retailer of pheromone-infused fragrances, with collections including perfume oils, sprays and hair and body mists, press mentions and customer stories.',
    challenge: '[To confirm] Describe the brief the client came with.',
    role: '[To confirm] Describe your specific contribution and where team members supported delivery. Delivered through a development collaboration; CRYSTAL UI does not own the brand.',
    implementation: '[To confirm] Describe the theme or storefront work you implemented.',
    uiDecisions: '[To confirm] Describe the key UI/UX decisions — collection browsing, product pages, mobile experience.',
    outcomes: [],
    tech: ['Shopify', '[To confirm] Liquid', '[To confirm] JavaScript', '[To confirm] SCSS'],
    visual: { variant: 'c', accent: '#9FE870', ground: '#F8F9F5' },
    image: null,
  },
];

export const isPlaceholder = (text) => typeof text === 'string' && text.startsWith('[To confirm]');
