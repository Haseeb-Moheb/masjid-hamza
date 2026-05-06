"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./About.module.css";

const stats = [
  { num: "5×",    label: "Daily Prayers" },
  { num: "7",     label: "Days a Week" },
  { num: "92126", label: "Mira Mesa, SD" },
  { num: "∞",     label: "Open to All" },
];

// ── Placeholder slides — replace src with real photos when ready ──
const slides = [
  { src: "/images/masjid-1.jpg", label: "Masjid Exterior",  caption: "📍 9625 Black Mountain Rd, Suite 204, San Diego" },
  { src: "/images/masjid-2.jpg", label: "Masjid Interior",  caption: "🕌 Main Prayer Hall" },
  { src: "/images/masjid-3.jpg", label: "Prayer Hall",      caption: "🤲 A place of worship and reflection" },
  { src: "/images/masjid-4.jpg", label: "Community Space",  caption: "🤝 Community Gathering Area" },
  { src: "/images/masjid-5.jpg", label: "Sisters Section",  caption: "🧕 Sisters Prayer Area" },
  { src: "/images/masjid-6.jpg", label: "Masjid Hamza",     caption: "🌙 Islamic Center of Mira Mesa" },
];

export default function About() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // scroll fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.15 }
    );
    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
    return () => observer.disconnect();
  }, []);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const goTo = (i: number) => setCurrent(i);

  // auto-slide every 4 seconds
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 4000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── CAROUSEL SIDE ── */}
          <div
            className={`${styles.fadeIn} ${styles.carouselWrap}`}
            ref={ref1}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* SLIDES */}
            <div className={styles.carousel}>
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}
                >
                  {slide.src ? (
                    <Image
                      src={slide.src}
                      alt={slide.label}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    /* placeholder until real photo is added */
                    <div className={styles.slidePlaceholder}>
                      <svg viewBox="0 0 200 160" fill="none" className={styles.mosqueSvg}>
                        <rect x="30" y="90" width="140" height="60" rx="4" fill="#1e3370" stroke="#c9a84c" strokeWidth="1"/>
                        <path d="M100 20 Q80 60 60 90 L140 90 Q120 60 100 20Z" fill="#162550" stroke="#c9a84c" strokeWidth="1.5"/>
                        <ellipse cx="100" cy="22" rx="8" ry="12" fill="#0d1b3e" stroke="#c9a84c" strokeWidth="1"/>
                        <circle cx="100" cy="12" r="4" fill="#c9a84c"/>
                        <rect x="50" y="60" width="16" height="30" rx="8" fill="#1e3370" stroke="#c9a84c" strokeWidth="1"/>
                        <rect x="134" y="60" width="16" height="30" rx="8" fill="#1e3370" stroke="#c9a84c" strokeWidth="1"/>
                        <path d="M47 20 C38 20 32 26 32 35 C32 44 38 50 47 50 C44 50 38 46 38 35 C38 24 44 20 47 20Z" fill="#c9a84c"/>
                        <polygon points="50,13 51,16 54,16 51.5,17.8 52.5,20.8 50,19 47.5,20.8 48.5,17.8 46,16 49,16" fill="#e8c97a"/>
                        <rect x="82" y="110" width="36" height="40" rx="4" fill="#162550" stroke="#c9a84c" strokeWidth="0.8"/>
                        <path d="M82 110 Q100 100 118 110" fill="#0d1b3e" stroke="#c9a84c" strokeWidth="0.8"/>
                        <rect x="60" y="110" width="20" height="20" rx="3" fill="#1e3370" stroke="#c9a84c" strokeWidth="0.6"/>
                        <rect x="120" y="110" width="20" height="20" rx="3" fill="#1e3370" stroke="#c9a84c" strokeWidth="0.6"/>
                      </svg>
                      <div className={styles.slideLabel}>{slide.label}</div>
                    </div>
                  )}
                  {/* CAPTION */}
                  <div className={styles.caption}>{slide.caption}</div>
                </div>
              ))}

              {/* ARROWS */}
              <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>

            {/* DOTS */}
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* SLIDE COUNTER */}
            <div className={styles.counter}>
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* ── TEXT SIDE ── */}
          <div className={`${styles.fadeIn} ${styles.fadeInDelay}`} ref={ref2}>
            <div className={styles.tag}>About Us</div>
            <h2 className={styles.title}>
              Islamic Center of<br />Mira Mesa
            </h2>
            <div className={styles.goldLine} />
            <p className={styles.description}>
              Masjid Hamza is a vibrant Muslim community center located in the
              heart of Mira Mesa, San Diego. We are dedicated to providing a
              welcoming space for worship, education, and community service for
              Muslims and neighbors of all backgrounds.
            </p>
            <p className={styles.description}>
              Also known as <strong>Hamza Community Services</strong>, we offer
              daily prayers, Islamic education programs, community outreach, and
              support services for the greater San Diego area. Our doors are
              open to everyone — all are welcome.
            </p>

            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}