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
              Intelligence that grows with you
            </h2>
          </motion.div>

          <div className="md:container">
            <div className="relative w-full md:w-2/3 p-[1px] rounded-2xl mx-auto overflow-hidden before:content-[''] before:scale-150 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[conic-gradient(from_0deg,rgba(255,255,255,0.8),transparent,rgba(255,255,255,0.8))] before:-rotate-45 before:z-0 before:blur-sm">
              {/* Content Box */}
              <div className="relative p-8 md:p-10 bg-black rounded-[inherit] border border-white/20 z-10">
                <div className="text-center leading-relaxed text-white space-y-6">
                  <p className="text-2xl md:text-3xl font-light">
                    Knowledge compounds.
                  </p>
                  <p className="text-lg text-gray-300 pt-4">
                    Unlike tools that help you work faster today and are forgotten tomorrow, Dimlang builds an asset that becomes more valuable over time.
                  </p>
                  <p className="text-lg text-gray-300">
                    The more your organization uses Dimlang, the smarter it becomes.
                  </p>
                  <p className="text-xl text-white font-light pt-4">
                    This isn't software. It's infrastructure for organizational learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
