import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Zap, Shield, Database, Cloud, ArrowRight, CheckCircle, Clock, Users, Target } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies to solve your unique business challenges and drive digital innovation.",
      features: [
        "Web & Mobile Application Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization",
        "Quality Assurance & Testing",
        "Agile Development Methodology"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure services to ensure optimal performance, scalability, and reliability of your technology systems.",
      features: [
        "Network Design & Implementation",
        "Server Management & Optimization",
        "Cloud Infrastructure Setup",
        "Backup & Disaster Recovery",
        "System Monitoring & Maintenance",
        "Performance Optimization"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "Strategic digital transformation initiatives to modernize your business processes and accelerate your journey to digital excellence.",
      features: [
        "Digital Strategy Development",
        "Process Automation",
        "Cloud Migration Planning",
        "Legacy System Integration",
        "Change Management",
        "Digital Roadmap Creation"
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance services to ensure your business operations run smoothly without interruption.",
      features: [
        "24/7 Help Desk Support",
        "Remote & On-site Assistance",
        "Proactive System Monitoring",
        "Emergency Response Services",
        "Preventive Maintenance",
        "Service Level Agreements (SLAs)"
      ],
      color: "from-red-500 to-red-700"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current infrastructure and business requirements to identify opportunities for improvement and growth."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our team designs customized solutions tailored to your specific needs, budget, and technical requirements."
    },
    {
      step: "03",
      title: "Implementation & Deployment",
      description: "We implement the solution using industry best practices with minimal disruption to your business operations."
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing support and continuous optimization to ensure maximum performance and return on investment."
    }
  ];

  const industries = [
    { name: "Healthcare", description: "HIPAA-compliant solutions for medical practices and hospitals" },
    { name: "Finance", description: "Secure and compliant IT services for financial institutions" },
    { name: "Manufacturing", description: "Industrial automation and supply chain optimization" },
    { name: "Retail", description: "E-commerce platforms and retail technology solutions" },
    { name: "Education", description: "Learning management systems and educational technology" },
    { name: "Professional Services", description: "Productivity tools for consulting and service firms" }
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
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              <span className="block mb-2">Professional Services</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                For Modern Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services and solutions designed to accelerate your digital transformation and drive business success.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
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

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to address your unique business challenges and drive meaningful results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <Container>
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We follow a systematic approach to ensure successful service delivery and optimal results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>

            {process.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-2xl mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-gray-200">
                    <span className="text-sm font-bold text-gray-700">{item.title}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specialized IT solutions tailored to the unique challenges and requirements of different industry sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{industry.name}</h3>
                <p className="text-slate-600 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <Container>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive innovation in your organization.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-4 rounded-full"
                >
                  Start Your Project
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-4 rounded-full"
                >
                  Schedule Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Services;