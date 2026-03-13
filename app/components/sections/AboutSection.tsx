"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full px-6 md:px-12 py-0 overflow-hidden"
      style={{ minHeight: "100vh", background: "#0a0a0a" }}
    >
      {/* Red dot — desktop only, would look off in stacked mobile layout */}
      <div
        className="absolute z-10 hidden md:block"
        style={{
          left: "44%",
          top: "52%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#e63030",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Container */}
      <div
        className="flex flex-col items-start justify-between w-full max-w-[1269px] h-full"
        style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "60px" }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-start justify-start w-full flex-1"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.44, 0, 0.56, 1] }}
          style={{ position: "relative" }}
        >
          {/* Left text column */}
          <div
            className="flex flex-col items-start justify-between w-full md:w-1/2"
            style={{ minHeight: "calc(100vh - 140px)" }}
          >
            {/* Animated Paragraph — top */}
            <div style={{ maxWidth: "467px", paddingTop: "20px" }}>
              <AnimatedParagraph />
            </div>

            {/* Buttons — bottom on desktop, below paragraph on mobile */}
            <div className="flex flex-row items-center justify-start gap-10 mt-10 md:mt-0">
              <CTAButton href="https://cal.com" label="BOOK A CALL" />
              <CTAButton href="https://twitter.com" label="X" />
            </div>
          </div>

          {/* Portrait — absolute on desktop, normal flow on mobile */}
          <div
            className="hidden md:block absolute right-0 top-0 bottom-0"
            style={{ width: "48%", minHeight: "calc(100vh - 140px)" }}
          >
            <Image
              src="/images/alamin_picture.png"
              alt="Al-Amin Jibril portrait"
              fill
              className="object-cover object-top"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* Portrait — mobile only, normal flow below text */}
          <div className="block md:hidden w-full mt-10 rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <div className="relative w-full h-full">
              <Image
                src="/images/alamin_picture.png"
                alt="Al-Amin Jibril portrait"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Animated Paragraph — word-by-word reveal on scroll
const AnimatedParagraph = () => {
  const [visibleWords, setVisibleWords] = useState<boolean[]>([]);
  const ref = useRef<HTMLParagraphElement>(null);

  const text =
    "Al-Amin is a front-end developer passionate about crafting fast, responsive, and user-centered web applications. He combines clean design, modern frameworks, and performance optimization to deliver impactful digital experiences.";

  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((_, index) => {
              setTimeout(() => {
                setVisibleWords((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }, index * 50);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="text-xl md:text-2xl font-semibold leading-[1.4em] tracking-[-0.04em] text-white"
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block transition-opacity duration-300"
          style={{ opacity: visibleWords[index] ? 1 : 0.15 }}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

// CTA Button — hover slides label up to reveal duplicate (scroll effect)
const CTAButton = ({ href, label }: { href: string; label: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-row items-center gap-1 overflow-hidden"
      style={{ height: "28px" }}
    >
      {/* Label */}
      <div className="overflow-hidden" style={{ height: "28px" }}>
        <motion.div
          animate={{ y: hovered ? -28 : 0 }}
          transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
        >
          <div
            className="text-white font-normal leading-none tracking-[-0.01em]"
            style={{ fontSize: "15px", height: "28px", display: "flex", alignItems: "center" }}
          >
            {label}
          </div>
          <div
            className="text-white font-normal leading-none tracking-[-0.01em]"
            style={{ fontSize: "15px", height: "28px", display: "flex", alignItems: "center" }}
          >
            {label}
          </div>
        </motion.div>
      </div>

      {/* Arrow icon */}
      <div className="overflow-hidden" style={{ height: "28px", width: "20px" }}>
        <motion.div
          animate={{ y: hovered ? -28 : 0 }}
          transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
        >
          <div
            style={{ height: "28px", display: "flex", alignItems: "center" }}
            className="text-white/40"
          >
            <ArrowUpRight size={18} />
          </div>
          <div
            style={{ height: "28px", display: "flex", alignItems: "center" }}
            className="text-white/40"
          >
            <ArrowUpRight size={18} />
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default AboutSection;