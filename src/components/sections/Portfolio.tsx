import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Software Development",
      description: "A scalable e-commerce solution with real-time inventory management and AI-powered recommendations.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Real-time Analytics", "Secure Payments", "Mobile Responsive", "API Integration"]
    },
    {
      title: "Cloud Migration System",
      category: "Cloud Integration",
      description: "Enterprise cloud migration platform that seamlessly transfers data and applications to AWS infrastructure.",
      technologies: ["AWS", "Docker", "Kubernetes", "Python"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Zero Downtime", "Auto-scaling", "Security First", "Cost Optimization"]
    },
    {
      title: "AI Analytics Dashboard",
      category: "AI & Automation",
      description: "Intelligent analytics platform that provides actionable insights from complex business data using machine learning.",
      technologies: ["TensorFlow", "Python", "React", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Predictive Analytics", "Real-time Processing", "Custom Reports", "Data Visualization"]
    },
    {
      title: "IT Infrastructure Audit",
      category: "IT Consulting",
      description: "Comprehensive infrastructure assessment and optimization strategy for a Fortune 500 company.",
      technologies: ["Enterprise Architecture", "Security Audits", "Cloud Strategy"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Security Assessment", "Performance Optimization", "Cost Analysis", "Strategic Planning"]
    },
    {
      title: "Healthcare Management System",
      category: "Software Development",
      description: "HIPAA-compliant healthcare management platform with patient records and appointment scheduling.",
      technologies: ["React", "HIPAA Compliance", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Patient Records", "Appointment Scheduling", "Telemedicine", "Billing System"]
    },
    {
      title: "Financial Automation Tool",
      category: "AI & Automation",
      description: "Automated financial analysis and reporting system that processes thousands of transactions daily.",
      technologies: ["Python", "Machine Learning", "AWS", "React"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Fraud Detection", "Automated Reporting", "Risk Assessment", "Compliance Tracking"]
    }
  ];

  return (
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
            Recent Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that demonstrate our expertise and commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {project.features.length > 2 && (
                    <div className="text-sm text-slate-500">
                      +{project.features.length - 2} more features
                    </div>
                  )}
                </div>

                </div>
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
          <div className="bg-gradient-to-r from-slate-100 to-blue-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our expertise and innovative approach.
            </p>
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
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-full"
              >
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Portfolio;