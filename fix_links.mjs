import fs from 'fs/promises';
import path from 'path';

const ROUTES_MAP = [
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

function determineRoute(text) {
  const cleanText = text.replace(/<[^>]*>?/gm, '').toLowerCase().trim();
  if (!cleanText) return '#';
  
  for (const { keywords, route } of ROUTES_MAP) {
    for (const kw of keywords) {
      if (cleanText.includes(kw)) {
        return route;
      }
    }
  }
  return '#';
}

async function main() {
  const pagesDir = './src/pages';
  const files = await fs.readdir(pagesDir);
  
  for (const file of files) {
    if (!file.endsWith('.jsx')) continue;
    
    const filePath = path.join(pagesDir, file);
    let content = await fs.readFile(filePath, 'utf8');
    
    // Add Link import if not present
    if (!content.includes("import { Link } from 'react-router-dom';")) {
      content = content.replace("import React from 'react';", "import React from 'react';\nimport { Link } from 'react-router-dom';");
    }
    
    // Replace <a href="...">...</a> with <Link to="...">...</Link>
    // We use a replacer function to determine the route
    content = content.replace(/<a\b([^>]*?)href="([^"]*)"([^>]*?)>([\s\S]*?)<\/a>/gi, (match, beforeHref, oldHref, afterHref, innerText) => {
      // If the old href is a real external link (http), keep it as <a>
      if (oldHref.startsWith('http')) {
        return match; // don't replace
      }
      
      const route = determineRoute(innerText);
      return '<Link' + beforeHref + 'to="' + route + '"' + afterHref + '>' + innerText + '</Link>';
    });
    
    await fs.writeFile(filePath, content, 'utf8');
    console.log('Fixed links in ' + file);
  }
}

main();
