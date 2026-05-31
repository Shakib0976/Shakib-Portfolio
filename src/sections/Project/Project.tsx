"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { Sparkles } from 'lucide-react';
import BlurText from '@/components/ui/blurText';

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Eco Food",
      desc: "Eco Food is a dynamic web application designed to facilitate food donation management and reduce food waste by connecting donors, charities, and admins through a role-based platform.",
      img: "https://i.ibb.co.com/4R1420zh/Gemini-Generated-Image-owkmf7owkmf7owkm.png",
      link: "/project1",
    },
    {
      id: 2,
      title: "Student-Toolkit",
      desc: "Student Life Toolkit is designed to help students organize their schedules, manage finances, prepare for exams, and plan their studies efficiently.",
      img: "https://i.ibb.co.com/XfSp66vL/Gemini-Generated-Image-8yye938yye938yye.png",
      link: "/project4",
    },
    {
      id: 3,
      title: "Dev Knowledge",
      desc: "DevKnowledge is a collaborative platform for students to create, share, and discuss academic articles and resources.",
      img: "https://i.ibb.co.com/tF99fkh/Gemini-Generated-Image-ulsrnbulsrnbulsr.png",
      link: "/project2",
    },
  ];

  return (
    <section className="text-white w-11/12 md:max-w-11/14 my-20 mx-auto p-4">
      <div className="container mx-auto">
        <p className="text-xl text-teal-700 border-b-2 text-center w-fit pb-2 mb-4 mx-auto">
          Visit My Projects & Keep Your Feedback
        </p>
        {/* <h1 className="text-4xl mb-10 font-bold text-black text-center py-4">
          My <span className="text-teal-600">Projects</span>
        </h1> */}
        <div className="flex items-center justify-center text-center gap-3 mb-4">
          <Sparkles className="text-purple-500" size={32} />
          <BlurText
            text="My Projects"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl text-gray-800 font-bold"
          />
          <Sparkles className="text-purple-500" size={32} />
        </div>

        <div className="grid gap-8 py-12 px-2 md:px-4 sm:grid-cols-2 lg:grid-cols-3 overflow-x-hidden">
          {projects.map((project, i) => (
            <div
              key={project.id}
              data-aos={i % 2 === 0 ? "fade-right" : "fade-up"}
              data-aos-delay="200"
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30"></div>

              <div className="relative md:border-l-4 md:border-teal-500 bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-200 transition duration-500 group-hover:scale-[1.02]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-2xl text-gray-800 font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {project.desc}
                  </p>
                  <Link
                    href={project.link}
                    className="inline-block mt-4 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
