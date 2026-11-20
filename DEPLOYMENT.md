# 🚀 Webyotic Landing Page - Deployment & Client Guide

This project is a high-performance **Laravel + React (Tailwind CSS)** web application built to pixel-perfection matching the Webyotic brand guidelines.

---

## 🌟 What's Included

1. **Pixel-Perfect Webyotic Landing Page**:
   - Header with contact info, tagline & social links.
   - Sticky navbar with drop-down services, quick links & "Get a Free Quote" CTA.
   - High-converting Hero section with 3D tech mockup, WhatsApp trigger & bullet values.
   - 6 Services with detail modals (`Website Development`, `Laravel Development`, `WordPress`, `E-Commerce`, `SEO`, `Hosting`).
   - "About Webyotic" & "Why Choose Us" sections with 6-point credibility cards.
   - Interactive Portfolio / Recent Work carousel & category filter with case study modals.
   - 3 Client Testimonial cards with 5-star ratings.
   - Transparent & Affordable Pricing cards with **INR (₹) / USD ($)** currency switcher.
   - Lead Capture Form connected to Laravel API (`/api/contact`) with SQLite database & instant celebration confetti.
   - Interactive **Instant Quote Estimator Modal** allowing clients to calculate budgets dynamically.
   - FAQ Accordions answering common client questions.
   - Navy footer with contact details (Ludhiana, Punjab, India) & Back-to-Top button.

2. **Standalone HTML Version**:
   - Located at `public/landing.html` and `public/index_standalone.html`.
   - Single-file preview that can be opened directly in any browser without running a server or hosted on GitHub Pages.

3. **Render Deployment Ready**:
   - `render.yaml` (Render Blueprint for 1-click cloud deployment).
   - `Dockerfile` (Production container for Docker Web Services).
   - `build.sh` (Optimized build & caching script).
   - `/health` and `/up` endpoints for Render health monitoring.

---

## 💻 Local Development & Testing

### Option 1: Run with Artisan & Vite (Hot Module Replacement)
```bash
# Terminal 1: Start Laravel backend server
php artisan serve

# Terminal 2: Start Vite frontend dev server (optional if already built)
npm run dev
```
Open **[http://127.0.0.1:8000](http://127.0.0.1:8000)** in your browser.

### Option 2: Pre-compiled Production Assets (Single Command)
```bash
npm run build
php artisan serve
```
Open **[http://127.0.0.1:8000](http://127.0.0.1:8000)**.

---

## ☁️ Deploying to Render in 5 Minutes

### Step 1: Push your code to GitHub / GitLab
```bash
git init
git add .
git commit -m "feat: complete Webyotic Laravel + React landing page"
git branch -M main
git remote add origin https://github.com/your-username/webyotic-landing.git
git push -u origin main
```

### Step 2: Deploy on Render

#### Method A: 1-Click Blueprint (Recommended)
1. Log in to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** and select **Blueprint**.
3. Connect your repository (`webyotic-landing`).
4. Render automatically reads `render.yaml` and sets up the Web Service, Environment Variables, and Health Check.
5. Click **Apply**. Your app will build and go live within 2 minutes!

#### Method B: Manual Web Service
1. In Render Dashboard, click **New +** → **Web Service**.
2. Select your repository.
3. Configure the settings:
   - **Environment**: `PHP` or `Docker`
   - **Build Command**: `./build.sh` (or `composer install --no-dev --optimize-autoloader && npm install && npm run build && php artisan config:cache && php artisan route:cache && php artisan view:cache`)
   - **Start Command**: `php artisan serve --host=0.0.0.0 --port=$PORT`
   - **Health Check Path**: `/up` or `/health`
4. Add Environment Variables:
   - `APP_ENV`: `production`
   - `APP_KEY`: Generate using `php artisan key:generate --show`
   - `APP_DEBUG`: `false`
   - `APP_URL`: Your Render service URL (e.g., `https://webyotic-landing.onrender.com`)
   - `DB_CONNECTION`: `sqlite`
5. Click **Deploy Web Service**!

---

## 🗄️ Database & Lead Management

Any enquiry submitted on the landing page is validated and stored in `database/database.sqlite` under the `contact_leads` table.

You can inspect leads anytime via tinker:
```bash
php artisan tinker
>>> App\Models\ContactLead::latest()->get();
```

---

## 🎨 Changing Client Branding / Contact Info

All contact details and pricing can be edited in:
- `resources/js/LandingPage.jsx`
- `resources/views/landing.blade.php` (window.webyoticConfig)
- `public/landing.html` (Standalone version)
