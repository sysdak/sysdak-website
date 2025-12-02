#!/bin/bash

# Production deployment script for SysDak Website

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run type checking
echo "🔍 Running type checking..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ Type checking failed. Please fix the errors before deploying."
    exit 1
fi

# Run linting
echo "🧹 Running linting..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed. Please fix the errors before deploying."
    exit 1
fi

# Run tests
echo "🧪 Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Please fix the failing tests before deploying."
    exit 1
fi

# Build for production
echo "🏗️  Building for production..."
npm run build:prod
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the build errors before deploying."
    exit 1
fi

# Check if dist folder was created
if [ ! -d "dist" ]; then
    echo "❌ Build failed: dist folder not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Distribution files are in the 'dist' folder"

# Show build stats
echo "📊 Build statistics:"
echo "- Total size of dist folder: $(du -sh dist | cut -f1)"
echo "- Number of files: $(find dist -type f | wc -l)"

echo "🎉 Deployment ready! You can now deploy the 'dist' folder to your hosting provider."

# Optional: Copy environment file for production
if [ -f ".env.production" ]; then
    echo "📋 Production environment file found at .env.production"
    echo "   Make sure to configure this file with your production settings."
fi

echo "💡 Next steps:"
echo "1. Upload the 'dist' folder to your web server"
echo "2. Deploy the Flask backend (backend/app.py)"
echo "3. Configure environment variables on your server"
echo "4. Set up a reverse proxy (nginx/apache) if needed"
echo "5. Configure SSL certificates for HTTPS"