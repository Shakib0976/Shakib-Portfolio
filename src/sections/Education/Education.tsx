"use client";

import React, { useEffect, useRef } from "react";
import { GiOpenBook } from "react-icons/gi";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { Sparkles, Calendar, Code2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────── Rocket SVG ─────────────────────────── */
const RocketSVG = () => (
  <svg
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.45))" }}
  >
    <g id="rocket-body">
      <path d="M19 3 C13 10 11 17 11 23 L19 27 L27 23 C27 17 25 10 19 3Z" fill="#1a1a1a" />
      <path d="M19 3 C16 10 15 17 15 23 L19 27 L19 3Z" fill="rgba(255,255,255,0.2)" />
      <circle cx="19" cy="13" r="4" fill="#F5F5F5" stroke="#000" strokeWidth="1" />
      <circle cx="19" cy="13" r="2" fill="#666" />
      <path d="M11 23 L6 27 L11 25Z" fill="#000" />
      <path d="M27 23 L32 27 L27 25Z" fill="#000" />
      <rect x="15" y="25" width="8" height="4" rx="1.5" fill="#000" />
      <g className="animate-flicker" style={{ transformOrigin: "19px 29px" }}>
        <path d="M15.5 29 Q17 35 19 37 Q21 35 22.5 29Z" fill="#999" opacity="0.9" />
        <path d="M16.5 29 Q18 33 19 35 Q20 33 21.5 29Z" fill="#ccc" />
      </g>
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
  meta: { date: string; badge: string; badgeCls: string };
  desc: string;
  tags: string[];
};

const LIGHT_BADGE = "bg-gray-100 text-gray-700 border border-gray-300";
const DARK_BADGE = "bg-black text-white";

const educationData: EducationItem[] = [
  {
    id: "internship",
    side: "left",
    type: "experience",
    icon: <FaBriefcase size={18} />,
    label: "Work Experience",
    badges: [
      { text: "Internship", cls: LIGHT_BADGE },
      { text: "LIVE", cls: `${DARK_BADGE} animate-pulse` },
    ],
    title: "Frontend Developer Intern",
    subtitle: "ReturnHex · Dhaka, Uttara",
    meta: { date: "2024 – Present", badge: "Ongoing", badgeCls: LIGHT_BADGE },
    desc: "Working as a Frontend Developer Intern at ReturnHex, a dynamic tech company in Uttara, Dhaka. Collaborating with the product team to build and ship responsive web interfaces, implement UI/UX designs, and contribute to real-world client projects.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Git", "REST API"],
  }
  ,
  {
    id: "webdev",
    side: "right",
    type: "course",
    icon: <FaGraduationCap size={18} />,
    label: "Certification",
    badges: [
      { text: "Web Development", cls: LIGHT_BADGE },
      { text: "Batch 11", cls: DARK_BADGE },
    ],
    title: "Complete Web Development",
    subtitle: "MD. Shakib Khan Noyon · WEB11-2694",
    meta: { date: "Completed", badge: "Certified", badgeCls: LIGHT_BADGE },
    desc: "Successfully completed the Complete Web Development course covering modern frontend and backend technologies — from fundamentals to advanced React patterns.",
    tags: ["JavaScript", "HTML5", "CSS3", "React", "Node.js", "MongoDB"],
  },
  {
    id: "diploma",
    side: "left",
    type: "education",
    icon: <GiOpenBook size={18} />,
    label: "Currently Pursuing",
    badges: [
      { text: "Diploma", cls: LIGHT_BADGE },
      { text: "CURRENT", cls: DARK_BADGE },
    ],
    title: "Diploma in Engineering",
    subtitle: "Habiganj Polytechnic Institute",
    meta: { date: "2023 – Present", badge: "In Progress", badgeCls: LIGHT_BADGE },
    desc: "Currently pursuing Diploma in Engineering with a focus on practical technical skills, hands-on lab work, and real-world engineering problem solving.",
    tags: ["Engineering Fundamentals", "Technical Drawing", "Applied Sciences", "Industrial Tech"],
  }
];

