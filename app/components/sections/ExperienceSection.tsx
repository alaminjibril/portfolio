"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

const experiences = [
  {
    company: "Smash Technology Limited",
    role: "Front-end Developer",
    period: "January 2026 → Present",
  },
  {
    company: "FlexiSAF EduSoft",
    role: "Front-end Developer (Intern)",
    period: "May 2025 → Aug 2025",
  },
  {
    company: "Oasis Management Limited",
    role: "Front-end Developer (Intern)",
    period: "Dec 2023 → May 2024",
  },
  {
    company: "Kayyux Global Technologies",
    role: "Front-end Developer (Intern)",
    period: "Jun 2022 → Nov 2022",
  },
  {
    company: "Arewa Tech Hub",
    role: "Front-end Developer (Volunteer)",
    period: "Nov 2021 → Feb 2022",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center gap-0 w-full px-6 md:px-12 py-16 md:py-20 bg-[#0f0f0f]"
    >
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-start justify-start gap-12 lg:gap-20 w-full max-w-[1269px]">

        {/* Left Side - Title and Buttons */}
        <div className="w-full lg:flex-none lg:w-[400px] flex flex-col items-start justify-start gap-8 lg:gap-9">
          <motion.h2
            className="text-[28px] md:text-[36px] lg:text-[40px] font-normal leading-[1.4em] tracking-[-0.04em] text-left"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1] }}
          >
            <span className="text-white">I have </span>
            <strong className="text-white font-semibold">3+ years of experience</strong>
            <span className="text-white/50"> building responsive web applications with startups and enterprise teams across Nigeria.</span>
          </motion.h2>

          <div className="hidden lg:block flex-1" />

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row lg:flex-col items-start justify-start gap-6 w-auto"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.44, 0, 0.56, 1] }}
          >
            <CTAButton href="/cv.pdf" icon={<Download size={20} />} label="Download CV" />
            <CTAButton href="https://github.com/alaminjibril" icon={<ArrowUpRight size={20} />} label="View GitHub Profile" />
          </motion.div>
        </div>

        {/* Right Side - Experience List */}
        <motion.div
          className="flex-1 flex flex-col items-start justify-start gap-0 w-full"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.44, 0, 0.56, 1] }}
        >
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceItem = ({
  experience,
  isLast,
}: {
  experience: typeof experiences[0];
  isLast: boolean;
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-12 w-full py-6 md:py-9 ${
        !isLast ? "border-b border-white/10" : ""
      }`}
    >
      {/* Company + Role stacked on mobile */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-12 flex-1">
        <div className="flex-none sm:min-w-[200px]">
          <h3 className="text-sm md:text-base font-normal leading-[1.7em] tracking-[-0.01em] text-white">
            {experience.company}
          </h3>
        </div>
        <div className="flex-1">
          <p className="text-sm md:text-base font-normal leading-[1.7em] tracking-[-0.01em] text-white/50">
            {experience.role}
          </p>
        </div>
      </div>

      {/* Period */}
      <div className="flex-none sm:min-w-[180px] sm:text-right">
        <p className="text-xs md:text-base font-normal font-jetbrains leading-[1.5em] text-white/30 sm:text-white/50">
          {experience.period}
        </p>
      </div>
    </div>
  );
};

const CTAButton = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row items-center justify-start gap-1.5 min-w-min h-7 relative overflow-hidden"
      aria-label="button"
    >
      <div className="flex flex-col items-center justify-end gap-1 h-full py-0.5 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="text-white/50 text-sm font-normal leading-[1.7em] tracking-[-0.01em] whitespace-nowrap"
            initial={{ y: 0 }}
            whileHover={{ y: -28 }}
            transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
          >
            {label}
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center py-0.5 h-full overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="text-white/25 w-5 h-5"
            initial={{ y: 0 }}
            whileHover={{ y: -28 }}
            transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </Link>
  );
};

export default ExperienceSection;