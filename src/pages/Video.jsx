import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const mockVideos = [
  ...[
    'https://www.instagram.com/reel/DSNKD6xEgu7/',
    'https://www.instagram.com/reel/DVSFPz9Es-m/',
    'https://www.instagram.com/reel/DTQAZ34jL-B/',
    'https://www.instagram.com/reel/DSMUa5KDObX/',
    'https://www.instagram.com/reel/DU-0lCQErp3/'
  ].map((url, i) => ({ id: 101 + i, title: 'Model Reel', category: 'Model Shoots', type: 'ig', url: `${url}embed/` })),

  ...[
    'https://www.instagram.com/reel/DV2Rjmqjvgn/',
    'https://www.instagram.com/reel/DAD78dru9YO/',
    'https://www.instagram.com/reel/C_nQ0GBpfc2/'
  ].map((url, i) => ({ id: 201 + i, title: 'Wedding Reel', category: 'Wedding', type: 'ig', url: `${url}embed/` })),

  ...[
    'https://www.instagram.com/reel/DLcggUbTtUX/',
    'https://www.instagram.com/reel/DLHz5t8IMG_/'
  ].map((url, i) => ({ id: 301 + i, title: 'Outdoor Reel', category: 'Outdoor', type: 'ig', url: `${url}embed/` }))
];

const categories = ['All', 'Wedding', 'Outdoor', 'Model Shoots'];

const Video = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [videos, setVideos] = useState(mockVideos);

  useEffect(() => {
    if (category) {
        const mappedCat = categories.find(c => c.toLowerCase().replace(/ /g, '-') === category.toLowerCase());
        if (mappedCat) setFilter(mappedCat);
        else setFilter('All');
    } else setFilter('All');
  }, [category]);

  useEffect(() => {
    if (filter === 'All') setVideos(mockVideos);
    else setVideos(mockVideos.filter(vid => vid.category === filter));
  }, [filter]);

  const handleFilterClick = (cat) => {
     if (cat === 'All') navigate('/video');
     else navigate(`/video/${cat.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-8 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
          className="text-center mb-16 space-y-6"
        >
          <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">Cinemas</span>
          <h1 className="editorial-title text-6xl md:text-8xl text-on-surface">Motion Pictures</h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto font-light">
             Narrative-driven visual storytelling crafted beautifully for the silver screen.
          </p>
          <div className="w-16 h-px bg-outline-variant mx-auto mt-8"></div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-20 border-b border-outline-variant/30 pb-8"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-6 py-2 rounded text-[10px] font-label tracking-widest uppercase transition-all duration-500 relative overflow-hidden group border ${filter === cat ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20' : 'bg-transparent text-on-surface border-outline-variant hover:border-primary'}`}
            >
              <span className="relative z-10">{cat}</span>
              {filter !== cat && <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {videos.map((vid, idx) => (
              <motion.div 
                layout
                key={vid.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`group relative overflow-hidden bg-surface-container-low rounded-xl ${vid.type === 'ig' ? 'aspect-[9/16]' : 'aspect-[21/9]'} shadow-sm`}
              >
               {vid.type === 'ig' ? (
                  <iframe 
                      src={`${vid.url}?hidecaption=true`} 
                      className="absolute left-[-2px] w-[calc(100%+4px)]" 
                      style={{ top: '-54px', height: 'calc(100% + 220px)' }}
                      frameBorder="0" scrolling="no" allowtransparency="true"
                  ></iframe>
               ) : (
                 <>
                    <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-[2s] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex items-center justify-center pointer-events-none">
                        <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 group-hover:bg-primary-fixed/20 group-hover:border-primary-fixed/50 group-hover:scale-110 transition-all duration-500">
                            <span className="material-symbols-outlined text-white group-hover:text-primary-fixed text-5xl ml-2 transition-colors">play_arrow</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-12 w-full">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="font-label text-xs tracking-[0.3em] uppercase text-primary-fixed mb-3">{vid.category}</p>
                          <h3 className="editorial-title text-4xl text-on-surface">{vid.title}</h3>
                        </div>
                    </div>
                 </>
               )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Video;
