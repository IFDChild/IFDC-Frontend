import React from 'react';
import { Link } from 'react-router-dom';
import { fileUrl } from '../lib/api';
import { formatNewsDate, newsExcerpt, plainText } from '../lib/news';

// Category chip colours, in the site theme.
const CATEGORY_STYLES = {
  Announcements: 'bg-primary-container text-on-primary-container',
  'Press Releases': 'bg-deep-navy text-safety-yellow',
  Events: 'bg-secondary-container text-on-secondary-container',
  Partnerships: 'bg-sky-tint text-deep-navy',
  'Media Coverage': 'bg-error-container text-on-error-container'
};

export function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col animate-pulse" aria-hidden="true">
      <div className="h-56 bg-surface-container" />
      <div className="p-7 space-y-4">
        <div className="flex justify-between">
          <div className="h-6 w-24 rounded-full bg-surface-container" />
          <div className="h-4 w-20 rounded bg-surface-container" />
        </div>
        <div className="h-6 w-5/6 rounded bg-surface-container" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-surface-container" />
          <div className="h-4 w-4/5 rounded bg-surface-container" />
        </div>
      </div>
    </div>
  );
}

export default function NewsCard({ article }) {
  const to = `/news/${article.slug}`;
  const date = formatNewsDate(article.published_at || article.created_at);

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
      <div className="overflow-hidden h-56 bg-sky-tint">
        {article.image ? (
          <img
            src={fileUrl(article.image)}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-deep-navy to-primary">
            <span className="material-symbols-outlined text-safety-yellow text-[56px]" aria-hidden="true">newspaper</span>
          </div>
        )}
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 mb-4">
          {article.category ? (
            <span className={`inline-block px-4 py-1.5 rounded-full text-caption font-semibold ${CATEGORY_STYLES[article.category] || 'bg-sky-tint text-deep-navy'}`}>
              {article.category}
            </span>
          ) : <span />}
          {date && (
            <time className="text-sm text-on-surface-variant whitespace-nowrap" dateTime={article.published_at || article.created_at}>
              {date}
            </time>
          )}
        </div>

        <h3 className="font-headline-md text-headline-md leading-tight group-hover:text-primary transition-colors">
          {/* Stretched link makes the whole card clickable */}
          <Link to={to} className="after:absolute after:inset-0 focus:outline-none focus-visible:underline">
            {article.title}
          </Link>
        </h3>

        <p className="text-on-surface-variant leading-relaxed mt-4 line-clamp-3">{newsExcerpt({ summary: article.summary, content: plainText(article.content) })}</p>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all" aria-hidden="true">
            Read Full Article
            <span className="material-symbols-outlined text-[18px]">trending_flat</span>
          </span>
        </div>
      </div>
    </article>
  );
}
