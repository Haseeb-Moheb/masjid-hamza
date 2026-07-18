import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import PrayerTimes from "./components/sections/PrayerTimes";
import Programs from "./components/sections/Programs";
import Revert from "./components/sections/Revert";
import Services from "./components/sections/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PrayerTimes />
      <About />
      <Programs />
      <Revert />
      <Services />
    </main>
  );
}