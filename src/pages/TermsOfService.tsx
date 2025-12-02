import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertCircle, Mail, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { fadeInUp } from '../utils/animations';

const TermsOfService: React.FC = () => {
  const sections = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "1. Acceptance of Terms",
      content: "By accessing or using our website, products, or services, you agree to comply with and be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "2. Use of Our Services",
      content: "You agree to use our website and services only for lawful purposes and in accordance with these Terms. You may not:\n\n• Violate any local or international laws\n• Attempt to hack, overload, or disrupt our systems\n• Copy or resell our content without permission\n• Use our services for any fraudulent or unauthorized purpose\n• Interfere with or disrupt other users' enjoyment of our services"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "3. Intellectual Property",
      content: "All logos, text, designs, software, and other content on our website are the property of Sysdak Inc and are protected by intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as permitted by law or with our prior written consent."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "4. Third-Party Links",
      content: "Our website may contain links to external websites that are not operated by us. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. We encourage you to review the privacy policies and terms of service of any third-party sites you visit."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5. Limitation of Liability",
      content: "To the maximum extent permitted by law, Sysdak Inc shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our website or services."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "6. Termination",
      content: "We reserve the right to suspend or terminate your access to our website and services at any time, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the services will cease immediately."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "7. Changes to Terms",
      content: "We may update these Terms of Service from time to time. The updated version will be indicated by a revised 'Last updated' date and the updated version will be effective as soon as it is accessible. Your continued use of our website and services after any changes constitutes acceptance of the new terms."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "8. Contact Information",
      content: "If you have any questions about these Terms of Service, please contact us at:\n\n📧 support@sysdak.com\n\nOr visit our contact page for more ways to reach us."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-20">
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
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl p-4">
                <FileText className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="block mb-2">Terms of Service</span>
              <span className="block text-2xl md:text-3xl font-normal text-slate-600">
                Sysdak Inc
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Last updated: October 27, 2025
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Welcome to Sysdak Inc ("we," "our," "us"). By accessing or using our website, products, or services, you agree to these Terms of Service. Please read them carefully.
              </p>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700 rounded-xl p-3">
                          {section.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {section.title}
                        </h3>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Have Questions?
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                If you have any questions about our Terms of Service or need clarification, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/privacy'}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-full"
                >
                  View Privacy Policy
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default TermsOfService;