# AWS EC2 Deployment Guide for Sysdak Backend API

## Complete Step-by-Step Deployment to https://emailservice.sysdak.com

---

## Prerequisites

- ✅ AWS Account
- ✅ Domain (sysdak.com) with access to DNS settings
- ✅ Backend code ready (Flask app)
- ✅ Local terminal with SSH access

---

## Part 1: Launch EC2 Instance (15 minutes)

### Step 1: Create EC2 Instance

1. **Go to AWS Console** → EC2 → Launch Instance

2. **Configure Instance:**
   ```
   Name: sysdak-backend
   AMI: Ubuntu Server 22.04 LTS
   Instance Type: t2.micro (Free tier) or t2.small
   Key Pair: Create new → Download .pem file → Save as sysdak-backend.pem
   ```

3. **Network Settings:**
   ```
   ✅ Allow SSH (Port 22) - Your IP only
   ✅ Allow HTTP (Port 80) - Anywhere
   ✅ Allow HTTPS (Port 443) - Anywhere
   ✅ Custom TCP (Port 5000) - Anywhere (for testing)
   ```

4. **Storage:**
   ```
   20 GB gp3 (SSD)
   ```

5. **Click "Launch Instance"**

6. **Note the Public IP** (e.g., `54.123.45.67`)

---

## Part 2: Connect to EC2 & Setup (20 minutes)

### Step 1: Connect via SSH

```powershell
# Windows PowerShell
# Move to where you saved the .pem file
cd Downloads

# Set permissions (Windows)
icacls sysdak-backend.pem /inheritance:r
icacls sysdak-backend.pem /grant:r "%username%:R"

# Connect to EC2
ssh -i sysdak-backend.pem ubuntu@54.123.45.67
```

### Step 2: Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 3: Install Python & Dependencies

```bash
# Install Python 3 and pip
sudo apt install python3-pip python3-venv nginx -y

# Install Git
sudo apt install git -y
```

### Step 4: Clone Your Repository

```bash
# Option 1: If code is on GitHub
cd /home/ubuntu
git clone https://github.com/yourusername/sysdak-website.git
cd sysdak-website/backend

# Option 2: Upload files manually via SCP (from your local machine)
# scp -i sysdak-backend.pem -r backend ubuntu@54.123.45.67:/home/ubuntu/
```

### Step 5: Setup Python Virtual Environment

```bash
cd /home/ubuntu/sysdak-website/backend

# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
pip install gunicorn
```

### Step 6: Configure Environment Variables

```bash
# Create .env file
nano .env
```

**Add this content:**
```bash
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

# Security
ALLOWED_ORIGINS=https://sysdak.com,https://www.sysdak.com
SECRET_KEY=your-secret-key-here

# Gunicorn
GUNICORN_WORKERS=2
GUNICORN_LOG_LEVEL=info
```

**Save:** `Ctrl+O`, Enter, `Ctrl+X`

### Step 7: Test Backend

```bash
# Test with Gunicorn
gunicorn -c gunicorn.conf.py wsgi:application

# Test in browser: http://54.123.45.67:5000/api/health
# Should see: {"status": "healthy"}
```

---

## Part 3: Setup Nginx Reverse Proxy (10 minutes)

### Step 1: Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/sysdak-backend
```

**Add this configuration:**
```nginx
server {
    listen 80;
    server_name emailservice.sysdak.com;

    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # CORS headers (if needed)
        add_header Access-Control-Allow-Origin * always;
    }

    location /api/health {
        proxy_pass http://127.0.0.1:5000/api/health;
    }
}
```

**Save:** `Ctrl+O`, Enter, `Ctrl+X`

### Step 2: Enable Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/sysdak-backend /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

## Part 4: Setup Domain & DNS (10 minutes)

### Step 1: Add DNS Record

Go to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

**Add A Record:**
```
Type: A
Name: emailservice
Value: 54.123.45.67  (Your EC2 public IP)
TTL: 300 (5 minutes)
```

### Step 2: Wait for DNS Propagation

```bash
# Test DNS (from your local machine)
nslookup emailservice.sysdak.com

# Should return your EC2 IP
```

**Usually takes 5-30 minutes**

---

## Part 5: Setup SSL Certificate (15 minutes)

### Step 1: Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### Step 2: Get SSL Certificate

```bash
sudo certbot --nginx -d emailservice.sysdak.com

