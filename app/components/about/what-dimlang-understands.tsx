"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import { FileText, Presentation, Video, BookOpen, Mail, Database, Globe, FolderOpen } from "lucide-react";

type Props = {};

export default function WhatDimlangUnderstands({}: Props) {
  const contentTypes = [
    { icon: FileText, label: "Documents" },
    { icon: Presentation, label: "Presentations" },
    { icon: Video, label: "Meeting recordings" },
    { icon: Video, label: "Videos" },
    { icon: BookOpen, label: "Research papers" },
    { icon: FileText, label: "SOPs" },
    { icon: Mail, label: "Emails" },
    { icon: Database, label: "Knowledge bases" },
    { icon: Globe, label: "Websites" },
    { icon: FolderOpen, label: "Enterprise repositories" },
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
              What Dimlang Understands
            </h2>
            <p className="text-gray-300 text-lg w-full md:w-[50%] mx-auto">
              Dimlang ingests enterprise content and creates an intelligent knowledge layer capable of understanding relationships, context, and evolving narratives
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
          >
            {contentTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.label}
                  variants={itemVariants}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-colors duration-300 flex flex-col items-center justify-center gap-3 text-center"
                >
                  <Icon className="text-primary" size={32} />
                  <span className="text-white text-sm font-light">{type.label}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
