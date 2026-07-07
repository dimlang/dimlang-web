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
      title: "Never lose institutional context",
      description:
        "Preserve everything your organization knows—documents, meetings, decisions, conversations—and make it accessible when decisions need to be made.",
    },
    {
      title: "Understand how decisions evolved",
      description:
        "Track how ideas, guidance, and commitments changed over time. See who said what, when, and why.",
    },
    {
      title: "Make confident decisions at scale",
      description:
        "Ask complex questions and receive answers grounded in your accumulated knowledge with full source attribution.",
    },
    {
      title: "Generate work grounded in your truth",
      description:
        "Create presentations, reports, communications, and policy documents using only your organization's approved knowledge.",
    },
    {
      title: "Ensure consistency across time",
      description:
        "Compare statements, positions, and commitments across years of organizational knowledge to avoid contradictions.",
    },
    {
      title: "Secure and governed by default",
      description:
        "Role-based access, audit trails, and compliance support ensure your institutional knowledge remains properly governed.",
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
              What Dimlang delivers
            </h2>
            <p className="text-gray-300 text-lg w-full md:w-[50%] mx-auto">
              Outcomes that matter for organizations where decisions and consistency are critical
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <motion.div
            variants={itemVariants}
            className="relative aspect-[3/4] md:aspect-auto rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0">
              {/* <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                }}
              /> */}
              <Image src={images.core_features} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-700/30 backdrop-blur-lg rounded-full border border-primary"
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -left-4 top-10 w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full border border-purple-500/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