# Follow prompts:
# Email: your-email@example.com
# Agree to terms: Y
# Share email: N
# Redirect HTTP to HTTPS: 2 (Yes)
```

**Certbot will automatically:**
- Get SSL certificate
- Update Nginx config
- Setup auto-renewal

### Step 3: Verify SSL

Visit: `https://emailservice.sysdak.com/api/health`

Should see:
```json
{
  "status": "healthy",
  "timestamp": "2025-12-03T12:33:00Z"
}
```

---

## Part 6: Setup Systemd Service (Auto-start) (10 minutes)

### Step 1: Create Service File

```bash
sudo nano /etc/systemd/system/sysdak-backend.service
```

**Add this:**
```ini
[Unit]
Description=Sysdak Backend API
After=network.target

[Service]
User=ubuntu
Group=ubuntu
WorkingDirectory=/home/ubuntu/sysdak-website/backend
Environment="PATH=/home/ubuntu/sysdak-website/backend/venv/bin"
ExecStart=/home/ubuntu/sysdak-website/backend/venv/bin/gunicorn -c gunicorn.conf.py wsgi:application
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

**Save:** `Ctrl+O`, Enter, `Ctrl+X`

### Step 2: Enable & Start Service

```bash
# Reload systemd
sudo systemctl daemon-reload

# Enable service (start on boot)
sudo systemctl enable sysdak-backend

# Start service
sudo systemctl start sysdak-backend

# Check status
sudo systemctl status sysdak-backend

# Should show "active (running)"
```

---

## Part 7: Update Frontend to Use New API (5 minutes)

### On Your Local Machine:

Update `frontend/.env.production`:
```bash
VITE_API_URL=https://emailservice.sysdak.com/api
```

Update `backend/.env` on EC2:
```bash
ALLOWED_ORIGINS=https://sysdak.com,https://www.sysdak.com
```

Restart backend:
```bash
sudo systemctl restart sysdak-backend
```

---

## Part 8: Testing & Verification

### Test All Endpoints:

```bash
# Health check
curl https://emailservice.sysdak.com/api/health

# Test email (replace with your data)
curl -X POST https://emailservice.sysdak.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Testing from EC2",
    "recaptchaToken": "test"
  }'
```

---

## Common Commands

```bash
# View logs
sudo journalctl -u sysdak-backend -f

# Restart service
sudo systemctl restart sysdak-backend

# Restart Nginx
sudo systemctl restart nginx

# Check service status
sudo systemctl status sysdak-backend

# Pull latest code
cd /home/ubuntu/sysdak-website
git pull
sudo systemctl restart sysdak-backend
```

---

## Security Best Practices

1. **Firewall Setup:**
```bash
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
```

2. **Update Regularly:**
```bash
sudo apt update && sudo apt upgrade -y
```

3. **Monitor Logs:**
```bash
sudo tail -f /var/log/nginx/access.log
sudo journalctl -u sysdak-backend -f
```

---

## Costs

**AWS EC2 t2.micro:**
- Free tier: First year free
- After: ~$8-10/month

**Alternative:** AWS Lightsail $3.50/month

---

## Troubleshooting

### Issue: Can't connect to EC2
```bash
# Check security group allows your IP on port 22
# Verify .pem file permissions
```

### Issue: SSL certificate fails
```bash
# Ensure DNS is propagated first
# Check Nginx config: sudo nginx -t
# Check port 80/443 are open in security group
```

### Issue: Backend not responding
```bash
# Check service status
sudo systemctl status sysdak-backend

# Check logs
sudo journalctl -u sysdak-backend -n 50

# Restart
sudo systemctl restart sysdak-backend
```

---

## Summary

**Your API is now live at:**
```
https://emailservice.sysdak.com
```

**Endpoints:**
- `GET /api/health` - Health check
- `POST /api/contact` - Contact form
- `POST /api/test-email` - Test email

**Auto-starts on boot:** ✅
**SSL Certificate:** ✅ (Auto-renews)
**Production-ready:** ✅

---

**Total Time:** ~90 minutes
**Monthly Cost:** $0-10 (Free tier first year)

Your backend is now deployed and production-ready! 🚀
