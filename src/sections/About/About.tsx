// import React from 'react';
// import { MapPin, TrendingUp, Target, Wrench } from 'lucide-react'; // npm i lucide-react

// export default function AboutMe() {
//   return (
//     <div className=" container text-gray-900 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden p-6 md:p-12 lg:p-24">

//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.03),transparent_50%)] pointer-events-none" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.03),transparent_50%)] pointer-events-none" />

//       <div className=" relative z-10 space-y-12">

//         {/* Header Section */}
//         <header className="space-y-2">
//           <span className="text-xs font-semibold tracking-[0.2em] text-black uppercase">
//             Who Am I
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
//             About Me
//           </h1>
//           <div className="h-0.5 w-12 bg-cyan-500/20 rounded" />
//         </header>

//         {/* Main Sections: Location & Brief */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//           {/* Interactive Location Card */}
//           <div className="lg:col-span-5 group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl h-72 p-6 shadow-[0_0_40px_rgba(6,182,212,0.08)] transition-all duration-500 hover:border-cyan-400/50">

//             {/* Gradient Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

//             {/* Default Content */}
//             <div className="relative z-10 h-full flex flex-col justify-between transition-all duration-500 group-hover:opacity-0">

//               <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
//                 <MapPin size={14} className="animate-pulse" />
//                 <span>Location</span>
//               </div>

//               <div>
//                 <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
//                   Sylhet, Bangladesh
//                 </h2>

//                 <div className="mt-3 space-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
//                   <p>Coordinates: 24.8949° N, 91.8687° E</p>
//                   <p>Time Zone: GMT+6 (BST)</p>
//                 </div>
//               </div>

//               <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
//                 Hover to Explore Map
//               </div>
//             </div>

//             {/* Map Appears On Hover */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100">

//               <iframe
//                 title="Sylhet Map"
//                 src="https://maps.google.com/maps?q=Sylhet,Bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
//                 className="w-full h-full"
//                 loading="lazy"
//               />

//               {/* Overlay Text */}
//               <div className="absolute bottom-4 left-4 rounded-xl bg-black/50 backdrop-blur-md px-4 py-2 text-white">
//                 <h3 className="font-semibold">Sylhet, Bangladesh</h3>
//                 <p className="text-xs text-slate-300">
//                   The tea capital of Bangladesh 🍃
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Brief Card */}
//           <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-slate-700">
//             <div className="space-y-4">
//               <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase block">
//                 Brief
//               </span>
//               <p className="text-base leading-relaxed text-slate-300 font-light">
//                 I am a software engineer who enjoys building useful digital products with
//                 clean architecture, scalable backend services, and thoughtful frontend
//                 experiences.
//               </p>
//             </div>

//             <div className="border-l-2 border-emerald-500/50 pl-4 py-1 italic text-slate-300 text-sm font-medium tracking-wide">
//               "Build with clarity, scale with discipline, and learn without ego."
//             </div>
//           </div>
//         </div>

//         {/* Lower Row Grid: Growth, Focus, Craft */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {/* Growth Card */}
//           <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 space-y-4 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
//             <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
//               <TrendingUp size={16} className="text-cyan-500" />
//               <span>Growth</span>
//             </div>
//             <p className="text-sm leading-relaxed text-slate-400">
//               I grow by shipping real projects, learning from feedback, and improving one technical skill at a time.
//             </p>
//           </div>

//           {/* Focus Card */}
//           <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 space-y-4 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
//             <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
//               <Target size={16} className="text-cyan-500" />
//               <span>Focus</span>
//             </div>
//             <p className="text-sm leading-relaxed text-slate-400">
//               My current focus is AI-backed applications, reliable backend systems, and performance-first product development.
//             </p>
//           </div>

