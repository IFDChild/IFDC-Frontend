# Resource PDFs

Any PDF placed in this folder is served at `/resources/<filename>`.

## Adding a resource

1. Copy the PDF into this folder (keep the filename simple: lowercase,
   hyphens instead of spaces, e.g. `parent-guide-2026.pdf`).
2. Add an entry to `src/data/resources.js`:

   ```js
   {
     file: 'parent-guide-2026.pdf',
     title: 'Parent Guide 2026',
     description: 'What every parent should know about…',
     category: 'Parents & Caregivers'
   }
   ```

That's it. File size is read from the server at runtime, so there is no
size field to keep up to date, and a file listed in the manifest but
missing from this folder shows as "Currently unavailable" instead of a
broken download link.

Categories live in `RESOURCE_CATEGORIES` at the top of the same file — add
a new one there (with a Material Symbols icon name) before using it.

## Note on file size

Large PDFs are slow to open in the in-page preview, which loads the whole
file. Anything above roughly 5 MB is worth compressing first.
