import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Menu, X, Stethoscope, GraduationCap, Info, ArrowRight, ArrowLeft, CirclePlay as PlayCircle, Code as Code2, MessageSquare, Maximize, Play, Pause, } from 'lucide-react';
// BRINGING IN OUR DATA THE ROCK-SOLID WAY!
import { modules } from './moduleData';

// --- CUSTOM HOOKS ---
// The Safari-Only Quarantine Hook
const useIsSafari = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isAppleWebKit = /AppleWebKit/.test(ua);
    const isChrome = /Chrome|CriOS/.test(ua);
    const isFirefox = /FxiOS|Firefox/.test(ua);
    const isEdge = /EdgiOS|Edg/.test(ua);

    // If it is WebKit but NOT Chrome, Firefox, or Edge, it is true Safari
    if (isAppleWebKit && !isChrome && !isFirefox && !isEdge) {
      setIsSafari(true);
    }
  }, []);

  return isSafari;
};

// --- ROBUST VIDEO COMPONENT ---
// Upgraded to provide invisible, pre-emptive lazy loading for ALL devices
const VideoPlayer = ({ src, caption, isSafari }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // We now start EVERY browser with the video unmounted to save massive bandwidth
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // 1. Pre-emptive Lazy Loading Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { 
        // THE SECRET SAUCE: Start loading the video when it is 400 pixels AWAY from entering the screen.
        // This gives the network a head start so it feels perfectly spontaneous when the user scrolls to it!
        rootMargin: '400px 0px', 
        threshold: 0 
      } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []); // Notice we removed isSafari from the dependency array, it applies to everyone now!

  useEffect(() => {
    // 2. Wake Up Listener
    if (!isInView || !videoRef.current) return;

    const videoElement = videoRef.current;

    const attemptPlay = async () => {
      try {
        await videoElement.play();
      } catch (err) {
        console.log(
          'Autoplay prevented (low power mode or interaction needed)',
          err
        );
      }
    };

    attemptPlay();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        attemptPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isInView, src]);

  // Our custom, elegant fullscreen handler
  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  // Custom play/pause handler for the sleek UI
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Use progressive enhancement class based on Safari quarantine
  const containerGlassClass = isSafari
    ? 'bg-white/95'
    : 'bg-white/40 backdrop-blur-md';
  const captionGlassClass = isSafari
    ? 'bg-white/95'
    : 'bg-white/80 backdrop-blur-lg';

  return (
    <div
      ref={containerRef}
      className={`my-5 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-white/50 ${containerGlassClass}`}
    >
      <div 
        className="relative bg-black aspect-video flex items-center justify-center group cursor-pointer"
        onClick={togglePlay}
      >
        {isInView ? (
          <>
            <video
              ref={videoRef}
              src={src}
              className="w-full h-full object-contain"
              muted
              playsInline
              preload="none"
              loop
            />
            {/* The elegant, invisible-until-needed control pill */}
            <div className="absolute bottom-3 right-3 flex items-center bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-md rounded-xl text-white/80 transition-all z-10 shadow-sm opacity-0 group-hover:opacity-100 p-1">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the video from registering a double-click
                  togglePlay();
                }}
                className="p-2 hover:text-white transition-colors"
                aria-label="Play/Pause"
              >
                {videoRef.current?.paused ? <Play size={16} fill="currentColor" /> : <Pause size={16} fill="currentColor" />}
              </button>
              
              <div className="w-[1px] h-4 bg-white/20 mx-1"></div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="p-2 hover:text-white transition-colors"
                aria-label="View Fullscreen"
              >
                <Maximize size={16} />
              </button>
            </div>
            
            {/* A subtle center play button that only appears when paused */}
            {videoRef.current?.paused && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-slate-900/40 backdrop-blur-sm p-4 rounded-full text-white/90">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-500">
            <PlayCircle size={32} className="mb-2 opacity-30" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
              Loading Media
            </span>
          </div>
        )}
      </div>
      {caption && (
        <div
          className={`p-3 text-xs text-center text-slate-600 font-medium border-t border-white/50 ${captionGlassClass}`}
        >
          {caption}
        </div>
      )}
    </div>
  );
};

