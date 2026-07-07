"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";

export default function ThePlatform() {
  const differences = [
    {
      label: "Enterprise Search",
      description: "Finds documents",
      vs: "Dimlang reasons over accumulated knowledge",
    },
    {
      label: "Knowledge Management",
      description: "Stores information",
      vs: "Dimlang connects context across time and decisions",
    },
    {
      label: "Disposable AI",
      description: "Starts every conversation from scratch",
      vs: "Dimlang builds institutional memory that compounds",
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
          <motion.div variants={itemVariants} className="space-y-6 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-normal text-white">
              Dimlang is institutional knowledge infrastructure
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              We transform everything your organization knows—documents, meetings, presentations, emails, research, videos, policies, decisions—into intelligence you can trust when decisions matter.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="max-w-4xl mx-auto space-y-6 pt-8"
          >
            {differences.map((diff, index) => (
              <motion.div
                key={diff.label}
                variants={itemVariants}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/3">
                    <h3 className="text-white font-medium text-lg mb-1">{diff.label}</h3>
                    <p className="text-gray-500 text-sm">{diff.description}</p>
                  </div>
                  <div className="hidden md:block text-gray-600 text-2xl">→</div>
                  <div className="md:w-2/3">
                    <p className="text-gray-300 text-base">{diff.vs}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Unlike tools that help individuals work faster, Dimlang is infrastructure that makes your organization's accumulated knowledge valuable for decisions at scale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
