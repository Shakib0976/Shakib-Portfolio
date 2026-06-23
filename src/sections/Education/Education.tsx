// "use client";

// import React, { useEffect, useRef } from "react";
// import { GiOpenBook } from "react-icons/gi";
// import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
// import { Sparkles, MapPin, Calendar, Award, Code2, Zap } from "lucide-react";
// import BlurText from "@/components/ui/blurText";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* ─────────────────────────── Rocket SVG ─────────────────────────── */
// const RocketSVG = () => (
//   <svg
//     viewBox="0 0 38 38"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-10 h-10"
//     style={{ filter: "drop-shadow(0 0 12px rgba(20,210,150,0.9)) drop-shadow(0 0 24px rgba(20,210,150,0.4))" }}
//   >
//     <g id="rocket-body" style={{ transformOrigin: "19px 19px" }}>
//       <path d="M19 3 C13 10 11 17 11 23 L19 27 L27 23 C27 17 25 10 19 3Z" fill="url(#rg1)" />
//       <path d="M19 3 C16 10 15 17 15 23 L19 27 L19 3Z" fill="rgba(255,255,255,0.25)" />
//       <circle cx="19" cy="13" r="4" fill="#E8FFF5" stroke="#7EEECB" strokeWidth="1.2" />
//       <circle cx="19" cy="13" r="2" fill="url(#rg2)" />
//       <path d="M11 23 L6 27 L11 25Z" fill="#0A5E48" />
//       <path d="M27 23 L32 27 L27 25Z" fill="#0A5E48" />
//       <rect x="15" y="25" width="8" height="4" rx="1.5" fill="#063D30" />
//       <g className="animate-flicker" style={{ transformOrigin: "19px 29px" }}>
//         <path d="M15.5 29 Q17 35 19 37 Q21 35 22.5 29Z" fill="url(#fg1)" opacity="0.95" />
//         <path d="M16.5 29 Q18 33 19 35 Q20 33 21.5 29Z" fill="url(#fg2)" />
//       </g>
//       <defs>
//         <linearGradient id="rg1" x1="19" y1="3" x2="19" y2="27" gradientUnits="userSpaceOnUse">
//           <stop stopColor="#14D296" />
//           <stop offset="1" stopColor="#0A7A58" />
//         </linearGradient>
//         <radialGradient id="rg2" cx="50%" cy="40%" r="50%">
//           <stop stopColor="#B2F5E3" />
//           <stop offset="1" stopColor="#14D296" />
//         </radialGradient>
//         <linearGradient id="fg1" x1="19" y1="29" x2="19" y2="37" gradientUnits="userSpaceOnUse">
//           <stop stopColor="#FF8C00" />
//           <stop offset="1" stopColor="#FF4500" stopOpacity="0" />
//         </linearGradient>
//         <linearGradient id="fg2" x1="19" y1="29" x2="19" y2="35" gradientUnits="userSpaceOnUse">
//           <stop stopColor="#FFD700" />
//           <stop offset="1" stopColor="#FFAA00" stopOpacity="0" />
//         </linearGradient>
//       </defs>
//     </g>
//   </svg>
// );

// /* ─────────────────────────── Data ─────────────────────────── */
// type BadgeItem = { text: string; cls: string };
// type EducationItem = {
//   id: string;
//   side: "left" | "right";
//   type: "education" | "course" | "experience";
//   icon: React.ReactNode;
//   label: string;
//   badges: BadgeItem[];
//   title: string;
//   subtitle: string;
//   subtitleCls: string;
//   meta: { date: string; badge: string; badgeCls: string };
//   desc: string;
//   tagsLabel: string;
//   tags: string[];
//   accentFrom: string;
//   accentTo: string;
//   highlights?: { icon: React.ReactNode; text: string }[];
// };

