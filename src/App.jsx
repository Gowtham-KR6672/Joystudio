import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Services from './pages/Services';
import Video from './pages/Video';
import About from './pages/About';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery/:category?" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services/:id/:subId?" element={<Services />} />
          <Route path="/video/:category?" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
