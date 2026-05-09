"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Programs.module.css";

const programs = [
  {
    icon: "🕌",
    tag: "Daily",
    title: "5 Daily Prayers",
    desc: "All five daily prayers held in congregation every day. Iqamah times posted on the prayer board and updated seasonally. All are welcome.",
    time: "Every Day",
  },
  {
    icon: "📿",
    tag: "Daily",
    title: "Morning Adhkar & Quran",
    desc: "Daily post-Fajr dhikr circle and Quran recitation session. A peaceful way to begin each day with remembrance of Allah.",
    time: "After Fajr Daily",
  },
  {
    icon: "📖",
    tag: "Weekly",
    title: "Jumu'ah Prayer",
    desc: "Friday congregational prayer with khutbah covering spiritual development, community issues, and Islamic guidance.",
    time: "Every Friday",
  },
  {
    icon: "🎓",
    tag: "Weekly",
    title: "Islamic Education",
    desc: "Weekly classes covering Quran Tafseer, Hadith, Fiqh, and Islamic history. Separate tracks for adults, teens, and children.",
    time: "Weekly — TBD",
  },
  {
    icon: "⭐",
    tag: "Weekly",
    title: "Youth Halaqa",
    desc: "Weekly youth circle for teens and young adults covering relevant Islamic topics, life skills, and community discussions.",
    time: "Weekly — TBD",
  },
  {
    icon: "🤝",
    tag: "Monthly",
    title: "Community Gathering",
    desc: "Monthly community dinner and social event. A time for families to connect, share meals, and strengthen the bonds of brotherhood and sisterhood.",
    time: "Monthly — TBD",
  },
  {
    icon: "💬",
    tag: "Monthly",
    title: "New Muslim Circle",
    desc: "A welcoming monthly session for new Muslims and those interested in learning about Islam. Q&A format with an Imam, one-on-one support available.",
    time: "Monthly — TBD",
  },
  {
    icon: "🫙",
    tag: "Monthly",
    title: "Community Food Drive",
    desc: "Monthly food and essentials donation drive benefiting families in need across the San Diego area. Drop-off available at the masjid.",
    time: "Monthly — TBD",
  },
  {
    icon: "🌙",
    tag: "Seasonal",
    title: "Ramadan Programs",
    desc: "Special Taraweeh prayers nightly, Iftar gatherings, Quran completion ceremony, Laylatul Qadr vigils, and Eid celebrations.",
    time: "Ramadan & Eid",
  },
];

const filters = ["All", "Daily", "Weekly", "Monthly", "Seasonal"];

export default function Programs() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

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

  const filtered = activeFilter === "All"
    ? programs
    : programs.filter((p) => p.tag === activeFilter);

  return (
    <section className={styles.section} id="programs">
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={`${styles.header} ${styles.fadeIn}`} ref={headerRef}>
          <div className={styles.tag}>Community</div>
          <h2 className={styles.title}>Programs & Activities</h2>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            Regular programs to strengthen our community&apos;s faith,
            knowledge, and bonds throughout the week
          </p>
        </div>

        {/* FILTER TABS */}
        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.active : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className={`${styles.grid} ${styles.fadeIn}`} ref={gridRef}>
          {filtered.map((program) => (
            <div key={program.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>{program.icon}</div>
                <div className={styles.tag2}>{program.tag}</div>
              </div>
              <h3 className={styles.cardTitle}>{program.title}</h3>
              <p className={styles.cardDesc}>{program.desc}</p>
              <div className={styles.cardTime}>
                🕐 {program.time}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}