// const educationData: EducationItem[] = [
//   {
//     id: "internship",
//     side: "left",
//     type: "experience",
//     icon: <FaBriefcase size={20} />,
//     label: "Work Experience",
//     badges: [
//       { text: "Internship", cls: "bg-amber-900/60 text-amber-200 border border-amber-700/40" },
//       { text: "LIVE", cls: "bg-gradient-to-r from-rose-500 to-orange-500 text-white animate-pulse" },
//     ],
//     title: "Frontend Developer Intern",
//     subtitle: "ReturnHex · Dhaka, Uttara",
//     subtitleCls: "text-orange-400",
//     meta: { date: "2024 – Present", badge: "Ongoing", badgeCls: "bg-orange-700/60 text-orange-100 border border-orange-600/30" },
//     desc: "Working as a Frontend Developer Intern at ReturnHex, a dynamic tech company in Uttara, Dhaka. Collaborating with the product team to build and ship responsive web interfaces, implement UI/UX designs, and contribute to real-world client projects.",
//     tagsLabel: "TECH STACK",
//     tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Git", "REST API"],
//     accentFrom: "#F97316",
//     accentTo: "#EF4444",
//     highlights: [
//       { icon: <MapPin size={13} />, text: "Uttara, Dhaka, Bangladesh" },
//       { icon: <Code2 size={13} />, text: "Building production-grade UIs" },
//       { icon: <Zap size={13} />, text: "Agile team collaboration" },
//     ],
//   },
//   {
//     id: "diploma",
//     side: "right",
//     type: "education",
//     icon: <GiOpenBook size={20} />,
//     label: "Currently Pursuing",
//     badges: [
//       { text: "Diploma", cls: "bg-emerald-900/60 text-emerald-200 border border-emerald-700/40" },
//       { text: "CURRENT", cls: "bg-gradient-to-r from-indigo-500 to-violet-600 text-white" },
//     ],
//     title: "Diploma in Engineering",
//     subtitle: "Habiganj Polytechnic Institute",
//     subtitleCls: "text-teal-400",
//     meta: { date: "2023 – Present", badge: "In Progress", badgeCls: "bg-indigo-700/60 text-indigo-100 border border-indigo-600/30" },
//     desc: "Currently pursuing Diploma in Engineering with a focus on practical technical skills, hands-on lab work, and real-world engineering problem solving.",
//     tagsLabel: "KEY SUBJECTS",
//     tags: ["Engineering Fundamentals", "Technical Drawing", "Applied Sciences", "Industrial Tech"],
//     accentFrom: "#14D296",
//     accentTo: "#6366F1",
//     highlights: [
//       { icon: <Award size={13} />, text: "Full-time program" },
//       { icon: <Calendar size={13} />, text: "Expected graduation 2026" },
//     ],
//   },
//   {
//     id: "ssc",
//     side: "left",
//     type: "education",
//     icon: <GiOpenBook size={20} />,
//     label: "SSC",
//     badges: [
//       { text: "SSC", cls: "bg-sky-900/60 text-sky-200 border border-sky-700/40" },
//       { text: "GPA 5.00", cls: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" },
//     ],
//     title: "Secondary School Certificate",
//     subtitle: "Habiganj Technical School And College",
//     subtitleCls: "text-sky-400",
//     meta: { date: "2021 – 2023", badge: "GPA 5.00 / 5.00", badgeCls: "bg-emerald-800/60 text-emerald-100 border border-emerald-600/30" },
//     desc: "Achieved perfect GPA in SSC with deep interest in Science and Mathematics. Built a strong foundation in analytical thinking and problem-solving skills.",
//     tagsLabel: "KEY SUBJECTS",
//     tags: ["Science", "Mathematics", "English", "Bengali"],
//     accentFrom: "#0EA5E9",
//     accentTo: "#14D296",
//     highlights: [
//       { icon: <Award size={13} />, text: "Perfect GPA — 5.00 / 5.00" },
//       { icon: <Zap size={13} />, text: "Science stream with distinction" },
//     ],
//   },
//   {
//     id: "webdev",
//     side: "right",
//     type: "course",
//     icon: <FaGraduationCap size={20} />,
//     label: "Certification",
//     badges: [
//       { text: "Web Development", cls: "bg-violet-900/60 text-violet-200 border border-violet-700/40" },
//       { text: "Batch 11", cls: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" },
//     ],
//     title: "Complete Web Development",
//     subtitle: "MD. Shakib Khan Noyon · WEB11-2694",
//     subtitleCls: "text-violet-400",
//     meta: { date: "Completed", badge: "Certified", badgeCls: "bg-violet-800/60 text-violet-100 border border-violet-600/30" },
//     desc: "Successfully completed the Complete Web Development course covering modern frontend and backend technologies — from fundamentals to advanced React patterns.",
//     tagsLabel: "SKILLS GAINED",
//     tags: ["JavaScript", "HTML5", "CSS3", "React", "Node.js", "MongoDB"],
//     accentFrom: "#8B5CF6",
//     accentTo: "#EC4899",
//     highlights: [
//       { icon: <Award size={13} />, text: "Certificate ID: WEB11-2694" },
//       { icon: <Code2 size={13} />, text: "60+ hours of hands-on coding" },
//     ],
//   },
// ];

// /* ─────────────────────────── Card Content ─────────────────────────── */
// interface CardContentProps {
//   item: EducationItem;
//   align: "left" | "right";
// }

// const CardContent = ({ item, align }: CardContentProps) => {
//   const isRight = align === "right";
//   return (
//     <div className="space-y-3">
//       {/* Badges */}
//       <div className={`flex flex-wrap gap-2 ${isRight ? "justify-end" : ""}`}>
//         {item.badges.map((b, idx) => (
//           <span key={idx} className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide ${b.cls}`}>
//             {b.text}
//           </span>
//         ))}
//       </div>

