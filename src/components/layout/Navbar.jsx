import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const navData = [
  { label: 'Home', path: '/' },
  { 
    label: 'Weddings', path: '/services/weddings', 
    subItems: [
        { label: 'Outdoor', path: '/services/weddings/outdoor' },
        { label: 'Traditional', path: '/services/weddings/traditional' },
        { label: 'Pre-Wedding', path: '/services/weddings/pre-wedding' },
        { label: 'Post-Wedding', path: '/services/weddings/post-wedding' }
    ]
  },
  { 
    label: 'Baby', path: '/services/baby',
    subItems: [
        { label: 'Baby Shower', path: '/services/baby/baby-shower' },
        { label: 'Baby Shoots', path: '/services/baby/baby-shoots' }
    ]
  },
  { 
    label: 'Gallery', path: '/gallery',
    subItems: [
        { label: 'Bridal', path: '/gallery/bridal' },
        { label: 'Couple', path: '/gallery/couple' },
        { label: 'Groom', path: '/gallery/groom' },
        { label: 'Model Shoots', path: '/gallery/model-shoots' }
    ]
  },
  { 
    label: 'Video', path: '/video',
    subItems: [
        { label: 'Wedding', path: '/video/wedding' },
        { label: 'Outdoor', path: '/video/outdoor' },
        { label: 'Model Shoots', path: '/video/model-shoots' }
    ]
  },
  { 
    label: 'Others', path: '#',
    subItems: [
        { label: 'About Us', path: '/about' },
        { label: 'Packages', path: '/packages' },
        { label: 'Careers & Jobs', path: '/careers' },
        { label: 'Team Mates', path: '/team' }
    ]
  },
  { label: 'Contact', path: '/contact' }
];

