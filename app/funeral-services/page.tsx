import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Funeral & Janazah Services — Masjid Hamza",
  description: "Islamic funeral services guidance for the San Diego Muslim community.",
};

export default function FuneralServicesPage() {
  return (
    <main className={styles.page}>

      {/* TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/#services" className={styles.backBtn}>
            ← Back to Services
          </Link>
          <span className={styles.topBarCat}>Community Services</span>
        </div>
      </div>

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.tag}>Inna lillahi wa inna ilayhi raji'un</div>
          <h1 className={styles.title}>Funeral & Janazah Services</h1>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            Indeed, to Allah we belong and to Him we shall return. [2:156]<br/>
            We are here to support you and your family during this difficult time.
          </p>
          <a href="tel:+18585681674" className={styles.emergencyBtn}>
            📞 Call Us: (858) 568-1674
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.contentInner}>

          {/* INTRO */}
          <div className={styles.introCard}>
            <h2 className={styles.sectionTitle}>Guidelines to Establish Islamic Burial</h2>
            <p>To establish an Islamic Burial there are two main issues to deal with: Mortuary Service and Cemetery Service. We are here to guide your family through every step of this process.</p>
          </div>

          {/* MORTUARY SERVICE */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span className={styles.cardNum}>1</span>
              Mortuary Service
            </h2>
            <p className={styles.cardDesc}>Mortuary service includes:</p>
            <ul className={styles.list}>
              <li>Transportation of the body from the place of death to the mortuary facility where preparation (washing & Kafan) is done</li>
              <li>Getting the burial permit from the County of San Diego</li>
              <li>Transporting the body to the cemetery for burial</li>
              <li>Providing the family with the death certificate</li>
            </ul>

            <p className={styles.cardDesc} style={{ marginTop: "24px" }}>
              <strong>We have experience with these mortuaries:</strong>
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactName}>🏛️ Bishop Mortuary</div>
                <div className={styles.contactDetail}>📍 3444 Citrus St, Lemon Grove, CA 91945</div>
                <div className={styles.contactDetail}>👤 Point of Contact: Gwen</div>
                <a href="tel:6194664462" className={styles.contactPhone}>📞 (619) 466-4462</a>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactName}>🏛️ Cali Home Funeral Services</div>
                <div className={styles.contactDetail}>📍 7401 Princess View Dr Ste A, San Diego, CA 92120</div>
                <div className={styles.contactDetail}>👤 Point of Contact: Joe</div>
                <a href="tel:6197089716" className={styles.contactPhone}>📞 (619) 708-9716</a>
              </div>
            </div>
          </div>

          {/* CEMETERY SERVICE */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span className={styles.cardNum}>2</span>
              Cemetery Service
            </h2>
            <p className={styles.cardDesc}>
              The family of the deceased needs to establish a grave at a cemetery.
              You can reach out to the following masaajid for availability of graves and mortuary services:
            </p>

            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactName}>🕌 Islamic Society of Corona</div>
                <div className={styles.contactDetail}>📍 465 Santana Way, Corona, CA 92881</div>
                <div className={styles.contactDetail}>👤 Brother Azmi</div>
                <a href="tel:9517368155" className={styles.contactPhone}>📞 (951) 736-8155</a>
                <a href="https://coronamuslims.com/services/burial-services/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Visit Funeral Services Page ↗</a>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactName}>🕌 Islamic Society of Orange County</div>
                <div className={styles.contactDetail}>📍 1 Al-Rahman Plaza, Garden Grove, CA 92844</div>
                <div className={styles.contactDetail}>👤 Brother Omar</div>
                <a href="tel:7145315400" className={styles.contactPhone}>📞 (714) 531-5400</a>
                <a href="https://www.isocmasjid.org/mortuary-services/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Visit Funeral Services Page ↗</a>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactName}>🕌 American Islamic Institute of Antelope Valley</div>
                <div className={styles.contactDetail}>📍 1125 E. Palmdale Blvd, Palmdale, CA 93550</div>
                <div className={styles.contactDetail}>👤 Sh. Gaber Mohamed</div>
                <a href="tel:6612241111" className={styles.contactPhone}>📞 (661) 224-1111</a>
                <a href="https://aiiav.org/cemetery-and-mortuary/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Visit Funeral Services Page ↗</a>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactName}>🕌 United Islamic Youth Cemetery</div>
                <div className={styles.contactDetail}>📍 Purple Sage Rd, Adelanto, CA 92301</div>
                <div className={styles.contactDetail}>👤 Brother Yahyaa</div>
                <a href="tel:7606178099" className={styles.contactPhone}>📞 (760) 617-8099</a>
              </div>
            </div>
          </div>

          {/* DEATH PROTOCOLS */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span className={styles.cardNum}>3</span>
              Death Protocols
            </h2>

            <h3 className={styles.subTitle}>🏠 In-House / Hospice Death</h3>
            <ol className={styles.orderedList}>
              <li>Call the nurse from the hospice agency so they can pronounce time of death</li>
              <li>Let the nurse know if you have a preferred mortuary. The nurse will initiate contact with the mortuary to pick up the deceased after pronouncing time of death</li>
            </ol>

            <h3 className={styles.subTitle}>🏥 Hospital or Nursing Home Death</h3>
            <ol className={styles.orderedList}>
              <li>Upon declaration of death by the staff representative (RN Nurse, Doctor, or certified medical representative), the family shall notify their preferred mortuary</li>
              <li>The mortuary will pick up the deceased and transport to the mortuary, completing all required legal paperwork</li>
            </ol>
          </div>

          {/* GHUSL */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span className={styles.cardNum}>4</span>
              Ghusl (Islamic Washing)
            </h2>
            <ol className={styles.orderedList}>
              <li>The body shall be held at the mortuary in an isolated, temperature-controlled environment until the initiation of religious services (Ghusl, Shrouding, and Viewing)</li>
              <li>To prepare the body for burial, it must be washed (Ghusl) and shrouded (Kafan). Close same-sex family members are encouraged to give Ghusl</li>
              <li>It is recommended that as few people as needed should participate in the Ghusl process out of respect for the deceased</li>
              <li>The mortuary can contact personnel to assist with or perform the Ghusl if needed</li>
              <li>Under no circumstances will it be permitted to wash the bodies of the opposite gender — with the exception of husband and wife</li>
            </ol>
          </div>

          {/* IMPORTANT NOTE */}
          <div className={styles.importantCard}>
            <h3>⚠️ Very Important</h3>
            <p>Please consider wearing a face mask and maintaining social distance during the process.</p>
            <p>For further information or immediate assistance, please contact:</p>
            <div className={styles.importantContact}>
              <strong>Salam Community Services Office</strong><br/>
              <a href="tel:+18585681674">📞 +1 (858) 568-1674</a><br/>
              <a href="mailto:salamcommunityservices@gmail.com">✉️ salamcommunityservices@gmail.com</a>
            </div>
          </div>

          {/* BACK BUTTON */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/" className={styles.backHomeBtn}>
              ← Back to Home
            </Link>
          </div>

        </div>
      </div>

    </main>
  );
}