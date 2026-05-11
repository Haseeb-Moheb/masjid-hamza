"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { islamTopics, islamCategories } from "@/lib/islamTopics";
import styles from "./AboutIslam.module.css";

export default function AboutIslam() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current)   observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  // show first 8 topics as preview cards
  const preview = islamTopics.slice(0, 8);

  return (
    <section className={styles.section} id="islam">
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={`${styles.header} ${styles.fadeIn}`} ref={headerRef}>
          <div className={styles.tag}>Learn</div>
          <h2 className={styles.title}>About Islam</h2>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            Discover the beauty, wisdom, and guidance of Islam through
            25 carefully curated topics. Click any card to read the full article.
          </p>
        </div>

        {/* PREVIEW GRID — 8 cards */}
        <div className={`${styles.grid} ${styles.fadeIn}`} ref={gridRef}>
          {preview.map((topic) => (
            <Link
              key={topic.slug}
              href={`/about-islam/${topic.slug}`}
              className={styles.card}
            >
              <div className={styles.cardImg} style={{
                background: "linear-gradient(135deg, var(--navy-light), var(--navy))"
              }}>
                <span style={{ fontSize: "2.5rem", position: "relative", zIndex: 1 }}>
                  {topic.icon}
                </span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardCat}>{topic.category}</div>
                <h3 className={styles.cardTitle}>{topic.title}</h3>
                <p className={styles.cardDesc}>{topic.desc}</p>
                <div className={styles.cardArrow}>Read Article →</div>
              </div>
            </Link>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/about-islam" className={styles.viewAll}>
            View All 25 Topics →
          </Link>
        </div>

      </div>
    </section>
  );
}