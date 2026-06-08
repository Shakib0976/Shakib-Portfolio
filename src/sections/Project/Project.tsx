// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Ensure GSAP plugins are registered safely on the client
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const carouselItems = [
//   {
//     id: 1,
//     number: "01",
//     year: "2025",
//     category: "Medical · Mobile App",
//     title: "Healio",
//     description:
//       "A Patient-Centered App With Simple Navigation And Calming Visuals Focused On Healthcare Accessibility.",
//     image: "/img-1.jpg",
//     link: "/case-study/healio",
//     color: "from-teal-500 to-emerald-500",
//     bgColor: "bg-teal-50",
//   },
//   {
//     id: 2,
//     number: "02",
//     year: "2024",
//     category: "Fintech · Web Platform",
//     title: "WealthWise",
//     description:
//       "Intelligent investment platform that simplifies portfolio management with AI-driven insights and personalized financial guidance.",
//     image: "/img-2.jpg",
//     link: "/case-study/wealthwise",
//     color: "from-blue-500 to-indigo-500",
//     bgColor: "bg-blue-50",
//   },
//   {
//     id: 3,
//     number: "03",
//     year: "2024",
//     category: "E-commerce · Mobile & Web",
//     title: "ShopLume",
//     description:
//       "Next-gen shopping experience with AR try-ons, smart recommendations, and seamless checkout across all devices.",
//     image: "/img-3.jpg",
//     link: "/case-study/shoplume",
//     color: "from-rose-500 to-orange-500",
//     bgColor: "bg-rose-50",
//   },
//   {
//     id: 4,
//     number: "04",
//     year: "2023",
//     category: "EdTech · Learning Platform",
//     title: "SkillSync",
//     description:
//       "Adaptive learning ecosystem connecting mentors and learners through interactive courses and real-time collaboration tools.",
//     image: "/img-4.jpg",
//     link: "/case-study/skillsync",
//     color: "from-purple-500 to-pink-500",
//     bgColor: "bg-purple-50",
//   },
// ];

// interface CarouselItem {
//   id: number;
//   number: string;
//   year: string;
//   category: string;
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   color: string;
//   bgColor: string;
// }

// export default function Project() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   // Collect references to each card element dynamically
//   const addToRefs = (el: HTMLDivElement | null) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const cards = cardsRef.current;
//     if (!containerRef.current || cards.length === 0) return;

//     const ctx = gsap.context(() => {
//       cards.forEach((card, index) => {
//         // We do not animate the last card because nothing stacks on top of it
//         if (index === cards.length - 1) return;

//         const nextCard = cards[index + 1];

//         gsap.to(card, {
//           // Subtle compression and fade as the next element drives over the current viewport focus
//           scale: 0.93 - index * 0.01,
//           opacity: 0.3,
//           transformOrigin: "top center",
//           ease: "none",
//           scrollTrigger: {
//             trigger: nextCard,
//             start: "top 90%",
//             end: "top 25%",
//             scrub: true,
//           },
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section 
//       ref={containerRef}
//       className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16 md:mb-24">
//           <span className="text-sm uppercase tracking-wider text-teal-600 font-semibold bg-teal-50 px-4 py-1.5 rounded-full inline-block mb-4">
//             Featured Case Studies
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             Transforming Ideas Into Impact
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Explore our latest projects and success stories
//           </p>
//         </div>

//         {/* Stack Containers */}
//         <div className="flex flex-col gap-20 md:gap-32 pb-24">
//           {carouselItems.map((item, index) => (
//             <div
//               key={item.id}
//               ref={addToRefs}
//               // sticky positioning creates the overlapping deck effects
//               className="sticky top-20 md:top-28 w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
//               style={{
//                 zIndex: index + 1,
//               }}
//             >
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
//                 {/* Left Side - Text Content */}
//                 <div className={`p-8 md:p-12 lg:p-14 ${item.bgColor}`}>
//                   {/* Number & Year Row */}
//                   <div className="flex items-center justify-between mb-6">
//                     <span className="text-5xl md:text-6xl font-black text-gray-800 opacity-20">
//                       {item.number}
//                     </span>
//                     <span className="text-sm font-mono bg-white/80 backdrop-blur px-3 py-1 rounded-full text-gray-600 shadow-sm">
//                       {item.year}
//                     </span>
//                   </div>

//                   {/* Category */}
//                   <div className="mb-4">
//                     <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-600 bg-teal-100/50 px-3 py-1 rounded-full inline-block">
//                       {item.category}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
//                     {item.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
//                     {item.description}
//                   </p>

//                   {/* CTA Button */}
//                   <Link href={item.link}>
//                     <button className="group flex items-center gap-2 text-gray-800 font-semibold text-lg hover:text-teal-600 transition-colors duration-300">
//                       VIEW CASE STUDY →
//                       <svg
//                         className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17 8l4 4m0 0l-4 4m4-4H3"
//                         />
//                       </svg>
//                     </button>
//                   </Link>
//                 </div>

//                 {/* Right Side - Image Frame */}
//                 <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8 md:p-12">
//                   <div className="relative w-full max-w-sm mx-auto">
//                     {/* Device Bezel */}
//                     <div className="relative rounded-[2.5rem] bg-gray-900 p-3 shadow-2xl">
//                       <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-[9/16]">
//                         <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 z-10 pointer-events-none" />
//                         <Image
//                           src={item.image}
//                           alt={item.title}
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 768px) 80vw, 400px"
//                           onError={(e) => {
//                             const target = e.target as HTMLImageElement;
//                             target.src = `https://picsum.photos/seed/${item.title}/400/700`;
//                           }}
//                         />
//                       </div>
//                       <div className="absolute -left-2 top-24 w-1 h-12 bg-gray-700 rounded-l-full" />
//                       <div className="absolute -right-2 top-32 w-1 h-8 bg-gray-700 rounded-r-full" />
//                     </div>

