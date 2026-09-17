import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Supporting images inside an article. The layout adapts to how many images
 * sit together:
 *   1  -> "feature"  centred, natural shape, with caption
 *   2  -> "pair"     side by side
 *   3  -> "mosaic"   one large + two stacked
 *   4  -> "spotlight" one wide lead image + a strip of three
 *   5+ -> "masonry"  flowing columns that keep each photo's shape
 * Every image opens in a full-screen viewer.
 */

function Lightbox({ images, index, onClose, onMove }) {
  const closeRef = useRef(null);
  const image = images[index];
  const many = images.length > 1;

  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onMove(1);
      if (event.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [onClose, onMove]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${images.length}`}
      className="fixed inset-0 z-[100] bg-[#061c30]/95 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white/80 text-[14px]" onClick={(e) => e.stopPropagation()}>
        <span className="font-semibold">{many ? `${index + 1} / ${images.length}` : 'Photo'}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-deep-navy text-white flex items-center justify-center transition-colors"
          aria-label="Close photo viewer"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20 pb-4">
        <figure className="max-w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <img src={image.src} alt={image.alt} className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl" />
          {image.caption && <figcaption className="mt-3 max-w-2xl text-center text-white/80 text-[14px] leading-relaxed">{image.caption}</figcaption>}
        </figure>

        {many && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onMove(-1); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:text-deep-navy text-white flex items-center justify-center transition-colors"
              aria-label="Previous photo"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onMove(1); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white hover:text-deep-navy text-white flex items-center justify-center transition-colors"
              aria-label="Next photo"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </>
        )}
      </div>

      {many && (
        <div className="flex justify-center gap-2 px-4 pb-5 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => onMove(i - index)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${i === index ? 'border-safety-yellow opacity-100' : 'border-transparent opacity-50 hover:opacity-90'}`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Tile({ image, index, onOpen, className = '', imgClassName = 'w-full h-full object-cover' }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative block overflow-hidden rounded-2xl bg-sky-tint focus:outline-none focus-visible:ring-4 focus-visible:ring-safety-yellow ${/(^|\s)w-/.test(className) ? '' : 'w-full'} ${className}`}
      aria-label={image.caption || image.alt || `Open photo ${index + 1}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`${imgClassName} transition-transform duration-700 group-hover:scale-[1.04]`}
      />
      <span className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/25 transition-colors" aria-hidden="true" />
      <span className="absolute right-3 bottom-3 w-9 h-9 rounded-full bg-white/90 text-deep-navy flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" aria-hidden="true">
        <span className="material-symbols-outlined text-[20px]">zoom_in</span>
      </span>
    </button>
  );
}

export default function ArticleGallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null);
  const count = images.length;

  const move = useCallback(
    (step) => setOpenIndex((current) => (current === null ? current : (current + step + count) % count)),
    [count]
  );
  const close = useCallback(() => setOpenIndex(null), []);

  if (count === 0) return null;

  let layout;

  if (count === 1) {
    const [image] = images;
    layout = (
      <figure className="mx-auto max-w-2xl">
        {/* Never upscale small photos - keep their natural size, capped to the column. */}
        <Tile image={image} index={0} onOpen={setOpenIndex} className="w-fit max-w-full mx-auto" imgClassName="block w-auto max-w-full h-auto max-h-[460px]" />
        {image.caption && <figcaption className="mt-3 text-center text-caption text-on-surface-variant">{image.caption}</figcaption>}
      </figure>
    );
  } else if (count === 2) {
    layout = (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {images.map((image, i) => (
          <Tile key={image.src + i} image={image} index={i} onOpen={setOpenIndex} className="aspect-[4/3]" />
        ))}
      </div>
    );
  } else if (count === 3) {
    layout = (
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-2 gap-3 sm:gap-4 sm:h-[420px]">
        <Tile image={images[0]} index={0} onOpen={setOpenIndex} className="col-span-2 aspect-[4/3] sm:aspect-auto sm:row-span-2" />
        <Tile image={images[1]} index={1} onOpen={setOpenIndex} className="aspect-square sm:aspect-auto" />
        <Tile image={images[2]} index={2} onOpen={setOpenIndex} className="aspect-square sm:aspect-auto" />
      </div>
    );
  } else if (count === 4) {
    layout = (
      <div className="space-y-3 sm:space-y-4">
        <Tile image={images[0]} index={0} onOpen={setOpenIndex} className="aspect-[16/9]" />
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {images.slice(1).map((image, i) => (
            <Tile key={image.src + i} image={image} index={i + 1} onOpen={setOpenIndex} className="aspect-[4/3]" />
          ))}
        </div>
      </div>
    );
  } else {
    layout = (
      <div className="columns-2 md:columns-3 gap-3 sm:gap-4 [&>*]:mb-3 sm:[&>*]:mb-4">
        {images.map((image, i) => (
          <Tile key={image.src + i} image={image} index={i} onOpen={setOpenIndex} className="break-inside-avoid" imgClassName="w-full h-auto" />
        ))}
      </div>
    );
  }

  return (
    <div className="my-10">
      {count > 1 && (
        <div className="flex items-center justify-between gap-3 mb-4 px-1">
          <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-deep-navy">
            <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">photo_library</span>
            Photo gallery
            <span className="font-semibold text-on-surface-variant normal-case tracking-normal">· {count} photos</span>
          </p>
          <button
            type="button"
            onClick={() => setOpenIndex(0)}
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary hover:underline"
          >
            View full screen
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">open_in_full</span>
          </button>
        </div>
      )}

      {layout}

      {openIndex !== null && <Lightbox images={images} index={openIndex} onClose={close} onMove={move} />}
    </div>
  );
}
