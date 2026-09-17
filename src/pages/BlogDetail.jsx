import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleView from '../components/ArticleView';
import { getBlogPost, getBlogs } from '../lib/api';
import { formatNewsDate, readingTime } from '../lib/news';

export default function BlogDetail() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | missing | error

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    window.scrollTo(0, 0);

    Promise.all([getBlogPost(slug), getBlogs().catch(() => [])])
      .then(([item, all]) => {
        if (cancelled) return;
        if (!item) {
          setStatus('missing');
          return;
        }
        setPost(item);
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
    if (!post) return undefined;
    const previousTitle = document.title;
    document.title = `${post.title} | IFDC Blog`;
    return () => {
      document.title = previousTitle;
    };
  }, [post]);

  return (
    <>
      <Navbar />

      <main>
        {status === 'loading' && (
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop pt-12 animate-pulse" aria-busy="true" aria-label="Loading blog post">
            <div className="h-4 w-48 rounded bg-surface-container mb-8" />
            <div className="h-10 w-5/6 rounded bg-surface-container mb-4" />
            <div className="h-5 w-56 rounded bg-surface-container mb-8" />
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
              {status === 'missing' ? 'Blog post not found' : 'We couldn’t load this post'}
            </h1>
            <p className="text-body-lg text-on-surface-variant mt-3">
              {status === 'missing' ? 'It may have been moved or is no longer published.' : 'Please try again shortly.'}
            </p>
            <Link to="/blogs" className="inline-flex items-center gap-2 mt-8 bg-deep-navy text-white px-6 py-3 rounded-full font-label-md hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_back</span>
              All blog posts
            </Link>
          </div>
        )}

        {status === 'ready' && post && (
          <ArticleView
            article={{
              title: post.title,
              category: post.category,
              dateIso: post.published_at || post.created_at,
              dateLabel: formatNewsDate(post.published_at || post.created_at),
              readTime: `${readingTime(post.content)} min read`,
              author: post.author || 'IFDC',
              authorNote: 'IFDC Blog',
              summary: null,
              image: post.featured_image,
              content: post.content
            }}
            crumbs={[{ to: '/', label: 'Home' }, { to: '/blogs', label: 'Blogs' }]}
            back={{ to: '/blogs', label: 'All blog posts' }}
            relatedTitle="More from our blog"
            related={related.map((item) => ({
              href: `/blogs/${item.slug}`,
              title: item.title,
              image: item.featured_image,
              date: formatNewsDate(item.published_at || item.created_at)
            }))}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
