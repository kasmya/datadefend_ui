"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "Netflix",
    gray: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Meta",
    gray: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Google",
    gray: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    gray: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Spotify",
    gray: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
  {
    name: "Amazon",
    gray: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Uber",
    gray: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with Bracket Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 text-left mb-10"
        >
          <span className="text-gray-300 text-2xl sm:text-3xl font-light">{`{`}</span>
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#152645] tracking-tight">
            Built by the team that has helped secure
          </span>
          <span className="text-gray-300 text-2xl sm:text-3xl font-light">{`}`}</span>
        </motion.div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-linear-to-l from-white to-transparent z-10" />

          {/* Animated Logo Container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-12 md:gap-16 lg:gap-20"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Render logos twice for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="relative h-6 md:h-8 w-auto min-w-20 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 shrink-0"
                >
                  <img
                    src={logo.gray}
                    alt={logo.name}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-16"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-linear-to-br from-[#152645] to-[#0e488b] shadow-2xl border-4 border-white/20">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 md:w-20 md:h-20 bg-[#f59e0b] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group text-[#152645]">
                <svg
                  className="w-7 h-7 md:w-9 md:h-9 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8">
              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#a4d4ff]/20 backdrop-blur-md rounded-full text-white text-xs md:text-sm font-medium">
                See DataDefend in action • 2:34
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
