"use client";

import React, { useState, useEffect } from "react";
import { outfit } from "../fonts";
import DarkModeToggle from "./DarkModeToggle";
import DownloadPdf from "./DownloadPdf";
import { CiMenuBurger } from "react-icons/ci";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const sections = ["main", "summary", "education", "timeline", "skills", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.6 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <nav className="z-20 fixed top-0 left-0 flex bg-white md:bg-transparent dark:bg-black md:dark:bg-transparent w-full py-3 md:py-0 md:flex">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 order-2 md:order-1 pl-3 md:pl-4">
          <img
            src="/dc-light-nobg.png"
            alt="Logo claro"
            className="h-8 w-8 object-contain block dark:hidden"
          />
          <img
            src="/dc-dark-nobg.png"
            alt="Logo escuro"
            className="h-8 w-8 object-contain hidden dark:block"
          />
          <h1
            className={`text-center font-semibold text-black/50 dark:text-white whitespace-nowrap ${outfit.className}`}
          >
            Diego Carmona
          </h1>
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <p className="dark:text-white">
            <CiMenuBurger />
          </p>
        </button>
      </div>

      <ul
        className={`
          flex-col md:flex-row md:flex
          ${open ? "flex" : "hidden"} font-medium
          md:static absolute top-full left-0 w-full bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent text-black md:text-white md:justify-end md:pr-4 md:py-3 pb-2 ${outfit.className}
        `}
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-4">
          <li>
            <a
              href="#main"
              className={`block mx-4 md:mx-0 px-4 py-2 rounded-4xl active:scale-95 transition-all duration-150 ${
                activeSection === "main"
                  ? "text-white dark:text-black dark:bg-white/80 bg-black/70"
                  : "text-black/50 dark:text-white/50 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#summary"
              className={`block mx-4 md:mx-0 px-4 py-2 rounded-4xl active:scale-95 transition-all duration-150 ${
                activeSection === "summary"
                  ? "text-white dark:text-black dark:bg-white/80 bg-black/70 border border-white/20 shadow-lg"
                  : "text-black/50 dark:text-white/50 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30"
              }`}
            >
              Summary
            </a>
          </li>
           <li>
            <a
              href="#education"
              className={`block mx-4 md:mx-0 px-4 py-2 rounded-4xl active:scale-95 transition-all duration-150 ${
                activeSection === "education"
                  ? "text-white dark:text-black dark:bg-white/80 bg-black/70 border border-white/20 shadow-lg"
                  : "text-black/50 dark:text-white/50 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30"
              }`}
            >
              Education
            </a>
          </li>
           <li>
            <a
              href="#timeline"
              className={`block mx-4 md:mx-0 px-4 py-2 rounded-4xl active:scale-95 transition-all duration-150 ${
                activeSection === "timeline"
                  ? "text-white dark:text-black dark:bg-white/80 bg-black/70 border border-white/20 shadow-lg"
                  : "text-black/50 dark:text-white/50 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30"
              }`}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`block mx-4 md:mx-0 px-4 py-2 rounded-4xl active:scale-95 transition-all duration-150 ${
                activeSection === "skills"
                  ? "text-white dark:text-black dark:bg-white/80 bg-black/70 border border-white/20 shadow-lg"
                  : "text-black/50 dark:text-white/50 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30"
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`block mx-4 md:mx-0 px-4 py-2 rounded-4xl active:scale-95 transition-all duration-150 ${
                activeSection === "projects"
                  ? "text-white dark:text-black dark:bg-white/80 bg-black/70 border border-white/20 shadow-lg"
                  : "text-black/50 dark:text-white/50 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`block mx-4 md:mx-0 px-4 py-2 rounded-4xl active:scale-95 transition-all duration-150 ${
                activeSection === "contact"
                  ? "text-white dark:text-black dark:bg-white/80 bg-black/70 border border-white/20 shadow-lg"
                  : "text-black/50 dark:text-white/50 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white dark:hover:shadow-white/30"
              }`}
            >
              Contact
            </a>
          </li>
        </div>
      </ul>

      <div className="w-full md:w-fit mr-2 md:mr-4 text-right flex justify-end items-center">
        <DarkModeToggle />
      </div>
      <div className="w-full md:w-fit mr-2 md:mr-4 text-right flex justify-end items-center">
        <DownloadPdf pdfUrl="/curriculo.pdf" fileName="Diego_Carmona_CV.pdf" />
      </div>
    </nav>
  );
}
