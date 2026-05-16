"use client";

import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const roles = ["MERN Stack Developer", "Frontend Developer", "Problem Solver", "UI/UX Enthusiast"];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
  };

  const stats = [
    { value: "10+", label: "Projects" },
    { value: "1+", label: "Years Exp" },
    { value: "5+", label: "Technologies" },
  ];

  const skills = ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "TypeScript"];

  const floatingCards = [
    { text: "Frontend Dev", style: "absolute -left-4 sm:-left-10 lg:-left-16 top-1/3 z-40", anim: { y: [0, -10, 0] }, dur: 2 },
    { text: "MERN Stack", style: "absolute -right-6 sm:-right-12 lg:-right-16 top-1/5 z-40", anim: { x: [0, 10, 0] }, dur: 2.5 },
    { text: "Problem Solver", style: "absolute -right-2 sm:-right-6 lg:-right-10 bottom-1/5 z-40", anim: { x: [0, 8, 0] }, dur: 3 },
  ];

  return (
    <section id="home">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-40 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
        <motion.div
          className="flex-1 max-w-2xl text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-5">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-teal-600 tracking-widest uppercase">
              Available for work
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-1">
            <span className="text-2xl sm:text-3xl font-semibold text-gray-700">
              Hi there{" "}
              <span className="inline-block animate-bounce origin-bottom-right">👋</span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-3"
          >
            I&apos;m{" "}
            <span className="relative">
              <span className="text-teal-600">Md. Shakib</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 240 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 6 C60 2, 180 2, 238 6"
                  stroke="#0d9488"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-10 flex items-center justify-center lg:justify-start mb-5"
          >
            <span className="text-lg sm:text-2xl font-semibold text-gray-500">
              {text}
              <span className="inline-block w-0.5 h-6 bg-teal-500 ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7"
          >
            I build fast, responsive, and user-friendly web applications using modern
            technologies like React, Node.js, and MongoDB.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10 mb-7"
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-teal-600">{s.value}</p>
                <p className="text-xs text-gray-400 font-medium tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
          >
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold rounded-full border border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              View Projects
              <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/Shakib.Resume.docx (5).pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-teal-500 text-teal-600 text-sm font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Download CV
              <FaDownload className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center flex-shrink-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 }}
        >
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full border-2 border-dashed border-teal-200/60 animate-spin-slow" />
          <div className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-teal-100 via-blue-50 to-purple-100 blur-2xl opacity-70" />

          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-white shadow-xl z-10">
            <img
              src="https://i.ibb.co.com/GQhkTh80/sk8-24-at-09-22-28-1cea5aae.jpg"
              alt="Md. Shakib"
              className="w-full h-full object-cover"
            />
          </div>

          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              className={`${card.style} bg-white/90 backdrop-blur-sm border border-gray-100 text-gray-800 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl shadow-lg`}
              initial={{ opacity: 0 }}
              animate={{ ...card.anim, opacity: 1 }}
              transition={{ duration: card.dur, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="mr-1.5 text-teal-500">●</span>
              {card.text}
            </motion.div>
          ))}

          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-40 bg-gray-900 text-teal-400 font-mono text-xs px-4 py-2 rounded-xl shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            &lt;MERN Stack /&gt;
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 flex justify-center pt-1"
        >
          <div className="w-1 h-2 rounded-full bg-teal-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
