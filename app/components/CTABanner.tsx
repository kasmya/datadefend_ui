"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-linear-to-br from-[#2d3e5f] via-[#4a4a7f] to-[#7b5a9f] rounded-3xl shadow-2xl">
          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-[100px]" />

          <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <Gift className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-white text-sm font-medium">
                  We have an irresistible starter offer for you
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                3000 DPDP-compliant consent
                <br className="hidden sm:block" />
                collections/month — ₹0 (forever)
              </h2>

              {/* Subtext */}
              <p className="text-base md:text-lg text-white/80 mb-8 max-w-3xl mx-auto">
                With our{" "}
                <span className="text-[#f59e0b] font-semibold">
                  Starter Pack
                </span>
                , you can collect{" "}
                <span className="text-[#f59e0b] font-semibold">
                  3,000 consents per month at ₹0
                </span>
                —forever.
              </p>

              {/* Two boxes */}
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                >
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    If your volumes are ≤ 3,000 / month, run DPDP end-to-end at
                    no cost.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                >
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    If your volumes are &gt; 3,000 / month, use this to run a
                    free live pilot before you buy.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
