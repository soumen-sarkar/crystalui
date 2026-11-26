// Featured work. Facts in `context`, `industry` and `platform` come from each project's public website.
// Anything starting with "[To confirm]" is a placeholder for YOUR details and is highlighted on the page.
// ⚠ NEEDS YOUR APPROVAL: permission to show each project, your exact contribution, and any outcomes.
// Do not add results or screenshots unless they are real and you are permitted to publish them.
//
// To add a real screenshot: put the file in src/assets/ and set  image: new URL('../assets/file.webp', import.meta.url)
// (or import it) — the placeholder composition is replaced automatically.

import buyhiImg from 'url:../assets/projects/buyHi.png';
import mhwImg from 'url:../assets/projects/mhwLtd.png';
import pureInstinct from 'url:../assets/projects/pureInstinct.png';
import trylyClear from 'url:../assets/projects/trylyClear.png';
import digiCom from 'url:../assets/projects/digiCom.png';
import entreprenista from 'url:../assets/projects/entreprenista.png';
import selectsoftwarereviews from 'url:../assets/projects/selectsoftwarereviews.png';

export const projects = [
  {
    slug: 'buyhi',
    name: 'Human Improvement',
    brand: 'Human Improvement',
    url: 'https://buyhi.co/',
    industry: 'Health & wellness — dietary supplements',
    type: 'E-commerce storefront',
    platform: 'Shopify',
    summary: 'A Shopify storefront for a supplement brand selling single products, bundles and accessories.',
    context:
      'Human Improvement (buyhi.co) is a supplement brand selling products such as MSM and creatine, plus protein powders, shakers and bundles. The storefront combines a clear hero, benefit highlights, customer reviews and product collections.',
    challenge: 'Create a dedicated, conversion-focused landing page for the MSM Cellular Detox product while maintaining the existing product detail page experience.',
    role: 'Led end-to-end frontend development, translating Figma designs into responsive Shopify sections and integrating product functionality.',
    implementation: 'Built reusable custom Shopify sections, dynamic variant and bundle pricing, subscription integration, sticky add-to-cart functionality, and interactive content modules.',
    uiDecisions: 'Prioritized mobile responsiveness, clear product messaging, intuitive bundle selection, horizontal scrolling sections, and consistent CTA placement.',
    outcomes: [], // Add only verified outcomes, e.g. 'Reduced theme JavaScript by X%' — leave empty otherwise.
    tech: ['Shopify Liquid', 'Shopify Metafields', 'JavaScript', 'HTML5', 'SCSS', 'Recharge', 'Figma'],
    visual: { variant: 'a', accent: '#9FE870', ground: '#163D2A' },
    image: buyhiImg,
  },
  {
    slug: 'mhw-ltd',
    name: 'MHW Ltd',
    brand: 'MHW',
    url: 'https://www.mhwltd.com/',
    industry: 'Beverage alcohol — importing, wholesale and back-office services',
    type: 'Corporate website with client resources',
    platform: 'WordPress',
    summary: 'A content-rich corporate website for a US and EU beverage alcohol importer and wholesaler.',
    context:
      'MHW is a beverage alcohol importer, wholesaler and back-office service provider for the US and EU. The website explains its services, company and insights, and links clients and customers to portals and order tools.',
    challenge: 'Maintaining and improving the MHW WordPress website while ensuring plugin compatibility, security, performance, and consistent functionality across staging and production environments.',
    role: 'Led WordPress maintenance, troubleshooting, environment updates, mega menu improvements, and performance optimization.',
    implementation: 'Updated WordPress core, PHP, and plugins; resolved widget and Gutenberg reusable block issues; debugged desktop navigation; and managed WP Rocket licensing and caching configurations.',
    uiDecisions: 'Improved desktop mega menu accessibility and navigation consistency while preserving mobile functionality and responsive layouts.',
    outcomes: [],
    tech: ['WordPress', 'PHP', 'JavaScript', 'Gutenberg', 'WP Engine', 'WP Rocket', 'HTML5', 'CSS3'],
    visual: { variant: 'b', accent: '#C9F5AE', ground: '#17231D' },
    image: mhwImg,
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
    challenge: 'Improve the Shopify product review testimonial experience by ensuring that featured Key Reviews reflect genuinely positive customer feedback rather than relying solely on star ratings.',
    role: 'Handled the investigation, identified the review-selection issue, and proposed improvements to the existing Judge.me integration.',
    implementation: 'Enhanced the review-selection logic to evaluate both star ratings and review text, filtering out clearly negative feedback before displaying testimonials.',
    uiDecisions: 'Prioritized relevant, trustworthy customer testimonials to improve product credibility and customer confidence.',
    outcomes: [],
    tech: ['Shopify Liquid', 'Shopify Metafields', 'JavaScript', 'HTML5', 'CSS3', 'Judge.me', 'API/Metafields', 'DOM Manipulation'],
    visual: { variant: 'c', accent: '#9FE870', ground: '#F8F9F5' },
    image: pureInstinct,
  },
  {
    slug: 'truly-clear',
    name: 'Truly Clear',
    brand: 'Truly Clear',
    url: 'https://www.trulyclear.com/',
    industry: 'Skincare — acne care and anti-aging',
    type: 'E-commerce storefront',
    platform: 'Shopify',
    summary: 'A Shopify storefront for a direct-to-consumer skincare brand selling acne treatments, patches and bundles.',
    context:
      'Truly Clear (trulyclear.com) is a U.S.-based online skincare retailer selling plant-based acne and anti-aging products, including an acne treatment bar, hydrocolloid acne patches, silicone wrinkle patches and exfoliating pads, plus bundles. The storefront combines promotional banners, best sellers, customer testimonials, an ingredients section and a 30-day money-back guarantee.',
    challenge: 'Create a clear, conversion-focused skincare storefront that helps shoppers explore acne and wrinkle-care products, understand offers, and shop confidently.',
    role: 'Contributed to Shopify storefront development, implementing custom product-page experiences and refining the shopping journey.',
    implementation: 'Integrated Judge.me review data through Shopify metafields and developed custom testimonial selection and display logic.',
    uiDecisions: 'Highlighted product benefits, promotional bundles, customer reviews, and straightforward navigation to reduce friction and build trust.',
    outcomes: [], // Add only verified outcomes; leave empty otherwise.
    tech: ['Shopify', 'Shopify Liquid', 'JavaScript', 'SCSS'],
    visual: { variant: 'b', accent: '#C9F5AE', ground: '#17231D' },
    image: trylyClear,
  },
  {
    slug: 'digicom',
    name: 'Digicom',
    brand: 'Digicom',
    url: 'https://www.digicom.io/',
    industry: 'Digital Marketing & E-commerce Growth',
    type: 'Agency Website',
    platform: 'Webflow',
    summary: "A modern digital agency website showcasing Digicom's growth marketing services, client partnerships, performance results, and e-commerce success stories.",
    context:
      'Digicom is a performance-focused digital marketing agency helping brands scale through paid media, creative strategy, influencer marketing, and conversion rate optimization.',
    challenge: "Create an engaging agency website that communicates Digicom's expertise, builds trust through client success stories, and helps potential clients explore its services and proven results.",
    role: 'Front-End Developer, contributing to website development, responsive UI implementation, and interactive content presentation.',
    implementation: "Developed and refined responsive website sections, service presentations, client case-study layouts, and interactive elements to support the agency's digital presence and lead-generation goals.",
    uiDecisions: "Used bold typography, strong visual hierarchy, prominent performance metrics, client logos, and structured case-study sections to make the agency's capabilities easy to understand and explore.",
    outcomes: [], // Add only verified outcomes, e.g. 'Reduced theme JavaScript by X%' — leave empty otherwise.
    tech: ["Webflow",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "CMS"],
    visual: { variant: 'b', accent: '#C9F5AE', ground: '#17231D' },
    image: digiCom,
  },
  {
    slug: 'entreprenista',
    name: 'Entreprenista',
    brand: 'Entreprenista',
    url: 'https://www.entreprenista.com/',
    industry: "Media, Entrepreneurship & Women's Business Community",
    type: 'Content & Community Website',
    platform: 'Webflow',
    summary: 'A content-driven digital platform empowering women entrepreneurs through founder stories, business insights, podcasts, and community resources.',
    context:
      'Entreprenista provides a digital destination for women founders to discover entrepreneurial knowledge, inspiring stories, educational content, and opportunities to connect with a supportive business community.',
    challenge: 'Develop and maintain an engaging, responsive website that presents a large volume of editorial content while preserving marketing attribution as visitors navigate between articles and blog content.',
    role: 'Lead Website Developer, responsible for website development, front-end implementation, and custom JavaScript functionality.',
    implementation: "Led website development and implemented a custom JavaScript solution to capture UTM parameters from the current URL and dynamically append them to blog content links, helping preserve campaign attribution throughout the user's browsing journey.",
    uiDecisions: 'Prioritized clear content hierarchy, intuitive navigation, responsive layouts, and accessible content links to support article discovery and provide a seamless browsing experience across devices.',
    outcomes: [],
    tech: ["Webflow",
    "JavaScript",
    "HTML5",
    "CSS3",
    "DOM Manipulation",
    "UTM Tracking",
    "Responsive Web Design"],
    visual: { variant: 'c', accent: '#9FE870', ground: '#F8F9F5' },
    image: entreprenista,
  },
  {
    slug: 'selectsoftware-reviews-advisor-form',
    name: 'Select Software Reviews',
    brand: 'Select Software Reviews',
    url: 'https://www.selectsoftwarereviews.com/',
    industry: 'B2B Software Reviews & Technology Consulting',
    type: 'Lead Generation & Advisor Consultation',
    platform: 'Website CMS with HubSpot Integration',
    summary: 'Maintained and enhanced the master Talk to an Advisor form, creating a streamlined lead-generation experience connected to HubSpot.',
    context:
      'Select Software Reviews helps businesses discover and compare software solutions through expert reviews, recommendations, and personalized advisor guidance.',
    challenge: "Maintain a reliable and user-friendly advisor inquiry form that captures prospective customers' information and supports lead generation through the website and HubSpot.",
    role: 'Front-End Developer responsible for updating, managing, and enhancing the master Talk to an Advisor form.',
    implementation: 'Updated and maintained the master advisor form using HTML5 and custom JavaScript. Implemented form interactions and validation, and integrated the form submission flow with HubSpot to capture and route leads into the CRM.',
    uiDecisions: 'Focused on a clear form structure, intuitive field interactions, appropriate validation feedback, and a straightforward submission experience to reduce friction for prospective customers.',
    outcomes: [], // Add only verified outcomes, e.g. 'Reduced theme JavaScript by X%' — leave empty otherwise.
    tech: ["HTML5",
    "JavaScript",
    "CSS3",
    "HubSpot Forms",
    "DOM Manipulation",
    "Form Validation",
    "CRM Integration"],
    visual: { variant: 'a', accent: '#9FE870', ground: '#163D2A' },
    image: selectsoftwarereviews,
  },
];

export const isPlaceholder = (text) => typeof text === 'string' && text.startsWith('[To confirm]');
