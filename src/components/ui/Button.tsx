import React from 'react';
import { motion } from 'framer-motion';
import { glowAnimation } from '../../utils/animations';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  
  const variantStyles = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 border border-transparent',
    secondary: 'bg-blue-100 text-blue-900 hover:bg-blue-200 border border-transparent',
    outline: 'bg-transparent text-blue-700 hover:bg-blue-50 border border-blue-300',
    ghost: 'bg-transparent text-blue-700 hover:bg-blue-50 border border-transparent',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <motion.button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className} relative overflow-hidden`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? {
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      } : {}}
      whileTap={!disabled ? {
        scale: 0.95,
        transition: { duration: 0.1, ease: "easeInOut" }
      } : {}}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Ripple effect overlay */}
      <motion.span
        className="absolute inset-0 bg-white opacity-0"
        whileHover={!disabled ? { opacity: 0.1 } : {}}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
        }}
      />

      {/* Glow effect for primary variant */}
      {variant === 'primary' && !disabled && (
        <motion.span
          className="absolute inset-0 rounded-md"
          style={{
            boxShadow: "0 0 20px rgba(15, 82, 186, 0.4)"
          }}
          whileHover={{
            boxShadow: "0 0 30px rgba(15, 82, 186, 0.6)",
            transition: { duration: 0.3 }
          }}
        />
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <motion.span
            className="mr-2"
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
        <motion.span
          whileHover={{ letterSpacing: "0.025em" }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
        {icon && iconPosition === 'right' && (
          <motion.span
            className="ml-2"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </span>

      {/* Loading spinner animation (optional) */}
      {false && (
        <motion.span
          className="absolute inset-0 flex items-center justify-center bg-inherit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;