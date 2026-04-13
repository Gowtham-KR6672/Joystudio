import React from 'react';
import { motion } from 'framer-motion';

const mockTeam = [
  { name: 'Elena Rostova', role: 'Founder & Principal Photographer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA661r-g3OSjYbmbL37NhxzFhk-M36ZGhlEzta9Adhimo4_cde16H4JQKWvtRtZ-Xk6gENecWd6Cjbpwu22Qj7oKwGnsp73KDpNqvun0hnyeDHD7Lsjn80MJao89L-9YPXCMlcnHfgDoWjbIiB8xem-dttE_I16zC_quHjBRH0nwx1Vi6mqZYlazeNyPMWipKL34A9hh-jiskv_B2z4NG9FmiWxzogzFRnAdWiVKpe7t8gnk0ZOnya7JVS02oM7owNzJJcMJVv3eQs' },
  { name: 'Marcus Chen', role: 'Cinematography Director', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPMdg5LclVVWNWUVNyu_pMcg2DGzhCA0PMHtpmg122Akliec4zHt0xbMiEKNEevPYd8x5fJmJdwijS5pul7cK9vygCdHCGH4eyLZ5cNj0RwJBLb3S-lbHN-A4sLUHSkq_RWD2t6boDvWvMJ39Cv54aAv831ZXFWl6ircD2yl3xTZsJ0VhLNxbYgLRManGhGatI-h9ShieX3u65w9zu55TFN4xo8N0throst80FfUex8qYYwc5LLv036-IxHVSzOTCpXKwV1A1hMc8' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const Team = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="pt-32 pb-20 px-8 min-h-screen bg-surface text-center">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: {duration: 0.8} } }} className="space-y-6">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">The Collective</span>
            <h1 className="editorial-title text-6xl md:text-8xl text-on-surface leading-tight">
                Our Curators
            </h1>
            <div className="w-20 h-px bg-outline-variant mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
            {mockTeam.map((member, idx) => (
                <motion.div 
                    key={idx} 
                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: {duration: 1, ease: "easeOut"} } }}
                    className="group"
                >
                    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container mb-8 shadow-xl">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s] group-hover:scale-105" />
                    </div>
                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                        <h3 className="editorial-title text-4xl text-on-surface mb-3">{member.name}</h3>
                        <p className="font-label text-sm tracking-[0.3em] uppercase text-primary font-bold">{member.role}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
