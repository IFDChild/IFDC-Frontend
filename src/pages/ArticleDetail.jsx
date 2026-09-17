import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleView from '../components/ArticleView';
import { getNews, getNewsArticle } from '../lib/api';
import { formatNewsDate, plainText, readingTime } from '../lib/news';

// Imported summaries are the opening words of the article body - don't repeat them above it.
const summaryRepeatsBody = (summary, content) => {
  const lead = plainText(summary).replace(/[….\s]+$/, '').slice(0, 120);
  return lead.length > 0 && plainText(content).includes(lead);
};

export default function ArticleDetail() {
  // The route is /news/:id - the segment is the article's slug.
  const { id: slug } = useParams();

  const [article, setArticle] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | missing | error

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    window.scrollTo(0, 0);

    Promise.all([getNewsArticle(slug), getNews().catch(() => [])])
      .then(([item, all]) => {
        if (cancelled) return;
        if (!item) {
          setStatus('missing');
          return;
        }
        setArticle(item);
        setRelated(all.filter((other) => other.slug !== item.slug).slice(0, 3));
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (!article) return undefined;
    const previousTitle = document.title;
    document.title = `${article.title} | IFDC News`;
    return () => {
      document.title = previousTitle;
    };
  }, [article]);

  return (
    <>
      <Navbar />

      <main>
        {status === 'loading' && (
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop pt-12 animate-pulse" aria-busy="true" aria-label="Loading article">
            <div className="h-4 w-48 rounded bg-surface-container mb-8" />
            <div className="h-10 w-5/6 rounded bg-surface-container mb-4" />
            <div className="h-5 w-40 rounded bg-surface-container mb-8" />
            <div className="h-[360px] rounded-[2rem] bg-surface-container mb-8" />
            <div className="space-y-3">
              <div className="h-4 rounded bg-surface-container" />
              <div className="h-4 rounded bg-surface-container" />
              <div className="h-4 w-4/5 rounded bg-surface-container" />
            </div>
          </div>
        )}

        {(status === 'missing' || status === 'error') && (
          <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop py-24 text-center">
            <span className="material-symbols-outlined text-deep-navy text-[56px]" aria-hidden="true">
              {status === 'missing' ? 'search_off' : 'cloud_off'}
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mt-4">
              {status === 'missing' ? 'Article not found' : 'We couldn’t load this article'}
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-3">
              {status === 'missing'
                ? 'It may have been moved or is no longer published.'
                : 'Please check your connection and try again shortly.'}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 bg-deep-navy text-white px-6 py-3 rounded-full font-label-md hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_back</span>
              Back to home
            </Link>
          </div>
        )}

        {status === 'ready' && article && (
          <ArticleView
            article={{
              title: article.title,
              category: article.category,
              dateIso: article.published_at || article.created_at,
              dateLabel: formatNewsDate(article.published_at || article.created_at),
              readTime: `${readingTime(article.content)} min read`,
              author: 'IFDC',
              authorNote: 'International Foundation for Digital Child',
              summary: article.summary && !summaryRepeatsBody(article.summary, article.content) ? article.summary : null,
              image: article.image,
              content: article.content
            }}
            crumbs={[{ to: '/', label: 'Home' }, { to: '/news#news', label: 'News' }]}
            back={{ to: '/news#news', label: 'All news' }}
            relatedTitle="More from the Foundation"
            related={related.map((item) => ({
              href: `/news/${item.slug}`,
              title: item.title,
              image: item.image,
              date: formatNewsDate(item.published_at || item.created_at)
            }))}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
