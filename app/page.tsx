import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import PrayerTimes from "./components/sections/PrayerTimes";
import Programs from "./components/sections/Programs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PrayerTimes />
      <About />
      <Programs />
    </main>
  );
}