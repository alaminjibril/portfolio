"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectPreview {
  bg: string;
  headline: string;
  image?: string;
}

interface Project {
  id: number;
  title: string;
  year: string;
  tags: string[];
  description: string;
  preview: ProjectPreview;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "ArewaCostume",
    year: "'25",
    tags: ["DEV", "NEXT.JS", "FULLSTACK"],
    description:
      "A fashion platform celebrating northern Nigerian cultural style — featuring traditional wear, modern designs, and accessories. Built with Next.js, Clerk for auth, Neon & Prisma for data.",
    preview: {
      bg: "#1a0f0a",
      headline: "Your home for elegant\nnorthern fashion & culture",
      image: "/Arewacostume.png",
    },
    link: "https://arewa-costume.vercel.app",
  },
  {
    id: 2,
    title: "Accruefy",
    year: "'25",
    tags: ["DEV", "NEXT.JS"],
    description:
      "Built a pixel-perfect frontend clone of an accounting business website, replicating clean layouts, responsive design, and professional UI elements.",
    preview: {
      bg: "#1a0f0a",
      headline: "Pixel-Perfect Accounting Website Clone with Modern UI",
      image: "/accruefy.png",
    },
    link: "https://accruefy.vercel.app",
  },
];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div
      className="w-full sm:w-[190px] h-[160px] sm:h-[140px] rounded overflow-hidden relative flex-shrink-0 shadow-lg"
      style={{ background: project.preview.bg }}
    >
      {project.preview.image ? (
        <Image
          src={project.preview.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
        />
      ) : (
        <>
          {/* Mock browser bar */}
          <div className="h-[18px] flex items-center px-2 gap-1 border-b border-white/10 bg-black/20">
            <div className="w-[5px] h-[5px] rounded-full bg-white/20" />
            <div className="w-[5px] h-[5px] rounded-full bg-white/20" />
            <div className="w-[5px] h-[5px] rounded-full bg-white/20" />
            <div className="flex-1 h-2 bg-white/10 rounded ml-2" />
          </div>
          {/* Placeholder Content */}
          <div className="p-3 flex flex-col gap-2">
            <div className="text-[6.5px] leading-tight text-white/70">
              {project.preview.headline.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            <div className="flex gap-1.5 mt-1">
              <div className="w-[48px] h-[48px] rounded bg-white/10" />
              <div className="w-[48px] h-[48px] rounded bg-white/10" />
              <div className="w-[48px] h-[48px] rounded bg-white/10" />
            </div>
            <div className="h-3.5 bg-white/10 rounded flex items-center px-2">
              <div className="w-[50px] h-1 bg-white/20 rounded" />
              <div className="ml-auto w-5 h-2 bg-amber-600 rounded" />
            </div>
          </div>
          <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 rounded-full border border-amber-600/60 flex items-center justify-center">
            <span className="text-[6px] text-amber-600">↗</span>
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsListSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative bg-[#111111]">
      {projects.map((project, index) => {
        const cardContent = (
          <motion.div
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="py-8 md:py-10 border-b border-[#2a2a2a] transition-colors duration-300 cursor-pointer"
            style={{
              background: hoveredId === project.id ? "#161616" : "#111111",
              borderTop: index === 0 ? "1px solid #2a2a2a" : "none",
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          >
            <div className="max-w-[1100px] mx-auto px-6 md:px-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">

              {/* Left: project info */}
              <div className="flex-1 w-full">
                {/* Title + Year */}
                <div className="flex items-baseline justify-between mb-3.5">
                  <h2 className="text-[22px] md:text-[28px] font-semibold text-white tracking-tight">
                    {project.title}
                  </h2>
                  <span className="text-lg md:text-xl text-[#555555] font-normal">
                    {project.year}
                  </span>
                </div>

                {/* Tags + line */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#3a3a3a] rounded-full px-3 py-0.5 text-[10px] text-[#888888] tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="flex-1 h-px bg-[#2a2a2a] min-w-[20px]" />
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-[#666666] leading-relaxed font-jetbrains">
                  {project.description}
                </p>
              </div>

              {/* Right: preview thumbnail */}
              <ProjectPreview project={project} />
            </div>
          </motion.div>
        );

        return (
          <div key={project.id} className="sticky top-0">
            {project.link ? (
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                {cardContent}
              </Link>
            ) : (
              cardContent
            )}
          </div>
        );
      })}
      </section>
  );
}