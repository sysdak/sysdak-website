#!/bin/bash

# Production Deployment Script for SysDak Website
# This script automates the production build and deployment process

set -e  # Exit on error

echo "=========================================="
echo "🚀 SysDak Website Production Deployment"
echo "=========================================="

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Environment Check
echo -e "\n${YELLOW}Step 1: Checking environment variables...${NC}"

if [ ! -f ".env.production" ]; then
    echo -e "${RED}❌ Error: .env.production file not found!${NC}"
    echo "Please create .env.production with your production settings"
    exit 1
fi

if [ ! -f "backend/.env" ]; then
    echo -e "${RED}❌ Error: backend/.env file not found!${NC}"
    echo "Please create backend/.env with your production settings"
    exit 1
fi

echo -e "${GREEN}✅ Environment files found${NC}"

# Step 2: Install Dependencies
echo -e "\n${YELLOW}Step 2: Installing dependencies...${NC}"

echo "Installing frontend dependencies..."
npm install

echo "Installing backend dependencies..."
cd backend
pip install -r requirements.txt
cd ..

echo -e "${GREEN}✅ Dependencies installed${NC}"

# Step 3: Build Frontend
echo -e "\n${YELLOW}Step 3: Building frontend for production...${NC}"

npm run build:prod

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Error: Build failed - dist folder not created${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Frontend built successfully${NC}"

# Step 4: Run Tests (if available)
echo -e "\n${YELLOW}Step 4: Running tests...${NC}"

# Backend health check
echo "Checking backend configuration..."
cd backend
python -c "from app import app; print('Backend configuration OK')" || {
    echo -e "${RED}❌ Backend configuration error${NC}"
    exit 1
}
cd ..

echo -e "${GREEN}✅ Tests passed${NC}"

# Step 5: Security Checks
echo -e "\n${YELLOW}Step 5: Running security checks...${NC}"

# Check if DEBUG is disabled
if grep -q "FLASK_DEBUG=True" backend/.env; then
    echo -e "${RED}❌ Warning: FLASK_DEBUG is enabled in backend/.env${NC}"
    echo "Please set FLASK_DEBUG=False for production"
    exit 1
fi

echo -e "${GREEN}✅ Security checks passed${NC}"

# Step 6: Build Summary
echo -e "\n${YELLOW}Step 6: Build Summary${NC}"

DIST_SIZE=$(du -sh dist | cut -f1)
echo "Frontend build size: $DIST_SIZE"
echo "Build location: $(pwd)/dist"

# Step 7: Deployment Instructions
echo -e "\n=========================================="
echo -e "${GREEN}✅ Production build complete!${NC}"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Deploy frontend (dist folder) to your hosting service"
echo "2. Deploy backend using: cd backend && gunicorn -c gunicorn.conf.py wsgi:application"
echo "3. Configure DNS to point to your servers"
echo "4. Set up SSL/TLS certificates"
echo ""
echo "Quick deploy options:"
echo "  - Docker: docker-compose up -d --build"
echo "  - Render: Push to GitHub and deploy via Render dashboard"
echo "  - Vercel: vercel --prod"
echo ""
echo "For detailed instructions, see PRODUCTION_DEPLOY.md"
echo "=========================================="
