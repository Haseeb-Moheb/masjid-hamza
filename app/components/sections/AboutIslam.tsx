"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./AboutIslam.module.css";

const topics = [
  {
    icon: "☪️",
    bg: "linear-gradient(135deg, #0d1b3e, #1e3370)",
    title: "Who is Allah?",
    desc: "Understanding the concept of God in Islam — the One Creator of all existence.",
    content: `
      <p><strong>Allah</strong> is the Arabic word for God — the same God worshipped by Abraham, Moses, and Jesus. The word Allah is unique in that it has no plural and no gender, reflecting the absolute oneness of God.</p>
      <p>In Islam, Allah is <strong>Al-Ahad</strong> (The One) and <strong>Al-Samad</strong> (The Eternal). He was not born, nor does He have children. He has no partners and nothing is comparable to Him.</p>
      <p>Muslims believe Allah has 99 beautiful names (Asma ul-Husna), each describing one of His attributes — such as Ar-Rahman (The Most Merciful), Al-Hakeem (The All-Wise), and Al-Wadud (The Most Loving).</p>
      <p>The belief in the absolute oneness of Allah — called <strong>Tawheed</strong> — is the foundation of Islam. It means that Allah alone deserves to be worshipped, and no person, object, or idol should be associated with Him.</p>
    `,
  },
  {
    icon: "📖",
    bg: "linear-gradient(135deg, #1a3a1a, #2d5a2d)",
    title: "The Holy Quran",
    desc: "The final revelation from Allah, preserved in its original form for over 1,400 years.",
    content: `
      <p>The <strong>Quran</strong> is the word of Allah revealed to Prophet Muhammad ﷺ through the Angel Jibreel (Gabriel) over a period of 23 years. It is the primary source of guidance for Muslims.</p>
      <p>Unlike other religious scriptures, the Quran has been <strong>perfectly preserved</strong> in its original Arabic language since the time of its revelation. Millions of Muslims around the world have memorized the entire Quran from memory.</p>
      <p>The Quran contains 114 chapters (Surahs) and covers all aspects of life — from theology and worship to family law, economics, and social justice.</p>
      <p>The Quran is not just a book of rules but a complete <strong>way of life</strong>. It challenges humanity to reflect on the universe, on history, and on their own souls to recognize the truth of Islam.</p>
    `,
  },
  {
    icon: "🌟",
    bg: "linear-gradient(135deg, #3a1a00, #7a3d00)",
    title: "Prophet Muhammad ﷺ",
    desc: "The life and legacy of the final messenger sent as a mercy to all of mankind.",
    content: `
      <p><strong>Muhammad ﷺ</strong> (peace be upon him) was born in Mecca in 570 CE. He is the final prophet and messenger sent by Allah to guide all of humanity until the Day of Judgment.</p>
      <p>Before receiving revelation, he was known among his people as <strong>Al-Amin</strong> — the Trustworthy. At age 40, he received the first revelation from Allah through Angel Jibreel.</p>
      <p>The Prophet ﷺ spent 23 years conveying the message of Islam, transforming a society plagued by idol worship, injustice, and ignorance into a community of faith, justice, and knowledge.</p>
      <p>Allah describes him in the Quran: <strong>"And We have not sent you except as a mercy to the worlds."</strong> (21:107). His life (Seerah) and teachings (Sunnah) are a practical guide for every Muslim.</p>
    `,
  },
  {
    icon: "🕋",
    bg: "linear-gradient(135deg, #1a0d3a, #3d1a7a)",
    title: "5 Pillars of Islam",
    desc: "The core practices that form the foundation of a Muslim's faith and daily life.",
    content: `
      <p>The <strong>Five Pillars of Islam</strong> are the core acts of worship that every Muslim is required to perform. They are the framework of Muslim life.</p>
      <p><strong>1. Shahada (Declaration of Faith)</strong> — "There is no god but Allah, and Muhammad is His messenger." This is the entry point into Islam.</p>
      <p><strong>2. Salah (Prayer)</strong> — Muslims pray five times a day facing the Kaaba in Mecca. Prayer is a direct connection between the worshipper and Allah.</p>
      <p><strong>3. Zakat (Charity)</strong> — Muslims give 2.5% of their saved wealth annually to those in need, purifying their wealth and helping the community.</p>
      <p><strong>4. Sawm (Fasting)</strong> — During the month of Ramadan, Muslims fast from dawn to sunset, abstaining from food, drink, and bad behavior.</p>
      <p><strong>5. Hajj (Pilgrimage)</strong> — Once in a lifetime, every Muslim who is able must travel to Mecca to perform the Hajj pilgrimage.</p>
    `,
  },
  {
    icon: "🌍",
    bg: "linear-gradient(135deg, #0d2a3a, #1a5a6e)",
    title: "Islam & Science",
    desc: "How Islamic civilization laid the groundwork for modern science and mathematics.",
    content: `
      <p>Islam strongly encourages the pursuit of knowledge. The very first word revealed in the Quran was <strong>"Iqra"</strong> — meaning "Read" or "Recite." The Quran itself contains numerous references to natural phenomena that align with modern science.</p>
      <p>During the Islamic Golden Age (8th–13th centuries), Muslim scholars made groundbreaking contributions to <strong>mathematics, astronomy, medicine, chemistry, and philosophy</strong>.</p>
      <p>Scholars like <strong>Ibn Sina (Avicenna)</strong> wrote the Canon of Medicine, used in European universities for centuries. <strong>Al-Khwarizmi</strong> invented algebra. <strong>Ibn al-Haytham</strong> pioneered optics and the scientific method.</p>
      <p>Far from being in conflict with science, Islam views the study of the natural world as a form of worship — discovering the signs of Allah in His creation.</p>
    `,
  },
  {
    icon: "❤️",
    bg: "linear-gradient(135deg, #2a1a0d, #5a3a1a)",
    title: "Islam & Family",
    desc: "The Islamic perspective on family values, rights, responsibilities, and raising children.",
    content: `
      <p>In Islam, the <strong>family is the foundation of society</strong>. Islam places great importance on maintaining strong family bonds (Silat ur-Rahm) and has detailed guidance for every family relationship.</p>
      <p>The Prophet ﷺ said: <strong>"The best of you is the one who is best to his family."</strong> Islam grants specific rights to spouses, children, parents, and relatives.</p>
      <p><strong>Marriage (Nikah)</strong> is considered a sacred covenant and an act of worship in Islam. Both husband and wife have rights and responsibilities toward each other based on love, mercy, and mutual respect.</p>
      <p>Parents hold a very high status in Islam — Allah commands Muslims to honor their parents and care for them, especially in old age. The Prophet ﷺ placed the mother's status three times above the father's in terms of honor.</p>
    `,
  },
  {
    icon: "🤲",
    bg: "linear-gradient(135deg, #0d3a1a, #1a7a3d)",
    title: "How to Pray",
    desc: "A step-by-step guide to the Muslim prayer — the direct connection to Allah.",
    content: `
      <p><strong>Salah</strong> (Islamic prayer) is performed five times a day: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). It is the most important act of worship after the Shahada.</p>
      <p>Before praying, Muslims perform <strong>Wudu</strong> (ablution) — a ritual purification involving washing the hands, face, arms, wiping the head, and washing the feet.</p>
      <p>Prayer involves <strong>standing, bowing (Ruku), prostrating (Sujood), and sitting</strong> — each position accompanied by specific supplications in Arabic from the Quran and Sunnah.</p>
      <p>The prayer is performed facing the <strong>Qibla</strong> (direction of the Kaaba in Mecca). It takes only a few minutes but provides a powerful spiritual connection and reminder of Allah throughout the day.</p>
      <p>If you would like to learn how to pray or need guidance, please contact us at the masjid — we are here to help!</p>
    `,
  },
  {
    icon: "✨",
    bg: "linear-gradient(135deg, #3a0d1a, #7a1a3d)",
    title: "Common Questions",
    desc: "Answers to frequently asked questions about Islam from a non-Muslim perspective.",
    content: `
      <p><strong>Q: Do Muslims worship Muhammad?</strong><br/>No. Muslims worship Allah alone. Muhammad ﷺ was a human prophet and messenger. Muslims respect and love him deeply but do not worship him.</p>
      <p><strong>Q: Is Islam a religion of peace?</strong><br/>Yes. The word "Islam" itself comes from the Arabic root "Salama" meaning peace and submission. Islam promotes justice, compassion, and peaceful coexistence.</p>
      <p><strong>Q: Do Muslims believe in Jesus?</strong><br/>Yes. Muslims believe Jesus (Isa ﷺ) was a prophet and messenger of Allah, born miraculously to the Virgin Mary. However, Muslims do not believe he is the son of God.</p>
      <p><strong>Q: Why do Muslim women wear hijab?</strong><br/>The hijab is a religious obligation for Muslim women as an act of modesty and obedience to Allah. Many women wear it with pride as part of their identity and faith.</p>
      <p><strong>Q: Can non-Muslims visit a mosque?</strong><br/>Absolutely! Non-Muslims are welcome to visit mosques to learn about Islam. Please contact us to arrange a visit to Masjid Hamza.</p>
    `,
  },
];

