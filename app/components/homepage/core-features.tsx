"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import Image from "next/image";
import images from "@/public/images";

type Props = {};

export default function CoreFeatures({}: Props) {
  const features = [
    {
      title: "Build on accumulated wisdom",
      description:
        "When decisions need to be made, your organization has instant access to everything it knows—not just what you can find in the moment.",
    },
    {
      title: "Maintain consistency across time",
      description:
        "Ensure commitments, positions, and guidance remain consistent across years of organizational knowledge and leadership changes.",
    },
    {
      title: "Preserve institutional intelligence",
      description:
        "Knowledge doesn't leave when people leave. Your organization's intelligence persists, compounds, and continues to make better decisions possible.",
    },
  ];

  return (
    <section className="sectionPadding bg-[#050505] py-12 md:py-24 px-6" id="features">
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
              Organizations that continuously learn
            </h2>
            <p className="text-gray-300 text-lg w-full md:w-[55%] mx-auto">
              With Organizational Intelligence, your organization becomes smarter with every decision it makes
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
                >
                  <h3 className="text-2xl font-normal text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
