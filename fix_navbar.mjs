import fs from 'fs/promises';
import path from 'path';

async function main() {
  const pagesDir = './src/pages';
  const files = await fs.readdir(pagesDir);

  for (const file of files) {
    if (!file.endsWith('.jsx')) continue;

    const filePath = path.join(pagesDir, file);
    let content = await fs.readFile(filePath, 'utf8');

    // Add Navbar import if not already present
    if (!content.includes("import Navbar from '../components/Navbar'")) {
      content = content.replace(
        "import React from 'react';",
        "import React from 'react';\nimport Navbar from '../components/Navbar';"
      );
    }

    // Replace any <header ...>...</header> block with <Navbar />
    // This regex matches the full header element including nested tags
    // We use a state-machine approach since regex can't handle arbitrary nesting
    let result = '';
    let i = 0;
    let replaced = false;

    while (i < content.length) {
      // Find next <header
      const headerStart = content.indexOf('<header', i);
      if (headerStart === -1 || replaced) {
        result += content.slice(i);
        break;
      }

      // Copy everything before the <header
      result += content.slice(i, headerStart);

      // Find the matching </header> by tracking depth
      let depth = 0;
      let j = headerStart;
      while (j < content.length) {
        if (content.startsWith('<header', j)) {
          depth++;
          j += 7;
        } else if (content.startsWith('</header>', j)) {
          depth--;
          if (depth === 0) {
            j += 9; // skip past </header>
            break;
          }
          j += 9;
        } else {
          j++;
        }
      }

      // Replace the found header block with <Navbar />
      result += '<Navbar />';
      i = j;
      replaced = true; // Only replace first header per file
    }

    content = result;
    await fs.writeFile(filePath, content, 'utf8');
    console.log('Updated navbar in ' + file);
  }
}

main();
