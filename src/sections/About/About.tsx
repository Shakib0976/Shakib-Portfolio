"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Monitor, Cloud, Code2, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="text-black overflow-x-hidden mx-auto w-11/12 md:max-w-11/14 px-4 py-10 lg:py-20 flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-12">
      <div className="w-full lg:w-1/2 ">
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-4 sm:left-6 top-0 h-full border-l-2 border-red-500"></div>

          <div data-aos="fade-left" className="flex items-center mb-12 sm:mb-16 relative">
            <div className="absolute -left-2 sm:-left-[9px] w-4 h-4 rounded-full bg-white border-2 border-red-500"></div>
            <div className="flex items-center gap-4 ml-6">
              <Monitor className="text-black w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-black text-base sm:text-lg">Website Development</span>
            </div>
          </div>

          <div data-aos="fade-left" className="flex items-center mb-12 sm:mb-16 relative">
            <div className="absolute -left-2 sm:-left-[9px] w-4 h-4 rounded-full bg-white border-2 border-red-500"></div>
            <div className="flex items-center gap-4 ml-6">
              <Code2 className="text-black w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-black text-base sm:text-lg">Frontend Development</span>
            </div>
          </div>

          <div data-aos="fade-left" className="flex items-center relative">
            <div className="absolute -left-2 sm:-left-[9px] w-4 h-4 rounded-full bg-white border-2 border-red-500"></div>
            <div className="flex items-center gap-4 ml-6">
              <Cloud className="text-black w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-black text-base sm:text-lg">Website Hosting</span>
            </div>
          </div>

          <div data-aos="fade-left" className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <div className="text-2xl font-bold text-teal-600">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <div className="text-2xl font-bold text-teal-600">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <div className="text-2xl font-bold text-teal-600">40K+</div>
              <div className="text-gray-600">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="w-full lg:w-1/2">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-linear-to-r from-teal-500 to-teal-600 rounded-full"></div>
            <h1 className="text-3xl poppins-font sm:text-4xl font-bold">
              About <span className="text-teal-600">Me</span>
            </h1>
          </div>
          <div className="w-24 h-1 bg-linear-to-r from-teal-500 to-teal-600 rounded-full"></div>
        </div>

        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          I am a passionate <span className="text-blue-400">Frontend Developer</span> with
          expertise in the <span className="text-green-400">MERN stack</span>,
          dedicated to creating seamless digital experiences that marry elegant
          design with robust functionality.
        </p>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          I love turning ideas into beautiful, functional web applications.
        </p>

        <div className="space-y-2 mb-6 text-sm sm:text-base">
          <p><span className="font-semibold">Fullname:</span> Md. Shakib Khan Noyon</p>
          <p><span className="font-semibold">Address:</span> Sylhet, Bangladesh</p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:web.shakib09@gmail.com" className="text-teal-500 break-words">
              web.shakib09@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+8801902042884" className="text-teal-500">+8801902042884</a>
          </p>
        </div>

        <Link href="#contact" className="flex items-center gap-2 w-40 bg-gradient-to-r from-teal-400 to-teal-600 hover:text-black px-4 py-2 rounded shadow text-teal-100 text-sm sm:text-base">
          <Mail className="w-4 h-4" /> Contact Me
        </Link>
      </div>
    </div>
  );
};

export default About;
