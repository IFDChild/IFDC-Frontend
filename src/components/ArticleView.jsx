import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RichContent from './RichContent';
import { fileUrl } from '../lib/api';
import { initialsOf } from '../lib/news';

/** Thin yellow bar under the navigation that fills as the reader scrolls the article. */
function ReadingProgress({ targetId }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const read = Math.min(Math.max(-rect.top + window.innerHeight * 0.25, 0), Math.max(total, 1));
      setProgress(total > 0 ? read / total : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [targetId]);

  return (
    <div className="sticky top-20 z-40 h-1 bg-transparent" aria-hidden="true">
      <div className="h-full bg-safety-yellow transition-[width] duration-150" style={{ width: `${Math.round(progress * 100)}%` }} />
    </div>
  );
}

function ShareLinks({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable.
    }
  };

  const button = 'w-10 h-10 rounded-full flex items-center justify-center transition-colors';

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${button} bg-deep-navy text-white hover:bg-primary`}
        aria-label="Share on Facebook"
      >
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${button} bg-[#0077B5] text-white hover:opacity-90`}
        aria-label="Share on LinkedIn"
      >
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${button} bg-[#25D366] text-white hover:opacity-90`}
        aria-label="Share on WhatsApp"
      >
        <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
      <button
        type="button"
        onClick={copy}
        className={`${button} bg-sky-tint text-deep-navy hover:bg-primary-fixed`}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        title={copied ? 'Copied' : 'Copy link'}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden="true">{copied ? 'check' : 'link'}</span>
      </button>
    </div>
  );
}

/**
 * Shared reading layout for news articles and blog posts:
 * compact two-column header with a modest image, a narrow readable text column,
 * and a sticky side panel (author, details, share) on large screens.
 */
/** Author avatar: IFDC shows a shield mark, people show their initials. */
function AuthorMark({ author, size }) {
  if (!author || author === 'IFDC') {
    return (
      <span className={`${size} rounded-full bg-deep-navy text-safety-yellow flex items-center justify-center shrink-0`} aria-hidden="true">
        <span className="material-symbols-outlined" style={{ fontSize: size.includes('w-11') ? 22 : 17 }}>shield_person</span>
      </span>
    );
  }
  return (
    <span className={`${size} rounded-full bg-deep-navy text-safety-yellow font-bold flex items-center justify-center shrink-0 ${size.includes('w-11') ? 'text-[14px]' : 'text-[12px]'}`} aria-hidden="true">
      {initialsOf(author)}
    </span>
  );
}

export default function ArticleView({ article, crumbs, back, related, relatedTitle }) {
  const {
    title, category, dateIso, dateLabel, readTime, author, authorNote, summary, image, content
  } = article;

  return (
    <>
      <ReadingProgress targetId="article-body" />

      <article>
        {/* Header */}
        <header className="bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[0.85rem] text-on-surface-variant mb-6">
              {crumbs.map((crumb) => (
                <React.Fragment key={crumb.label}>
                  <Link className="hover:text-primary hover:underline underline-offset-4" to={crumb.to}>{crumb.label}</Link>
                  <span className="material-symbols-outlined text-outline" style={{ fontSize: 16 }} aria-hidden="true">chevron_right</span>
                </React.Fragment>
              ))}
              <span className="text-deep-navy font-semibold truncate max-w-[200px] sm:max-w-xs" aria-current="page">{title}</span>
            </nav>

            <div className={`grid grid-cols-1 gap-8 items-center ${image ? 'md:grid-cols-12 md:gap-10' : ''}`}>
              <div className={image ? 'md:col-span-7' : 'max-w-3xl'}>
                {category && (
                  <span className="inline-block px-3 py-1 bg-safety-yellow text-deep-navy text-[0.8rem] font-bold uppercase tracking-wider rounded-md mb-4">
                    {category}
                  </span>
                )}
                <h1 className="font-headline-lg text-[1.75rem] leading-[1.2] md:text-[2.4rem] md:leading-[1.15] text-deep-navy">
                  {title}
                </h1>
                {summary && (
                  <p className="mt-4 text-[1.1rem] leading-relaxed text-on-surface-variant">{summary}</p>
                )}
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.92rem] text-on-surface-variant">
                  <span className="inline-flex items-center gap-2 font-semibold text-deep-navy">
                    <AuthorMark author={author} size="w-8 h-8" />
                    {author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden="true">calendar_today</span>
                    <time dateTime={dateIso}>{dateLabel}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden="true">schedule</span>
                    {readTime}
                  </span>
                </div>
              </div>

              {image && (
                <div className="md:col-span-5">
                  <img
                    src={fileUrl(image)}
                    alt=""
                    className="w-full aspect-[4/3] max-h-[320px] object-cover rounded-2xl shadow-md bg-sky-tint"
                  />
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Body + side panel */}
        <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10 lg:gap-14">
          <div id="article-body" className="min-w-0 max-w-[70ch] w-full lg:mx-0 mx-auto">
            <RichContent content={content} />

            {/* Mobile / tablet: share + back after the text */}
            <div className="lg:hidden mt-10 pt-6 border-t border-outline-variant/40 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[0.9rem] font-semibold text-on-surface-variant">Share</span>
                <ShareLinks title={title} />
              </div>
              <Link to={back.to} className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline underline-offset-4">
                <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden="true">arrow_back</span>
                {back.label}
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-2xl bg-white border border-outline-variant/30 p-5">
                <p className="text-[0.75rem] font-bold uppercase tracking-widest text-on-surface-variant">Written by</p>
                <div className="mt-3 flex items-center gap-3">
                  <AuthorMark author={author} size="w-11 h-11" />
                  <div className="min-w-0">
                    <p className="font-bold text-deep-navy leading-snug">{author}</p>
                    {authorNote && <p className="text-[0.8rem] text-on-surface-variant leading-snug mt-0.5">{authorNote}</p>}
                  </div>
                </div>
                <dl className="mt-4 pt-4 border-t border-outline-variant/30 space-y-2 text-[0.88rem]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-on-surface-variant">Published</dt>
                    <dd className="font-semibold text-deep-navy text-right">{dateLabel}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-on-surface-variant">Reading time</dt>
                    <dd className="font-semibold text-deep-navy">{readTime}</dd>
                  </div>
                  {category && (
                    <div className="flex justify-between gap-3">
                      <dt className="text-on-surface-variant">Topic</dt>
                      <dd className="font-semibold text-deep-navy text-right">{category}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="rounded-2xl bg-white border border-outline-variant/30 p-5">
                <p className="text-[0.75rem] font-bold uppercase tracking-widest text-on-surface-variant mb-3">Share this</p>
                <ShareLinks title={title} />
              </div>

              <Link
                to={back.to}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-deep-navy px-4 py-2.5 font-bold text-deep-navy hover:bg-deep-navy hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }} aria-hidden="true">arrow_back</span>
                {back.label}
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-surface-container-low border-t border-outline-variant/30">
          <div className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
            <h2 className="font-headline-md text-[1.5rem] md:text-[1.75rem] text-deep-navy mb-6">{relatedTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex gap-4 sm:flex-col bg-white rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-lg transition-shadow"
                >
                  <div className="w-28 sm:w-full shrink-0 aspect-square sm:aspect-[16/9] overflow-hidden bg-sky-tint">
                    {item.image && (
                      <img src={fileUrl(item.image)} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                  <div className="py-3 pr-4 sm:p-5">
                    <p className="text-[0.8rem] text-on-surface-variant">{item.date}</p>
                    <h3 className="mt-1 font-headline-md text-[1.02rem] leading-snug text-deep-navy group-hover:text-primary transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
