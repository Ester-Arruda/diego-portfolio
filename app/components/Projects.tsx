"use client";
import React from "react";
import Carousel from "./Carousel";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "./Button";
import LogoSvg from "./LogoSvg";

import ReactIcon from "./icons/react.svg";
import NextIcon from "./icons/nextdotjs.svg";
import TailwindIcon from "./icons/tailwindcss.svg";
import PrismaIcon from "./icons/prisma2.svg";
import Typescript from "./icons/typescript.svg";
import GroqIcon from "./icons/groq-icon.svg";
import PostgreeIcon from "./icons/postgresql.svg";
import { FaGithub } from "react-icons/fa";


type IconType = {
  Icon: React.ElementType;
  color?: string;
};

type ProjectData = {
  project: string;
  text: string;
  link: string;
  linkGit: string;
  icons: IconType[];
  images: string[];
};

export default function Projects() {

  const projects: ProjectData[] = [
    {
      project: "Pitada",
      text: `Pitada is an intelligent web application that transforms ingredients into delicious recipes using the power of artificial intelligence. 
            With a responsive and intuitive interface, you can discover new culinary possibilities based on the ingredients you have at home.`,
      link: "https://pitada.vercel.app/",
      linkGit: "https://github.com/diegocarmn/pitada",
      icons: [
        { Icon: ReactIcon, color: "text-[#61DAFB] hover:text-blue-400 dark:text-[#61DAFB]" },
        { Icon: NextIcon, color: "text-black hover:text-black dark:text-white dark:hover:text-white" },
        { Icon: TailwindIcon, color: "text-cyan-500 dark:text-cyan-400 hover:text-cyan-600" },
        { Icon: GroqIcon, color: "text-black hover:text-black dark:text-white dark:hover:text-white" },
        { Icon: Typescript, color: "text-blue-600 dark:text-blue-400 hover:text-blue-500" },
      ],
      images: [
        "/images/Pitada1.png",
        "/images/Pitada2.png",
        "/images/Pitada3.png",
        "/images/Pitada4.png",
      ],
    },
    {
      project: "CineIA",
      text: `CineAI is a modern web app that helps you decide what to watch. 
            Search and save your favorites, build a watchlist, and get AI-powered recommendations based on your taste and even your mood 
            (e.g., Happy, Thoughtful, Scared). Built with cutting-edge web technologies, it offers a seamless experience for movie enthusiasts to discover, 
            organize, and track their favorite films.`,
      link: "https://aicine.vercel.app/",
      linkGit: "https://github.com/diegocarmn/cineai",
      icons: [
        { Icon: ReactIcon, color: "text-[#61DAFB] hover:text-blue-400 dark:text-[#61DAFB]" },
        { Icon: NextIcon, color: "text-black hover:text-black dark:text-white dark:hover:text-white" },
        { Icon: TailwindIcon, color: "text-cyan-500 dark:text-cyan-400 hover:text-cyan-600" },
        { Icon: GroqIcon, color: "text-black hover:text-black dark:text-white dark:hover:text-white" },
        { Icon: Typescript, color: "text-blue-600 dark:text-blue-400 hover:text-blue-500" },
        { Icon: PrismaIcon, color: "text-black hover:text-black dark:text-white dark:hover:text-white" },
        { Icon: PostgreeIcon, color: "text-black hover:text-black dark:text-white dark:hover:text-white" },
      ],
      images: [
        "/images/CineIA1.png",
        "/images/CineIA2.png",
        "/images/CineIA3.png",
        "/images/CineIA4.png",
        "/images/CineIA5.png",
      ],
    },
  ];

  return (
    <section className="w-full px-6 md:px-20 lg:px-40 text-black/90 dark:text-white">
      {projects.map(({ project, text, link, icons, images, linkGit }, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-screen"
          id="projects"
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">{project} Project</h3>
            <p className="text-black/80 dark:text-white/80 mt-8">{text}</p>

            <div className="flex justify">
                <div className="md:pt-7 pt-5 md:pb-7 pb-5">
                    <Button text="Demo" icon={FaExternalLinkAlt} link={link} />
                </div>
                <div className="md:pt-7 pt-5 md:pb-7 pb-5">
                    <Button text="View Project" icon={FaGithub} link={linkGit} />
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {icons.map(({ Icon, color }, i) => (
                <LogoSvg key={i} Icon={Icon} className={color} />
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Carousel images={images} name={project} />
          </div>
        </div>
      ))}
    </section>
  );
}