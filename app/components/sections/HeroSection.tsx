"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-0 w-full min-h-screen lg:min-h-[85vh] px-6 md:px-12 py-0">
      {/* Container */}
      <div className="flex flex-col items-start justify-start gap-9 w-full max-w-[1269px] flex-1 py-24 pb-16 lg:py-[120px] lg:pb-20">

        {/* Top Content - Avatar & Description */}
        <motion.div
          className="flex flex-row items-start justify-start gap-4 md:gap-6 w-full max-w-full"
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.44, 0, 0.56, 1] }}
        >
          {/* Avatar */}
          <div className="flex-none w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden relative">
            <Image
              src="/images/alamin_avatar.jpg"
              alt="Al-Amin Jibril"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description Text */}
          <div className="flex-1 max-w-[369px]">
            <p className="text-xs md:text-sm font-normal font-jetbrains leading-[1.7em] tracking-normal text-white/50">
              I partner with teams and startups to build responsive, user-centric
              web applications — turning ideas into clean, performant front-end
              experiences.
            </p>
          </div>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1 w-full" />

        {/* Main Content Container */}
        <div className="flex flex-col items-start justify-center gap-8 md:gap-12 w-full">
          {/* Heading */}
          <div className="flex flex-col items-start justify-start gap-2.5 w-full">
            <motion.h1
              className="text-[44px] sm:text-[64px] md:text-[80px] lg:text-[104px] font-semibold leading-[1.05em] tracking-[-0.05em] text-left text-white w-full lg:max-w-[75%]"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 1, ease: [0.44, 0, 0.56, 1] }}
            >
              Front-end Developer{" "}
              <span className="text-white/25">and</span> UI Engineer
            </motion.h1>
          </div>

          {/* Info Row */}
          <motion.div
            className="flex flex-row items-center justify-start gap-4 md:gap-12 w-full"
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.44, 0, 0.56, 1] }}
          >
            {/* Location */}
            <p className="text-xs md:text-sm font-normal font-jetbrains leading-[1.5em] text-white/50 whitespace-nowrap">
              Abuja, Nigeria
            </p>

            <div className="flex-1 h-px bg-white/10" />

            {/* Timezone - hidden on mobile */}
            <p className="hidden sm:block text-xs md:text-sm font-normal font-jetbrains leading-[1.5em] text-white/50 whitespace-nowrap">
              WAT (GMT +1)
            </p>

            <div className="hidden sm:block flex-1 h-px bg-white/10" />

            {/* Available Badge */}
            <div className="flex items-center justify-center gap-2 min-w-min">
              <div
                className="w-2.5 h-2.5 rounded-full border-2 border-[#41ba90] flex-none"
                style={{
                  willChange: "transform",
                  animation: "pulse-rotate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              <p className="text-xs md:text-sm font-normal font-jetbrains leading-[1.5em] text-[#41ba90] whitespace-nowrap">
                AVAILABLE
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;