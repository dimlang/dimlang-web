"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import { Search, FileQuestion, RotateCcw, Clock } from "lucide-react";

export default function TheProblem() {
  const costs = [
    {
      icon: FileQuestion,
      question: "What did we decide last time?",
      impact: "Strategic mistakes from missing context",
    },
    {
      icon: Search,
      question: "Did we already say something about this?",
      impact: "Consistency failures that damage credibility",
    },
    {
      icon: RotateCcw,
      question: "Hasn't someone done this before?",
      impact: "Duplicated work and wasted resources",
    },
    {
      icon: Clock,
      question: "What happens when experienced people leave?",
      impact: "Institutional knowledge walks out the door",
    },
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
          <motion.div variants={itemVariants} className="space-y-4 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-normal text-white">
              Your organization already knows the answer to most questions.
            </h2>
            <p className="text-gray-300 text-xl">
              The problem is you can't access that knowledge when decisions need to be made.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto pt-8"
          >
            {costs.map((cost) => {
              const Icon = cost.icon;
              return (
                <motion.div
                  key={cost.question}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
                >
                  <Icon className="text-primary mb-4" size={32} />
                  <h3 className="text-white text-lg font-medium mb-2 italic">
                    "{cost.question}"
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cost.impact}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center pt-8 max-w-3xl mx-auto"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              As organizations grow, knowledge fragments across people, systems, and time. Every day, teams recreate work, make decisions without full context, and lose institutional memory when people leave.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
