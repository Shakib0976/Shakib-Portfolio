"use client";

import React, { useEffect } from "react";
import { GiOpenBook } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="text-black px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-xl text-teal-700 border-b-2 text-center w-40 pb-2 mb-4 mx-auto">
        Education
      </p>
      <h1 className="text-3xl sm:text-4xl mb-5 font-bold text-black text-center py-4">
        My <span className="text-teal-600">Academic Journey</span>
      </h1>

      <ul className="timeline max-w-11/12 overflow-x-hidden md:max-w-11/14 mx-auto timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <GiOpenBook size={25} />
          </div>

          <div className="timeline-start mb-10" data-aos="fade-right">
            <div className="text-lg font-black text-start md:text-end">Currently Pursuing</div>

            <div className="relative group max-w-md rounded-2xl">
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30"></div>

              <div className="relative z-10 text-black bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-800 text-white">Diploma</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">CURRENT</span>
                </div>

                <h2 className="text-2xl font-bold">Diploma in Engineering</h2>
                <p className="text-lg text-teal-600 font-medium mt-1">Habiganj Polytechnic Institute</p>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <span className="text-sm font-medium text-pink-600">2023 - Present</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-700 text-white">Currently Pursuing</span>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Currently pursuing my Diploma in Engineering, gaining practical knowledge in engineering fundamentals.
                </p>

                <div className="mt-5">
                  <p className="text-sm text-gray-900 font-semibold mb-2">KEY SUBJECTS</p>
                  <div className="flex flex-wrap gap-2">
                    {["Engineering Fundamentals", "Technical Drawing", "Applied Sciences", "Industrial Technologies"].map((tag, idx) => (
                      <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <GiOpenBook size={25} />
          </div>

          <div className="timeline-end md:mb-10" data-aos="fade-left">
            <div className="text-lg font-black">SSC</div>
            <div className="relative group max-w-md rounded-2xl">
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30"></div>

              <div className="relative z-10 text-black bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-800 text-white">SSC</span>
                </div>

                <h2 className="text-2xl font-bold">Secondary School Certificate</h2>
                <p className="text-lg text-blue-600 font-medium mt-1">Habiganj Technical School And College</p>

                <div className="flex items-center gap-3 mt-3 flex-wrap">
                  <span className="text-sm font-medium text-pink-600">2021-2023</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-700 text-white">GPA 5.00 / 5.00</span>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Completed my SSC with a keen interest in science and problem-solving.
                </p>

                <div className="mt-5">
                  <p className="text-sm text-gray-900 font-semibold mb-2">KEY SUBJECTS</p>
                  <div className="flex flex-wrap gap-2">
                    {["Science", "Mathematics", "English", "Bengali"].map((tag, idx) => (
                      <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <FaGraduationCap size={25} />
          </div>

          <div className="timeline-start mb-10" data-aos="fade-right">
            <div className="text-lg font-black text-start md:text-end">Completed Courses</div>
            <div className="relative group max-w-md rounded-2xl">
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30"></div>

              <div className="relative z-10 text-black bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-800 text-white">Web Development</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500 text-white">Batch 11</span>
                </div>

                <h2 className="text-2xl font-bold">MD. SHAKIB KHAN NOYON</h2>
                <p className="text-lg text-blue-400 font-medium mt-1">Complete Web Development Course</p>

                <div className="flex items-center gap-3 mt-3 flex-wrap">
                  <span className="text-sm font-medium text-pink-600">WEB11-2694</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-700 text-white">Completed</span>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  Successfully completed the <span className="font-semibold">Complete Web Development</span> course.
                </p>

                <div className="mt-5">
                  <p className="text-sm text-gray-900 font-semibold mb-2">KEY SKILLS</p>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "HTML", "CSS", "React"].map((tag, idx) => (
                      <span key={idx} className="text-xs font-medium px-3 py-1 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
