"use client";

import { useEffect, useRef } from "react";
import styles from "./Revert.module.css";

const steps = [
  {
    num: "1",
    icon: "📖",
    title: "Learn",
    desc: "Explore the basics of Islam at your own pace and with no pressure. Read, ask questions, and seek knowledge with an open heart.",
  },
  {
    num: "2",
    icon: "💬",
    title: "Ask",
    desc: "Our community is ready to answer your questions with patience, respect, and care. No question is too basic or too difficult.",
  },
  {
    num: "3",
    icon: "🤲",
    title: "Declare",
    desc: "When your heart is ready, take your Shahada — the declaration of faith. This is the moment you officially embrace Islam.",
  },
];

const afterSteps = [
  "Take a ritual purification bath (Ghusl)",
  "Learn the five daily prayers (Salah)",
  "Read a translation of the Quran",
  "Connect with your local masjid community",
  "Learn gradually — Islam is a lifelong journey",
  "Know that Allah is always near and forgiving",
];

const benefits = [
  "All previous sins are completely forgiven — a fresh start",
  "Direct connection with Allah — no intermediaries needed",
  "Membership in a global family of 1.8 billion Muslims",
  "True purpose and meaning in every aspect of life",
  "Inner peace that no worldly success can provide",
  "The path to Jannah (Paradise) in the eternal life",
];

export default function Revert() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.1 }
    );
    [ref1, ref2, ref3, ref4].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="revert">
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={`${styles.header} ${styles.fadeIn}`} ref={ref1}>
          <div className={styles.tag}>New Muslims</div>
          <h2 className={styles.title}>Revert to Islam</h2>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            Are you interested in learning about Islam or ready to take your Shahada?
            You are not alone. Our community is here to guide, support, and walk
            alongside you every step of the way — with open arms and open hearts.
          </p>
        </div>

        {/* 3 STEPS */}
        <div className={`${styles.steps} ${styles.fadeIn}`} ref={ref2}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* SHAHADA CARD */}
        <div className={`${styles.shahadaCard} ${styles.fadeIn}`} ref={ref3}>
          <div className={styles.shahadaArabic}>
            أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللهِ
          </div>
          <div className={styles.shahadaTranslit}>
            Ash-hadu an lā ilāha ill-Allāh, wa ash-hadu anna Muḥammadan rasūl-Allāh
          </div>
          <div className={styles.shahadaTranslation}>
            "I bear witness that there is no god but Allah, and I bear witness that Muhammad is the messenger of Allah."
          </div>
          <p className={styles.shahadaDesc}>
            This is the Shahada — the declaration of faith and the key to entering Islam.
            When sincerely said with belief in the heart, a person becomes a Muslim.
            All previous sins are forgiven and a new chapter begins.
          </p>
        </div>

        {/* BOTTOM GRID */}
        <div className={`${styles.bottomGrid} ${styles.fadeIn}`} ref={ref4}>
          <div className={styles.infoCard}>
            <h3>🌱 After Your Shahada</h3>
            <div className={styles.infoList}>
              {afterSteps.map((item, i) => (
                <div key={i} className={styles.infoItem}>{item}</div>
              ))}
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>💎 Benefits of Embracing Islam</h3>
            <div className={styles.infoList}>
              {benefits.map((item, i) => (
                <div key={i} className={styles.infoItem}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <h3>Ready to Take the Next Step?</h3>
          <p>
            Whether you have questions, want to learn more, or are ready to
            take your Shahada — Masjid Hamza is here for you. Contact us
            today and let us walk this journey together.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.btnPrimary}>
              📞 Contact Us Today
            </a>
            <a href="/about-islam" className={styles.btnOutline}>
              📖 Learn About Islam First
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}