// --- COMPONENTS ---

const ContentBlock = ({ item, color, isSafari }) => {
  switch (item.type) {
    case 'header':
      return (
        <h4 className={`font-bold text-${color}-800 mt-5 mb-2 text-lg`}>
          {item.text}
        </h4>
      );

    case 'subheader':
      return (
        <h4 className="font-bold text-slate-900 mt-4 mb-1 text-sm uppercase tracking-wide">
          {item.text}
        </h4>
      );

    case 'bold':
      return <p className="font-bold text-slate-800 mt-3">{item.text}</p>;

    case 'label':
      return (
        <p className="text-slate-700 leading-relaxed my-2 text-sm">
          <strong className="text-slate-800">{item.label}</strong> {item.text}
        </p>
      );

    case 'info':
      const infoBgClass = isSafari
        ? `bg-${color}-50`
        : `bg-${color}-50/60 backdrop-blur-md`;
      return (
        <div
          className={`${infoBgClass} border-l-4 border-${color}-400 p-4 my-3 rounded-r-xl shadow-sm text-sm text-slate-700`}
        >
          {item.text}
        </div>
      );

    case 'list':
      return (
        <ul className="list-disc list-outside space-y-1.5 my-3 ml-5 text-slate-700 text-sm">
          {item.items.map((li, idx) => (
            <li key={idx} className="leading-relaxed pl-1">
              {li}
            </li>
          ))}
        </ul>
      );

    case 'sublist':
      return (
        <ul className="list-[circle] list-outside space-y-1.5 my-2 ml-9 text-slate-600 text-sm">
          {item.items.map((li, idx) => (
            <li key={idx} className="leading-relaxed pl-1">
              {li}
            </li>
          ))}
        </ul>
      );

    case 'divider':
      return <hr className="my-8 border-slate-200/60" />;

    case 'video':
      return (
        <VideoPlayer
          src={item.url}
          caption={item.caption}
          isSafari={isSafari}
        />
      );

    case 'image':
      const imageContainerBg = isSafari
        ? 'bg-white/95'
        : 'bg-white/40 backdrop-blur-md';
      const imageCaptionBg = isSafari
        ? 'bg-white/95'
        : 'bg-white/80 backdrop-blur-lg';

      return (
        <div
          className={`my-5 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-white/50 ${imageContainerBg}`}
        >
          <div className="relative bg-white/50 flex items-center justify-center p-4">
            <img
              src={item.url}
              alt={item.caption || 'Medical Reference'}
              loading="lazy" // <-- MAGIC WORD! This natively lazy loads images now.
              className="w-full h-auto object-contain max-h-[60vh] rounded-lg shadow-sm"
            />
          </div>
          {item.caption && (
            <div
              className={`p-3 text-xs text-center text-slate-600 font-medium border-t border-white/50 ${imageCaptionBg}`}
            >
              {item.caption}
            </div>
          )}
        </div>
      );

    default:
      return (
        <p className="text-slate-700 leading-relaxed my-2 text-sm">
          {item.text}
        </p>
      );
  }
};

const SectionCard = ({ section, isSafari }) => {
  const Icon = section.icon || Info;
  const color = section.color || 'emerald';

  const cardBgClass = isSafari ? 'bg-white/95' : 'bg-white/60 backdrop-blur-xl';
  const headerBgClass = isSafari
    ? `bg-${color}-100/90`
    : `bg-${color}-100/40 backdrop-blur-md`;
  const iconContainerClass = isSafari
    ? 'bg-white'
    : 'bg-white/90 backdrop-blur-sm';

  return (
    <div
      className={`${cardBgClass} rounded-xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 overflow-hidden mb-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]`}
    >
      <div
        className={`${headerBgClass} px-4 md:px-6 py-4 md:py-5 border-b border-white/60 flex items-center`}
      >
        <div
          className={`p-2 md:p-2.5 ${iconContainerClass} rounded-lg md:rounded-xl shadow-sm border border-white/50 mr-4 text-${color}-600`}
        >
          <Icon size={22} />
        </div>
        <h3 className="font-bold text-slate-800 text-lg md:text-xl tracking-tight">
          {section.title}
        </h3>
      </div>
      <div className="px-4 md:px-6 pb-6 pt-4">
        {section.content.map((block, idx) => (
          <ContentBlock
            key={idx}
            item={block}
            color={color}
            isSafari={isSafari}
          />
        ))}
      </div>
    </div>
  );
};

