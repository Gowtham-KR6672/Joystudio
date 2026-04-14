import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const rawImages = import.meta.glob('../assets/Gallery/**/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });
const mockGallery = Object.entries(rawImages).map(([path, url], idx) => {
    const parts = path.split('/');
    const category = parts[parts.length - 2];
    return {
        id: idx + 1,
        category,
        url,
        title: `${category} Portrait`
    };
});

const categories = ['All', 'Bridal', 'Couple', 'Groom', 'Model Shoots'];

const Gallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [images, setImages] = useState(mockGallery);

  useEffect(() => {
    if (category) {
        const mappedCat = categories.find(c => c.toLowerCase().replace(/ /g, '-') === category.toLowerCase());
        if (mappedCat) {
            setFilter(mappedCat);
        } else {
            setFilter('All');
        }
    } else {
        setFilter('All');
    }
  }, [category]);

  useEffect(() => {
    if (filter === 'All') setImages(mockGallery);
    else setImages(mockGallery.filter(img => img.category === filter));
  }, [filter]);

  const handleFilterClick = (cat) => {
     if (cat === 'All') navigate('/gallery');
     else navigate(`/gallery/${cat.toLowerCase().replace(/ /g, '-')}`);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-20 px-8 min-h-screen bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">The Gallery</span>
          <h1 className="editorial-title text-6xl md:text-8xl text-on-surface mb-6">Visual Memoirs</h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto italic">
             A curated selection of our most exquisite and timeless portraitures.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilterClick(cat)}
              className={`px-6 py-2 rounded text-[10px] font-label tracking-widest uppercase transition-all duration-500 relative overflow-hidden group border ${filter === cat ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20' : 'bg-transparent text-on-surface border-outline-variant hover:border-primary'}`}
            >
              <span className="relative z-10">{cat}</span>
              {filter !== cat && <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {images.map((img, idx) => (
              <motion.div 
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative overflow-hidden bg-surface-container-low rounded-xl aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="editorial-title text-3xl text-white mb-2">{img.title}</h3>
                        <p className="font-label text-xs tracking-[0.3em] uppercase text-primary-fixed">{img.category}</p>
                      </div>
                  </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
