import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PremiumCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'dark' | 'gradient';
  hover?: boolean;
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
}

const PremiumCard: React.FC<PremiumCardProps> = ({
  children,
  variant = 'default',
  hover = true,
  icon: Icon,
  title,
  subtitle,
  className = '',
  onClick
}) => {
  const baseClasses = 'relative overflow-hidden';

  const variantClasses = {
    default: 'card-premium',
    glass: 'card-glass',
    dark: 'card-premium-dark',
    gradient: 'bg-gradient-to-br from-primary-600/10 to-secondary-600/10 backdrop-blur-xl border border-white/20'
  };

  const hoverClasses = hover ? 'hover-lift' : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${hoverClasses}
    ${className}
  `;

  const MotionComponent = onClick ? motion.div : 'div';
  const motionProps = onClick ? {
    whileHover: { scale: 1.01 },
    whileTap: { scale: 0.98 },
    onClick
  } : {};

  return (
    <MotionComponent
      className={classes}
      {...motionProps}
    >
      {(Icon || title || subtitle) && (
        <div className="p-6 pb-4">
          {Icon && (
            <div className="text-primary-600 mb-4">
              <Icon size={32} />
            </div>
          )}
          {title && (
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-neutral-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={title || subtitle ? 'px-6 pb-6' : 'p-6'}>
        {children}
      </div>
    </MotionComponent>
  );
};

export default PremiumCard;