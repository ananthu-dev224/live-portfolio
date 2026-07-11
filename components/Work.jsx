"use client";

import {
  StaggerContainer,
  StaggerItem,
  SectionHeading,
} from "@/components/AnimatedSection";

const experiences = [
  {
    role: "Software Engineer",
    company: "Onbyz",
    duration: "January 2026 – Present",
    type: "Full-time",
    contributions: [
      "Developing and maintaining scalable service-based web applications using Next.js and the MERN stack.",
      "Architecting dynamic content-driven platforms integrated with Headless CMS solutions.",
      "Building production-ready features, optimizing performance, and maintaining high code quality standards.",
    ],
    stack: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "SQL", "Sanity CMS"],
  },
  {
    role: "Web Developer",
    company: "Trusttech IT Solutions",
    duration: "April 2025 – January 2026",
    type: "Full-time",
    contributions: [
      "Managed and revamped Forex trading product websites across multiple client projects.",
      "Led frontend development with React, delivering responsive and high-performance UI components.",
      "Implemented SEO best practices and optimized page speed to improve organic reach.",
    ],
    stack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[12%] py-20 scroll-mt-20"
    >
      <SectionHeading
        label="My Journey"
        title="Work Experience"
        description="Nearly 2 years of full-time industry experience across 20+ production projects."
        className="mb-16"
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="timeline-line hidden sm:block left-[7px]" />

        <StaggerContainer className="flex flex-col gap-10" stagger={0.15}>
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <div className="relative sm:pl-10">
                <div className="hidden sm:block absolute left-0 top-6 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-md z-10" />

                <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 card-hover bg-white">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-xl font-semibold font-ovo text-gray-800">
                        {exp.role}
                      </h3>
                      <p className="text-gray-500 font-ovo text-sm">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                    <span className="text-xs text-purple-700 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 w-fit font-ovo">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 mb-6">
                    {exp.contributions.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 font-ovo text-sm leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-500 font-ovo bg-gray-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Work;
