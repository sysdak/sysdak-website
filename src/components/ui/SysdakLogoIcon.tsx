import React from 'react';

interface SysdakLogoIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  variant?: 'default' | 'light' | 'dark';
}

const SysdakLogoIcon: React.FC<SysdakLogoIconProps> = ({
  size = 'md',
  className = '',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24'
  };

  const colorVariants = {
    default: {
      primary: '#1e40af',
      secondary: '#0ea5e9'
    },
    light: {
      primary: '#ffffff',
      secondary: '#e0f2fe'
    },
    dark: {
      primary: '#1e40af',
      secondary: '#0ea5e9'
    }
  };

  const colors = colorVariants[variant];

  return (
    <svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle - professional blue */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill={colors.primary}
        className="transition-all duration-300"
      />

      {/* Inner design elements - representing data/network */}
      <g transform="translate(100, 100)">
        {/* Central core */}
        <circle
          r="25"
          fill={colors.secondary}
          className="transition-all duration-300"
        />

        {/* Orbiting elements */}
        <g>
          {/* Top node */}
          <circle
            cy="-50"
            r="12"
            fill={colors.secondary}
            opacity="0.9"
          />
          <line
            y1="-25"
            y2="-38"
            stroke={colors.secondary}
            strokeWidth="3"
            opacity="0.6"
          />

          {/* Right node */}
          <circle
            cx="50"
            r="12"
            fill={colors.secondary}
            opacity="0.9"
          />
          <line
            x1="25"
            x2="38"
            stroke={colors.secondary}
            strokeWidth="3"
            opacity="0.6"
          />

          {/* Bottom node */}
          <circle
            cy="50"
            r="12"
            fill={colors.secondary}
            opacity="0.9"
          />
          <line
            y1="25"
            y2="38"
            stroke={colors.secondary}
            strokeWidth="3"
            opacity="0.6"
          />

          {/* Left node */}
          <circle
            cx="-50"
            r="12"
            fill={colors.secondary}
            opacity="0.9"
          />
          <line
            x1="-25"
            x2="-38"
            stroke={colors.secondary}
            strokeWidth="3"
            opacity="0.6"
          />
        </g>

        {/* Data flow lines */}
        <g opacity="0.4">
          <path
            d="M 0,-25 Q -35,-35 -50,-38"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 2"
          />
          <path
            d="M 25,0 Q 35,35 38,50"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 2"
          />
          <path
            d="M 0,25 Q 35,35 50,38"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 2"
          />
          <path
            d="M -25,0 Q -35,-35 -38,-50"
            stroke={colors.secondary}
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 2"
          />
        </g>

        {/* Center dot */}
        <circle
          r="5"
          fill="white"
          opacity="0.9"
        />
      </g>

      {/* Subtle ring for depth */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke={colors.secondary}
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
};

export default SysdakLogoIcon;