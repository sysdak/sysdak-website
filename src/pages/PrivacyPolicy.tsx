import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Eye, Users, Mail, ArrowRight, CheckCircle, FileText } from 'lucide-react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { fadeInUp } from '../utils/animations';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "1. Information We Collect",
      content: "We may collect the following information:\n\n• Personal Information: Name, email address, phone number, and other contact details when you contact us, register for our services, or fill out forms on our website.\n• Technical Data: IP address, browser type, operating system, device information, and usage patterns.\n• Usage Information: Pages visited, time spent on pages, click patterns, and other navigation data.\n• Cookies and Tracking Data: Information collected through cookies and similar technologies to improve your experience."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "2. How We Use Information",
      content: "We use your data to:\n\n• Provide and improve our services and customer support\n• Respond to your messages, inquiries, and service requests\n• Send updates, newsletters, or promotional content (only with your consent)\n• Analyze website usage and improve user experience\n• Ensure website security and prevent fraud\n• Comply with legal obligations and protect our rights"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "3. Data Protection",
      content: "We take data protection seriously and implement appropriate security measures:\n\n• Secure servers with encryption technology\n• Regular security audits and updates\n• Access controls and authentication systems\n• Employee training on data privacy and security\n• Data backup and recovery systems\n• Compliance with industry security standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "4. Sharing Information",
      content: "We do not sell, rent, or trade your personal information. We only share information under the following circumstances:\n\n• With trusted service providers that help us operate our business (e.g., hosting, email services)\n• When required by law or to protect our rights and safety\n• With your explicit consent\n• In connection with a business merger or acquisition (with appropriate safeguards)"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "5. Cookies and Tracking",
      content: "We use cookies and similar tracking technologies to:\n\n• Remember your preferences and settings\n• Analyze website traffic and usage patterns\n• Personalize content and improve user experience\n• Provide security features and prevent fraud\n\nYou can control cookies through your browser settings, but disabling cookies may affect some website features."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "6. Your Rights",
      content: "You have the right to:\n\n• Access your personal data we hold\n• Request correction of inaccurate information\n• Request deletion of your personal data\n• Object to processing of your data\n• Request data portability\n• Withdraw consent at any time\n\nTo exercise these rights, contact us at privacy@sysdak.com"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "7. Data Retention",
      content: "We retain personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "8. International Data Transfers",
      content: "If you are located outside India, please be aware that your information may be transferred to, stored, and processed in India and other countries where our service providers operate. We ensure appropriate safeguards are in place for international data transfers."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "9. Policy Updates",
      content: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated version will be indicated by a revised 'Last updated' date and will be effective immediately upon posting. We encourage you to review this policy regularly."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "10. Contact Information",
      content: "For privacy-related concerns or to exercise your rights, please contact us at:\n\n📧 privacy@sysdak.com\n\nOr visit our contact page for more ways to reach us. We will respond to your privacy inquiries within 30 days."
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
                <Shield className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="block mb-2">Privacy Policy</span>
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
                This Privacy Policy explains how Sysdak Inc collects, uses, and protects your information when you use our website and services. We are committed to protecting your privacy and ensuring the security of your personal data.
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
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
                Privacy Questions?
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                If you have any questions about our privacy practices or need to exercise your data rights, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
                >
                  Contact Privacy Team
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = '/terms'}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-full"
                >
                  View Terms of Service
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;