import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* backgrounds */}
      <div className={styles.heroBg} />
      <div className={styles.heroPattern} />
      <div className={styles.heroGlow} />

      {/* content */}
      <div className={styles.heroContent}>
        <div className={styles.arabic}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
        <div className={styles.bismillah}>
          In the name of Allah, the Most Gracious, the Most Merciful
        </div>

        <div className={styles.divider} />

        <h1 className={styles.heading}>
          Welcome to <span>Masjid Hamza</span>
        </h1>

        <p className={styles.subtitle}>
          Islamic Center of Mira Mesa · A place of worship, learning, and community
          <br />
          Serving the Muslim community of San Diego
        </p>

        <div className={styles.buttons}>
          <a href="#prayer" className={styles.btnPrimary}>
            🕌 Prayer Times
          </a>
          <a href="#donate" className={styles.btnOutline}>
            💛 Donate Now
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}