import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Container from '../ui/Container';
import { Server, Code, Cloud, Shield, Database, BarChart3, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInUp, pulseAnimation, glowAnimation } from '../../utils/animations';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link to={link} className="block h-full">
        <Card className="h-full group">
          <Card.Content>
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.div>
            <Card.Title className="group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </Card.Title>
            <Card.Description className="mb-4">{description}</Card.Description>
            <motion.div
              className="flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              Learn more <ArrowRight size={16} className="ml-1" />
            </motion.div>
          </Card.Content>
        </Card>
      </Link>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Software Development',
      description: 'Custom software solutions built with modern technologies to solve your unique business challenges.',
      link: '/services#software'
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Integration',
      description: 'Seamless cloud migration and management solutions that scale with your business.',
      link: '/services#cloud'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'AI & Automation',
      description: 'Harness artificial intelligence and automation to transform your business processes.',
      link: '/services#ai'
    },
    {
      icon: <Server size={24} />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive digital transformation and informed decisions.',
      link: '/services#consulting'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50" id="services">
      <Container>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <Link to={service.link} className="block h-full">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3 inline-flex mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive innovation in your organization.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Today <ArrowRight size={20} className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;