import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import PrayerTimes from "./components/sections/PrayerTimes";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PrayerTimes />
    </main>
  );
}