import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, ArrowUp } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const FooterPremium: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'IT Consulting', path: '/services/consulting' },
    { name: 'Cloud Solutions', path: '/services/cloud' },
    { name: 'Cybersecurity', path: '/services/security' },
    { name: 'Software Development', path: '/services/development' },
    { name: 'Data Analytics', path: '/services/analytics' },
    { name: '24/7 Support', path: '/services/support' }
  ];

  const resources = [
    { name: 'Blog', path: '/blog' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'White Papers', path: '/white-papers' },
    { name: 'API Documentation', path: '/docs' },
    { name: 'Help Center', path: '/help' },
    { name: 'Community', path: '/community' }
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'GDPR Compliance', path: '/gdpr' },
    { name: 'Security', path: '/security' },
    { name: 'Sitemap', path: '/sitemap' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/sys-dak-5648b9356/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com', label: 'Instagram' }
  ];

  const companyInfo = {
    name: 'Sysdak Technologies',
    tagline: 'Digital Excellence Since 2009',
    description: 'Leading IT solutions provider delivering enterprise-grade technology consulting, custom software development, and innovative digital transformation services.',
    address: '62/18A Sathya Nagar, BK Pudur, Kuniamuthur, Coimbatore, Tamil Nadu 641030, India',
    phone: '+91 8946060246',
    email: 'syscatch0@gmail.com'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        {/* Sophisticated pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        {/* Animated gradients */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-600/10 to-teal-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 10
          }}
        />
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-primary-600 to-secondary-600 p-4 rounded-full shadow-premium hover:shadow-accent transition-all duration-300 group"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp
          size={24}
          className="text-white group-hover:translate-y-[-2px] transition-transform duration-300"
        />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-20">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeInUp}
            >
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Sysdak Inc
                </h3>
                <p className="text-blue-200 text-sm font-medium mb-2">
                  {companyInfo.tagline}
                </p>
              </div>

              <p className="text-blue-100/80 mb-8 leading-relaxed text-sm">
                {companyInfo.description}
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <motion.div
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-100/80 text-sm leading-relaxed">
                    {companyInfo.address}
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="text-blue-100/80 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {companyInfo.phone}
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-blue-100/80 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {companyInfo.email}
                  </a>
                </motion.div>
              </div>

              </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className="text-blue-100/80 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-white mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={service.path}
                      className="text-blue-100/80 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Legal */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-bold text-white mb-6">
                Resources
              </h3>
              <ul className="space-y-3 mb-8">
                {resources.slice(0, 4).map((resource, index) => (
                  <motion.li
                    key={resource.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={resource.path}
                      className="text-blue-100/80 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {resource.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-white mb-6">
                Legal
              </h3>
              <ul className="space-y-3">
                {legal.slice(0, 3).map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="text-blue-100/80 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-white/10 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-blue-100/80 mb-8">
              Subscribe to our newsletter for the latest insights and technology updates.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-premium-dark flex-1"
                required
              />
              <motion.button
                type="submit"
                className="btn-premium flex items-center justify-center px-6 py-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} className="mr-2" />
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-blue-100/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p>
                © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
              </p>
              <p className="mt-1 text-xs">
                Crafted with precision and excellence.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-blue-200 group-hover:text-cyan-400 transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Bottom Links */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {legal.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-blue-100/60 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </footer>
  );
};

export default FooterPremium;