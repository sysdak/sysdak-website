import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Mail, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { fadeInUp } from '../utils/animations';

const NotFound: React.FC = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const popularPages = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-20">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-full filter blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 10
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Error Code */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative inline-block">
                <div className="text-8xl md:text-9xl font-bold text-blue-100 select-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <AlertCircle className="w-20 h-20 md:w-24 md:h-24 text-blue-300" />
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for doesn't exist or has been moved.
                Don't worry, we'll help you get back on track.
              </p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  size="lg"
                  icon={<Home size={20} />}
                  onClick={handleGoHome}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Go Home
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<ArrowLeft size={20} />}
                  onClick={handleGoBack}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-10 py-4 rounded-full transition-all duration-300"
                >
                  Go Back
                </Button>
              </motion.div>
            </motion.div>

            {/* Search and Suggestions */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl p-4 mx-auto mb-6">
                <Search className="w-8 h-8" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What were you looking for?
              </h2>
              <p className="text-slate-600 mb-8">
                Try searching for what you need or browse our popular pages below.
              </p>

              {/* Quick Links */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {popularPages.map((page, index) => (
                  <motion.a
                    key={index}
                    href={page.path}
                    className="block px-4 py-3 bg-gradient-to-r from-slate-50 to-blue-50 text-slate-700 hover:text-blue-700 hover:from-blue-50 hover:to-cyan-50 rounded-xl text-center font-medium transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {page.name}
                  </motion.a>
                ))}
              </div>

              {/* Contact Support */}
              <div className="border-t border-slate-200 pt-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Still can't find what you're looking for?
                </h3>
                <p className="text-slate-600 mb-6">
                  Our support team is here to help you find exactly what you need.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Mail size={20} />}
                  onClick={() => window.location.href = '/contact'}
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  Contact Support
                </Button>
              </div>
            </motion.div>

            {/* Additional Help */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-slate-500 mb-4">
                Error Code: <span className="font-mono bg-slate-100 px-2 py-1 rounded">404</span>
              </p>
              <p className="text-sm text-slate-400">
                If you believe this is an error, please{' '}
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 underline transition-colors"
                >
                  contact our support team
                </a>
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;