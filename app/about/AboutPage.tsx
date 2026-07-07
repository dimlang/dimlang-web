"use client";

import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/aniamtions";
import Image from "next/image";
import images from "@/public/images";
import ClaimYourSpot from "../components/homepage/claim-spot";
import useResponsiveness from "../hooks/useResponsiveness";
import WhatDimlangUnderstands from "../components/about/what-dimlang-understands";
import ExampleQuestions from "../components/about/example-questions";
import WhyDimlang from "../components/about/why-dimlang";

type Props = {};

export default function AboutPage({}: Props) {
  const windowRes = useResponsiveness();
  const isMobile = windowRes.width && windowRes.width < 768;
  const onMobile = typeof isMobile == "boolean" && isMobile;
  const onDesktop = typeof isMobile == "boolean" && !isMobile;

  return (
    <main className="bg-black">
      <section className="sectionPadding py-40 pb-20 md:!py-40 relative overflow-hidden">
        <div className="container text-center md:text-left mb-14 z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-9xl font-medium pb-3 text-white"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl font-[200] w-full md:w-[50%] mb-6 text-white"
          >
            The Organizational Intelligence Platform
          </motion.p>
        </div>
        <div className="container md:h-[100px] w-full mb-14 relative z-20">
          <motion.div
            animate={onMobile ? undefined : { x: ["0%", "-20%", "0%"] }}
            transition={
              onMobile
                ? undefined
                : {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
            className="md:w-screen flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6"
          >
            <div className="h-[250px] w-full md:w-[520px] relative rounded-xl overflow-hidden">
              <Image
                src={images.about_hero_1}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="h-[250px] w-full md:w-[520px] relative rounded-xl overflow-hidden">
              <Image
                src={images.about_hero_2}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="h-[250px] w-full md:w-[520px] relative perspective-1000 rounded-xl overflow-hidden">
              <Image
                src={images.about_hero_3}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
        <div className="w-full h-[80px] md:h-1/2 absolute bottom-0 z-[1]">
          <div className=" z-[1] absolute top-0 left-1/3 -translate-x-1/2 w-[120%] h-full bg-gradient-to-r from-pink-500 via-teal-400 to-indigo-500 opacity-30 blur-3xl rounded-full mix-blend-screen animate-wave" />
        </div>
      </section>

      <section className="sectionPadding bg-[#050505] py-12 md:py-24 px-6">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between gap-14">
            <motion.div
              variants={itemVariants}
              className="relative basis-full min-h-[400px] md:min-h-0 md:basis-[35%] md:aspect-auto rounded-2xl overflow-hidden scale-90"
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
                className="absolute -left-4 top-10 w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full border border-purple-500/30"
              />
            </motion.div>

            <div className="relative basis-2/5 w-full p-[1px] rounded-2xl overflow-hidden before:content-[''] before:scale-150 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[conic-gradient(from_0deg,rgba(255,255,255,0.8),transparent,rgba(255,255,255,0.8))] before:-rotate-45 before:z-0 before:blur-sm">
              {" "}
              {/* before:animate-spin-slow */}
              {/* Content Box */}
              <div className="relative h-full p-5 py-8 grid place-items-center bg-black rounded-[inherit] border border-white/20 z-10">
                <p className="text-center text-lg leading-8 md:leading-10 text-white">
                  We believe organizations should become smarter over time. Not just accumulate more knowledge—actually become smarter. Every document created. Every meeting held. Every decision made. All of it should compound into intelligence that makes the organization better.
                  <br />
                  <br />
                  Dimlang is the Organizational Intelligence Platform. We transform accumulated knowledge into trusted intelligence that helps organizations make better decisions and continuously learn. Unlike tools that help you work faster today and are forgotten tomorrow, we build infrastructure that makes your organization smarter over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatDimlangUnderstands />

      <ExampleQuestions />

      <WhyDimlang />

      <ClaimYourSpot />
    </main>
  );
}
