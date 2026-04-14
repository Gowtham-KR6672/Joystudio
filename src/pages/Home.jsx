import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import homeHero from '../assets/Home/Home.webp.jpg';
import philosophyImg from '../assets/Wedding/Traditional/1.jpg';
import featureWeddings from '../assets/Wedding/Outdoor/1.jpg';
import featureBaby from '../assets/Baby/Baby Shower/1.jpg';
import featureVideo from '../assets/Gallery/Couple/1.jpg';
import featureGallery from '../assets/Gallery/Model Shoots/11.webp.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const imgParallax = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroParallax, scale: imgParallax }} className="absolute inset-0 z-0 origin-bottom">
          <img className="w-full min-h-[115vh] md:min-h-full object-cover object-top md:object-[center_15%] grayscale-[10%] brightness-100 transition-all duration-1000" alt="High-key editorial portrait" src={homeHero}/>
          <div className="absolute inset-0 bg-surface/10 bg-gradient-to-b from-transparent via-transparent to-surface mix-blend-normal"></div>
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-10 text-center px-6 mt-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-white/20 to-transparent blur-xl md:-inset-x-32 md:-inset-y-16 z-[-1] pointer-events-none dark:from-black/60 dark:via-black/20"></div>
          <motion.h1 variants={fadeUp} className="editorial-title text-6xl md:text-9xl text-on-surface font-light mb-8 leading-none tracking-tight">
            Capturing the <br/><span className="italic relative inline-block text-primary"><motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }} className="absolute bottom-4 left-0 h-1 bg-primary/20"></motion.span>Joyful</span> Moment
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto tracking-wide font-light">
            Artistry that transcends time through the purity of light and the elegance of the unspoken.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-16 opacity-60 flex justify-center">
            <motion.span animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="material-symbols-outlined text-4xl text-primary">expand_more</motion.span>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-40 px-8 bg-surface-container-lowest relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-10 group">
            <motion.h2 variants={fadeUp} className="editorial-title text-5xl md:text-6xl text-primary leading-tight">
              Our Philosophy
            </motion.h2>
            <motion.div variants={{hidden: {width: 0}, visible: {width: 80, transition: {duration: 1}}}} className="h-px bg-outline-variant"></motion.div>
            <motion.p variants={fadeUp} className="font-body text-2xl text-on-surface-variant leading-relaxed font-light">
              We believe that photography is not just about a lens, but about a perspective—a quiet curation of the soul's most radiant instances.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-label uppercase tracking-widest text-primary hover:gap-4 transition-all group-hover:text-primary-container relative">
                    Read our story
                    <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                </Link>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div variants={fadeUp} className="aspect-[3/4] bg-surface overflow-hidden rounded-xl shadow-2xl relative group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
              <img className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]" alt="Philosophy" src={philosophyImg}/>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-40 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <div className="space-y-6">
              <motion.span variants={fadeUp} className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">The Archives</motion.span>
              <motion.h2 variants={fadeUp} className="editorial-title text-6xl md:text-7xl text-on-surface">Featured Works</motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-on-surface-variant max-w-sm font-body italic text-xl">Explore our diverse portfolio of life's most precious milestones.</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-[900px]">
            {[
              { title: 'Weddings', span: 'md:col-span-8', img: featureWeddings, link: '/services/weddings', subtitle: 'Eternal Vows & Grandeur' },
              { title: 'Baby', span: 'md:col-span-4', img: featureBaby, link: '/services/baby', subtitle: 'New Beginnings' },
              { title: 'Video', span: 'md:col-span-4', img: featureVideo, link: '/video', subtitle: 'Cinematic Frames' },
              { title: 'Gallery', span: 'md:col-span-8', img: featureGallery, link: '/gallery', subtitle: 'Editorial Curations', imgPos: 'object-top' },
            ].map((item, i) => (
              <motion.div 
                key={item.title} 
                variants={fadeUp} 
                className={`${item.span} group relative overflow-hidden bg-surface-container-lowest rounded-xl shadow-md min-h-[350px] md:min-h-0`}
              >
                <Link to={item.link} className="block w-full h-full">
                    <img className={`w-full h-full object-cover ${item.imgPos || 'object-center'} transition-transform duration-[1.5s] ease-out group-hover:scale-105`} alt={item.title} src={item.img}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="editorial-title text-4xl mb-3">{item.title}</h3>
                        <p className="font-label text-sm opacity-90 tracking-[0.2em] uppercase text-primary-fixed">{item.subtitle}</p>
                      </div>
                    </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-40 px-8 relative overflow-hidden bg-zinc-950 text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 variants={fadeUp} className="editorial-title text-6xl md:text-8xl leading-tight">
              Ready to frame your <span className="italic text-primary-container">Legacy</span>?
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Allow us to curate your moments into works of art. Our calendar fills months in advance—let’s begin the conversation today.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
            <Link to="/booking" className="relative group overflow-hidden bg-gradient-to-r from-primary to-primary-container text-on-primary px-12 py-5 rounded text-sm font-label tracking-[0.2em] uppercase transition-all shadow-xl shadow-primary/20">
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </Link>
            <Link to="/contact" className="relative group overflow-hidden border border-zinc-700 text-white px-12 py-5 rounded text-sm font-label tracking-[0.2em] uppercase transition-colors">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">General Inquiry</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      </section>
    </>
  );
};

export default Home;
