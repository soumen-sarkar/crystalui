import { useEffect } from 'react';
import { site } from '../../data/siteContent.js';

function setMeta(selector, attr, value, create) {
  let el = document.head.querySelector(selector);
  if (!el && create) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  if (el) el.setAttribute(attr, value);
}

// Updates document title and meta tags per route.
export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${site.url}${path === '/' ? '/' : path}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description, { tag: 'meta', attrs: { name: 'description' } });
    setMeta('link[rel="canonical"]', 'href', url, { tag: 'link', attrs: { rel: 'canonical' } });
    setMeta('meta[property="og:title"]', 'content', title, { tag: 'meta', attrs: { property: 'og:title' } });
    setMeta('meta[property="og:description"]', 'content', description, { tag: 'meta', attrs: { property: 'og:description' } });
    setMeta('meta[property="og:url"]', 'content', url, { tag: 'meta', attrs: { property: 'og:url' } });
  }, [title, description, path]);
  return null;
}
