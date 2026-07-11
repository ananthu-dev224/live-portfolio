"use client";

import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FadeIn({ children, delay = 0, className = "", direction = "up" }) {
  const offset = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  const xOffset = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: offset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", stagger = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export function SectionHeading({ label, title, description, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <FadeIn>
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-medium">
          {label}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-4xl sm:text-5xl font-ovo">{title}</h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-center max-w-2xl mx-auto mt-5 font-ovo text-gray-600">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
