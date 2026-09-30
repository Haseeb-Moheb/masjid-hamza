import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* ── TOP GRID ── */}
        <div className={styles.top}>

          {/* BRAND */}
          <div className={styles.brand}>
            <Link href="#home" className={styles.logo}>
              <svg width="46" height="46" viewBox="0 0 440 440" fill="none">
                <circle cx="220" cy="220" r="210" fill="#0d1b3e" stroke="#c9a84c" strokeWidth="8"/>
                <circle cx="152" cy="188" r="90" fill="#c9a84c"/>
                <circle cx="178" cy="170" r="71" fill="#0d1b3e"/>
                <polygon points="228,148 233,165 251,165 237,176 242,193 228,182 214,193 219,176 205,165 223,165" fill="#e8c97a"/>
                <path d="M295 390 Q291 365 289 338 Q287 310 286 282 Q285 254 286 228 Q287 205 289 186 Q290 170 292 158" stroke="#8B5E1A" strokeWidth="18" fill="none" strokeLinecap="round"/>
                <path d="M295 120 Q278 128 260 138 Q244 147 232 157 Q222 165 220 172 Q224 169 234 161 Q248 150 265 140 Q282 130 296 123 Z" fill="#2d7a2d"/>
                <path d="M295 120 Q295 97 296 75 Q297 56 299 42 Q300 34 301 31 Q303 34 303 44 Q303 62 301 82 Q299 104 297 121 Z" fill="#3ab83a"/>
                <path d="M295 120 Q311 129 326 139 Q340 149 349 158 Q356 166 356 172 Q352 169 343 161 Q330 151 315 140 Q300 130 294 124 Z" fill="#2d7a2d"/>
              </svg>
              <div>
                <div className={styles.logoMain}>Masjid Hamza</div>
                <div className={styles.logoSub}>Islamic Center of Mira Mesa</div>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              A place of worship, learning, and community in the heart
              of Mira Mesa, San Diego. Open to all — all are welcome.
            </p>

            {/* SOCIAL */}
            <div className={styles.socialLabel}>Follow Us</div>
            <div className={styles.socials}>
              <a href="#" className={`${styles.socialBtn} ${styles.facebook}`} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className={`${styles.socialBtn} ${styles.instagram}`} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className={`${styles.socialBtn} ${styles.youtube}`} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className={`${styles.socialBtn} ${styles.linkedin}`} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COL 1 - NAVIGATE */}
          <div className={styles.col}>
            <h5>Navigate</h5>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#prayer">Prayer Times</a>
            <a href="#programs">Programs</a>
            <a href="#services">Services</a>
          </div>

          {/* COL 2 - LEARN */}
          <div className={styles.col}>
            <h5>Learn</h5>
            <a href="/about-islam">About Islam</a>
            <a href="#revert">Revert to Islam</a>
            <a href="/funeral-services">Funeral Services</a>
            <a href="https://quran.com" target="_blank" rel="noopener noreferrer">Quran.com ↗</a>
            <a href="https://sunnah.com" target="_blank" rel="noopener noreferrer">Sunnah.com ↗</a>
          </div>

          {/* COL 3 - CONTACT */}
          <div className={styles.col}>
            <h5>Contact</h5>
            <a href="tel:6195712988">(619) 571-2988</a>
            <a href="mailto:masjidhamza9235@gmail.com">masjidhamza9235@gmail.com</a>
            <a href="#contact">Send a Message</a>
            <a href="#donate">Donate Now</a>
            <a href="https://maps.google.com/?q=9625+Black+Mountain+Rd+San+Diego+CA" target="_blank" rel="noopener noreferrer">Get Directions ↗</a>
          </div>

        </div>

        {/* DIVIDER */}
        <hr className={styles.divider} />

        {/* ── BOTTOM ── */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Masjid Hamza · Islamic Center of Mira Mesa · All rights reserved
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <p className={styles.credit}>
            Built with ❤️ love by{" "}
            <a href="https://moheb.cloud/" target="_blank" rel="noopener noreferrer">
              Moheb-SG
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}