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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hijriDate, setHijriDate] = useState("Loading...");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();
    fetch(
      `https://api.aladhan.com/v1/timingsByAddress/${d}-${m}-${y}?address=92126,US&method=2`
    )
      .then((r) => r.json())
      .then((data) => {
        const h = data.data.date.hijri;
        setHijriDate(`${h.day} ${h.month.en} ${h.year} AH`);
      })
      .catch(() => setHijriDate(""));
  }, []);

  return (
    <header>
      {/* TOPBAR */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <div className={styles.topbarLeft}>
            <span>📍 9625 Black Mountain Rd, Suite 204, San Diego, CA 92126</span>
            <span className={styles.divider}>|</span>
            <a href="tel:6195712988" className={styles.topbarLink}>
              ☎ (619) 571-2988
            </a>
            <span className={styles.divider}>|</span>
            <a href="mailto:masjidhamza9235@gmail.com" className={styles.topbarLink}>
              ✉ masjidhamza9235@gmail.com
            </a>
          </div>
          <div className={styles.topbarDate}>
            🌙 {hijriDate}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
        <div className={styles.navInner}>

          {/* LOGO */}
          <Link href="#home" className={styles.logo}>
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <circle cx="26" cy="26" r="25" fill="#0d1b3e" stroke="#c9a84c" strokeWidth="1.5" />
              <path
                d="M32 14C26.5 14 22 18.9 22 25C22 31.1 26.5 36 32 36C29.5 36 24 33.5 24 25C24 16.5 29.5 14 32 14Z"
                fill="#c9a84c"
              />
              <polygon
                points="36,15 36.8,17.5 39.5,17.5 37.4,19.1 38.2,21.6 36,20.1 33.8,21.6 34.6,19.1 32.5,17.5 35.2,17.5"
                fill="#e8c97a"
              />
              <path
                d="M14 38 Q18 30 22 32 Q26 34 30 32 Q34 30 38 38"
                stroke="#c9a84c"
                strokeWidth="1.2"
                fill="none"
                opacity="0.6"
              />
              <line x1="14" y1="38" x2="38" y2="38" stroke="#c9a84c" strokeWidth="1.2" opacity="0.6" />
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
              <a href="#donate" className={styles.donateBtn}>
                Donate
              </a>
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
              
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={styles.mobileLink}
              >
                {link.label}
              </a>
            ))}
            
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