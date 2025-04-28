"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";

export default function ProductVision() {
  return (
    <section className="sectionPadding bg-[#050505] py-12 px-6">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12 mb-10"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-5xl md:text-7xl font-normal text-white">
              Product Vision Tease
            </h2>
          </motion.div>

          <div className="md:container">
            <div className="relative w-full md:w-1/2 p-[1px] rounded-2xl mx-auto overflow-hidden before:content-[''] before:scale-150 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[conic-gradient(from_0deg,rgba(255,255,255,0.8),transparent,rgba(255,255,255,0.8))] before:-rotate-45 before:z-0 before:blur-sm"> {/* before:animate-spin-slow */}
              {/* Content Box */}
              <div className="relative p-4 bg-black rounded-[inherit] border border-white/20 z-10">
                <p className="text-center leading-8 text-white">
                  Dimlang isn't a tool, it's the future of influence. Coming
                  soon: ToneGraph™ performance scoring, AI-created message
                  variants for A/B testing, live content impact predictions,
                  real-time sentiment maps, and trend sync. Dimlang will align
                  your next clip with what the world's watching now. We're
                  building the world's first AI-native content orchestration
                  platform.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
