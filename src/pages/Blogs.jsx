import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── Image Imports ──────────────────────────────────────────────────────────────
import youthsummit from '../assets/images/Youth Summit.png';
import digitalchild from '../assets/images/childwithlap.jpg';
import digitalChildren from '../assets/images/digital children.jpg';
import darkChild from '../assets/images/darkChilde.jpg';
import childwithTab from '../assets/images/childwith Tab.jpg';
import childAddict from '../assets/images/childAddict.jpg';
import childTeach from '../assets/images/childTeach.jpg';
import digitalboy from '../assets/images/digitalboy.jpg';
import coverImage1 from '../assets/images/coverImage1.jpg';
import cyberbullyingNews from '../assets/images/Cyberbullying News.png';

// ── Blog Data ──────────────────────────────────────────────────────────────────
const BLOGS = [
  {
    id: 1,
    title: "Understanding Gaming Safety: Beyond the Basics",
    excerpt: "Online gaming is a social hub for kids today. Learn how to manage in-game chat settings, recognize grooming patterns, and foster a positive gaming culture at home.",
    category: "Parent Guide",
    tag: "parent-guide",
    author: "Sarah Anderson",
    authorInitials: "SA",
    authorColor: "bg-sky-tint text-deep-navy",
    date: "October 18, 2024",
    readTime: "5 min read",
    image: childwithTab,
    featured: true,
  },
  {
    id: 2,
    title: "The Psychology of Screen Time in Early Childhood",
    excerpt: "Delve into recent psychological studies on how prolonged exposure to fast-paced digital media affects attention spans and emotional regulation in toddlers.",
    category: "Expert Insight",
    tag: "expert-insight",
    author: "Dr. Robert Chen",
    authorInitials: "DR",
    authorColor: "bg-primary-container text-white",
    date: "October 5, 2024",
    readTime: "8 min read",
    image: digitalChildren,
    featured: false,
  },
  {
    id: 3,
    title: "How to Talk to Your Teen About Cyberbullying",
    excerpt: "Opening the conversation about online harassment can be challenging. Here are evidence-based strategies to help your teenager navigate and report cyberbullying effectively.",
    category: "Parent Guide",
    tag: "parent-guide",
    author: "Maria Lopez",
    authorInitials: "ML",
    authorColor: "bg-safety-yellow text-deep-navy",
    date: "September 28, 2024",
    readTime: "6 min read",
    image: cyberbullyingNews,
    featured: false,
  },
  {
    id: 4,
    title: "Digital Literacy: Empowering Children to Think Critically Online",
    excerpt: "Critical thinking in the digital age is a life skill. Discover curriculum-aligned approaches used by leading educators to build media literacy from an early age.",
    category: "Education",
    tag: "education",
    author: "James Okafor",
    authorInitials: "JO",
    authorColor: "bg-sky-tint text-deep-navy",
    date: "September 15, 2024",
    readTime: "7 min read",
    image: childTeach,
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Algorithms and the Teen Mental Health Crisis",
    excerpt: "A deep dive into how recommendation engines are designed and why they may be contributing to rising anxiety and depression rates among adolescents worldwide.",
    category: "Expert Insight",
    tag: "expert-insight",
    author: "Dr. Aisha Patel",
    authorInitials: "AP",
    authorColor: "bg-primary-container text-white",
    date: "September 2, 2024",
    readTime: "10 min read",
    image: darkChild,
    featured: false,
  },
  {
    id: 6,
    title: "Screen Addiction: Signs, Science, and What Parents Can Do",
    excerpt: "When does healthy screen use cross the line? We explore the neuroscience behind addictive app design and practical steps to set healthy digital boundaries.",
    category: "Research",
    tag: "research",
    author: "Dr. Kevin Marsh",
    authorInitials: "KM",
    authorColor: "bg-sky-tint text-deep-navy",
    date: "August 20, 2024",
    readTime: "9 min read",
    image: childAddict,
    featured: false,
  },
  {
    id: 7,
    title: "A Parent's Guide to Privacy Settings on Top Platforms",
    excerpt: "Step-by-step walkthroughs for configuring privacy and safety controls on TikTok, Instagram, YouTube Kids, Roblox, and Discord for children of every age group.",
    category: "Parent Guide",
    tag: "parent-guide",
    author: "Lena Fischer",
    authorInitials: "LF",
    authorColor: "bg-safety-yellow text-deep-navy",
    date: "August 8, 2024",
    readTime: "4 min read",
    image: digitalchild,
    featured: false,
  },
  {
    id: 8,
    title: "Youth Voices: What Teenagers Actually Want Adults to Know",
    excerpt: "We surveyed 2,000 teens across 12 countries. Their answers about online safety, privacy, and digital freedom may surprise you and spark an important conversation.",
    category: "Research",
    tag: "research",
    author: "IFDC Research Team",
    authorInitials: "IF",
    authorColor: "bg-primary-container text-white",
    date: "July 25, 2024",
    readTime: "12 min read",
    image: youthsummit,
    featured: false,
  },
  {
    id: 9,
    title: "Building a Safer Classroom: Digital Safety in Schools",
    excerpt: "From acceptable use policies to bystander intervention programs, learn how progressive schools are putting digital citizenship at the core of the curriculum.",
    category: "Education",
    tag: "education",
    author: "Prof. Elena Vasquez",
    authorInitials: "EV",
    authorColor: "bg-sky-tint text-deep-navy",
    date: "July 10, 2024",
    readTime: "6 min read",
    image: digitalboy,
    featured: false,
  },
  {
    id: 10,
    title: "The Future of Child Online Protection Legislation",
    excerpt: "With new bills being passed globally, we examine what KOSA, the Online Safety Act, and emerging frameworks mean for tech companies and for children's rights.",
    category: "Policy",
    tag: "policy",
    author: "Amara Osei",
    authorInitials: "AO",
    authorColor: "bg-safety-yellow text-deep-navy",
    date: "June 28, 2024",
    readTime: "11 min read",
    image: coverImage1,
    featured: false,
  },
  {
    id: 11,
    title: "Raising Resilient Digital Citizens: A Family Framework",
    excerpt: "Beyond rules and restrictions, healthy digital citizenship comes from inside. This article outlines a values-based framework for raising confident, safe digital kids.",
    category: "Parent Guide",
    tag: "parent-guide",
    author: "Sarah Anderson",
    authorInitials: "SA",
    authorColor: "bg-sky-tint text-deep-navy",
    date: "June 15, 2024",
    readTime: "7 min read",
    image: childTeach,
    featured: false,
  },
];

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Parent Guide", value: "parent-guide" },
  { label: "Expert Insight", value: "expert-insight" },
  { label: "Education", value: "education" },
  { label: "Research", value: "research" },
  { label: "Policy", value: "policy" },
];

