import Link from "next/link";
import { islamTopics } from "@/lib/islamTopics";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export function generateStaticParams() {
  return islamTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = islamTopics.find((t) => t.slug === slug);
  if (!topic) return {};
  return {
    title: `${topic.title} — Masjid Hamza`,
    description: topic.desc,
  };
}

export default async function IslamTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = islamTopics.findIndex((t) => t.slug === slug);
  if (idx === -1) notFound();

  const topic = islamTopics[idx];
  const prev = idx > 0 ? islamTopics[idx - 1] : null;
  const next = idx < islamTopics.length - 1 ? islamTopics[idx + 1] : null;

  return (
    <main className={styles.page}>

      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/about-islam" className={styles.backBtn}>
            ← Back to About Islam
          </Link>
          <span className={styles.topBarCat}>{topic.category}</span>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.articleInner}>
          <div className={styles.articleHeader}>
            <div className={styles.icon}>{topic.icon}</div>
            <div className={styles.catTag}>{topic.category}</div>
            <h1 className={styles.title}>{topic.title}</h1>
            <div className={styles.goldLine} />
            <p className={styles.desc}>{topic.desc}</p>
          </div>

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: topic.content }}
          />

          <div className={styles.source}>
            Content sourced from{" "}
            <a
              href="https://www.gainpeace.com/learn-about-islam"
              target="_blank"
              rel="noopener noreferrer"
            >
              GainPeace.com
            </a>
          </div>
        </div>
      </article>

      <div className={styles.navSection}>
        <div className={styles.navInner}>
          <div>
            {prev && (
              <Link href={`/about-islam/${prev.slug}`} className={styles.navCard}>
                <div className={styles.navDir}>← Previous</div>
                <div className={styles.navIcon}>{prev.icon}</div>
                <div className={styles.navTitle}>{prev.title}</div>
              </Link>
            )}
          </div>

          <Link href="/about-islam" className={styles.navAll}>
            View All Topics
          </Link>

          <div>
            {next && (
              <Link href={`/about-islam/${next.slug}`} className={styles.navCard}>
                <div className={styles.navDir} style={{ textAlign: "right" }}>
                  Next →
                </div>
                <div className={styles.navIcon}>{next.icon}</div>
                <div className={styles.navTitle}>{next.title}</div>
              </Link>
            )}
          </div>
        </div>
      </div>

    </main>
  );
}