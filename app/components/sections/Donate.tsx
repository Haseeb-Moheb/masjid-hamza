"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Donate.module.css";

const amounts = ["$10", "$25", "$50", "$100", "$250", "Custom"];

const paymentMethods = [
  {
    icon: "💳",
    label: "Credit Card",
    sub: "Visa · Mastercard · Amex",
  },
  {
    icon: "🍎",
    label: "Apple Pay",
    sub: "Quick & secure",
  },
  {
    icon: "💚",
    label: "Zelle",
    sub: "mominservices@live.com",
  },
  {
    icon: "💜",
    label: "Venmo",
    sub: "mominservices@live.com",
  },
  {
    icon: "✉️",
    label: "Check / Mail",
    sub: "Payable to: MOMIN SERVICES",
  },
  {
    icon: "🏦",
    label: "Bank Transfer",
    sub: "Contact us for details",
  },
];

export default function Donate() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const [freq, setFreq]         = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount]     = useState("$25");
  const [showCustom, setShowCustom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add(styles.visible);
      }),
      { threshold: 0.1 }
    );
    if (ref1.current) observer.observe(ref1.current);
    if (ref2.current) observer.observe(ref2.current);
    return () => observer.disconnect();
  }, []);

  const handleAmount = (a: string) => {
    setAmount(a);
    setShowCustom(a === "Custom");
  };

  return (
    <section className={styles.section} id="donate">
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* ── LEFT SIDE ── */}
          <div className={`${styles.fadeIn}`} ref={ref1}>
            <div className={styles.tag}>Support Us</div>
            <h2 className={styles.title}>Support Masjid Hamza</h2>
            <div className={styles.goldLine} />
            <p className={styles.desc}>
              Your generous donations help us maintain the masjid, run
              programs, and serve the community of Mira Mesa and greater
              San Diego. Every contribution — big or small — makes a
              real difference.
            </p>
            <div className={styles.checkNote}>
              ✉️ Checks & money orders payable to: <strong>MOMIN SERVICES</strong>
            </div>
            <p className={styles.hadith}>
              "The believer's shade on the Day of Resurrection will be
              his charity." — Prophet Muhammad ﷺ
            </p>
            <p className={styles.hadith}>
              "Sadaqah extinguishes sin as water extinguishes fire."
              — Prophet Muhammad ﷺ
            </p>

            {/* PAYMENT METHODS */}
            <div className={styles.methodsTitle}>
              Accepted Payment Methods
            </div>
            <div className={styles.methods}>
              {paymentMethods.map((m) => (
                <div key={m.label} className={styles.method}>
                  <div className={styles.methodIcon}>{m.icon}</div>
                  <div>
                    <div className={styles.methodLabel}>{m.label}</div>
                    <div className={styles.methodSub}>{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FORM CARD ── */}
          <div className={`${styles.fadeIn}`} ref={ref2}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Make a Donation</h3>

              {/* FREQUENCY */}
              <label className={styles.freqLabel}>Frequency</label>
              <div className={styles.freqToggle}>
                <button
                  className={`${styles.freqBtn} ${freq === "one-time" ? styles.active : ""}`}
                  onClick={() => setFreq("one-time")}
                >
                  One-Time
                </button>
                <button
                  className={`${styles.freqBtn} ${freq === "monthly" ? styles.active : ""}`}
                  onClick={() => setFreq("monthly")}
                >
                  Monthly
                </button>
              </div>

              {/* AMOUNT */}
              <label className={styles.amountLabel}>Select Amount</label>
              <div className={styles.amountGrid}>
                {amounts.map((a) => (
                  <button
                    key={a}
                    className={`${styles.amountBtn} ${amount === a ? styles.active : ""}`}
                    onClick={() => handleAmount(a)}
                  >
                    {a}
                  </button>
                ))}
              </div>
              {showCustom && (
                <input
                  className={styles.customInput}
                  type="number"
                  placeholder="Enter custom amount ($)"
                  min="1"
                />
              )}

              {/* NAME */}
              <div className={styles.inputRow}>
                <label className={styles.inputLabel}>Your Name (Optional)</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Anonymous"
                />
              </div>

              {/* DEDICATION */}
              <div className={styles.inputRow}>
                <label className={styles.inputLabel}>Dedicate This Donation</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="In memory of / In honor of..."
                />
              </div>

              {/* SUBMIT */}
              <button className={styles.submitBtn}>
                💛 Donate {amount !== "Custom" ? amount : ""} {freq === "monthly" ? "/ Month" : ""} Now
              </button>
              <p className={styles.stripeNote}>
                🔒 Secure payment · Online card processing coming soon<br/>
                Use Zelle or Venmo for instant transfer
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
