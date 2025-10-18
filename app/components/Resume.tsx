"use client";
import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";


export default function Resume() {
  return (
    <section id="summary" className="flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-20 lg:px-40 py-16 gap-10">
      <div className="md:w-1/2 text-left">
        <Reveal>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black dark:text-white"
            animate={{
            scale: [1, 1.05, 1],
            textShadow: [
                "0 0 10px rgba(255,255,255,0.2)",
                "0 0 30px rgba(255,255,255,0.5)",
                "0 0 10px rgba(255,255,255,0.2)",
            ],
            }}
            transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            }}
          >
            Professional Summary
          </motion.h2>
        </Reveal>
      </div>
      <div className="md:w-1/2">
        <p className="text-base md:text-lg leading-relaxed text-black/80 dark:text-white/80">
          A passionate professional about technology, with a strong interest in
          software development. I have hands-on experience with HTML5, CSS3,
          JavaScript, Bootstrap, Chart.js, and version control using Git/GitHub,
          as well as knowledge of UX/UI Design and prototyping with Figma. I
          possess strong logical reasoning skills, and with advanced English and
          experience in technical support, I find it easy to read documentation
          and communicate with people. I aim to contribute in an innovative and
          creative way to challenging projects.
        </p>
      </div>
    </section>
  );
}