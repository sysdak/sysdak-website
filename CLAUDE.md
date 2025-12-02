# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a production-grade React + TypeScript + Vite project called "sysdak-website" with a comprehensive medical application architecture. The project features a Flask backend API for SMTP email services, modern animations with Framer Motion, and production-ready optimizations.

## Common Commands

### Development
- `npm run dev` - Start frontend development server
- `npm run backend` - Start Flask backend server
- `npm run start` - Run both frontend and backend concurrently
- `npm run build` - Build for production
- `npm run build:prod` - Build with production optimizations
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Preview production build

### Testing
- `npm test` - Run tests with Vitest
- `npm run test:coverage` - Run tests with coverage report

## Architecture

### Tech Stack
- **Frontend**: React 18.3.1 with TypeScript
- **Backend**: Flask 2.3.3 with Python
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1 with custom blue color palette
- **Routing**: React Router DOM 6.22.1
- **Animations**: Framer Motion 12.23.22
- **Email Service**: Nodemailer + Flask SMTP API
- **Icons**: Lucide React 0.344.0
- **Testing**: Vitest 3.2.4
- **Linting**: ESLint 9.9.1 with React-specific rules

### Project Structure
```
src/
├── components/
│   ├── common/         # Reusable UI components (Avatar, Button, Card, Input)
│   ├── layout/         # Layout components (Navbar, Footer, Sidebar)
│   ├── sections/       # Page sections (Hero, About, Services, Contact)
│   └── ui/            # Enhanced UI components with animations
├── pages/             # Page components with routing
│   ├── Auth/          # Authentication pages
│   ├── Dashboard/     # Main dashboard functionality
│   ├── NeuropathyMonitor/  # Neuropathy monitoring features
│   ├── PatientProfile/     # Patient management
│   ├── Settings/      # Application settings
│   └── TestResults/   # Test result management
├── contexts/          # React context providers
├── services/          # API and business logic services
│   ├── emailService.ts # Email service with SMTP support
│   └── apiService.ts   # API service for backend communication
├── utils/             # Utility functions
│   └── env.ts         # Environment configuration utilities
└── assets/            # Static assets and images

backend/
├── app.py            # Flask API server
├── requirements.txt  # Python dependencies
└── .env.example     # Environment configuration template
```

### Key Features
- **Medical Application**: Patient management, neuropathy monitoring, dashboard functionality
- **Email Service**: Production-ready SMTP with contact form and auto-replies
- **Modern Animations**: Framer Motion integration with smooth transitions
- **Backend API**: Flask REST API for email services and future extensions
- **Production Optimizations**: Code splitting, lazy loading, performance optimizations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Comprehensive error handling and user feedback

### Email Service Configuration
The project includes a complete email service with:
- SMTP configuration through environment variables
- Contact form with auto-reply functionality
- Professional HTML email templates
- Error handling and logging
- Backend API endpoint for secure email sending

**Environment Variables**:
- `EMAIL_HOST` - SMTP server host
- `EMAIL_PORT` - SMTP server port
- `EMAIL_USE_TLS` - Enable TLS encryption
- `EMAIL_USERNAME` - SMTP username
- `EMAIL_PASSWORD` - SMTP password
- `EMAIL_FROM` - Sender email address
- `EMAIL_TO` - Recipient email addresses (comma-separated)

### API Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/test-email` - Test email configuration
- `GET /api/health` - Health check endpoint

### Animation Guidelines
- Uses Framer Motion for smooth animations
- Staggered animations for better user experience
- Hover effects and micro-interactions
- Loading states with skeleton screens
- Page transition animations

### Production Build
The project includes production optimizations:
- Code splitting with manual chunks
- Asset optimization and compression
- Environment-specific configurations
- Source map management
- Performance monitoring ready
- SEO optimization capabilities

### Routing Structure
The application uses React Router with the following main routes:
- `/` - Home page with animated hero section
- `/about` - About page
- `/services` - Services page
- `/projects` - Projects page
- `/contact` - Contact page with email form
- Additional routes for auth, dashboard, and medical features

### Styling Guidelines
- Uses Tailwind CSS with custom blue color palette (`#0F52BA` as primary)
- Font family: Inter with system-ui fallback
- Responsive design approach
- Component-based styling structure
- Animation-aware CSS classes
- Dark mode considerations

### Development Setup
1. **Frontend**: Uses Vite for fast development with HMR
2. **Backend**: Flask development server with debug mode
3. **Concurrent Development**: Use `npm run start` to run both servers
4. **Environment**: Configure `.env` files for different environments
5. **Testing**: Vitest for unit and integration tests

### Build Configuration
- **Development**: `vite.config.ts` with development optimizations
- **Production**: `vite.prod.config.ts` with production optimizations
- **TypeScript**: Configurations for app and Node.js environments
- **ESLint**: Configuration with React hooks, refresh, and TypeScript rules

### Performance Considerations
- Lazy loading for routes and components
- Image optimization with WebP support
- Bundle analysis and optimization
- Caching strategies for production
- SEO meta tags and structured data