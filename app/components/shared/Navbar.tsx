"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import images from "@/public/images";
import { usePathname } from "next/navigation";
import useOuterClick from "@/app/hooks/useOuterClick";
import { useApplicationContext } from "@/app/context/ApplicationContext";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setIsWaitlistModalVisible } = useApplicationContext();

  const navbarContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/#services" },
    { name: "About", href: "/about" },
  ];

  useOuterClick(navbarContainerRef, setIsOpen);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="relative h-10 w-52">
              <Image alt="Logo" src={images.logo} sizes="auto" fill />
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname == link.href
                  ? "text-white"
                  : "text-grey/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsWaitlistModalVisible(true)}
          className="hidden md:block bg-primary hover:bg-primary-sub text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 text-sm"
        >
          Join the Waitlist
        </motion.button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md mt-4 rounded-lg overflow-hidden"
            ref={navbarContainerRef}
          >
            <div className="py-4 px-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white py-2 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsWaitlistModalVisible(true);
                  setIsOpen(false);
                }}
                className="inline-block bg-primary hover:bg-primary-sub text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 text-sm w-full mt-2"
              >
                Join the Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
