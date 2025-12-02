import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { fadeInUp, slideInDown } from '../../utils/animations';

const NavbarPremium: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Removed isScrolled state since header is now permanently white
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu: string) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  // Removed scroll effect since header is permanently white

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Solutions',
      path: '/solutions',
      dropdown: [
        { name: 'IT Consulting', path: '/solutions/consulting' },
        { name: 'Cloud Solutions', path: '/solutions/cloud' },
        { name: 'Cybersecurity', path: '/solutions/security' },
        { name: 'Data Analytics', path: '/solutions/analytics' }
      ]
    },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Software Development', path: '/services/development' },
        { name: 'Infrastructure Management', path: '/services/infrastructure' },
        { name: 'Digital Transformation', path: '/services/transformation' },
        { name: '24/7 Support', path: '/services/support' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      className="fixed w-full z-50 bg-white shadow-premium border-b border-neutral-200"
      initial="hidden"
      animate="visible"
      variants={slideInDown}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Premium Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Sysdak Inc
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                className="relative group"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => link.dropdown && toggleDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setIsDropdownOpen(null)}
              >
                {link.dropdown ? (
                  <button
                    className={`flex items-center space-x-1 text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                      location.pathname.startsWith(link.path) ||
                      (link.name === 'Solutions' && location.pathname.startsWith('/solutions')) ||
                      (link.name === 'Services' && location.pathname.startsWith('/services'))
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'
                        : 'text-neutral-700 hover:text-primary-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isDropdownOpen === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                      location.pathname === link.path
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600'
                        : 'text-neutral-700 hover:text-primary-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Premium Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {isDropdownOpen === link.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-white rounded-2xl shadow-premium border border-neutral-200 overflow-hidden">
                          {link.dropdown.map((item, idx) => (
                            <motion.div
                              key={item.name}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                to={item.path}
                                className={`block px-6 py-4 text-sm font-medium transition-all duration-200 ${
                                  location.pathname === item.path
                                    ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 font-semibold'
                                    : 'text-neutral-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-primary-700'
                                }`}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Premium CTA Button for Desktop */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="btn-premium text-sm px-6 py-3 shadow-premium"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="lg:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl transition-all duration-300 text-neutral-800 hover:bg-neutral-100"
              aria-label="Toggle menu"
            >
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-premium border-t border-neutral-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                          location.pathname.startsWith(link.path) ||
                          (link.name === 'Solutions' && location.pathname.startsWith('/solutions')) ||
                          (link.name === 'Services' && location.pathname.startsWith('/services'))
                            ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700'
                            : 'text-neutral-800 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            isDropdownOpen === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen === link.name && (
                          <motion.div
                            className="pl-4 mt-2 space-y-1"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.dropdown.map((item, idx) => (
                              <motion.div
                                key={item.name}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  to={item.path}
                                  className={`block px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                                    location.pathname === item.path
                                      ? 'text-primary-700 bg-primary-50 font-semibold'
                                      : 'text-neutral-600 hover:text-primary-700 hover:bg-primary-50'
                                  }`}
                                >
                                  {item.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700'
                          : 'text-neutral-800 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-primary-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 mt-4 border-t border-neutral-200"
              >
                <Link
                  to="/contact"
                  className="block w-full btn-premium text-center py-4"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavbarPremium;