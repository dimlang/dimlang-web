"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import images from "@/public/images";
import Image from "next/image";
import { useApplicationContext } from "@/app/context/ApplicationContext";

type Props = {};

export default function ClaimYourSpot({}: Props) {
  const { setIsWaitlistModalVisible } = useApplicationContext();
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
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-6xl text-center md:text-left font-normal text-white md:w-[70%]">
              Your knowledge is your greatest competitive advantage.
            </h2>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row p-6 pl-0 border-e-2 border-t-2 border-white rounded-tr-3xl">
          <div className="flex flex-col mb-10 scale-90 md:scale-100 md:mb-0">
            <h4 className="text-3xl md:text-4xl mb-6 md:w-[85%] text-gray-300">
              Don't let it remain trapped inside documents. Transform it into organizational intelligence.
            </h4>
            <button
              onClick={() => setIsWaitlistModalVisible(true)}
              className="bg-primary hover:bg-primary-sub text-white px-8 py-3 rounded-full w-fit font-medium transition-colors duration-200 text-base"
            >
              Request a Demo
            </button>
          </div>

          <div className="min-w-80 min-h-80 relative">
            <Image
              src={images.storytelling}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
