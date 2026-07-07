"use client";

import { containerVariants, itemVariants } from "@/app/constants/aniamtions";
import images from "@/public/images";
import { motion } from "framer-motion";
import Image from "next/image";

const ProofContexts = () => {
  return (
    <section className="sectionPadding bg-black py-24 px-6" id="services">
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
              Every organization where knowledge matters
            </h2>
            <p className="text-gray-300 text-xl w-full md:w-[60%] mx-auto">
              Whether you're running a political campaign, leading a research institution, building a company, or governing—Organizational Intelligence helps your organization continuously learn.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {/* Campaign Intelligence - HERO - Full width */}
            <div className="col-span-full h-[350px] md:h-[500px] text-white relative overflow-hidden before:content-[''] before:md:bg-none before:absolute before:top-0 before:left-0 before:w-full before:h-[300px] before:bg-gradient-to-b before:from-[#593DD0] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
              <div className="absolute p-6 md:p-0 md:top-10 md:left-10 z-10 max-w-3xl">
                <h4 className="text-3xl md:text-4xl font-semibold mb-4">
                  Campaign Intelligence
                </h4>
                <p className="w-full md:w-[70%] mb-6 text-lg leading-relaxed">
                  Political campaigns risk credibility with every statement. Dimlang preserves years of speeches, debates, policy documents, and messaging—so teams never contradict past positions.
                </p>
                <div className="space-y-3 text-sm md:text-base">
                  <p className="italic opacity-90 bg-black/30 backdrop-blur-sm p-3 rounded-lg inline-block">
                    "What has our candidate said about healthcare over the last five years?"
                  </p>
                  <p className="italic opacity-90 bg-black/30 backdrop-blur-sm p-3 rounded-lg inline-block">
                    "Compare today's speech with previous campaign messaging."
                  </p>
                  <p className="italic opacity-90 bg-black/30 backdrop-blur-sm p-3 rounded-lg inline-block">
                    "Generate talking points using only approved policy positions."
                  </p>
                </div>
              </div>
              <Image
                src={images.wif_creators}
                alt="Campaign Intelligence"
                fill
                className="object-cover"
              />
            </div>

            {/* Executive Intelligence - 3 columns */}
            <div className="col-span-full md:col-span-3 h-[300px] md:h-[450px] text-black relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[200px] before:md:h-[280px] before:bg-gradient-to-b before:from-[#F0C09A] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
              <div className="absolute p-6 md:p-0 md:top-8 md:left-8 z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-3">
                  Executive Intelligence
                </h4>
                <p className="w-full md:w-[65%] mb-4">
                  Build board presentations and strategic communications grounded in your organization's approved knowledge.
                </p>
                <div className="space-y-2">
                  <p className="w-full md:w-[75%] text-sm italic opacity-90 bg-white/30 backdrop-blur-sm p-2 rounded inline-block">
                    "What has our CEO said about AI over the past three years?"
                  </p>
                  <p className="w-full md:w-[75%] text-sm italic opacity-90 bg-white/30 backdrop-blur-sm p-2 rounded inline-block">
                    "Create a board presentation using previously approved material."
                  </p>
                </div>
              </div>
              <Image
                src={images.wif_brand}
                alt="Executive Intelligence"
                fill
                className="object-cover"
              />
            </div>

            {/* Research Intelligence - 2 columns */}
            <div className="col-span-full md:col-span-2 h-[300px] md:h-[450px] text-white relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[200px] before:md:h-[280px] before:bg-gradient-to-b before:from-[#142F66] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
              <div className="absolute p-6 md:p-0 md:top-8 md:left-8 z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-3">
                  Research Intelligence
                </h4>
                <p className="w-full md:w-[90%] mb-4">
                  Reason over publications, research papers, and scientific literature at scale.
                </p>
                <p className="w-full md:w-[95%] text-sm italic opacity-90 bg-black/30 backdrop-blur-sm p-2 rounded inline-block">
                  "Summarize everything published about this therapeutic area."
                </p>
              </div>
              <Image
                src={images.wif_politics}
                alt="Research Intelligence"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Row - Two Equal Columns */}
            <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Legal & Compliance Intelligence */}
              <div className="h-[300px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:md:bg-none before:absolute before:top-0 before:left-0 before:w-full before:h-[250px] before:bg-gradient-to-b before:from-[#16023F] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
                <div className="absolute p-6 md:p-0 md:top-8 md:left-8 z-10">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-3">
                    Legal & Compliance
                  </h4>
                  <p className="w-full md:w-[90%] mb-4">
                    Maintain consistency across contracts, policies, and commitments. Compare documents and trace how requirements evolved.
                  </p>
                  <p className="w-full md:w-[95%] text-sm italic opacity-90 bg-black/30 backdrop-blur-sm p-2 rounded inline-block">
                    "Compare this contract with our previous agreements."
                  </p>
                </div>
                <Image
                  src={images.wif_content}
                  alt="Legal & Compliance Intelligence"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Public Sector Intelligence */}
              <div className="h-[300px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[250px] before:bg-gradient-to-b before:from-[#142F66] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
                <div className="absolute p-6 md:p-0 md:top-8 md:left-8 z-10">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-3">
                    Public Sector Intelligence
                  </h4>
                  <p className="w-full md:w-[90%] mb-4">
                    Preserve institutional knowledge and improve decision-making across agencies and programs.
                  </p>
                  <p className="w-full md:w-[95%] text-sm italic opacity-90 bg-black/30 backdrop-blur-sm p-2 rounded inline-block">
                    "How have we approached this policy challenge before?"
                  </p>
                </div>
                <Image
                  src={images.wif_micro}
                  alt="Public Sector Intelligence"
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

export default ProofContexts;