/* ─────────────────────────── 3D Timeline Card ─────────────────────────── */
interface TimelineCardProps {
  item: EducationItem;
  align: "left" | "right";
  cardRef: (el: HTMLDivElement | null) => void;
}

const TimelineCard = ({ item, align, cardRef }: TimelineCardProps) => {
  const isRight = align === "right";
  const cardElRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  // GSAP 3D tilt + light-shine that tracks the cursor (monochrome shadow only)
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardElRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(el, { rotateY: px * 12, rotateX: py * -12, duration: 0.5, ease: "power2.out" });
    gsap.to(shineRef.current, {
      x: e.clientX - rect.left - 100,
      y: e.clientY - rect.top - 100,
      opacity: 0.35,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const onMouseEnter = () => {
    gsap.to(cardElRef.current, {
      scale: 1.03,
      boxShadow: "0 24px 45px -18px rgba(0,0,0,0.35)",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardElRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 6px 16px -6px rgba(0,0,0,0.12)",
      duration: 0.7,
      ease: "elastic.out(1, 0.6)",
    });
    gsap.to(shineRef.current, { opacity: 0, duration: 0.4 });
  };

  return (
    <div className={`w-full max-w-[360px] min-w-[280px] ${isRight ? "text-right" : ""}`} style={{ perspective: 900 }}>
      <p className={`mb-2 text-[10px] font-black uppercase tracking-widest text-gray-500 ${isRight ? "text-right" : ""}`}>
        {item.label}
      </p>

      <div
        ref={(el) => { cardElRef.current = el; cardRef(el); }}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white will-change-transform"
        style={{ transformStyle: "preserve-3d", boxShadow: "0 6px 16px -6px rgba(0,0,0,0.12)" }}
      >
        {/* cursor-tracked light shine */}
        <div
          ref={shineRef}
          className="pointer-events-none absolute top-0 left-0 h-52 w-52 rounded-full bg-white opacity-0 blur-2xl"
          style={{ mixBlendMode: "overlay" }}
        />

        {/* solid black accent bar */}
        <div className="h-1.5 w-full bg-black" />

        <div className="relative space-y-4 p-5" style={{ transform: "translateZ(24px)" }}>
          {/* icon + badges */}
          <div className={`flex items-center gap-2 ${isRight ? "flex-row-reverse" : ""}`}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-800">
              {item.icon}
            </div>
            <div className={`flex flex-wrap gap-2 ${isRight ? "justify-end" : ""}`}>
              {item.badges.map((badge, i) => (
                <Badge key={i} className={badge.cls}>{badge.text}</Badge>
              ))}
            </div>
          </div>

          {/* title + subtitle */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="text-sm font-medium text-gray-600">{item.subtitle}</p>
          </div>

          {/* meta */}
          <div className={`flex flex-wrap items-center gap-2 text-sm text-gray-500 ${isRight ? "justify-end" : ""}`}>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {item.meta.date}
            </span>
            <Badge className={item.meta.badgeCls}>{item.meta.badge}</Badge>
          </div>

          <Separator />

          {/* short description, capped to 2 lines */}
          <p className="line-clamp-2 text-sm leading-6 text-gray-600">{item.desc}</p>

          {/* tags, capped to 3 with a "+N" overflow chip */}
          <div className={`flex flex-wrap gap-2 ${isRight ? "justify-end" : ""}`}>
            {item.tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="outline">{tag}</Badge>
            ))}
            {item.tags.length > 3 && (
              <Badge variant="outline">+{item.tags.length - 3}</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────── Icon Node ─────────────────────────── */
const TimelineNode = ({ item }: { item: EducationItem }) => (
  <div className="relative flex items-center justify-center">
    <div
      className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-800 shadow-md"
      style={{ boxShadow: "0 0 14px rgba(0,0,0,0.18), 0 0 28px rgba(0,0,0,0.08)" }}
    >
      {item.icon}
    </div>
  </div>
);

/* ─────────────────────────── Main Component ─────────────────────────── */
const Education = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<{ el: HTMLDivElement; isLeft: boolean }[]>([]);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const registerReveal = (el: HTMLDivElement | null, isLeft: boolean) => {
    if (el && !revealRefs.current.some((c) => c.el === el)) {
      revealRefs.current.push({ el, isLeft });
    }
  };

  useEffect(() => {
    const line = lineRef.current;
    const rocket = rocketRef.current;
    if (!line || !rocket) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const positionRocket = (progress: number) => {
      const rect = line.getBoundingClientRect();
      rocket.style.top = `${rect.top + rect.height * progress}px`;
      rocket.style.left = `${rect.left + rect.width / 2}px`;
    };

    const animateRocket = () => {
      progressRef.current = lerp(progressRef.current, targetRef.current, 0.08);
      positionRocket(progressRef.current);

      const body = rocket.querySelector<SVGGElement>("#rocket-body");
      if (body) {
        const goingDown = targetRef.current > progressRef.current + 0.002;
        const goingUp = targetRef.current < progressRef.current - 0.002;
        if (goingDown) gsap.to(body, { rotation: 180, duration: 0.3, ease: "power2.out", transformOrigin: "50% 50%" });
        else if (goingUp) gsap.to(body, { rotation: 0, duration: 0.3, ease: "power2.out", transformOrigin: "50% 50%" });
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
      const rect = line.getBoundingClientRect();
      const viewCenter = window.innerHeight * 0.5;
      targetRef.current = Math.max(0, Math.min(1, (viewCenter - rect.top) / rect.height));
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animateRocket);
    };

    const onResize = () => positionRocket(progressRef.current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    setTimeout(() => { onScroll(); ScrollTrigger.refresh(); }, 200);

    // Scroll-reveal for every card (desktop + mobile variants)
    revealRefs.current.forEach(({ el, isLeft }) => {
      gsap.set(el, { opacity: 0, x: isLeft ? -40 : 40, y: 15, scale: 0.95 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => gsap.to(el, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.05 }),
        onLeaveBack: () => gsap.to(el, { opacity: 0, x: isLeft ? -40 : 40, y: 15, scale: 0.95, duration: 0.3, ease: "power2.in" }),
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
      `}</style>

      <div className="min-h-screen bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-6xl overflow-hidden">
          {/* Header */}
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-3">
              <Code2 className="text-gray-800" size={32} />
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Education & Experience
              </h1>
              <Sparkles className="text-gray-800" size={32} />
            </div>
            <p className="mx-auto max-w-md text-sm text-gray-600">
              A timeline of academic milestones and professional growth
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            <div
              ref={lineRef}
              className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-black max-md:left-6"
              style={{ zIndex: 1 }}
            />

            <div ref={rocketRef} className="fixed z-50 pointer-events-none" style={{ transform: "translate(-50%, -50%)" }}>
              <RocketSVG />
            </div>

            {educationData.map((item) => {
              const isLeft = item.side === "left";
              return (
                <div
                  key={item.id}
                  className="relative mb-10 grid grid-cols-[1fr_60px_1fr] items-start max-md:grid-cols-[48px_1fr]"
                  style={{ zIndex: 2 }}
                >
                  {/* Desktop left slot */}
                  <div className={`max-md:hidden ${isLeft ? "flex justify-end pr-6" : ""}`}>
                    {isLeft && (
                      <TimelineCard item={item} align="right" cardRef={(el) => registerReveal(el, true)} />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="flex items-start justify-center pt-3 max-md:col-start-1 max-md:col-end-2">
                    <TimelineNode item={item} />
                  </div>

                  {/* Desktop right slot */}
                  <div className={`max-md:hidden ${!isLeft ? "flex justify-start pl-6" : ""}`}>
                    {!isLeft && (
                      <TimelineCard item={item} align="left" cardRef={(el) => registerReveal(el, false)} />
                    )}
                  </div>

                  {/* Mobile: always on the right of the line */}
                  <div className="col-start-2 hidden pl-3 max-md:block">
                    <TimelineCard item={item} align="left" cardRef={(el) => registerReveal(el, false)} />
                  </div>
                </div>
              );
            })}

            {/* Bottom cap */}
            <div className="mt-6 flex justify-center max-md:ml-6 max-md:justify-start">
              <div className="h-4 w-4 rounded-full bg-black ring-4 ring-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;