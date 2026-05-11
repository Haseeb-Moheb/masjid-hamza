import Link from "next/link";
import { islamTopics, islamCategories } from "@/lib/islamTopics";
import styles from "./page.module.css";

export const metadata = {
  title: "About Islam — Masjid Hamza",
  description: "Learn about Islam through 25 curated topics covering Allah, the Quran, Prophet Muhammad, and more.",
};

export default function AboutIslamPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.tag}>Knowledge</div>
          <h1 className={styles.title}>About Islam</h1>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            Discover the beauty, wisdom, and guidance of Islam through
            25 carefully curated topics — from the concept of God to
            the rights of women, science, and much more.
          </p>
          <Link href="/" className={styles.backBtn}>
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className={styles.content}>
        {islamCategories.map((cat) => {
          const topics = islamTopics.filter((t) => t.category === cat);
          if (topics.length === 0) return null;
          return (
            <div key={cat} className={styles.categorySection}>
              <h2 className={styles.catTitle}>{cat}</h2>
              <div className={styles.grid}>
                {topics.map((topic, i) => (
                  <Link
                    key={topic.slug}
                    href={`/about-islam/${topic.slug}`}
                    className={styles.card}
                  >
                    <div className={styles.cardNum}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className={styles.cardIcon}>{topic.icon}</div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{topic.title}</h3>
                      <p className={styles.cardDesc}>{topic.desc}</p>
                      <div className={styles.cardArrow}>
                        Read Article →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </main>
  );
}