//           {/* Craft Card */}
//           <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 space-y-4 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
//             <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
//               <Wrench size={16} className="text-cyan-500" />
//               <span>Craft</span>
//             </div>
//             <p className="text-sm leading-relaxed text-slate-400">
//               I care about craft: maintainable code, meaningful abstractions, and user experiences that feel smooth and intentional.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-up");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const fadeUpBase =
    "fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out";

  const stats: { num: string; label: string }[] = [
    { num: "2+", label: "Years of Experience" },
    { num: "15+", label: "Projects Completed" },
    { num: "15+", label: "Tech Skills" },
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      <div ref={sectionRef} className="overflow-hidden container">
        <section className=" bg-white min-h-[75vh] rounded-xl shadow-lg relative mt-16 flex flex-col justify-center  px-4 md:px-8  mx-auto">

          {/* ── Top grid: LEFT photo block + RIGHT info ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

            {/* ══ LEFT ══ */}
            <div className="relative flex flex-col">

              {/* Bubble 1 */}
              <div
                className="absolute rounded-full hidden sm:block"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(4px)",
                  background: "rgba(255,255,255,0.04)",
                  width: 50,
                  height: 50,
                  top: "15%",
                  left: "2%",
                }}
              />

              {/* Bubble 2 */}
              <div
                className="absolute rounded-full hidden sm:block"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(4px)",
                  background: "rgba(255,255,255,0.04)",
                  width: 35,
                  height: 35,
                  top: "40%",
                  right: "15%",
                }}
              />

              {/* Prism */}
              <div
                className="absolute opacity-70 hidden sm:block"
                style={{
                  bottom: "18%",
                  left: "0%",
                  width: 44,
                  height: 44,
                  background:
                    "linear-gradient(135deg, #a8ff3e, #3d4ef5, #ff6b6b, #ffd700)",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  filter: "blur(1px)",
                }}
              />

              {/* ABOUT word */}
              <span
                className="relative z-10 font-black uppercase text-black dark:text-gray-300 leading-none tracking-tighter"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 11rem)",
                  letterSpacing: "-0.04em",
                }}
              >
                ABOUT
              </span>

              {/* Photo row */}
              <div className="relative z-20 flex items-end -mt-6 sm:-mt-8">

                {/* Photo frame */}
                <div
                  className="rounded-2xl overflow-hidden flex-shrink-0 ml-8 sm:ml-10 md:ml-12 bg-gray-900 flex items-center justify-center"
                  style={{
                    width: "clamp(160px, 30vw, 240px)",
                    height: "clamp(200px, 36vw, 290px)",
                    boxShadow: "0 0 60px rgba(0,0,0,0.7)",
                  }}
                >
                  <img src="/aboutimg.png" alt="About Me" />
                </div>

                {/* ME word */}
                <span
                  className="absolute z-30 font-black uppercase text-gray-800 dark:text-gray-100 leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 8vw, 9rem)",
                    letterSpacing: "-0.04em",
                    right: "-0.5rem",
                    bottom: "1rem",
                  }}
                >
                  ME
                </span>
              </div>

              {/* Name */}
              <p
                className="mt-3 ml-8 sm:ml-10 md:ml-12 text-base sm:text-lg text-gray-500 dark:text-gray-400"
                style={{
                  fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                  letterSpacing: "0.05em",
                }}
              >
                Your Name Here
              </p>
            </div>

            {/* ══ RIGHT ══ */}
            <div className="flex flex-col gap-6 md:gap-8 md:pl-8">

              {/* Label */}
              <span
                className={`${fadeUpBase} text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300`}
              >
                Who I Am
              </span>

              {/* Heading */}
              <h2
                className={`${fadeUpBase} font-extrabold leading-tight text-gray-800 dark:text-gray-100`}
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2.6rem)",
                  letterSpacing: "-0.02em",
                  transitionDelay: "0.1s",
                }}
              >
                Full Stack Developer &amp;
                <br />
                <span className="text-black dark:text-gray-300">
                  Digital Craftsman
                </span>
              </h2>

              {/* Body */}
              <p
                className={`${fadeUpBase} text-sm sm:text-base leading-relaxed text-gray-500 dark:text-gray-400`}
                style={{ transitionDelay: "0.2s" }}
              >
                I architect and build end-to-end web products — from
                pixel-perfect interfaces to robust server-side systems.
                Passionate about writing clean, maintainable code and delivering
                experiences that feel effortless to use.
              </p>

              {/* Stats */}
              <div
                className={`${fadeUpBase} grid grid-cols-3 gap-4 sm:gap-6 mt-2 pt-5 border-t border-gray-200 dark:border-white/10`}
                style={{ transitionDelay: "0.3s" }}
              >
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <div
                      className="text-2xl sm:text-4xl font-black leading-none text-black dark:text-gray-300"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {num}
                    </div>
                    <div className="text-xs mt-1 leading-snug text-gray-500 dark:text-gray-400">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Me Button */}
              <div
                className={`${fadeUpBase}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <a
                  href="mailto:you@example.com"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-3 rounded-full
                    bg-black hover:bg-gray-600
                    dark:bg-teal-500 dark:hover:bg-black
                    text-white text-sm font-semibold
                    shadow-lg shadow-teal-500/30
                    hover:-translate-y-0.5 hover:shadow-teal-500/50
                    transition-all duration-200
                    w-fit
                  "
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Contact Me
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}