import React from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Users,
  Building,
  CheckCircle,
  Star,
  Globe,
  TrendingUp,
  Award as Certificate,
  // Security, (removed, not exported)
  Cloud,
  Zap
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const TrustSignals: React.FC = () => {
  const certifications = [
    {
      icon: <Shield size={48} />,
      title: "ISO 27001",
      description: "Information Security Management",
      status: "Active"
    },
    {
      icon: <Certificate size={48} />,
      title: "SOC 2 Type II",
      description: "Security & Compliance Certified",
      status: "Verified"
    },
    {
      icon: <Shield size={48} />,
      title: "GDPR Compliant",
      description: "Data Protection Standards",
      status: "Certified"
    },
    {
      icon: <Award size={48} />,
      title: "CMMI Level 5",
      description: "Software Maturity Model",
      status: "Achieved"
    }
  ];

  const partnerships = [
    {
      name: "Microsoft",
      partnership: "Gold Partner",
      specialties: ["Azure", "Office 365", "Dynamics 365"]
    },
    {
      name: "Amazon Web Services",
      partnership: "Premier Partner",
      specialties: ["Cloud Infrastructure", "Machine Learning", "Analytics"]
    },
    {
      name: "Google Cloud",
      partnership: "Strategic Partner",
      specialties: ["GCP", "Google Workspace", "AI Platform"]
    },
    {
      name: "Salesforce",
      partnership: "Certified Partner",
      specialties: ["Sales Cloud", "Service Cloud", "Marketing Cloud"]
    }
  ];

  const clientSectors = [
    { sector: "Banking & Finance", clients: "15+", icon: <Building size={32} /> },
    { sector: "Healthcare", clients: "25+", icon: <Shield size={32} /> },
    { sector: "Manufacturing", clients: "30+", icon: <Zap size={32} /> },
    { sector: "Technology", clients: "40+", icon: <Cloud size={32} /> },
    { sector: "Retail & E-commerce", clients: "20+", icon: <TrendingUp size={32} /> },
    { sector: "Government", clients: "10+", icon: <Globe size={32} /> }
  ];

  const achievements = [
    { number: "25+", label: "Years in Business", description: "Trusted by global enterprises since 1999" },
    { number: "500+", label: "Expert Professionals", description: "Certified engineers and consultants" },
    { number: "98%", label: "Client Retention", description: "Long-term strategic partnerships" },
    { number: "50+", label: "Industry Awards", description: "Excellence in technology innovation" }
  ];

  return (
    <>
      {/* Main Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Global Enterprise Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Recognized by industry leaders and certified by global standards, we deliver enterprise-grade
              solutions that meet the most stringent security and compliance requirements.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Global Certifications & Standards</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Maintaining the highest international standards for security, quality, and compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {cert.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {cert.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    <CheckCircle size={12} className="mr-1" />
                    {cert.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Strategic Partnerships */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Strategic Technology Partnerships</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Partnering with global technology leaders to deliver comprehensive enterprise solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold mb-1">{partner.name}</h4>
                    <div className="text-blue-200 text-sm font-medium mb-3">
                      {partner.partnership}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {partner.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1 h-1 bg-blue-300 rounded-full mr-2"></div>
                        {specialty}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Client Sectors Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Industry Leadership</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders across diverse sectors with specialized solutions for each domain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientSectors.map((sector, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-blue-600 flex-shrink-0">
                  {sector.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {sector.sector}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {sector.clients} Enterprise Clients
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold mb-4">Ready to Join Our Enterprise Client Portfolio?</h4>
                <p className="text-lg mb-8 text-blue-100">
                  Discover why Fortune 500 companies and global industry leaders trust us for their most critical digital transformation initiatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="text-yellow-400" size={20} />
                    <span>Fortune 500 Trusted</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Globe className="text-green-400" size={20} />
                    <span>Global Reach</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="text-blue-400" size={20} />
                    <span>Enterprise Security</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default TrustSignals;