"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import images from "@/public/images";

const footerLinks = {
  product: {
    title: "Product",
    links: [{ name: "Features", href: "/features" }],
  },
  explore: {
    title: "Explore",
    links: [
      { name: "Features", href: "/features" },
      { name: "Blog", href: "/blog" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Contact us", href: "/contact" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container pb-10 md:pb-20">
        <div className="border-b border-white/50 w-[85%] md:w-1/2 mx-auto pb-5 mb-12">
          <Image
            src={images.logo}
            alt=""
            className="max-w-full w-[80%] h-auto mx-auto"
            width={0}
            height={0}
            priority
          />
        </div>

        <div className="md:col-span-8 flex flex-col md:flex-row md:justify-between justify-start gap-8 w-[60%] mx-auto">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-gray-400 text-sm font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container sectionPadding mt-12 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center space-y-4 md:space-y-0"
      >
        <div className="text-gray-400 text-sm flex-1 py-8 md:py-0 whitespace-nowrap">
          All right reserved. © {new Date().getFullYear()}
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center space-x-6 md:ml-20">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 md:ml-auto"
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
