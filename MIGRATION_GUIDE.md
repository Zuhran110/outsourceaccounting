# Frontend to Next.js Migration Guide

**Project:** Outsource Accounting
**From:** Frontend (Vite + React SPA)
**To:** nextoutsource (Next.js 16 + App Router)
**Date:** December 29, 2025

---

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Phase 1: Dependencies Setup](#phase-1-dependencies-setup)
4. [Phase 2: Project Structure](#phase-2-project-structure)
5. [Phase 3: Environment Variables](#phase-3-environment-variables)
6. [Phase 4: Tailwind CSS Configuration](#phase-4-tailwind-css-configuration)
7. [Phase 5: Assets Migration](#phase-5-assets-migration)
8. [Phase 6: Components Migration](#phase-6-components-migration)
9. [Phase 7: Pages & Routing](#phase-7-pages--routing)
10. [Phase 8: Testing & Verification](#phase-8-testing--verification)
11. [Troubleshooting](#troubleshooting)

---

## Overview

### What's Changing?

| Aspect | Frontend (Current) | nextoutsource (Target) |
|--------|-------------------|------------------------|
| Framework | React 19 SPA | Next.js 16 (React 19) |
| Routing | React Router DOM | Next.js App Router |
| Build Tool | Vite | Next.js (Turbopack) |
| Rendering | Client-Side Only | Server + Client Components |
| Entry Point | `main.jsx` + `App.jsx` | `app/page.js` + `layout.js` |
| CSS | Tailwind v4 + Vite | Tailwind v4 + PostCSS |
| Env Variables | `VITE_*` | `NEXT_PUBLIC_*` |

### Benefits of Migration
- ✅ **Server-Side Rendering (SSR)** - Faster initial page loads
- ✅ **SEO Optimization** - Better search engine indexing
- ✅ **File-based Routing** - Simpler route management
- ✅ **Image Optimization** - Built-in next/image component
- ✅ **API Routes** - Backend endpoints in same project (optional)
- ✅ **Performance** - Automatic code splitting & optimization

---

## Prerequisites

✅ Ensure nextoutsource is initialized (already done)
✅ Node.js 18+ installed
✅ Git for version control

---

## Phase 1: Dependencies Setup

### Step 1.1: Install Missing Dependencies

Navigate to `nextoutsource` and install:

```bash
cd nextoutsource
npm install axios react-hook-form react-toastify lucide-react
```

### Step 1.2: Verify package.json

Your `nextoutsource/package.json` should now include:

```json
{
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "axios": "^1.13.2",
    "react-hook-form": "^7.67.0",
    "react-toastify": "^11.0.5",
    "lucide-react": "^0.561.0"
  }
}
```

**Note:** You do NOT need:
- ❌ `react-router-dom` (Next.js handles routing)
- ❌ `vite` or `@vitejs/plugin-react` (Next.js handles bundling)
- ❌ `@tailwindcss/vite` (Using PostCSS instead)

---

## Phase 2: Project Structure

### Step 2.1: Create Directory Structure

Create these folders in `nextoutsource/src/`:

```bash
cd nextoutsource/src
mkdir -p components/layout
mkdir -p components/home
mkdir -p components/about
mkdir -p components/services
mkdir -p components/blogs
mkdir -p components/contact
mkdir -p components/faqs
mkdir -p components/shared
mkdir -p utils
mkdir -p styles
```

### Step 2.2: Create App Router Pages

Create these page directories:

```bash
cd nextoutsource/src/app
mkdir -p services
mkdir -p aboutus
mkdir -p blogs
mkdir -p faqs
mkdir -p contactUs
mkdir -p AnnualServicePg
```

Each folder needs a `page.js` file (we'll create these in Phase 7).

### Final Structure:

```
nextoutsource/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout with TopBar, Navbar, Footer
│   │   ├── page.js                # Home page (/)
│   │   ├── globals.css            # Global styles
│   │   ├── services/
│   │   │   └── page.js            # /services route
│   │   ├── aboutus/
│   │   │   └── page.js            # /aboutus route
│   │   ├── blogs/
│   │   │   └── page.js            # /blogs route
│   │   ├── faqs/
│   │   │   └── page.js            # /faqs route
│   │   ├── contactUs/
│   │   │   └── page.js            # /contactUs route
│   │   └── AnnualServicePg/
│   │       └── page.js            # /AnnualServicePg route
│   ├── components/
│   │   ├── layout/                # TopBar, Navbar, Footer
│   │   ├── home/                  # Hero, Services, WhyOutsource, etc.
│   │   ├── about/                 # AboutHero, OurStory, MissionStatement
│   │   ├── services/              # ServiceComponents subfolder
│   │   ├── blogs/                 # HeroBlog, BlogsCard, Categories
│   │   ├── contact/               # ContactUsHero, ContactUsForm
│   │   ├── faqs/                  # Faqs, GeneralQuiz
│   │   └── shared/                # Card, Cards, BulletPoint, BulletPoints
│   └── utils/
│       └── scrollToTop.js         # Converted to client-side hook
├── public/
│   └── images/                    # All images from Frontend/src/assets/images
└── .env.local                     # Environment variables
```

---

## Phase 3: Environment Variables

### Step 3.1: Create .env.local

Create `nextoutsource/.env.local`:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### Step 3.2: Update API Calls

**Before (Vite):**
```javascript
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
```

**After (Next.js):**
```javascript
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
```

**Files to update:**
- Any component making axios calls (Hero form, ContactUsForm, etc.)

---

## Phase 4: Tailwind CSS Configuration

### Step 4.1: Update globals.css

Replace `nextoutsource/src/app/globals.css` with:

```css
@import "tailwindcss";

/* Custom CSS Variables (from Frontend/src/index.css) */
:root {
  --color-veryLightBlue: #ECF6FE;
  --color-buttonBlue: #4632DA;
  --color-linearBar: #c0eaff;
  --color-ImgOverlay: #538ED2;
}

/* Custom Utilities */
@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}

/* React Toastify Styles (from Frontend/src/App.css) */
.Toastify__toast-container {
  z-index: 9999;
}

.Toastify__toast {
  border-radius: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.Toastify__toast--success {
  background: #10b981;
}

.Toastify__toast--error {
  background: #ef4444;
}

.Toastify__toast-body {
  padding: 8px;
}

/* Reset/Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Step 4.2: Verify Tailwind Config

Your existing `nextoutsource/tailwind.config.js` should be fine. If it doesn't exist, create:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## Phase 5: Assets Migration

### Step 5.1: Copy Images to Public Folder

Copy all images from `Frontend/src/assets/images/` to `nextoutsource/public/images/`:

```bash
# From project root
cp -r Frontend/src/assets/images/* nextoutsource/public/images/
```

### Step 5.2: Update Image Imports

**Before (Vite):**
```javascript
import HeroImg from '../assets/images/HeroSection/hero-bg.png';
<img src={HeroImg} alt="Hero" />
```

**After (Next.js) - Option A (Simple):**
```javascript
<img src="/images/HeroSection/hero-bg.png" alt="Hero" />
```

**After (Next.js) - Option B (Optimized):**
```javascript
import Image from 'next/image';
<Image src="/images/HeroSection/hero-bg.png" alt="Hero" width={800} height={600} />
```

**Recommendation:** Start with Option A for quick migration, optimize with next/image later.

---

## Phase 6: Components Migration

### Understanding Server vs Client Components

**Server Components (Default in Next.js 16):**
- Static content (no interactivity)
- Can fetch data directly
- No useState, useEffect, event handlers
- Examples: OurStory, MissionStatement, Footer

**Client Components (Need `'use client'`):**
- Interactive elements
- Use React hooks (useState, useEffect)
- Event handlers (onClick, onChange)
- Form components
- Third-party hooks (useForm, useLocation)

### Step 6.1: Identify Client Components

Components that MUST have `'use client'`:

**Layout Components:**
- ✅ `Navbar.jsx` (hamburger menu state)

**Home Components:**
- ✅ `Hero.jsx` (form with react-hook-form)
- ✅ `ClientsTestimonials.jsx` (carousel state)

**Service Components:**
- ✅ `BookACall.jsx` (form)

**Blog Components:**
- ✅ `Categories.jsx` (filtering state)
- ✅ `CategoryGot.jsx` (if has state)

**Contact Components:**
- ✅ `ContactUsForm.jsx` (form with validation)

**FAQ Components:**
- ✅ `GeneralQuiz.jsx` (accordion state)

### Step 6.2: Migration Pattern for Server Components

**Example: OurStory.jsx**

**Before (Frontend/src/components/AboutUs/OurStory.jsx):**
```javascript
import React from 'react';
import StoryImg from '../../assets/images/AboutUs/OurStory/story.png';

export default function OurStory() {
  return (
    <section className="py-12">
      <img src={StoryImg} alt="Our Story" />
      <h2>Our Story</h2>
      <p>Content here...</p>
    </section>
  );
}
```

**After (nextoutsource/src/components/about/OurStory.jsx):**
```javascript
export default function OurStory() {
  return (
    <section className="py-12">
      <img src="/images/AboutUs/OurStory/story.png" alt="Our Story" />
      <h2>Our Story</h2>
      <p>Content here...</p>
    </section>
  );
}
```

**Changes:**
1. ❌ Remove `import React from 'react'` (not needed in Next.js)
2. ✅ Update image import to public path
3. ✅ No `'use client'` directive (it's a server component)

### Step 6.3: Migration Pattern for Client Components

**Example: Hero.jsx (with form)**

**Before (Frontend/src/components/HomeComponents/Hero.jsx):**
```javascript
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Hero() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/app/v1/contact`,
        data
      );
      toast.success('Form submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit form');
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </section>
  );
}
```

**After (nextoutsource/src/components/home/Hero.jsx):**
```javascript
'use client';

import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Hero() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/app/v1/contact`,
        data
      );
      toast.success('Form submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit form');
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </section>
  );
}
```

**Changes:**
1. ✅ Add `'use client'` at the very top
2. ❌ Remove `import React from 'react'`
3. ✅ Update `import.meta.env.VITE_BACKEND_URL` → `process.env.NEXT_PUBLIC_BACKEND_URL`
4. ✅ Keep all hooks and event handlers

### Step 6.4: Component Migration Checklist

For each of the 56 components:

1. **Copy** from `Frontend/src/components/` to appropriate `nextoutsource/src/components/` subfolder
2. **Decide:** Server or Client component?
3. **Add** `'use client'` if needed (top of file, before imports)
4. **Remove** `import React from 'react'` statements
5. **Update** image imports to `/images/...` paths
6. **Update** env variables from `VITE_*` to `NEXT_PUBLIC_*`
7. **Remove** any React Router imports (`useNavigate`, `useLocation`, `Link`)
8. **Replace** React Router `Link` with Next.js `Link` from `next/link`

---

## Phase 7: Pages & Routing

### Step 7.1: Create Root Layout

**File:** `nextoutsource/src/app/layout.js`

```javascript
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Outsource Accounting',
  description: 'Professional accounting services for your business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
```

**Key Points:**
- `metadata` export for SEO (title, description)
- Layout wraps all pages with TopBar, Navbar, Footer
- ToastContainer for global notifications
- Uses `@/` alias for imports (configured in jsconfig.json)

### Step 7.2: Create Home Page

**File:** `nextoutsource/src/app/page.js`

**Current Vite version (Frontend/src/pages/Home.jsx):**
```javascript
import Hero from "../components/HomeComponents/Hero";
import Services from "../components/HomeComponents/Services";
import WhyOutsource from "../components/HomeComponents/WhyOutsource";
import HowWeWork from "../components/HomeComponents/HowWeWork";
import JoinUs from "../components/HomeComponents/JoinUs";
import ClientsTestimonials from "../components/HomeComponents/ClientsTestimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyOutsource />
      <HowWeWork />
      <JoinUs />
      <ClientsTestimonials />
    </>
  );
}
```

**Next.js version:**
```javascript
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import WhyOutsource from '@/components/home/WhyOutsource';
import HowWeWork from '@/components/home/HowWeWork';
import JoinUs from '@/components/home/JoinUs';
import ClientsTestimonials from '@/components/home/ClientsTestimonials';

export const metadata = {
  title: 'Home - Outsource Accounting',
  description: 'Professional accounting services tailored to your business needs',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyOutsource />
      <HowWeWork />
      <JoinUs />
      <ClientsTestimonials />
    </>
  );
}
```

**Changes:**
1. ✅ Update import paths to use `@/components/home/`
2. ✅ Add page-specific metadata
3. ✅ No `<Layout>` wrapper needed (handled by root layout)

### Step 7.3: Create Other Pages

**Services Page:** `nextoutsource/src/app/services/page.js`

```javascript
import Services from '@/components/services/Services';
import JoinUs from '@/components/home/JoinUs';

export const metadata = {
  title: 'Services - Outsource Accounting',
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <JoinUs />
    </>
  );
}
```

**About Us Page:** `nextoutsource/src/app/aboutus/page.js`

```javascript
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import MissionStatement from '@/components/about/MissionStatement';
import OurValues from '@/components/about/OurValues';

export const metadata = {
  title: 'About Us - Outsource Accounting',
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionStatement />
      <OurValues />
    </>
  );
}
```

**Blogs Page:** `nextoutsource/src/app/blogs/page.js`

```javascript
import HeroBlog from '@/components/blogs/HeroBlog';
import BlogsCardMultiple from '@/components/blogs/BlogsCard/BlogsCardMultiple';

export const metadata = {
  title: 'Blogs - Outsource Accounting',
};

export default function BlogsPage() {
  return (
    <>
      <HeroBlog />
      <BlogsCardMultiple />
    </>
  );
}
```

**FAQs Page:** `nextoutsource/src/app/faqs/page.js`

```javascript
import Faqs from '@/components/faqs/Faqs';
import GeneralQuiz from '@/components/faqs/GeneralQuiz';
import BookACall from '@/components/services/BookACall';

export const metadata = {
  title: 'FAQs - Outsource Accounting',
};

export default function FAQSPage() {
  return (
    <>
      <Faqs />
      <GeneralQuiz />
      <BookACall />
    </>
  );
}
```

**Contact Us Page:** `nextoutsource/src/app/contactUs/page.js`

```javascript
import ContactUsHero from '@/components/contact/ContactUsHero';
import ContactUsForm from '@/components/contact/ContactUsForm';

export const metadata = {
  title: 'Contact Us - Outsource Accounting',
};

export default function ContactUsPage() {
  return (
    <>
      <ContactUsHero />
      <ContactUsForm />
    </>
  );
}
```

**Annual Accounts Service:** `nextoutsource/src/app/AnnualServicePg/page.js`

```javascript
import Hero from '@/components/services/Hero';
import AnnualAccounts from '@/components/services/AnnualAccounts';
import Get from '@/components/services/Get';
import Outsource from '@/components/services/Outsource';
import BookACall from '@/components/services/BookACall';

export const metadata = {
  title: 'Annual Accounts Service - Outsource Accounting',
};

export default function AnnualAccountPage() {
  return (
    <>
      <Hero />
      <AnnualAccounts />
      <Get />
      <Outsource />
      <BookACall />
    </>
  );
}
```

### Step 7.4: Handle Navigation Links

**Replace React Router Links with Next.js Links**

**Before:**
```javascript
import { Link } from 'react-router-dom';

<Link to="/services">Services</Link>
```

**After:**
```javascript
import Link from 'next/link';

<Link href="/services">Services</Link>
```

**Note:** Change `to` prop to `href` prop.

### Step 7.5: Handle ScrollToTop

**Old Implementation (Frontend/src/ScrollToTop.jsx):**
```javascript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

**Next.js Approach - Add to Root Layout:**

Update `nextoutsource/src/app/layout.js`:

```javascript
// No need for ScrollToTop component - Next.js handles this automatically
// by default when navigating between pages
```

**Alternative (if you want explicit control):**

Create `nextoutsource/src/components/ScrollToTop.jsx`:

```javascript
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

Add to layout:
```javascript
import ScrollToTop from '@/components/ScrollToTop';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        {/* rest of layout */}
      </body>
    </html>
  );
}
```

---

## Phase 8: Testing & Verification

### Step 8.1: Start Development Server

```bash
cd nextoutsource
npm run dev
```

Visit: `http://localhost:3000`

### Step 8.2: Testing Checklist

Test each route and feature:

- [ ] **Home Page (/)** - All sections render correctly
  - [ ] Hero form submits successfully
  - [ ] Services showcase displays
  - [ ] WhyOutsource section visible
  - [ ] HowWeWork renders
  - [ ] ClientsTestimonials carousel works
  - [ ] JoinUs CTA visible

- [ ] **Services Page (/services)** - Service cards and JoinUs render

- [ ] **About Us (/aboutus)** - All sections visible
  - [ ] AboutHero displays
  - [ ] OurStory section
  - [ ] MissionStatement shows
  - [ ] OurValues cards render

- [ ] **Blogs (/blogs)** - Blog listing works
  - [ ] HeroBlog renders
  - [ ] Blog cards display
  - [ ] Category filtering works

- [ ] **FAQs (/faqs)** - Accordion functionality
  - [ ] Faqs hero shows
  - [ ] GeneralQuiz accordion opens/closes
  - [ ] BookACall form works

- [ ] **Contact Us (/contactUs)** - Form validation and submission
  - [ ] ContactUsHero renders
  - [ ] Form validates inputs
  - [ ] Form submits to backend
  - [ ] Toast notifications appear

- [ ] **Annual Service (/AnnualServicePg)** - Service detail page
  - [ ] All service sections render
  - [ ] BookACall form works

### Step 8.3: Cross-Browser Testing

Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Step 8.4: Responsive Testing

Test on:
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Step 8.5: Functionality Testing

- [ ] All forms submit correctly
- [ ] Toast notifications work
- [ ] Navigation links work
- [ ] Images load properly
- [ ] Styles apply correctly
- [ ] No console errors
- [ ] Backend API calls succeed

---

## Troubleshooting

### Issue 1: "Module not found" errors

**Cause:** Incorrect import paths

**Solution:**
- Ensure `jsconfig.json` has path alias configured:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
- Use `@/components/...` instead of relative paths

### Issue 2: "You're importing a component that needs useState"

**Cause:** Client component missing `'use client'` directive

**Solution:** Add `'use client'` at the top of the file (before imports)

### Issue 3: Images not loading

**Cause:** Incorrect image paths

**Solution:**
- Ensure images are in `nextoutsource/public/images/`
- Use `/images/...` paths (not `../assets/images/...`)
- Check file extensions (case-sensitive on production)

### Issue 4: Environment variables undefined

**Cause:** Variables not prefixed with `NEXT_PUBLIC_`

**Solution:**
- Create `.env.local` (not `.env`)
- Prefix with `NEXT_PUBLIC_`: `NEXT_PUBLIC_BACKEND_URL`
- Restart dev server after adding env variables

### Issue 5: Tailwind styles not applying

**Cause:** CSS not properly configured

**Solution:**
- Verify `tailwind.config.js` content paths
- Ensure `globals.css` imports `@import "tailwindcss";`
- Check PostCSS config exists

### Issue 6: Forms not submitting

**Cause:** API endpoint or env variable issues

**Solution:**
- Check backend is running on `http://localhost:8000`
- Verify `NEXT_PUBLIC_BACKEND_URL` in `.env.local`
- Check browser console for CORS errors
- Ensure axios is installed

### Issue 7: Hydration errors

**Cause:** Server and client HTML mismatch

**Solution:**
- Ensure conditional rendering is consistent
- Don't use `window` or `document` in server components
- Use `useEffect` for browser-only code

### Issue 8: React Router code still exists

**Cause:** Incomplete migration

**Solution:**
- Remove all `react-router-dom` imports
- Replace `<Link to="">` with `<Link href="">`
- Remove `useNavigate`, `useLocation`, `useParams` (use Next.js equivalents)

---

## Migration Timeline Estimate

Based on component count (56 components):

| Phase | Time Estimate |
|-------|---------------|
| Dependencies Setup | 10 minutes |
| Project Structure | 15 minutes |
| Environment Variables | 5 minutes |
| Tailwind Configuration | 15 minutes |
| Assets Migration | 20 minutes |
| Components Migration | 4-6 hours |
| Pages & Routing | 1-2 hours |
| Testing & Fixes | 2-3 hours |
| **Total** | **8-12 hours** |

---

## Post-Migration Optimizations (Optional)

After successful migration, consider:

1. **Image Optimization:**
   - Replace `<img>` with `next/image` for automatic optimization
   - Add `loading="lazy"` for better performance

2. **API Routes:**
   - Move form submission logic to Next.js API routes
   - Create `src/app/api/contact/route.js` instead of calling external backend

3. **Static Generation:**
   - Add `generateStaticParams` for blog posts
   - Use `export const dynamic = 'force-static'` for static pages

4. **Font Optimization:**
   - Use `next/font` for automatic font optimization

5. **SEO Enhancement:**
   - Add Open Graph metadata
   - Create `sitemap.xml`
   - Add `robots.txt`

6. **Performance:**
   - Implement React Server Components for data fetching
   - Use Suspense boundaries for loading states
   - Add analytics (Vercel Analytics, Google Analytics)

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

- Netlify: Supports Next.js
- AWS: Use Amplify or EC2
- Docker: Build with `npm run build` and serve with `npm start`

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [Migrating from Vite](https://nextjs.org/docs/app/building-your-application/upgrading/from-vite)

---

## Support & Questions

If you encounter issues during migration:
1. Check this guide's Troubleshooting section
2. Review Next.js documentation
3. Check browser console for errors
4. Verify all file paths are correct

---

**Good luck with your migration!** 🚀