//       {/* Title */}
//       <h2 className={`text-lg font-black leading-tight text-white ${isRight ? "text-right" : ""}`}>
//         {item.title}
//       </h2>

//       {/* Subtitle */}
//       <p className={`text-sm font-semibold ${item.subtitleCls} ${isRight ? "text-right" : ""}`}>
//         {item.subtitle}
//       </p>

//       {/* Meta row */}
//       <div className={`flex flex-wrap gap-2 items-center ${isRight ? "justify-end" : ""}`}>
//         <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
//           <Calendar size={11} />
//           {item.meta.date}
//         </span>
//         <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.meta.badgeCls}`}>
//           {item.meta.badge}
//         </span>
//       </div>

//       {/* Divider */}
//       <div
//         className="h-px w-full rounded-full opacity-30"
//         style={{ background: `linear-gradient(to right, ${item.accentFrom}, ${item.accentTo})` }}
//       />

//       {/* Description */}
//       <p className={`text-gray-400 text-xs leading-relaxed ${isRight ? "text-right" : ""}`}>
//         {item.desc}
//       </p>

//       {/* Highlights */}
//       {item.highlights && (
//         <div className={`flex flex-col gap-1 ${isRight ? "items-end" : ""}`}>
//           {item.highlights.map((h, idx) => (
//             <div key={idx} className="flex items-center gap-1.5 text-gray-400 text-xs">
//               <span style={{ color: item.accentFrom }}>{h.icon}</span>
//               {h.text}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Tags */}
//       <div>
//         <p className={`text-[10px] font-black tracking-widest text-gray-500 mb-2 ${isRight ? "text-right" : ""}`}>
//           {item.tagsLabel}
//         </p>
//         <div className={`flex flex-wrap gap-1.5 ${isRight ? "justify-end" : ""}`}>
//           {item.tags.map((tag, idx) => (
//             <span
//               key={idx}
//               className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-white/80 border border-white/10 hover:border-white/30 transition-colors"
//               style={{ background: "rgba(255,255,255,0.06)" }}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────── Icon Node ─────────────────────────── */
// const TimelineNode = ({ item }: { item: EducationItem }) => (
//   <div className="relative flex items-center justify-center">
//     <div
//       className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-2 border-white/10"
//       style={{
//         background: `linear-gradient(135deg, ${item.accentFrom}33, ${item.accentTo}33)`,
//         boxShadow: `0 0 16px ${item.accentFrom}55, 0 0 32px ${item.accentFrom}22`,
//         borderColor: `${item.accentFrom}66`,
//       }}
//     >
//       <span style={{ color: item.accentFrom }}>{item.icon}</span>
//     </div>
//   </div>
// );

// /* ─────────────────────────── Main Component ─────────────────────────── */
// const Education = () => {
//   const timelineRef = useRef<HTMLDivElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);
//   const rocketRef = useRef<HTMLDivElement>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const progressRef = useRef(0);
//   const targetRef = useRef(0);
//   const rafRef = useRef<number | null>(null);

//   useEffect(() => {
//     const timeline = timelineRef.current;
//     const line = lineRef.current;
//     const rocket = rocketRef.current;
//     if (!timeline || !line || !rocket) return;

//     const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

//     const positionRocket = (progress: number) => {
//       const lRect = line.getBoundingClientRect();
//       const y = lRect.top + lRect.height * progress;
//       rocket.style.top = `${y}px`;
//       rocket.style.left = `${lRect.left + lRect.width / 2}px`;
//     };

//     const animateRocket = () => {
//       progressRef.current = lerp(progressRef.current, targetRef.current, 0.08);
//       positionRocket(progressRef.current);

//       const going =
//         targetRef.current > progressRef.current + 0.002
//           ? "down"
//           : targetRef.current < progressRef.current - 0.002
//             ? "up"
//             : null;

//       const body = rocket.querySelector<SVGGElement>("#rocket-body");
//       if (body) {
//         if (going === "down") gsap.to(body, { rotation: 180, duration: 0.3, ease: "power2.out" });
//         else if (going === "up") gsap.to(body, { rotation: 0, duration: 0.3, ease: "power2.out" });
//       }

//       if (Math.abs(progressRef.current - targetRef.current) > 0.0005) {
//         rafRef.current = requestAnimationFrame(animateRocket);
//       } else {
//         progressRef.current = targetRef.current;
//         positionRocket(progressRef.current);
//         rafRef.current = null;
//       }
//     };

//     const onScroll = () => {
//       const lRect = line.getBoundingClientRect();
//       const viewCenter = window.innerHeight * 0.5;
//       let p = (viewCenter - lRect.top) / lRect.height;
//       p = Math.max(0, Math.min(1, p));
//       targetRef.current = p;
//       if (!rafRef.current) rafRef.current = requestAnimationFrame(animateRocket);
//     };

