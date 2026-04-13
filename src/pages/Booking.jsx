import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: 'Weddings', date: '', message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
        setStatus('Your timeless session has been requested. We will connect with you shortly.');
        setFormData({ name: '', email: '', phone: '', service: 'Weddings', date: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20 px-8 min-h-screen bg-surface flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 w-full">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="md:w-5/12 space-y-10">
          <motion.div variants={fadeUp} className="space-y-4">
              <span className="font-label text-xs tracking-[0.4em] uppercase text-primary font-bold">Inquiries</span>
              <h1 className="editorial-title text-6xl md:text-8xl text-on-surface leading-tight">
                Reserve <br/> Your Legacy
              </h1>
              <div className="w-20 h-px bg-outline-variant mt-6"></div>
          </motion.div>
          
          <motion.p variants={fadeUp} className="font-body text-2xl text-on-surface-variant leading-relaxed font-light">
             Our calendar is highly curated. Connect with us to conceptualize and secure your visionary session.
          </motion.p>
          
          <motion.div variants={fadeUp} className="pt-8 space-y-4">
              <p className="font-label text-sm tracking-[0.2em] text-zinc-400 uppercase">hello@joystudio.com</p>
              <p className="font-label text-sm tracking-[0.2em] text-zinc-400 uppercase">+1 (555) 012-3456</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-7/12"
        >
          <div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl shadow-2xl shadow-primary/5 border border-surface-container-low">
              {status && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-8 p-4 bg-primary/10 border border-primary/20 rounded text-primary font-body text-sm">
                    {status}
                </motion.div>
              )}
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2 group">
                    <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Full Name</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 text-on-surface" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                        <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Email</label>
                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 text-on-surface" />
                    </div>
                    <div className="space-y-2 group">
                        <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Phone</label>
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 text-on-surface" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2 group">
                        <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Service Focus</label>
                        <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 text-on-surface appearance-none cursor-pointer">
                            <option>Weddings</option>
                            <option>Baby</option>
                            <option>Model Shoots</option>
                            <option>Cinematic Video</option>
                        </select>
                    </div>
                    <div className="space-y-2 group">
                        <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Preferred Date</label>
                        <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 text-on-surface" />
                    </div>
                </div>
                <div className="space-y-2 group">
                    <label className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant group-focus-within:text-primary transition-colors">Vision & Details</label>
                    <textarea rows="4" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-surface-container-high/30 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 text-on-surface resize-none"></textarea>
                </div>
                <div className="pt-4">
                    <button type="submit" className="w-full relative overflow-hidden group bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded text-sm font-label tracking-[0.3em] uppercase font-bold shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all">
                        <span className="relative z-10">Submit Request</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    </button>
                </div>
              </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
