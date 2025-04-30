"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/aniamtions";
import Image from "next/image";
import images from "@/public/images";
import ClaimYourSpot from "../components/homepage/claim-spot";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <main className="bg-black">
      <section className="sectionPadding py-40 pb-20 md:!py-40 relative overflow-hidden">
        <div className="container text-center md:text-left mb-14 z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-9xl font-medium pb-3 z-10"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl font-[200] w-full md:w-[50%] mb-6 z-10"
          >
            Next-generation AI platform built for creators, storytellers, and
            brands who want to do more with their long-form content
          </motion.p>
        </div>
        <div className="container md:h-[100px] w-full z-10 mb-14">
          <div className="md:w-screen flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 z-10">
            <div className="h-[250px] w-full md:w-[520px] relative rounded-xl overflow-hidden z-10">
              <Image
                src={images.about_hero_1}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="h-[250px] w-full md:w-[520px] relative rounded-xl overflow-hidden z-10">
              <Image
                src={images.about_hero_2}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="h-[250px] w-full md:w-[520px] relative perspective-1000 rounded-xl overflow-hidden z-10">
              <Image
                src={images.about_hero_3}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[80px] md:h-1/2 absolute bottom-0">
          <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[120%] h-full bg-gradient-to-r from-pink-500 via-teal-400 to-indigo-500 opacity-30 blur-3xl rounded-full mix-blend-screen animate-wave" />
        </div>
      </section>

      <section className="sectionPadding bg-[#050505] py-12 md:py-24 px-6">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between gap-14">
            <motion.div
              variants={itemVariants}
              className="relative basis-full min-h-[400px] md:min-h-0 md:basis-[35%] md:aspect-auto rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0">
                {/* <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                }}
              /> */}
                <Image
                  src={images.description}
                  alt=""
                  fill
                  className="object-cover"
                />
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
                className="absolute -left-4 top-10 w-16 h-16 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-500/30"
              />
            </motion.div>

              <div className="relative basis-2/5 w-full p-[1px] rounded-2xl overflow-hidden before:content-[''] before:scale-150 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[conic-gradient(from_0deg,rgba(255,255,255,0.8),transparent,rgba(255,255,255,0.8))] before:-rotate-45 before:z-0 before:blur-sm">
                {" "}
                {/* before:animate-spin-slow */}
                {/* Content Box */}
                <div className="relative h-full p-5 py-8 grid place-items-center bg-black rounded-[inherit] border border-white/20 z-10">
                  <p className="text-center leading-8 md:leading-10 text-white">
                    Dimlang is a next-generation AI platform built for creators,
                    storytellers, and brands who want to do more with their
                    long-form content. From interviews to podcasts, we use
                    powerful AI to automatically remix and repurpose your videos
                    into short-form clips that capture attention, spark emotion,
                    and drive engagement across platforms like Instagram,
                    YouTube, and TikTok.
                    <br />
                    <br />
                    We exist to make creative content more scalable, more
                    strategic, and more impactful.From ideation to execution,
                    Dimlang powers the entire content lifecycle, helping
                    creators go from raw ideas to finished, platform-ready
                    stories with speed and precision.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <ClaimYourSpot />
    </main>
  );
}
