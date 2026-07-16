"use client";

import Image from "next/image";
import { toolsData, skillsData } from "@/assets/assets";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SectionHeading,
} from "@/components/AnimatedSection";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "25+", label: "Projects Delivered" },
  { value: "AI-Native", label: "Direction" },
];

function AboutBio() {
  return (
    <p className="font-ovo text-gray-700 leading-relaxed max-w-3xl">
      I started writing code at 15 and got interested in building software.
      Now I&apos;m 21 — a Software Engineer with nearly 3 years of professional
      experience building scalable web applications. I work primarily with
      JavaScript, React, and Node.js, integrating AI into products, working with
      AI agents, and shipping production-ready features. Currently exploring
      products with AI. Feel free to connect with me.
    </p>
  );
}

function AboutSkills({ compact = false }) {
  return (
    <>
      <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-3 sm:mb-4 font-medium">
        Tech Stack
      </h4>
      <div className={`flex flex-wrap gap-2 ${compact ? "mb-5" : "mb-8"}`}>
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className="skill-pill text-xs sm:text-sm border border-gray-200 rounded-full px-3 py-1.5 text-gray-600 font-ovo"
          >
            {skill}
          </span>
        ))}
      </div>

      <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-3 sm:mb-4 font-medium">
        Tools
      </h4>
      <StaggerContainer
        className="flex flex-wrap items-center gap-3"
        stagger={0.04}
      >
        {toolsData.map((tool, index) => (
          <StaggerItem key={index}>
            <div className="flex items-center justify-center w-11 h-11 border border-gray-200 rounded-xl card-hover bg-gray-50/50">
              <Image src={tool} alt="Tool" className="w-5" />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </>
  );
}

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[8%] 2xl:px-[6%] py-20 scroll-mt-20"
    >
      <SectionHeading
        label="Introduction"
        title="About me"
        className="mb-12"
      />

      <FadeIn>
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-2xl 2xl:max-w-3xl mx-auto">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center py-5 px-3 rounded-2xl bg-purple-50/60 border border-purple-100"
            >
              <p className="text-2xl sm:text-3xl 2xl:text-4xl font-ovo font-semibold text-gray-900">
                {value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-ovo">
                {label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
        <div className="px-6 sm:px-8 lg:px-10 2xl:px-12 py-6 sm:py-8 lg:py-10">
          <FadeIn>
            <AboutBio />
          </FadeIn>
        </div>

        <div className="border-t border-gray-100 px-6 sm:px-8 lg:px-10 2xl:px-12 py-6 sm:py-8 lg:py-10">
          <FadeIn delay={0.1}>
            <AboutSkills />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.2} className="mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 sm:p-6 rounded-2xl border border-dashed border-gray-300 bg-gray-50/50">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              Outside of work
            </p>
            <p className="font-ovo text-sm sm:text-base text-gray-600">
              Founder of{" "}
              <a
                href="https://enovixtech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline font-medium"
              >
                Enovix Tech
              </a>
              — a freelance development team I run alongside my full-time role.
            </p>
          </div>
          <a
            href="https://enovixtech.in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-ovo text-gray-600 border border-gray-300 rounded-full px-5 py-2 hover:border-purple-400 hover:bg-white transition-all"
          >
            enovixtech.in →
          </a>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;
