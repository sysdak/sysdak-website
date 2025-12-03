# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this project, please report it responsibly:

1. **DO NOT** open a public GitHub issue
2. Email security concerns to: syscatch0@gmail.com
3. Include detailed information about the vulnerability
4. Allow 48 hours for initial response

## Security Best Practices

### Environment Variables

**CRITICAL:** Never commit `.env` files to version control.

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   cp backend/.env.example backend/.env
   ```

2. Fill in your actual credentials in `.env` files

3. Ensure `.env` is in `.gitignore` (already configured)

### Deployment Checklist

Before deploying to production:

- [ ] Rotate any API keys that were exposed in git history
- [ ] Set `FLASK_DEBUG=False` in production environment
- [ ] Configure `ALLOWED_ORIGINS` to only include your production domain(s)
- [ ] Enable HTTPS and set Talisman's `force_https=True`
- [ ] Use strong, randomly generated values for `SECRET_KEY`
- [ ] Configure proper email authentication (use app-specific passwords)
- [ ] Set up monitoring and logging
- [ ] Enable firewall rules to restrict API access
- [ ] Implement database Row Level Security (RLS) policies in Supabase
- [ ] Set up automated security scanning in CI/CD

### Supabase Security

Your Supabase ANON key IS public (by design), but you MUST:

1. **Enable Row Level Security (RLS)** on all tables:
   ```sql
   ALTER TABLE your_table ENABLE ROW LEVEL SECURITY;
   ```

2. **Create appropriate policies**:
   ```sql
   -- Example: Users can only read their own data
   CREATE POLICY "Users can read own data"
   ON your_table
   FOR SELECT
   USING (auth.uid() = user_id);
   ```

3. **Rotate keys** if exposed in git history

### CORS Configuration

The backend is configured to only accept requests from allowed origins. Set in `.env`:

```bash
# Development
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# Production
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Contact form: 5 requests per hour per IP
- Test email: 3 requests per hour per IP
- Health check: 50 requests per hour per IP

### Input Validation

All user input is validated and sanitized:
- Maximum field lengths enforced
- Email validation using industry-standard library
- HTML special characters escaped to prevent XSS
- Dangerous patterns blocked

## Security Testing

### Automated Security Checks

Run before each deployment:

```bash
# Check Python dependencies
cd backend
pip install safety bandit
safety check
bandit -r . -ll

# Check Node dependencies
cd ..
npm audit
npm audit fix  # Fix automatically if possible
```

### Manual Security Testing

Test key security features:

1. **CORS Protection**:
   ```bash
   # Should reject requests from unauthorized origins
   curl -X POST http://localhost:5000/api/contact \
     -H "Origin: http://malicious-site.com" \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
   ```

2. **Rate Limiting**:
   ```bash
   # 6th request should be blocked
   for i in {1..6}; do
     curl -X POST http://localhost:5000/api/contact \
       -H "Content-Type: application/json" \
       -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
   done
   ```

3. **XSS Prevention**:
   ```bash
   # Script tags should be escaped
   curl -X POST http://localhost:5000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"<script>alert(1)</script>","email":"test@test.com","subject":"XSS","message":"<img src=x onerror=alert(1)>"}'
   ```

4. **Security Headers**:
   ```bash
   # Check for security headers
   curl -I http://localhost:5000/api/health
   # Should include: X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security
   ```

### Recommended Tools

- [OWASP ZAP](https://www.zaproxy.org/) - Web application security scanner
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) - Check for vulnerable dependencies
- [Safety](https://pyup.io/safety/) - Python dependency vulnerability scanner
- [Bandit](https://bandit.readthedocs.io/) - Python security linter

## Security Features Implemented

✅ **Authentication & Authorization**
- Protected routes with authentication checks
- Supabase integration for user management

✅ **Input Validation**
- Comprehensive form validation
- Email format validation using `email-validator`
- Length limits on all inputs
- Dangerous pattern detection

✅ **XSS Prevention**
- All user input sanitized with `html.escape()`
- Content Security Policy headers
- X-XSS-Protection header

✅ **CSRF Protection**
- Origin-based CORS restrictions
- SameSite cookie attributes
- Request origin validation

✅ **Rate Limiting**
- IP-based rate limiting on sensitive endpoints
- Prevents email bombing and DoS attacks

✅ **Security Headers**
- Content-Security-Policy
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection

✅ **Secrets Management**
- Environment variables for all secrets
- `.env` files excluded from git
- Example templates provided

✅ **TLS/SSL**
- Certificate validation enabled
- Minimum TLS version 1.2
- STARTTLS for email

✅ **Error Handling**
- Generic error messages to users
- Detailed errors logged securely
- No stack trace exposure

✅ **Logging & Monitoring**
- Request logging
- Email addresses redacted in logs
- Error tracking

## Known Limitations

1. **CSRF Tokens**: Not implemented for API endpoints (uses CORS instead)
2. **Session Management**: Relies on Supabase Auth
3. **File Uploads**: Not implemented (no file upload security needed)
4. **API Versioning**: Not implemented (consider for future)

## Security Update Policy

- Dependencies are checked monthly for vulnerabilities
- Critical security patches applied within 24 hours
- High severity issues addressed within 1 week
- Security updates documented in CHANGELOG

## Compliance

This project follows security best practices from:
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [CWE Top 25](https://cwe.mitre.org/top25/)

## Contact

For security-related questions or concerns: syscatch0@gmail.com
