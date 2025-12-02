import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star, Sparkles, Zap, Shield, Globe, Award, TrendingUp, Users } from 'lucide-react';
import Button from '../ui/Button';
import { fadeInUp, scaleIn, slideInUp, floatAnimation } from '../../utils/animations';

const HeroPremium: React.FC = () => {
  const floatingElements = [
    { icon: <Zap size={40} />, position: 'top-20 left-10', delay: 0 },
    { icon: <Shield size={48} />, position: 'top-40 right-20', delay: 1 },
    { icon: <Globe size={44} />, position: 'bottom-32 left-20', delay: 0.5 },
    { icon: <Sparkles size={36} />, position: 'bottom-20 right-32', delay: 1.5 },
    { icon: <Award size={42} />, position: 'top-60 left-1/4', delay: 2 },
    { icon: <TrendingUp size={38} />, position: 'bottom-40 right-1/4', delay: 2.5 }
  ];

  const trustIndicators = [
    { icon: <CheckCircle size={24} />, text: "ISO 27001 Certified" },
    { icon: <Star size={24} />, text: "Fortune 500 Trusted" },
    { icon: <Shield size={24} />, text: "SOC 2 Compliant" },
    { icon: <Globe size={24} />, text: "Global Leader" }
  ];

  const stats = [
    { number: "2,500+", label: "Enterprise Projects Delivered" },
    { number: "$250M+", label: "Client ROI Generated" },
    { number: "25+", label: "Years Global Experience" },
    { number: "15+", label: "Countries Served" }
  ];

  const values = [
    { icon: <Users size={32} />, title: "Global Expert Team", description: "500+ certified professionals" },
    { icon: <Award size={32} />, title: "Proven Excellence", description: "2,500+ enterprise implementations" },
    { icon: <TrendingUp size={32} />, title: "Strategic Partner", description: "98% enterprise client retention" },
    { icon: <Star size={32} />, title: "Industry Leader", description: "50+ innovation excellence awards" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 pt-20">
      {/* Premium animated background */}
      <div className="absolute inset-0">
        {/* Sophisticated grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gradient-shift 30s linear infinite'
          }}
        />

        {/* Premium floating gradients */}
        <motion.div
          className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-blue-800/30 to-blue-700/30 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, -150, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, -150, 0],
            y: [0, -150, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-blue-950/30 to-blue-900/30 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 150, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 10
          }}
        />

        {/* Floating icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-white/10`}
            animate={floatAnimation}
            transition={{ duration: 4 + index, delay: element.delay }}
          >
            {element.icon}
          </motion.div>
        ))}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
  
          {/* Premium main heading */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <span className="block mb-2">Enterprise Technology</span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Leadership
            </span>
          </motion.h1>

          {/* Premium subheading */}
          <motion.p
            className="text-2xl md:text-3xl text-blue-200/90 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Empowering global enterprises with cutting-edge digital transformation,
            strategic innovation, and proven technology excellence for over 25 years
          </motion.p>

          {/* Premium CTA Buttons */}
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
                className="btn-premium text-lg px-10 py-4 group-hover:shadow-premium-glow"
              >
                Schedule Enterprise Consultation
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="lg"
                icon={<Play size={20} />}
                className="btn-premium-outline text-lg px-10 py-4 border-white/20 text-white hover:bg-white hover:text-slate-900"
              >
                View Enterprise Solutions
              </Button>
            </motion.div>
          </motion.div>

          {/* Premium trust indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-3 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <span className="text-blue-400">{indicator.icon}</span>
                <span className="font-medium tracking-wide">{indicator.text}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Unified Stats & Values Section */}
      <div className="relative mt-20 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Stats Container */}
          <motion.div
            className="bg-white/3 backdrop-blur-2xl rounded-3xl p-8 md:p-16 border border-white/5 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-blue-200 text-sm uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Elegant Divider */}
            <div className="relative h-px mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-blue-100 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-blue-300/70 text-sm group-hover:text-blue-200 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-3"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroPremium;