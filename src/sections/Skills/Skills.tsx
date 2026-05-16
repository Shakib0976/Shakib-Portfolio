"use client";

import { Code2, GithubIcon, Sparkles } from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiTypescript,
  SiFigma,
  SiTailwindcss
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  ];

  const loopSkills = [...skills, ...skills];

  return (
    <div className="py-24">
      <div className="max-w-11/12 md:max-w-11/14 mx-auto px-6 overflow-hidden">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Code2 className="text-blue-500" size={32} />
            <h2 className="text-4xl md:text-5xl text-gray-800 font-bold">
              My <span>Skills</span>
            </h2>
            <Sparkles className="text-purple-500" size={32} />
          </div>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-600">
            Technologies and tools I use to bring ideas to life and create amazing digital experiences.
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll mb-8">
            {loopSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="flex-shrink-0 mx-4 group">
                  <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 min-w-[140px]">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                      <IconComponent size={48} className={skill.color} />
                    </div>
                    <p className="text-gray-700 font-semibold text-center group-hover:text-gray-900 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex animate-scroll-reverse">
            {[...loopSkills].reverse().map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="flex-shrink-0 mx-4 group">
                  <div className="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md border border-white/20 hover:shadow-xl hover:border-purple-200/50 transition-all duration-500 min-w-[140px]">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                      <IconComponent size={48} className={skill.color} />
                    </div>
                    <p className="text-gray-600 font-medium text-center group-hover:text-gray-800 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-wrap justify-center gap-8 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">{skills.length}+</div>
              <div className="text-gray-600 text-sm font-medium">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">2+</div>
              <div className="text-gray-600 text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">50+</div>
              <div className="text-gray-600 text-sm font-medium">Projects</div>
            </div>
            <div className="text-center">
              <GithubIcon size={24} className="text-gray-700 mx-auto mb-2" />
              <div className="text-gray-600 text-sm font-medium">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
