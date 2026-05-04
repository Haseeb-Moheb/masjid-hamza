"use client";

import { useState, useEffect } from "react";
import styles from "./PrayerTimes.module.css";

interface Prayer {
  name: string;
  time: string;
  arabic: string;
}

function formatTime(t: string): string {
  const [h, m] = t.split(":");
  const hr = parseInt(h);
  const ampm = hr >= 12 ? "PM" : "AM";
  const h12 = hr % 12 || 12;
  return `${h12}:${m} ${ampm}`;
}

function toMins(t: string): number {
  const [h, m] = t.split(":");
  return parseInt(h) * 60 + parseInt(m);
}

export default function PrayerTimes() {
  const [prayers, setPrayers]       = useState<Prayer[]>([]);
  const [activeIdx, setActiveIdx]   = useState(0);
  const [nextIdx, setNextIdx]       = useState(1);
  const [hijri, setHijri]           = useState("");
  const [gregorian, setGregorian]   = useState("");
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(false);

  useEffect(() => {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getFullYear();

    fetch(
      `https://api.aladhan.com/v1/timingsByAddress/${d}-${m}-${y}?address=92126,US&method=2`
    )
      .then((r) => r.json())
      .then((data) => {
        const t = data.data.timings;
        const h = data.data.date.hijri;
        const g = data.data.date.gregorian;

        const prayerList: Prayer[] = [
          { name: "Fajr",    arabic: "الفجر",    time: t.Fajr },
          { name: "Sunrise", arabic: "الشروق",   time: t.Sunrise },
          { name: "Dhuhr",   arabic: "الظهر",    time: t.Dhuhr },
          { name: "Asr",     arabic: "العصر",    time: t.Asr },
          { name: "Maghrib", arabic: "المغرب",   time: t.Maghrib },
          { name: "Isha",    arabic: "العشاء",   time: t.Isha },
        ];

        const now = today.getHours() * 60 + today.getMinutes();
        let currentIdx = 0;
        for (let i = 0; i < prayerList.length; i++) {
          if (now >= toMins(prayerList[i].time)) currentIdx = i;
        }
        const upcoming = (currentIdx + 1) % prayerList.length;

        setPrayers(prayerList);
        setActiveIdx(currentIdx);
        setNextIdx(upcoming);
        setHijri(`${h.day} ${h.month.en} ${h.year} AH`);
        setGregorian(g.date);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.strip} id="prayer">
      <div className={styles.inner}>

        {/* LABEL */}
        <div className={styles.label}>
          🕌 Today&apos;s Salah
        </div>

        {/* PRAYER TIMES */}
        {loading && (
          <div className={styles.loading}>
            ⏳ Loading prayer times for San Diego (92126)…
          </div>
        )}

        {error && (
          <div className={styles.loading}>
            ⚠️ Unable to load prayer times. Please try again later.
          </div>
        )}

        {!loading && !error && (
          <div className={styles.prayerList}>
            {prayers.map((prayer, i) => (
              <div
                key={prayer.name}
                className={`${styles.prayerItem} ${i === activeIdx ? styles.active : ""}`}
              >
                <div className={styles.prayerName}>{prayer.name}</div>
                <div className={styles.prayerTime}>{formatTime(prayer.time)}</div>
                {i === nextIdx && (
                  <div className={styles.nextPrayer}>Next ▲</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* DATE BOX */}
        {!loading && !error && (
          <div className={styles.dateBox}>
            <div className={styles.hijri}>{hijri}</div>
            <div className={styles.gregorian}>{gregorian}</div>
          </div>
        )}

      </div>
    </div>
  );
}