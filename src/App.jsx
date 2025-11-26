<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import EmployeeDashboard from './pages/EmployeeDashboard';
import OrdersDashboard from './pages/OrdersDashboard';

import ReservationDashboard from './pages/ReservationDashboard';
import FoodCategoryDashboard from './pages/FoodCategoryDashboard';
import FoodItemsDashboard from './pages/FoodItemsDashboard';
import ContactDashboard from './pages/ContactDashboard';
=======
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SignatureDishes from './components/SignatureDishes';
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
      <SignatureDishes />
      <AboutStory />
      <ExperienceHighlights />
      <Testimonials />
    </>
  );
}
>>>>>>> a891032ef8186442230062a313fc06b16f614fae

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/orders" replace />} />
          <Route path="employees" element={<EmployeeDashboard />} />
          <Route path="orders" element={<OrdersDashboard />} />
          <Route path="orders" element={<OrdersDashboard />} />
          <Route path="reservations" element={<ReservationDashboard />} />
          <Route path="categories" element={<FoodCategoryDashboard />} />
          <Route path="menu-items" element={<FoodItemsDashboard />} />
          <Route path="messages" element={<ContactDashboard />} />
        </Route>
      </Routes>
=======
      <div className="bg-primary-dark text-white overflow-hidden">
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
>>>>>>> a891032ef8186442230062a313fc06b16f614fae
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a891032ef8186442230062a313fc06b16f614fae
