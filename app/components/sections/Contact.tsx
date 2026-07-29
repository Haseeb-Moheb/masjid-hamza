"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";

const boardMembers = [
  { name: "Brother [Name]", role: "President",      phone: "(619) 000-0001" },
  { name: "Brother [Name]", role: "Vice President", phone: "(619) 000-0002" },
  { name: "Brother [Name]", role: "Secretary",      phone: "(619) 000-0003" },
  { name: "Brother [Name]", role: "Treasurer",      phone: "(619) 000-0004" },
];

const subjects = [
  "General Inquiry",
  "Prayer Times",
  "Programs & Classes",
  "New Muslim Support",
  "Nikah (Marriage)",
  "Funeral Services",
  "Donations",
  "Facility Rental",
  "Volunteering",
  "Other",
];

export default function Contact() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending]   = useState(false);
  const [success, setSuccess]   = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending — replace with real email API later
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSuccess(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* HEADER */}
        <div className={`${styles.header} ${styles.fadeIn}`} ref={ref1}>
          <div className={styles.tag}>Get in Touch</div>
          <h2 className={styles.title}>Contact Us</h2>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            We would love to hear from you. Whether you have a question,
            need support, or want to get involved — we are here for you.
          </p>
        </div>

        <div className={styles.grid}>

          {/* ── LEFT — INFO ── */}
          <div className={`${styles.fadeIn}`} ref={ref2}>
            <div className={styles.infoSection}>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <div className={styles.infoLabel}>Address</div>
                  <div className={styles.infoVal}>
                    9625 Black Mountain Rd, Suite 204<br/>
                    San Diego, CA 92126
                  </div>
                  <div className={styles.infoSub}>Free parking on the first floor</div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>☎️</div>
                <div>
                  <div className={styles.infoLabel}>Phone</div>
                  <div className={styles.infoVal}>
                    <a href="tel:6195712988">(619) 571-2988</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>✉️</div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoVal}>
                    <a href="mailto:masjidhamza9235@gmail.com">
                      masjidhamza9235@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🕌</div>
                <div>
                  <div className={styles.infoLabel}>Prayer Times</div>
                  <div className={styles.infoVal}>5 Daily Prayers</div>
                  <div className={styles.infoSub}>
                    Open every day · All are welcome
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🅿️</div>
                <div>
                  <div className={styles.infoLabel}>Parking</div>
                  <div className={styles.infoVal}>Free on first floor</div>
                  <div className={styles.infoSub}>Gate Code: *147852*</div>
                </div>
              </div>

            </div>

            {/* BOARD MEMBERS */}
            <div className={styles.boardCard}>
              <div className={styles.boardTitle}>Board Members</div>
              {boardMembers.map((m) => (
                <div key={m.role} className={styles.boardMember}>
                  <div>
                    <div className={styles.memberName}>{m.name}</div>
                    <div className={styles.memberRole}>{m.role}</div>
                  </div>
                  <a
                    href={`tel:${m.phone.replace(/\D/g, "")}`}
                    className={styles.memberPhone}
                  >
                    {m.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — FORM ── */}
          <div className={styles.formCard}>
            {success ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✅</div>
                <h3 className={styles.successTitle}>
                  Message Sent! Jazak Allahu Khair
                </h3>
                <p className={styles.successDesc}>
                  Thank you for reaching out to Masjid Hamza. We will
                  get back to you as soon as possible, in sha Allah.
                </p>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <input
                      className={styles.input}
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      style={{ marginBottom: 0 }}
                    />
                    <input
                      className={styles.input}
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      style={{ marginBottom: 0 }}
                    />
                  </div>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <select
                    className={styles.select}
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Subject *</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Your message... *"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}