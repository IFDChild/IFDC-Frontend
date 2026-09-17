import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fileUrl, getBlogs, getNews } from '../lib/api';
import { formatNewsDate, newsExcerpt, plainText, readingTime } from '../lib/news';

const PAGE_SIZE = 6;

const toItem = (type) => (entry) => {
  const date = entry.published_at || entry.created_at;
  return {
    key: `${type}-${entry.id}`,
    type,
    href: type === 'news' ? `/news/${entry.slug}` : `/blogs/${entry.slug}`,
    title: entry.title,
    excerpt: newsExcerpt({ summary: type === 'news' ? entry.summary : entry.excerpt, content: plainText(entry.content) }, 190),
    category: entry.category || (type === 'news' ? 'News' : 'Blog'),
    image: (type === 'news' ? entry.image : entry.featured_image) || null,
    author: type === 'blog' ? entry.author || 'IFDC' : 'IFDC',
    date: formatNewsDate(date),
    timestamp: new Date(/[zZ]|[+-]\d\d:\d\d$/.test(date || '') ? date : `${date}Z`).getTime() || 0,
    readTime: `${readingTime(entry.content)} min read`
  };
};

const SECTIONS = {
  news: {
    id: 'news',
    eyebrow: 'Newsroom',
    title: 'Latest News',
    intro: 'Programme updates, awareness sessions, partnerships, and press coverage from across IFDC.',
    icon: 'newspaper',
    background: 'bg-surface',
    readLabel: 'Read article'
  },
  blog: {
    id: 'blogs',
    eyebrow: 'Insights & Ideas',
    title: 'From Our Blog',
    intro: 'Research, reflections, and practical guidance from IFDC advocates, fellows, and experts.',
    icon: 'edit_note',
    background: 'bg-sky-tint/50',
    readLabel: 'Read post'
  }
};

