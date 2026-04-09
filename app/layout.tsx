import type { Metadata } from "next";
import { inter, spaceMono, jetbrainsMono } from "./fonts";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Al-Amin Jibril — Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0f0f0f] text-white font-inter antialiased">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}