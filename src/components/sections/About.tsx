import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Target, Lightbulb, Shield, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';
interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label }) => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-blue-900 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <Card>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <Card.Content className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-700">{role}</p>
      </Card.Content>
    </Card>
  );
};

const About: React.FC = () => {
  const stats = [
    { icon: <Award size={24} />, value: '5+', label: 'Years Experience' },
    { icon: <Users size={24} />, value: '10+', label: 'Clients Served' },
    { icon: <Clock size={24} />, value: '10+', label: 'Projects Completed' },
    { icon: <Target size={24} />, value: '99%', label: 'Client Satisfaction' },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We push the boundaries of technology to create solutions that transform how businesses operate and grow."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We build trust through transparent communication, ethical practices, and delivering on our promises."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact",
      description: "We measure our success by the tangible value and lasting impact we create for our clients and partners."
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Sysdak Inc
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We are an emerging technology startup founded by passionate engineers and innovators who believe in the power of technology to transform businesses.
          </p>
          <p className="text-lg text-slate-500 leading-relaxed mb-12">
            Born from a vision to bridge the gap between complex technology solutions and practical business needs, Sysdak Inc has quickly established itself as a trusted partner for companies seeking digital transformation.
          </p>
        </motion.div>
        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower businesses of all sizes with innovative, accessible, and scalable technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the catalyst for digital transformation, enabling organizations to harness the full potential of technology and create sustainable value for their stakeholders and communities.
            </p>
          </div>
        </motion.div>
        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <Stat
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-blue-100 text-blue-600 rounded-2xl p-4 inline-flex mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default About;