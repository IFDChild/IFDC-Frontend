import React, { useState } from 'react';
import { FELLOW_REFLECTIONS } from '../data/fellowReflections';

// Face-centred portraits: src/assets/images/fellows/web/<slug>-square.jpg
const PORTRAITS = import.meta.glob('../assets/images/fellows/web/*-square.jpg', { eager: true, import: 'default' });

const portraitFor = (slug) => {
  const entry = Object.entries(PORTRAITS).find(([path]) => path.endsWith(`/${slug}-square.jpg`));
  return entry ? entry[1] : null;
};

const initials = (name) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();

const CLAMP_CHARS = 280;
const INITIAL_VISIBLE = 4;

function Avatar({ fellow, accent, size = 'w-14 h-14', text = 'text-[17px]' }) {
  const photo = portraitFor(fellow.slug);
  if (photo) {
    return (
      <img
        src={photo}
        alt={`Portrait of ${fellow.name}`}
        loading="lazy"
        className={`${size} rounded-full object-cover shrink-0 ring-[3px] ring-white shadow-md`}
      />
    );
  }
  return (
    <span
      className={`${size} ${text} rounded-full shrink-0 ring-[3px] ring-white shadow-md flex items-center justify-center font-bold text-white`}
      style={{ backgroundColor: accent }}
      aria-hidden="true"
    >
      {initials(fellow.name)}
    </span>
  );
}

function ReflectionCard({ fellow, accent }) {
  const [expanded, setExpanded] = useState(false);
  const long = fellow.quote.length > CLAMP_CHARS;
  const shown = expanded || !long ? fellow.quote : `${fellow.quote.slice(0, CLAMP_CHARS).replace(/\s+\S*$/, '')}…`;

  return (
    <figure
      className="break-inside-avoid mb-5 rounded-2xl p-5 md:p-6 border-l-4 relative"
      style={{ backgroundColor: `${accent}0d`, borderLeftColor: accent }}
    >
      <span
        className="absolute top-3 right-5 font-display-lg text-[4rem] leading-none select-none"
        style={{ color: `${accent}33` }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <figcaption className="flex items-center gap-3.5 mb-4 pr-10">
        <Avatar fellow={fellow} accent={accent} />
        <div className="min-w-0">
          <p className="font-headline-md text-[1rem] font-bold text-deep-navy leading-snug">{fellow.name}</p>
          <p className="text-caption leading-snug mt-0.5" style={{ color: accent }}>{fellow.role}</p>
        </div>
      </figcaption>

      <blockquote className="text-[0.95rem] leading-[1.75] text-on-surface">
        <p>{shown}</p>
      </blockquote>

      {long && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          className="mt-2 inline-flex items-center gap-1 text-[0.88rem] font-semibold hover:underline"
          style={{ color: accent }}
        >
          {expanded ? 'Show less' : 'Read full reflection'}
          <span className={`material-symbols-outlined text-[18px] transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true">expand_more</span>
        </button>
      )}
    </figure>
  );
}

/** Reflections for one fellowship - rendered inside that fellowship's card on the Advocate page. */
export default function FellowReflections({ programmeId, accent }) {
  const [showAll, setShowAll] = useState(false);
  const reflections = FELLOW_REFLECTIONS.find((f) => f.id === programmeId)?.reflections ?? [];

  if (reflections.length === 0) return null;

  const visible = showAll ? reflections : reflections.slice(0, INITIAL_VISIBLE);
  const hidden = reflections.length - visible.length;
  const withPhotos = [...reflections].sort(
    (a, b) => Number(Boolean(portraitFor(b.slug))) - Number(Boolean(portraitFor(a.slug)))
  );

  return (
    <section id={`reflections-${programmeId}`} aria-labelledby={`reflections-heading-${programmeId}`} className="mt-10 pt-10 border-t border-outline-variant/40 scroll-mt-24">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">In their own words</p>
          <h4 id={`reflections-heading-${programmeId}`} className="font-headline-md text-[1.35rem] font-bold text-deep-navy mt-1">
            Reflections from fellows
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex -space-x-3" aria-hidden="true">
            {withPhotos.slice(0, 4).map((fellow) => (
              <Avatar key={fellow.slug} fellow={fellow} accent={accent} size="w-9 h-9" text="text-[12px]" />
            ))}
          </span>
          <span className="text-caption font-semibold text-on-surface-variant">{reflections.length} fellows</span>
        </div>
      </div>

      <div className="columns-1 md:columns-2 gap-5">
        {visible.map((fellow) => (
          <ReflectionCard key={fellow.slug} fellow={fellow} accent={accent} />
        ))}
      </div>

      {reflections.length > INITIAL_VISIBLE && (
        <div className="flex justify-center mt-3">
          <button
            type="button"
            onClick={() => setShowAll((open) => !open)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 font-bold text-[0.92rem] transition-colors border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
            style={{ '--accent': accent }}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{showAll ? 'expand_less' : 'expand_more'}</span>
            {showAll ? 'Show fewer reflections' : `Show ${hidden} more reflection${hidden === 1 ? '' : 's'}`}
          </button>
        </div>
      )}
    </section>
  );
}
