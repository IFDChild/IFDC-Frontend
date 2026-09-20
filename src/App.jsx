import React from 'react';
import Seo from './components/Seo';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import Partner from './pages/Partner';
import Volunteer from './pages/Volunteer';
import Policies from './pages/Policies';
import Impact from './pages/Impact';
import ArticleDetail from './pages/ArticleDetail';
import StrategicPlan from './pages/StrategicPlan';
import AnnualReport from './pages/AnnualReport';
import MemberProfile from './pages/MemberProfile';
import Advocate from './pages/Advocate';
import Donate from './pages/Donate';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';

// Scroll to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// 404 Page
function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <Seo title="Page not found" noindex />
      <span className="material-symbols-outlined text-7xl text-[#c3c6d0] mb-6">search_off</span>
      <h1 className="text-4xl font-bold text-[#0B3D6E] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Page Not Found</h1>
      <p className="text-[#43474f] mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" className="bg-[#0B3D6E] text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all">
        Back to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<ArticleDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/advocate" element={<Advocate />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/strategic-plan" element={<StrategicPlan />} />
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/profile" element={<MemberProfile />} />
        <Route path="/programs" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
