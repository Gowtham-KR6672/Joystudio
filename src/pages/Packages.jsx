import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const packagesData = [
  {
    category: 'Wedding Collections',
    desc: 'Comprehensive coverage for your grand celebrations.',
    items: [
      { 
          name: 'Silver Package', 
          price: '₹55,000', 
          desc: 'Essential coverage perfect for intimate 1-day traditional celebrations.', 
          features: ['1 Traditional Videographer', '1 Traditional Photographer', 'Candid Highlight Teaser', '1 Premium Album (30 Pages)', 'Soft Copy Delivery'] 
      },
      { 
          name: 'Gold Package', 
          price: '₹95,000', 
          desc: 'Our most popular collection, seamlessly blending traditional and editorial candid coverage over 2 events.', 
          features: ['Candid Photography', 'Cinematic Wedding Film', 'Traditional Video & Photo', 'Pre-Wedding Mini Shoot', '2 Premium Albums (30 Pages)', 'Same Day Edit Trailer'] 
      },
      { 
          name: 'Diamond Package', 
          price: '₹1,50,000', 
          desc: 'The ultimate luxury experience covering pre, wedding, and post events with maximum drone and cinematic scale.', 
          features: ['Dedicated Candid Creative Team', 'Cinematic Storytelling Film', 'Drone Aerial Coverage', 'Full Pre-Wedding & Post-Wedding Shoot', '3 Luxury Albums (40 Pages)', 'Deluxe Box Set Drive'] 
      }
    ]
  },
  {
    category: 'Baby & Maternity',
    desc: 'Delicate, pure focus for the beginnings of your family.',
    items: [
      { 
          name: 'Baby Shower', 
          price: '₹25,000', 
          desc: 'Documenting the jubilant anticipation and warm gatherings of family and friends.', 
          features: ['Candid Event Coverage', 'Traditional Family Portraits', 'Short Cinematic Highlight Reel', 'Soft Copy Delivery'] 
      },
      { 
          name: 'Newborn Milestone Shoot', 
          price: '₹35,000', 
          desc: 'Concept-driven, highly controlled studio or home shoots to capture infant perfection.', 
          features: ['2-3 Conceptual Backdrops', 'Props & Wardrobe Included', 'Printed Milestone Book', 'High-Res Edited Portraits'] 
      }
    ]
  },
  {
    category: 'Editorial & Model',
    desc: 'High-end lookbooks, fashion campaigns, and portfolio builds.',
    items: [
      { 
          name: 'Portfolio Builder', 
          price: '₹15,000', 
          desc: 'A quick, impactful session designed for aspiring models needing fresh comp cards.', 
          features: ['2 Outfit Changes', 'Studio Lighting Setup', '10 Retouched Images', 'Raw Unedited Delivery'] 
      },
      { 
          name: 'Fashion Editorial', 
          price: '₹40,000', 
          desc: 'Full-scale outdoor or concept studio shoot utilizing a dedicated creative team.', 
          features: ['Creative Direction Consultation', 'Unlimited Looks (Half-Day)', 'BTS Video Reel for Socials', '25 Premium Retouched Images'] 
      }
    ]
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const PackageCard = ({ pkg }) => {
  const [showOptions, setShowOptions] = useState(false);
  const waText = encodeURIComponent(`Hello Joy Studio! I am interested in the ${pkg.name} starting at ${pkg.price}. Can we discuss the details?`);
  const emailSub = encodeURIComponent(`Inquiry for ${pkg.name}`);

  return (
    <motion.div 
        variants={fadeUp}
        className="relative bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between group"
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>
        <div className="space-y-6">
            <h3 className="font-serif text-2xl text-on-surface">{pkg.name}</h3>
            <div className="flex items-baseline gap-1 break-all">
               <span className="text-4xl lg:text-5xl font-bold font-sans tracking-tight text-primary-fixed-dim">{pkg.price}</span>
               <span className="font-label text-xs text-zinc-400 uppercase tracking-widest pl-1">Starting</span>
            </div>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
               {pkg.desc}
            </p>
            <ul className="space-y-4 pt-4 border-t border-outline-variant/30">
                {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                        <FaCheck className="text-primary mt-1 flex-shrink-0" size={12} />
                        <span className="font-body text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="pt-10 mt-auto">
           {showOptions ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3">
                  <div className="flex gap-2">
                      <a href={`https://wa.me/916384183245?text=${waText}`} target="_blank" rel="noreferrer" className="flex-1 py-3 border border-green-500/30 bg-green-500/5 text-green-600 dark:text-green-400 rounded hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center gap-2 text-xs font-label uppercase tracking-widest" title="WhatsApp">
                          <FaWhatsapp size={16}/>
                      </a>
                      <a href="tel:+916384183245" className="flex-1 py-3 border border-primary/30 bg-primary/5 text-primary rounded hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2 text-xs font-label uppercase tracking-widest" title="Call">
                          <FaPhoneAlt size={14}/>
                      </a>
                      <a href={`mailto:gowthamkr6672@gmail.com?subject=${emailSub}&body=${waText}`} className="flex-1 py-3 border border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-500 hover:text-white transition-colors flex items-center justify-center gap-2 text-xs font-label uppercase tracking-widest" title="Email">
                          <FaEnvelope size={14}/>
                      </a>
                  </div>
                  <button onClick={(e) => { e.preventDefault(); setShowOptions(false); }} className="w-full text-center text-[10px] uppercase tracking-widest text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 mt-2 transition-colors">
                      Cancel
                  </button>
              </motion.div>
           ) : (
              <button onClick={() => setShowOptions(true)} className="block w-full text-center py-3 px-4 border border-primary text-primary rounded font-label text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  Enquire
              </button>
           )}
        </div>
    </motion.div>
  );
};

const Packages = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <div className="max-w-7xl mx-auto space-y-24">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center space-y-6">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">Investments</span>
            <h1 className="editorial-title text-5xl md:text-7xl text-on-surface">Studio Packages</h1>
            <div className="w-16 h-px bg-outline-variant mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-32">
            {packagesData.map((section, sIdx) => (
               <motion.section 
                  key={sIdx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="space-y-12"
               >
                   <motion.div variants={fadeUp} className="text-center md:text-left">
                       <h2 className="editorial-title text-4xl text-on-surface mb-2">{section.category}</h2>
                       <p className="font-body text-zinc-500 italic font-light">{section.desc}</p>
                   </motion.div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {section.items.map((pkg, pIdx) => (
                           <PackageCard key={pIdx} pkg={pkg} />
                       ))}
                   </div>
               </motion.section>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Packages;
