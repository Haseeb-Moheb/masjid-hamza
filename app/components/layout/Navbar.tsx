"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Prayer Times", href: "#prayer" },
  { label: "Programs",     href: "#programs" },
  { label: "About Islam",  href: "#islam" },
  { label: "Revert",       href: "#revert" },
  { label: "Services",     href: "#services" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [hijriDate, setHijriDate] = useState("Loading...");
  const [darkMode, setDarkMode]   = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hijri date
  useEffect(() => {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();
    fetch(`https://api.aladhan.com/v1/timingsByAddress/${d}-${m}-${y}?address=92126,US&method=2`)
      .then((r) => r.json())
      .then((data) => {
        const h = data.data.date.hijri;
        setHijriDate(`${h.day} ${h.month.en} ${h.year} AH`);
      })
      .catch(() => setHijriDate(""));
  }, []);

  // dark mode — apply to <html> and persist in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header>
      {/* ── TOPBAR ── */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <div className={styles.topbarLeft}>
            <span>📍 9625 Black Mountain Rd, Suite 204, San Diego, CA 92126</span>
            <span className={styles.divider}>|</span>
            <a href="tel:6195712988" className={styles.topbarLink}>☎ (619) 571-2988</a>
            <span className={styles.divider}>|</span>
            <a href="mailto:masjidhamza9235@gmail.com" className={styles.topbarLink}>✉ masjidhamza9235@gmail.com</a>
          </div>
          <div className={styles.topbarRight}>
            <span className={styles.topbarDate}>🌙 {hijriDate}</span>

            {/* DAY / NIGHT TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className={styles.themeToggle}
              aria-label="Toggle dark mode"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                // SUN icon — shown in dark mode so user can switch to light
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                // MOON icon — shown in light mode so user can switch to dark
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        <div className={styles.navInner}>

          {/* LOGO */}
          <Link href="#home" className={styles.logo}>
            <svg width="52" height="52" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="220" cy="220" r="210" fill="#0d1b3e" stroke="#c9a84c" strokeWidth="8"/>
              <circle cx="220" cy="220" r="200" fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.3"/>
              {/* CRESCENT */}
              <circle cx="152" cy="188" r="90" fill="#c9a84c"/>
              <circle cx="178" cy="170" r="71" fill="#0d1b3e"/>
              {/* STAR */}
              <polygon points="228,148 233,165 251,165 237,176 242,193 228,182 214,193 219,176 205,165 223,165" fill="#e8c97a"/>
              {/* TRUNK */}
              <path d="M295 390 Q291 365 289 338 Q287 310 286 282 Q285 254 286 228 Q287 205 289 186 Q290 170 292 158" stroke="#8B5E1A" strokeWidth="18" fill="none" strokeLinecap="round"/>
              <path d="M292 158 Q293 146 294 136" stroke="#8B5E1A" strokeWidth="13" fill="none" strokeLinecap="round"/>
              <path d="M294 136 Q295 127 295 120" stroke="#8B5E1A" strokeWidth="9" fill="none" strokeLinecap="round"/>
              {/* LEAVES — green filled silhouette */}
              <path d="M295 120 Q278 128 260 138 Q244 147 232 157 Q222 165 220 172 Q224 169 234 161 Q248 150 265 140 Q282 130 296 123 Z" fill="#2d7a2d"/>
              <path d="M295 120 Q279 111 263 105 Q249 100 239 102 Q235 105 236 108 Q241 105 252 106 Q267 108 282 115 Q294 121 297 124 Z" fill="#2d7a2d"/>
              <path d="M295 120 Q283 101 273 82 Q264 65 260 52 Q259 47 261 45 Q264 48 268 58 Q276 74 286 95 Q294 114 297 121 Z" fill="#3a9a3a"/>
              <path d="M295 120 Q290 99 287 78 Q285 59 284 46 Q284 39 286 37 Q289 40 290 50 Q292 68 294 90 Q296 112 296 121 Z" fill="#3a9a3a"/>
              <path d="M295 120 Q295 97 296 75 Q297 56 299 42 Q300 34 301 31 Q303 34 303 44 Q303 62 301 82 Q299 104 297 121 Z" fill="#3ab83a"/>
              <path d="M295 120 Q302 99 307 78 Q311 58 312 45 Q312 38 311 36 Q309 39 308 49 Q305 67 302 90 Q298 112 296 121 Z" fill="#3a9a3a"/>
              <path d="M295 120 Q308 101 319 82 Q329 65 333 52 Q335 47 334 44 Q331 47 327 57 Q319 74 308 95 Q298 114 295 122 Z" fill="#3a9a3a"/>
              <path d="M295 120 Q311 112 327 105 Q341 100 350 102 Q354 105 353 108 Q348 106 337 106 Q321 108 306 115 Q295 121 293 124 Z" fill="#2d7a2d"/>
              <path d="M295 120 Q311 129 326 139 Q340 149 349 158 Q356 166 356 172 Q352 169 343 161 Q330 151 315 140 Q300 130 294 124 Z" fill="#2d7a2d"/>
              {/* secondary density */}
              <path d="M295 120 Q276 118 260 124 Q249 130 245 138 Q249 135 258 130 Q272 123 292 121 Z" fill="#256825" opacity="0.85"/>
              <path d="M295 120 Q314 118 330 124 Q341 130 345 138 Q341 135 332 130 Q318 123 297 121 Z" fill="#256825" opacity="0.85"/>
              <path d="M295 120 Q288 104 283 87 Q279 73 279 61 Q282 65 284 76 Q289 95 294 117 Z" fill="#256825" opacity="0.75"/>
              <path d="M295 120 Q302 104 307 87 Q311 72 311 60 Q308 64 306 76 Q301 95 296 117 Z" fill="#256825" opacity="0.75"/>
              {/* COCONUTS */}
              <ellipse cx="293" cy="132" rx="9" ry="8" fill="#8B5E1A"/>
              <ellipse cx="303" cy="136" rx="8" ry="7" fill="#7a5010"/>
              <ellipse cx="284" cy="136" rx="7.5" ry="6.5" fill="#8B5E1A"/>
              <ellipse cx="295" cy="141" rx="7" ry="6" fill="#7a5010"/>
              {/* GRASS */}
              <path d="M268 388 Q270 370 272 356" stroke="#2d7a2d" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M281 392 Q283 372 284 357" stroke="#2d7a2d" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8"/>
              <path d="M295 393 Q296 373 296 358" stroke="#2d7a2d" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8"/>
              <path d="M309 391 Q310 372 311 357" stroke="#2d7a2d" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M322 388 Q323 370 324 356" stroke="#2d7a2d" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.6"/>
              {/* GROUND LINE */}
              <path d="M155 390 Q220 383 290 387 Q340 390 385 387" stroke="#c9a84c" strokeWidth="3" fill="none" opacity="0.4"/>
            </svg>

            <div>
              <div className={styles.logoMain}>Masjid Hamza</div>
              <div className={styles.logoSub}>Islamic Center of Mira Mesa</div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#donate" className={styles.donateBtn}>Donate</a>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={styles.mobileLink}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setMenuOpen(false)}
              className={styles.mobileDonate}
            >
              💛 Donate
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}