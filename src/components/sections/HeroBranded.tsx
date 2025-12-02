import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star, Sparkles, Zap, Shield, Globe } from 'lucide-react';
import Button from '../ui/Button';
import { fadeInUp, scaleIn, slideInUp, floatAnimation } from '../../utils/animations';

const HeroBranded: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gradient-shift 20s linear infinite'
          }}
        />

        {/* Floating gradients */}
        <motion.div
          className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
          className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
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

      {/* Animated icons */}
      <motion.div
        className="absolute top-20 left-10 text-white/20"
        animate={floatAnimation}
      >
        <Zap size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-white/20"
        animate={floatAnimation}
        transition={{ duration: 4, delay: 1 }}
      >
        <Shield size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-white/20"
        animate={floatAnimation}
        transition={{ duration: 3.5, delay: 0.5 }}
      >
        <Globe size={44} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-32 text-white/20"
        animate={floatAnimation}
        transition={{ duration: 5, delay: 1.5 }}
      >
        <Sparkles size={36} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
  
          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
              Digital Future
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Empowering businesses with cutting-edge IT solutions,
            innovative software development, and reliable technology consulting
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-2xl font-semibold px-8 py-4 text-lg rounded-xl"
              >
                Get Started Today
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                icon={<Play size={20} />}
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-xl font-semibold"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: <CheckCircle size={24} />, text: "Verified Company" },
              { icon: <Star size={24} />, text: "5-Star Rating" },
              { icon: <Shield size={24} />, text: "100% Secure" },
              { icon: <Globe size={24} />, text: "Global Presence" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-2 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <span className="text-teal-300">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-white/20"
            variants={slideInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "200+", label: "Happy Clients" },
                { number: "10+", label: "Years Experience" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBranded;