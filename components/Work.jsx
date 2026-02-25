import React from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Onbyz",
    duration: "January 2026 – Present",
    type: "Full-time",
    contributions: [
      "Developing and maintaining scalable service-based web applications using Next.js and the MERN stack.",
      "Architecting and managing dynamic content-driven platforms integrated with Headless CMS solutions.",
      "Building production-ready features, optimizing performance, and ensuring high-quality code standards.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "SQL",
      "Express.js",
      "Tailwind CSS",
      "Sanity CMS",
    ],
  },
  {
    role: "Web Developer",
    company: "Trusttech IT Solutions",
    duration: "April 2025 – January 2026",
    type: "Full-time",
    contributions: [
      "Managed and revamped Forex trading product websites, enhancing frontend architecture and improving overall user experience.",
      "Led frontend development using modern React-based technologies, delivering responsive and high-performance UI components.",
      "Implemented SEO best practices, optimized page speed, and improved search visibility to strengthen organic growth and product reach.",
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "SEO Optimization",
      "Lighthouse Audits",
    ],
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">My Journey</h4>
      <h2 className="text-center text-5xl font-ovo">Work Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Industry experience building and delivering production-ready
        applications across multiple organizations.
      </p>

      <div className="flex flex-col gap-8 mt-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-md transition duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h2 className="text-xl font-semibold font-ovo">{exp.role}</h2>
                <p className="text-gray-600 font-ovo">
                  {exp.company} &nbsp;·&nbsp; {exp.type}
                </p>
              </div>
              <span className="text-sm text-gray-500 border border-gray-300 rounded-full px-4 py-1 w-fit font-ovo">
                {exp.duration}
              </span>
            </div>

            <ul className="flex flex-col gap-2 mb-5">
              {exp.contributions.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 font-ovo text-sm"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600 font-ovo"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/ananthu-dev224"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-50 transition duration-300 font-ovo"
      >
        View personal projects on GitHub →
      </a>
    </div>
  );
};

export default Work;