function Thumb({ item, className }) {
  if (item.image) {
    return <img src={fileUrl(item.image)} alt="" loading="lazy" className={className} />;
  }
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-deep-navy to-primary ${className}`}>
      <span className="material-symbols-outlined text-safety-yellow text-[48px]" aria-hidden="true">
        {item.type === 'news' ? 'newspaper' : 'article'}
      </span>
    </div>
  );
}

function ItemCard({ item }) {
  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative h-52 overflow-hidden bg-sky-tint">
        <Thumb item={item} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-deep-navy text-[12px] font-bold uppercase tracking-wider shadow">
          {item.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-3 text-caption text-on-surface-variant mb-3">
          <time className="whitespace-nowrap">{item.date}</time>
          <span className="whitespace-nowrap">{item.readTime}</span>
        </div>
        <h3 className="font-headline-md text-[1.15rem] leading-snug text-deep-navy group-hover:text-primary transition-colors line-clamp-3">
          <Link to={item.href} className="after:absolute after:inset-0 focus:outline-none focus-visible:underline">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 text-[0.9rem] leading-relaxed text-on-surface-variant line-clamp-3">{item.excerpt}</p>
        <div className="mt-auto pt-5 flex items-center justify-between gap-3 text-caption text-on-surface-variant border-t border-outline-variant/30">
          <span className="truncate pt-4">{item.type === 'blog' ? `By ${item.author}` : 'IFDC'}</span>
          <span className="inline-flex items-center gap-1 font-bold text-deep-navy pt-4" aria-hidden="true">
            Read
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
        </div>
      </div>
    </article>
  );
}

function ContentSection({ type, items, status, query }) {
  const config = SECTIONS[type];
  const [category, setCategory] = useState('all');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = useMemo(() => ['all', ...new Set(items.map((i) => i.category))], [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) =>
      (category === 'all' || i.category === category) &&
      (!q || `${i.title} ${i.excerpt} ${i.category} ${i.author}`.toLowerCase().includes(q))
    );
  }, [items, category, query]);

  // Reset paging when the search changes.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query]);

  const isFiltering = query.trim() !== '' || category !== 'all';
  const featured = !isFiltering ? filtered[0] : null;
  const rest = featured ? filtered.slice(1) : filtered;
  const shown = rest.slice(0, visible);

  return (
    <section id={config.id} aria-labelledby={`${config.id}-heading`} className={`${config.background} px-margin-mobile md:px-margin-desktop py-stack-lg scroll-mt-4`}>
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-widest">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{config.icon}</span>
              {config.eyebrow}
            </span>
            <h2 id={`${config.id}-heading`} className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mt-3">
              {config.title}
              {status === 'ready' && (
                <span className="ml-3 align-middle inline-flex items-center justify-center min-w-9 h-9 px-2 rounded-full bg-safety-yellow text-deep-navy text-[15px] font-bold">
                  {items.length}
                </span>
              )}
            </h2>
            <p className="text-on-surface-variant text-body-lg mt-3 leading-relaxed">{config.intro}</p>
          </div>

          {status === 'ready' && categories.length > 2 && (
            <div className="flex flex-wrap gap-2" role="group" aria-label={`Filter ${config.title} by topic`}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setVisible(PAGE_SIZE); }}
                  aria-pressed={category === cat}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    category === cat ? 'bg-deep-navy text-white' : 'bg-white border border-outline-variant/50 text-deep-navy hover:border-deep-navy/40'
                  }`}
                >
                  {cat === 'all' ? 'All topics' : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {status === 'loading' && (
          <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label={`Loading ${config.title}`}>
            {[0, 1, 2].map((i) => <div key={i} className="h-96 rounded-3xl bg-surface-container" />)}
          </div>
        )}

        {status === 'error' && (
          <div className="text-center py-16 rounded-3xl bg-white/70">
            <span className="material-symbols-outlined text-[48px] text-deep-navy" aria-hidden="true">cloud_off</span>
            <p className="font-headline-md text-[1.2rem] text-deep-navy mt-2">{config.title} are unavailable right now.</p>
            <p className="text-on-surface-variant mt-1">Please check back shortly.</p>
          </div>
        )}

        {status === 'ready' && (
          <>
            {featured && (
              <article className="group relative grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] overflow-hidden shadow-lg border border-outline-variant/20 mb-8">
                <div className="relative h-[240px] lg:h-[380px] overflow-hidden bg-sky-tint">
                  <Thumb item={featured} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="px-3 py-1 rounded-full bg-safety-yellow text-deep-navy text-[12px] font-bold uppercase tracking-wider">Latest</span>
                    <span className="text-caption font-semibold text-primary">{featured.category}</span>
                  </div>
                  <h3 className="font-headline-lg text-[1.5rem] md:text-[1.9rem] leading-tight text-deep-navy group-hover:text-primary transition-colors">
                    <Link to={featured.href} className="after:absolute after:inset-0 focus:outline-none focus-visible:underline">
                      {featured.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-on-surface-variant leading-relaxed line-clamp-4">{featured.excerpt}</p>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-caption text-on-surface-variant">
                      {featured.type === 'blog' && `By ${featured.author} · `}{featured.date} · {featured.readTime}
                    </span>
                    <span className="inline-flex items-center gap-2 bg-deep-navy text-white font-bold px-6 py-3 rounded-full group-hover:bg-primary transition-colors" aria-hidden="true">
                      {config.readLabel}
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </article>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-14 rounded-3xl bg-white/70">
                <span className="material-symbols-outlined text-[48px] text-outline-variant" aria-hidden="true">search_off</span>
                <p className="font-headline-md text-[1.15rem] text-deep-navy mt-2">
                  {items.length === 0 ? `No ${type === 'news' ? 'news' : 'blog posts'} published yet` : 'Nothing matches your search'}
                </p>
                {isFiltering && items.length > 0 && category !== 'all' && (
                  <button onClick={() => setCategory('all')} className="mt-4 text-primary font-semibold hover:underline">
                    Show all topics
                  </button>
                )}
              </div>
            ) : (
              <>
                {isFiltering && (
                  <p className="text-caption text-on-surface-variant mb-4">
                    {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {shown.map((item) => <ItemCard key={item.key} item={item} />)}
                </div>

                {rest.length > shown.length && (
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-deep-navy text-deep-navy font-bold hover:bg-deep-navy hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined" aria-hidden="true">expand_more</span>
                      More {type === 'news' ? 'news' : 'blog posts'} ({rest.length - shown.length})
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default function News() {
  const location = useLocation();
  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [newsStatus, setNewsStatus] = useState('loading');
  const [blogStatus, setBlogStatus] = useState('loading');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let cancelled = false;

    getNews()
      .then((items) => {
        if (cancelled) return;
        setNews(items.map(toItem('news')).sort((a, b) => b.timestamp - a.timestamp));
        setNewsStatus('ready');
      })
      .catch(() => !cancelled && setNewsStatus('error'));

    getBlogs()
      .then((items) => {
        if (cancelled) return;
        setBlogs(items.map(toItem('blog')).sort((a, b) => b.timestamp - a.timestamp));
        setBlogStatus('ready');
      })
      .catch(() => !cancelled && setBlogStatus('error'));

    return () => {
      cancelled = true;
    };
  }, []);

  // Support links like /news#blogs (and the older /news?type=blog) once content has rendered.
  const target = location.hash.replace('#', '') || (new URLSearchParams(location.search).get('type') === 'blog' ? 'blogs' : '');
  const loaded = newsStatus !== 'loading' && blogStatus !== 'loading';
  useEffect(() => {
    if (!loaded || !target) return;
    document.getElementById(target)?.scrollIntoView({ block: 'start' });
  }, [loaded, target]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-deep-navy px-margin-mobile md:px-margin-desktop pt-16 pb-20">
        <div className="absolute -top-40 -right-32 w-[28rem] h-[28rem] bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative max-w-container-max mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-[13px] mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">chevron_right</span>
            <span className="text-white font-semibold">Blogs &amp; News</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h1 className="font-display-lg text-[2.25rem] md:text-[3.25rem] leading-tight text-white">
                Blogs &amp; <span className="text-safety-yellow">News</span>
              </h1>
              <p className="mt-5 text-white/70 text-body-lg max-w-2xl leading-relaxed">
                The latest from IFDC — news from our programmes and partnerships, and blog posts from the people working to keep children safe online.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#news" className="inline-flex items-center gap-2 bg-safety-yellow text-deep-navy font-bold px-6 py-3 rounded-full hover:shadow-lg transition-shadow">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">newspaper</span>
                  News
                  {newsStatus === 'ready' && <span className="opacity-70">{news.length}</span>}
                </a>
                <a href="#blogs" className="inline-flex items-center gap-2 border border-white/40 text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-deep-navy transition-colors">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">edit_note</span>
                  Blogs
                  {blogStatus === 'ready' && <span className="opacity-70">{blogs.length}</span>}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <label htmlFor="newsroom-search" className="block text-white/70 text-[13px] font-semibold mb-2">
                Search news and blogs
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden="true">search</span>
                <input
                  id="newsroom-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white text-on-surface outline-none text-[15px] shadow-xl focus:ring-2 focus:ring-safety-yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <ContentSection type="news" items={news} status={newsStatus} query={query} />
        <ContentSection type="blog" items={blogs} status={blogStatus} query={query} />
      </main>

      <Footer />
    </>
  );
}
