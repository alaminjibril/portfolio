"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="w-full min-h-screen bg-[#0f0f0f] flex items-center justify-center px-6 md:px-12 py-16 md:py-[124px]"
    >
      <div className="w-full max-w-[1269px] flex flex-col gap-8 md:gap-9">

        {/* CTA Section */}
        <div className="flex-1 flex flex-col justify-between gap-6 md:gap-9 rounded-2xl">
          {/* Heading */}
          <h1 className="text-[52px] sm:text-[72px] md:text-[104px] font-semibold leading-[1.05em] tracking-[-0.05em] text-left">
            <span className="text-white/50">Let&apos;s </span>
            <span className="text-white">Connect</span>
          </h1>

          {/* Subheading */}
          <h3 className="text-[18px] md:text-[32px] font-normal leading-[1.4em] tracking-[-0.04em] text-white/50 max-w-[700px]">
            Feel free to reach out if you have a project in mind, want to
            collaborate, or just want to chat about front-end dev.
          </h3>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-0 w-full min-h-[80px] md:h-[108px]">
          <CTAButton
            href="https://cal.com"
            bgColor="#1f1f1f"
            className="flex-1"
          >
            Book a Call
          </CTAButton>

          <CTAButton
            href="mailto:alaminjibrilsani@gmail.com"
            bgColor="#2e2e2e"
            className="flex-1"
          >
            Send an Email
          </CTAButton>

          <CTAButton
            href="https://github.com/alaminjibril"
            bgColor="#545454"
            className="flex-1"
          >
            GitHub Profile
          </CTAButton>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-12 w-full py-0">
          <p className="text-sm font-normal font-jetbrains tracking-0 leading-[1.5em] text-white/50">
            Al-Amin Jibril, 2026
          </p>

          <div className="flex items-center gap-8">
            <SocialIcon href="https://twitter.com" icon={<Twitter size={24} />} />
            <SocialIcon href="https://linkedin.com/in/alaminjibril" icon={<Linkedin size={24} />} />
            <SocialIcon href="https://github.com/alaminjibril" icon={<Github size={24} />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

// CTA Button Component
const CTAButton = ({
  href,
  children,
  bgColor,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  bgColor: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center min-w-min h-full px-8 md:px-[60px] py-6 md:py-9 transition-all duration-300 hover:brightness-110 ${className}`}
      style={{ backgroundColor: bgColor }}
      aria-label="button"
    >
      <motion.h4
        className="text-lg md:text-2xl font-normal leading-[1.4em] tracking-[-0.04em] text-white text-center"
        initial={{ transform: "perspective(1200px)" }}
        whileHover={{ transform: "perspective(1200px) scale(1.02)" }}
        transition={{ duration: 0.3 }}
      >
        <strong>{children}</strong>
      </motion.h4>
    </Link>
  );
};

// Social Icon Component
const SocialIcon = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-none w-7 h-7 relative group"
      aria-label="social link"
    >
      <div className="flex flex-col items-center justify-center py-0.5 h-full overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="text-white/25 w-6 h-6 hover:text-white/60 transition-colors"
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

export default Footer;