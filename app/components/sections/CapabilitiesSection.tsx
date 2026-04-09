"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    id: "01",
    title: "React & Next.js",
    description:
      "Building fast, scalable, and SEO-friendly web applications with React and Next.js — from simple landing pages to complex full-stack platforms.",
    stack: "React / Next.js",
    type: "Frontend",
    bgColor: "#171717",
  },
  {
    id: "02",
    title: "UI Development",
    description:
      "Crafting pixel-perfect, responsive interfaces with Tailwind CSS, Bootstrap, and Foundation — ensuring consistency and usability across all screen sizes.",
    stack: "Tailwind / Bootstrap",
    type: "Styling",
    bgColor: "#1f1f1f",
  },
  {
    id: "03",
    title: "JavaScript (ES6+)",
    description:
      "Writing clean, maintainable JavaScript — from DOM manipulation to async data fetching and REST API integration for dynamic web experiences.",
    stack: "JS / REST APIs",
    type: "Language",
    bgColor: "#262626",
  },
  {
    id: "04",
    title: "Backend Integration",
    description:
      "Supporting server-side logic with PHP, MySQL, and Prisma — building and connecting databases to deliver fully functional web solutions.",
    stack: "PHP / MySQL / Prisma",
    type: "Backend",
    bgColor: "#2e2e2e",
  },
  {
    id: "05",
    title: "Tools & Workflow",
    description:
      "Comfortable working with Git, GitHub, and agile team workflows — shipping quality code on time while collaborating effectively with cross-functional teams.",
    stack: "Git / GitHub",
    type: "DevOps",
    bgColor: "#363636",
  },
];

const CapabilitiesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(capabilities.length - 1) * 25}%`]
  );

  return (
    <>
      {/* ── DESKTOP: horizontal scroll ── */}
      <section
        id="capabilities"
        ref={containerRef}
        className="relative bg-[#0f0f0f] hidden md:block"
        style={{ height: `${capabilities.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Header */}
          <div className="w-full z-20 px-12 pb-10">
            <div className="w-full max-w-[1269px] mx-auto">
              <motion.h2
                className="text-[40px] font-normal leading-[1.4em] tracking-[-0.04em]"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1] }}
              >
                <strong className="text-white font-semibold">Skills</strong>
                <span className="text-white/50"> and Capabilities</span>
              </motion.h2>
            </div>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="w-full flex items-center">
            <motion.div
              ref={cardsRef}
              className="flex gap-6 px-12 will-change-transform"
              style={{ x }}
            >
              {capabilities.map((capability, index) => (
                <CapabilityCard key={capability.id} capability={capability} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MOBILE: vertical stack ── */}
      <section
        id="capabilities-mobile"
        className="relative bg-[#0f0f0f] md:hidden px-6 py-16"
      >
        <motion.h2
          className="text-[28px] font-normal leading-[1.4em] tracking-[-0.04em] mb-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
        >
          <strong className="text-white font-semibold">Skills</strong>
          <span className="text-white/50"> and Capabilities</span>
        </motion.h2>

        <div className="flex flex-col gap-4">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.id} capability={capability} index={index} mobile />
          ))}
        </div>
      </section>
    </>
  );
};

const CapabilityCard = ({
  capability,
  index,
  mobile = false,
}: {
  capability: typeof capabilities[0];
  index: number;
  mobile?: boolean;
}) => {
  return (
    <motion.div
      className={`rounded-3xl p-7 md:p-9 relative overflow-hidden group cursor-pointer ${
        mobile ? "w-full h-auto" : "flex-none w-[400px] h-[520px]"
      }`}
      style={{ backgroundColor: capability.bgColor }}
      initial={{ opacity: 0, y: mobile ? 60 : 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.44, 0, 0.56, 1] }}
      whileHover={{ scale: mobile ? 1 : 1.02 }}
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, transparent 1px, transparent 20px, rgba(255,255,255,0.1) 21px)`,
        }}
      />

      <div className={`relative z-10 flex flex-col ${mobile ? "gap-4" : "h-full"}`}>
        {/* Badges */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-xs font-normal font-jetbrains leading-[1.5em] text-white/50">
              {capability.stack}
            </span>
          </div>
          <div className="flex items-center justify-center px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="text-xs font-normal font-jetbrains leading-[1.5em] text-white/50">
              {capability.type}
            </span>
          </div>
        </div>

        {/* Large Number — hidden on mobile */}
        {!mobile && (
          <div className="flex items-center justify-center my-auto">
            <span
              className="text-[160px] font-bold leading-[1em] tracking-[-0.02em] text-white/5"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {capability.id}
            </span>
          </div>
        )}

        {/* Title & Description */}
        <div className={mobile ? "" : "mt-auto"}>
          <h3 className="text-[22px] md:text-[28px] font-semibold leading-[1.4em] tracking-[-0.04em] text-white mb-2 md:mb-3">
            {capability.title}
          </h3>
          <p className="text-sm font-normal leading-[1.7em] tracking-[-0.01em] text-white/50">
            {capability.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CapabilitiesSection;