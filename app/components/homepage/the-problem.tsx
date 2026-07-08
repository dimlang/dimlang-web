"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";

export default function TheProblem() {
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
            <p className="text-gray-400 text-lg">
              Dimlang is the Organizational Intelligence Platform—where accumulated knowledge becomes trusted intelligence that makes better decisions possible.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-center max-w-4xl mx-auto pt-8">
            <h2 className="text-4xl md:text-6xl font-normal text-white">
              Organizations create extraordinary knowledge every single day.
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              Documents. Meetings. Presentations. Research. Decisions. Conversations. Reports. Policies.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed pt-4">
              But that knowledge rarely makes the organization smarter.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center pt-8"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              It fragments across systems. Gets lost when people leave. Becomes inaccessible when critical decisions need to be made.
            </p>
            <p className="text-white text-2xl md:text-3xl font-light leading-relaxed">
              What if every piece of knowledge made your organization permanently smarter?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