export default function AboutIslam() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<number | null>(null);

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

  // close modal on Escape key
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setSelected(null);
    if (e.key === "ArrowRight" && selected !== null)
      setSelected((s) => (s! + 1) % topics.length);
    if (e.key === "ArrowLeft" && selected !== null)
      setSelected((s) => (s! - 1 + topics.length) % topics.length);
  }, [selected]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const topic = selected !== null ? topics[selected] : null;

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
            curated topics. Click any card to read more.
          </p>
        </div>

        {/* CARD GRID */}
        <div className={`${styles.grid} ${styles.fadeIn}`} ref={gridRef}>
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className={styles.card}
              onClick={() => setSelected(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelected(i)}
            >
              <div className={styles.cardImg} style={{ background: topic.bg }}>
                {topic.icon}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{topic.title}</h3>
                <p className={styles.cardDesc}>{topic.desc}</p>
                <div className={styles.cardArrow}>Read More →</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {topic && (
        <div
          className={styles.overlay}
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className={styles.modal}>

            {/* MODAL HEADER */}
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{topic.icon}</div>
              <button
                className={styles.modalClose}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* MODAL BODY */}
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{topic.title}</h2>
              <span className={styles.modalTag}>About Islam · Topic {selected! + 1} of {topics.length}</span>
              <div className={styles.modalGoldLine} />
              <div
                className={styles.modalContent}
                dangerouslySetInnerHTML={{ __html: topic.content }}
              />
            </div>

            {/* PREV / NEXT */}
            <div className={styles.modalNav}>
              <button
                className={styles.navBtn}
                onClick={() => setSelected((s) => (s! - 1 + topics.length) % topics.length)}
              >
                ← Previous
              </button>
              <span className={styles.navCounter}>
                {selected! + 1} / {topics.length}
              </span>
              <button
                className={styles.navBtn}
                onClick={() => setSelected((s) => (s! + 1) % topics.length)}
              >
                Next →
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}