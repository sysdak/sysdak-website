import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { fadeInUp } from '../../utils/animations';

interface LogoContainerProps {
  variant?: 'light' | 'dark' | 'colored' | 'adaptive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  centered?: boolean;
  animated?: boolean;
}

const LogoContainer: React.FC<LogoContainerProps> = ({
  variant = 'adaptive',
  size = 'md',
  className = '',
  centered = false,
  animated = true
}) => {
  const containerClasses = centered ? 'flex justify-center' : 'flex items-center';

  const determineVariant = (): 'default' | 'white' | 'dark' | 'colored' => {
    if (variant === 'adaptive') {
      // Check if we're on a dark or light background
      // This is a simplified version - you could make this more sophisticated
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      const backgroundColor = computedStyle.backgroundColor;

      // Simple check for dark backgrounds
      if (backgroundColor.includes('rgb(15, 82, 186)') ||
          backgroundColor.includes('rgb(59, 130, 246)') ||
          backgroundColor.includes('rgb(31, 41, 55)')) {
        return 'white';
      }
      return 'default';
    }

    return variant as 'default' | 'white' | 'dark' | 'colored';
  };

  const LogoComponent = () => (
    <Logo
      size={size}
      variant={determineVariant()}
      showText={true}
    />
  );

  if (animated) {
    return (
      <motion.div
        className={`${containerClasses} ${className}`}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <LogoComponent />
      </motion.div>
    );
  }

  return (
    <div className={`${containerClasses} ${className}`}>
      <LogoComponent />
    </div>
  );
};

export default LogoContainer;