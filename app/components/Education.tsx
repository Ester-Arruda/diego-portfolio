"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2015",
    title: "English Course",
    description: "Post-Advanced, Level 10",
    company: "CCAA",
  },
  {
    year: "2016",
    title: "Introduction to Web Development Course",
    company: "UFRGS",
  },
  {
    year: "2016",
    title: "Computer Engineering",
    description: "Undergraduate Program",
    company: "UFRGS",
  },
  {
    year: "2019",
    title: "Transferred to Computer Science",
    description: "Undergraduate Program",
    company: "UFRGS - In progress",
  },
  {
    year: "2024",
    title: "Systems Analysis and Development",
    description: "Undergraduate Program",
    company: "UNIASSELVI - In progress",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-20 px-6 md:px-20 lg:px-40 text-black/90 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center my-20 text-black dark:text-white">
          Education
        </h2>

        <div className="relative border-l-2 border-white/20 dark:border-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              <span
                className="
                  absolute -left-[9px] top-1 w-4 h-4
                  bg-white/40 dark:bg-white/70 
                  rounded-full border border-white/20 
                  dark:border-white/30 shadow-md z-10"
              />
              
              <div
                className="p-3 rounded-2xl 
                  bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 
                  shadow-lg dark:shadow-white/10 
                  transition-all duration-200"
              >
                <p className="text-sm text-black/70 dark:text-white/70 mb-1">
                  {exp.year}
                </p>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {exp.title}
                </h3>
                {exp.description && (
                  <h4 className="text-black/70 dark:text-white/70 mb-2">
                    {exp.description}
                  </h4>
                )}
                <h4 className="text-black/70 dark:text-white/70 mb-2">
                  {exp.company}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
