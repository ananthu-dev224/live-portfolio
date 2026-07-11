"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-17"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 blur-xl opacity-40 scale-110" />
          <Image
            src={assets.user_image}
            alt="Ananthu K S"
            className="rounded-full w-32 sm:w-36 relative z-10 border-4 border-white shadow-lg animate-float"
          />
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi! I&apos;m Ananthu K S
        <Image
          src={assets.hand_icon}
          alt="wave"
          className="w-6 animate-wave"
        />
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-3xl sm:text-6xl lg:text-[55px] font-ovo leading-tight"
      >
        <span className="gradient-text">Software Engineer</span>{" "}
        based in India
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-2xl mx-auto font-ovo text-gray-600"
      >
        Currently building production web applications at Onbyz. Nearly 2 years
        of experience across 20+ projects with JavaScript, React, and Node.js.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
      >
        <a
          href="#contact"
          className="btn-primary px-10 py-3 rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4 arrow-nudge"
          />
        </a>
        <a
          href="/ananthuks_cv_mern.pdf"
          download
          className="btn-primary px-10 py-3 rounded-full border border-gray-300 flex items-center gap-2 hover:border-gray-500 hover:bg-gray-50"
        >
          My resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
