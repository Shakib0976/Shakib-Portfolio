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
import MackBookSection from "@/sections/MackBookSection/MackBookSection";
import HeroSection from "@/sections/HereoSection/Hero";
import CertificatesPage from "@/sections/Certifications/CertificationCard";


// import ProjectSection from "@/sections/Project/ProjectSection";

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

      <section id="home" >
        <HeroSection></HeroSection>
      </section>

      {/* <ProjectSection /> */}

      <section id="about" className="scroll-mt-10">
        <About />
      </section>

      <section id="skills" className="scroll-mt-10">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-10">
        <Project />
      </section>
      {/* <section id="PersonalProjects" className="scroll-mt-10">
        <PersonalProject />
      </section> */}
      {/* <section id="MacBook" className="scroll-mt-10">
        <MackBookSection />
      </section> */}



      <section id="education" className="scroll-mt-10">
        <Education />
      </section>

      <section id="Certification" className="scroll-mt-10">
     <CertificatesPage/>
      </section>


      {/* <section id="stack" className="scroll-mt-10">
        <TeamCarousel />
      </section> */}

      <section id="contact" className="scroll-mt-10">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
