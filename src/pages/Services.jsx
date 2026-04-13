import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const subImages = {
  'outdoor': 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
  'traditional': 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
  'pre-wedding': 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1000',
  'post-wedding': 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1000',
  'baby-shower': 'https://images.unsplash.com/photo-1530103862676-de8892ebe643?auto=format&fit=crop&q=80&w=1000',
  'baby-shoots': 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000',
};

const subGalleryImages = {
  'outdoor': [
    { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', type: 'image' },
    { url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800', type: 'image' }
  ],
  'traditional': [
     { url: 'https://www.instagram.com/p/DVqpb7_GE-f/embed/', type: 'ig' },
     { url: 'https://www.instagram.com/p/DLya4NTTpPW/embed/', type: 'ig' },
     { url: 'https://www.instagram.com/p/DLyZ17hzns3/embed/', type: 'ig' },
     { url: 'https://www.instagram.com/p/DHM_QzaTyFn/embed/', type: 'ig' },
     { url: 'https://www.instagram.com/p/DHKjIQ_J4pQ/embed/', type: 'ig' }
  ],
  'pre-wedding': [
     { url: 'https://www.instagram.com/p/DWDJKlomADm/embed/', type: 'ig' },
     { url: 'https://www.instagram.com/p/C76IUEypLJo/embed/', type: 'ig' }
  ],
  'post-wedding': [
     { url: 'https://www.instagram.com/p/DLw3uJvzxlp/embed/', type: 'ig' },
     { url: 'https://www.instagram.com/p/DHLqZxDTTC6/embed/', type: 'ig' },
     { url: 'https://www.instagram.com/p/DFaJpf5pP3P/embed/', type: 'ig' }
  ],
  'baby-shower': [
     { url: 'https://www.instagram.com/p/DUj6-fviOYK/embed/', type: 'ig' }
  ]
};

const defaultGallery = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', type: 'image' },
  { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800', type: 'image' },
  { url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800', type: 'image' },
];

const Services = () => {
  const { id, subId } = useParams();

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
        reverse: true
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
                               className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out cursor-pointer" 
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

                        <div className="pt-8">
                            {subId ? (
                               <button className="relative group overflow-hidden bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded text-xs font-label tracking-widest uppercase transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 block">
                                   <span className="relative z-10">Inquire Now</span>
                                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                               </button>
                            ) : (
                               <Link to={`/services/${svc.id}/${svc.subId}`} className="relative group overflow-hidden border-b border-primary text-primary pb-2 font-label text-xs uppercase tracking-widest transition-colors mt-4 inline-block">
                                   <span className="relative z-10 group-hover:text-primary-container transition-colors duration-300">View Gallery & Details</span>
                               </Link>
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
                          {item.type === 'ig' ? (
                             <iframe 
                                 src={`${item.url}?hidecaption=true`} 
                                 className="absolute left-[-2px] w-[calc(100%+4px)]" 
                                 style={{ top: '-54px', height: 'calc(100% + 220px)' }}
                                 frameBorder="0" scrolling="no" allowtransparency="true"
                             ></iframe>
                          ) : (
                             <img src={item.url} className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-[2s] ease-out" />
                          )}
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
