import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="flex-shrink-0 w-64 sm:w-80 lg:w-96 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex-1 px-4 sm:px-0 mt-6 sm:mt-0">
          <p className="mb-10 max-w-2xl font-ovo text-sm sm:text-base">
            I’m a Full Stack Web Developer specializing in building scalable and
            user-focused web applications. With experience in a product-based
            company and a portfolio of 30+ open-source and 2 industry-level
            projects, I bring strong technical and problem-solving skills.
            Skilled in the MERN stack, I’m passionate about creating efficient,
            modern web experiences and currently open to freelance
            opportunities.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer light-hover hover:-translate-y-1 duration-500 shadow-black"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-6 sm:w-7 mt-2 sm:mt-3"
                />
                <h3 className="my-3 sm:my-4 font-semibold text-gray-700 text-sm sm:text-base">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-5 sm:my-6 text-gray-700 font-ovo text-base sm:text-lg">
            Tools I use
          </h4>
          <ul className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer light-hover hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="Tool" className="w-4 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
