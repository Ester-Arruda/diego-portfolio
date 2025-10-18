"use client";
import React from "react";
import { FaUsers, FaPuzzlePiece, FaSyncAlt, FaComments} from "react-icons/fa";

export default function SoftSkills() {
  return (
    <section id="skills" className="w-full min-h-screen px-6 md:px-20 lg:px-40 py-20 text-black/90 dark:text-white flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Soft Skills
        </h2>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
             Professional competencies that enhance technical expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
        {[
          { title: "Team Collaboration", value: "Effective teamwork and communication in agile environments.", Icon: FaUsers },
          { title: "Effective communication", value: "Clearly express ideas and actively listen to others.", Icon: FaComments },
          { title: "Problem Solving", value: "Analytical thinking and creative solutions to complex challenges.", Icon: FaPuzzlePiece },
          { title: "Adaptability", value: "Quick learner with ability to adapt to new technologies.", Icon: FaSyncAlt },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`p-6 flex items-center gap-3 rounded-2xl 
              bg-white/10 backdrop-blur-md border border-white/20
              text-black dark:text-white 
              transition-all duration-150 
              shadow-lg dark:shadow-white/10`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 dark:bg-black/40 flex-shrink-0">
              <item.Icon className="w-5 h-5 text-black/70 dark:text-white/70" />
            </div>
            <div>
              <h3 className="text-md font-semibold mb-1 text-black dark:text-white">{item.title}</h3>
              <p className="text-sm text-black/80 dark:text-white/80">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
