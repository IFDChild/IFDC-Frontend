import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fileUrl, getBlogs } from '../lib/api';
import { formatNewsDate, initialsOf, newsExcerpt, plainText, readingTime } from '../lib/news';

const CATEGORY_STYLES = {
  News: 'bg-deep-navy/10 text-deep-navy',
  Education: 'bg-sky-tint text-deep-navy',
  'Safety Alerts': 'bg-error-container text-on-error-container',
  Events: 'bg-safety-yellow/30 text-deep-navy',
  Community: 'bg-primary-container/10 text-primary-container'
};

const AUTHOR_COLORS = [
  'bg-sky-tint text-deep-navy',
  'bg-primary-container text-white',
  'bg-safety-yellow text-deep-navy'
];

const toCard = (post) => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  excerpt: newsExcerpt({ summary: post.excerpt, content: plainText(post.content) }, 200),
  category: post.category || 'Blog',
  author: post.author || 'IFDC',
  authorInitials: initialsOf(post.author),
  authorColor: AUTHOR_COLORS[(post.author || '').length % AUTHOR_COLORS.length],
  date: formatNewsDate(post.published_at || post.created_at),
  timestamp: new Date(post.published_at || post.created_at).getTime() || 0,
  minutes: readingTime(post.content),
  readTime: `${readingTime(post.content)} min read`,
  image: post.featured_image ? fileUrl(post.featured_image) : null
});

