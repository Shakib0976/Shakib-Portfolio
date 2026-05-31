"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaDownload,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa";
import PixelTransition from "@/components/PixelTransition";

import About from "@/sections/About/About";
import Skills from "@/sections/Skills/Skills";
import Project from "@/sections/Project/Project";
import Contact from "@/sections/Contact/Contact";
import Education from "@/sections/Education/Education";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ProjectSection from "@/sections/Project/ProjectSection";

const Home = () => {
  const words = useMemo(() => ["a MERN Stack Developer", "a Frontend Specialist"], []);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [speed] = useState(150);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const current = words[wordIndex];
    const isComplete = !isDeleting && text === current;

    const timeout = setTimeout(
      () => {
        setText(
          isDeleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1),
        );

        if (isComplete) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      },
      isComplete ? 0 : speed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed]);

  const techStack = [
    {
      name: "React",
      icon: <FaReact className="text-cyan-400" />,
      color: "from-cyan-200/20 to-cyan-500/10",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-gray-300" />,
      color: "from-gray-200/20 to-gray-500/10",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
      color: "from-yellow-200/20 to-yellow-500/10",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      color: "from-blue-200/20 to-blue-500/10",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      color: "from-green-200/20 to-green-500/10",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-emerald-500" />,
      color: "from-emerald-200/20 to-emerald-500/10",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-600 dark:text-gray-400" />,
      color: "from-gray-200/20 to-gray-500/10",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-teal-400" />,
      color: "from-teal-200/20 to-teal-500/10",
    },
  ];

  return (
    <div className="text-gray-200 font-sans inter-font">
      <section
        id="home"
        className="min-h-screen pt-35 max-w-11/12 md:max-w-11/14 px-4 flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-30 gap-10 scroll-mt-20 sm:px-4 mx-auto py-10"
      >
        <div className="text-center lg:text-left max-w-xl xl:min-w-xl mx-auto lg:mx-0">
          <span className="hidden lg:flex items-center w-55 text-teal-500 py-1 px-3 gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Welcome to My Portfolio
          </span>

          <div className="mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium">
                Hi there
              </span>
              <span className="wave inline-block text-2xl md:text-3xl animate-wave">
                👋
              </span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl text-black dark:text-white lg:text-6xl font-bold mt-2">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
                Md. Shakib
              </span>
            </h1>

            <div className="h-12 mt-2 dark:text-gray-100 inter-font text-xl md:text-2xl text-gray-700 font-semibold flex items-center justify-center lg:justify-start gap-0">
              <span>{text}</span>
              <span
                className={`inline-block w-0.5 h-6 bg-teal-500 ml-0.5 transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
          </div>

          <p className="mt-4 inter-font text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            I build scalable MERN stack applications with clean UI, optimized
            performance, and real-world problem solving in mind.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={`group relative px-3 py-1.5 rounded-xl bg-gradient-to-br ${tech.color} backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-base leading-none">{tech.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            {[
              { value: "10+", label: "Projects Completed", icon: "✅" },
              { value: "MERN", label: "Stack Expert", icon: "⚡" },
              { value: "100%", label: "Responsive", icon: "📱" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-xl">{stat.icon}</span>
                <div>
                  <div className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-lg bg-gray-900 dark:bg-gray-600 text-white text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="/Shakib.Resume.docx (5).pdf"
              download
              className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 px-5 py-2.5 rounded-lg shadow-md text-white text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Download CV
              <FaDownload className="text-sm transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-52 h-52 sm:w-72 sm:h-72 lg:w-116 lg:h-116">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 blur-2xl opacity-40"></div>
          <div className="relative z-10 rounded-full overflow-hidden shadow-2xl">
            <PixelTransition
              firstContent={
                <img
                  src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              }
              secondContent={
                <img
                  src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="rounded-full"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-2xl rotate-12 backdrop-blur-sm border border-yellow-200/30"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400/20 rounded-3xl -rotate-12 backdrop-blur-sm border border-blue-200/30"></div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 lg:-left-28 top-1/3 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-2 lg:px-4 py-1 lg:py-2 rounded-xl shadow-xl border border-teal-200 dark:border-teal-800"
          >
            <div className="flex items-center gap-1 lg:gap-2">
              <FaReact className="text-cyan-400 text-sm lg:text-xl animate-spin-slow" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                React Expert
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -right-16 lg:-right-20 top-8 lg:top-20 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-2 lg:px-4 py-1 lg:py-2 rounded-xl shadow-xl border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-center gap-2">
              <FaServer className="text-green-500 text-sm lg:text-xl" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Backend Pro
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -right-10 lg:-right-12 bottom-20 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md px-2 lg:px-4 py-1 lg:py-2 rounded-xl shadow-xl border border-purple-200 dark:border-purple-800"
          >
            <div className="flex items-center gap-2">
              <FaDatabase className="text-emerald-500 text-sm lg:text-xl" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                MongoDB
              </span>
            </div>
          </motion.div>

          <div className="absolute -inset-8 border-2 border-teal-200/30 z-0 dark:border-teal-900/30 rounded-full animate-spin-slow"></div>
          <div className="absolute -inset-12 border border-blue-200/20 z-0 dark:border-blue-900/20 rounded-full animate-spin-slow-reverse"></div>
        </div>

        {/* <div className="fixed  bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block z-50">
          <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-sm">Scroll down</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </div>
        </div> */}
      </section>

      <ProjectSection />

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="skills" className="scroll-mt-20">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Project />
      </section>

      <section id="education" className="scroll-mt-20">
        <Education />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
