import React, { useState, useEffect, useRef } from 'react';
import {
  Camera,
  Video,
  Compass,
  Sliders,
  ArrowUpRight,
  ArrowDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Menu,
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Award,
  Eye,
  Film,
  Clock,
  Image as ImageIcon,
  Calendar,
  Send,
  Info,
  Quote
} from 'lucide-react';

/**
 * ============================================================================
 * ZICO STUDIOS — CENTRALIZED STUDIO CONFIGURATION (ADMIN EDITABLE)
 * ============================================================================
 * Administrators can easily replace sample photography URLs, update UGX
 * package prices, adjust deliverables, and edit testimonial placeholders here.
 */
const STUDIO_CONFIG = {
  brand: {
    name: 'ZICO STUDIOS',
    creativeDirector: 'M. CORINERIOUS',
    role: 'Creative Director',
    location: 'Kampala, Uganda',
    slogan: "WE DON'T JUST CAPTURE IMAGES. WE PRESERVE STORIES.",
    heroHeadline: 'CAPTURING MOMENTS. CREATING LEGACIES.',
    heroSubtext:
      'Where creativity meets precision. We transform special moments into timeless visual stories through photography, cinematography and aerial perspectives.',
    whatsappDisplay: '+256 747 364 851',
    whatsappNumber: '256747364851',
    whatsappLink: 'https://wa.me/256747364851',
    telephoneDisplay: '+256 758 453 527',
    telephoneLink: 'tel:+256758453527',
    email: 'zicostudios256@gmail.com',
    emailLink: 'mailto:zicostudios256@gmail.com',
    instagramHandle: '@zico_studios',
    instagramLink: 'https://instagram.com/zico_studios',
  },

  // Sample editorial assets — Replace URLs with official Zico Studios imagery
  media: {
    heroBackground:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85',
    aboutStudio:
      'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=85',
    creativeDirectorPortrait:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85',
  },

  pillars: [
    {
      title: 'Creativity',
      description: 'Distinctive visual direction that elevates every frame into fine art.',
    },
    {
      title: 'Professionalism',
      description: 'Seamless execution, punctuality, and white-glove client hospitality.',
    },
    {
      title: 'Attention to Detail',
      description: 'Meticulous lighting, composition, and calibrated post-production.',
    },
    {
      title: 'Storytelling Through Imagery',
      description: 'Authentic emotion preserved with cinematic depth and narrative flow.',
    },
    {
      title: 'Quality Visual Production',
      description: 'Cinema-grade optics, calibrated aerial systems, and archival finishing.',
    },
  ],

  services: [
    {
      id: 'photography',
      number: '01',
      title: 'PROFESSIONAL PHOTOGRAPHY',
      icon: Camera,
      tagline: 'Timeless editorial stillness crafted with master lighting.',
      items: [
        'Wedding photography',
        'Portrait photography',
        'Fashion photography',
        'Corporate photography',
        'Event photography',
        'Graduation photography',
        'Product photography',
      ],
    },
    {
      id: 'drone',
      number: '02',
      title: 'DRONE PHOTOGRAPHY & AERIAL VIDEOGRAPHY',
      icon: Compass,
      tagline: 'Elevated architectural and landscape perspectives from above.',
      items: [
        'Aerial photography',
        'Drone cinematography',
        'Real estate aerial coverage',
        'Landscape and tourism photography',
        'Event aerial coverage, subject to applicable permissions',
      ],
    },
    {
      id: 'videography',
      number: '03',
      title: 'PROFESSIONAL VIDEOGRAPHY',
      icon: Video,
      tagline: 'Motion pictures engineered with dramatic rhythm and sound.',
      items: [
        'Wedding films',
        'Event coverage',
        'Commercial advertisements',
        'Corporate films',
        'Music videos',
        'Promotional videos',
        'Documentary filmmaking',
      ],
    },
    {
      id: 'editing',
      number: '04',
      title: 'PHOTO & VIDEO EDITING',
      icon: Sliders,
      tagline: 'Bespoke color science and precision post-production finishing.',
      items: [
        'Professional colour grading',
        'Photo retouching',
        'Cinematic video editing',
        'Creative visual effects',
      ],
    },
  ],

  // Sample Portfolio Placeholders — Easily swap src, title, and location
  portfolio: [
    {
      id: 'p1',
      title: 'Eternal Vows — Editorial Series',
      category: 'Weddings',
      aspect: 'tall',
      location: 'Kampala, Uganda (Sample Visual)',
      camera: 'Full-Frame Cinema Prime • 50mm f/1.2',
      src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1100&q=85',
    },
    {
      id: 'p2',
      title: 'Noir Silhouette Study',
      category: 'Portraits',
      aspect: 'standard',
      location: 'Studio Portrait Session (Sample Visual)',
      camera: 'Medium Format • Studio Strobe',
      src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1100&q=85',
    },
    {
      id: 'p3',
      title: 'Gilded Horizon — High Fashion',
      category: 'Fashion',
      aspect: 'tall',
      location: 'Editorial Lookbook (Sample Visual)',
      camera: '85mm Portrait Prime • Natural Light',
      src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1100&q=85',
    },
    {
      id: 'p4',
      title: 'Pearl Ridge Aerial Panorama',
      category: 'Drone & Aerial',
      aspect: 'wide',
      location: 'Aerial Perspective (Sample Visual)',
      camera: '4K Cinema Drone • Hasselblad Optics',
      src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1300&q=85',
    },
    {
      id: 'p5',
      title: 'Gala Evening & Keynote',
      category: 'Events',
      aspect: 'standard',
      location: 'Luxury Gala Coverage (Sample Visual)',
      camera: '35mm Documentary Prime',
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=85',
    },
    {
      id: 'p6',
      title: 'Horology & Luxury Craft',
      category: 'Commercial',
      aspect: 'standard',
      location: 'Commercial Studio Campaign (Sample Visual)',
      camera: '90mm Macro • Sculpted Key Light',
      src: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1100&q=85',
    },
    {
      id: 'p7',
      title: 'Anamorphic Night Reel',
      category: 'Cinematography',
      aspect: 'wide',
      location: 'Cinema Production Frame (Sample Visual)',
      camera: 'Cinema Line • 2x Anamorphic',
      src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1300&q=85',
    },
    {
      id: 'p8',
      title: 'Sovereign Bridal Couture',
      category: 'Weddings',
      aspect: 'tall',
      location: 'Private Estate Ceremony (Sample Visual)',
      camera: '50mm Cinema Prime',
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=85',
    },
    {
      id: 'p9',
      title: 'Highland Mist & Topography',
      category: 'Drone & Aerial',
      aspect: 'standard',
      location: 'Tourism Aerial Series (Sample Visual)',
      camera: 'Aerial Cinema Gimbal',
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1100&q=85',
    },
  ],

  // Packages with strictly non-invented, clearly marked editable UGX price placeholders
  packages: {
    photography: [
      {
        id: 'photo-essential',
        name: 'ESSENTIAL PACKAGE',
        subtitle: 'For individuals and small occasions.',
        price: 'UGX [EDITABLE PRICE]',
        featured: false,
        specs: [
          { label: 'Coverage Duration', value: '[Editable: e.g., 2 – 3 Hours]' },
          { label: 'Edited Photographs', value: '[Editable: e.g., 30 – 50 High-Res Images]' },
          { label: 'Prints & Albums', value: '[Editable: Optional Fine-Art Prints]' },
        ],
        features: [
          'Creative consultation & lighting setup',
          'Signature Zico Studios colour grading',
          'Private high-resolution online gallery',
          'Optional archival print add-ons available',
        ],
      },
      {
        id: 'photo-premium',
        name: 'PREMIUM PACKAGE',
        subtitle: 'For clients who want a more comprehensive photography experience.',
        price: 'UGX [EDITABLE PRICE]',
        featured: true,
        specs: [
          { label: 'Coverage Duration', value: '[Editable: e.g., Half-Day / 5 – 6 Hours]' },
          { label: 'Edited Photographs', value: '[Editable: e.g., 100 – 150 High-Res Images]' },
          { label: 'Prints & Albums', value: '[Editable: Included Mounted Prints / Album]' },
        ],
        features: [
          'Multi-location or multi-outfit creative direction',
          'Full editorial retouching & monochrome set',
          'Priority 72-hour preview highlights',
          'Custom luxury print presentation box option',
        ],
      },
      {
        id: 'photo-luxury',
        name: 'LUXURY PACKAGE',
        subtitle: 'For exclusive events and clients seeking a complete premium experience.',
        price: 'UGX [EDITABLE PRICE]',
        featured: false,
        specs: [
          { label: 'Coverage Duration', value: '[Editable: Full-Day Executive Coverage]' },
          { label: 'Edited Photographs', value: '[Editable: Complete Curated Collection]' },
          { label: 'Prints & Albums', value: '[Editable: Bespoke Heirloom Linen Album]' },
        ],
        features: [
          'Lead direction by M. Corinerious + Second Shooter',
          'Same-day select social media editorial stills',
          'Bespoke handcrafted coffee-table photo book',
          'Dedicated archival USB & lifetime cloud vault',
        ],
      },
    ],

    drone: [
      {
        id: 'drone-basic',
        name: 'BASIC AERIAL PHOTOGRAPHY',
        subtitle: 'Crisp high-altitude still perspectives for properties and landscapes.',
        price: 'UGX [EDITABLE PRICE]',
        featured: false,
        specs: [
          { label: 'Flight Duration', value: '[Editable: e.g., 1 Battery / 30–45 Mins]' },
          { label: 'Coverage Scope', value: '[Editable: Single Location / Exterior]' },
          { label: 'Deliverables', value: '[Editable: 15–20 Graded Aerial Stills]' },
        ],
        features: [
          '4K RAW aerial still photography',
          'Perspective & horizon correction',
          'Subject to airspace & local permissions',
          'Digital high-resolution delivery',
        ],
      },
      {
        id: 'drone-pro',
        name: 'PROFESSIONAL DRONE COVERAGE',
        subtitle: 'Dynamic aerial stills and stabilized 4K motion sequences.',
        price: 'UGX [EDITABLE PRICE]',
        featured: true,
        specs: [
          { label: 'Flight Duration', value: '[Editable: e.g., Up to 2 Hours On-Site]' },
          { label: 'Coverage Scope', value: '[Editable: Real Estate, Tourism or Event]' },
          { label: 'Deliverables', value: '[Editable: 30 Stills + 60–90s Aerial Reel]' },
        ],
        features: [
          'Smooth cinematic orbit, reveal & tracking shots',
          'Custom LUT color grading & sound design',
          'Pre-flight safety & airspace clearance check',
          'Commercial licensing options available',
        ],
      },
      {
        id: 'drone-premium',
        name: 'PREMIUM AERIAL CINEMATOGRAPHY',
        subtitle: 'Full-scale cinema drone production for films, commercials, and landmark events.',
        price: 'UGX [EDITABLE PRICE]',
        featured: false,
        specs: [
          { label: 'Flight Duration', value: '[Editable: Half-Day / Full-Day Aerial Unit]' },
          { label: 'Coverage Scope', value: '[Editable: Multi-Location Cinema Production]' },
          { label: 'Deliverables', value: '[Editable: Log/RAW Footage + Master Edit]' },
        ],
        features: [
          'Dedicated pilot & camera operator workflow',
          '10-bit D-Log cinema color pipeline',
          'Seamless integration with ground cinema units',
          'Subject to applicable aviation permissions',
        ],
      },
    ],

    videography: [
      {
        id: 'video-essential',
        name: 'ESSENTIAL VIDEO PACKAGE',
        subtitle: 'Refined highlight filmmaking for intimate milestones and brand promos.',
        price: 'UGX [EDITABLE PRICE]',
        featured: false,
        specs: [
          { label: 'Coverage Duration', value: '[Editable: e.g., 3 – 4 Hours]' },
          { label: 'Final Video Length', value: '[Editable: 2 – 4 Minute Highlight Film]' },
          { label: 'Editing & Delivery', value: '[Editable: 4K Digital Master + Social Cut]' },
        ],
        features: [
          'Single cinema camera & gimbal stabilization',
          'Licensed music bed & clean audio capture',
          'Signature Zico Studios cinematic color grade',
          'Digital download link in 4K Ultra HD',
        ],
      },
      {
        id: 'video-premium',
        name: 'PREMIUM CINEMATIC PACKAGE',
        subtitle: 'Multi-camera storytelling crafted with narrative depth and crisp audio.',
        price: 'UGX [EDITABLE PRICE]',
        featured: true,
        specs: [
          { label: 'Coverage Duration', value: '[Editable: e.g., 6 – 8 Hours Coverage]' },
          { label: 'Final Video Length', value: '[Editable: 5 – 8 Min Feature + 60s Teaser]' },
          { label: 'Editing & Delivery', value: '[Editable: Multi-Cam Grade + Custom Audio]' },
        ],
        features: [
          'Dual cinema cameras + wireless lavalier audio',
          'Narrative pacing, voiceovers & sound design',
          '1-minute vertical teaser for Instagram/WhatsApp',
          'Delivered via private screening portal & USB',
        ],
      },
      {
        id: 'video-luxury',
        name: 'LUXURY FILM PRODUCTION PACKAGE',
        subtitle: 'Feature-grade cinema production for weddings, commercials, and documentaries.',
        price: 'UGX [EDITABLE PRICE]',
        featured: false,
        specs: [
          { label: 'Coverage Duration', value: '[Editable: Full-Day / Multi-Day Production]' },
          { label: 'Final Video Length', value: '[Editable: 12–20 Min Documentary + Trailer]' },
          { label: 'Editing & Delivery', value: '[Editable: Cinema Master + Raw Archive]' },
        ],
        features: [
          'Directed by M. Corinerious with full cinema crew',
          'Cinema lighting rigs, slider & aerial integration',
          'Bespoke theatrical color grading & master mix',
          'Luxury presentation drive & priority turnaround',
        ],
      },
    ],
  },

  // Strictly editable placeholders — no invented customer quotes
  testimonials: [
    {
      id: 't1',
      quote:
        '[Editable Client Testimonial Placeholder — Insert verified client feedback highlighting Zico Studios’ artistry, professionalism, and attention to detail.]',
      clientName: '[Client Name Placeholder]',
      projectType: 'Wedding Photography & Cinema • Kampala',
    },
    {
      id: 't2',
      quote:
        '[Editable Client Testimonial Placeholder — Insert verified feedback from a corporate, fashion, or commercial production client.]',
      clientName: '[Brand / Client Name Placeholder]',
      projectType: 'Commercial & Aerial Production • Uganda',
    },
    {
      id: 't3',
      quote:
        '[Editable Client Testimonial Placeholder — Insert verified feedback describing the emotional storytelling and visual excellence of the final gallery.]',
      clientName: '[Client Name Placeholder]',
      projectType: 'Editorial Portrait Session • Kampala',
    },
  ],
};

