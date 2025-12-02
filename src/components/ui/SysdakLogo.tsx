import React from 'react';
import { motion } from 'framer-motion';
import SysdakLogoIcon from './SysdakLogoIcon';
import { theme } from '../../styles/theme';
import { logoAnimation } from '../../utils/animations';

interface SysdakLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  variant?: 'default' | 'light' | 'dark' | 'premium';
  showText?: boolean;
  textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  animated?: boolean;
}

const SysdakLogo: React.FC<SysdakLogoProps> = ({
  size = 'md',
  variant = 'default',
  showText = true,
  textSize = 'md',
  className = '',
  animated = false
}) => {
  const sizeConfig = {
    sm: { icon: 'sm', text: 'text-sm', gap: 'gap-2' },
    md: { icon: 'md', text: 'text-base', gap: 'gap-2' },
    lg: { icon: 'lg', text: 'text-lg', gap: 'gap-3' },
    xl: { icon: 'xl', text: 'text-xl', gap: 'gap-3' },
    '2xl': { icon: '2xl', text: 'text-2xl', gap: 'gap-4' },
    '3xl': { icon: '2xl', text: 'text-3xl', gap: 'gap-4' }
  };

  const textSizeConfig = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  };

  const variantStyles = {
    default: {
      text: 'text-gray-900',
      subtext: 'text-gray-600'
    },
    light: {
      text: 'text-white',
      subtext: 'text-blue-100'
    },
    dark: {
      text: 'text-gray-900',
      subtext: 'text-gray-700'
    },
    premium: {
      text: 'text-white',
      subtext: 'text-blue-200'
    }
  };

  const config = sizeConfig[size];
  const styles = variantStyles[variant];
  const actualTextSize = textSizeConfig[textSize];

  const LogoWrapper = animated ? motion.div : 'div';
  const logoProps = animated
    ? {
        initial: "initial",
        animate: "animate",
        whileHover: "hover",
        variants: logoAnimation,
        transition: { duration: 0.3 }
      }
    : {};

  return (
    <LogoWrapper
      className={`flex items-center ${config.gap} ${className}`}
      {...logoProps}
    >
      <SysdakLogoIcon
        size={config.icon as any}
        variant={variant === 'premium' ? 'light' : variant}
        className={animated ? '' : ''}
      />
      {showText && (
        <div className="flex flex-col">
          <motion.span
            className={`font-bold ${actualTextSize} ${styles.text} leading-tight`}
            style={{ fontFamily: theme.fonts.display.join(', ') }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: theme.animation.fast }}
          >
            Sysdak
          </motion.span>
          <motion.span
            className={`text-xs ${styles.subtext} leading-tight -mt-0.5 tracking-wide uppercase`}
            style={{ fontFamily: theme.fonts.sans.join(', ') }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: theme.animation.fast }}
          >
            Technologies
          </motion.span>
        </div>
      )}
    </LogoWrapper>
  );
};

export default SysdakLogo;