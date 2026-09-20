/**
 * Writes public/sitemap.xml: the fixed pages plus every published news post and
 * blog article from the API. Runs before each build, and falls back to the
 * fixed pages alone if the API cannot be reached.
 */

import { writeFile } from 'node:fs/promises';

const SITE_URL = (process.env.VITE_SITE_URL || 'https://ifdc-frontend.vercel.app').replace(/\/+$/, '');
const API_URL = (process.env.VITE_API_URL || 'https://ifdc-backend-production.up.railway.app').replace(/\/+$/, '');

const PAGES = [
  ['/', 1.0, 'weekly'],
  ['/about', 0.8, 'monthly'],
  ['/advocate', 0.8, 'monthly'],
  ['/strategic-plan', 0.7, 'yearly'],
  ['/impact', 0.7, 'monthly'],
  ['/resources', 0.8, 'weekly'],
  ['/news', 0.9, 'weekly'],
  ['/blogs', 0.9, 'weekly'],
  ['/annual-report', 0.6, 'yearly'],
  ['/partner', 0.6, 'yearly'],
  ['/contact', 0.6, 'yearly'],
  ['/donate', 0.6, 'yearly'],
  ['/volunteer', 0.6, 'yearly'],
  ['/policies', 0.4, 'yearly']
];

const fetchJson = async (path) => {
  try {
    const response = await fetch(`${API_URL}${path}`, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    console.warn(`sitemap: could not read ${path}, skipping those entries`);
    return [];
  }
};

const entry = (loc, priority, changefreq, lastmod) =>
  `  <url>\n    <loc>${SITE_URL}${loc}</loc>\n` +
  (lastmod ? `    <lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>\n` : '') +
  `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

const [news, blogs] = await Promise.all([fetchJson('/api/news'), fetchJson('/api/blogs')]);

const urls = [
  ...PAGES.map(([loc, priority, changefreq]) => entry(loc, priority, changefreq)),
  ...news.map((item) => entry(`/news/${item.slug}`, 0.7, 'monthly', item.updated_at || item.published_at || item.created_at)),
  ...blogs.map((item) => entry(`/blogs/${item.slug}`, 0.7, 'monthly', item.updated_at || item.published_at || item.created_at))
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
  .replace('http://www.sitemap.org', 'http://www.sitemaps.org');

await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap: ${urls.length} urls (${news.length} news, ${blogs.length} blogs)`);