const CATEGORY_STYLES = {
  "Parent Guide":   "bg-safety-yellow/20 text-deep-navy",
  "Expert Insight": "bg-primary-container/10 text-primary-container",
  "Education":      "bg-sky-tint text-deep-navy",
  "Research":       "bg-deep-navy/10 text-deep-navy",
  "Policy":         "bg-error-container text-on-error-container",
};

// ── Blog Card ──────────────────────────────────────────────────────────────────
function BlogCard({ blog, layout }) {
  const catStyle = CATEGORY_STYLES[blog.category] ?? "bg-sky-tint text-deep-navy";

  if (layout === "list") {
    return (
      <article className="glass-card rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <div className="sm:w-[200px] shrink-0 overflow-hidden relative min-h-[160px]">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{ backgroundImage: `url(${blog.image})` }}
          />
        </div>
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider ${catStyle}`}>
              {blog.category}
            </span>
            <span className="font-caption text-[11px] text-on-surface-variant flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              {blog.readTime}
            </span>
          </div>
          <h3 className="font-headline-md text-[18px] text-deep-navy mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
            {blog.title}
          </h3>
          <p className="font-body-md text-[13px] text-on-surface-variant mb-4 line-clamp-2 flex-grow">
            {blog.excerpt}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30">
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] ${blog.authorColor}`}>
                {blog.authorInitials}
              </div>
              <span className="font-caption text-[11px] font-semibold text-deep-navy">{blog.author}</span>
              <span className="text-outline-variant">·</span>
              <span className="font-caption text-[11px] text-on-surface-variant">{blog.date}</span>
            </div>
            <Link
              to={`/news/${blog.id}`}
              className="text-deep-navy font-bold hover:underline flex items-center text-[12px] shrink-0"
            >
              Read <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-md text-[11px] uppercase tracking-wider ${catStyle}`}>
          {blog.category}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="font-caption text-[11px] text-on-surface-variant">{blog.date}</span>
          <span className="font-caption text-[11px] text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            {blog.readTime}
          </span>
        </div>
        <h3 className="font-headline-md text-[19px] text-deep-navy mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-3 flex-grow">
          {blog.title}
        </h3>
        <p className="font-body-md text-[13px] text-on-surface-variant mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${blog.authorColor}`}>
              {blog.authorInitials}
            </div>
            <span className="font-caption text-[12px] font-semibold text-deep-navy">{blog.author}</span>
          </div>
          <Link
            to={`/news/${blog.id}`}
            className="text-deep-navy font-bold hover:underline flex items-center text-[13px]"
          >
            Read Article <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────────
export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featured = BLOGS.find((b) => b.featured);

  const filtered = useMemo(() => {
    let result = BLOGS.filter((b) => !b.featured);

    if (activeCategory !== "all") {
      result = result.filter((b) => b.tag === activeCategory);
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

    if (sortBy === "oldest") result = [...result].reverse();
    if (sortBy === "readtime") {
      result = [...result].sort(
        (a, b) => parseInt(a.readTime) - parseInt(b.readTime)
      );
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const popularPosts = BLOGS.slice(0, 4);
  const allTags = [...new Set(BLOGS.map((b) => b.category))];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <>
      {/* ── Fixed Top Nav ── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between">
          <Link className="flex items-center gap-2 group" to="/">
            <img alt="IFDC Logo" className="h-10 w-auto object-contain" src={youthsummit} />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="font-label-md text-label-md text-primary font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" to="/blogs">Blogs</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/news">News</Link>
            <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-deep-navy text-deep-navy font-label-md text-label-md hover:bg-deep-navy hover:text-white transition-all active:scale-95">
              Get Involved
            </button>
            <button className="bg-safety-yellow text-deep-navy px-8 py-2.5 rounded-full font-label-md text-label-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95">
              <Link to="/donate">Donate</Link>
            </button>
          </div>
        </div>
      </nav>

      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 bg-deep-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-safety-yellow/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <nav className="flex items-center gap-2 text-white/50 text-[13px] mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-white font-semibold">Blogs &amp; Insights</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block bg-safety-yellow/20 text-safety-yellow px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest mb-6">
              IFDC Blog
            </span>
            <h1
              className="text-white font-extrabold leading-tight mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontFamily: 'Manrope, sans-serif' }}
            >
              Insights &amp; Ideas for a<br />
              <span className="text-safety-yellow">Safer Digital World</span>
            </h1>
            <p className="text-white/70 text-[18px] leading-relaxed mb-10 max-w-2xl">
              Expert guides, research-backed articles, and real-world advice for parents, educators, and advocates working to protect children online.
            </p>

            <div className="relative max-w-lg">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">search</span>
              <input
                id="blog-search"
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white text-on-surface outline-none text-[15px] shadow-xl focus:ring-2 focus:ring-safety-yellow transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/10">
            {[
              { value: `${BLOGS.length}+`, label: "Articles Published" },
              { value: "12", label: "Expert Authors" },
              { value: "50K+", label: "Monthly Readers" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-safety-yellow font-extrabold text-3xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-[13px] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-[80px] z-40 bg-background/95 backdrop-blur-sm border-b border-outline-variant/30 py-3 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-1.5 rounded-full font-label-md text-[13px] whitespace-nowrap transition-all ${
                  activeCategory === cat.value
                    ? "bg-deep-navy text-white shadow-md"
                    : "bg-sky-tint text-deep-navy hover:bg-outline-variant/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="pl-3 pr-8 py-1.5 rounded-xl border border-outline-variant bg-surface-container-lowest text-[13px] text-on-surface outline-none focus:ring-2 focus:ring-deep-navy cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="readtime">Shortest Read</option>
            </select>

            <div className="hidden sm:flex items-center rounded-xl border border-outline-variant overflow-hidden bg-surface-container-lowest">
              <button
                onClick={() => setLayout("grid")}
                className={`p-2 transition-colors ${layout === "grid" ? "bg-deep-navy text-white" : "text-on-surface-variant hover:bg-sky-tint"}`}
                title="Grid view"
              >
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
              </button>
              <button
                onClick={() => setLayout("list")}
                className={`p-2 transition-colors ${layout === "list" ? "bg-deep-navy text-white" : "text-on-surface-variant hover:bg-sky-tint"}`}
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

            {/* Featured Article */}
            {!searchQuery && activeCategory === "all" && featured && (
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-0.5 bg-safety-yellow" />
                  <span className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-widest">Featured Article</span>
                </div>
                <article className="glass-card rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group hover:shadow-2xl transition-all duration-300 ambient-glow">
                  <div className="lg:w-3/5 h-[280px] lg:h-[440px] overflow-hidden relative">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-safety-yellow text-deep-navy font-label-md text-[11px] px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
                        {featured.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-[11px] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {featured.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                    <span className="font-caption text-caption text-on-surface-variant mb-4">{featured.date}</span>
                    <h2
                      className="font-bold leading-tight text-deep-navy mb-5 group-hover:text-primary transition-colors"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontFamily: 'Manrope, sans-serif' }}
                    >
                      {featured.title}
                    </h2>
                    <p className="text-on-surface-variant text-[15px] leading-relaxed mb-8">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${featured.authorColor}`}>
                        {featured.authorInitials}
                      </div>
                      <div>
                        <div className="font-semibold text-[14px] text-deep-navy">{featured.author}</div>
                        <div className="text-[12px] text-on-surface-variant">Senior Digital Safety Expert</div>
                      </div>
                    </div>
                    <Link
                      to={`/news/${featured.id}`}
                      className="self-start group flex items-center gap-2 font-label-md text-label-md text-deep-navy bg-safety-yellow px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                      Read Article
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              </section>
            )}

            {/* Articles Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-bold text-deep-navy text-[22px]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {searchQuery
                    ? `Results for "${searchQuery}"`
                    : activeCategory === "all"
                    ? "All Articles"
                    : CATEGORIES.find(c => c.value === activeCategory)?.label}
                </h2>
                <p className="text-on-surface-variant text-[13px] mt-0.5">
                  {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
                </p>
              </div>
            </div>

            {/* Empty State */}
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 text-center glass-card rounded-3xl">
                <span className="material-symbols-outlined text-7xl text-outline-variant mb-4">search_off</span>
                <h3 className="font-bold text-deep-navy text-xl mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>No articles found</h3>
                <p className="text-on-surface-variant text-[15px] mb-6">Try adjusting your search or filter.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                  className="bg-deep-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-primary transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Grid / List */}
            {filtered.length > 0 && (
              <div className={layout === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                : "flex flex-col gap-4"
              }>
                {filtered.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} layout={layout} />
                ))}
              </div>
            )}

            {filtered.length > 0 && (
              <div className="flex justify-center mt-12">
                <button className="flex items-center gap-3 px-10 py-4 rounded-full border-2 border-deep-navy text-deep-navy font-semibold hover:bg-deep-navy hover:text-white transition-all active:scale-95 shadow-sm">
                  <span className="material-symbols-outlined">add</span>
                  Load More Articles
                </button>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:flex flex-col gap-8 w-[320px] shrink-0">

            {/* Newsletter */}
            <div className="bg-deep-navy rounded-3xl p-7 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-safety-yellow/20 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" />
              <span className="material-symbols-outlined text-safety-yellow text-[36px] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
              <h3 className="font-bold text-[18px] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Stay Informed</h3>
              <p className="text-white/70 text-[13px] mb-5 leading-relaxed">
                Get the latest blogs and safety updates delivered to your inbox every week.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 bg-safety-yellow/20 rounded-xl p-4">
                  <span className="material-symbols-outlined text-safety-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-safety-yellow font-semibold text-[13px]">You are subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3 relative z-10">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-[13px] outline-none focus:ring-2 focus:ring-safety-yellow"
                  />
                  <button
                    type="submit"
                    className="w-full bg-safety-yellow text-deep-navy font-bold py-3 rounded-xl hover:bg-white transition-colors text-[13px] active:scale-95"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>

            {/* Popular Posts */}
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-bold text-deep-navy text-[16px] mb-5 pb-3 border-b border-outline-variant/30" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Popular Articles
              </h3>
              <div className="space-y-4">
                {popularPosts.map((post, idx) => (
                  <Link
                    key={post.id}
                    to={`/news/${post.id}`}
                    className="flex items-start gap-4 group"
                  >
                    <span
                      className="text-[28px] font-extrabold text-outline-variant/60 leading-none mt-0.5 w-6 shrink-0 group-hover:text-safety-yellow transition-colors"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-[13px] font-semibold text-deep-navy group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </p>
                      <span className="text-[11px] text-on-surface-variant mt-1 block">{post.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags Cloud */}
            <div className="glass-card rounded-3xl p-6">
              <h3 className="font-bold text-deep-navy text-[16px] mb-5 pb-3 border-b border-outline-variant/30" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Browse by Topic
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => {
                  const cat = CATEGORIES.find(c => c.label === tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => setActiveCategory(cat?.value ?? "all")}
                      className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all hover:-translate-y-0.5 ${
                        activeCategory === cat?.value
                          ? "bg-deep-navy text-white shadow-md"
                          : "bg-sky-tint text-deep-navy hover:bg-outline-variant/40"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-safety-yellow rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-deep-navy/10 rounded-full blur-xl" />
              <span className="material-symbols-outlined text-deep-navy text-[36px] mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>
                volunteer_activism
              </span>
              <h3 className="font-bold text-deep-navy text-[17px] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Become a Contributor
              </h3>
              <p className="text-deep-navy/70 text-[13px] mb-5 leading-relaxed">
                Are you an expert in digital child safety? Share your insights with 50,000+ readers.
              </p>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 bg-deep-navy text-white px-5 py-2.5 rounded-xl font-semibold text-[13px] hover:bg-primary transition-colors active:scale-95"
              >
                Apply to Write
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
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
            <h2
              className="font-bold text-deep-navy mb-3"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontFamily: 'Manrope, sans-serif' }}
            >
              Every Child Deserves a Safe Digital Space
            </h2>
            <p className="text-on-surface-variant text-[16px]">
              Support our mission by donating, volunteering, or spreading the word. Together, we can build a safer internet for the next generation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/donate"
              className="bg-deep-navy text-white px-9 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 text-center"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="border-2 border-deep-navy text-deep-navy px-9 py-4 rounded-full font-bold hover:bg-deep-navy hover:text-white transition-all active:scale-95 text-center"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
