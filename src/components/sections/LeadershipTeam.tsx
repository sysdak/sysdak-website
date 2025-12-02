import React, { useState } from 'react';
import Container from '../ui/Container';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  BookOpen,
  Target,
  Linkedin,
  Twitter,
  Mail,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Globe
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  education: string;
  experience: string;
  achievements: string[];
  image?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  expertise,
  education,
  experience,
  achievements,
  image,
  linkedin,
  twitter,
  email
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Profile Section */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              <p className="text-blue-600 font-medium">{title}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {linkedin && (
              <a href={linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            )}
            {twitter && (
              <a href={twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{bio}</p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center text-blue-600 mb-2">
              <Briefcase size={16} className="mr-2" />
              <span className="text-sm font-semibold">Experience</span>
            </div>
            <p className="text-gray-900 font-medium">{experience}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center text-green-600 mb-2">
              <GraduationCap size={16} className="mr-2" />
              <span className="text-sm font-semibold">Education</span>
            </div>
            <p className="text-gray-900 font-medium">{education}</p>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <span className="text-sm font-medium text-gray-700">
            {isExpanded ? 'Show Less' : 'View Achievements & Background'}
          </span>
          <ChevronRight
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${
              isExpanded ? 'rotate-90' : ''
            }`}
          />
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div
            className="mt-6 pt-6 border-t border-gray-200"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <div className="flex items-center text-blue-700 mb-2">
                <Globe size={16} className="mr-2" />
                <span className="text-sm font-semibold">Global Impact</span>
              </div>
              <p className="text-xs text-gray-600">
                Leading digital transformation initiatives across 15+ countries,
                serving Fortune 500 clients and driving enterprise-scale innovation.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const LeadershipTeam: React.FC = () => {
  const leadershipTeam: TeamMemberProps[] = [
    {
      name: "Dr. Michael Chen",
      title: "Chief Executive Officer & Global Managing Partner",
      bio: "Visionary technology leader with 25+ years of experience driving enterprise digital transformation for Fortune 500 companies across banking, healthcare, and manufacturing sectors.",
      expertise: [
        "Digital Strategy",
        "Cloud Architecture",
        "AI/ML Implementation",
        "Enterprise Systems Integration"
      ],
      education: "PhD, Computer Science - MIT",
      experience: "25+ Years",
      achievements: [
        "Led $2B+ digital transformation programs",
        "Fortune 500 CTO advisory board member",
        "Published author of 3 enterprise technology books",
        "Named Top 100 Global Technology Executives",
        "Successfully scaled startup to $500M enterprise"
      ],
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/dr_michaelchen",
      email: "m.chen@sysdak.com"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Technology Officer & Head of Innovation",
      bio: "Enterprise technology architect specializing in scalable cloud solutions and AI-powered systems. Previously led technology strategy at Microsoft and Amazon Web Services.",
      expertise: [
        "Cloud Native Architecture",
        "Artificial Intelligence",
        "DevOps Transformation",
        "Security Architecture"
      ],
      education: "MS, Computer Engineering - Stanford",
      experience: "20+ Years",
      achievements: [
        "Architected solutions for 100+ enterprise clients",
        "Holder of 12 technology patents",
        "AWS certified solutions architect professional",
        "Led $1B cloud migration initiative",
        "Regular speaker at major tech conferences"
      ],
      linkedin: "https://linkedin.com/in/sarahjohnson",
      email: "s.johnson@sysdak.com"
    },
    {
      name: "Robert Williams",
      title: "Chief Financial Officer & Head of Corporate Strategy",
      bio: "Strategic finance leader with expertise in technology M&A, international business development, and scaling enterprise operations across global markets.",
      expertise: [
        "Corporate Finance",
        "M&A & Partnerships",
        "International Operations",
        "Strategic Planning"
      ],
      education: "MBA, Finance - Harvard Business School",
      experience: "22+ Years",
      achievements: [
        "Managed $5B+ in enterprise technology investments",
        "Led successful IPO and acquisition strategies",
        "Expanded operations to 15+ countries",
        "Fortune 500 CFO advisory council member",
        "Expert in technology valuation and due diligence"
      ],
      linkedin: "https://linkedin.com/in/robertwilliams",
      email: "r.williams@sysdak.com"
    },
    {
      name: "Dr. Lisa Martinez",
      title: "Chief Data Scientist & Head of AI Research",
      bio: "Pioneering AI researcher and data scientist with extensive experience in implementing machine learning solutions for enterprise clients across healthcare, finance, and manufacturing.",
      expertise: [
        "Machine Learning",
        "Data Analytics",
        "Predictive Modeling",
        "AI Strategy"
      ],
      education: "PhD, Data Science - Carnegie Mellon",
      experience: "18+ Years",
      achievements: [
        "Published 50+ peer-reviewed AI research papers",
        "Led AI implementations generating $1B+ ROI",
        "Named top 50 AI innovators globally",
        "MIT AI research advisory board member",
        "Expertise in computer vision and NLP"
      ],
      linkedin: "https://linkedin.com/in/lisamartinez",
      email: "l.martinez@sysdak.com"
    }
  ];

  const stats = [
    { number: "500+", label: "Combined Years Experience" },
    { number: "100+", label: "Fortune 500 Projects Led" },
    { number: "$10B+", label: "Value Generated for Clients" },
    { number: "15+", label: "Countries of Operation" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Enterprise Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            World-class executives and technology experts with proven track records of driving
            successful digital transformations for global enterprises and Fortune 500 companies.
          </p>
        </motion.div>

        {/* Leadership Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-md border border-gray-100"
              variants={fadeInUp}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-700">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {leadershipTeam.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        {/* Board of Advisors Preview */}
        <motion.div
          className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Users size={48} className="text-blue-300" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Global Advisory Board</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
              Supported by renowned industry leaders, technology pioneers, and business strategists
              who provide strategic guidance and ensure we remain at the forefront of enterprise innovation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold text-white">20+</div>
                <div className="text-sm text-blue-200">Industry Advisors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-blue-200">Countries Represented</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-200">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-blue-200">Strategic Partnerships</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 inline-block">
              <p className="text-sm text-blue-100 mb-2">Strategic guidance from executives at:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Microsoft</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Google</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Amazon</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Oracle</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">IBM</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default LeadershipTeam;