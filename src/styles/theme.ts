// Premium professional color palette for Sysdak Technologies
export const theme = {
  // Primary color shades (deep professional blues - based on user preference)
  primary: {
    50: '#e0f2fe',     // Lightest
    100: '#bae6fd',
    200: '#7dd3fc',
    300: '#38bdf8',
    400: '#0ea5e9',    // Medium blue
    500: '#0284c7',    // Primary blue
    600: '#0369a1',    // Deep professional blue
    700: '#075985',    // Darker blue
    800: '#0c4a6e',    // Navy blue
    900: '#082f49',    // Deep navy (main background)
    950: '#062e4f'     // Deepest navy
  },

  // Secondary color shades (premium teals/cyans)
  secondary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',    // Secondary cyan
    600: '#0891b2',
    700: '#0e7490',    // Deep teal
    800: '#155e75',
    900: '#164e63',
    950: '#083344'
  },

  // Accent colors (premium palette)
  accent: {
    sapphire: '#1e40af',     // Deep sapphire
    emerald: '#059669',     // Premium emerald
    violet: '#7c3aed',      // Royal violet
    amber: '#d97706',       // Warm amber
    rose: '#e11d48',        // Modern rose
    slate: '#64748b'        // Professional slate
  },

  // Semantic colors (professional variants)
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#16a34a',
    600: '#15803d',
    900: '#14532d'
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#d97706',
    600: '#ca8a04',
    900: '#713f12'
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#dc2626',
    600: '#b91c1c',
    900: '#7f1d1d'
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#2563eb',
    600: '#1d4ed8',
    900: '#1e3a8a'
  },

  // Neutral colors (professional grayscale)
  neutral: {
    50: '#fafafa',      // Pure white
    100: '#f5f5f5',     // Light gray
    200: '#e5e5e5',     // Silver
    300: '#d4d4d4',     // Medium gray
    400: '#a3a3a3',     // Gray
    500: '#737373',     // Dark gray
    600: '#525252',     // Charcoal
    700: '#404040',     // Dark charcoal
    800: '#262626',     // Near black
    900: '#171717',     // Deep black
    950: '#0a0a0a'      // Absolute black
  },

  // Extended premium brand colors (matching user preference)
  brand: {
    midnight: '#082f49',     // Deep midnight blue (main background)
    steel: '#64748b',        // Steel for secondary text
    platinum: '#e5e5e5',     // Platinum for subtle borders
    titanium: '#262626',     // Titanium for strong contrast
    gold: '#d97706',         // Gold for premium accents
    silver: '#94a3b8',       // Silver for icons
    bronze: '#92400e',       // Bronze for special highlights
    pearl: '#fafafa'         // Pearl for clean backgrounds
  },

  // Premium gradients
  gradients: {
    // Primary gradients
    primary: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0e7490 100%)',
    primaryLight: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #06b6d4 100%)',
    primaryReverse: 'linear-gradient(135deg, #0e7490 0%, #0369a1 50%, #0c4a6e 100%)',

    // Hero gradients (matching user preference)
    hero: 'linear-gradient(180deg, #082f49 0%, #0c4a6e 40%, #075985 100%)',
    heroPremium: 'linear-gradient(160deg, #082f49 0%, #0c4a6e 30%, #0369a1 100%)',

    // Accent gradients
    sapphire: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #0ea5e9 100%)',
    emerald: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #06b6d4 100%)',
    midnight: 'linear-gradient(135deg, #082f49 0%, #0c4a6e 50%, #164e63 100%)',

    // Subtle gradients
    subtleLight: 'linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%)',
    subtleDark: 'linear-gradient(180deg, #262626 0%, #171717 100%)',

    // Glass effect
    glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
  },

  // Premium shadow system
  shadows: {
    // Soft shadows
    soft: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    softLifted: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

    // Medium shadows
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    premium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',

    // Strong shadows
    strong: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    deep: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

    // Colored shadows
    colored: '0 10px 25px -3px rgba(12, 74, 110, 0.25), 0 4px 6px -2px rgba(6, 182, 212, 0.1)',
    accent: '0 10px 25px -3px rgba(30, 64, 175, 0.25), 0 4px 6px -2px rgba(6, 182, 212, 0.15)',

    // Inner shadows
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    innerSoft: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  },

  // Premium border radius
  radius: {
    xs: '0.125rem',     // 2px
    sm: '0.25rem',      // 4px
    md: '0.375rem',     // 6px
    lg: '0.5rem',       // 8px
    xl: '0.75rem',      // 12px
    '2xl': '1rem',      // 16px
    '3xl': '1.5rem',    // 24px
    '4xl': '2rem',      // 32px
    full: '9999px'
  },

  // Premium font families
  fonts: {
    sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
    serif: ['Playfair Display', 'Georgia', 'serif'],
    mono: ['JetBrains Mono', 'SF Mono', 'Monaco', 'Consolas', 'monospace'],
    display: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif']
  },

  // Premium animation timing
  animation: {
    fast: '100ms',      // Quick interactions
    normal: '200ms',    // Standard transitions
    medium: '300ms',   // Smooth animations
    slow: '400ms',      // Deliberate animations
    extraSlow: '600ms'  // Hero animations
  },

  // Premium spacing scale
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },

  // Premium breakpoints
  breakpoints: {
    sm: '640px',      // Small phones
    md: '768px',      // Tablets
    lg: '1024px',     // Small desktops
    xl: '1280px',     // Desktops
    '2xl': '1536px',  // Large desktops
    '3xl': '1920px',  // 4K displays
    '4xl': '2560px'   // Ultra-wide
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070
  }
};

// Custom CSS variables for use throughout the app
export const cssVariables = {
  '--color-primary-50': theme.primary[50],
  '--color-primary-500': theme.primary[500],
  '--color-primary-700': theme.primary[700],
  '--color-primary-900': theme.primary[900],
  '--color-secondary-500': theme.secondary[500],
  '--color-secondary-700': theme.secondary[700],
  '--color-accent-sapphire': theme.accent.sapphire,
  '--color-accent-emerald': theme.accent.emerald,
  '--gradient-primary': theme.gradients.primary,
  '--gradient-hero': theme.gradients.hero,
  '--gradient-premium': theme.gradients.heroPremium,
  '--font-display': theme.fonts.display.join(', '),
  '--shadow-premium': theme.shadows.premium,
  '--shadow-colored': theme.shadows.colored,
  '--radius-xl': theme.radius.xl,
  '--radius-2xl': theme.radius['2xl'],
  '--radius-3xl': theme.radius['3xl']
};