"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full mix-blend-exclusion"
      style={{ maxWidth: "min(1365px, 100vw)" }}
    >
      {/* Blur Backdrop */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${scrolled ? "backdrop-blur-md" : ""}`}
        style={{ background: scrolled ? "rgba(15, 15, 15, 0.8)" : "transparent" }}
      />

      {/* Navigation Container */}
      <nav className="relative flex items-center justify-between md:justify-center gap-4 md:gap-[60px] h-auto px-6 md:px-12 py-5 md:py-6">

        {/* Logo/Name */}
        <div className="flex-none">
          <Link
            href="/"
            className="text-white text-base font-normal leading-[1.7em] tracking-[-0.01em] no-underline hover:text-white/75 transition-colors duration-300"
          >
            <strong>Al-amin Jibril</strong>
          </Link>
        </div>

        {/* Progress Track — hidden on mobile */}
        <div className="hidden md:block flex-1 h-px bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 w-full h-full bg-white origin-left"
            style={{ scaleX: smoothProgress }}
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-[60px]">
          <NavLink href="#projects">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#footer-section">Contact</NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-white/10 flex flex-col px-6 py-6 gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {[
            { href: "#projects", label: "Work" },
            { href: "#about", label: "About" },
            { href: "#footer-section", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-base font-normal tracking-[-0.01em] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}

          {/* Mobile progress bar */}
          <div className="h-px bg-white/10 relative overflow-hidden mt-2">
            <motion.div
              className="absolute inset-y-0 left-0 w-full h-full bg-white origin-left"
              style={{ scaleX: smoothProgress }}
            />
          </div>
        </motion.div>
      )}
    </header>
  );
};

// Navigation Link Component
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="flex-none h-7 relative group" aria-label="button">
      <div className="flex flex-col items-center justify-end gap-1 h-full py-0.5 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="text-white text-base font-normal leading-[1.7em] tracking-[-0.01em]"
            initial={{ y: 0 }}
            whileHover={{ y: -28 }}
            transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
          >
            {children}
          </motion.div>
        ))}
      </div>
    </Link>
  );
};

export default Header;