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
    bgColor: "bg-primary",
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
    <section className="sectionPadding bg-[#050505] py-24 px-6" id="services">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4 text-center md:text-left">
            <h2 className="text-5xl md:text-8xl font-normal text-white">Organizations don't have a content problem</h2>
            <p className="text-gray-300 text-xl w-full md:w-[50%]">
              Organizations already create enormous amounts of knowledge every day. The real problem is that knowledge becomes siloed, duplicated, forgotten, and difficult to reuse across teams.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            <div className="col-span-full h-[250px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:md:bg-none before:absolute before:top-0 before:left-0 before:w-full before:h-[250px] before:bg-gradient-to-b before:from-[#593DD0] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
              <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                  Pharmaceuticals
                </h4>
                <p className="w-full md:w-[60%]">
                  Navigate complex regulatory environments with instant access to approved content, research findings, and compliance documentation across global operations.
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
                  Financial Services
                </h4>
                <p className="w-full md:w-[60%]">
                  Empower analysts and advisors with instant insights from market research, internal reports, and historical deal intelligence.
                </p>
              </div>
              <Image
                src={images.wif_brand}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-full md:col-span-2 h-[250px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[160px] before:md:h-[250px] before:bg-gradient-to-b before:from-[#142F66] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
              <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                  Healthcare
                </h4>
                <p className="w-full md:w-[80%]">
                  Unify patient care protocols, research findings, and clinical documentation to support better decision-making across your organization.
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
              <div className="col-span-full md:col-span-1 h-[250px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:md:bg-none before:absolute before:top-0 before:left-0 before:w-full before:h-[250px] before:bg-gradient-to-b before:from-[#16023F] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
                <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                    Professional Services
                  </h4>
                  <p className="w-full md:w-[60%]">
                    Leverage past proposals, client deliverables, and internal expertise to accelerate project delivery and maintain consistency.
                  </p>
                </div>
                <Image
                  src={images.wif_content}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-full md:col-span-1 h-[250px] md:h-[400px] text-white relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[250px] before:bg-gradient-to-b before:from-[#142F66] before:to-transparent before:blur-[2px] before:pointer-events-none before:z-10">
                <div className="absolute p-5 md:p-0 md:top-8 md:left-8 z-10">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-1">
                    Manufacturing
                  </h4>
                  <p className="w-full md:w-[80%]">
                    Connect operational procedures, engineering specifications, and quality documentation to reduce errors and improve training.
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
