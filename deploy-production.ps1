# Production Deployment Script for Windows
# Run with: .\deploy-production.ps1

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🚀 SysDak Website Production Deployment" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Step 1: Environment Check
Write-Host "`nStep 1: Checking environment variables..." -ForegroundColor Yellow

if (!(Test-Path ".env.production")) {
    Write-Host "❌ Error: .env.production file not found!" -ForegroundColor Red
    Write-Host "Please create .env.production with your production settings"
    exit 1
}

if (!(Test-Path "backend\.env")) {
    Write-Host "❌ Error: backend\.env file not found!" -ForegroundColor Red
    Write-Host "Please create backend\.env with your production settings"
    exit 1
}

Write-Host "✅ Environment files found" -ForegroundColor Green

# Step 2: Install Dependencies
Write-Host "`nStep 2: Installing dependencies..." -ForegroundColor Yellow

Write-Host "Installing frontend dependencies..."
npm install

Write-Host "Installing backend dependencies..."
Push-Location backend
pip install -r requirements.txt
Pop-Location

Write-Host "✅ Dependencies installed" -ForegroundColor Green

# Step 3: Build Frontend
Write-Host "`nStep 3: Building frontend for production..." -ForegroundColor Yellow

npm run build:prod

if (!(Test-Path "dist")) {
    Write-Host "❌ Error: Build failed - dist folder not created" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Frontend built successfully" -ForegroundColor Green

# Step 4: Run Tests
Write-Host "`nStep 4: Running tests..." -ForegroundColor Yellow

Write-Host "Checking backend configuration..."
Push-Location backend
python -c "from app import app; print('Backend configuration OK')"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Backend configuration error" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

Write-Host "✅ Tests passed" -ForegroundColor Green

# Step 5: Security Checks
Write-Host "`nStep 5: Running security checks..." -ForegroundColor Yellow

if (Select-String -Path "backend\.env" -Pattern "FLASK_DEBUG=True" -Quiet) {
    Write-Host "❌ Warning: FLASK_DEBUG is enabled in backend\.env" -ForegroundColor Red
    Write-Host "Please set FLASK_DEBUG=False for production"
    exit 1
}

Write-Host "✅ Security checks passed" -ForegroundColor Green

# Step 6: Build Summary
Write-Host "`nStep 6: Build Summary" -ForegroundColor Yellow

$distSize = (Get-ChildItem -Path "dist" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "Frontend build size: $([math]::Round($distSize, 2)) MB"
Write-Host "Build location: $(Get-Location)\dist"

# Step 7: Deployment Instructions
Write-Host "`n==========================================" -ForegroundColor Green
Write-Host "✅ Production build complete!" -ForegroundColor Green
Write-Host "==========================================`n" -ForegroundColor Green

Write-Host "Next steps:"
Write-Host "1. Deploy frontend (dist folder) to your hosting service"
Write-Host "2. Deploy backend using: cd backend && gunicorn -c gunicorn.conf.py wsgi:application"
Write-Host "3. Configure DNS to point to your servers"
Write-Host "4. Set up SSL/TLS certificates`n"

Write-Host "Quick deploy options:"
Write-Host "  - Docker: docker-compose up -d --build"
Write-Host "  - Render: Push to GitHub and deploy via Render dashboard"
Write-Host "  - Vercel: vercel --prod`n"

Write-Host "For detailed instructions, see PRODUCTION_DEPLOY.md"
Write-Host "==========================================" -ForegroundColor Cyan