/**
 * Custom Hook for Subtle IntersectionObserver Scroll Reveals
 */
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  // Preloader state
  const [loading, setLoading] = useState(true);
  const [preloaderFade, setPreloaderFade] = useState(false);

  // Navigation state
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Portfolio state
  const [activeCategory, setActiveCategory] = useState('All');
  const [monochromeMode, setMonochromeMode] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Packages state
  const [activePackageTab, setActivePackageTab] = useState('photography');

  // Booking form state
  const [bookingForm, setBookingForm] = useState({
    clientName: '',
    phone: '',
    email: '',
    serviceType: 'Professional Photography',
    eventDate: '',
    eventLocation: '',
    preferredPackage: 'PREMIUM PACKAGE (Photography)',
    additionalInfo: '',
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingError, setBookingError] = useState('');

  // Quick Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [contactSent, setContactSent] = useState(false);

  // Active Testimonial index
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useScrollReveal();

  // Brand Preloader Sequence
  useEffect(() => {
    const fadeTimer = setTimeout(() => setPreloaderFade(true), 1400);
    const removeTimer = setTimeout(() => setLoading(false), 2050);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Sticky Header Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredPortfolio.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex(
          (prev) => (prev - 1 + filteredPortfolio.length) % filteredPortfolio.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activeCategory]);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Portfolio filtering
  const categories = [
    'All',
    'Weddings',
    'Portraits',
    'Fashion',
    'Events',
    'Commercial',
    'Drone & Aerial',
    'Cinematography',
  ];

  const filteredPortfolio =
    activeCategory === 'All'
      ? STUDIO_CONFIG.portfolio
      : STUDIO_CONFIG.portfolio.filter((item) => item.category === activeCategory);

  // Select Package and scroll to Booking
  const handleSelectPackage = (pkgName, categoryLabel) => {
    const serviceMap = {
      photography: 'Professional Photography',
      drone: 'Drone Photography & Aerial Videography',
      videography: 'Professional Videography',
    };
    setBookingForm((prev) => ({
      ...prev,
      serviceType: serviceMap[categoryLabel] || prev.serviceType,
      preferredPackage: `${pkgName} (${categoryLabel.charAt(0).toUpperCase() + categoryLabel.slice(1)})`,
    }));
    scrollToSection('booking');
  };

  // Build prefilled WhatsApp URL from booking form
  const buildWhatsAppBookingUrl = () => {
    const {
      clientName,
      phone,
      email,
      serviceType,
      eventDate,
      eventLocation,
      preferredPackage,
      additionalInfo,
    } = bookingForm;

    const lines = [
      `Hello ZICO STUDIOS, I would like to book a session.`,
      ``,
      `*Client Name:* ${clientName || 'Not specified'}`,
      `*Phone:* ${phone || 'Not specified'}`,
      `*Email:* ${email || 'Not specified'}`,
      `*Service:* ${serviceType}`,
      `*Preferred Package:* ${preferredPackage}`,
      `*Event Date:* ${eventDate || 'To be confirmed'}`,
      `*Location:* ${eventLocation || 'Kampala, Uganda'}`,
      additionalInfo ? `*Notes:* ${additionalInfo}` : '',
    ].filter(Boolean);

    const encoded = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${STUDIO_CONFIG.brand.whatsappNumber}?text=${encoded}`;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.clientName.trim() || !bookingForm.phone.trim()) {
      setBookingError('Please provide your full name and phone number so we can reach you.');
      return;
    }
    setBookingError('');
    setBookingSubmitted(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.message.trim()) return;
    setContactSent(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F3EE] selection:bg-[#C8A97E] selection:text-[#080808] overflow-x-hidden">
      {/* Embedded Editorial Fonts & Custom Luxury Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');

        :root {
          --obsidian: #080808;
          --charcoal: #121212;
          --offwhite: #F5F3EE;
          --champagne: #C8A97E;
          --gold: #D4AF37;
          --muted: #8E8A82;
        }

        html {
          scroll-behavior: smooth;
          background-color: #080808;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .font-serif-luxury {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .font-sans-luxury {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Preloader Hairline & Letter Animation */
        @keyframes hairlineExpand {
          0% { transform: scaleX(0); opacity: 0; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(1); opacity: 0.85; }
        }

        @keyframes titleReveal {
          0% { opacity: 0; letter-spacing: 0.55em; transform: translateY(10px); }
          100% { opacity: 1; letter-spacing: 0.35em; transform: translateY(0); }
        }

        .animate-hairline {
          animation: hairlineExpand 1.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-brand-title {
          animation: titleReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* Subtle Hero Slow Ken Burns */
        @keyframes slowZoom {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.1); }
        }

        .animate-slow-zoom {
          animation: slowZoom 22s ease-in-out infinite alternate;
        }

        /* Scroll Reveal Utility */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Custom subtle scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #080808;
        }
        ::-webkit-scrollbar-thumb {
          background: #2A2825;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #C8A97E;
        }
      `}</style>

      {/* =====================================================================
          CUSTOM BRAND PRELOADER ("ZICO STUDIOS")
         ===================================================================== */}
      {loading && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] transition-opacity duration-700 ${
            preloaderFade ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Loading Zico Studios"
        >
          <div className="text-center px-6">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#C8A97E] mb-4">
              KAMPALA • UGANDA
            </p>
            <h1 className="font-serif-luxury text-3xl sm:text-5xl text-[#F5F3EE] font-medium animate-brand-title">
              ZICO STUDIOS
            </h1>
            <div className="w-48 sm:w-64 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent mx-auto mt-6 animate-hairline" />
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8E8A82] mt-5">
              Photography • Drone • Cinematography
            </p>
          </div>
        </div>
      )}

      {/* =====================================================================
          STICKY TRANSPARENT-TO-OBSIDIAN NAVIGATION BAR
         ===================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/92 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-gradient-to-b from-[#080808]/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-left group focus:outline-none"
          >
            <span className="block font-serif-luxury text-xl sm:text-2xl tracking-[0.25em] text-[#F5F3EE] group-hover:text-[#C8A97E] transition-colors">
              ZICO STUDIOS
            </span>
            <span className="block text-[9px] uppercase tracking-[0.35em] text-[#C8A97E]/85 mt-0.5">
              Kampala • Visual Production
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Packages', id: 'packages' },
              { label: 'Contact', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs uppercase tracking-[0.22em] text-[#F5F3EE]/80 hover:text-[#C8A97E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A97E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('booking')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#080808] text-xs uppercase tracking-[0.2em] transition-all duration-300"
            >
              <span>Book a Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-[#F5F3EE] hover:text-[#C8A97E] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Width Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0B0B] border-b border-white/10 px-6 pt-4 pb-8 space-y-4">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About Zico Studios', id: 'about' },
              { label: 'Our Services', id: 'services' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Packages & Investment', id: 'packages' },
              { label: 'Book a Session', id: 'booking' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2.5 text-sm uppercase tracking-[0.22em] text-[#F5F3EE]/90 hover:text-[#C8A97E] border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 flex items-center justify-between text-xs text-[#8E8A82]">
              <span>Kampala, Uganda</span>
              <a
                href={STUDIO_CONFIG.brand.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A97E] underline"
              >
                WhatsApp Direct
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          1. FULL-SCREEN CINEMATIC HERO SECTION
         ===================================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Cinematic Image with Slow Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src={STUDIO_CONFIG.media.heroBackground}
            alt="Zico Studios luxury editorial wedding and cinema visual"
            className="w-full h-full object-cover object-center animate-slow-zoom opacity-55"
          />
          {/* Deep Obsidian Vignette & Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-[#080808]/55 to-[#080808]" />
          <div className="absolute inset-0 bg-radial from-transparent to-[#080808]/85" />
        </div>

        {/* Hero Foreground Editorial Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-28 pb-20 text-center">
          {/* Slogan / Location Kicker */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C8A97E]/35 bg-[#080808]/60 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#C8A97E]">
              {STUDIO_CONFIG.brand.slogan}
            </span>
          </div>

          {/* Main Display Heading */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal leading-[1.06] tracking-[0.04em] text-[#F5F3EE] max-w-5xl mx-auto">
            CAPTURING MOMENTS.
            <span className="block italic text-[#C8A97E] mt-1">CREATING LEGACIES.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-7 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#F5F3EE]/80">
            {STUDIO_CONFIG.brand.heroSubtext}
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto px-8 py-4 bg-[#C8A97E] text-[#080808] hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-[0.24em] transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('booking')}
              className="w-full sm:w-auto px-8 py-4 border border-[#F5F3EE]/35 bg-[#080808]/45 backdrop-blur-sm text-[#F5F3EE] hover:border-[#C8A97E] hover:text-[#C8A97E] text-xs font-medium uppercase tracking-[0.24em] transition-all duration-300"
            >
              Book a Session
            </button>
          </div>

          {/* Sample Visual Transparency Note */}
          <p className="mt-10 text-[10px] uppercase tracking-[0.24em] text-[#8E8A82]">
            Kampala, Uganda • Photography • Aerial Drone • Cinema Production
          </p>
        </div>

        {/* Subtle Animated Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#8E8A82] hover:text-[#C8A97E] transition-colors group"
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">Scroll</span>
          <div className="w-[1px] h-10 bg-white/15 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#C8A97E] animate-bounce" />
          </div>
        </button>
      </section>

      {/* =====================================================================
          2. ABOUT ZICO STUDIOS & CREATIVE DIRECTOR M. CORINERIOUS
         ===================================================================== */}
      <section id="about" className="py-24 lg:py-36 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Studio Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal-on-scroll">
            {/* Left Editorial Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden border border-white/10 bg-[#121212]">
                <img
                  src={STUDIO_CONFIG.media.aboutStudio}
                  alt="Zico Studios cinema camera and lens craftsmanship"
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-[#080808]/85 backdrop-blur-sm border border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8E8A82]">
                    Sample Studio Visual • Replaceable via Config
                  </p>
                </div>
              </div>
              {/* Champagne-Gold Offset Frame Accent */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 w-44 h-44 border border-[#C8A97E]/30 -z-10" />
            </div>

            {/* Right Studio Philosophy */}
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] mb-4">
                About Zico Studios
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-[3.25rem] font-normal leading-[1.12] text-[#F5F3EE]">
                An International Standard of Visual Storytelling in{' '}
                <span className="italic text-[#C8A97E]">Kampala, Uganda.</span>
              </h2>

              <p className="mt-6 text-[#F5F3EE]/80 font-light leading-relaxed text-base sm:text-lg">
                Zico Studios is a premier creative photography, aerial drone, and visual
                production house rooted in Kampala, Uganda. We partner with discerning
                couples, visionary brands, artists, and institutions to craft imagery that
                commands attention and endures across generations.
              </p>

              <p className="mt-4 text-[#8E8A82] font-light leading-relaxed text-sm sm:text-base">
                Guided by our core philosophy—
                <span className="text-[#F5F3EE] italic">
                  &ldquo;We don&apos;t just capture images. We preserve stories.&rdquo;
                </span>
                —every commission is approached with editorial discipline, calibrated color
                science, and refined artistic restraint.
              </p>

              {/* 5 Brand Pillars */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {STUDIO_CONFIG.pillars.map((pillar, idx) => (
                  <div key={pillar.title} className="flex items-start gap-3.5">
                    <span className="font-serif-luxury text-lg text-[#C8A97E] mt-0.5">
                      0{idx + 1}.
                    </span>
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-[#F5F3EE]">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#8E8A82] mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Creative Director Spotlight: M. CORINERIOUS */}
          <div className="mt-24 lg:mt-32 bg-[#121212] border border-white/10 p-8 sm:p-12 lg:p-16 reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2.5 text-[#C8A97E] text-xs uppercase tracking-[0.28em] mb-4">
                  <Award className="w-4 h-4" />
                  <span>Leadership & Artistic Vision</span>
                </div>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EE] font-normal">
                  M. CORINERIOUS
                </h3>
                <p className="text-xs uppercase tracking-[0.28em] text-[#C8A97E] mt-2">
                  Creative Director — Zico Studios
                </p>

                <blockquote className="mt-6 pl-5 border-l border-[#C8A97E] font-serif-luxury italic text-xl sm:text-2xl text-[#F5F3EE]/90 leading-relaxed">
                  &ldquo;True luxury in photography is never loud. It lives in honest emotion,
                  deliberate light, and frames that feel just as powerful fifty years from
                  today.&rdquo;
                </blockquote>

                <p className="mt-6 text-sm sm:text-base text-[#8E8A82] font-light leading-relaxed">
                  As Creative Director of Zico Studios, M. Corinerious leads the artistic
                  direction, cinematography, and visual curation across every production.
                  Combining technical mastery in lighting, aerial framing, and post-production
                  grading, he ensures each client receives bespoke visual craftsmanship.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <button
                    onClick={() => scrollToSection('booking')}
                    className="px-6 py-3 border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#080808] text-xs uppercase tracking-[0.22em] transition-all"
                  >
                    Consult With Our Team
                  </button>
                  <a
                    href={STUDIO_CONFIG.brand.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 hover:text-[#C8A97E] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#C8A97E]" />
                    <span>{STUDIO_CONFIG.brand.instagramHandle}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative overflow-hidden border border-[#C8A97E]/25 bg-[#080808]">
                  <img
                    src={STUDIO_CONFIG.media.creativeDirectorPortrait}
                    alt="M. Corinerious — Creative Director at Zico Studios"
                    className="w-full aspect-[4/5] object-cover grayscale contrast-110"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent p-5">
                    <p className="font-serif-luxury text-lg text-[#F5F3EE]">M. Corinerious</p>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#C8A97E]">
                      Creative Director • Sample Portrait Placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. OUR SERVICES (4 LUXURY DISCIPLINE CARDS)
         ===================================================================== */}
      <section
        id="services"
        className="py-24 lg:py-36 px-6 lg:px-12 bg-[#0B0B0B] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal-on-scroll">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] mb-3">
                Curated Disciplines
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5F3EE]">
                OUR SERVICES
              </h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-md text-sm text-[#8E8A82] font-light leading-relaxed">
              Comprehensive visual production tailored for weddings, luxury brands,
              corporate enterprises, and editorial commissions across Uganda.
            </p>
          </div>

          {/* 4 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STUDIO_CONFIG.services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-[#121212] border border-white/10 hover:border-[#C8A97E]/50 p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between reveal-on-scroll"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-serif-luxury text-2xl text-[#C8A97E]/80">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-[#080808] transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F3EE] tracking-wide">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#8E8A82] font-light">
                      {service.tagline}
                    </p>

                    <div className="w-12 h-[1px] bg-[#C8A97E]/40 my-6 group-hover:w-24 transition-all duration-500" />

                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-[#F5F3EE]/85 font-light"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-9 pt-6 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setBookingForm((prev) => ({
                          ...prev,
                          serviceType: service.title,
                        }));
                        scrollToSection('booking');
                      }}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C8A97E] hover:text-[#F5F3EE] transition-colors"
                    >
                      <span>Inquire About Service</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. OUR PORTFOLIO (FILTERABLE GALLERY + BLACK & WHITE MODE + LIGHTBOX)
         ===================================================================== */}
      <section id="portfolio" className="py-24 lg:py-36 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Header & Monochrome Toggle */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 reveal-on-scroll">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] mb-3">
                Selected Visual Archive
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5F3EE]">
                OUR PORTFOLIO
              </h2>
            </div>

            {/* Signature Black & White Toggle */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setMonochromeMode(!monochromeMode)}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 border text-xs uppercase tracking-[0.2em] transition-all ${
                  monochromeMode
                    ? 'bg-[#F5F3EE] text-[#080808] border-[#F5F3EE]'
                    : 'bg-[#121212] text-[#F5F3EE] border-white/15 hover:border-[#C8A97E]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>
                  {monochromeMode ? 'Signature B&W Mode: ON' : 'Black & White Exhibition Mode'}
                </span>
              </button>
            </div>
          </div>

          {/* Transparent Sample Placeholder Banner for Admin Clarity */}
          <div className="mb-10 px-5 py-3.5 bg-[#121212] border border-[#C8A97E]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8E8A82]">
            <div className="flex items-center gap-2.5">
              <Info className="w-4 h-4 text-[#C8A97E] shrink-0" />
              <span>
                <strong className="text-[#F5F3EE] font-medium">Portfolio Exhibition Note:</strong>{' '}
                Sample editorial photographs are displayed below as placeholders and can be
                replaced directly with official Zico Studios imagery in{' '}
                <code className="text-[#C8A97E]">STUDIO_CONFIG.portfolio</code>.
              </span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-all border ${
                  activeCategory === category
                    ? 'bg-[#C8A97E] text-[#080808] border-[#C8A97E] font-semibold'
                    : 'bg-transparent text-[#F5F3EE]/75 border-white/10 hover:border-[#C8A97E]/50 hover:text-[#F5F3EE]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Responsive Editorial Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPortfolio.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative break-inside-avoid overflow-hidden bg-[#121212] border border-white/10 cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 ${
                    monochromeMode
                      ? 'grayscale contrast-125'
                      : 'grayscale-[25%] group-hover:grayscale-0'
                  }`}
                />

                {/* Hover Luxury Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <span className="w-10 h-10 bg-[#080808]/80 border border-[#C8A97E]/40 flex items-center justify-center text-[#C8A97E]">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E]">
                      {item.category}
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-[#F5F3EE] mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8E8A82] mt-1">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && filteredPortfolio[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[90] bg-[#080808]/96 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-10 p-3 border border-white/15 text-[#F5F3EE] hover:text-[#C8A97E] hover:border-[#C8A97E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (prev) => (prev - 1 + filteredPortfolio.length) % filteredPortfolio.length
              );
            }}
            aria-label="Previous Photograph"
            className="absolute left-4 sm:left-8 z-10 p-3 bg-[#080808]/80 border border-white/15 text-[#F5F3EE] hover:text-[#C8A97E] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl max-h-[88vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPortfolio[lightboxIndex].src}
              alt={filteredPortfolio[lightboxIndex].title}
              className={`max-h-[72vh] w-auto object-contain border border-white/15 ${
                monochromeMode ? 'grayscale contrast-125' : ''
              }`}
            />
            <div className="mt-5 text-center">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#C8A97E]">
                {filteredPortfolio[lightboxIndex].category} •{' '}
                {filteredPortfolio[lightboxIndex].camera}
              </p>
              <h4 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F3EE] mt-1">
                {filteredPortfolio[lightboxIndex].title}
              </h4>
              <p className="text-xs text-[#8E8A82] mt-1">
                {filteredPortfolio[lightboxIndex].location} ({lightboxIndex + 1} of{' '}
                {filteredPortfolio.length})
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredPortfolio.length);
            }}
            aria-label="Next Photograph"
            className="absolute right-4 sm:right-8 z-10 p-3 bg-[#080808]/80 border border-white/15 text-[#F5F3EE] hover:text-[#C8A97E] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* =====================================================================
          5. PACKAGES & INVESTMENT (PHOTOGRAPHY, DRONE, VIDEOGRAPHY)
         ===================================================================== */}
      <section
        id="packages"
        className="py-24 lg:py-36 px-6 lg:px-12 bg-[#0B0B0B] border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] mb-3">
              Bespoke Commissions
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F5F3EE]">
              PACKAGES & INVESTMENT
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#8E8A82] font-light">
              Select a visual discipline below to explore structured production tiers. All
              UGX pricing fields and deliverables are cleanly structured for studio customization.
            </p>
          </div>

          {/* Discipline Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {[
              { id: 'photography', label: 'Photography Packages', icon: Camera },
              { id: 'drone', label: 'Drone Packages', icon: Compass },
              { id: 'videography', label: 'Videography Packages', icon: Film },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activePackageTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActivePackageTab(tab.id)}
                  className={`inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-[0.2em] border transition-all ${
                    isActive
                      ? 'bg-[#C8A97E] text-[#080808] border-[#C8A97E] font-semibold'
                      : 'bg-[#121212] text-[#F5F3EE]/80 border-white/10 hover:border-[#C8A97E]/50'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* 3-Column Package Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {STUDIO_CONFIG.packages[activePackageTab].map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-[#121212] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  pkg.featured
                    ? 'border border-[#C8A97E] shadow-[0_0_40px_rgba(200,169,126,0.08)]'
                    : 'border border-white/10 hover:border-[#C8A97E]/40'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-8 px-3.5 py-1 bg-[#C8A97E] text-[#080808] text-[10px] font-semibold uppercase tracking-[0.25em]">
                    Signature Choice
                  </div>
                )}

                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F3EE] tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#8E8A82] font-light min-h-[40px]">
                    {pkg.subtitle}
                  </p>

                  {/* Editable UGX Price Placeholder */}
                  <div className="my-7 py-5 border-y border-white/10">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-[#8E8A82] mb-1">
                      Investment (Editable)
                    </span>
                    <span className="font-serif-luxury text-2xl sm:text-3xl text-[#C8A97E]">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Key Deliverable Specs */}
                  <div className="space-y-3 mb-7 bg-[#080808]/60 p-4 border border-white/5">
                    {pkg.specs.map((spec) => (
                      <div key={spec.label} className="text-xs">
                        <span className="block uppercase tracking-[0.16em] text-[#8E8A82] text-[10px]">
                          {spec.label}
                        </span>
                        <span className="text-[#F5F3EE] font-medium mt-0.5 block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Included Features */}
                  <ul className="space-y-3">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F3EE]/85 font-light"
                      >
                        <Check className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleSelectPackage(pkg.name, activePackageTab)}
                  className={`mt-9 w-full py-4 text-xs uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-2 ${
                    pkg.featured
                      ? 'bg-[#C8A97E] text-[#080808] hover:bg-[#D4AF37] font-semibold'
                      : 'border border-[#C8A97E]/60 text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#080808]'
                  }`}
                >
                  <span>Select Package</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. BOOKING SECTION (FORM + DIRECT PREFILLED WHATSAPP BOOKING)
         ===================================================================== */}
      <section id="booking" className="py-24 lg:py-36 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Booking Guidance */}
            <div className="lg:col-span-5 reveal-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] mb-3">
                Reserve Your Date
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F5F3EE] leading-tight">
                BOOK A <span className="italic text-[#C8A97E]">SESSION</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-[#8E8A82] font-light leading-relaxed">
                Share the details of your upcoming wedding, portrait session, commercial
                production, or aerial project. You can submit your inquiry directly or launch
                an instant prefilled WhatsApp conversation with our Kampala desk.
              </p>

              <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#F5F3EE]">
                      Date & Location Planning
                    </h4>
                    <p className="text-xs text-[#8E8A82] mt-1 leading-relaxed">
                      Available across Kampala and nationwide across Uganda for destination
                      weddings, tourism films, and corporate productions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#F5F3EE]">
                      Direct WhatsApp Concierge
                    </h4>
                    <p className="text-xs text-[#8E8A82] mt-1 leading-relaxed">
                      Prefer immediate messaging? Fill in your details and click{' '}
                      <span className="text-[#C8A97E]">Book via WhatsApp</span> to send your
                      formatted brief straight to {STUDIO_CONFIG.brand.whatsappDisplay}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Booking Form */}
            <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 sm:p-10 lg:p-12 reveal-on-scroll">
              {bookingSubmitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 mx-auto border border-[#C8A97E] flex items-center justify-center text-[#C8A97E]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-3xl text-[#F5F3EE]">
                    Booking Inquiry Received
                  </h3>
                  <p className="text-sm text-[#8E8A82] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#F5F3EE]">{bookingForm.clientName}</span>.
                    Zico Studios has logged your request for{' '}
                    <span className="text-[#C8A97E]">{bookingForm.serviceType}</span>. For
                    immediate priority response, you may also send this brief via WhatsApp.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={buildWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-7 py-3.5 bg-[#C8A97E] text-[#080808] text-xs font-semibold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setBookingSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 border border-white/15 text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 hover:border-[#C8A97E]"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {bookingError && (
                    <div className="p-3.5 bg-red-950/40 border border-red-500/40 text-xs text-red-200">
                      {bookingError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                        Client Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={bookingForm.clientName}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, clientName: e.target.value })
                        }
                        className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+256 7XX XXX XXX"
                        value={bookingForm.phone}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, phone: e.target.value })
                        }
                        className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={bookingForm.email}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, email: e.target.value })
                        }
                        className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                        Type of Service
                      </label>
                      <select
                        value={bookingForm.serviceType}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, serviceType: e.target.value })
                        }
                        className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] focus:outline-none"
                      >
                        <option value="Professional Photography">Professional Photography</option>
                        <option value="Drone Photography & Aerial Videography">
                          Drone Photography & Aerial Videography
                        </option>
                        <option value="Professional Videography">Professional Videography</option>
                        <option value="Photo & Video Editing">Photo & Video Editing</option>
                        <option value="Full Production (Photo + Video + Drone)">
                          Full Production (Photo + Video + Drone)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                        Event / Shoot Date
                      </label>
                      <input
                        type="date"
                        value={bookingForm.eventDate}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, eventDate: e.target.value })
                        }
                        className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                        Event Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Kampala, Entebbe, Jinja..."
                        value={bookingForm.eventLocation}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, eventLocation: e.target.value })
                        }
                        className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                      Preferred Package
                    </label>
                    <select
                      value={bookingForm.preferredPackage}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, preferredPackage: e.target.value })
                      }
                      className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] focus:outline-none"
                    >
                      <optgroup label="Photography Packages">
                        <option value="ESSENTIAL PACKAGE (Photography)">
                          ESSENTIAL PACKAGE (Photography)
                        </option>
                        <option value="PREMIUM PACKAGE (Photography)">
                          PREMIUM PACKAGE (Photography)
                        </option>
                        <option value="LUXURY PACKAGE (Photography)">
                          LUXURY PACKAGE (Photography)
                        </option>
                      </optgroup>
                      <optgroup label="Drone Packages">
                        <option value="BASIC AERIAL PHOTOGRAPHY (Drone)">
                          BASIC AERIAL PHOTOGRAPHY (Drone)
                        </option>
                        <option value="PROFESSIONAL DRONE COVERAGE (Drone)">
                          PROFESSIONAL DRONE COVERAGE (Drone)
                        </option>
                        <option value="PREMIUM AERIAL CINEMATOGRAPHY (Drone)">
                          PREMIUM AERIAL CINEMATOGRAPHY (Drone)
                        </option>
                      </optgroup>
                      <optgroup label="Videography Packages">
                        <option value="ESSENTIAL VIDEO PACKAGE (Videography)">
                          ESSENTIAL VIDEO PACKAGE (Videography)
                        </option>
                        <option value="PREMIUM CINEMATIC PACKAGE (Videography)">
                          PREMIUM CINEMATIC PACKAGE (Videography)
                        </option>
                        <option value="LUXURY FILM PRODUCTION PACKAGE (Videography)">
                          LUXURY FILM PRODUCTION PACKAGE (Videography)
                        </option>
                      </optgroup>
                      <option value="Custom Bespoke Production">
                        Custom Bespoke Production
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                      Additional Information & Creative Vision
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your event schedule, creative mood, deliverables, or special requests..."
                      value={bookingForm.additionalInfo}
                      onChange={(e) =>
                        setBookingForm({ ...bookingForm, additionalInfo: e.target.value })
                      }
                      className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                    />
                  </div>

                  {/* Dual Action Buttons: Standard Form Submit + Prefilled WhatsApp Booking */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 py-4 px-6 bg-[#C8A97E] text-[#080808] hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Request</span>
                    </button>

                    <a
                      href={buildWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 px-6 border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E]/10 text-xs font-medium uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. TESTIMONIALS (EDITABLE CLIENT FEEDBACK PLACEHOLDERS)
         ===================================================================== */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#0B0B0B] border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center reveal-on-scroll">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] mb-3">
            Client Reflections
          </p>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F5F3EE] mb-12">
            WORDS FROM OUR CLIENTS
          </h2>

          <div className="bg-[#121212] border border-white/10 p-8 sm:p-14 relative">
            <Quote className="w-10 h-10 text-[#C8A97E]/30 mx-auto mb-6" />

            <p className="font-serif-luxury italic text-xl sm:text-3xl text-[#F5F3EE]/90 leading-relaxed max-w-3xl mx-auto">
              &ldquo;{STUDIO_CONFIG.testimonials[activeTestimonial].quote}&rdquo;
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C8A97E]">
                {STUDIO_CONFIG.testimonials[activeTestimonial].clientName}
              </p>
              <p className="text-xs text-[#8E8A82] mt-1">
                {STUDIO_CONFIG.testimonials[activeTestimonial].projectType}
              </p>
            </div>

            {/* Testimonial Switcher Dots */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {STUDIO_CONFIG.testimonials.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  className={`h-1.5 transition-all ${
                    activeTestimonial === index ? 'w-10 bg-[#C8A97E]' : 'w-3 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. CONTACT SECTION & KAMPALA STUDIO DESK
         ===================================================================== */}
      <section id="contact" className="py-24 lg:py-36 px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Business Card Details */}
            <div className="lg:col-span-6 reveal-on-scroll">
              <p className="text-xs uppercase tracking-[0.3em] text-[#C8A97E] mb-3">
                Get In Touch
              </p>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F5F3EE]">
                CONTACT ZICO STUDIOS
              </h2>

              <div className="mt-8 p-8 bg-[#121212] border border-[#C8A97E]/30">
                <p className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F3EE]">
                  {STUDIO_CONFIG.brand.creativeDirector}
                </p>
                <p className="text-xs uppercase tracking-[0.26em] text-[#C8A97E] mt-1">
                  {STUDIO_CONFIG.brand.role} • {STUDIO_CONFIG.brand.name}
                </p>

                <div className="w-12 h-[1px] bg-[#C8A97E]/40 my-6" />

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3.5 text-[#F5F3EE]/90">
                    <MapPin className="w-4 h-4 text-[#C8A97E] shrink-0" />
                    <span>{STUDIO_CONFIG.brand.location}</span>
                  </div>

                  <a
                    href={STUDIO_CONFIG.brand.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-[#F5F3EE]/90 hover:text-[#C8A97E] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C8A97E] shrink-0" />
                    <span>WhatsApp: {STUDIO_CONFIG.brand.whatsappDisplay}</span>
                  </a>

                  <a
                    href={STUDIO_CONFIG.brand.telephoneLink}
                    className="flex items-center gap-3.5 text-[#F5F3EE]/90 hover:text-[#C8A97E] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C8A97E] shrink-0" />
                    <span>Telephone: {STUDIO_CONFIG.brand.telephoneDisplay}</span>
                  </a>

                  <a
                    href={STUDIO_CONFIG.brand.emailLink}
                    className="flex items-center gap-3.5 text-[#F5F3EE]/90 hover:text-[#C8A97E] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C8A97E] shrink-0" />
                    <span>Email: {STUDIO_CONFIG.brand.email}</span>
                  </a>

                  <a
                    href={STUDIO_CONFIG.brand.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-[#F5F3EE]/90 hover:text-[#C8A97E] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#C8A97E] shrink-0" />
                    <span>Instagram: {STUDIO_CONFIG.brand.instagramHandle}</span>
                  </a>
                </div>
              </div>

              {/* Kampala Location Visual Card */}
              <div className="mt-6 p-6 bg-[#121212] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8A97E]">
                    Studio Base
                  </span>
                  <p className="font-serif-luxury text-xl text-[#F5F3EE] mt-0.5">
                    Kampala, Central Region, Uganda
                  </p>
                  <p className="text-xs text-[#8E8A82] mt-1">
                    Available for on-location shoots throughout Uganda & East Africa.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Kampala,Uganda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 border border-white/15 hover:border-[#C8A97E] text-xs uppercase tracking-[0.18em] text-[#F5F3EE] hover:text-[#C8A97E] transition-colors shrink-0"
                >
                  Open Map
                </a>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="lg:col-span-6 bg-[#121212] border border-white/10 p-8 sm:p-10 lg:p-12 reveal-on-scroll">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#F5F3EE]">
                Send a Direct Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8A82] mt-2 font-light">
                Have a general question, press request, or custom creative collaboration? Write
                to our studio team directly.
              </p>

              {contactSent ? (
                <div className="mt-8 p-6 bg-[#080808] border border-[#C8A97E]/40 text-center space-y-3">
                  <Check className="w-6 h-6 text-[#C8A97E] mx-auto" />
                  <p className="font-serif-luxury text-2xl text-[#F5F3EE]">Message Sent</p>
                  <p className="text-xs text-[#8E8A82]">
                    Thank you for contacting Zico Studios. Our team in Kampala will respond
                    shortly.
                  </p>
                  <button
                    onClick={() => setContactSent(false)}
                    className="mt-2 text-xs uppercase tracking-[0.2em] text-[#C8A97E] underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#8E8A82] mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="How can Zico Studios assist you?"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      className="w-full bg-[#080808] border border-white/15 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#F5F3EE] placeholder:text-[#8E8A82]/50 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C8A97E] text-[#080808] hover:bg-[#D4AF37] text-xs font-semibold uppercase tracking-[0.22em] transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. LUXURY FOOTER
         ===================================================================== */}
      <footer className="bg-[#050505] border-t border-white/10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.25em] text-[#F5F3EE]">
                ZICO STUDIOS
              </span>
              <p className="text-xs uppercase tracking-[0.24em] text-[#C8A97E] mt-2">
                {STUDIO_CONFIG.brand.slogan}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={STUDIO_CONFIG.brand.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 hover:text-[#C8A97E] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={STUDIO_CONFIG.brand.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 hover:text-[#C8A97E] transition-colors"
              >
                Instagram ({STUDIO_CONFIG.brand.instagramHandle})
              </a>
              <a
                href={STUDIO_CONFIG.brand.emailLink}
                className="text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 hover:text-[#C8A97E] transition-colors"
              >
                Email
              </a>
              <a
                href={STUDIO_CONFIG.brand.telephoneLink}
                className="text-xs uppercase tracking-[0.2em] text-[#F5F3EE]/80 hover:text-[#C8A97E] transition-colors"
              >
                Call Studio
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8A82]">
            <p>
              © {new Date().getFullYear()} ZICO STUDIOS — Creative Director:{' '}
              {STUDIO_CONFIG.brand.creativeDirector}. All rights reserved.
            </p>
            <p>Kampala, Uganda • Photography • Drone • Cinematography</p>
          </div>
        </div>
      </footer>

      {/* =====================================================================
          FLOATING WHATSAPP CONCIERGE BUTTON
         ===================================================================== */}
      <a
        href={STUDIO_CONFIG.brand.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zico Studios on WhatsApp"
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-[#121212] hover:bg-[#C8A97E] text-[#F5F3EE] hover:text-[#080808] border border-[#C8A97E]/60 px-4 py-3.5 shadow-2xl transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 text-[#C8A97E] group-hover:text-[#080808] transition-colors" />
        <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] font-medium">
          WhatsApp Studio
        </span>
      </a>
    </div>
  );
}
