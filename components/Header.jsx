import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-17">
        <Image
          src={assets.profile_img}
          alt="pfp"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Ananthu K S
        <Image src={assets.hand_icon} alt="pfp-hand" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[55px] font-ovo">
        Full Stack Developer based in India.
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        A self-taught Full Stack Developer passionate about building scalable
        and user friendly applications with a curious to explore more in the
        technology field.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="contact" className="w-4" />
        </a>
        <a
          href="/ananthuks_cv_mern.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My resume{" "}
          <Image src={assets.download_icon} alt="resume" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
