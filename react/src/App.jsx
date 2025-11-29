// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import ExperienceHighlights from './components/ExperienceHighlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import CafeOrderPage from './pages/CafeOrderPage';
import DeliveryOrderPage from './pages/DeliveryOrderPage';

function HomePage() {
  return (
    <>
      <Hero />
      <AboutStory />
      <ExperienceHighlights />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-black text-white overflow-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/order/cafe" element={<CafeOrderPage />} />
          <Route path="/order/delivery" element={<DeliveryOrderPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;