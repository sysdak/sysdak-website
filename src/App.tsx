import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarPremium from './components/layout/NavbarPremium';
import FooterPremium from './components/layout/FooterPremium';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavbarPremium />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/development" element={<Services />} />
            <Route path="/services/infrastructure" element={<Services />} />
            <Route path="/services/transformation" element={<Services />} />
            <Route path="/services/support" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/consulting" element={<Solutions />} />
            <Route path="/solutions/cloud" element={<Solutions />} />
            <Route path="/solutions/security" element={<Solutions />} />
            <Route path="/solutions/analytics" element={<Solutions />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterPremium />
      </div>
    </Router>
  );
}

export default App;