import Navbar from "@/app/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ padding: "100px 24px", textAlign: "center", color: "#0d1b3e" }}>
        <h1 style={{ fontFamily: "var(--font-amiri)", fontSize: "2.5rem" }}>
          🕌 Masjid Hamza — Building in progress...
        </h1>
      </div>
    </main>
  );
}