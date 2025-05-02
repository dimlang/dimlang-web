"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import images from "@/public/images";
import { useApplicationContext } from "@/app/context/ApplicationContext";

type Props = {};

export default function HeroSection({}: Props) {
  const { setIsWaitlistModalVisible } = useApplicationContext();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="sectionPadding bg-black py-40 pb-20 md:!py-40 relative overflow-hidden">
      <div className="container text-center mb-10">
        <motion.h1
          variants={item}
          className="text-5xl font-semibold pb-3 bg-clip-text text-transparent animate-gradient bg-[length:150%_150%] bg-gradient-to-t from-gray-700 to-white"
        >
          AI-Powered Storytelling at Scale
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl font-[200] w-full md:w-[50%] mx-auto pb-6 text-white"
        >
          Dimlang is the AI-native platform where content becomes culture. One
          upload, infinite impact through emotion, precision, and global reach.
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)",
          }}
          onClick={() => setIsWaitlistModalVisible(true)}
          whileTap={{ scale: 0.95 }}
          className="bg-primary hover:primary-sub text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 text-sm"
        >
          Join the Creative Revolution
        </motion.button>
      </div>
      <div className="container h-[200px] md:h-[600px] rounded-xl relative overflow-hidden z-10">
        <Image
          src={images.hero_image}
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-full h-[80px] md:h-1/2 absolute bottom-0">
        {/* <Image
          src={images.hero_gradient}
          alt="Hero gradient"
          fill
          className="object-contain"
        /> */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[120%] h-full bg-gradient-to-r from-pink-500 via-teal-400 to-indigo-500 opacity-30 blur-3xl rounded-full mix-blend-screen animate-wave" />
      </div>
    </section>
  );
}
