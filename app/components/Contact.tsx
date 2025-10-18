"use client";
import React from "react";
import Button from "./Button";
import { IoIosSend } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen px-6 md:px-20 lg:px-40 py-20 text-black/90 dark:text-white flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
        {[
          { title: "Email", value: "diegoncarmona@gmail.com", Icon: MdOutlineMailOutline },
          { title: "Phone", value: "(51) 99463-8306", Icon: FaPhone },
          { title: "Location", value: "Porto Alegre, RS", Icon: FaMapMarkerAlt },
          { title: "LinkedIn", value: "linkedin.com/in/diego-carmona-429b75b5", Icon: FaLinkedin },
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
                {item.title === "LinkedIn" ? (
                  <a href={`https://${item.value}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    {item.value}
                  </a>
                ) : item.title === "Email" ? (
                  <a href={`mailto:${item.value}`} className="hover:text-blue-500">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl p-6 rounded-2xl
        bg-white/10 backdrop-blur-md border border-white/20
        text-black dark:text-white transition-all duration-150 
        shadow-lg dark:shadow-white/10">
        <h3 className="text-lg font-semibold mb-3 text-center text-black dark:text-white">
          Send a Message
        </h3>
        <form className="flex flex-col gap-3">
          <div>
            <label className="block mb-1 text-md font-medium">Name</label>
            <input
              type="text"
              className="w-full p-1 rounded-lg bg-transparent border border-black/20 dark:border-white/20 placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm p-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-md font-medium">Email</label>
            <input
              type="email"
              className="w-full p-1 rounded-lg bg-transparent border border-black/20 dark:border-white/20 placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm p-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-md font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full p-1 rounded-lg bg-transparent border border-black/20 dark:border-white/20 placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm p-2"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Button text="Send Message" icon={IoIosSend} link="mailto:diegoncarmona@gmail.com" />
          </div>
        </form>
      </div>

    </section>
  );
}
