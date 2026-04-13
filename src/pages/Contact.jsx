import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
        setStatus('Message received. We will respond within 24 hours.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20 px-8 min-h-screen bg-surface flex flex-col justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 lg:gap-32 w-full">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="md:w-5/12 space-y-12">
            <motion.div variants={fadeUp} className="space-y-6">
                <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">Reach Out</span>
                <h1 className="editorial-title text-6xl md:text-7xl text-on-surface">General Inquiries</h1>
                <div className="w-20 h-px bg-outline-variant"></div>
            </motion.div>
            <motion.p variants={fadeUp} className="font-body text-xl text-on-surface-variant leading-relaxed font-light">
             For press, collaborations, and all non-booking inquiries, please use the form or reach us directly via the addresses below.
            </motion.p>
            <motion.div variants={staggerContainer} className="pt-4 space-y-8">
               <motion.div variants={fadeUp} className="group">
                  <h4 className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-3">Email</h4>
                  <a href="mailto:gowthamkr6672@gmail.com" className="font-body text-lg text-on-surface hover:text-primary transition-colors block transform group-hover:translate-x-2 duration-300">gowthamkr6672@gmail.com</a>
               </motion.div>
               <motion.div variants={fadeUp} className="group">
                  <h4 className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-3">Call Us</h4>
                  <a href="tel:+916384183245" className="flex items-center gap-3 font-body text-lg text-on-surface hover:text-primary transform group-hover:translate-x-2 transition-all duration-300">
                     <FaPhoneAlt size={16} /> +91 63841 83245
                  </a>
               </motion.div>
               <motion.div variants={fadeUp} className="group">
                  <h4 className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-4">Connect</h4>
                  <div className="flex gap-6 mt-2 transform group-hover:translate-x-2 transition-transform duration-300">
                      <a href="https://www.instagram.com/joys_tudio?igsh=MTFqZTFieXZkZm13NQ==" target="_blank" rel="noreferrer" className="text-on-surface hover:text-primary transition-colors flex items-center gap-2 font-body text-lg">
                         <FaInstagram size={20} /> Instagram
                      </a>
                      <a href="https://wa.me/916384183245" target="_blank" rel="noreferrer" className="text-on-surface hover:text-primary transition-colors flex items-center gap-2 font-body text-lg">
                         <FaWhatsapp size={22} /> WhatsApp
                      </a>
                  </div>
               </motion.div>
               <motion.div variants={fadeUp} className="group pb-8">
                  <h4 className="font-label text-xs tracking-[0.3em] uppercase text-primary mb-3">Studio Location</h4>
                  <p className="font-body text-lg text-on-surface leading-relaxed transform group-hover:translate-x-2 transition-transform duration-300">123 Joy Ave,<br/>Creative District, NY 10012</p>
                  <p className="font-body text-xs text-zinc-500 mt-3 italic">*By appointment only</p>
               </motion.div>
            </motion.div>
        </motion.div>

        <div className="md:w-7/12">
             <motion.form 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit} 
                className="bg-surface-container-lowest p-10 md:p-14 rounded-xl shadow-2xl shadow-primary/5 space-y-8"
             >
                {status && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-primary/10 border border-primary/20 rounded text-primary font-body text-sm">
                        {status}
                    </motion.div>
                )}
                <div className="space-y-2 group">
                    <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Name</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 text-on-surface transition-all duration-300 placeholder-transparent" placeholder="Name" />
                </div>
                <div className="space-y-2 group">
                    <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Email</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 text-on-surface transition-all duration-300" />
                </div>
                <div className="space-y-2 group">
                    <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Subject</label>
                    <input required type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 text-on-surface transition-all duration-300" />
                </div>
                <div className="space-y-2 group">
                    <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Message</label>
                    <textarea required rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 text-on-surface resize-none transition-all duration-300"></textarea>
                </div>
                <button type="submit" className="w-full relative overflow-hidden group bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded text-sm font-label tracking-[0.3em] uppercase font-bold shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all mt-4">
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </button>
             </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
