"use client";

import { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FadeIn, SectionHeading } from "@/components/AnimatedSection";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "3ac2d3ac-7ede-47c4-b1c6-6b73f727357b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setResult("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-footer bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <SectionHeading
        label="Connect with me"
        title="Get in touch"
        description="I'd love to hear from you! If you have any questions, comments or feedback, please use the form below."
        className="mb-12"
      />

      <FadeIn>
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-auto gap-6 mt-6 mb-6">
            <input
              type="text"
              name="name"
              className="flex-1 p-3.5 outline-none border border-gray-200 rounded-xl bg-white input-focus"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email"
              className="flex-1 p-3.5 outline-none border border-gray-200 rounded-xl bg-white input-focus"
              placeholder="Enter your email"
              required
            />
          </div>
          <textarea
            rows="6"
            name="message"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border border-gray-200 rounded-xl bg-white mb-6 input-focus resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto btn-primary cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Sending...
              </span>
            ) : (
              <>
                Submit
                <Image
                  src={assets.right_arrow_white}
                  alt=""
                  className="w-4 arrow-nudge"
                />
              </>
            )}
          </button>

          {result && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-center text-sm font-ovo ${
                result.includes("success") ? "text-green-600" : "text-gray-600"
              }`}
            >
              {result}
            </motion.p>
          )}
        </form>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mt-20 border-t border-gray-200 pt-8 flex flex-col items-center text-center text-sm text-gray-500">
          <div className="flex gap-6 mb-5">
            {[
              {
                href: "https://twitter.com/dev_aks224",
                icon: FaXTwitter,
                label: "Twitter",
              },
              {
                href: "https://www.linkedin.com/in/ananthu-k-s-403512291/",
                icon: FaLinkedinIn,
                label: "LinkedIn",
              },
              {
                href: "https://instagram.com/___ananthu__",
                icon: FaInstagram,
                label: "Instagram",
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="font-ovo text-sm">
            © {new Date().getFullYear()} Ananthu K S. All rights reserved.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;
