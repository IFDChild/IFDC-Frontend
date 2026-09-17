import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNews } from '../lib/api';
import NewsCard, { NewsCardSkeleton } from './NewsCard';

const HOME_LIMIT = 3;

/** Home page "Latest from the Foundation" - the newest published news from the admin dashboard. */
export default function LatestNews() {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    getNews({ limit: HOME_LIMIT })
      .then((items) => {
        if (cancelled) return;
        setArticles(items);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-24 bg-sky-tint">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-primary font-label-md tracking-widest uppercase">Updates</span>
            <h2 className="font-headline-lg text-headline-lg">Latest from the Foundation</h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Stay updated with our latest news, events, initiatives, and stories from the foundation.
            </p>
          </div>
          <Link to="/news#news" className="inline-flex items-center gap-2 text-deep-navy font-label-md hover:gap-4 transition-all shrink-0">
            View All News
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>

        {status === 'loading' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-busy="true" aria-label="Loading latest news">
            {Array.from({ length: HOME_LIMIT }, (_, i) => <NewsCardSkeleton key={i} />)}
          </div>
        )}

        {status === 'ready' && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => <NewsCard key={article.id} article={article} />)}
          </div>
        )}

        {(status === 'error' || (status === 'ready' && articles.length === 0)) && (
          <div className="bg-white rounded-3xl px-8 py-12 text-center">
            <span className="material-symbols-outlined text-deep-navy text-[40px]" aria-hidden="true">
              {status === 'error' ? 'cloud_off' : 'newspaper'}
            </span>
            <p className="mt-3 font-headline-md text-[1.15rem] text-deep-navy">
              {status === 'error' ? 'News is unavailable right now.' : 'No news yet.'}
            </p>
            <p className="mt-1 text-on-surface-variant">
              {status === 'error' ? 'Please check back shortly.' : 'Our latest updates will appear here soon.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
