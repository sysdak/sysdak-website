import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Sparkles, Zap, Shield, Globe, Database, Code, Users, BarChart3, Brain, GitBranch } from 'lucide-react';
import PremiumCard from '../ui/PremiumCard';
import PremiumButton from '../ui/PremiumButton';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies',
      features: [
        'Web Applications',
        'Mobile Development',
        'API Development',
        'Legacy System Modernization'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: [
        'Cloud Migration',
        'DevOps Implementation',
        'Serverless Architecture',
        'Multi-Cloud Strategy'
      ],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your digital assets',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        '24/7 Security Monitoring'
      ],
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: <Brain size={40} />,
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence for your business',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI-Powered Automation'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <GitBranch size={40} />,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent workflows',
      features: [
        'Process Automation',
        'Workflow Design',
        'Integration Solutions',
        'Performance Optimization',
        'Real-time Monitoring'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Users size={40} />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting for business growth',
      features: [
        'Digital Transformation',
        'Technology Strategy',
        'Process Optimization',
        'Change Management'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Globe size={40} />,
      title: 'Enterprise Integration',
      description: 'Seamless integration of systems and workflows',
      features: [
        'ERP Integration',
        'CRM Solutions',
        'API Management',
        'Legacy System Integration'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            End-to-end technology solutions designed to accelerate your digital transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <PremiumCard
                variant="default"
                hover={false}
                icon={service.icon}
                title={service.title}
                subtitle={service.description}
                className="h-full"
              >
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-700">
                      <ChevronRight size={16} className="text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <PremiumButton
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  className="w-full"
                >
                  Learn More
                </PremiumButton>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <PremiumButton
            variant="primary"
            size="lg"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            onClick={() => window.location.href = '/contact'}
          >
            Get a Custom Solution
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;