import React from 'react';
import { motion } from 'framer-motion';
import { logoAnimation } from '../../utils/animations';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark' | 'colored';
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const logoVariants = {
    default: 'logo-default',
    white: 'logo-white',
    dark: 'logo-dark',
    colored: 'logo-colored'
  };

  const renderLogoIcon = () => {
    // Use SVG with proper fill and viewBox for better scaling
    return (
      <svg
        viewBox="0 0 147 147"
        className={`${sizeClasses[size]} ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle for better visibility */}
        <circle
          cx="73.5"
          cy="73.5"
          r="70"
          fill={variant === 'white' ? '#ffffff' : variant === 'dark' ? '#1e293b' : '#0f52ba'}
          className="transition-colors duration-300"
        />

        {/* Simplified logo icon - letter S */}
        <path
          d="M 50 40 C 50 40, 65 35, 85 40 C 105 45, 110 55, 110 70 C 110 85, 95 95, 75 95 C 55 95, 50 85, 50 85"
          stroke={variant === 'white' ? '#0f52ba' : variant === 'dark' ? '#0f52ba' : '#ffffff'}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          className="transition-colors duration-300"
        />
        <path
          d="M 50 55 C 50 55, 60 50, 75 55 C 90 60, 95 65, 95 75 C 95 85, 85 90, 70 90 C 55 90, 50 80, 50 80"
          stroke={variant === 'white' ? '#0f52ba' : variant === 'dark' ? '#0f52ba' : '#ffffff'}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          className="transition-colors duration-300"
        />

        {/* Decorative elements */}
        <circle cx="45" cy="40" r="3" fill={variant === 'white' ? '#06adee' : variant === 'dark' ? '#06adee' : '#06adee'} />
        <circle cx="105" cy="40" r="3" fill={variant === 'white' ? '#06adee' : variant === 'dark' ? '#06adee' : '#06adee'} />
        <circle cx="45" cy="100" r="3" fill={variant === 'white' ? '#06adee' : variant === 'dark' ? '#06adee' : '#06adee'} />
        <circle cx="105" cy="100" r="3" fill={variant === 'white' ? '#06adee' : variant === 'dark' ? '#06adee' : '#06adee'} />
      </svg>
    );
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={logoAnimation}
        className="relative"
      >
        {renderLogoIcon()}
      </motion.div>
      {showText && (
        <motion.span
          className={`${textSizeClasses[size]} font-bold transition-colors duration-300 ${
            variant === 'white' ? 'text-white' :
            variant === 'dark' ? 'text-gray-900' :
            'text-blue-900'
          }`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Sysdak Inc
        </motion.span>
      )}
    </div>
  );
};

export default Logo;