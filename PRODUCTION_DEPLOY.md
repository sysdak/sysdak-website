# Production Deployment Guide - SysDak Website

## Quick Deployment Checklist

### ✅ Step 1: Update Production Environment Variables

**Frontend (.env.production):**
```bash
# Social Media Links
VITE_SOCIAL_LINKEDIN=https://linkedin.com/company/sysdak
VITE_SOCIAL_TWITTER=https://twitter.com/sysdak
VITE_SOCIAL_FACEBOOK=https://facebook.com/sysdak
VITE_SOCIAL_INSTAGRAM=https://instagram.com/sysdak
VITE_SOCIAL_GITHUB=https://github.com/sysdak

# API Configuration - UPDATE WITH YOUR PRODUCTION API URL
VITE_API_URL=https://api.yourdomain.com/api

# Google reCAPTCHA v2 - UPDATE WITH YOUR ACTUAL SITE KEY
VITE_RECAPTCHA_SITE_KEY=your-production-recaptcha-site-key

# Company Statistics
VITE_STATS_YEARS_EXPERIENCE=5+
VITE_STATS_CLIENTS_SERVED=10+
VITE_STATS_PROJECTS_COMPLETED=10+
VITE_STATS_CLIENT_SATISFACTION=99%
```

**Backend (.env):**
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

# CORS - UPDATE WITH YOUR PRODUCTION DOMAINS
ALLOWED_ORIGINS=https://sysdak.com,https://www.sysdak.com

# Security - GENERATE NEW SECRET KEY
SECRET_KEY=generate-random-secret-key-here

# Gunicorn
GUNICORN_WORKERS=4
GUNICORN_LOG_LEVEL=info
```

---

## 🚀 Build for Production

### Frontend Build

```powershell
# Build production frontend
npm run build:prod

# Preview production build locally
npm run preview
```

**Expected output:**
- Optimized bundle in `dist/` folder
- Minified JavaScript and CSS
- Optimized images and assets

### Backend Production

Already configured with Gunicorn. Test with:

```powershell
cd backend
gunicorn -c gunicorn.conf.py wsgi:application
```

---

## 📦 Deployment Options

### Option 1: Docker (Recommended)

```powershell
# Build and run with Docker Compose
docker-compose up -d --build

# Check logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Option 2: Render.com (Easiest)

**Backend:**
1. Push code to GitHub
2. Go to [Render.com](https://render.com)
3. New Web Service → Connect your repo
4. Settings:
   - **Build Command:** `cd backend && pip install -r requirements.txt`
   - **Start Command:** `cd backend && gunicorn -c gunicorn.conf.py wsgi:application`
   - **Environment:** Add all backend .env variables
5. Deploy!

**Frontend:**
1. New Static Site → Connect your repo
2. Settings:
   - **Build Command:** `npm install && npm run build:prod`
   - **Publish Directory:** `dist`
   - **Environment:** Add all frontend .env variables
3. Deploy!

### Option 3: Vercel (Frontend) + Render (Backend)

**Frontend on Vercel:**
```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Backend on Render:** (same as Option 2)

### Option 4: Traditional VPS (DigitalOcean, AWS EC2, etc.)

See [backend/DEPLOYMENT.md](file:///c:/Users/moham/Documents/projects/project/backend/DEPLOYMENT.md) for detailed Linux server setup.

---

## 🔒 Security Checklist (CRITICAL)

Before deploying:

- [ ] **Rotate Supabase keys** (were exposed in git)
- [ ] **Generate new reCAPTCHA keys** for production domain
- [ ] **Create Gmail App Password** for email service
- [ ] **Set FLASK_DEBUG=False**
- [ ] **Update ALLOWED_ORIGINS** to production domains only
- [ ] **Generate strong SECRET_KEY:**
  ```bash
  python -c "import secrets; print(secrets.token_urlsafe(32))"
  ```
- [ ] **Enable HTTPS/SSL** on your domain
- [ ] **Configure Supabase RLS** if using database

---

## 🧪 Test Before Deployment

### Local Production Test

```powershell
# Frontend
npm run build:prod
npm run preview

# Backend
cd backend
set FLASK_DEBUG=False
python app.py
```

### Test Checklist

- [ ] Contact form works
- [ ] reCAPTCHA validation works
- [ ] Email sending works
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast page load (< 3 seconds)

---

## 🌐 DNS & Domain Setup

1. **Point domain to hosting:**
   - Render: Automatic (use Render DNS or CNAME)
   - Vercel: Add domain in settings
   - VPS: Point A record to server IP

2. **Configure SSL:**
   - Render/Vercel: Automatic
   - VPS: Use Let's Encrypt (see DEPLOYMENT.md)

3. **Set up subdomains:**
   - `www.sysdak.com` → Frontend
   - `api.sysdak.com` → Backend API

---

## 📊 Post-Deployment Monitoring

### Health Checks

```bash
# Backend health
curl https://api.yourdomain.com/api/health

# Frontend
curl https://yourdomain.com
```

### Monitor

- Response times (should be < 200ms)
- Error rates (should be 0%)
- Email delivery
- Rate limiting effectiveness

---

## 🐛 Troubleshooting

### Contact Form Not Working
1. Check backend logs
2. Verify Gmail app password
3. Test with `/api/test-email` endpoint
4. Check CORS settings

### reCAPTCHA Error
1. Verify site key is for correct domain
2. Check domain is registered in Google Console
3. Ensure using production key, not test key

### 500 Errors
1. Check `FLASK_DEBUG=False`
2. Review backend logs
3. Verify all environment variables set
4. Check email configuration

---

## 📝 Quick Commands Reference

```powershell
# Build frontend
npm run build:prod

# Run backend prod
cd backend
gunicorn -c gunicorn.conf.py wsgi:application

# Docker deploy
docker-compose up -d --build

# Check logs
docker-compose logs -f backend
docker-compose logs -f nginx
```

---

## ✅ Final Verification

After deployment:

1. Visit your website: `https://yourdomain.com`
2. Test contact form submission
3. Check email delivery
4. Verify all links work
5. Test on mobile devices
6. Check browser console for errors
7. Verify SSL certificate (green lock icon)
8. Test page load speed: [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🎯 Estimated Deployment Time

- **Render.com:** 15-20 minutes
- **Vercel:** 10-15 minutes
- **Docker:** 5-10 minutes
- **VPS:** 30-60 minutes

---

## 📚 Additional Resources

- [Backend Deployment Guide](file:///c:/Users/moham/Documents/projects/project/backend/DEPLOYMENT.md)
- [Security Documentation](file:///c:/Users/moham/Documents/projects/project/SECURITY.md)
- [Walkthrough](file:///C:/Users/moham/.gemini/antigravity/brain/6cc27a8c-61bb-4799-afca-32dd8060dc04/walkthrough.md)

---

**Ready to deploy? Follow Option 2 (Render.com) for the fastest deployment!** 🚀
