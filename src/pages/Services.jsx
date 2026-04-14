import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

import outdoorImg from '../assets/Wedding/Outdoor/4.jpg';
import traditionalImg from '../assets/Wedding/Traditional/1.jpg';
import preWeddingImg from '../assets/Wedding/Pre Wedding/1.jpg';
import postWeddingImg from '../assets/Wedding/Post wedding/1.jpg';
import babyShowerImg from '../assets/Baby/Baby Shower/1.jpg';
import babyShootsImg from '../assets/Baby/Baby Shoots/1.jpg';

const rawWedding = import.meta.glob('../assets/Wedding/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });
const rawBaby = import.meta.glob('../assets/Baby/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

const subImages = {
  'outdoor': outdoorImg,
  'traditional': traditionalImg,
  'pre-wedding': preWeddingImg,
  'post-wedding': postWeddingImg,
  'baby-shower': babyShowerImg,
  'baby-shoots': babyShootsImg,
};

const subGalleryImages = {
  'outdoor': Object.entries(rawWedding).filter(([p]) => p.includes('/Outdoor/')).map(([p, url]) => ({ url, type: 'image' })),
  'traditional': Object.entries(rawWedding).filter(([p]) => p.includes('/Traditional/')).map(([p, url]) => ({ url, type: 'image' })),
  'pre-wedding': Object.entries(rawWedding).filter(([p]) => p.includes('/Pre Wedding/')).map(([p, url]) => ({ url, type: 'image' })),
  'post-wedding': Object.entries(rawWedding).filter(([p]) => p.includes('/Post wedding/')).map(([p, url]) => ({ url, type: 'image' })),
  'baby-shower': Object.entries(rawBaby).filter(([p]) => p.includes('/Baby Shower/')).map(([p, url]) => ({ url, type: 'image' })),
  'baby-shoots': Object.entries(rawBaby).filter(([p]) => p.includes('/Baby Shoots/')).map(([p, url]) => ({ url, type: 'image' }))
};

const defaultGallery = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', type: 'image' },
  { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800', type: 'image' },
  { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800', type: 'image' },
];

const Services = () => {
  const { id, subId } = useParams();
  const [showOptions, setShowOptions] = useState(false);

  const servicesData = [
    {
      id: 'weddings',
      subId: 'outdoor',
      title: 'Outdoor Wedding',
      price: 'from ₹45,000',
      desc: 'An immersive, editorial approach documenting your most important day in the beauty of nature. We beautifully capture the natural light and stunning landscapes of your venue.',
      img: subImages['outdoor'],
      reverse: false
    },
    {
      id: 'weddings',
      subId: 'traditional',
      title: 'Traditional Wedding',
      price: 'from ₹38,000',
      desc: 'Honoring heritage and spectacular ceremonies. We master the intricacies of traditional customs, creating a timeless visual legacy of your grand cathedral or hall event.',
      img: subImages['traditional'],
      reverse: true,
      imgPos: 'object-top'
    },
    {
      id: 'weddings',
      subId: 'pre-wedding',
      title: 'Pre-Wedding',
      price: 'from ₹25,000',
      desc: 'A romantic prelude to your vows. Exquisite editorial portraits documenting the intimacy and sheer elation leading up to your grand celebration.',
      img: subImages['pre-wedding'],
      reverse: false
    },
    {
      id: 'weddings',
      subId: 'post-wedding',
      title: 'Post-Wedding',
      price: 'from ₹20,000',
      desc: 'A cinematic epilogue. Unrushed, artful sessions focusing entirely on your connection in breathtaking attire, far removed from the pressures of the big day.',
      img: subImages['post-wedding'],
      reverse: true
    },
    {
      id: 'baby',
      subId: 'baby-shower',
      title: 'Baby Shower',
      price: 'from ₹15,000',
      desc: 'Capturing the jubilant anticipation and warm gatherings of family and friends as you prepare to welcome your newest addition.',
      img: subImages['baby-shower'],
      reverse: false
    },
    {
      id: 'baby',
      subId: 'baby-shoots',
      title: 'Baby Shoots',
      price: 'from ₹12,000',
      desc: 'Documenting the delicate beginnings of life. Our sessions intricately focus on the organic connection of your growing family with a fine-art approach.',
      img: subImages['baby-shoots'],
      reverse: true
    }
  ];

  let filteredServices = servicesData;
  if (subId) {
    filteredServices = servicesData.filter(svc => svc.subId === subId);
  } else if (id) {
    filteredServices = servicesData.filter(svc => svc.id === id);
  }

  const categoryTitle = subId
    ? subId.replace(/-/g, ' ')
    : id
      ? id === 'weddings' ? 'The Wedding Collection' : 'Baby & Maternity'
      : 'Our Services';

  const categoryDesc = subId
    ? `Curated, fine-art documentation dedicated specifically to your ${subId.replace(/-/g, ' ')} moments.`
    : id === 'weddings'
      ? 'From timeless eternal vows to the grandest architectural frames, explore our bespoke wedding curation.'
      : id === 'baby'
        ? 'Capturing the purity of new beginnings and the intimacies of motherhood with a delicate, fine-art approach.'
        : 'Explore our bespoke photography curation designed specifically for you.';

  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="pt-32 pb-20 px-8 min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto space-y-24">
        <motion.div variants={fadeUp} className="text-center space-y-6">
          <span className="font-label text-xs tracking-[0.3em] uppercase text-primary font-bold">Studio Offering</span>
          <h1 className="editorial-title text-6xl md:text-8xl text-on-surface leading-tight capitalize">
            {categoryTitle}
          </h1>
          <div className="w-20 h-px bg-outline-variant mx-auto"></div>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto font-light">
            {categoryDesc}
          </p>
        </motion.div>

        <div className="space-y-24">
          {filteredServices.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${svc.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center group`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl aspect-[4/3] shadow-lg">
                <Link to={`/services/${svc.id}/${svc.subId}`}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className={`w-full h-full object-cover ${svc.imgPos || 'object-center'} scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out cursor-pointer`}
                  />
                </Link>
              </div>
              <div className="w-full md:w-1/2 space-y-6 lg:px-6">
                <span className="font-label text-sm tracking-[0.2em] uppercase text-zinc-400">
                  {svc.price}
                </span>
                <h2 className="editorial-title text-4xl md:text-5xl text-on-surface capitalize">
                  {svc.title}
                </h2>
                <p className="font-body text-lg text-on-surface-variant font-light leading-relaxed">
                  {svc.desc}
                </p>

                <div className="pt-8 flex items-center justify-between w-full md:w-auto">
                  {subId ? (
                    showOptions ? (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3 w-full md:w-64">
                        <div className="flex gap-2 w-full">
                          <a href={`https://wa.me/916384183245?text=${encodeURIComponent(`Hello Red Studio! I am interested in the ${svc.title} starting at ${svc.price}. Can we discuss the details?`)}`} target="_blank" rel="noreferrer" className="flex-1 py-3 border border-green-500/30 bg-green-500/5 text-green-600 dark:text-green-400 rounded hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center text-xs" title="WhatsApp">
                            <FaWhatsapp size={16}/>
                          </a>
                          <a href="tel:+916384183245" className="flex-1 py-3 border border-primary/30 bg-primary/5 text-primary rounded hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center text-xs" title="Call">
                            <FaPhoneAlt size={14}/>
                          </a>
                          <a href={`mailto:gowthamkr6672@gmail.com?subject=${encodeURIComponent(`Inquiry for ${svc.title}`)}&body=${encodeURIComponent(`Hello Red Studio! I am interested in the ${svc.title} starting at ${svc.price}. Can we discuss the details?`)}`} className="flex-1 py-3 border border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center text-xs" title="Email">
                            <FaEnvelope size={14}/>
                          </a>
                        </div>
                        <button onClick={(e) => { e.preventDefault(); setShowOptions(false); }} className="w-full text-center text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 mt-1 transition-colors">
                          Cancel
                        </button>
                      </motion.div>
                    ) : (
                      <button onClick={() => setShowOptions(true)} className="relative group overflow-hidden bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded text-xs font-label tracking-widest uppercase transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 block w-full md:w-auto">
                        <span className="relative z-10">Inquire Now</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                      </button>
                    )
                  ) : (
                    <div className="flex w-full items-center justify-start">
                      <Link to={`/services/${svc.id}/${svc.subId}`} className="relative group overflow-hidden border-b border-primary text-primary pb-2 font-label text-xs uppercase tracking-widest transition-colors mt-4 inline-block">
                        <span className="relative z-10 group-hover:text-primary-container transition-colors duration-300">View Gallery & Details</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {subId && (
          <motion.div variants={fadeUp} className="pt-24 space-y-12 border-t border-outline-variant/30 mt-24">
            <div className="text-center space-y-4">
              <h3 className="editorial-title text-4xl text-on-surface capitalize">{subId.replace(/-/g, ' ')} Gallery</h3>
              <p className="font-body text-zinc-500 italic font-light">Visual moments curated specifically from previously beautiful shoots.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(subGalleryImages[subId] || defaultGallery).map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                  key={idx}
                  className="relative overflow-hidden rounded-xl aspect-[4/5] bg-surface-container-low shadow-sm"
                >
                  <img src={item.url} className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
};

export default Services;