function CardImage({ src, className, iconSize = 'text-[40px]' }) {
  if (src) {
    return <img src={src} alt="" loading="lazy" className={className} />;
  }
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-deep-navy to-primary ${className}`}>
      <span className={`material-symbols-outlined text-safety-yellow ${iconSize}`} aria-hidden="true">article</span>
    </div>
  );
}

// ── Blog Card ──────────────────────────────────────────────────────────────────
function BlogCard({ blog, layout }) {
  const catStyle = CATEGORY_STYLES[blog.category] ?? 'bg-sky-tint text-deep-navy';
  const to = `/blogs/${blog.slug}`;

  if (layout === 'list') {
    return (
      <article className="glass-card rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="sm:w-[200px] shrink-0 overflow-hidden relative min-h-[160px]">
          <CardImage src={blog.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full font-label-md text-[11px] uppercase tracking-wider ${catStyle}`}>
              {blog.category}
            </span>
            <span className="font-caption text-[12px] text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">schedule</span>
              {blog.readTime}
            </span>
          </div>
          <h3 className="font-headline-md text-[18px] text-deep-navy mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
            <Link to={to}>{blog.title}</Link>
          </h3>
          <p className="font-body-md text-[13px] text-on-surface-variant mb-4 line-clamp-2 flex-grow">{blog.excerpt}</p>
          <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30 gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[11px] shrink-0 ${blog.authorColor}`}>
                {blog.authorInitials}
              </div>
              <span className="font-caption text-[12px] font-semibold text-deep-navy truncate">{blog.author}</span>
              <span className="text-outline-variant">·</span>
              <span className="font-caption text-[12px] text-on-surface-variant whitespace-nowrap">{blog.date}</span>
            </div>
            <Link to={to} className="text-deep-navy font-bold hover:underline flex items-center text-[12px] shrink-0">
              Read <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <CardImage src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-md text-[12px] uppercase tracking-wider bg-white/95 ${catStyle}`}>
          {blog.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="font-caption text-[12px] text-on-surface-variant">{blog.date}</span>
          <span className="font-caption text-[12px] text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">schedule</span>
            {blog.readTime}
          </span>
        </div>
        <h3 className="font-headline-md text-[19px] text-deep-navy mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-3 flex-grow">
          <Link to={to}>{blog.title}</Link>
        </h3>
        <p className="font-body-md text-[13px] text-on-surface-variant mb-4 line-clamp-3">{blog.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-outline-variant/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${blog.authorColor}`}>
              {blog.authorInitials}
            </div>
            <span className="font-caption text-[12px] font-semibold text-deep-navy truncate">{blog.author}</span>
          </div>
          <Link to={to} className="text-deep-navy font-bold hover:underline flex items-center text-[13px] shrink-0">
            Read Article <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chevron_right</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [layout, setLayout] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    let cancelled = false;
    getBlogs()
      .then((items) => {
        if (cancelled) return;
        setBlogs(items.map(toCard));
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => ['all', ...new Set(blogs.map((b) => b.category))], [blogs]);
  const authorCount = useMemo(() => new Set(blogs.map((b) => b.author)).size, [blogs]);

  const featured = blogs[0];
  const showFeatured = !searchQuery.trim() && activeCategory === 'all' && featured;

  const filtered = useMemo(() => {
    let result = showFeatured ? blogs.slice(1) : [...blogs];

    if (activeCategory !== 'all') {
      result = result.filter((b) => b.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'newest') result.sort((a, b) => b.timestamp - a.timestamp);
    if (sortBy === 'oldest') result.sort((a, b) => a.timestamp - b.timestamp);
    if (sortBy === 'readtime') result.sort((a, b) => a.minutes - b.minutes);

    return result;
  }, [blogs, activeCategory, searchQuery, sortBy, showFeatured]);

  const recentPosts = blogs.slice(0, 4);

  return (
    <>
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-20 pb-20 bg-deep-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety-yellow/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-[13px] mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">chevron_right</span>
            <span className="text-white font-semibold">Blogs &amp; Insights</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-safety-yellow/20 text-safety-yellow px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest mb-6">
              IFDC Blog
            </span>
            <h1
              className="text-white font-extrabold leading-tight mb-6"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontFamily: 'Manrope, sans-serif' }}
            >
              Insights &amp; Ideas for a<br />
              <span className="text-safety-yellow">Safer Digital World</span>
            </h1>
            <p className="text-white/70 text-[18px] leading-relaxed mb-10 max-w-2xl">
              Research, reflections, and practical guidance from IFDC on online child safety and digital wellbeing in Sri Lanka and beyond.
            </p>

            <div className="relative max-w-lg">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden="true">search</span>
              <input
                id="blog-search"
                type="search"
                aria-label="Search blog posts"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white text-on-surface outline-none text-[15px] shadow-xl focus:ring-2 focus:ring-safety-yellow transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              )}
            </div>
          </div>

          {status === 'ready' && blogs.length > 0 && (
            <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/10">
              {[
                { value: blogs.length, label: blogs.length === 1 ? 'Article Published' : 'Articles Published' },
                { value: authorCount, label: authorCount === 1 ? 'Author' : 'Authors' },
                { value: categories.length - 1, label: 'Topics' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-safety-yellow font-extrabold text-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>{stat.value}</div>
                  <div className="text-white/50 text-[13px] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="md:sticky md:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-outline-variant/30 py-3 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-5 py-1.5 rounded-full font-label-md text-[13px] whitespace-nowrap transition-all ${
                  activeCategory === cat ? 'bg-deep-navy text-white shadow-md' : 'bg-sky-tint text-deep-navy hover:bg-outline-variant/40'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort posts"
              className="pl-3 pr-8 py-1.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-[13px] text-on-surface outline-none focus:ring-2 focus:ring-deep-navy cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="readtime">Shortest Read</option>
            </select>

            <div className="hidden sm:flex items-center rounded-xl border border-outline-variant overflow-hidden bg-surface-container-lowest">
              <button
                onClick={() => setLayout('grid')}
                aria-pressed={layout === 'grid'}
                className={`p-2 transition-colors ${layout === 'grid' ? 'bg-deep-navy text-white' : 'text-on-surface-variant hover:bg-sky-tint'}`}
                title="Grid view"
              >
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
              </button>
              <button
                onClick={() => setLayout('list')}
                aria-pressed={layout === 'list'}
                className={`p-2 transition-colors ${layout === 'list' ? 'bg-deep-navy text-white' : 'text-on-surface-variant hover:bg-sky-tint'}`}
                title="List view"
              >
                <span className="material-symbols-outlined text-[20px]">view_agenda</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── Articles Column ── */}
          <div className="flex-1 min-w-0">

            {status === 'loading' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-pulse" aria-busy="true" aria-label="Loading blog posts">
                {[0, 1, 2, 3].map((i) => <div key={i} className="h-80 rounded-2xl bg-surface-container" />)}
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center justify-center py-24 text-center glass-card rounded-3xl">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-4" aria-hidden="true">cloud_off</span>
                <h2 className="font-bold text-deep-navy text-xl mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Blog posts are unavailable right now</h2>
                <p className="text-on-surface-variant text-[15px]">Please check back shortly.</p>
              </div>
            )}

            {status === 'ready' && (
              <>
                {/* Featured Article */}
                {showFeatured && (
                  <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-0.5 bg-safety-yellow" />
                      <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest">Latest Article</span>
                    </div>
                    <article className="glass-card rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group hover:shadow-2xl transition-all duration-300 ambient-glow">
                      <div className="lg:w-3/5 h-[260px] lg:h-[440px] overflow-hidden relative">
                        <CardImage src={featured.image} iconSize="text-[64px]" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-6 left-6">
                          <span className="bg-safety-yellow text-deep-navy font-label-md text-[12px] px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                            {featured.category}
                          </span>
                        </div>
                        <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-white text-[12px] flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">schedule</span>
                            {featured.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                        <span className="font-caption text-caption text-on-surface-variant mb-4">{featured.date}</span>
                        <h2
                          className="font-bold leading-tight text-deep-navy mb-5 group-hover:text-primary transition-colors"
                          style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontFamily: 'Manrope, sans-serif' }}
                        >
                          {featured.title}
                        </h2>
                        <p className="text-on-surface-variant text-[15px] leading-relaxed mb-8 line-clamp-4">{featured.excerpt}</p>
                        <div className="flex items-center gap-3 mb-8">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${featured.authorColor}`}>
                            {featured.authorInitials}
                          </div>
                          <div className="font-semibold text-[14px] text-deep-navy">{featured.author}</div>
                        </div>
                        <Link
                          to={`/blogs/${featured.slug}`}
                          className="self-start flex items-center gap-2 font-label-md text-label-md text-deep-navy bg-safety-yellow px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
                        >
                          Read Article
                          <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                        </Link>
                      </div>
                    </article>
                  </section>
                )}

                {/* Articles Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-bold text-deep-navy text-[22px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {searchQuery ? `Results for "${searchQuery}"` : activeCategory === 'all' ? 'More Articles' : activeCategory}
                    </h2>
                    <p className="text-on-surface-variant text-[13px] mt-0.5">
                      {filtered.length} article{filtered.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                {/* Empty State */}
                {filtered.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-20 text-center glass-card rounded-3xl">
                    <span className="material-symbols-outlined text-6xl text-outline-variant mb-4" aria-hidden="true">search_off</span>
                    <h3 className="font-bold text-deep-navy text-xl mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                      {blogs.length === 0 ? 'No blog posts yet' : 'No articles found'}
                    </h3>
                    {blogs.length > 0 && (
                      <>
                        <p className="text-on-surface-variant text-[15px] mb-6">Try adjusting your search or filter.</p>
                        <button
                          onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                          className="bg-deep-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-primary transition-colors"
                        >
                          Clear Filters
                        </button>
                      </>
                    )}
                  </div>
                )}

                {/* Grid / List */}
                {filtered.length > 0 && (
                  <div className={layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-6' : 'flex flex-col gap-4'}>
                    {filtered.map((blog) => (
                      <BlogCard key={blog.id} blog={blog} layout={layout} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:flex flex-col gap-8 w-[320px] shrink-0">
            {recentPosts.length > 0 && (
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-deep-navy text-[16px] mb-5 pb-3 border-b border-outline-variant/30" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post, idx) => (
                    <Link key={post.id} to={`/blogs/${post.slug}`} className="flex items-start gap-4 group">
                      <span
                        className="text-[28px] font-extrabold text-outline-variant/60 leading-none mt-0.5 w-6 shrink-0 group-hover:text-safety-yellow transition-colors"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <p className="text-[13px] font-semibold text-deep-navy group-hover:text-primary transition-colors leading-snug line-clamp-2">{post.title}</p>
                        <span className="text-[12px] text-on-surface-variant mt-1 block">{post.date} · {post.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {categories.length > 1 && (
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-bold text-deep-navy text-[16px] mb-5 pb-3 border-b border-outline-variant/30" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Browse by Topic
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.slice(1).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveCategory(tag)}
                      aria-pressed={activeCategory === tag}
                      className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all hover:-translate-y-0.5 ${
                        activeCategory === tag ? 'bg-deep-navy text-white shadow-md' : 'bg-sky-tint text-deep-navy hover:bg-outline-variant/40'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-safety-yellow rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-deep-navy/10 rounded-full blur-xl" />
              <span className="material-symbols-outlined text-deep-navy text-[36px] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                volunteer_activism
              </span>
              <h3 className="font-bold text-deep-navy text-[17px] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Get Involved
              </h3>
              <p className="text-deep-navy/70 text-[13px] mb-5 leading-relaxed">
                Working on child online safety? Volunteer with IFDC and help build a safer digital world for children.
              </p>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 bg-deep-navy text-white px-5 py-2.5 rounded-xl font-semibold text-[13px] hover:bg-primary transition-colors active:scale-95"
              >
                Volunteer With Us
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
          </aside>
        </div>
      </main>

      {/* ── Bottom CTA Banner ── */}
      <section className="bg-sky-tint py-16 px-margin-mobile md:px-margin-desktop mt-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-safety-yellow/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <h2 className="font-bold text-deep-navy mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'Manrope, sans-serif' }}>
              Every Child Deserves a Safe Digital Space
            </h2>
            <p className="text-on-surface-variant text-[16px]">
              Support our mission by donating, volunteering, or spreading the word. Together, we can build a safer internet for the next generation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/donate" className="bg-deep-navy text-white px-9 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 text-center">
              Donate Now
            </Link>
            <Link to="/volunteer" className="border-2 border-deep-navy text-deep-navy px-9 py-4 rounded-full font-bold hover:bg-deep-navy hover:text-white transition-all active:scale-95 text-center">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
