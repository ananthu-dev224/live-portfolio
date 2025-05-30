"use client"
import React, {use, useState} from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ac2d3ac-7ede-47c4-b1c6-6b73f727357b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-footer bg-no-repeat bg-center bg-[length:90%_auto'>
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                <input type="text" name="name" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" placeholder="Enter your name" required/>
                <input type="email" name="email" className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" placeholder="Enter your email" required/>
            </div>
            <textarea rows='6' name="message" placeholder="Enter your message" required className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"></textarea>

            <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer">Submit <Image src={assets.right_arrow_white} alt="" className="w-4" /></button>
            <p className="mt-3">
                {result}
            </p>
      </form>
      {/* Footer */}
      <div className="mt-20 border-t pt-6 flex flex-col items-center text-center text-sm text-gray-600">
        <div className="flex gap-5 mb-4">
          <a
            href="https://twitter.com/dev_aks224"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ananthu-k-s-403512291/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://instagram.com/___ananthu__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="font-ovo text-sm">© 2025 Ananthu K S. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
