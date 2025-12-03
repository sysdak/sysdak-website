#!/bin/bash

# SysDak API Deployment Script
# This script automates the deployment process for the SysDak backend

set -e  # Exit on error

# Configuration
APP_DIR="/var/www/sysdak/backend"
VENV_DIR="$APP_DIR/venv"
SERVICE_NAME="sysdak-api"
GIT_REPO="https://github.com/yourusername/sysdak-website.git"

echo "=================================================="
echo "🚀 SysDak API Deployment"
echo "=================================================="

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "❌ Please run as root or with sudo"
    exit 1
fi

# 1. Pull latest code
echo "📥 Pulling latest code..."
cd "$APP_DIR" || exit 1
git pull origin main

# 2. Activate virtual environment
echo "🔧 Activating virtual environment..."
source "$VENV_DIR/bin/activate"

# 3. Install/update dependencies
echo "📦 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# 4. Run any database migrations (if applicable)
# echo "🗄️  Running database migrations..."
# python migrate.py

# 5. Restart the service
echo "🔄 Restarting service..."
systemctl restart "$SERVICE_NAME"

# 6. Wait for service to be ready
echo "⏳ Waiting for service to start..."
sleep 5

# 7. Health check
echo "🏥 Running health check..."
HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5000/api/health)

if [ "$HEALTH_CHECK" -eq 200 ]; then
    echo "✅ Deployment successful! Service is healthy."
    systemctl status "$SERVICE_NAME" --no-pager
else
    echo "❌ Health check failed! Rolling back..."
    git checkout HEAD~1
    systemctl restart "$SERVICE_NAME"
    echo "⚠️  Rolled back to previous version"
    exit 1
fi

echo "=================================================="
echo "✨ Deployment complete!"
echo "=================================================="

# Show logs
echo ""
echo "📋 Recent logs:"
journalctl -u "$SERVICE_NAME" -n 20 --no-pager

exit 0
