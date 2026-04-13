import React from 'react';
import { motion } from 'framer-motion';

const mockJobs = [
  { title: 'Senior Editorial Retoucher', type: 'Full-Time', location: 'New York / Hybrid' },
  { title: 'Assistant Cinematographer', type: 'Contract', location: 'New York' },
];

const Careers = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="pt-32 pb-20 px-8 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto space-y-20">
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} className="text-center space-y-6">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">Join Us</span>
            <h1 className="editorial-title text-5xl md:text-8xl text-on-surface leading-tight">
                Careers
            </h1>
            <div className="w-20 h-px bg-outline-variant mx-auto"></div>
            <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
             We are always seeking visionaries who comprehend the subtle poetry of light and shade.
            </p>
        </motion.div>
        
        <div className="space-y-6">
            {mockJobs.map((job, idx) => (
                <motion.div 
                    key={idx} 
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
                    className="p-10 bg-surface-container-low border border-outline-variant/30 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
                >
                    <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                        <h3 className="editorial-title text-3xl text-on-surface mb-3">{job.title}</h3>
                        <div className="flex gap-4 font-label text-xs tracking-[0.2em] uppercase text-zinc-500">
                            <span className="text-primary">{job.type}</span>
                            <span>&bull;</span>
                            <span>{job.location}</span>
                        </div>
                    </div>
                    <button className="px-8 py-4 border border-outline text-on-surface rounded font-label text-xs tracking-widest uppercase hover:bg-primary hover:text-on-primary hover:border-primary transition-colors delay-75 shadow-lg shadow-transparent hover:shadow-primary/20">
                        Apply Now
                    </button>
                </motion.div>
            ))}

            <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } } }}
                className="p-16 text-center border-t border-outline-variant/20 mt-20"
            >
               <h3 className="editorial-title text-3xl text-on-surface mb-4">Don't see your role?</h3>
               <p className="font-body text-xl text-on-surface-variant mb-6 font-light">Send your portfolio to our creative director.</p>
               <a href="mailto:careers@joystudio.com" className="inline-block relative group font-label text-sm tracking-[0.2em] uppercase text-primary">
                   careers@joystudio.com
                   <span className="absolute -bottom-2 left-0 w-full h-px bg-primary scale-x-100 group-hover:scale-x-0 transition-transform origin-right duration-300"></span>
               </a>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Careers;
