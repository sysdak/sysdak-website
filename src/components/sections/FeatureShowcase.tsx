import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import { fadeInUp, slideInUp, staggerContainer, floatAnimation } from '../../utils/animations';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, link }) => {
  return (
    <motion.div
      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      whileHover={{ y: -10 }}
      variants={fadeInUp}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <motion.div
          className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ x: 5 }}
        >
          Learn more <ArrowRight size={16} className="ml-1" />
        </motion.div>
      )}
    </motion.div>
  );
};

const FeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Optimized performance with blazing fast load times and smooth interactions.',
      link: '/features/performance'
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and regular backups.',
      link: '/features/security'
    },
    {
      icon: <Users size={32} />,
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless teamwork and real-time communication.',
      link: '/features/collaboration'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Growth Analytics',
      description: 'Comprehensive analytics and insights to drive your business forward.',
      link: '/features/analytics'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20"
        animate={floatAnimation}
        transition={{ duration: 6, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-20"
        animate={floatAnimation}
        transition={{ duration: 8, delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CheckCircle size={20} className="mr-2" />
            Why Choose Us
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Everything You Need in One Place
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Powerful features designed to help your business grow and succeed in the digital world.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'Support' },
            { number: '50K+', label: 'Happy Clients' },
            { number: '10M+', label: 'Transactions' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
              variants={slideInUp}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcase;