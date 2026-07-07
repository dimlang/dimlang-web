"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import { X, Check } from "lucide-react";

type Props = {};

export default function WhyDimlang({}: Props) {
  const comparisons = [
    {
      feature: "Memory",
      traditional: "Starts every conversation from scratch",
      dimlang: "Builds institutional memory",
    },
    {
      feature: "Focus",
      traditional: "Focused on individual productivity",
      dimlang: "Understands enterprise knowledge",
    },
    {
      feature: "Context",
      traditional: "Limited organizational memory",
      dimlang: "Grounds answers in trusted content",
    },
    {
      feature: "Purpose",
      traditional: "Generates content",
      dimlang: "Enables knowledge reuse across the organization",
    },
  ];

  return (
    <section className="sectionPadding bg-[#050505] py-12 md:py-24 px-6">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="text-5xl md:text-7xl font-normal text-white">
              Why Dimlang
            </h2>
            <p className="text-gray-300 text-lg w-full md:w-[50%] mx-auto">
              Enterprise intelligence built on organizational knowledge, not just AI generation
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <div className="min-w-[600px]">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 mb-2">
                <div></div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-medium text-gray-400">
                    Traditional AI Chat
                  </h3>
                </div>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-medium text-primary">
                    Dimlang
                  </h3>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-4">
                {comparisons.map((comparison, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
                  >
                    <div className="flex items-center">
                      <span className="text-white font-medium text-base md:text-lg">
                        {comparison.feature}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-400 text-sm md:text-base">
                        {comparison.traditional}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-white text-sm md:text-base">
                        {comparison.dimlang}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