//                     {/* Decorative Background Accents */}
//                     <div className="absolute -top-6 -right-6 w-20 h-20 bg-teal-200 rounded-full opacity-20 blur-2xl" />
//                     <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-2xl" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";
import BlurText from "@/components/ui/blurText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    number: "01",
    year: "2025",
    category: "MERN Stack · Full Stack",
    title: "Eco Food",
    desc: "Eco Food is a dynamic web application designed to facilitate food donation management and reduce food waste.",
    img: "https://i.ibb.co.com/4R1420zh/Gemini-Generated-Image-owkmf7owkmf7owkm.png",
    link: "/project1",
    bgColor: "bg-teal-50",
  },
  {
    id: 2,
    number: "02",
    year: "2025",
    category: "Productivity · Web App",
    title: "Student Toolkit",
    desc: "Student Life Toolkit helps students organize schedules, manage finances, prepare for exams, and plan studies.",
    img: "https://i.ibb.co.com/XfSp66vL/Gemini-Generated-Image-8yye938yye938yye.png",
    link: "/project4",
    bgColor: "bg-blue-50",
  },
  {
    id: 3,
    number: "03",
    year: "2025",
    category: "Education · Platform",
    title: "Dev Knowledge",
    desc: "Collaborative platform for students to create, share, and discuss academic articles and resources.",
    img: "https://i.ibb.co.com/tF99fkh/Gemini-Generated-Image-ulsrnbulsrnbulsr.png",
    link: "/project2",
    bgColor: "bg-purple-50",
  },
];

const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Safely capture DOM nodes for the array of stack cards
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const cards = cardsRef.current;
    if (!containerRef.current || cards.length === 0) return;

    // Use gsap.context to manage cleaner mounting and unmounting cycles
    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        // The last card does not need to scale down since no card tracks behind it
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
    <section
      ref={containerRef}
      className="container mx-auto py-16 md:py-24"
    >
      <div className="">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm uppercase tracking-wider text-teal-600 font-semibold bg-teal-50 px-4 py-1.5 rounded-full inline-block mb-4">
            Featured Projects
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transforming Ideas Into Reality
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of my latest full-stack applications and development work.
          </p>
        </div>

        {/* Animated Title */}
        {/* <div className="flex items-center justify-center text-center gap-3 mb-16">
          <Sparkles className="text-purple-500" size={32} />
          <BlurText
            text="My Projects"
            delay={300}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl text-gray-800 font-bold"
          />
          <Sparkles className="text-purple-500" size={32} />
        </div> */}

        {/* Stack Containers */}
        <div className="flex flex-col gap-16 md:gap-24 pb-24 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={addToRefs}
              className="sticky top-20 md:top-28 w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                {/* Left Side */}
                <div className={`${project.bgColor} p-8 md:p-12 lg:p-14`}>

                  {/* Number + Year */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl md:text-6xl font-black text-gray-800 opacity-20">
                      {project.number}
                    </span>

                    <span className="text-sm font-mono bg-white/80 backdrop-blur px-3 py-1 rounded-full text-gray-600 shadow-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="mb-4">
                    <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-teal-600 bg-teal-100/50 px-3 py-1 rounded-full inline-block">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  {/* Button */}
                  <Link href={project.link}>
                    <button className="group flex items-center gap-2 text-gray-800 font-semibold text-lg hover:text-teal-600 transition-colors duration-300">
                      VIEW DETAILS →

                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>

                {/* Right Side */}
                <div className="relative h-64 sm:h-80  w-full overflow-hidden object-contain bg-gray-50 order-1 md:order-2">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    unoptimized // Kept unoptimized since you are using external placeholder ibb links
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-teal-600 transition-all duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;