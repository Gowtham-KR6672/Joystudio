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

const Navbar = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
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

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    open: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
        <motion.nav 
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className={`fixed top-0 w-full z-[60] transition-all duration-500 max-w-full glass-nav ${
            isScrolled || isMobileMenuOpen ? 'bg-white/95 dark:bg-zinc-950/95 shadow-sm border-b border-outline-variant/20 py-4 supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:backdrop-blur-lg' : 'bg-transparent py-5 md:py-6'
          }`}
        >
          <div className="flex justify-between items-center px-6 md:px-8">
              <motion.div variants={itemVariants} className="text-2xl font-serif italic text-primary dark:text-primary-container relative group z-[70]">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Joy Studio</Link>
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

              {/* Mobile Hamburger Toggle */}
              <motion.button 
                 variants={itemVariants}
                 className="lg:hidden text-on-surface z-[70] p-2"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                 <span className="material-symbols-outlined text-3xl font-light">
                   {isMobileMenuOpen ? 'close' : 'menu'}
                 </span>
              </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div 
                  initial="closed" 
                  animate="open" 
                  exit="closed" 
                  variants={mobileMenuVariants}
                  className="fixed inset-0 bg-surface dark:bg-zinc-950 z-[50] flex flex-col pt-28 pb-12 px-6 md:px-12 overflow-y-auto"
               >
                  {navData.map((item, idx) => (
                     <motion.div key={idx} variants={mobileLinkVariants} className="mb-4">
                         <div 
                            className="flex justify-between items-center border-b border-outline-variant/30 py-4 cursor-pointer group"
                            onClick={() => {
                                if (item.subItems) {
                                    setMobileOpenMenu(mobileOpenMenu === item.label ? null : item.label);
                                } else {
                                    setIsMobileMenuOpen(false);
                                }
                            }}
                         >
                             <Link to={item.subItems ? '#' : item.path} className="text-3xl font-serif text-on-surface group-hover:text-primary transition-colors">{item.label}</Link>
                             {item.subItems && (
                                <motion.span 
                                    animate={{ rotate: mobileOpenMenu === item.label ? 180 : 0 }}
                                    className="material-symbols-outlined text-zinc-400 group-hover:text-primary transition-colors"
                                >
                                    expand_more
                                </motion.span>
                             )}
                         </div>
                         <AnimatePresence>
                            {item.subItems && mobileOpenMenu === item.label && (
                               <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="flex flex-col gap-4 overflow-hidden bg-zinc-50 dark:bg-zinc-900 rounded-lg mt-2"
                               >
                                 <div className="py-6 px-6 flex flex-col gap-5">
                                     {item.subItems.map(sub => (
                                        <Link 
                                            key={sub.label} 
                                            to={sub.path} 
                                            onClick={() => setIsMobileMenuOpen(false)} 
                                            className="text-sm font-label tracking-widest uppercase text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors"
                                        >
                                          {sub.label}
                                        </Link>
                                     ))}
                                 </div>
                               </motion.div>
                            )}
                         </AnimatePresence>
                     </motion.div>
                  ))}
                  
                  <motion.div variants={mobileLinkVariants} className="mt-8">
                     <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)} className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded text-sm font-label tracking-widest uppercase transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 block text-center">
                        <span className="relative z-10">Reserve Your Session</span>
                    </Link>
                  </motion.div>
               </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};

export default Navbar;
