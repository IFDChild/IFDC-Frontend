import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fileUrl, getBlogs } from '../lib/api';
import { formatNewsDate, newsExcerpt, plainText } from '../lib/news';

const excerptOf = (post, length) => newsExcerpt({ summary: post.excerpt, content: plainText(post.content) }, length);

function Placeholder({ className }) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-deep-navy to-primary ${className}`}>
      <span className="material-symbols-outlined text-safety-yellow text-[48px]" aria-hidden="true">article</span>
    </div>
  );
}

/** Home page "From Our Blog" - featured latest post plus two more, from the blogs API. */
export default function FromOurBlog() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    getBlogs({ limit: 3 })
      .then((items) => {
        if (cancelled) return;
        setPosts(items);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const [featured, ...others] = posts;

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-label-md tracking-widest uppercase">Insights & Ideas</span>
            <h2 className="font-headline-lg text-headline-lg">From Our Blog</h2>
            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
              Explore ideas, stories, and practical insights about digital wellbeing, online safety, technology, and youth empowerment.
            </p>
          </div>
          <Link to="/blogs" className="inline-flex items-center gap-2 text-primary font-label-md hover:gap-4 transition-all">
            Explore All Blogs
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>

        {status === 'loading' && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-pulse" aria-busy="true" aria-label="Loading blog posts">
            <div className="lg:col-span-3 h-[500px] rounded-[2rem] bg-surface-container" />
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="h-60 rounded-[2rem] bg-surface-container" />
              <div className="h-60 rounded-[2rem] bg-surface-container" />
            </div>
          </div>
        )}

        {(status === 'error' || (status === 'ready' && !featured)) && (
          <div className="bg-surface-container-low rounded-3xl px-8 py-12 text-center">
            <span className="material-symbols-outlined text-deep-navy text-[40px]" aria-hidden="true">
              {status === 'error' ? 'cloud_off' : 'article'}
            </span>
            <p className="mt-3 font-headline-md text-[1.15rem] text-deep-navy">
              {status === 'error' ? 'Blog posts are unavailable right now.' : 'No blog posts yet.'}
            </p>
          </div>
        )}

        {status === 'ready' && featured && (
          <div className={`grid grid-cols-1 gap-8 ${others.length ? 'lg:grid-cols-5' : ''}`}>
            <article className={`group ${others.length ? 'lg:col-span-3' : ''}`}>
              <Link to={`/blogs/${featured.slug}`} className="block relative overflow-hidden rounded-[2rem] bg-surface-container">
                {featured.featured_image ? (
                  <img
                    src={fileUrl(featured.featured_image)}
                    alt=""
                    className="w-full h-[420px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <Placeholder className="w-full h-[420px] md:h-[500px]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 text-white">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {featured.category && (
                      <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm">{featured.category}</span>
                    )}
                    <time className="text-sm opacity-90" dateTime={featured.published_at}>{formatNewsDate(featured.published_at)}</time>
                  </div>
                  <h3 className="font-headline-lg text-2xl md:text-4xl leading-tight max-w-2xl">{featured.title}</h3>
                  <p className="mt-4 text-white/85 max-w-xl leading-relaxed line-clamp-2">{excerptOf(featured, 160)}</p>
                  <div className="flex items-center gap-2 mt-6 font-label-md">
                    Read Article
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-2 transition-transform" aria-hidden="true">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </article>

            {others.length > 0 && (
              <div className="lg:col-span-2 flex flex-col gap-8">
                {others.map((post) => (
                  <article key={post.id} className="group bg-surface-container-low rounded-[2rem] overflow-hidden hover:shadow-lg transition-all duration-300 flex-1">
                    <Link to={`/blogs/${post.slug}`} className="flex flex-col sm:flex-row w-full h-full">
                      <div className="sm:w-2/5 overflow-hidden shrink-0">
                        {post.featured_image ? (
                          <img
                            src={fileUrl(post.featured_image)}
                            alt=""
                            loading="lazy"
                            className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <Placeholder className="w-full h-56 sm:h-full" />
                        )}
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                          {post.category && (
                            <span className="text-primary text-xs font-label-md uppercase tracking-wide">{post.category}</span>
                          )}
                          <time className="text-xs text-on-surface-variant" dateTime={post.published_at}>{formatNewsDate(post.published_at)}</time>
                        </div>
                        <h3 className="font-headline-md text-xl leading-tight group-hover:text-primary transition-colors line-clamp-3">{post.title}</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mt-3 line-clamp-3">{excerptOf(post, 140)}</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-label-md mt-5">
                          Read More
                          <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
