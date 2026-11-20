import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Layers,
  Globe,
  ShoppingCart,
  TrendingUp,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Star,
  Send,
  ShieldCheck,
  Zap,
  Award,
  Users,
  Laptop,
  Check,
  MessageCircle,
  HelpCircle,
  Calculator,
  ArrowUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LandingPage() {
  // Navigation & UI States
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Modals
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  // Currency Toggle for Pricing
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'

  // Portfolio Carousel / Filter
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);

  // FAQ Accordion
  const [activeFaq, setActiveFaq] = useState(0);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Website Development',
    budget: '₹10,000 - ₹25,000',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // Instant Quote Estimator State
  const [quoteData, setQuoteData] = useState({
    type: 'website',
    pages: '5-10',
    design: 'custom',
    seo: true,
    cms: true,
    ecommerce: false
  });

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services Data
  const services = [
    {
      id: 'web-dev',
      title: 'Website Development',
      icon: <Code className="w-6 h-6 text-blue-600" />,
      bg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      shortDesc: 'Business, portfolio, and responsive websites.',
      description: 'We craft high-performance, mobile-first websites tailored to your brand identity. From modern business corporate websites to high-converting marketing landing pages with lightning-fast load times and SEO-first architecture.',
      deliverables: ['Custom UI/UX Design', '100% Mobile Responsive', 'Fast PageSpeed (90+)', 'On-Page SEO Ready', 'Domain & SSL Setup'],
      tech: ['HTML5', 'Tailwind CSS', 'React.js', 'Next.js', 'PHP']
    },
    {
      id: 'laravel-dev',
      title: 'Laravel Development',
      icon: <Layers className="w-6 h-6 text-red-500" />,
      bg: 'bg-red-50',
      iconColor: 'text-red-500',
      shortDesc: 'Scalable and secure Laravel applications.',
      description: 'Specialized enterprise-grade Laravel web applications built with clean MVC structure, scalable databases, high security, RESTful APIs, and custom CRM/ERP management portals.',
      deliverables: ['Custom Business Logic', 'Role-Based Authentication', 'Secure Payment Gateways', 'RESTful API Architecture', 'Automated Backups & Queues'],
      tech: ['Laravel 11/12/13', 'PHP 8.4', 'MySQL', 'PostgreSQL', 'Redis']
    },
    {
      id: 'wp-dev',
      title: 'WordPress Development',
      icon: <Globe className="w-6 h-6 text-sky-600" />,
      bg: 'bg-sky-50',
      iconColor: 'text-sky-600',
      shortDesc: 'Powerful WordPress websites & stores.',
      description: 'Take full control of your website content. We develop custom WordPress themes and Gutenberg/Elementor websites that are fast, secure, and effortless for your non-technical team to update.',
      deliverables: ['Custom Theme Architecture', 'Drag-and-Drop Editor', 'WooCommerce Integration', 'Security & Spam Protection', 'Speed Optimization'],
      tech: ['WordPress CMS', 'WooCommerce', 'PHP', 'ACF Pro', 'MySQL']
    },
    {
      id: 'ecom-dev',
      title: 'E-commerce Development',
      icon: <ShoppingCart className="w-6 h-6 text-purple-600" />,
      bg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      shortDesc: 'Online stores & shopping solutions.',
      description: 'Turn visitors into loyal paying customers with seamless shopping experiences. Complete e-commerce platforms featuring instant payment gateway checkouts, real-time inventory, and invoice generation.',
      deliverables: ['Product Catalog & Filters', 'Payment Gateways (Razorpay/Stripe)', 'Cart & One-Click Checkout', 'Order & Inventory System', 'Customer Order Tracking'],
      tech: ['WooCommerce', 'Laravel E-com', 'Shopify', 'Razorpay', 'Stripe']
    },
    {
      id: 'seo-marketing',
      title: 'SEO & Digital Marketing',
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      bg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      shortDesc: 'Get higher ranking and more traffic.',
      description: 'Data-driven technical SEO and organic search optimization to bring high-intent buyers straight to your website. We rank you on top of Google search results for your primary business keywords.',
      deliverables: ['Comprehensive Keyword Audit', 'Technical SEO & Meta Tags', 'Schema & Rich Snippets', 'Google Analytics & Search Console', 'Monthly Performance Reports'],
      tech: ['Google Search Console', 'Ahrefs', 'Schema.org', 'Lighthouse', 'Core Web Vitals']
    },
    {
      id: 'hosting-support',
      title: 'Hosting & Support',
      icon: <Headphones className="w-6 h-6 text-indigo-600" />,
      bg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      shortDesc: 'Reliable hosting & maintenance services.',
      description: 'Zero downtime and peace of mind. We manage your cloud servers, install security updates, run daily automated off-site backups, and provide priority bug fixes so your business never goes offline.',
      deliverables: ['99.9% Server Uptime', 'Daily Cloud Backups', 'Free SSL Certificates', 'Malware & Hacker Protection', 'Monthly Software Updates'],
      tech: ['Cloud VPS', 'Render / AWS', 'Nginx', 'Docker', 'Cloudflare CDN']
    }
  ];

  // Portfolio Projects Data
  const projects = [
    {
      id: 1,
      title: 'TMS Logistics Management',
      category: 'Web Application',
      subtitle: 'Transport & Fleet Operations System',
      description: 'An enterprise logistics and fleet operations management platform. Built to streamline truck dispatching, route tracking, fuel analytics, driver payroll, and real-time load consignment invoicing.',
      badge: 'Web Application',
      gradient: 'from-blue-900 to-indigo-900',
      iconType: 'truck',
      results: 'Automated 70% manual paperwork and improved invoice turnaround by 4x.',
      tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'REST APIs'],
      client: 'National Freight Logistics, India'
    },
    {
      id: 2,
      title: 'CineLaddoo',
      category: 'Entertainment',
      subtitle: 'Movie Review & Entertainment Platform',
      description: 'A vibrant cinema and OTT review discovery platform. Offers critic ratings, verified audience reactions, movie trailers, and rich SEO schema markup generating over 150k monthly pageviews.',
      badge: 'Movie Review Platform',
      gradient: 'from-purple-950 to-indigo-900',
      iconType: 'film',
      results: '150,000+ monthly active organic visitors with 98+ PageSpeed rating.',
      tech: ['PHP / Laravel', 'React.js', 'Tailwind CSS', 'MySQL', 'SEO Schema'],
      client: 'CineLaddoo Media Group'
    },
    {
      id: 3,
      title: 'Hubflix',
      category: 'Entertainment',
      subtitle: 'Movie & Web Series Streaming UI',
      description: 'A dark-mode media portal with Netflix-like responsive catalogs, multi-server video player embed integrations, category filters, and lightning-fast search indexing.',
      badge: 'Movie & Web Series',
      gradient: 'from-gray-950 via-purple-950 to-slate-900',
      iconType: 'play',
      results: 'Sub-second video catalog load time with intelligent caching.',
      tech: ['React.js', 'Laravel Backend', 'Tailwind CSS', 'Redis', 'Video.js'],
      client: 'Hubflix Media Hub'
    },
    {
      id: 4,
      title: 'Job Portal',
      category: 'Portal',
      subtitle: 'Recruitment & Candidate Platform',
      description: 'A two-sided job marketplace connecting employers with verified candidates. Features automated resume parsing, role filtering, applicant tracking, and employer messaging.',
      badge: 'Recruitment Platform',
      gradient: 'from-blue-950 to-cyan-900',
      iconType: 'users',
      results: 'Over 12,000 resumes submitted with 99.9% uptime across hiring seasons.',
      tech: ['Laravel MVC', 'Livewire', 'MySQL', 'Tailwind CSS', 'Email Queues'],
      client: 'CareerFirst Solutions'
    },
    {
      id: 5,
      title: 'Restaurant Booking',
      category: 'Booking',
      subtitle: 'Table Reservation & Menu System',
      description: 'Interactive restaurant reservation and QR digital menu system. Allows diners to book specific dining zones, order ahead, and receive SMS and WhatsApp table confirmations.',
      badge: 'Booking System',
      gradient: 'from-amber-950 to-rose-900',
      iconType: 'utensils',
      results: 'Reduced no-shows by 45% using automated WhatsApp booking reminders.',
      tech: ['WordPress / PHP', 'React Components', 'Razorpay', 'WhatsApp API'],
      client: 'Spice Symphony Hospitality'
    },
    {
      id: 6,
      title: 'QuickShop E-Commerce',
      category: 'Web Application',
      subtitle: 'Modern Multi-Category Digital Store',
      description: 'High-converting fashion e-commerce storefront with multi-currency checkout, dynamic product variant pickers, coupon engine, and seamless Razorpay and Stripe integration.',
      badge: 'E-Commerce Store',
      gradient: 'from-purple-950 to-pink-900',
      iconType: 'shopping-bag',
      results: '3.4% cart-to-checkout conversion rate with automated abandon cart recovery.',
      tech: ['Laravel', 'React.js', 'Tailwind CSS', 'Razorpay', 'Stripe'],
      client: 'UrbanTrends Apparel'
    }
  ];

  // Filtered Projects
  const filteredProjects = portfolioFilter === 'All'
    ? projects
    : projects.filter(p => p.category === portfolioFilter);

  // Pricing Plans
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Website',
      inrPrice: '₹7,999',
      usdPrice: '$99',
      tagline: 'Perfect for small business',
      popular: false,
      features: [
        'Responsive Mobile Design',
        'Up to 5 Pages Layout',
        'Basic SEO Setup',
        'Contact Form with Email Alerts',
        'WhatsApp Chat Integration',
        'Social Media Links',
        '1 Month Free Support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-white text-navy-800 border border-slate-300 hover:border-blue-600 hover:text-blue-600'
    },
    {
      id: 'professional',
      name: 'Professional Website',
      inrPrice: '₹14,999',
      usdPrice: '$189',
      tagline: 'Grow Your Business',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Advanced Custom UI/UX Design',
        'Up to 10 Pages or Sections',
        'Complete SEO Optimization',
        'Fast Speed & 90+ PageSpeed Score',
        'Dynamic CMS or Admin Panel',
        'Interactive Hero & Portfolios',
        'Lead Capture Form & Database',
        '3 Months Free Support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-glow hover:opacity-95'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Store',
      inrPrice: '₹19,999',
      usdPrice: '$249',
      tagline: 'Start Selling Online',
      popular: false,
      features: [
        'Full Online Store Setup',
        'Unlimited Product Catalog',
        'Payment Gateway (Razorpay/Stripe)',
        'Shopping Cart & One-Click Checkout',
        'Order & Inventory Admin Panel',
        'Customer Accounts & Order Tracking',
        'Automated Invoicing & Emails',
        '6 Months Free Support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'bg-white text-navy-800 border border-slate-300 hover:border-purple-600 hover:text-purple-600'
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Webyotic delivered our website beyond expectations. Highly professional, responsive and very supportive team throughout the project!",
      author: "Priya Sharma",
      role: "Business Owner, Ludhiana",
      avatarBg: "bg-rose-100 text-rose-700",
      rating: 5
    },
    {
      quote: "Excellent Laravel development services. The TMS web application was completed on time with great code quality and top-notch security.",
      author: "Rohit Verma",
      role: "Founder, TechEra",
      avatarBg: "bg-blue-100 text-blue-700",
      rating: 5
    },
    {
      quote: "Very helpful team, quick turnaround on revisions and superb work. Our online sales increased drastically after the redesign. Highly recommended!",
      author: "Amit Singh",
      role: "Director, Digital Brand",
      avatarBg: "bg-purple-100 text-purple-700",
      rating: 5
    }
  ];

  // FAQ Data
  const faqs = [
    {
      q: "What is the typical timeframe to deliver a website or web app?",
      a: "A standard business website typically takes 5 to 10 business days. Custom Laravel web applications or complex e-commerce platforms take between 2 to 4 weeks depending on the features and revision cycles. We always provide a written milestone schedule upfront."
    },
    {
      q: "Will my website be mobile-friendly and fast loading?",
      a: "Absolutely 100%. Every single project we develop is mobile-first, responsive across all screen sizes (smartphones, tablets, laptops, 4K displays), and tested on Google PageSpeed Insights aiming for 90+ performance scores."
    },
    {
      q: "Do I get full ownership of the source code and database?",
      a: "Yes! Once final payment is settled, 100% of the code, intellectual property, database schema, and design assets belong exclusively to you. No vendor lock-in or hidden licensing fees."
    },
    {
      q: "Can I manage and update content on the website myself?",
      a: "Yes. Depending on your preference, we build easy-to-use admin panels (Laravel Backpack / Filament) or WordPress visual builders so you and your team can change text, upload images, and add new products with zero coding knowledge."
    },
    {
      q: "What are your payment terms and milestones?",
      a: "We work with client-friendly milestone stages: typically 40% advance to start design and architecture, 30% after staging demonstration and client review, and 30% upon final launch and code handover."
    }
  ];

  // Form Submission Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': window.webyoticConfig?.csrfToken || ''
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSuccess(true);
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Website Development',
          budget: '₹10,000 - ₹25,000',
          message: ''
        });
      } else {
        setFormError(data.message || 'Something went wrong. Please try again or WhatsApp us.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: If network error or backend offline, open mailto directly
      const subject = encodeURIComponent(`Webyotic Enquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:hello@webyotic.com?subject=${subject}&body=${body}`;
      setFormSuccess(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  // Calculate instant quote
  const calculateEstimatedQuote = () => {
    let base = 7999;
    if (quoteData.type === 'laravel') base = 18000;
    if (quoteData.type === 'ecommerce') base = 21000;
    if (quoteData.type === 'wordpress') base = 11000;

    if (quoteData.pages === '10-20') base += 5000;
    if (quoteData.pages === '20+') base += 10000;

    if (quoteData.design === 'custom') base += 3500;
    if (quoteData.seo) base += 2500;
    if (quoteData.ecommerce) base += 6000;

    const inr = base;
    const usd = Math.round(base / 83);

    return currency === 'INR' ? `₹${inr.toLocaleString('en-IN')}` : `$${usd}`;
  };

  return (
    <div className="min-h-screen bg-white text-[#152044] font-['DM_Sans',sans-serif] selection:bg-purple-600 selection:text-white">

      {/* =========================================================================
          1. TOP BAR
          ========================================================================= */}
      <div className="bg-[#101b52] text-[#dce6ff] text-xs py-2 border-b border-[#1f2d6b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:hello@webyotic.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>hello@webyotic.com</span>
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 98765 43210</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline font-medium text-blue-200">
              We Build Websites. We Grow Businesses.
            </span>
            <div className="flex items-center space-x-3 text-slate-300">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors p-1"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors p-1"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. NAVBAR
          ========================================================================= */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-md group-hover:scale-105 transition-transform">
                <span>W</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-[#101b52] tracking-tight leading-none">
                  Webyotic
                </span>
                <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
                  Web Development & Digital Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-bold text-[#152044]">
              <a href="#home" className="hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-blue-600 transition-colors">
                About
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                    {services.map((item) => (
                      <a
                        key={item.id}
                        href="#services"
                        onClick={() => setSelectedServiceModal(item)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div
                          className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-[#101b52] group-hover:text-blue-600">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {item.shortDesc}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#portfolio" className="hover:text-blue-600 transition-colors">
                Portfolio
              </a>
              <a href="#pricing" className="hover:text-blue-600 transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="hover:text-blue-600 transition-colors">
                Reviews
              </a>
              <a href="#faq" className="hover:text-blue-600 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>

            {/* Right CTA Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-md hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4 font-bold text-sm text-[#101b52]">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                About Webyotic
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                Our Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                Pricing Plans
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                Client Reviews
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-blue-600"
              >
                Contact Us
              </a>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-center shadow-md"
                >
                  Get a Free Quote →
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* =========================================================================
          3. HERO SECTION
          ========================================================================= */}
      <section
        id="home"
        className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-br from-[#f8faff] via-[#ffffff] to-[#f0f4ff]"
      >
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide uppercase shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                <span>Your Trusted Tech Partner</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101b52] tracking-tight leading-[1.12] mb-6">
                We Build Websites.{' '}
                <span className="block gradient-text">We Grow Businesses.</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                Webyotic is a leading web development & digital solutions company, helping businesses
                establish a strong online presence with modern technology and creative solutions.
              </p>

              {/* 4 Feature Bullet Checkmarks */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 mb-9 text-xs sm:text-sm font-bold text-slate-700">
                <div className="flex items-center gap-2 bg-white/90 px-3.5 py-2 rounded-xl shadow-xs border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 px-3.5 py-2 rounded-xl shadow-xs border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 px-3.5 py-2 rounded-xl shadow-xs border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 px-3.5 py-2 rounded-xl shadow-xs border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Ongoing Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-sm shadow-md hover:shadow-glow hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Webyotic,%20I%20am%20interested%20in%20your%20web%20development%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-800 border-2 border-emerald-500/50 hover:border-emerald-500 font-extrabold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Graphic / Mockup Showcase Column */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">

                {/* Hand-drawn Floating Speech Ribbon */}
                <div className="absolute -top-6 -right-2 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-purple-200 animate-float text-right">
                  <div className="text-xs font-black text-purple-700 tracking-tight">
                    Let's Turn Your Ideas Into
                  </div>
                  <div className="text-sm font-black gradient-text">
                    Digital Success! 🚀
                  </div>
                </div>

                {/* Main 3D Laptop Setup Mockup */}
                <div className="relative bg-gradient-to-br from-[#121c4b] via-[#1a2764] to-[#2c3b88] rounded-3xl p-6 sm:p-7 shadow-2xl border border-indigo-200/40 text-white overflow-hidden">
                  {/* Laptop Screen Header Dots */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[10px] font-mono text-blue-200/70 tracking-widest uppercase">
                      webyotic.com/live
                    </div>
                  </div>

                  {/* Laptop Center Display Content */}
                  <div className="py-6 px-4 bg-[#0a1138]/90 rounded-2xl border border-white/10 text-center relative overflow-hidden">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center text-3xl font-black text-white shadow-lg">
                      W
                    </div>
                    <h3 className="text-2xl font-black tracking-tight text-white mb-1">
                      Webyotic
                    </h3>
                    <p className="text-xs text-blue-200 max-w-xs mx-auto mb-5 font-medium">
                      High-Performance Web Solutions · Custom Architecture · Growth-Driven
                    </p>

                    {/* Progress Bar Graphic */}
                    <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto text-left">
                      <div className="bg-white/10 rounded-xl p-2.5">
                        <div className="text-[10px] text-blue-300 font-semibold">Speed Score</div>
                        <div className="text-base font-bold text-emerald-400">99 / 100</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-2.5">
                        <div className="text-[10px] text-blue-300 font-semibold">Uptime SLA</div>
                        <div className="text-base font-bold text-cyan-400">99.98%</div>
                      </div>
                    </div>
                  </div>

                  {/* Desk accessories simulation */}
                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-blue-200">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                        ☕
                      </div>
                      <span className="text-[11px]">Webyotic Branded Mug</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Online & Ready</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric 1 */}
                <div className="absolute -bottom-5 -left-4 z-20 bg-white px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-black text-[#101b52]">7+ Years</div>
                    <div className="text-[11px] text-slate-500 font-medium">Industry Experience</div>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute top-1/2 -right-6 z-20 hidden sm:flex bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-800">150+ Projects</div>
                    <div className="text-[10px] text-slate-500">Delivered Worldwide</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SERVICES SECTION
          ========================================================================= */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101b52] tracking-tight mb-4">
              Complete Digital Solutions for Your Business
            </h2>
            <p className="text-slate-600 text-base">
              From websites to custom software, we cover everything you need to grow online.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-card-hover hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-extrabold text-[#101b52] group-hover:text-blue-600 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-purple-600 transition-colors group/link pt-4 border-t border-slate-100"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. ABOUT WEBYOTIC & WHY CHOOSE US SECTION
          ========================================================================= */}
      <section id="about" className="py-20 bg-[#f7f9ff] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Developer Graphic Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-[#0c1645] to-[#1e348f] p-8 text-white">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center font-black text-2xl text-white mb-6">
                  W
                </div>

                <div className="text-xs uppercase font-mono tracking-widest text-cyan-300 mb-2">
                  Engineered with Passion
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
                  Code that scales. Design that converts.
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed mb-6">
                  Our specialized developers write clean, maintainable, and battle-tested code following modern PSR and React architectural principles.
                </p>

                {/* Coding snippet highlight */}
                <div className="bg-[#070d2b] rounded-xl p-4 font-mono text-xs text-slate-300 border border-white/10 space-y-1">
                  <div><span className="text-purple-400">class</span> <span className="text-blue-300">WebyoticProject</span> {'{'}</div>
                  <div className="pl-4"><span className="text-amber-300">$performance</span> = <span className="text-emerald-400">'99+'</span>;</div>
                  <div className="pl-4"><span className="text-amber-300">$scalability</span> = <span className="text-blue-400">true</span>;</div>
                  <div className="pl-4"><span className="text-amber-300">$satisfaction</span> = <span className="text-cyan-300">'100%'</span>;</div>
                  <div>{'}'}</div>
                </div>

                {/* Badge */}
                <div className="mt-6 flex items-center justify-between text-xs font-bold text-slate-300 border-t border-white/10 pt-4">
                  <span>Webyotic Tech Hub</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Partner
                  </span>
                </div>
              </div>
            </div>

            {/* Right Information & Why Choose Us */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>About Webyotic</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101b52] tracking-tight mb-4">
                Turning Ideas Into Powerful Digital Solutions
              </h2>

              {/* Narrative */}
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                With 7+ years of experience in web development, Webyotic specializes in PHP, Laravel,
                WordPress, React, Vue and modern technologies. We focus on quality, performance and
                long-term partnership with our clients.
              </p>

              {/* 4 Checklist items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>7+ Years of Professional Experience</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Expert Team of Developers</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Client-Centric Approach</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Affordable & Transparent Pricing</span>
                </div>
              </div>

              {/* "Why Choose Webyotic?" Highlight Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200 mb-8">
                <div className="flex items-center gap-2 font-black text-lg text-[#101b52] mb-4">
                  <ShieldCheck className="w-5 h-5 text-purple-600" />
                  <span>Why Choose Webyotic?</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Expert Development Team (PHP, Laravel, Vue, React)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>SEO Friendly Websites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>On-Time Project Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Ongoing Support & Maintenance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Cost-Effective Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% Client Satisfaction</span>
                  </div>
                </div>

                {/* Growth Infographic Slogan Banner */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-blue-600 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                        Our Mission
                      </div>
                      <div className="text-base sm:text-lg font-black text-[#101b52]">
                        "Your Growth is Our Success!"
                      </div>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#101b52] text-white font-bold text-sm hover:bg-blue-600 transition-colors shadow-md"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. RECENT WORK / PORTFOLIO SECTION
          ========================================================================= */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
              <Laptop className="w-3.5 h-3.5" />
              <span>Our Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101b52] tracking-tight mb-3">
              Our Recent Work
            </h2>
            <p className="text-slate-600 text-base">
              Explore some of our successful projects delivered for clients across various industries.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {['All', 'Web Application', 'Entertainment', 'Portal', 'Booking'].map((tab) => (
              <button
                key={tab}
                onClick={() => setPortfolioFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  portfolioFilter === tab
                    ? 'bg-[#101b52] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProjectModal(project)}
                className="group cursor-pointer bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-card-hover hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Mockup Preview Card Art Header */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                      {project.badge}
                    </span>
                    <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>

                  {/* Project Art Center Title */}
                  <div className="relative z-10">
                    <div className="text-2xl font-black tracking-tight text-white/95">
                      {project.title}
                    </div>
                    <div className="text-xs text-blue-200 font-medium">
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Decorative background circle */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                </div>

                {/* Project Info Bottom Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400">Case Study</span>
                  </div>
                  <h3 className="font-extrabold text-lg text-[#101b52] mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-purple-600">
                    <span>{project.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. TESTIMONIALS SECTION
          ========================================================================= */}
      <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wide mb-3">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101b52] tracking-tight mb-3">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 text-base">
              We are proud to have helped businesses achieve their digital goals.
            </p>
          </div>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 text-amber-400 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div
                    className={`w-11 h-11 rounded-full ${t.avatarBg} font-bold text-sm flex items-center justify-center shrink-0`}
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-sm text-[#101b52]">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. PRICING SECTION
          ========================================================================= */}
      <section
        id="pricing"
        className="py-20 relative bg-gradient-to-br from-[#0c1645] via-[#101b52] to-[#253d9c] text-white overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Pricing Header Banner */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wide mb-3 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Pricing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Transparent & Affordable Pricing
              </h2>
              <p className="text-blue-200 text-base mt-2 max-w-xl">
                Choose a plan that fits your business needs. No hidden charges. Get started today!
              </p>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 self-start md:self-auto">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  currency === 'INR' ? 'bg-white text-navy-900 shadow-sm' : 'text-blue-100 hover:text-white'
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  currency === 'USD' ? 'bg-white text-navy-900 shadow-sm' : 'text-blue-100 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white text-slate-800 rounded-3xl p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'ring-4 ring-purple-400 md:-translate-y-2'
                    : 'hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-extrabold text-[#101b52] mb-1">
                    {plan.name}
                  </h3>
                  <div className="text-xs text-slate-500 mb-5">{plan.tagline}</div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-3xl sm:text-4xl font-black text-[#101b52]">
                      {currency === 'INR' ? plan.inrPrice : plan.usdPrice}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">/ project</span>
                  </div>

                  {/* Feature Check List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={() => {
                    setFormData({
                      ...formData,
                      service: plan.name,
                      budget: currency === 'INR' ? plan.inrPrice : plan.usdPrice
                    });
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full py-3 rounded-full text-xs font-black transition-all text-center ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}

            {/* 4th Card: Need a Custom Solution? */}
            <div className="bg-gradient-to-br from-[#101b52] to-[#1e2d7d] rounded-3xl p-7 border border-white/20 flex flex-col justify-between text-white shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center mb-6">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Need a Custom Solution?
                </h3>
                <p className="text-blue-200 text-xs sm:text-sm leading-relaxed mb-6">
                  Have a custom Laravel application, complex multi-vendor portal, or dedicated enterprise team requirement? Get in touch for a personalized quote.
                </p>

                <div className="space-y-2 text-xs text-blue-100 mb-8 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Free Architecture Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Milestone-Based Estimates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Direct WhatsApp Call</span>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-full bg-white text-[#101b52] hover:bg-cyan-300 font-black text-xs text-center transition-colors shadow-md"
              >
                Contact Us →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. FAQ SECTION
          ========================================================================= */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101b52] tracking-tight mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers to the most common questions our clients ask before starting.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base text-[#101b52] hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-200 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CONTACT & LEAD GENERATION SECTION
          ========================================================================= */}
      <section id="contact" className="py-20 bg-[#f5f7ff] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide mb-4">
                <Send className="w-3.5 h-3.5" />
                <span>Let's Talk</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101b52] tracking-tight mb-4">
                Tell us what you want to build
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Share a few details about your business and project goals. We will analyze your requirements and get back to you within 2-4 business hours with an action plan and exact timeline.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@webyotic.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Direct Email</div>
                    <div className="text-sm font-extrabold text-[#101b52]">hello@webyotic.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Phone & WhatsApp</div>
                    <div className="text-sm font-extrabold text-[#101b52]">+91 98765 43210</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold uppercase">Office Location</div>
                    <div className="text-sm font-extrabold text-[#101b52]">Ludhiana, Punjab, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-[#101b52]">
                    Start Your Project
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out the form below or request a quick estimate.
                  </p>
                </div>

                {formSuccess ? (
                  <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl animate-in fade-in duration-300">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-emerald-900 mb-2">
                      Enquiry Received Successfully!
                    </h4>
                    <p className="text-sm text-emerald-700 max-w-md mx-auto mb-6">
                      Thank you for contacting Webyotic! Our lead developer will review your project details and reach out to you within 2-4 business hours.
                    </p>
                    <button
                      onClick={() => setFormSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-semibold">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company / Business Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Tech"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 XXXXX"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Service Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        >
                          <option value="Website Development">Website Development</option>
                          <option value="Laravel Development">Laravel Development</option>
                          <option value="WordPress Development">WordPress Development</option>
                          <option value="E-commerce Store">E-commerce Store</option>
                          <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                          <option value="Hosting & Maintenance">Hosting & Maintenance</option>
                          <option value="Custom Project">Custom Project / Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                        >
                          <option value="Under ₹10,000">Under ₹10,000 ($120)</option>
                          <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 ($120 - $300)</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 ($300 - $600)</option>
                          <option value="₹50,000+">₹50,000+ ($600+)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Project Details & Requirements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project goals, desired features, any reference websites, and timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-sm shadow-md hover:shadow-glow hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {formSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-center text-[11px] text-slate-400 pt-2">
                      🔒 Your information is confidential and will never be shared with third parties.
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          11. FOOTER
          ========================================================================= */}
      <footer className="bg-[#070d2b] text-[#d7e0ff] pt-16 pb-12 border-t border-[#1a2559]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

            {/* Brand Col */}
            <div className="lg:col-span-4">
              <a href="#home" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
                  W
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tight">Webyotic</div>
                  <div className="text-[9px] font-bold tracking-widest text-blue-300 uppercase">
                    Web Development & Digital Solutions
                  </div>
                </div>
              </a>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
                Webyotic helps businesses turn ideas into reliable digital experiences — from professional websites and e-commerce stores to custom Laravel applications.
              </p>
              <div className="flex items-center space-x-3 text-slate-400">
                <a href="https://facebook.com" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://linkedin.com" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://youtube.com" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://github.com" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Laravel Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">WordPress Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">E-commerce Stores</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SEO & Marketing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Hosting & Maintenance</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-black text-white uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>hello@webyotic.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Ludhiana, Punjab, India</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <div>
              © 2026 Webyotic. All Rights Reserved. | We Build Websites. We Grow Businesses.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#home" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#home" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-purple-600 text-white shadow-xl hover:bg-purple-700 hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* =========================================================================
          MODAL 1: GET A FREE QUOTE / INSTANT ESTIMATOR
          ========================================================================= */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Estimator</span>
              </div>
              <h3 className="text-2xl font-black text-[#101b52]">
                Get a Free Project Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Configure your requirements to calculate an estimated budget.
              </p>
            </div>

            <div className="space-y-4 mb-6 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'website', label: 'Website' },
                    { id: 'laravel', label: 'Laravel App' },
                    { id: 'wordpress', label: 'WordPress' },
                    { id: 'ecommerce', label: 'E-commerce' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setQuoteData({ ...quoteData, type: item.id })}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                        quoteData.type === item.id
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Estimated Pages / Views
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '1-5', label: '1 - 5 Pages' },
                    { id: '5-10', label: '5 - 10 Pages' },
                    { id: '10-20', label: '10 - 20+ Pages' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setQuoteData({ ...quoteData, pages: p.id })}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all ${
                        quoteData.pages === p.id
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Addons
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={quoteData.seo}
                      onChange={(e) => setQuoteData({ ...quoteData, seo: e.target.checked })}
                      className="rounded text-blue-600"
                    />
                    <span className="font-semibold text-slate-700">SEO Optimization</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={quoteData.ecommerce}
                      onChange={(e) => setQuoteData({ ...quoteData, ecommerce: e.target.checked })}
                      className="rounded text-blue-600"
                    />
                    <span className="font-semibold text-slate-700">Payment Gateway</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculated Quote Display */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 flex items-center justify-between mb-6">
              <div>
                <div className="text-[11px] font-bold uppercase text-slate-500">
                  Estimated Investment
                </div>
                <div className="text-2xl font-black text-[#101b52]">
                  {calculateEstimatedQuote()}
                </div>
              </div>
              <span className="text-xs text-blue-600 font-bold bg-white px-3 py-1 rounded-full shadow-xs">
                Estimated Delivery: 5 - 12 Days
              </span>
            </div>

            <button
              onClick={() => {
                setQuoteModalOpen(false);
                setFormData({
                  ...formData,
                  service: quoteData.type.toUpperCase() + ' Development',
                  budget: calculateEstimatedQuote()
                });
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold text-sm shadow-md hover:shadow-glow transition-all"
            >
              Lock In This Estimate & Enquire →
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: SERVICE DETAIL MODAL
          ========================================================================= */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-slate-200">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-12 h-12 rounded-2xl ${selectedServiceModal.bg} flex items-center justify-center mb-4`}>
              {selectedServiceModal.icon}
            </div>

            <h3 className="text-2xl font-black text-[#101b52] mb-2">
              {selectedServiceModal.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedServiceModal.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                {selectedServiceModal.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedServiceModal.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const serviceTitle = selectedServiceModal.title;
                setSelectedServiceModal(null);
                setFormData({
                  ...formData,
                  service: serviceTitle
                });
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 rounded-full bg-[#101b52] text-white font-extrabold text-sm hover:bg-blue-600 transition-colors"
            >
              Get Free Consultation for {selectedServiceModal.title} →
            </button>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: PORTFOLIO PROJECT CASE STUDY MODAL
          ========================================================================= */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-7 sm:p-8 shadow-2xl border border-slate-200">
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">
              {selectedProjectModal.category}
            </span>
            <h3 className="text-2xl font-black text-[#101b52] mb-1">
              {selectedProjectModal.title}
            </h3>
            <div className="text-xs text-slate-500 mb-4 font-semibold">
              Client: {selectedProjectModal.client}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedProjectModal.description}
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6">
              <div className="text-xs font-bold uppercase text-emerald-800 mb-1">
                Project Impact & Results
              </div>
              <div className="text-sm font-black text-emerald-900">
                {selectedProjectModal.results}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProjectModal.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const projTitle = selectedProjectModal.title;
                  setSelectedProjectModal(null);
                  setFormData({
                    ...formData,
                    service: 'Similar to ' + projTitle
                  });
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold text-sm shadow-md"
              >
                Build a Similar Project →
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
