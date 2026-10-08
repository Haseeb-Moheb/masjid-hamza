# 🕌 Masjid Hamza — Islamic Center of Mira Mesa

A full-stack, modern web application built for **Masjid Hamza (Islamic Center of Mira Mesa)** located in San Diego, CA. This project serves as the official digital presence for the masjid community, providing prayer times, programs, Islamic education, donation capabilities, and community resources.

---

## 🌐 Live Demo

[masjidhamza.vercel.app](https://masjidhamza.vercel.app)

---

## 📸 Project Overview

This website was designed and developed from scratch as a community service project for Masjid Hamza. The goal was to create a professional, responsive, and feature-rich platform that serves both the existing Muslim community and anyone interested in learning about Islam.

---

## ✨ Features

### 🏠 Homepage Sections
- **Bismillah Hero** — Full-screen landing section with Arabic calligraphy, animated glow effects, and geometric Islamic pattern background
- **Live Prayer Times Strip** — Fetches real-time daily prayer times from the AlAdhan API based on the masjid's zip code (92126). Auto-highlights the current active prayer and the upcoming prayer
- **About Section** — Auto-sliding image carousel (6 photos) with community stats and masjid description
- **Programs & Activities** — 11 program cards with interactive filter tabs (All / Daily / Weekly / Monthly / Seasonal)
- **Revert to Islam** — Dedicated section with the Shahada in Arabic, transliteration, translation, 3-step guidance, and CTA
- **Services** — 9 service cards linking to relevant sections + 8 curated external Islamic resource links
- **Donate** — Full donation interface with one-time/monthly toggle, preset amounts, custom amount input, and 6 payment methods (Credit Card, Apple Pay, Zelle, Venmo, Check, Bank Transfer)
- **Contact** — Contact form with subject selector, board member directory, and masjid info
- **Footer** — Navigation columns, 7 social media icons with brand colors on hover, and developer credit

### 📖 About Islam — Dedicated Knowledge Base
- Separate `/about-islam` page listing **25 articles** organized across **8 categories**:
  - About Islam
  - Common Misconceptions
  - About Allah
  - About Muhammad ﷺ
  - About Jesus
  - About the Quran
  - Becoming Muslim
  - Answers to Racism & Justice
- Each article opens on its own dedicated page (`/about-islam/[slug]`) with full content, prev/next navigation, and source credit
- Content used with permission from Dr. Sabel of GainPeace.com

### ⚰️ Funeral Services — Dedicated Page
- Complete Islamic funeral guidance at `/funeral-services`
- Mortuary contacts, cemetery options, death protocols (hospice & hospital), and Ghusl guidelines
- Information sourced from Salam Community Services

### 🌙 Dark Mode
- Full site dark/light mode toggle in the topbar
- Persisted in `localStorage` across sessions
- Smooth transition on all sections

### 📱 Fully Responsive
- Mobile-first design
- Hamburger menu for mobile navigation
- Responsive grids across all sections
- Safe area insets for modern phones

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router, SSR, file-based routing |
| **React 19** | UI component library |
| **TypeScript** | Type safety throughout the project |
| **Tailwind CSS v4** | Utility-first styling |
| **CSS Modules** | Component-scoped styles |
| **AlAdhan API** | Free REST API for daily Islamic prayer times |
| **Next.js Font** | Google Fonts optimization (Amiri + Nunito) |
| **Vercel** | Deployment and hosting platform |
| **Git & GitHub** | Version control and repository |

---

## 📁 Project Structure

masjid-hamza/
├── app/
│ ├── about-islam/
│ │ ├── page.tsx # Lists all 25 Islamic topics
│ │ ├── page.module.css
│ │ └── [slug]/
│ │ ├── page.tsx # Individual article page
│ │ └── page.module.css
│ ├── funeral-services/
│ │ ├── page.tsx # Full funeral services page
│ │ └── page.module.css
│ ├── globals.css # Global styles & CSS variables
│ ├── layout.tsx # Root layout with fonts & metadata
│ └── page.tsx # Homepage
├── components/
│ ├── layout/
│ │ ├── Navbar.tsx # Sticky navbar with dark mode toggle
│ │ ├── Navbar.module.css
│ │ ├── Footer.tsx # Footer with social icons
│ │ └── Footer.module.css
│ └── sections/
│ ├── Hero.tsx # Landing hero section
│ ├── PrayerTimes.tsx # Live prayer times from API
│ ├── About.tsx # Photo carousel + stats
│ ├── Programs.tsx # Program cards with filters
│ ├── Revert.tsx # Revert to Islam section
│ ├── Services.tsx # Services + resources
│ ├── Donate.tsx # Donation interface
│ ├── Contact.tsx # Contact form + board members
│ └── *.module.css # CSS module for each section
├── lib/
│ └── islamTopics.ts # All 25 Islamic article data
├── public/
│ └── images/ # Masjid photos (carousel)
├── next.config.ts
├── tsconfig.json
└── package.json
