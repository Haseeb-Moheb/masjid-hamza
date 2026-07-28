"use client";

import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const services = [
  {
    icon: "🕌",
    title: "Daily Congregational Prayers",
    desc: "Five daily prayers open to all. Free parking available on the first floor. Iqamah times updated seasonally.",
    link: "#prayer",
    linkLabel: "View Prayer Times",
  },
  {
    icon: "💒",
    title: "Nikah (Islamic Marriage)",
    desc: "Islamic marriage ceremonies conducted by our Imam for community members. Contact us to schedule.",
    link: "#contact",
    linkLabel: "Contact Us",
  },
  {
    icon: "🧕",
    title: "New Muslim Support",
    desc: "Dedicated guidance, mentorship, and resources for brothers and sisters who have reverted to Islam.",
    link: "#revert",
    linkLabel: "Learn More",
  },
  {
    icon: "📚",
    title: "Islamic Education",
    desc: "Quran classes, Islamic studies, and Arabic language programs for all ages and levels.",
    link: "#programs",
    linkLabel: "View Programs",
  },
  {
    icon: "🤝",
    title: "Community Outreach",
    desc: "Food drives, interfaith dialogues, and community service initiatives throughout San Diego.",
    link: "#contact",
    linkLabel: "Get Involved",
  },
  {
    icon: "📋",
    title: "Counseling & Guidance",
    desc: "Pastoral counseling and Islamic guidance from our Imam for families and individuals in need.",
    link: "#contact",
    linkLabel: "Contact Imam",
  },
  {
    icon: "🤍",
    title: "Funeral & Janazah Services",
    desc: "We assist families with Islamic funeral arrangements including Ghusl, Kafan, Janazah prayer, and burial coordination. Contact us immediately in times of need.",
    link: "/funeral-services",
    linkLabel: "View Full Details",
  },
  {
    icon: "🌙",
    title: "Ramadan Programs",
    desc: "Taraweeh prayers, Iftar gatherings, Quran completion, and Eid celebrations during the holy month.",
    link: "#programs",
    linkLabel: "View Programs",
  },
  {
    icon: "💰",
    title: "Zakat & Sadaqah",
    desc: "We help facilitate Zakat collection and distribution to those in need in the San Diego community.",
    link: "#donate",
    linkLabel: "Donate Now",
  },
];

const resources = [
  {
    icon: "📖",
    name: "Quran.com",
    desc: "Read, listen and search the Holy Quran with translations in 50+ languages.",
    url: "quran.com",
    href: "https://quran.com",
  },
  {
    icon: "🎓",
    name: "SeekersGuidance",
    desc: "Free online Islamic courses and Q&A from qualified scholars worldwide.",
    url: "seekersguidance.org",
    href: "https://seekersguidance.org",
  },
  {
    icon: "☪️",
    name: "GainPeace",
    desc: "Learn about Islam through articles, resources, and outreach programs.",
    url: "gainpeace.com",
    href: "https://www.gainpeace.com",
  },
  {
    icon: "🕌",
    name: "IslamicFinder",
    desc: "Prayer times, Qibla direction, and nearby masjid locator for Muslims worldwide.",
    url: "islamicfinder.org",
    href: "https://www.islamicfinder.org",
  },
  {
    icon: "📿",
    name: "Sunnah.com",
    desc: "Complete collection of authentic Hadith — the sayings and actions of the Prophet ﷺ.",
    url: "sunnah.com",
    href: "https://sunnah.com",
  },
  {
    icon: "🌍",
    name: "WhyIslam",
    desc: "Dawah organization offering free Qurans and answers to questions about Islam.",
    url: "whyislam.org",
    href: "https://www.whyislam.org",
  },
  {
    icon: "🎙️",
    name: "Muslim Central",
    desc: "Thousands of Islamic lectures, khutbahs, and podcasts from scholars around the world.",
    url: "muslimcentral.com",
    href: "https://muslimcentral.com",
  },
  {
    icon: "👨‍👩‍👧",
    name: "ICNA",
    desc: "Islamic Circle of North America — national Muslim organization with local chapters.",
    url: "icna.org",
    href: "https://www.icna.org",
  },
];

export default function Services() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.1 }
    );
    [ref1, ref2, ref3].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={`${styles.header} ${styles.fadeIn}`} ref={ref1}>
          <div className={styles.tag}>What We Offer</div>
          <h2 className={styles.title}>Our Services</h2>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            Resources, support, and programs available to our community
            members and anyone seeking to learn about Islam.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className={`${styles.grid} ${styles.fadeIn}`} ref={ref2}>
          {services.map((service) => (
            <a
              key={service.title}
              href={service.link}
              className={styles.card}
            >
              <div className={styles.iconWrap}>{service.icon}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <div className={styles.cardLink}>
                  {service.linkLabel} →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* EXTERNAL RESOURCES */}
        <div className={`${styles.resourcesSection} ${styles.fadeIn}`} ref={ref3}>
          <h3 className={styles.resourcesTitle}>Useful Islamic Resources</h3>
          <div className={styles.resourcesGrid}>
            {resources.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
              >
                <div className={styles.resourceIcon}>{r.icon}</div>
                <div className={styles.resourceName}>{r.name}</div>
                <div className={styles.resourceDesc}>{r.desc}</div>
                <div className={styles.resourceUrl}>{r.url} ↗</div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
