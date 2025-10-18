"use client";
import React from "react";
import { FaLanguage } from "react-icons/fa";
import { SiReact, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiPostgresql, SiFigma, SiGit, SiChartdotjs, SiJavascript, SiNextdotjs  } from "react-icons/si";
import { motion } from "framer-motion";


export default function HardSkills() {
  return (
    <section id="skills" className="w-full min-h-screen px-6 md:px-20 lg:px-40 py-20 text-black/90 dark:text-white flex flex-col items-center justify-center">
      <div className="text-center mb-18">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Hard Skills
        </h2>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          Technical skills that turn ideas into reality.
        </p>
      </div>

     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mb-12 justify-items-center">
        {[
          { id: 1, title: "JavaScript", Icon: SiJavascript, color: "text-[#F7DF1E]" },
          { id: 2, title: "React JS", Icon: SiReact, color: "text-[#61DAFB]" },
          { id: 3, title: "HTML5", Icon: SiHtml5, color: "text-[#E34F26]" },
          { id: 4, title: "CSS3", Icon: SiCss3, color: "text-[#61DAFB]" },
          { id: 5, title: "Tailwind CSS", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
          { id: 6, title: "Bootstrap", Icon: SiBootstrap, color: "text-[#7952B3]" },
          { id: 7, title: "MySQL", Icon: SiPostgresql, color: "text-[#61DAFB]" },
          { id: 8, title: "Figma", Icon: SiFigma, color: "text-[#F24E1E]" },
          { id: 9, title: "Git", Icon: SiGit, color: "text-[#F05033]" },
          { id: 10, title: "Chart.js", Icon: SiChartdotjs, color: "text-[#FF6384]" },
          { id: 11, title: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white" },
          { id: 12, title: "Advanced English", Icon: FaLanguage, color: "text-[#1E90FF]" },
        ].map((item, idx) => {
          const { Icon, title, color } = item;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white/20 dark:bg-black/40 border border-white/30 shadow-md p-2 sm:p-3"
            >
              <Icon className={`w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 ${color}`} />
              <h3 className="text-xs font-medium text-black dark:text-white mt-1 text-center">{title}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
