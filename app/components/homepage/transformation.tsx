"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import { TrendingUp, Network, Lightbulb } from "lucide-react";

export default function Transformation() {
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
            <h2 className="text-5xl md:text-7xl font-normal text-white">
              Knowledge compounds.
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed">
              Dimlang transforms organizational knowledge into trusted intelligence that helps organizations make better decisions and continuously learn.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <TrendingUp className="text-primary" size={32} />
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Every document added strengthens the system.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Network className="text-primary" size={32} />
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Every meeting captured deepens understanding.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lightbulb className="text-primary" size={32} />
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed">
                Every decision made builds institutional wisdom.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center pt-8 max-w-3xl mx-auto"
          >
            <p className="text-white text-2xl md:text-3xl font-light leading-relaxed">
              Your organization doesn't just accumulate knowledge. It continuously learns from everything it knows.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