const bottomNavItems = [
  { label: 'Home', icon: 'home', path: '/' },
  { label: 'Weddings', icon: 'favorite', path: '/services/weddings' },
  { label: 'Baby', icon: 'child_care', path: '/services/baby' },
  { label: 'Gallery', icon: 'photo_library', path: '/gallery' },
  { label: 'Video', icon: 'videocam', path: '/video' },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  
  // Mobile specific UI states
  const [isFabOpen, setIsFabOpen] = useState(false);
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close menus on route change
  useEffect(() => {
    setIsFabOpen(false);
  }, [location.pathname]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
        {/* Top Navbar */}
        <motion.nav 
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className={`fixed top-0 w-full z-[60] transition-all duration-500 max-w-full glass-nav ${location.pathname === '/' ? 'hidden lg:block' : 'block'} ${
            isScrolled 
              ? 'bg-white/95 dark:bg-zinc-950/95 shadow-sm border-b border-outline-variant/20 py-4 supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:backdrop-blur-lg' 
              : 'bg-transparent py-5 lg:py-4 lg:bg-white/95 lg:dark:bg-zinc-950/95 lg:shadow-sm lg:border-b lg:border-outline-variant/20 lg:supports-[backdrop-filter]:bg-white/80 lg:supports-[backdrop-filter]:backdrop-blur-lg'
          }`}
        >
          <div className="flex justify-between items-center px-6 md:px-8">
              <motion.div variants={itemVariants} className="text-2xl font-serif italic text-primary dark:text-primary-container relative group z-[70]">
                <Link to="/">Red Studio</Link>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
              </motion.div>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-8">
                {navData.map((item) => (
                  <motion.div 
                     key={item.label} 
                     variants={itemVariants}
                     onMouseEnter={() => setHoveredMenu(item.label)}
                     onMouseLeave={() => setHoveredMenu(null)}
                     className="relative py-2"
                  >
                    <Link 
                      className="relative group text-zinc-600 dark:text-zinc-300 font-serif tracking-widest text-[11px] uppercase hover:text-primary transition-colors duration-300 flex items-center gap-1" 
                      to={item.path}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {item.subItems && <span className="material-symbols-outlined text-[14px]">expand_more</span>}
                      <span className="absolute inset-x-0 -bottom-1 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>

                    <AnimatePresence>
                        {item.subItems && hoveredMenu === item.label && (
                            <motion.div 
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-outline-variant/20 rounded shadow-2xl py-4 flex flex-col gap-2 z-50 backdrop-blur-lg"
                            >
                                {item.subItems.map(sub => (
                                    <Link 
                                        key={sub.label} 
                                        to={sub.path}
                                        className="px-6 py-2 text-zinc-500 hover:text-primary font-sans text-xs tracking-widest uppercase hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                                    >
                                        {sub.label}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="hidden lg:block relative z-[70]">
                <Link to="/booking" className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded text-sm font-label tracking-widest uppercase transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 block">
                  <span className="relative z-10">Reserve</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </Link>
              </motion.div>
          </div>
        </motion.nav>

        {/* Mobile Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 w-full z-[60] lg:hidden bg-white/95 dark:bg-zinc-950/95 border-t border-outline-variant/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:backdrop-blur-lg px-2 pb-safe pt-2">
            <div className="flex justify-around items-center h-16">
                {bottomNavItems.map(item => {
                    const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                    return (
                        <Link 
                            key={item.label} 
                            to={item.path} 
                            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-300 ${isActive ? 'text-primary' : 'text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'}`}
                        >
                            <span className={`material-symbols-outlined text-2xl mb-1 ${isActive ? 'font-light' : 'font-extralight'}`}>{item.icon}</span>
                            <span className="text-[10px] font-label font-medium tracking-wide">{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </div>

        {/* FAB SCROLL DIMMER */}
        <AnimatePresence>
            {isFabOpen && (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    onClick={() => setIsFabOpen(false)}
                    className="fixed inset-0 bg-surface/60 z-[65] lg:hidden supports-[backdrop-filter]:backdrop-blur-sm"
                />
            )}
        </AnimatePresence>

        {/* Mobile Floating Action Button & Menu */}
        <div className="fixed bottom-[90px] right-4 z-[70] lg:hidden flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isFabOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20, scale: 0.9 }} 
                        animate={{ opacity: 1, y: 0, scale: 1 }} 
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto flex flex-col items-end gap-1 bg-white/95 dark:bg-zinc-900/95 shadow-2xl border border-outline-variant/20 rounded-2xl p-4 supports-[backdrop-filter]:backdrop-blur-lg min-w-[180px]"
                    >
                        <span className="font-label text-[10px] text-zinc-400 uppercase tracking-widest mb-2 px-2 border-b border-outline-variant/20 pb-2 w-full text-right">More</span>
                        <Link to="/about" className="py-2.5 px-3 w-full text-right text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors flex items-center justify-end gap-3 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800"> About Us <span className="material-symbols-outlined text-zinc-400 text-lg">info</span></Link>
                        <Link to="/packages" className="py-2.5 px-3 w-full text-right text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors flex items-center justify-end gap-3 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800"> Packages <span className="material-symbols-outlined text-zinc-400 text-lg">local_offer</span></Link>
                        <Link to="/careers" className="py-2.5 px-3 w-full text-right text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors flex items-center justify-end gap-3 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800"> Careers & Jobs <span className="material-symbols-outlined text-zinc-400 text-lg">work</span></Link>
                        <Link to="/team" className="py-2.5 px-3 w-full text-right text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors flex items-center justify-end gap-3 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800"> Team Mates <span className="material-symbols-outlined text-zinc-400 text-lg">groups</span></Link>
                        <div className="h-px bg-outline-variant/30 w-full my-1"></div>
                        <Link to="/contact" className="py-2 px-3 w-full text-right text-sm font-medium text-primary hover:text-primary-container transition-colors flex items-center justify-end gap-3 rounded hover:bg-primary/5"> Contact <span className="material-symbols-outlined text-lg">mail</span></Link>
                        <div className="h-px bg-outline-variant/30 w-full my-1"></div>
                        <Link to="/booking" className="py-2 px-3 w-full text-right text-sm font-bold text-on-surface hover:text-primary transition-colors flex items-center justify-end gap-3 rounded hover:bg-zinc-50 dark:hover:bg-zinc-800"> Reserve Session <span className="material-symbols-outlined text-lg">calendar_month</span></Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <button 
                onClick={() => setIsFabOpen(!isFabOpen)}
                className="pointer-events-auto w-14 h-14 rounded-full bg-primary text-on-primary shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
            >
                <motion.span 
                    animate={{ rotate: isFabOpen ? 45 : 0 }} 
                    className="material-symbols-outlined text-2xl leading-none font-light"
                    style={{ display: 'block' }}
                >
                    add
                </motion.span>
            </button>
        </div>
    </>
  );
};

export default Navbar;
