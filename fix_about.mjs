import fs from 'fs/promises';
import path from 'path';

// The latest About Us screen from Stitch - "About Us - DCSF (6 Members Per Row)"
const ABOUT_URL = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1OGQzMGM2Y2RjY2QwMWI0ZTYyMDRhMDE1NTJiEgsSBxDQzLj6ixkYAZIBIwoKcHJvamVjdF9pZBIVQhM2MjUzNTk3MTkyNjM2OTc1NzIw&filename=&opi=89354086';

function convertHtml(html) {
  // Remove script tags entirely
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  // Remove HTML comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  // class= -> className=
  html = html.replace(/class=/g, 'className=');
  // for= -> htmlFor=
  html = html.replace(/for=/g, 'htmlFor=');
  // Self-close void elements
  html = html.replace(/<(img|input|br|hr|meta|link)\b([^>]*?)(?<!\/\s*)>/gi, '<$1$2 />');
  html = html.replace(/<\/(img|input|br|hr|meta|link)>/gi, '');
  // Style attribute conversion
  html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    if (!p1.trim()) return '';
    const rules = p1.split(';').filter(r => r.trim());
    const styleObj = {};
    rules.forEach(rule => {
      const [key, val] = rule.split(':');
      if (key && val) {
        const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = val.trim();
      }
    });
    return 'style={' + JSON.stringify(styleObj) + '}';
  });
  // SVG paths
  html = html.replace(/<(path|circle|line|polyline|polygon|rect|ellipse|use)\b([^>]*?)(?<!\/\s*)>/gi, '<$1$2 />');
  html = html.replace(/<\/(path|circle|line|polyline|polygon|rect|ellipse|use)>/gi, '');
  // SVG attributes
  html = html.replace(/fill-rule=/g, 'fillRule=');
  html = html.replace(/clip-rule=/g, 'clipRule=');
  html = html.replace(/stroke-width=/g, 'strokeWidth=');
  html = html.replace(/stroke-linecap=/g, 'strokeLinecap=');
  html = html.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  html = html.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=');
  html = html.replace(/viewbox=/gi, 'viewBox=');
  html = html.replace(/tabindex=/g, 'tabIndex=');
  html = html.replace(/autocomplete=/g, 'autoComplete=');
  html = html.replace(/maxlength=/g, 'maxLength=');
  html = html.replace(/onclick=/g, 'onClick=');
  // Extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) html = bodyMatch[1];
  return html;
}

async function main() {
  console.log('Fetching latest About Us from Stitch...');
  const res = await fetch(ABOUT_URL);
  if (!res.ok) {
    console.error('Failed to fetch About Us:', res.statusText);
    return;
  }
  let html = await res.text();
  html = convertHtml(html);

  // Add react-router-dom Link imports and replace <a href with <Link to
  html = html.replace(/<a\b([^>]*?)href="([^"]*)"([^>]*?)>([\s\S]*?)<\/a>/gi, (match, beforeHref, oldHref, afterHref, innerText) => {
    if (oldHref.startsWith('http')) return match;
    const routes = [
      { keywords: ['about'], route: '/about' },
      { keywords: ['news', 'blog'], route: '/news' },
      { keywords: ['contact'], route: '/contact' },
      { keywords: ['resource'], route: '/resources' },
      { keywords: ['partner'], route: '/partner' },
      { keywords: ['volunteer'], route: '/volunteer' },
      { keywords: ['advocate'], route: '/advocate' },
      { keywords: ['impact', 'stories'], route: '/impact' },
      { keywords: ['strategic'], route: '/strategic-plan' },
      { keywords: ['annual report', 'report'], route: '/annual-report' },
      { keywords: ['policies', 'governance'], route: '/policies' },
      { keywords: ['profile', 'my account'], route: '/profile' },
      { keywords: ['home'], route: '/' }
    ];
    const cleanText = innerText.replace(/<[^>]*>?/gm, '').toLowerCase().trim();
    let route = '#';
    for (const { keywords, r } of routes) {
      for (const kw of keywords) {
        if (cleanText.includes(kw)) { route = r || '/'; break; }
      }
      if (route !== '#') break;
    }
    return '<Link' + beforeHref + 'to="' + route + '"' + afterHref + '>' + innerText + '</Link>';
  });

  const jsxContent = "import React from 'react';\nimport Navbar from '../components/Navbar';\nimport { Link } from 'react-router-dom';\n\nexport default function About() {\n  return (\n    <>\n<Navbar />\n" + html + "\n    </>\n  );\n}\n";

  await fs.writeFile('./src/pages/About.jsx', jsxContent, 'utf8');
  console.log('About.jsx updated with exact Stitch UI!');
}

main();