//     const onResize = () => positionRocket(progressRef.current);

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onResize, { passive: true });
//     setTimeout(() => { onScroll(); ScrollTrigger.refresh(); }, 200);

//     cardRefs.current.forEach((card, i) => {
//       if (!card) return;
//       const isLeft = educationData[i].side === "left";
//       gsap.set(card, { opacity: 0, x: isLeft ? -50 : 50, y: 10, scale: 0.96 });

//       ScrollTrigger.create({
//         trigger: card,
//         start: "top 85%",
//         onEnter: () => {
//           gsap.to(card, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.65, ease: "power3.out", delay: 0.04 });
//         },
//         onLeaveBack: () => {
//           gsap.to(card, { opacity: 0, x: isLeft ? -50 : 50, y: 10, scale: 0.96, duration: 0.3, ease: "power2.in" });
//         },
//       });
//     });

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes flicker {
//           from { transform: scaleY(1) scaleX(1); opacity: 1; }
//           to   { transform: scaleY(0.6) scaleX(1.3); opacity: 0.7; }
//         }
//         .animate-flicker { animation: flicker 0.12s infinite alternate; }

//         @keyframes orbit {
//           from { transform: rotate(0deg) translateX(22px) rotate(0deg); }
//           to   { transform: rotate(360deg) translateX(22px) rotate(-360deg); }
//         }
//         .orbit-dot { animation: orbit 3s linear infinite; }

//         @keyframes shimmer {
//           0%   { background-position: -200% center; }
//           100% { background-position:  200% center; }
//         }
//         .shimmer-text {
//           background: linear-gradient(90deg, #14D296 0%, #ffffff 40%, #14D296 60%, #6366F1 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shimmer 4s linear infinite;
//         }

//         .card-glow:hover .glow-layer {
//           opacity: 1 !important;
//           transform: scale(1.02);
//         }
//         .card-glow:hover .inner-card {
//           transform: translateY(-4px);
//         }
//         .inner-card {
//           transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
//         }

//         /* Scrolling line fill effect */
//         @keyframes lineFill {
//           from { background-position: 0% 0%; }
//           to   { background-position: 0% 100%; }
//         }
//       `}</style>

//       <div className=" text-black container mx-auto overflow-hidden px-4 py-16">
//         {/* ── Header ── */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-3 mb-4">
//             <Code2 className="text-blue-500" size={32} />
//             <BlurText
//               text="Education & Experience"
//               delay={300}
//               animateBy="words"
//               direction="top"
//               className="text-3xl md:text-4xl text-gray-800 font-bold"
//             />
//             <Sparkles className="text-purple-500" size={32} />
//           </div>
//           <p className=" text-sm max-w-md mx-auto">
//             A timeline of academic milestones and professional growth
//           </p>
//         </div>

//         {/* ── Timeline ── */}
//         <div className="relative max-w-4xl mx-auto" ref={timelineRef}>

//           {/* Vertical line */}
//           <div
//             ref={lineRef}
//             className="absolute left-1/2 max-md:left-5 -translate-x-1/2 top-0 bottom-0 w-[2px]"
//             style={{
//               background: "linear-gradient(to bottom, transparent, #14D296 8%, #14D296 50%, #6366F1 92%, transparent)",
//               zIndex: 1,
//             }}
//           />

//           {/* Rocket */}
//           <div
//             ref={rocketRef}
//             className="fixed z-50 pointer-events-none"
//             style={{ transform: "translate(-50%, -50%)" }}
//           >
//             <RocketSVG />
//           </div>

//           {/* Items */}
//           {educationData.map((item, i) => {
//             const isLeft = item.side === "left";
//             return (
//               <div
//                 key={item.id}
//                 className="relative grid grid-cols-[1fr_56px_1fr] max-md:grid-cols-[44px_1fr] items-start mb-12"
//                 style={{ zIndex: 2 }}
//               >
//                 {/* ── Left slot (desktop) ── */}
//                 {isLeft ? (
//                   <div className="flex justify-end pr-5 max-md:hidden">
//                     <div className="w-full max-w-[340px]">
//                       <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase text-right mb-2">
//                         {item.label}
//                       </p>
//                       <div
//                         ref={(el) => { cardRefs.current[i] = el; }}
//                         className="card-glow relative rounded-2xl cursor-default"
//                       >

//                         {/* Border */}
//                         <div
//                           className="absolute -inset-[1px] rounded-2xl"
//                           style={{ background: `linear-gradient(135deg, ${item.accentFrom}44, ${item.accentTo}33, transparent)` }}
//                         />
//                         {/* Body */}
//                         <div className="inner-card relative z-10  rounded-2xl p-5 border border-white/5">
//                           {/* Type chip */}
//                           <div
//                             className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
//                             style={{ background: `${item.accentFrom}22`, border: `1px solid ${item.accentFrom}44` }}
//                           >
//                             <span style={{ color: item.accentFrom, opacity: 0.8, fontSize: 12 }}>{item.icon}</span>
//                           </div>
//                           <CardContent item={item} align="right" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="max-md:hidden" />
//                 )}

//                 {/* ── Center node ── */}
//                 <div className="flex justify-center items-start pt-3 max-md:col-start-1 max-md:col-end-2">
//                   <TimelineNode item={item} />
//                 </div>

//                 {/* ── Right slot (desktop) ── */}
//                 {!isLeft ? (
//                   <div className="flex justify-start pl-5 max-md:col-start-2 max-md:pl-3">
//                     <div className="w-full max-w-[340px]">
//                       <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase mb-2">
//                         {item.label}
//                       </p>
//                       <div
//                         ref={(el) => { cardRefs.current[i] = el; }}
//                         className="card-glow relative rounded-2xl cursor-default"
//                       >

//                         <div
//                           className="absolute -inset-[1px] rounded-2xl"
//                           style={{ background: `linear-gradient(135deg, ${item.accentFrom}44, ${item.accentTo}33, transparent)` }}
//                         />
//                         <div className="inner-card relative z-10  rounded-2xl p-5 border border-white/5">
//                           <div
//                             className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
//                             style={{ background: `${item.accentFrom}22`, border: `1px solid ${item.accentFrom}44` }}
//                           >
//                             <span style={{ color: item.accentFrom, opacity: 0.8, fontSize: 12 }}>{item.icon}</span>
//                           </div>
//                           <CardContent item={item} align="left" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <>
//                     {/* Mobile fallback — left cards go right on mobile */}
//                     <div className="hidden max-md:block pl-3 col-start-2">
//                       <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase mb-2">
//                         {item.label}
//                       </p>
//                       <div className="card-glow relative rounded-2xl cursor-default">
//                         <div
//                           className="glow-layer absolute -inset-[1.5px] rounded-2xl opacity-0 transition-all duration-500 blur-sm"
//                           style={{ background: `linear-gradient(135deg, ${item.accentFrom}66, ${item.accentTo}66)` }}
//                         />
//                         <div
//                           className="absolute -inset-[1px] rounded-2xl"
//                           style={{ background: `linear-gradient(135deg, ${item.accentFrom}44, ${item.accentTo}33, transparent)` }}
//                         />
//                         <div className="inner-card relative z-10 bg-[#111720] rounded-2xl p-5 border border-white/5">
//                           <div
//                             className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center"
//                             style={{ background: `${item.accentFrom}22`, border: `1px solid ${item.accentFrom}44` }}
//                           >
//                             <span style={{ color: item.accentFrom, opacity: 0.8, fontSize: 12 }}>{item.icon}</span>
//                           </div>
//                           <CardContent item={item} align="left" />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="max-md:hidden" />
//                   </>
//                 )}
//               </div>
//             );
//           })}

//           {/* Bottom cap */}
//           <div className="flex justify-center mt-4 max-md:ml-5 max-md:justify-start">
//             <div className="w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Education;
"use client";

import React, { useEffect, useRef } from "react";
import { GiOpenBook } from "react-icons/gi";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { Sparkles, MapPin, Calendar, Award, Code2, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────── Rocket SVG ─────────────────────────── */
const RocketSVG = () => (
  <svg
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    style={{ filter: "drop-shadow(0 0 12px rgba(20,210,150,0.9)) drop-shadow(0 0 24px rgba(20,210,150,0.4))" }}
  >
    <g id="rocket-body">
      <path d="M19 3 C13 10 11 17 11 23 L19 27 L27 23 C27 17 25 10 19 3Z" fill="url(#rg1)" />
      <path d="M19 3 C16 10 15 17 15 23 L19 27 L19 3Z" fill="rgba(255,255,255,0.25)" />
      <circle cx="19" cy="13" r="4" fill="#E8FFF5" stroke="#7EEECB" strokeWidth="1.2" />
      <circle cx="19" cy="13" r="2" fill="url(#rg2)" />
      <path d="M11 23 L6 27 L11 25Z" fill="#0A5E48" />
      <path d="M27 23 L32 27 L27 25Z" fill="#0A5E48" />
      <rect x="15" y="25" width="8" height="4" rx="1.5" fill="#063D30" />
      <g className="animate-flicker" style={{ transformOrigin: "19px 29px" }}>
        <path d="M15.5 29 Q17 35 19 37 Q21 35 22.5 29Z" fill="url(#fg1)" opacity="0.95" />
        <path d="M16.5 29 Q18 33 19 35 Q20 33 21.5 29Z" fill="url(#fg2)" />
      </g>
      <defs>
        <linearGradient id="rg1" x1="19" y1="3" x2="19" y2="27" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14D296" />
          <stop offset="1" stopColor="#0A7A58" />
        </linearGradient>
        <radialGradient id="rg2" cx="50%" cy="40%" r="50%">
          <stop stopColor="#B2F5E3" />
          <stop offset="1" stopColor="#14D296" />
        </radialGradient>
        <linearGradient id="fg1" x1="19" y1="29" x2="19" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF8C00" />
          <stop offset="1" stopColor="#FF4500" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fg2" x1="19" y1="29" x2="19" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD700" />
          <stop offset="1" stopColor="#FFAA00" stopOpacity="0" />
        </linearGradient>
      </defs>
    </g>
  </svg>
);

/* ─────────────────────────── Data ─────────────────────────── */
type BadgeItem = { text: string; cls: string };
type EducationItem = {
  id: string;
  side: "left" | "right";
  type: "education" | "course" | "experience";
  icon: React.ReactNode;
  label: string;
  badges: BadgeItem[];
  title: string;
  subtitle: string;
  subtitleCls: string;
  meta: { date: string; badge: string; badgeCls: string };
  desc: string;
  tagsLabel: string;
  tags: string[];
  accentFrom: string;
  accentTo: string;
  highlights?: { icon: React.ReactNode; text: string }[];
};

const educationData: EducationItem[] = [
  {
    id: "internship",
    side: "left",
    type: "experience",
    icon: <FaBriefcase size={20} />,
    label: "Work Experience",
    badges: [
      { text: "Internship", cls: "bg-amber-100 text-amber-700 border border-amber-300" },
      { text: "LIVE", cls: "bg-gradient-to-r from-rose-500 to-orange-500 text-white animate-pulse" },
    ],
    title: "Frontend Developer Intern",
    subtitle: "ReturnHex · Dhaka, Uttara",
    subtitleCls: "text-orange-600",
    meta: { date: "2024 – Present", badge: "Ongoing", badgeCls: "bg-orange-100 text-orange-700 border border-orange-300" },
    desc: "Working as a Frontend Developer Intern at ReturnHex, a dynamic tech company in Uttara, Dhaka. Collaborating with the product team to build and ship responsive web interfaces, implement UI/UX designs, and contribute to real-world client projects.",
    tagsLabel: "TECH STACK",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Git", "REST API"],
    accentFrom: "#F97316",
    accentTo: "#EF4444",
    highlights: [
      { icon: <MapPin size={13} />, text: "Uttara, Dhaka, Bangladesh" },
      { icon: <Code2 size={13} />, text: "Building production-grade UIs" },
      { icon: <Zap size={13} />, text: "Agile team collaboration" },
    ],
  },
  {
    id: "diploma",
    side: "right",
    type: "education",
    icon: <GiOpenBook size={20} />,
    label: "Currently Pursuing",
    badges: [
      { text: "Diploma", cls: "bg-emerald-100 text-emerald-700 border border-emerald-300" },
      { text: "CURRENT", cls: "bg-gradient-to-r from-indigo-500 to-violet-600 text-white" },
    ],
    title: "Diploma in Engineering",
    subtitle: "Habiganj Polytechnic Institute",
    subtitleCls: "text-teal-600",
    meta: { date: "2023 – Present", badge: "In Progress", badgeCls: "bg-indigo-100 text-indigo-700 border border-indigo-300" },
    desc: "Currently pursuing Diploma in Engineering with a focus on practical technical skills, hands-on lab work, and real-world engineering problem solving.",
    tagsLabel: "KEY SUBJECTS",
    tags: ["Engineering Fundamentals", "Technical Drawing", "Applied Sciences", "Industrial Tech"],
    accentFrom: "#14D296",
    accentTo: "#6366F1",
    highlights: [
      { icon: <Award size={13} />, text: "Full-time program" },
      { icon: <Calendar size={13} />, text: "Expected graduation 2026" },
    ],
  },
  {
    id: "ssc",
    side: "left",
    type: "education",
    icon: <GiOpenBook size={20} />,
    label: "SSC",
    badges: [
      { text: "SSC", cls: "bg-sky-100 text-sky-700 border border-sky-300" },
      { text: "GPA 5.00", cls: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" },
    ],
    title: "Secondary School Certificate",
    subtitle: "Habiganj Technical School And College",
    subtitleCls: "text-sky-600",
    meta: { date: "2021 – 2023", badge: "GPA 5.00 / 5.00", badgeCls: "bg-emerald-100 text-emerald-700 border border-emerald-300" },
    desc: "Achieved perfect GPA in SSC with deep interest in Science and Mathematics. Built a strong foundation in analytical thinking and problem-solving skills.",
    tagsLabel: "KEY SUBJECTS",
    tags: ["Science", "Mathematics", "English", "Bengali"],
    accentFrom: "#0EA5E9",
    accentTo: "#14D296",
    highlights: [
      { icon: <Award size={13} />, text: "Perfect GPA — 5.00 / 5.00" },
      { icon: <Zap size={13} />, text: "Science stream with distinction" },
    ],
  },
  {
    id: "webdev",
    side: "right",
    type: "course",
    icon: <FaGraduationCap size={20} />,
    label: "Certification",
    badges: [
      { text: "Web Development", cls: "bg-violet-100 text-violet-700 border border-violet-300" },
      { text: "Batch 11", cls: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white" },
    ],
    title: "Complete Web Development",
    subtitle: "MD. Shakib Khan Noyon · WEB11-2694",
    subtitleCls: "text-violet-600",
    meta: { date: "Completed", badge: "Certified", badgeCls: "bg-violet-100 text-violet-700 border border-violet-300" },
    desc: "Successfully completed the Complete Web Development course covering modern frontend and backend technologies — from fundamentals to advanced React patterns.",
    tagsLabel: "SKILLS GAINED",
    tags: ["JavaScript", "HTML5", "CSS3", "React", "Node.js", "MongoDB"],
    accentFrom: "#8B5CF6",
    accentTo: "#EC4899",
    highlights: [
      { icon: <Award size={13} />, text: "Certificate ID: WEB11-2694" },
      { icon: <Code2 size={13} />, text: "60+ hours of hands-on coding" },
    ],
  },
];

/* ─────────────────────────── Card Content ─────────────────────────── */
interface CardContentProps {
  item: EducationItem;
  align: "left" | "right";
}

const CardContent = ({ item, align }: CardContentProps) => {
  const isRight = align === "right";
  return (
    <div className="space-y-3">
      {/* Badges */}
      <div className={`flex flex-wrap gap-2 ${isRight ? "justify-end" : ""}`}>
        {item.badges.map((b, idx) => (
          <span key={idx} className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide ${b.cls}`}>
            {b.text}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className={`text-lg font-black leading-tight text-gray-800 ${isRight ? "text-right" : ""}`}>
        {item.title}
      </h2>

      {/* Subtitle */}
      <p className={`text-sm font-semibold ${item.subtitleCls} ${isRight ? "text-right" : ""}`}>
        {item.subtitle}
      </p>

      {/* Meta row */}
      <div className={`flex flex-wrap gap-2 items-center ${isRight ? "justify-end" : ""}`}>
        <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
          <Calendar size={11} />
          {item.meta.date}
        </span>
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${item.meta.badgeCls}`}>
          {item.meta.badge}
        </span>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full rounded-full opacity-50"
        style={{ background: `linear-gradient(to right, ${item.accentFrom}, ${item.accentTo})` }}
      />

      {/* Description */}
      <p className={`text-gray-600 text-xs leading-relaxed ${isRight ? "text-right" : ""}`}>
        {item.desc}
      </p>

      {/* Highlights */}
      {item.highlights && (
        <div className={`flex flex-col gap-1 ${isRight ? "items-end" : ""}`}>
          {item.highlights.map((h, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-gray-500 text-xs">
              <span style={{ color: item.accentFrom }}>{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div>
        <p className={`text-[10px] font-black tracking-widest text-gray-400 mb-2 ${isRight ? "text-right" : ""}`}>
          {item.tagsLabel}
        </p>
        <div className={`flex flex-wrap gap-1.5 ${isRight ? "justify-end" : ""}`}>
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-gray-700 bg-gray-100 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── Icon Node ─────────────────────────── */
const TimelineNode = ({ item }: { item: EducationItem }) => (
  <div className="relative flex items-center justify-center">
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-2 bg-white shadow-md"
      style={{
        background: `white`,
        boxShadow: `0 0 16px ${item.accentFrom}55, 0 0 32px ${item.accentFrom}22`,
        borderColor: `${item.accentFrom}66`,
      }}
    >
      <span style={{ color: item.accentFrom }}>{item.icon}</span>
    </div>
  </div>
);

/* ─────────────────────────── Main Component ─────────────────────────── */
const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;
    const rocket = rocketRef.current;
    if (!timeline || !line || !rocket) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const positionRocket = (progress: number) => {
      const lRect = line.getBoundingClientRect();
      const y = lRect.top + lRect.height * progress;
      rocket.style.top = `${y}px`;
      rocket.style.left = `${lRect.left + lRect.width / 2}px`;
    };

    const animateRocket = () => {
      progressRef.current = lerp(progressRef.current, targetRef.current, 0.08);
      positionRocket(progressRef.current);

      const going =
        targetRef.current > progressRef.current + 0.002
          ? "down"
          : targetRef.current < progressRef.current - 0.002
            ? "up"
            : null;

      const body = rocket.querySelector<SVGGElement>("#rocket-body");
      if (body) {
        gsap.set(body, {
          transformOrigin: "50% 50%",
        });

        if (going === "down") {
          gsap.to(body, {
            rotation: 180,
            duration: 0.3,
            ease: "power2.out",
          });
        } else if (going === "up") {
          gsap.to(body, {
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }

      if (Math.abs(progressRef.current - targetRef.current) > 0.0005) {
        rafRef.current = requestAnimationFrame(animateRocket);
      } else {
        progressRef.current = targetRef.current;
        positionRocket(progressRef.current);
        rafRef.current = null;
      }
    };

    const onScroll = () => {
      const lRect = line.getBoundingClientRect();
      const viewCenter = window.innerHeight * 0.5;
      let p = (viewCenter - lRect.top) / lRect.height;
      p = Math.max(0, Math.min(1, p));
      targetRef.current = p;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animateRocket);
    };

    const onResize = () => positionRocket(progressRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    setTimeout(() => { onScroll(); ScrollTrigger.refresh(); }, 200);

    // Set fixed card width for consistency
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const isLeft = educationData[i].side === "left";
      gsap.set(card, { opacity: 0, x: isLeft ? -40 : 40, y: 15, scale: 0.95 });

      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        onEnter: () => {
          gsap.to(card, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.05 });
        },
        onLeaveBack: () => {
          gsap.to(card, { opacity: 0, x: isLeft ? -40 : 40, y: 15, scale: 0.95, duration: 0.3, ease: "power2.in" });
        },
      });
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes flicker {
          from { transform: scaleY(1) scaleX(1); opacity: 1; }
          to   { transform: scaleY(0.6) scaleX(1.3); opacity: 0.7; }
        }
        .animate-flicker { animation: flicker 0.12s infinite alternate; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #14D296 0%, #1e293b 40%, #14D296 60%, #6366F1 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      <div className="bg-gray-50 min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-6xl overflow-hidden">
          {/* ── Header ── */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <Code2 className="text-blue-500" size={32} />
              <h1 className="text-3xl md:text-4xl text-gray-800 font-bold shimmer-text">
                Education & Experience
              </h1>
              <Sparkles className="text-purple-500" size={32} />
            </div>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              A timeline of academic milestones and professional growth
            </p>
          </div>

          {/* ── Timeline ── */}
          <div className="relative max-w-5xl mx-auto" ref={timelineRef}>
            {/* Vertical line - BLACK */}
            <div
              ref={lineRef}
              className="absolute left-1/2 max-md:left-6 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-black"
              style={{ zIndex: 1 }}
            />

            {/* Rocket */}
            <div
              ref={rocketRef}
              className="fixed z-50 pointer-events-none"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <RocketSVG />
            </div>

            {/* Timeline Items */}
            {educationData.map((item, i) => {
              const isLeft = item.side === "left";
              return (
                <div
                  key={item.id}
                  className="relative grid grid-cols-[1fr_60px_1fr] max-md:grid-cols-[48px_1fr] items-start mb-10"
                  style={{ zIndex: 2 }}
                >
                  {/* Left side card (desktop) */}
                  {isLeft ? (
                    <div className="flex justify-end pr-6 max-md:hidden">
                      <div className="w-full max-w-[360px] min-w-[280px]">
                        <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase text-right mb-2">
                          {item.label}
                        </p>
                        <div
                          ref={(el) => { cardRefs.current[i] = el; }}
                          className="bg-white rounded-xl shadow-lg border border-gray-100 card-hover cursor-default overflow-hidden"
                        >
                          <div className="p-5">
                            <CardContent item={item} align="right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="max-md:hidden" />
                  )}

                  {/* Center node */}
                  <div className="flex justify-center items-start pt-3 max-md:col-start-1 max-md:col-end-2">
                    <TimelineNode item={item} />
                  </div>

                  {/* Right side card (desktop) */}
                  {!isLeft ? (
                    <div className="flex justify-start pl-6 max-md:col-start-2 max-md:pl-3">
                      <div className="w-full max-w-[360px] min-w-[280px]">
                        <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                          {item.label}
                        </p>
                        <div
                          ref={(el) => { cardRefs.current[i] = el; }}
                          className="bg-white rounded-xl shadow-lg border border-gray-100 card-hover cursor-default overflow-hidden"
                        >
                          <div className="p-5">
                            <CardContent item={item} align="left" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="max-md:hidden" />
                  )}

                  {/* Mobile view - all cards on right side of line */}
                  <div className="hidden max-md:block pl-3 col-start-2">
                    <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                      {item.label}
                    </p>
                    <div
                      ref={(el) => {
                        if (cardRefs.current[i] === undefined) cardRefs.current[i] = el;
                        else cardRefs.current[i] = el;
                      }}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 card-hover cursor-default overflow-hidden"
                    >
                      <div className="p-5">
                        <CardContent item={item} align="left" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom cap */}
            <div className="flex justify-center mt-6 max-md:ml-6 max-md:justify-start">
              <div className="w-4 h-4 rounded-full bg-black ring-4 ring-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;