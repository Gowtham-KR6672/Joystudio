import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const rawVideos = import.meta.glob('../assets/Video/**/*.mp4', { eager: true, query: '?url', import: 'default' });
const mockVideos = Object.entries(rawVideos).map(([path, url], idx) => {
    const parts = path.split('/');
    const categoryRaw = parts[parts.length - 2];
    const category = categoryRaw === 'Modal Shoots' ? 'Model Shoots' : categoryRaw;
    return {
        id: idx + 1,
        title: `${category} Reel`,
        category,
        url
    };
});

const categories = ['All', 'Wedding', 'Outdoor', 'Model Shoots'];

const Video = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [videos, setVideos] = useState(mockVideos);
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

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
                onClick={() => setActiveVideoUrl(vid.url)}
                className={`group relative overflow-hidden bg-surface-container-low rounded-xl aspect-[9/16] shadow-sm cursor-pointer`}
              >
                  <video 
                      src={vid.url} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-[2s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="font-label text-xs tracking-[0.3em] uppercase text-primary-fixed mb-2">{vid.category}</p>
                        <h3 className="editorial-title text-3xl text-white">{vid.title}</h3>
                      </div>
                  </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Playback Modal */}
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-xl"
          >
            <button 
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-primary z-50 p-3 bg-white/10 rounded-full transition-colors flex items-center shadow-lg hover:bg-white/20"
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl font-light">close</span>
            </button>
            <video 
              src={activeVideoUrl} 
              autoPlay 
              controls 
              className="w-full h-full max-h-screen object-contain p-2 md:p-8 outline-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Video;
