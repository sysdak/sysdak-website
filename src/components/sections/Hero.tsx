import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { fadeInUp, scaleIn, slideInUp, floatAnimation, glowAnimation } from '../../utils/animations';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}) => {
  return (
    <motion.div
      className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(rgba(15, 82, 186, 0.1) 1px, transparent 1px),
            radial-gradient(rgba(59, 130, 246, 0.05) 2px, transparent 2px)
          `,
          backgroundSize: '20px 20px, 40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
        animate={{
          backgroundPosition: ['0% 0%, 20px 20px', '100% 100%, 60px 60px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"
        animate={floatAnimation}
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-blue-600 rounded-full opacity-40"
        animate={floatAnimation}
        transition={{ duration: 4, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-50"
        animate={floatAnimation}
        transition={{ duration: 3.5, delay: 0.5 }}
      />

      {/* Animated sparkle icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-blue-400"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={24} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/5 text-blue-600"
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Sparkles size={20} />
      </motion.div>

      <Container className="z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-600 leading-relaxed"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  onClick={() => window.location.href = ctaLink}
                  className="group shadow-lg hover:shadow-xl"
                >
                  {ctaText}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block relative"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Enhanced animated background shapes */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-blue-400 rounded-tl-3xl rounded-br-3xl -rotate-3 opacity-10"
              animate={{
                rotate: [-3, -1, -3],
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute -inset-6 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-tr-3xl rounded-bl-3xl rotate-3 opacity-10"
              animate={{
                rotate: [3, 1, 3],
                scale: [1, 1.08, 1],
                opacity: [0.1, 0.12, 0.1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2
              }}
            />
            <motion.div
              className="absolute -inset-2 bg-gradient-to-bl from-cyan-400 to-blue-600 rounded-tl-xl rounded-br-xl rotate-6 opacity-5"
              animate={{
                rotate: [6, 12, 6],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />

            {/* Main image with enhanced animations */}
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-2xl z-10"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={image}
                alt="IT professionals working"
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
              animate={floatAnimation}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [-10, 10, -10] }}
              transition={{ delay: 1.5, duration: 3 }}
            >
              Expert Team
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
              animate={floatAnimation}
              transition={{ delay: 2, duration: 4 }}
            >
              24/7 Support
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Hero;