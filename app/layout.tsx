import type { Metadata } from "next";
import { Nunito, Amiri } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Masjid Hamza – Islamic Center of Mira Mesa",
  description:
    "Muslim community center located in Mira Mesa, San Diego. Daily prayers, Islamic education, community programs and services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${amiri.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}