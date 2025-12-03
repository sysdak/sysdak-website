# SysDak API - Production Deployment Guide

## Table of Contents

- [System Requirements](#system-requirements)
- [Deployment Methods](#deployment-methods)
- [Environment Configuration](#environment-configuration)
- [Docker Deployment](#docker-deployment)
- [Linux Server Deployment](#linux-server-deployment)
- [Cloud Platform Deployment](#cloud-platform-deployment)
- [Monitoring & Maintenance](#monitoring--maintenance)
- [Troubleshooting](#troubleshooting)

---

## System Requirements

### Minimum Requirements
- **CPU:** 1 core (2+ cores recommended)
- **RAM:** 512MB (1GB+ recommended)
- **Storage:** 1GB free space
- **OS:** Linux (Ubuntu 20.04+, Debian 11+, CentOS 8+) or Docker-capable system

### Software Dependencies
- Python 3.12+
- pip (Python package manager)
- Git
- PostgreSQL/MySQL (if using database)

---

## Deployment Methods

Choose the deployment method that best fits your infrastructure:

1. **Docker** (Recommended) - Easiest, consistent across environments
2. **Linux Server with systemd** - Traditional server deployment
3. **Cloud Platforms** - Render, Railway, Heroku, AWS, etc.

---

## Environment Configuration

### 1. Create Environment File

```bash
cd backend
cp .env.example .env
```

### 2. Configure Required Variables

Edit `.env` with your production values:

```bash
# Flask Configuration
FLASK_ENV=production
FLASK_DEBUG=False
FLASK_HOST=0.0.0.0
FLASK_PORT=5000

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_USERNAME=sysdak4@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_FROM=sysdak4@gmail.com
EMAIL_TO=contact@sysdak.com

# CORS - Your production domains
ALLOWED_ORIGINS=https://sysdak.com,https://www.sysdak.com

# Security
SECRET_KEY=$(python -c 'import secrets; print(secrets.token_urlsafe(32))')

# Gunicorn
GUNICORN_WORKERS=4
GUNICORN_LOG_LEVEL=info
```

### 3. Generate Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to **App Passwords**
4. Generate password for "Mail"
5. Use generated password for `EMAIL_PASSWORD`

---

## Docker Deployment

### Prerequisites
- Docker 20.10+
- Docker Compose 2.0+

### Local Production Testing

```bash
# Build and start services
docker-compose up --build

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop services
docker-compose down
```

### Production Docker Deployment

```bash
# Build production image
cd backend
docker build -t sysdak-api:latest .

# Run container
docker run -d \
  --name sysdak-api \
  --env-file .env \
  -p 5000:5000 \
  --restart unless-stopped \
  sysdak-api:latest

# Check health
docker ps
curl http://localhost:5000/api/health
```

### Docker Compose Production

```bash
# Start services
docker-compose -f docker-compose.yml up -d

# Scale backend workers
docker-compose up -d --scale backend=3

# Update and restart
docker-compose pull
docker-compose up -d --build

# View logs
docker-compose logs -f backend nginx
```

---

## Linux Server Deployment

### 1. System Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y python3.12 python3.12-venv python3-pip git nginx

# Create application directory
sudo mkdir -p /var/www/sysdak
sudo chown $USER:$USER /var/www/sysdak
```

### 2. Clone Repository

```bash
cd /var/www/sysdak
git clone https://github.com/yourusername/sysdak-website.git .
```

### 3. Setup Python Environment

```bash
cd /var/www/sysdak/backend

# Create virtual environment
python3.12 -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configure Environment

```bash
# Copy and edit .env file
cp .env.example .env
nano .env  # Edit with your values
```

### 5. Test Gunicorn

```bash
# Test Gunicorn
gunicorn -c gunicorn.conf.py wsgi:application

# Test from another terminal
curl http://localhost:5000/api/health
```

### 6. Setup Systemd Service

```bash
# Copy service file
sudo cp deploy/sysdak-api.service /etc/systemd/system/

# Edit service file paths
sudo nano /etc/systemd/system/sysdak-api.service
# Update WorkingDirectory, Environment PATH, EnvironmentFile, and ExecStart paths

# Reload systemd
sudo systemctl daemon-reload

# Enable and start service
sudo systemctl enable sysdak-api
sudo systemctl start sysdak-api

# Check status
sudo systemctl status sysdak-api

# View logs
sudo journalctl -u sysdak-api -f
```

### 7. Setup Nginx

```bash
# Copy Nginx configuration
sudo cp deploy/nginx.conf /etc/nginx/sites-available/sysdak-api

# Edit configuration
sudo nano /etc/nginx/sites-available/sysdak-api
# Update server_name with your domain

# Create symlink
sudo ln -s /etc/nginx/sites-available/sysdak-api /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 8. Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test auto-renewal
sudo certbot renew --dry-run
```

---

## Cloud Platform Deployment

### Render.com

1. **Create account** at [render.com](https://render.com)

2. **New Web Service** from Git repository

3. **Configuration:**
   - **Environment:** Python 3
   - **Build Command:** `cd backend && pip install -r requirements.txt`
   - **Start Command:** `cd backend && gunicorn -c gunicorn.conf.py wsgi:application`
   - **Port:** 5000

4. **Environment Variables:** Add all from `.env`

5. **Deploy:** Automatic on git push

### Railway.app

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize
cd backend
railway init

# Add environment variables
railway variables set FLASK_ENV=production
# ... add all other variables

# Deploy
railway up
```

### Heroku

```bash
# Install Heroku CLI
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create sysdak-api

# Add buildpack
heroku buildpacks:set heroku/python

# Create Procfile in backend directory
echo "web: gunicorn -c gunicorn.conf.py wsgi:application" > backend/Procfile

# Deploy
git push heroku main

# Set environment variables
heroku config:set FLASK_ENV=production
# ... set all other variables

# View logs
heroku logs --tail
```

### AWS (EC2 + Elastic Beanstalk)

See [AWS Deployment Guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-flask.html)

---

## Monitoring & Maintenance

### Health Checks

```bash
# Check application health
curl http://localhost:5000/api/health

# Expected response:
# {"status":"healthy","timestamp":"...","email_configured":true}
```

### View Logs

**Docker:**
```bash
docker logs -f sysdak-api
docker-compose logs -f backend
```

**Systemd:**
```bash
sudo journalctl -u sysdak-api -f
sudo journalctl -u sysdak-api --since "1 hour ago"
```

**Nginx:**
```bash
sudo tail -f /var/log/nginx/sysdak-api-access.log
sudo tail -f /var/log/nginx/sysdak-api-error.log
```

### Performance Monitoring

**Check worker status:**
```bash
# Systemd
sudo systemctl status sysdak-api

# Docker
docker stats sysdak-api
```

**Monitor response times:**
```bash
# Install Apache Bench
sudo apt install apache2-utils

# Load test
ab -n 1000 -c 10 http://localhost:5000/api/health
```

### Backup

**Application backup:**
```bash
# Backup configuration
tar -czf sysdak-backup-$(date +%Y%m%d).tar.gz \
  /var/www/sysdak/backend/.env \
  /var/www/sysdak/backend/logs/
```

### Updates

**Using deployment script:**
```bash
cd /var/www/sysdak/backend
sudo bash deploy.sh
```

**Manual update:**
```bash
cd /var/www/sysdak
git pull origin main
cd backend
source venv/bin/activate
pip install -r requirements.txt
sudo systemctl restart sysdak-api
```

---

## Troubleshooting

### Service Won't Start

```bash
# Check service status
sudo systemctl status sysdak-api

# Check logs
sudo journalctl -u sysdak-api -n 50

# Common issues:
# 1. Missing environment variables
# 2. Port already in use
# 3. Permission issues
# 4. Python module not found
```

### High Memory Usage

```bash
# Check worker count
# Recommended: (CPU cores * 2) + 1

# Edit Gunicorn config
nano /var/www/sysdak/backend/gunicorn.conf.py
# Reduce 'workers' value

# Restart service
sudo systemctl restart sysdak-api
```

### Rate Limiting Issues

```bash
# Check Nginx rate limit logs
sudo grep "limiting requests" /var/log/nginx/sysdak-api-error.log

# Adjust rate limits in nginx.conf
sudo nano /etc/nginx/sites-available/sysdak-api
# Modify: limit_req_zone ... rate=XYZr/s
```

### Email Not Sending

```bash
# Test email configuration
curl -X POST http://localhost:5000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com"}'

# Common issues:
# 1. Wrong app password
# 2. 2FA not enabled
# 3. "Less secure apps" blocked
# 4. Gmail suspicious activity
```

### SSL Certificate Issues

```bash
# Renew Let's Encrypt certificate
sudo certbot renew

# Force renewal
sudo certbot renew --force-renewal

# Check certificate expiry
sudo certbot certificates
```

### Database Connection Issues

```bash
# If using database, check connection
# Add to .env:
# DATABASE_URL=postgresql://user:pass@host:5432/dbname

# Test connection
python -c "from app import db; db.create_all()"
```

---

## Security Checklist

Before going to production:

- [ ] **Rotate all exposed API keys** (Supabase, email)
- [ ] Set `FLASK_DEBUG=False`
- [ ] Configure `ALLOWED_ORIGINS` with production domains only
- [ ] Generate strong `SECRET_KEY`
- [ ] Enable HTTPS/SSL
- [ ] Set up firewall (allow only 80, 443, and SSH)
- [ ] Configure automated backups
- [ ] Set up monitoring/alerting
- [ ] Enable Supabase Row Level Security (RLS)
- [ ] Review Nginx rate limits
- [ ] Test error handling
- [ ] Verify logs are being written
- [ ] Test health check endpoint
- [ ] Configure log rotation

---

## Performance Optimization

### Recommended Gunicorn Settings

**Small server (1-2 GB RAM):**
```python
workers = 2
threads = 2
```

**Medium server (4 GB RAM):**
```python
workers = 4
threads = 4
```

**Large server (8+ GB RAM):**
```python
workers = 8
threads = 4
```

### Nginx Optimization

```nginx
# Add to nginx.conf
worker_processes auto;
worker_connections 1024;
keepalive_timeout 65;
```

---

## Support

- **Documentation:** [SECURITY.md](../SECURITY.md)
- **Issues:** Create GitHub issue
- **Email:** syscatch0@gmail.com

---

## Quick Start Commands

**Docker (Fastest):**
```bash
docker-compose up -d
```

**Linux Server:**
```bash
sudo systemctl start sysdak-api
sudo systemctl start nginx
```

**Development:**
```bash
cd backend
python app.py  # Not recommended for production
```

**Production:**
```bash
cd backend
gunicorn -c gunicorn.conf.py wsgi:application
```
