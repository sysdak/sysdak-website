# Deploying SysDak Website to Netlify

## Overview

**Netlify** is perfect for deploying your frontend (React + Vite). Your backend will need to be deployed separately on Render, Railway, or another service.

---

## 🚀 Quick Deployment (5 Minutes)

### Prerequisites

- ✅ Code pushed to GitHub
- ✅ Production build tested locally (`npm run build:prod`)
- ✅ Environment variables ready

---

## Step-by-Step Netlify Deployment

### Step 1: Create Netlify Account

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub (recommended for auto-deployment)
3. Click **Add new site** → **Import an existing project**

### Step 2: Connect GitHub Repository

1. Click **GitHub** (authorize if prompted)
2. Select your repository: `sysdak-website`
3. Click on the repository

### Step 3: Configure Build Settings

**Build Configuration:**

```yaml
Base directory: (leave empty)
Build command: npm run build:prod
Publish directory: dist
```

**Advanced: netlify.toml** (Optional but recommended)

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build:prod"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "9"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Step 4: Add Environment Variables

1. In Netlify dashboard, go to **Site settings** → **Environment variables**
2. Add these variables:

```bash
VITE_API_URL = https://your-backend-api.onrender.com/api
VITE_RECAPTCHA_SITE_KEY = your-recaptcha-site-key
VITE_STATS_YEARS_EXPERIENCE = 5+
VITE_STATS_CLIENTS_SERVED = 10+
VITE_STATS_PROJECTS_COMPLETED = 10+
VITE_STATS_CLIENT_SATISFACTION = 99%
VITE_SOCIAL_LINKEDIN = https://linkedin.com/company/sysdak
VITE_SOCIAL_TWITTER = https://twitter.com/sysdak
VITE_SOCIAL_FACEBOOK = https://facebook.com/sysdak
VITE_SOCIAL_INSTAGRAM = https://instagram.com/sysdak
VITE_SOCIAL_GITHUB = https://github.com/sysdak
```

### Step 5: Deploy!

1. Click **Deploy site**
2. Wait 2-3 minutes for build
3. Your site is live at: `https://random-name-123.netlify.app`

---

## 🌐 Custom Domain Setup

### Option 1: Netlify DNS (Easiest)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain: `sysdak.com`
4. Netlify will provide nameservers
5. Update nameservers at your domain registrar
6. SSL certificate auto-configured ✅

### Option 2: External DNS

1. Add custom domain in Netlify
2. Add DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify load balancer)
   
   Type: CNAME
   Name: www
   Value: random-name-123.netlify.app
   ```
3. Wait for DNS propagation (up to 24 hours)

---

## 🔄 Continuous Deployment

**Automatic deployment configured!**

Every time you push to GitHub:
1. Netlify detects the push
2. Runs `npm run build:prod`
3. Deploys new version
4. Takes 2-3 minutes

**Branch Deploys:**
- `main` branch → Production site
- Other branches → Preview URLs

---

## 🔧 Deploy Backend API

Since Netlify only hosts static sites, deploy your backend separately:

### Recommended: Render.com

1. Go to [render.com](https://render.com)
2. **New** → **Web Service**
3. Connect GitHub repository
4. Configure:
   ```
   Build Command: cd backend && pip install -r requirements.txt
   Start Command: cd backend && gunicorn -c gunicorn.conf.py wsgi:application
   ```
5. Add environment variables (from `backend/.env.example`)
6. Deploy

**Your backend URL:** `https://sysdak-api.onrender.com`

**Update Netlify:** Add this URL to `VITE_API_URL` environment variable

---

## ✅ Post-Deployment Checklist

After deployment:

- [ ] Visit your Netlify URL
- [ ] Check all pages load
- [ ] Test contact form (ensure backend URL is correct)
- [ ] Verify reCAPTCHA works
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate (green lock)
- [ ] Test all navigation links
- [ ] Check browser console for errors

---

## 🐛 Common Issues & Solutions

### Build Fails

**Error:** `Command failed with exit code 1`

**Solution:**
```powershell
# Test build locally
npm run build:prod

# Check for errors
# Fix any issues, commit, and push
```

### Environment Variables Not Working

**Issue:** Variables showing as `undefined`

**Solution:**
- Ensure variables start with `VITE_`
- Re-deploy after adding variables
- Clear cache: Settings → Build & Deploy → Clear cache

### Contact Form Not Working

**Issue:** Form submission fails

**Solution:**
1. Check `VITE_API_URL` points to your backend
2. Verify backend is deployed and running
3. Check CORS allows your Netlify domain
4. Test backend health: `https://your-backend/api/health`

### API CORS Error

**Issue:** `CORS policy: No 'Access-Control-Allow-Origin'`

**Solution:**
Update `ALLOWED_ORIGINS` in backend `.env`:
```bash
ALLOWED_ORIGINS=https://your-site.netlify.app,https://yourdomain.com
```

---

## 📊 Netlify Features

**Free Tier Includes:**
- ✅ 100 GB bandwidth/month
- ✅ Unlimited sites
- ✅ Automatic HTTPS/SSL
- ✅ Continuous deployment from Git
- ✅ Instant rollback
- ✅ Deploy previews
- ✅ Form handling
- ✅ Serverless functions

---

## 🔐 Security Best Practices

1. **Enable HTTPS** (automatic with Netlify)
2. **Add security headers** (via `netlify.toml`)
3. **Restrict backend CORS** to your Netlify domain
4. **Use environment variables** for sensitive data
5. **Enable branch protection** on GitHub main branch

---

## 📱 Testing Your Site

**Performance:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Target: 90+ score

**Security:**
- [SecurityHeaders.com](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

**Mobile:**
- Test on actual devices
- Chrome DevTools responsive mode

---

## 🎯 Quick Commands

```powershell
# Build locally
npm run build:prod

# Preview build
npm run preview

# Deploy via Netlify CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify CLI](https://cli.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
- [Custom Domain Setup](https://docs.netlify.com/domains-https/custom-domains/)

---

## ✨ Your Complete Stack

**Frontend (Netlify):**
- URL: `https://sysdak.com`
- Auto-deployed from GitHub
- Free SSL certificate
- CDN worldwide

**Backend (Render):**
- URL: `https://api.sysdak.com`
- Production Gunicorn server
- Auto-scaling
- Health monitoring

---

**Time to deploy: 5-10 minutes** ⏱️

**Ready? Let's deploy!** 🚀
