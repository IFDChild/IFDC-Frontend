import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RichContent from '../components/RichContent';
import { fileUrl, getBlogPost, getBlogs } from '../lib/api';
import { formatNewsDate, initialsOf, readingTime } from '../lib/news';

export default function BlogDetail() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | missing | error
  const [copied, setCopied] = useState(false);

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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable.
    }
  };

  return (
    <>
      <Navbar />

      <main className="pb-stack-lg">
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
          <>
            <article>
              <header className="bg-deep-navy text-white">
                <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop pt-10 pb-14 md:pt-14 md:pb-20">
                  <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-caption text-white/60 mb-8">
                    <Link className="hover:text-white" to="/">Home</Link>
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">chevron_right</span>
                    <Link className="hover:text-white" to="/blogs">Blogs</Link>
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">chevron_right</span>
                    <span className="text-white font-semibold truncate max-w-[160px] sm:max-w-sm">{post.title}</span>
                  </nav>

                  {post.category && (
                    <span className="inline-block px-3 py-1 bg-safety-yellow text-deep-navy font-label-md text-label-md rounded-lg mb-5">
                      {post.category}
                    </span>
                  )}

                  <h1 className="font-display-lg text-[1.9rem] md:text-[2.75rem] leading-tight">{post.title}</h1>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8">
                    <span className="flex items-center gap-3">
                      <span className="w-11 h-11 rounded-full bg-safety-yellow text-deep-navy font-bold flex items-center justify-center" aria-hidden="true">
                        {initialsOf(post.author)}
                      </span>
                      <span>
                        <span className="block font-semibold">{post.author || 'IFDC'}</span>
                        <span className="block text-caption text-white/60">International Foundation for Digital Child</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-4 text-white/75 text-body-md">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">calendar_today</span>
                        <time dateTime={post.published_at}>{formatNewsDate(post.published_at || post.created_at)}</time>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">schedule</span>
                        {readingTime(post.content)} min read
                      </span>
                    </span>
                  </div>
                </div>
              </header>

              {post.featured_image && (
                <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin-desktop -mt-8 md:-mt-12">
                  <img
                    src={fileUrl(post.featured_image)}
                    alt=""
                    className="w-full max-h-[560px] object-cover rounded-[2rem] shadow-xl bg-surface-container"
                  />
                </div>
              )}

              <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop mt-12">
                <RichContent content={post.content} />

                <div className="mt-12 pt-8 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-label-md text-label-md text-on-surface-variant">Share:</span>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-deep-navy text-white flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <button
                      type="button"
                      onClick={copyLink}
                      className="h-10 px-4 rounded-full bg-sky-tint text-deep-navy font-label-md text-label-md inline-flex items-center gap-2 hover:bg-primary-fixed transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{copied ? 'check' : 'link'}</span>
                      {copied ? 'Copied' : 'Copy link'}
                    </button>
                  </div>

                  <Link to="/blogs" className="inline-flex items-center gap-2 text-primary font-label-md hover:underline">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_back</span>
                    All blog posts
                  </Link>
                </div>
              </div>
            </article>

            {related.length > 0 && (
              <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mt-stack-lg">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-stack-md">More from our blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={`/blogs/${item.slug}`}
                      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div className="h-48 overflow-hidden bg-sky-tint">
                        {item.featured_image && (
                          <img src={fileUrl(item.featured_image)} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-caption text-on-surface-variant">{formatNewsDate(item.published_at)}</span>
                        <h3 className="font-headline-md text-[1.15rem] text-deep-navy mt-2 leading-snug group-hover:text-primary transition-colors line-clamp-3">{item.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
