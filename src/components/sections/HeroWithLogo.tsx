import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { fadeInUp, scaleIn, slideInUp, floatAnimation } from '../../utils/animations';

interface HeroWithLogoProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
  showLogo?: boolean;
  backgroundVariant?: 'gradient' | 'pattern' | 'solid';
}

const HeroWithLogo: React.FC<HeroWithLogoProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  showLogo = true,
  backgroundVariant = 'gradient'
}) => {
  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case 'gradient':
        return 'bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600';
      case 'pattern':
        return 'bg-blue-900';
      case 'solid':
        return 'bg-blue-800';
      default:
        return 'bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600';
    }
  };

  return (
    <motion.section
      className={`relative min-h-screen flex items-center justify-center text-white overflow-hidden ${getBackgroundClass()}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"
        animate={floatAnimation}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-white/15 rounded-full"
        animate={floatAnimation}
        transition={{ duration: 4, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/20 rounded-full"
        animate={floatAnimation}
        transition={{ duration: 3.5, delay: 0.5 }}
      />

      {/* Animated sparkle icons */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-white/60"
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
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/5 text-white/50"
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
        <Sparkles size={24} />
      </motion.div>

      <Container className="relative z-10 pt-20 pb-16">
        {showLogo && (
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Logo
              size="xl"
              variant="white"
              showText={true}
            />
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
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
              className="text-xl text-white/90 leading-relaxed mb-8"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
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
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
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
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-wrap gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { label: 'Years Experience', value: '10+' },
                { label: 'Projects Completed', value: '500+' },
                { label: 'Happy Clients', value: '200+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block relative"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Animated background shapes */}
            <motion.div
              className="absolute -inset-4 bg-white/10 rounded-tl-3xl rounded-br-3xl -rotate-3 backdrop-blur-sm"
              animate={{
                rotate: [-3, -1, -3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute -inset-6 bg-white/5 rounded-tr-3xl rounded-bl-3xl rotate-3 backdrop-blur-sm"
              animate={{
                rotate: [3, 1, 3],
                scale: [1, 1.08, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2
              }}
            />

            {/* Main image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl z-10"
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
                className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              animate={floatAnimation}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [-10, 10, -10] }}
              transition={{ delay: 1.5, duration: 3 }}
            >
              Expert Team
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              animate={floatAnimation}
              transition={{ delay: 2, duration: 4 }}
            >
              24/7 Support
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default HeroWithLogo;