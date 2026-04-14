import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const About = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }} className="pt-32 pb-20 px-8 min-h-screen bg-surface overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">
        <motion.div variants={fadeUp} className="text-center space-y-6">
            <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">Our Story</span>
            <h1 className="editorial-title text-6xl md:text-8xl text-on-surface leading-tight">
                The Heritage of Light
            </h1>
            <div className="w-20 h-px bg-outline-variant mx-auto"></div>
        </motion.div>
        
        <motion.div variants={fadeUp} className="aspect-[21/9] bg-surface-container-high rounded-xl overflow-hidden shadow-2xl group w-full">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVffr9XR7X6uqkvvP36zHi_VFpG6S2Yr4IyWJeV_8XhBDLt_7ezRmRk0dvEGjGXrIplA6Ye86HPn9aPVcVfk3royGWjLRQAA3J273P0q1z6a6lhCO-cDGKy0ogLKT97TnydtopK6SLKaTU_qoUllu4eMOoQkLv48cLrifuSkQzLU5b6xtYohQLaizYn_RSm02tn0NW6ichxJqaZUEFQ1g-T_yZi75YwbeEG9x6Doh4uVYcKn-qJSsL62_apieLZjNtwu8RK3fvOXg" alt="Studio interior" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[3s] ease-out" />
        </motion.div>

        <motion.div variants={fadeUp} className="prose prose-zinc prose-xl mx-auto font-body text-on-surface-variant font-light max-w-3xl">
            <p className="text-3xl leading-relaxed font-light text-on-surface first-letter:text-8xl first-letter:font-editorial first-letter:text-primary first-letter:float-left first-letter:pr-6 first-letter:mr-2">
                Founded on the principle that true luxury lies in simplicity, Red Studio emerged from a passion for capturing unscripted elegance. For over a decade, we have dedicated ourselves to the mastery of light, space, and human connection.
            </p>
            <p className="mt-8">
                Our studio was conceived not merely as a photography business, but as an atelier where milestones are immortalized in their truest essence. We draw deep inspiration from high editorial fashion, architectural symmetry, and the classical painters of the Renaissance who understood that shadows are just as vital as light.
            </p>
            <p className="mt-8">
                To work with Red Studio is to surrender to an experience. We believe that the best imagery comes not from elaborate posing, but from a state of comfortable vulnerability. Our approach is quiet, intentional, and overwhelmingly focused on the narrative that unfolds naturally in front of our lenses. 
            </p>
            <motion.blockquote 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="border-l-4 border-primary pl-8 my-16 py-4 text-3xl italic font-serif text-on-surface bg-gradient-to-r from-primary/5 to-transparent"
            >
                "We do not take photographs. We curate the light that is already falling upon you." <br/>
                <span className="text-sm font-sans uppercase tracking-[0.3em] text-primary mt-6 block font-bold">- Founder, L.G.</span>
            </motion.blockquote>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
