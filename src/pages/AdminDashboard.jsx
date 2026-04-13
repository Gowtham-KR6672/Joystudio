import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') setIsAuthenticated(true);
  };

  if (!isAuthenticated) return (
    <div className="min-h-screen pt-32 pb-20 px-8 bg-surface flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-surface-container-lowest p-12 rounded-lg shadow-xl shadow-primary/5 w-full max-w-sm space-y-6">
             <h1 className="editorial-title text-3xl text-center text-primary mb-6">Studio Access</h1>
             <input required type="password" placeholder="Passcode" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-surface-container-high/50 border-b border-outline/30 px-4 py-3 focus:outline-none focus:border-primary text-on-surface text-center tracking-[0.2em]" />
             <button className="w-full bg-primary text-on-primary py-3 rounded text-sm font-label tracking-widest uppercase mt-4">Enter</button>
        </form>
    </div>
  );

  return (
    <div className="pt-32 pb-20 px-8 min-h-screen bg-surface">
      <div className="max-w-6xl mx-auto space-y-16">
         <div className="flex justify-between items-end border-b border-outline-variant/30 pb-6">
            <div>
               <span className="font-label text-xs tracking-[0.3em] uppercase text-primary font-bold">Admin Portal</span>
               <h1 className="editorial-title text-4xl text-on-surface mt-2">Dashboard Overview</h1>
            </div>
            <button onClick={() => setIsAuthenticated(false)} className="text-zinc-500 hover:text-primary font-label text-xs uppercase tracking-widest">Logout</button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Total Inquiries', 'Pending Bookings', 'Gallery Size'].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*0.1 }} className="p-8 bg-surface-container-low rounded-lg border border-outline-variant/20">
                    <h4 className="font-label text-xs uppercase tracking-widest text-zinc-500">{stat}</h4>
                    <p className="editorial-title text-5xl text-primary mt-4">{Math.floor(Math.random() * 50) + 12}</p>
                </motion.div>
            ))}
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-6">
                 <h3 className="editorial-title text-2xl text-on-surface">Recent Bookings</h3>
                 <div className="space-y-4">
                     {[1,2,3].map(item => (
                         <div key={item} className="p-4 border border-outline-variant/20 rounded flex justify-between items-center text-sm">
                             <div>
                                 <p className="font-bold text-on-surface">E. Rostova</p>
                                 <p className="text-zinc-500 font-label">Wedding &bull; Oct 12, 2026</p>
                             </div>
                             <span className="px-3 py-1 bg-surface-container text-xs text-zinc-600 rounded-full font-label tracking-widest uppercase">Pending</span>
                         </div>
                     ))}
                 </div>
             </div>
             <div className="space-y-6">
                 <h3 className="editorial-title text-2xl text-on-surface">Quick Actions</h3>
                 <div className="grid grid-cols-2 gap-4">
                     <button className="p-6 bg-surface-container-low border border-outline-variant/20 hover:border-primary transition-colors rounded flex flex-col items-center justify-center gap-3">
                         <span className="material-symbols-outlined text-primary">add_a_photo</span>
                         <span className="font-label text-xs uppercase tracking-widest">Upload Work</span>
                     </button>
                     <button className="p-6 bg-surface-container-low border border-outline-variant/20 hover:border-primary transition-colors rounded flex flex-col items-center justify-center gap-3">
                         <span className="material-symbols-outlined text-primary">edit_calendar</span>
                         <span className="font-label text-xs uppercase tracking-widest">Schedule</span>
                     </button>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
