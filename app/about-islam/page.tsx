import Link from "next/link";
import { islamTopics, islamCategories } from "@/lib/islamTopics";
import styles from "./page.module.css";

export const metadata = {
  title: "About Islam — Masjid Hamza",
  description: "Learn about Islam through 25 curated topics.",
};

const categoryColors: Record<string, string> = {
  "About Islam":                "linear-gradient(135deg, #0d1b3e, #1e3370)",
  "Common Misconceptions":      "linear-gradient(135deg, #1a3a1a, #2d6e2d)",
  "About Allah":                "linear-gradient(135deg, #2a1a00, #7a4400)",
  "About Muhammad":             "linear-gradient(135deg, #1a0d3a, #4a1a8a)",
  "About Jesus":                "linear-gradient(135deg, #0d2a3a, #1a6e8a)",
  "About the Quran":            "linear-gradient(135deg, #3a1a00, #8a4400)",
  "Becoming Muslim":            "linear-gradient(135deg, #0d3a1a, #1a8a4a)",
  "Answers to Racism & Justice":"linear-gradient(135deg, #3a0d0d, #8a1a1a)",
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
            25 carefully curated topics — organized across 8 categories.
          </p>
          <Link href="/" className={styles.backBtn}>
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* TOPICS BY CATEGORY */}
      <div className={styles.content}>
        {islamCategories.map((cat) => {
          const topics = islamTopics.filter((t) => t.category === cat);
          if (topics.length === 0) return null;
          const bgColor = categoryColors[cat] || "linear-gradient(135deg, #0d1b3e, #1e3370)";
          return (
            <div key={cat} className={styles.categorySection}>
              <div className={styles.catHeader}>
                <div className={styles.catBar} />
                <h2 className={styles.catTitle}>{cat}</h2>
                <span className={styles.catCount}>{topics.length} articles</span>
              </div>
              <div className={styles.grid}>
                {topics.map((topic, i) => (
                  <Link
                    key={topic.slug}
                    href={`/about-islam/${topic.slug}`}
                    className={styles.card}
                  >
                    {/* COLORED IMAGE AREA */}
                    <div
                      className={styles.cardImg}
                      style={{ background: bgColor }}
                    >
                      {topic.icon}
                    </div>

                    {/* CARD BODY */}
                    <div className={styles.cardBody}>
                      <div className={styles.cardNum}>
                        {cat} · {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className={styles.cardTitle}>{topic.title}</h3>
                      <p className={styles.cardDesc}>{topic.desc}</p>
                      <div className={styles.cardArrow}>Read Article →</div>
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