# Frontend Environment Variables Verification Checklist

## ✅ Required Variables in Your `.env` File

Your `.env` file should contain these variables (compare with `.env.example`):

### 1. Social Media Links
```bash
VITE_SOCIAL_LINKEDIN=https://linkedin.com/company/sysdak
VITE_SOCIAL_TWITTER=https://twitter.com/sysdak
VITE_SOCIAL_FACEBOOK=https://facebook.com/sysdak
VITE_SOCIAL_INSTAGRAM=https://instagram.com/sysdak
VITE_SOCIAL_GITHUB=https://github.com/sysdak
```
**Used in:** Footer, social media links
**Status:** ✅ Optional (has defaults in code)

---

### 2. API Configuration
```bash
VITE_API_URL=http://localhost:5000/api
```
**Used in:** `apiService.ts` - Contact form submissions
**Status:** ✅ Required (defaults to http://localhost:5000/api)
**For production:** Change to `https://your-backend-api.com/api`

---

### 3. Google reCAPTCHA
```bash
VITE_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```
**Used in:** `Contact.tsx` - Form spam protection
**Status:** ⚠️ **REQUIRED** (currently using test key)
**Get key:** https://www.google.com/recaptcha/admin

---

### 4. Company Statistics
```bash
VITE_STATS_YEARS_EXPERIENCE=5+
VITE_STATS_CLIENTS_SERVED=10+
VITE_STATS_PROJECTS_COMPLETED=10+
VITE_STATS_CLIENT_SATISFACTION=99%
```
**Used in:** `About.tsx` - Statistics section
**Status:** ✅ Optional (has fallback defaults)

---

## 🔍 How to Verify Your .env File

### Step 1: Check File Exists
```powershell
# Check if .env exists
Test-Path .env
# Should return: True
```

### Step 2: Compare with Example
```powershell
# View your .env.example
notepad .env.example

# Open your .env
notepad .env

# Make sure all variables from .env.example are in .env
```

### Step 3: Verify Variables in Browser

1. **Start dev server** (if not running):
   ```powershell
   npm run dev
   ```

2. **Open browser console** (F12)

3. **Check variables loaded:**
   ```javascript
   // Paste in console:
   console.log('API URL:', import.meta.env.VITE_API_URL);
   console.log('reCAPTCHA Key:', import.meta.env.VITE_RECAPTCHA_SITE_KEY);
   console.log('Stats:', {
     years: import.meta.env.VITE_STATS_YEARS_EXPERIENCE,
     clients: import.meta.env.VITE_STATS_CLIENTS_SERVED,
     projects: import.meta.env.VITE_STATS_PROJECTS_COMPLETED,
     satisfaction: import.meta.env.VITE_STATS_CLIENT_SATISFACTION
   });
   ```

4. **Values should NOT be `undefined`**

---

## ⚠️ Common Issues

### Issue 1: Variables are `undefined`

**Causes:**
- Variable name doesn't start with `VITE_`
- Typo in variable name
- `.env` file not in project root
- Server not restarted after adding variables

**Solution:**
```powershell
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

---

### Issue 2: Old values showing

**Cause:** Vite caches environment variables

**Solution:**
```powershell
# Clear cache and restart
Remove-Item -Recurse -Force node_modules/.vite
npm run dev
```

---

### Issue 3: reCAPTCHA shows "Invalid site key"

**Cause:** Using test key or wrong key for domain

**Solution:**
1. Get production key from Google reCAPTCHA
2. Add your domain (localhost for dev)
3. Update `VITE_RECAPTCHA_SITE_KEY` in `.env`
4. Restart server

---

## ✅ Quick Verification Test

Run this in your browser console (F12) while on the site:

```javascript
// Copy and paste this entire block:
const checkEnv = () => {
  const vars = {
    'API URL': import.meta.env.VITE_API_URL,
    'reCAPTCHA Key': import.meta.env.VITE_RECAPTCHA_SITE_KEY,
    'Years Experience': import.meta.env.VITE_STATS_YEARS_EXPERIENCE,
    'Clients Served': import.meta.env.VITE_STATS_CLIENTS_SERVED,
    'Projects Completed': import.meta.env.VITE_STATS_PROJECTS_COMPLETED,
    'Client Satisfaction': import.meta.env.VITE_STATS_CLIENT_SATISFACTION
  };
  
  console.log('=== Environment Variables Check ===');
  Object.entries(vars).forEach(([key, value]) => {
    const status = value ? '✅' : '❌';
    console.log(`${status} ${key}: ${value || 'MISSING'}`);
  });
  
  const allSet = Object.values(vars).every(v => v);
  console.log('\n' + (allSet ? '✅ All variables configured!' : '⚠️  Some variables missing'));
};

checkEnv();
```

**Expected Output:**
```
=== Environment Variables Check ===
✅ API URL: http://localhost:5000/api
✅ reCAPTCHA Key: 6LdQtB8sAAAAAO8kF3zbJeMLl5U0trOS9RYx2vE_
✅ Years Experience: 5+
✅ Clients Served: 10+
✅ Projects Completed: 10+
✅ Client Satisfaction: 99%

✅ All variables configured!
```

---

## 📋 Your Current `.env` Should Look Like:

```bash
# Social Media Links
VITE_SOCIAL_LINKEDIN=https://linkedin.com/company/sysdak
VITE_SOCIAL_TWITTER=https://twitter.com/sysdak
VITE_SOCIAL_FACEBOOK=https://facebook.com/sysdak
VITE_SOCIAL_INSTAGRAM=https://instagram.com/sysdak
VITE_SOCIAL_GITHUB=https://github.com/sysdak

# API Configuration
VITE_API_URL=http://localhost:5000/api

# Google reCAPTCHA v2
VITE_RECAPTCHA_SITE_KEY=6LdQtB8sAAAAAO8kF3zbJeMLl5U0trOS9RYx2vE_

# Company Statistics
VITE_STATS_YEARS_EXPERIENCE=5+
VITE_STATS_CLIENTS_SERVED=10+
VITE_STATS_PROJECTS_COMPLETED=10+
VITE_STATS_CLIENT_SATISFACTION=99%
```

---

## 🎯 What Each Variable Does

| Variable | Component | Purpose |
|----------|-----------|---------|
| `VITE_API_URL` | apiService.ts | Backend API endpoint for contact form |
| `VITE_RECAPTCHA_SITE_KEY` | Contact.tsx | Spam protection on contact form |
| `VITE_STATS_YEARS_EXPERIENCE` | About.tsx | Display years of experience |
| `VITE_STATS_CLIENTS_SERVED` | About.tsx | Display number of clients |
| `VITE_STATS_PROJECTS_COMPLETED` | About.tsx | Display projects count |
| `VITE_STATS_CLIENT_SATISFACTION` | About.tsx | Display satisfaction percentage |
| `VITE_SOCIAL_*` | Footer/Social | Social media profile links |

---

## ✅ Final Checklist

- [ ] `.env` file exists in project root
- [ ] All variables start with `VITE_`
- [ ] No typos in variable names
- [ ] Values match your requirements
- [ ] Dev server restarted after changes
- [ ] Verified in browser console (F12)
- [ ] No `undefined` values
- [ ] Contact form works
- [ ] Statistics display correctly

---

**Need help?** Run the verification script above in your browser console!
