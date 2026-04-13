import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 w-full mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 border-t border-zinc-200/50 dark:border-zinc-800/50">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="text-lg font-serif text-primary dark:text-primary-container">Joy Studio</div>
          <p className="font-sans text-xs tracking-wider text-zinc-500 leading-relaxed max-w-xs">
            The premier destination for high-end editorial photography and cinematic storytelling.
          </p>
          <div className="flex gap-6 pt-2">
            <a className="text-primary hover:text-primary-container transition-transform hover:-translate-y-1" href="tel:+916384183245" title="Call Us"><FaPhoneAlt size={20} /></a>
            <a className="text-primary hover:text-primary-container transition-transform hover:-translate-y-1" href="mailto:gowthamkr6672@gmail.com" title="Email Us"><FaEnvelope size={22} /></a>
            <a className="text-primary hover:text-primary-container transition-transform hover:-translate-y-1" href="https://www.instagram.com/joys_tudio?igsh=MTFqZTFieXZkZm13NQ==" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram size={22} /></a>
            <a className="text-primary hover:text-primary-container transition-transform hover:-translate-y-1" href="https://wa.me/916384183245" target="_blank" rel="noreferrer" title="WhatsApp"><FaWhatsapp size={24} /></a>
          </div>
        </div>
        {/* Links Column */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-wider text-zinc-400 uppercase font-bold">Studio</h4>
            <nav className="flex flex-col gap-3">
              <Link className="text-zinc-500 font-sans text-xs tracking-wider hover:text-primary underline-offset-4 hover:underline" to="/services/weddings">Weddings</Link>
              <Link className="text-zinc-500 font-sans text-xs tracking-wider hover:text-primary underline-offset-4 hover:underline" to="/services/baby">Baby</Link>
              <Link className="text-zinc-500 font-sans text-xs tracking-wider hover:text-primary underline-offset-4 hover:underline" to="/gallery">Gallery</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-sans text-xs tracking-wider text-zinc-400 uppercase font-bold">Support</h4>
            <nav className="flex flex-col gap-3">
              <Link className="text-zinc-500 font-sans text-xs tracking-wider hover:text-primary underline-offset-4 hover:underline" to="/video">Video</Link>
              <Link className="text-zinc-500 font-sans text-xs tracking-wider hover:text-primary underline-offset-4 hover:underline" to="/contact">Contact</Link>
              <Link className="text-zinc-500 font-sans text-xs tracking-wider hover:text-primary underline-offset-4 hover:underline" to="/privacy">Privacy</Link>
            </nav>
          </div>
        </div>
        {/* Newsletter/Location Column */}
        <div className="space-y-6">
          <h4 className="font-sans text-xs tracking-wider text-zinc-400 uppercase font-bold">Inquiries</h4>
          <div className="space-y-2">
            <a href="mailto:gowthamkr6672@gmail.com" className="font-sans text-xs tracking-wider text-zinc-500 hover:text-primary block">gowthamkr6672@gmail.com</a>
            <a href="tel:+916384183245" className="font-sans text-xs tracking-wider text-zinc-500 hover:text-primary block">+91 63841 83245</a>
          </div>
          <div className="pt-4">
            <p className="font-sans text-[10px] tracking-widest text-zinc-400 uppercase">© {new Date().getFullYear()} Joy Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
