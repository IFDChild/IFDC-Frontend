# Honorary Expert Panel portraits

Drop portrait images here, then wire them up in `src/pages/Advocate.jsx`:

1. Save the file, e.g. `emmanuel-adinkra.jpg`
2. Add an import at the top of `Advocate.jsx`:
   `import emmanuelAdinkra from '../assets/images/experts/emmanuel-adinkra.jpg';`
3. Set `photo: emmanuelAdinkra` on that person's entry in the `EXPERTS` array.

Entries left as `photo: null` show an initials avatar instead, so the page
works with any mix of supplied and missing photos.

Images are rendered in a square 80x80 slot (`object-cover`), so square or
centre-weighted portraits work best. Around 400x400px is plenty.