// --- SIDEBAR NAV COMPONENT (used by feedback view) ---

const SidebarNav = ({
  goHome,
  goToAbout,
  goToFeedback,
  openModule,
  modules,
}) => (
  <nav className="p-4 flex-1 overflow-y-auto no-scrollbar">
    <button
      onClick={goHome}
      className="flex items-center text-emerald-200 hover:text-white mb-8 w-full touch-manipulation transition-colors font-medium"
    >
      <ArrowLeft size={18} className="mr-2" /> Back to Home
    </button>

    <div className="mb-4 px-2">
      <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">
        Quick Guides
      </h4>
      <div className="space-y-1.5">
        {modules.map((mod) => (
          <button
            key={mod.id}
            onClick={() => openModule(mod.id)}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white"
          >
            {mod.title}
          </button>
        ))}
      </div>
    </div>

    <div className="mt-8 px-2">
      <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">
        App Info
      </h4>
      <button
        onClick={goToAbout}
        className="w-full flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white"
      >
        <Info size={18} className="mr-3" />
        About Us
      </button>
      <button
        onClick={goToFeedback}
        className="w-full flex items-center px-4 py-2.5 mt-1.5 rounded-xl text-sm font-bold transition-all touch-manipulation bg-white text-emerald-900 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
      >
        <MessageSquare size={18} className="mr-3" />
        Feedback
      </button>
    </div>
  </nav>
);

// --- MAIN APP COMPONENT ---

