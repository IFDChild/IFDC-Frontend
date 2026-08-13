import fs from 'fs/promises';
import path from 'path';

async function main() {
  const screensRaw = await fs.readFile('./screens.json', 'utf8');
  const screens = JSON.parse(screensRaw);
  
  for (const screen of screens) {
    console.log("Fetching " + screen.filename + "...");
    try {
      const res = await fetch(screen.url);
      if (!res.ok) {
        console.error("Failed to fetch " + screen.filename + ": " + res.statusText);
        continue;
      }
      let html = await res.text();
      
      // Remove script tags entirely
      html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
      
      // Basic HTML to JSX Conversion
      // 1. Replace class= with className=
      html = html.replace(/class=/g, 'className=');
      // 2. Replace for= with htmlFor=
      html = html.replace(/for=/g, 'htmlFor=');
      // 3. Self-close void elements
      html = html.replace(/<(img|input|br|hr|meta|link)\b([^>]*?)(?<!\/\s*)>/gi, '<$1$2 />');
      html = html.replace(/<\/(img|input|br|hr|meta|link)>/gi, '');
      // 4. Remove HTML comments
      html = html.replace(/<!--([\s\S]*?)-->/g, '');
      
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
        return "style={" + JSON.stringify(styleObj) + "}";
      });
      
      // SVG paths closing and fixing common SVG issues
      html = html.replace(/<(path|circle|line|polyline|polygon|rect|ellipse|use)\b([^>]*?)(?<!\/\s*)>/gi, '<$1$2 />');
      html = html.replace(/<\/(path|circle|line|polyline|polygon|rect|ellipse|use)>/gi, '');
      // Fix svg fill-rule, clip-rule, stroke-width, stroke-linecap, stroke-linejoin, etc
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

      // Extract the body content if it's a full HTML document
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) {
        html = bodyMatch[1];
      }

      const componentName = screen.filename.replace('.jsx', '');
      
      const jsxContent = "import React from 'react';\n\nexport default function " + componentName + "() {\n  return (\n    <>\n" + html + "\n    </>\n  );\n}\n";

      await fs.writeFile(path.join('./src/pages', screen.filename), jsxContent, 'utf8');
      console.log("Successfully converted and wrote " + screen.filename);
    } catch (e) {
      console.error("Error processing " + screen.filename + ":", e);
    }
  }
}

main();
