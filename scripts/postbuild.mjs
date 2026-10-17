// Runs after `parcel build`: copies public/, adds the GitHub Pages SPA fallback,
// and generates robots.txt, sitemap.xml and (optionally) CNAME.
import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs';

const site = (process.env.SITE_URL || 'https://your-domain.com').replace(/\/$/, '');
const domain = process.env.CUSTOM_DOMAIN || '';

if (existsSync('public')) cpSync('public', 'dist', { recursive: true });

// GitHub Pages serves 404.html for unknown paths → same app shell, so /work/buyhi works on refresh.
writeFileSync('dist/404.html', readFileSync('dist/index.html'));
writeFileSync('dist/.nojekyll', '');
if (domain) writeFileSync('dist/CNAME', `${domain}\n`);

const projectSrc = readFileSync('src/data/projects.js', 'utf8');
const slugs = [...projectSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
const routes = ['/', '/services', '/work', ...slugs.map((s) => `/work/${s}`), '/about', '/testimonials', '/contact'];
const today = new Date().toISOString().slice(0, 10);

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((r) => `  <url><loc>${site}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`
);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
console.log(`postbuild: ${routes.length} routes, site=${site}${domain ? `, CNAME=${domain}` : ''}`);
