import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';
import Container from '../ui/Container';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechVentures Inc.",
      content: "Sysdak Inc transformed our entire digital infrastructure. Their expertise in cloud integration and software development helped us scale seamlessly. Truly professional and innovative team.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "Global Finance Solutions",
      content: "The AI automation solutions implemented by Sysdak have revolutionized our operations. We've seen a 300% increase in efficiency and significant cost savings. Their technical excellence is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "HealthCare Plus",
      content: "Working with Sysdak Inc was a game-changer for our healthcare platform. They understood our complex requirements and delivered a solution that exceeded our expectations. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "DataFlow Systems", logo: "DF" },
    { name: "CloudNet", logo: "CN" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Digital Solutions", logo: "DS" },
    { name: "FutureTech", logo: "FT" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <Container>
        {/* Testimonials Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about working with Sysdak Inc.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <p className="text-slate-600 mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-12">
            Trusted by Leading Companies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full h-full flex items-center justify-center">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-lg p-4 font-bold text-xl min-w-[60px] min-h-[60px] flex items-center justify-center">
                    {partner.logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;