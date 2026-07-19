"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { value: "3+", label: "Years" },
  { value: "25+", label: "Projects" },
  { value: "AI-Native", label: "Direction" },
];

const Header = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-5 lg:px-8 xl:px-[8%] pt-28 pb-16"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease }}
            className="text-xs uppercase tracking-[0.18em] text-neutral-400 mb-5"
          >
            Software Engineer · India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease }}
            className="text-3xl sm:text-[2.5rem] font-medium text-black tracking-tight leading-[1.15] mb-4"
          >
            Ananthu K S
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
            className="text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-md mb-8"
          >
            Nearly 3 years · 25+ projects. Building with JavaScript, React &
            Node.js — integrating AI into products and working with AI agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2 text-sm rounded-full bg-black text-white"
            >
              Contact
              <Image
                src={assets.right_arrow_white}
                alt=""
                className="w-3 arrow-nudge"
              />
            </a>
            <a
              href="/Ananthu_KS_CV.pdf"
              download
              className="btn-primary inline-flex items-center gap-2 px-5 py-2 text-sm rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Resume
              <Image src={assets.download_icon} alt="" className="w-3" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="flex flex-wrap gap-x-10 gap-y-4 mt-14 pt-8 border-t border-neutral-200 max-w-xl"
        >
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-base font-medium text-black">{value}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
