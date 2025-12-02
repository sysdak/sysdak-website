import React from 'react';
import HeroPremium from '../components/sections/HeroPremium';
import TrustSignals from '../components/sections/TrustSignals';
import Container from '../components/ui/Container';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, Star, TrendingUp, Users, Award, ArrowRight, Sparkles, Shield } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { fadeInUp, staggerContainer } from '../utils/animations';

const HomePremium: React.FC = () => {
  
  const services = [
    {
      icon: <Sparkles size={32} />,
      title: 'Digital Transformation',
      description: 'Comprehensive digital solutions to modernize your business operations',
      features: ['Cloud Migration', 'Process Automation', 'API Integration']
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity Solutions',
      description: 'Enterprise-grade security to protect your digital assets',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management']
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization']
    },
    {
      icon: <Users size={32} />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive business growth',
      features: ['Technology Strategy', 'Digital Roadmap', 'Expert Advisory']
    }
  ];

  const achievements = [
    {
      icon: <Award size={24} />,
      title: 'Expert Team',
      description: '150+ certified professionals',
      stat: '15+ Years'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Proven Excellence',
      description: '750+ successful implementations',
      stat: '95% Success'
    },
    {
      icon: <Users size={24} />,
      title: 'Client Satisfaction',
      description: 'Building lasting partnerships',
      stat: '5-Star Rating'
    },
    {
      icon: <Star size={24} />,
      title: 'Industry Leader',
      description: 'Recognized for innovation',
      stat: '50+ Awards'
    }
  ];

  
  return (
    <>
      <HeroPremium />

  
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to accelerate your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card-premium hover-lift group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <Card.Content className="p-8">
                    <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-700">
                          <CheckCircle size={16} className="text-primary-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-800/20 rounded-full filter blur-3xl"
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
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full filter blur-3xl"
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
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Sysdak Technologies
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-blue-300 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-400">
                    {item.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
        <Container>
          {/* Background decoration */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
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
              className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700/10 rounded-full filter blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 5
              }}
            />
          </div>

          <motion.div
            className="text-center max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto drop-shadow-lg">
              Join hundreds of satisfied clients who have transformed their operations with our innovative IT solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={() => window.location.href = '/contact'}
                  className="btn-premium text-lg px-10 py-4"
                >
                  Schedule a Consultation
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-premium-outline text-lg px-10 py-4 border-white/20 text-white hover:bg-white hover:text-primary-900"
                >
                  View Portfolio
                </Button>
              </motion.div>
            </div>

            {/* Contact info */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>No obligation consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Custom solutions guaranteed</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default HomePremium;