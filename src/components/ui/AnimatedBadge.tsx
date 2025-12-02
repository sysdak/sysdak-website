import React from 'react';
import { motion } from 'framer-motion';
import { pulseAnimation } from '../../utils/animations';

interface AnimatedBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  animated = true,
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full';

  const variantStyles = {
    primary: 'bg-blue-100 text-blue-800 border border-blue-200',
    secondary: 'bg-gray-100 text-gray-800 border border-gray-200',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    error: 'bg-red-100 text-red-800 border border-red-200'
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  return (
    <motion.span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...(animated && {
        animate: pulseAnimation,
        whileHover: { scale: 1.1 },
        transition: { duration: 0.2 }
      })}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedBadge;