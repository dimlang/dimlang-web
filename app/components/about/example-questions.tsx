"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import { Search } from "lucide-react";

type Props = {};

export default function ExampleQuestions({}: Props) {
  const questions = [
    "What has our CEO said about AI over the last two years?",
    "Summarize everything we know about Product X.",
    "Generate a presentation using only approved regulatory content.",
    "Compare this proposal with previous submissions.",
    "What guidance has changed across our SOPs?",
    "Find evidence supporting this recommendation.",
  ];

  return (
    <section className="sectionPadding bg-black py-12 md:py-24 px-6">
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
              Ask Enterprise Questions
            </h2>
            <p className="text-gray-300 text-lg w-full md:w-[55%] mx-auto">
              Move beyond keyword search. Ask complex questions and receive answers grounded in your organization's trusted content with full source attribution.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {questions.map((question, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <Search className="text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-white text-base leading-relaxed">{question}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
