"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    number: "01",
    year: "2025",
    category: "Product Apps",
    title: "Eco Food",
    desc: "We've Helped Businesses Across Industries Achieve Their Goals. Here Are Some Of Our Recent Projects",
    img: "https://i.ibb.co.com/4R1420zh/Gemini-Generated-Image-owkmf7owkmf7owkm.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link: "/project1",
  },
  {
    id: 2,
    number: "02",
    year: "2025",
    category: "Product Apps",
    title: "Student Toolkit",
    desc: "We've Helped Businesses Across Industries Achieve Their Goals. Here Are Some Of Our Recent Projects",
    img: "https://i.ibb.co.com/XfSp66vL/Gemini-Generated-Image-8yye938yye938yye.png",
    video: "https://www.w3schools.com/html/movie.mp4",
    link: "/project4",
  },
  {
    id: 3,
    number: "03",
    year: "2025",
    category: "Product Apps",
    title: "Dev Knowledge",
    desc: "We've Helped Businesses Across Industries Achieve Their Goals. Here Are Some Of Our Recent Projects",
    img: "https://i.ibb.co.com/tF99fkh/Gemini-Generated-Image-ulsrnbulsrnbulsr.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link: "/project2",
  },
];

const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    if (!containerRef.current || cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        const nextCard = cards[index + 1];
        gsap.to(card, {
          scale: 0.94 - index * 0.01,
          opacity: 0.35,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top 85%",
            end: "top 20%",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="container mx-auto px-4 py-12 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-24">
        <span className="text-sm uppercase tracking-wider text-teal-600 font-semibold bg-teal-50 px-4 py-1.5 rounded-full inline-block mb-4">
          Featured Projects
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Transforming Ideas Into Reality
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Explore some of my latest full-stack applications and development work.
        </p>
      </div>

      {/* Stack Cards */}
      <div className="flex flex-col gap-10 sm:gap-16 md:gap-24 pb-16">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={project.id}
              ref={addToRefs}
              className="sticky top-16 sm:top-20 md:top-24 bg-white rounded-[28px] sm:rounded-[36px] md:rounded-[40px] p-3 sm:p-4 md:p-6 overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 lg:h-[700px]">

                {/* BIG VIDEO */}
                <div
                  className={`
                    relative rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden
                    h-[220px] sm:h-[280px] md:h-[340px] lg:h-full
                    lg:col-span-3
                    ${isEven ? "lg:order-2" : "lg:order-1"}
                  `}
                >
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* INFO + IMAGE */}
                <div
                  className={`
                    flex flex-col gap-3 sm:gap-4 md:gap-6
                    lg:col-span-2 lg:h-full
                    ${isEven ? "lg:order-1" : "lg:order-2"}
                  `}
                >
                  {/* INFO CARD */}
                  <div className="bg-black/5 border border-white/10 rounded-[20px] sm:rounded-[28px] md:rounded-[32px] p-5 sm:p-6 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <span className="px-3 py-1.5 text-xs rounded-full bg-gray-200 text-black">
                          {project.category}
                        </span>
                        <span className="text-green-400 text-xs sm:text-sm">
                          ~{project.year}~
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">
                        {project.title}
                      </h3>

                      <p className="text-black/60 leading-relaxed text-sm sm:text-base">
                        {project.desc}
                      </p>
                    </div>

                    <Link href={project.link}>
                      <button className="mt-6 md:mt-8 bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white rounded-full px-5 py-3 sm:px-6 sm:py-4 flex items-center gap-2 sm:gap-3 w-full sm:w-fit justify-center sm:justify-start text-sm sm:text-base">
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M7 7h10v10"
                          />
                        </svg>
                        View Project
                      </button>
                    </Link>
                  </div>

                  {/* SMALL IMAGE — hidden on small screens to reduce clutter */}
                  <div className="relative rounded-[20px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden hidden sm:block flex-1 min-h-[160px] md:min-h-[220px]">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* View All CTA */}
      <div className="flex justify-center ">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-teal-600 transition-all duration-300 text-sm sm:text-base"
        >
          View All Projects
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Project;