export default function USaskPocusApp() {
  const isSafari = useIsSafari();

  const [currentView, setCurrentView] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const view = params.get('view');
      const module = params.get('module');
      if (view === 'about') return 'about';
      if (view === 'feedback') return 'feedback';
      if (module) return 'module';
      return 'dashboard';
    } catch (e) {
      return 'dashboard';
    }
  });

  const [activeModuleId, setActiveModuleId] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('module') || null;
    } catch (e) {
      return null;
    }
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef(null);

  // Directly pulling from our robust static import now!
  const activeModule = modules.find((m) => m.id === activeModuleId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [activeModuleId, currentView]);

  const openModule = (id) => {
    setActiveModuleId(id);
    setCurrentView('module');
    setSidebarOpen(false);
    window.scrollTo(0, 0);

    try {
      const newUrl = `?module=${id}`;
      window.history.pushState({ view: 'module', id }, '', newUrl);
    } catch (e) {
      console.log('History API unavailable');
    }
  };

  const goHome = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
    setSidebarOpen(false);
    window.scrollTo(0, 0);

    try {
      const cleanUrl = window.location.pathname;
      window.history.pushState({ view: 'dashboard' }, '', cleanUrl);
    } catch (e) {
      console.log('History API unavailable');
    }
  };

  const goToAbout = () => {
    setCurrentView('about');
    setActiveModuleId(null);
    setSidebarOpen(false);
    window.scrollTo(0, 0);

    try {
      const newUrl = `?view=about`;
      window.history.pushState({ view: 'about' }, '', newUrl);
    } catch (e) {
      console.log('History API unavailable');
    }
  };

  const goToFeedback = () => {
    setCurrentView('feedback');
    setActiveModuleId(null);
    setSidebarOpen(false);
    window.scrollTo(0, 0);

    try {
      const newUrl = `?view=feedback`;
      window.history.pushState({ view: 'feedback' }, '', newUrl);
    } catch (e) {
      console.log('History API unavailable');
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state;
      if (state && state.view === 'module') {
        setActiveModuleId(state.id);
        setCurrentView('module');
      } else if (state && state.view === 'about') {
        setCurrentView('about');
        setActiveModuleId(null);
      } else if (state && state.view === 'feedback') {
        setCurrentView('feedback');
        setActiveModuleId(null);
      } else {
        setCurrentView('dashboard');
        setActiveModuleId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- BACKGROUND GLOW COMPONENT ---
  const AmbientGlow = () => {
    if (isSafari) {
      // Graphics diet: static soft orbs, no heavy blurs
      return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-100">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-200/50 rounded-full opacity-70" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-200/50 rounded-full opacity-60" />
          <div className="absolute top-[30%] left-[60%] w-[30vw] h-[30vw] bg-violet-200/40 rounded-full opacity-50" />
        </div>
      );
    }

    // Supreme UI: deep glass, blurs, and pulsing dynamic orbs
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-300/40 rounded-full blur-[100px] opacity-70 mix-blend-multiply animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-300/40 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-[30%] left-[60%] w-[30vw] h-[30vw] bg-violet-300/30 rounded-full blur-[90px] opacity-50 mix-blend-multiply animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>
    );
  };

  const sidebarClass = isSafari
    ? 'bg-emerald-950'
    : 'bg-emerald-950/90 backdrop-blur-2xl';
  const headerClass = isSafari ? 'bg-white/95' : 'bg-white/70 backdrop-blur-xl';
  const dashboardHeaderClass = isSafari
    ? 'bg-emerald-950'
    : 'bg-emerald-950/90 backdrop-blur-2xl';
  const dashboardCardClass = isSafari
    ? 'bg-white/95'
    : 'bg-white/60 backdrop-blur-xl hover:bg-white/80';
  const footerClass = isSafari
    ? 'bg-slate-100 border-slate-200'
    : 'bg-white/40 backdrop-blur-md border-white/60';

  // --- ABOUT US VIEW ---
  if (currentView === 'about') {
    return (
      <div className="flex h-screen font-sans overflow-hidden w-full relative">
        <AmbientGlow />

        {/* Sidebar */}
        <aside
          className={`
          fixed inset-y-0 left-0 z-30 w-80 ${sidebarClass} text-white transform transition-transform duration-300 ease-in-out flex flex-col border-r border-white/10
          ${
            isSidebarOpen
              ? 'translate-x-0 shadow-2xl'
              : '-translate-x-full lg:static lg:translate-x-0'
          }
        `}
        >
          <div className="p-6 border-b border-emerald-800/50 flex justify-between items-center shrink-0">
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 to-white">
              USask POCUS
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-emerald-300 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="p-4 flex-1 overflow-y-auto no-scrollbar">
            <button
              onClick={goHome}
              className="flex items-center text-emerald-200 hover:text-white mb-8 w-full touch-manipulation transition-colors font-medium"
            >
              <ArrowLeft size={18} className="mr-2" /> Back to Home
            </button>

            <div className="mb-4 px-2">
              <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">
                Quick Guides
              </h4>
              <div className="space-y-1.5">
                {modules.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => openModule(mod.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white`}
                  >
                    {mod.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 px-2">
              <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">
                App Info
              </h4>
              <button
                onClick={goToAbout}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all touch-manipulation bg-white text-emerald-900 shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
              >
                <Info size={18} className="mr-3" />
                About Us
              </button>
              <button
                onClick={goToFeedback}
                className={`w-full flex items-center px-4 py-2.5 mt-1.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white`}
              >
                <MessageSquare size={18} className="mr-3" />
                Feedback
              </button>
            </div>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
          <header
            className={`h-16 ${headerClass} border-b flex items-center justify-between px-6 shrink-0 shadow-sm z-20`}
          >
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden mr-4 text-slate-500 hover:text-emerald-700 transition-colors"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-lg font-bold text-slate-800 truncate tracking-tight">
                About Us
              </h2>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth z-10 relative"
          >
            <div className="max-w-2xl mx-auto space-y-6 pb-20">
              <div
                className={`${dashboardCardClass} rounded-xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 overflow-hidden`}
              >
                <div
                  className={`${
                    isSafari
                      ? 'bg-emerald-900'
                      : 'bg-emerald-900/90 backdrop-blur-md'
                  } px-8 py-12 text-center relative overflow-hidden`}
                >
                  {!isSafari && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
                  )}
                  <GraduationCap
                    size={56}
                    className="mx-auto text-emerald-100 mb-5 relative z-10"
                  />
                  <h2 className="text-3xl font-bold text-white mb-3 tracking-tight relative z-10">
                    USask POCUS Quick Reference
                  </h2>
                  <p className="text-emerald-100/90 text-sm font-medium relative z-10">
                    Created for the University of Saskatchewan College of
                    Medicine
                  </p>
                </div>

                <div className="p-6 md:p-10 space-y-8">
                  <div className="flex items-start group">
                    <div className="p-3.5 bg-blue-50/80 border border-blue-100 shadow-sm text-blue-600 rounded-xl md:rounded-2xl mr-5 shrink-0 transition-transform group-hover:scale-110">
                      <Stethoscope size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-xl tracking-tight mb-1">
                        Dr. Linden Kolbenson
                      </h3>
                      <p className="text-slate-500 text-sm font-medium">
                        Content Creation and Review
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-3.5 bg-blue-50/80 border border-blue-100 shadow-sm text-blue-600 rounded-xl md:rounded-2xl mr-5 shrink-0 transition-transform group-hover:scale-110">
                      <Stethoscope size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-xl tracking-tight mb-1">
                        Dr. Paul Olszynski
                      </h3>
                      <p className="text-slate-500 text-sm font-medium">
                        Content Creation and Review
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-200/60" />

                  <div className="flex items-start group">
                    <div className="p-3.5 bg-emerald-50/80 border border-emerald-100 shadow-sm text-emerald-600 rounded-xl md:rounded-2xl mr-5 shrink-0 transition-transform group-hover:scale-110">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-xl tracking-tight mb-1">
                        Raafi Ali
                      </h3>
                      <p className="text-slate-600 font-bold text-sm mb-1">
                        Internal Medicine Resident
                      </p>
                      <p className="text-slate-500 text-sm font-medium">
                        App Development and Design
                      </p>
                    </div>
                  </div>

                  <hr className="border-slate-200/60" />

                  <p className="text-slate-500 text-sm font-medium mt-0">
                    <strong>Disclaimer:</strong><br/>This content is intended for educational purposes only. This content is not intended, nor should it be used as medical advice.<br/> <br/>The information presented here may represent the opinions of the authors but does not represent those of
                    their employing institutions or medical societies in which
                    they are involved. <br/><br/>The clinical information presented here
                    does not represent any one individual. All uniquely
                    identifiable data has been removed to protect the privacy
                    and confidentiality of patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- FEEDBACK VIEW ---
  // --- FEEDBACK VIEW ---
  if (currentView === 'feedback') {
    return (
      <div className="flex h-screen font-sans overflow-hidden w-full relative">
        <AmbientGlow />

        {/* Sidebar */}
        <aside
          className={`
          fixed inset-y-0 left-0 z-30 w-80 ${sidebarClass} text-white transform transition-transform duration-300 ease-in-out flex flex-col border-r border-white/10
          ${
            isSidebarOpen
              ? 'translate-x-0 shadow-2xl'
              : '-translate-x-full lg:static lg:translate-x-0'
          }
        `}
        >
          <div className="p-6 border-b border-emerald-800/50 flex justify-between items-center shrink-0">
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 to-white">
              USask POCUS
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-emerald-300 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <SidebarNav
            goHome={goHome}
            goToAbout={goToAbout}
            goToFeedback={goToFeedback}
            openModule={openModule}
            modules={modules}
          />
        </aside>

        {/* Background Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
          <header
            className={`h-16 ${headerClass} border-b flex items-center justify-between px-6 shrink-0 shadow-sm z-20`}
          >
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden mr-4 text-slate-500 hover:text-emerald-700 transition-colors"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-lg font-bold text-slate-800 truncate tracking-tight">
                Feedback
              </h2>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth z-10 relative"
          >
            <div className="max-w-2xl mx-auto space-y-6 pb-20 pt-4">
              <div
                className={`${dashboardCardClass} p-8 md:p-12 rounded-xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 relative overflow-hidden`}
              >
                {!isSafari && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[80px] pointer-events-none" />
                )}

                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 bg-emerald-100/80 border border-emerald-200/50 shadow-sm text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <MessageSquare size={32} />
                  </div>
                  <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                    We Value Your Feedback
                  </h2>
                  <p className="text-slate-500 mt-3 font-medium max-w-md mx-auto">
                    Help us improve. Please provide your thoughts, suggestions, or report any issues below.
                  </p>
                </div>

                <form
                  target="_blank"
                  action="https://formsubmit.co/aliraafi@gmail.com"
                  method="POST"
                  className="space-y-5 relative z-10"
                >
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className={`w-full px-4 py-3.5 rounded-xl border border-white/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 outline-none transition-all shadow-sm ${
                          isSafari ? 'bg-white' : 'bg-white/50 backdrop-blur-sm'
                        } text-slate-800 placeholder-slate-400 font-medium`}
                        placeholder="Name (Required)"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className={`w-full px-4 py-3.5 rounded-xl border border-white/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 outline-none transition-all shadow-sm ${
                          isSafari ? 'bg-white' : 'bg-white/50 backdrop-blur-sm'
                        } text-slate-800 placeholder-slate-400 font-medium`}
                        placeholder="Email (Required)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      className={`w-full px-4 py-4 rounded-xl border border-white/60 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/20 outline-none transition-all shadow-sm ${
                        isSafari ? 'bg-white' : 'bg-white/50 backdrop-blur-sm'
                      } text-slate-800 placeholder-slate-400 resize-none font-medium`}
                      placeholder="Please provide your feedback, suggestions, or report any issues here..."
                    ></textarea>
                  </div>

                  {/* FormSubmit Configuration Inputs */}
                  <input type="hidden" name="_subject" value="New Feedback Submission - USask POCUS" />
                  <input type="hidden" name="_template" value="table" />

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-[0_4px_14px_rgba(5,150,105,0.3)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.4)] hover:-translate-y-0.5 active:translate-y-0 mt-4 flex items-center justify-center"
                  >
                    <MessageSquare size={18} className="mr-2.5" />
                    Submit Feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 1. DASHBOARD VIEW
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen font-sans text-slate-800 flex flex-col w-full relative overflow-hidden">
        <AmbientGlow />

        <header
          className={`${dashboardHeaderClass} text-white py-12 px-6 relative overflow-hidden border-b border-white/10 shadow-lg`}
        >
          {!isSafari && (
            <>
              <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            </>
          )}

          <div className="absolute top-4 right-4 p-8 opacity-5">
            <GraduationCap size={200} />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`px-4 py-1.5 ${
                  isSafari ? 'bg-white/20' : 'bg-white/10 backdrop-blur-md'
                } border border-white/20 text-emerald-50 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm`}
              >
                College of Medicine
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
              USask POCUS
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-emerald-100/90 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                Undergraduate Medical Education Point-of-Care Ultrasound
                Curriculum.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={goToAbout}
                  className={`w-fit px-4 py-2 ${
                    isSafari
                      ? 'bg-white/20 hover:bg-white/30'
                      : 'bg-white/10 hover:bg-white/20 backdrop-blur-md'
                  } rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 text-white transition-all cursor-pointer flex items-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
                >
                  <Info size={14} className="mr-2" />
                  About
                </button>
                <button
                  onClick={goToFeedback}
                  className={`w-fit px-4 py-2 ${
                    isSafari
                      ? 'bg-white/20 hover:bg-white/30'
                      : 'bg-white/10 hover:bg-white/20 backdrop-blur-md'
                  } rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 text-white transition-all cursor-pointer flex items-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
                >
                  <MessageSquare size={14} className="mr-2" />
                  Feedback
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 py-12 w-full relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-8 flex items-center tracking-tight">
              <BookOpen size={24} className="mr-3 text-emerald-600" />
              Learning Modules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  className={`${dashboardCardClass} p-6 md:p-8 rounded-xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-${mod.color}-300/50 active:scale-[0.98] transition-all duration-300 text-left group flex flex-col h-full relative overflow-hidden touch-manipulation z-10`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl md:rounded-2xl ${
                      isSafari
                        ? `bg-${mod.color}-100`
                        : `bg-${mod.color}-50/80 backdrop-blur-md`
                    } border border-${
                      mod.color
                    }-100 flex items-center justify-center text-${
                      mod.color
                    }-600 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    <mod.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight group-hover:text-slate-900">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-8 flex-grow leading-relaxed font-medium">
                    {mod.description}
                  </p>

                  <div
                    className={`flex items-center text-${mod.color}-600 text-sm font-bold mt-auto tracking-wide uppercase`}
                  >
                    Explore Module{' '}
                    <ArrowRight
                      size={16}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        <footer
          className={`relative z-10 border-t py-8 text-center text-slate-500 text-xs font-medium ${footerClass}`}
        >
          <p className="mb-3">
            © University of Saskatchewan • College of Medicine • v0.40
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={goToAbout}
              className="inline-flex items-center justify-center text-emerald-600 hover:text-emerald-800 font-bold transition-colors"
            >
              <Info size={14} className="mr-1" /> About the Team
            </button>
            <button
              onClick={goToFeedback}
              className="inline-flex items-center justify-center text-emerald-600 hover:text-emerald-800 font-bold transition-colors"
            >
              <MessageSquare size={14} className="mr-1" /> Feedback
            </button>
          </div>
        </footer>
      </div>
    );
  }

  // 2. MODULE VIEW
  return (
    <div className="flex h-screen font-sans overflow-hidden w-full relative">
      <AmbientGlow />

      <aside
        className={`
        fixed inset-y-0 left-0 z-40 w-80 ${sidebarClass} text-white transform transition-transform duration-300 ease-in-out flex flex-col border-r border-white/10
        ${
          isSidebarOpen
            ? 'translate-x-0 shadow-2xl'
            : '-translate-x-full lg:static lg:translate-x-0'
        }
      `}
      >
        <div className="p-6 border-b border-emerald-800/50 flex justify-between items-center shrink-0">
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 to-white">
            USask POCUS
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-emerald-300 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 flex-1 overflow-y-auto no-scrollbar">
          <button
            onClick={goHome}
            className="flex items-center text-emerald-200 hover:text-white mb-8 w-full touch-manipulation transition-colors font-medium"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </button>

          <div className="mb-4 px-2">
            <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">
              Quick Guides
            </h4>
            <div className="space-y-1.5">
              {modules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${
                    activeModuleId === mod.id
                      ? `bg-white text-emerald-900 shadow-[0_0_15px_rgba(255,255,255,0.2)] font-bold`
                      : 'text-emerald-100/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {mod.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 px-2">
            <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">
              App Info
            </h4>
            <button
              onClick={goToAbout}
              className={`w-full flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white`}
            >
              <Info size={18} className="mr-3" />
              About Us
            </button>
            <button
              onClick={goToFeedback}
              className={`w-full flex items-center px-4 py-2.5 mt-1.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white`}
            >
              <MessageSquare size={18} className="mr-3" />
              Feedback
            </button>
          </div>
        </nav>
      </aside>

      {/* Background Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        <header
          className={`h-16 ${headerClass} border-b flex items-center justify-between px-6 shrink-0 shadow-sm z-20`}
        >
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden mr-4 text-slate-500 hover:text-emerald-700 transition-colors"
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 truncate tracking-tight">
              {activeModule?.title}
            </h2>
          </div>
        </header>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth relative z-10"
        >
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 pb-24 pt-2">
            {activeModule && activeModule.sections ? (
              activeModule.sections.map((section, idx) => (
                <SectionCard key={idx} section={section} isSafari={isSafari} />
              ))
            ) : (
              <div
                className={`${dashboardCardClass} max-w-3xl mx-auto p-12 rounded-xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 text-center`}
              >
                <div className="w-20 h-20 bg-emerald-50/80 border border-emerald-100/50 shadow-sm text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope size={40} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">
                  Content Coming Soon
                </h3>
                <p className="text-slate-600 mb-8 font-medium">
                  Dr. Kolbenson is currently curating the curriculum for this
                  module.
                </p>
                <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-100/80 border border-slate-200/50 backdrop-blur-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
                  <Info size={14} className="mr-2" />
                  Module ID: {activeModule?.id}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
