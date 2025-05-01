"use client";

import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import images from "@/public/images";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Creators & Influencers",
    description:
      "Transform your raw footage into studio-grade content in seconds. No crew, no hassle.",
    bgColor: "bg-purple-600",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Brand & Marketing Teams",
    description:
      "Launch campaigns at the speed of market. Test messages, track relevance, and stay 10 steps ahead.",
    bgColor: "bg-orange-100",
    image:
      "https://images.pexels.com/photos/1427274/pexels-photo-1427274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Political Campaigns & Advocacy Orgs",
    description:
      "Deliver precision-crafted messages to every sector of your audience through any channel.",
    bgColor: "bg-blue-500",
    image:
      "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Content Editors & Assistants",
    description:
      "Save hours per piece with AI-driven editing flows, style matching, and automated QA.",
    bgColor: "bg-purple-900",
    image:
      "https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Micro-Agencies",
    description:
      "Deliver enterprise-quality work with lean teams. Scale fast, optimize output, increase efficiency.",
    bgColor: "bg-blue-300",
    image:
      "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const WhoItsForSection = () => {
  return (
    <section className="sectionPadding bg-[#050505] py-24 px-6">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center md:text-left">
            <h2 className="text-5xl md:text-8xl font-normal text-white">Who It's For</h2>
            <p className="text-gray-300 text-xl w-full md:w-[45%]">
              Dimlang is built for the bold, the people driving conversations,
              commanding audiences, and shifting culture
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            <div className="col-span-full h-[250px] md:h-[400px] text-white relative">
              <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                  Creators & Influencers
                </h4>
                <p className="w-full md:w-[60%]">
                  Transform your raw footage into studio-grade content in
                  seconds. Go viral, with intention.
                </p>
              </div>
              <Image
                src={images.wif_creators}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full md:col-span-3 h-[250px] md:h-[400px] text-black relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[160px] before:md:h-[250px] before:bg-gradient-to-b before:from-[#F0C09A] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
              <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                  Brand & Marketing Teams
                </h4>
                <p className="w-full md:w-[60%]">
                  Launch campaigns at the speed of thought. Test messages, track
                  resonance, and stay 10 steps ahead.
                </p>
              </div>
              <Image
                src={images.wif_brand}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full md:col-span-2 h-[250px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[160px] before:md:h-[250px] before:bg-gradient-to-b before:from-[#407df7] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
              <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                  Political Campaigns <br /> & Advocacy Orgs
                </h4>
                <p className="w-full md:w-[80%]">
                  Deliver precision-crafted messages to every audience with
                  emotional intelligence powered by AI.
                </p>
              </div>
              <Image
                src={images.wif_politics}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full grid grid-cols-2 gap-6">
              <div className="col-span-full md:col-span-1 h-[250px] md:h-[400px] text-white relative">
                <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                    Content Editors & Assistants
                  </h4>
                  <p className="w-full md:w-[60%]">
                    Save hours of grunt work. Let Dimlang handle the cuts,
                    captions, and tone, you handle the creative.
                  </p>
                </div>
                <Image
                  src={images.wif_content}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-full md:col-span-1 h-[250px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[250px] before:bg-gradient-to-b before:from-[#355eab] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
                <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                    Micro-Agencies
                  </h4>
                  <p className="w-full md:w-[80%]">
                    Scale client content production like never before. Fewer
                    tools. Greater output. Massive efficiency.
                  </p>
                </div>
                <Image
                  src={images.wif_micro}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
