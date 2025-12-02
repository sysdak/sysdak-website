import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Cloud, Brain, Cpu, ChevronRight, Star, Users, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const HeroSysdak: React.FC = () => {
  return (
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
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 mt-4 leading-tight"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <span className="block mb-3">Innovating Systems.</span>
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Empowering Businesses.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Sysdak Inc delivers smart software solutions for a connected world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Button
                size="lg"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                onClick={() => window.location.href = '/contact'}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-10 py-4 rounded-full transition-all duration-300"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-gradient-to-b from-slate-400 to-transparent rounded-full mt-3"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSysdak;