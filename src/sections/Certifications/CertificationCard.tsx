// components/CertificationsSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Certification } from '@/Types/Types';
import CertificationCard from '@/components/CErtification/CertificationCard';
import CertificationModal from '@/components/CErtification/CertificationModal';
import { Code2, Sparkles } from 'lucide-react';

const certifications: Certification[] = [
  {
    id: 'web-dev-01',
    title: 'Web Development',
    issuer: 'Programming Hero',
    date: 'October2025',
    description: 'Hands-on training in React, Node.js, MongoDB, and deployment workflows.',
    image: '/Programming.png',
    category: 'web-development',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    credentialUrl: 'https://www.coursera.org',
    fullDescription:
      'Completed an intensive full-stack course building dynamic web applications with React, Next.js, Express, and MongoDB in a production-style workflow.',
  },
  {
    id: 'internship-01',
    title: 'Frontend Internship',
    issuer: 'ReturnHex',
    date: 'October 2025 - April 2026',
    description: 'Practical experience working on responsive UI, accessibility, and real-world product features.',
    image: '/Intern.png',
    category: 'internship',
    skills: ['HTML', 'CSS', 'JavaScript'],
    credentialUrl: 'https://www.example.com',
    fullDescription:
      'Served as a frontend intern delivering production-ready components, improving UI performance, and collaborating with cross-functional teams.',
  },
  {
    id: 'diploma-01',
    title: 'Diploma in Computer Engineering',
    issuer: 'Habiganj Polytechnic Institute',
    date: 'Ongoing',
    description: 'Professional diploma focused on engineering fundamentals, embedded systems, and software development.',
    image: '/Diploma.png',
    category: 'diploma',
    skills: ['Programming', 'Problem Solving', 'Digital Logic'],
    fullDescription:
      'Pursuing a diploma program that emphasizes practical lab work, , software engineering, and real-world problem solving.',
  },
];

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate section title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  }, []);

  const visibleCertifications = certifications;

  const handleReview = (certification: Certification) => {
    setSelectedCert(certification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section ref={sectionRef} className="">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <Code2 className="text-blue-500" size={32} />
            <h1 className="text-3xl md:text-4xl text-gray-800 font-bold shimmer-text">
              My Certifications
            </h1>
            <Sparkles className="text-purple-500" size={32} />
          </div>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Showcasing my professional certifications and achievements
          </p>
        </div>


        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              onReview={handleReview}
            />
          ))}
        </div>

        {/* Empty State */}
        {visibleCertifications.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No certifications found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificationModal
          certification={selectedCert}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}


// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';
// import { Code2, Sparkles, ArrowUpRight } from 'lucide-react';
// import { Certification } from '@/Types/Types';
// import { Badge } from '@/components/ui/badge';
// import { BorderBeam } from '@/components/ui/border-beam';
// import CertificationModal from '@/components/CErtification/CertificationModal';

// /* ----------------------------------------------------------------------
//  * Data
//  * ------------------------------------------------------------------- */

// const certifications: Certification[] = [
//   {
//     id: 'web-dev-01',
//     title: 'Web Development',
//     issuer: 'Programming Hero',
//     date: 'October2025',
//     description:
//       'Hands-on training in React, Node.js, MongoDB, and deployment workflows.',
//     image: '/Programming.png',
//     category: 'web-development',
//     skills: ['React', 'Next.js', 'Node.js', 'MongoDB'],
//     credentialUrl: 'https://www.coursera.org',
//     fullDescription:
//       'Completed an intensive full-stack course building dynamic web applications with React, Next.js, Express, and MongoDB in a production-style workflow.',
//   },
//   {
//     id: 'internship-01',
//     title: 'Frontend Internship',
//     issuer: 'ReturnHex',
//     date: 'October 2025 - April 2026',
//     description:
//       'Practical experience working on responsive UI, accessibility, and real-world product features.',
//     image: '/Intern.png',
//     category: 'internship',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     credentialUrl: 'https://www.example.com',
//     fullDescription:
//       'Served as a frontend intern delivering production-ready components, improving UI performance, and collaborating with cross-functional teams.',
//   },
//   {
//     id: 'diploma-01',
//     title: 'Diploma in Computer Engineering',
//     issuer: 'Habiganj Polytechnic Institute',
//     date: 'Ongoing',
//     description:
//       'Professional diploma focused on engineering fundamentals, embedded systems, and software development.',
//     image: '/Diploma.png',
//     category: 'diploma',
//     skills: ['Programming', 'Problem Solving', 'Digital Logic'],
//     fullDescription:
//       'Pursuing a diploma program that emphasizes practical lab work, software engineering, and real-world problem solving.',
//   },
// ];

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// /* ----------------------------------------------------------------------
//  * Types for the carousel engine
//  * ------------------------------------------------------------------- */

// interface Breakpoint {
//   mq: string;
//   gap: number;
//   peek: number;
//   rotateY: number;
//   zDepth: number;
//   scaleDrop: number;
// }

// interface CertCarouselOptions {
//   gap?: number;
//   peek?: number;
//   rotateY?: number;
//   zDepth?: number;
//   scaleDrop?: number;
//   blurMax?: number;
//   interval?: number;
//   transitionMs?: number;
//   keyboard?: boolean;
//   breakpoints?: Breakpoint[];
// }

// interface CertCarouselState {
//   index: number;
//   pos: number;
//   width: number;
//   gap: number;
//   dragging: boolean;
//   pointerId: number | null;
//   x0: number;
//   v: number;
//   t0: number;
//   animating: boolean;
//   hovering: boolean;
//   startTime: number;
//   pausedAt: number;
//   rafId: number;
// }

// /* ----------------------------------------------------------------------
//  * Inline CSS — light theme, glassmorphism, teal / cyan / purple accents
//  * ------------------------------------------------------------------- */

// const certCarouselCss = `
// .certCarouselSection { width: 100%; max-width: 1550px; margin-inline: auto; padding-inline: 20px; padding-block: 24px; }
// @media (min-width: 640px) { .certCarouselSection { padding-inline: 32px; padding-block: 32px; } }
// @media (min-width: 1024px) { .certCarouselSection { padding-inline: 48px; padding-block: 48px; } }
// @media (min-width: 1440px) { .certCarouselSection { padding-inline: 64px; padding-block: 64px; } }
// .certCarousel, .certCarousel * { box-sizing: border-box; }
// .certCarousel {
//   --certC-slideW: min(400px, 78%);
//   --certPagH: 56px;
//   --certCardH: clamp(400px, 62vh, 560px);
//   position: relative;
//   width: 100%;
//   height: clamp(480px, 74vh, 700px);
//   max-width: 100%;
//   margin: 0 auto;
//   padding: 0 18px;
//   overflow: hidden;
//   contain: layout paint;
//   touch-action: none;
// }
// .certCarousel-viewport { position: relative; outline: none; overflow: hidden; height: 100%; }
// .certCarousel-track {
//   position: relative;
//   height: calc(100% - var(--certPagH) - 12px);
//   transform-style: preserve-3d;
//   perspective: 1400px;
//   overflow: visible;
// }
// .certCarousel-slide {
//   position: absolute;
//   top: calc(50% + 5px);
//   left: 50%;
//   width: var(--certC-slideW);
//   height: min(var(--certCardH), calc(100% - 20px));
//   transform-style: preserve-3d;
//   display: flex;
//   will-change: transform, filter, opacity;
//   transition: opacity 500ms cubic-bezier(0.2, 0.7, 0, 1);
// }
// .certCard-box {
//   position: relative;
//   flex: 1 1 auto;
//   width: 100%;
//   min-height: 0;
//   border-radius: 20px;
//   overflow: hidden;
//   background: linear-gradient(155deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45));
//   border: 1px solid rgba(255,255,255,0.6);
//   box-shadow: 0 20px 45px -12px rgba(20, 184, 166, 0.25), 0 8px 20px -8px rgba(168, 85, 247, 0.18);
//   backdrop-filter: blur(14px) saturate(150%);
//   -webkit-backdrop-filter: blur(14px) saturate(150%);
//   cursor: grab;
//   display: flex;
//   flex-direction: column;
// }
// .certCard-imageWrap {
//   position: relative;
//   width: 100%;
//   flex: 0 0 42%;
//   overflow: hidden;
//   background: linear-gradient(135deg, rgba(45,212,191,0.18), rgba(139,92,246,0.18));
// }
// .certCard-imageWrap img { object-fit: cover; object-position: top; }
// .certCard-badge { position: absolute; top: 12px; right: 12px; z-index: 2; }
// .certCard-body { flex: 1 1 auto; min-height: 0; padding: 16px 18px; display: flex; flex-direction: column; overflow: hidden; }
// .certCard-title {
//   margin: 0 0 2px 0;
//   font-weight: 700;
//   font-size: clamp(16px, 1.6vw, 19px);
//   color: #0f172a;
//   line-height: 1.25;
// }
// .certCard-issuer { margin: 0; font-size: 13px; font-weight: 500; color: #0d9488; }
// .certCard-date { margin: 2px 0 8px 0; font-size: 11.5px; color: #64748b; }
// .certCard-desc {
//   margin: 0;
//   font-size: 13px;
//   line-height: 1.5;
//   color: #475569;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
// }
// .certReviewLink {
//   flex: 0 0 auto;
//   position: relative;
//   z-index: 2;
//   appearance: none;
//   border: none;
//   border-top: 1px solid rgba(100, 116, 139, 0.15);
//   background: transparent;
//   width: 100%;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 6px;
//   margin: 0;
//   padding: 10px 4px 12px 4px;
//   font-size: 13.5px;
//   font-weight: 600;
//   cursor: pointer;
//   background-image: linear-gradient(90deg, #14b8a6, #06b6d4, #a855f7);
//   background-clip: text;
//   -webkit-background-clip: text;
//   color: transparent;
//   transition: transform 0.2s ease, opacity 0.2s ease;
// }
// .certReviewLink svg { stroke: #06b6d4; transition: transform 0.2s ease; }
// .certReviewLink:hover { transform: translateY(-1px); }
// .certReviewLink:hover svg { transform: translate(2px, -2px); }
// .certReviewLink:active { transform: translateY(0px); }
// .certCarousel-slide[data-state="active"] .certCard-box {
//   box-shadow: 0 28px 60px -14px rgba(20, 184, 166, 0.35), 0 10px 26px -8px rgba(168, 85, 247, 0.25);
// }
// .certCarousel-controls { position: absolute; inset: 0; display: flex; align-items: center; justify-content: space-between; pointer-events: none; }
// .certCarousel-prev, .certCarousel-next {
//   pointer-events: auto;
//   position: relative;
//   width: 42px;
//   height: 42px;
//   border-radius: 50%;
//   border: 1px solid rgba(255,255,255,0.6);
//   background: rgba(255,255,255,0.55);
//   backdrop-filter: blur(8px);
//   color: #0f172a;
//   font-size: 20px;
//   display: grid;
//   place-items: center;
//   cursor: pointer;
//   box-shadow: 0 6px 18px rgba(20,184,166,0.15);
//   transition: background 0.2s ease, transform 0.2s ease;
//   z-index: 1001;
// }
// .certCarousel-prev { margin-left: 4px; }
// .certCarousel-next { margin-right: 4px; }
// .certCarousel-prev:hover, .certCarousel-next:hover { background: rgba(255,255,255,0.85); }
// .certCarousel-prev:active, .certCarousel-next:active { transform: scale(0.96); }
// .certCarousel-pagination {
//   position: absolute;
//   left: 0; right: 0; bottom: 14px;
//   display: flex;
//   gap: 8px;
//   justify-content: center;
//   align-items: center;
//   pointer-events: auto;
//   z-index: 1001;
// }
// .certCarousel-dot {
//   width: 10px; height: 10px;
//   border-radius: 999px;
//   background: rgba(100, 116, 139, 0.3);
//   border: 0;
//   cursor: pointer;
//   transition: transform 0.2s ease, background 0.2s ease;
// }
// .certCarousel-dot[aria-selected="true"] {
//   background: linear-gradient(90deg, #14b8a6, #a855f7);
//   transform: scale(1.35);
// }
// .certCarousel-progress { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: rgba(100,116,139,0.12); z-index: 999; overflow: hidden; }
// .certCarousel-progressBar {
//   display: block; height: 100%; width: 100%;
//   transform-origin: left; transform: scaleX(0); will-change: transform;
//   background: linear-gradient(90deg, #14b8a6, #06b6d4, #a855f7);
// }
// @media (max-width: 1000px) { .certCarousel { --certC-slideW: min(88vw, 380px); } }
// @media (max-width: 560px) { .certCarousel { --certC-slideW: min(92vw, 340px); } }
// `;

// /* ----------------------------------------------------------------------
//  * Carousel engine — same drag / snap / autoplay / coverflow behaviour
//  * as the PersonalProject slider, adapted for the certification cards.
//  * ------------------------------------------------------------------- */

// class CertCarouselEngine {
//   root: HTMLElement;
//   viewport: HTMLElement;
//   prevBtn: HTMLButtonElement;
//   nextBtn: HTMLButtonElement;
//   pagination: HTMLElement;
//   progressBar: HTMLElement;
//   n: number;
//   slides: HTMLElement[];
//   state: CertCarouselState;
//   opts: Required<CertCarouselOptions>;
//   dots: HTMLButtonElement[] = [];
//   ro!: ResizeObserver;
//   slideW = 0;
//   private _mqHandlers: { mq: MediaQueryList; fn: () => void }[] = [];
//   private _onResize = () => setTimeout(() => this._measure(), 200);

//   constructor(root: HTMLElement, opts: CertCarouselOptions = {}) {
//     this.root = root;
//     this.viewport = root.querySelector('.certCarousel-viewport') as HTMLElement;
//     this.slides = Array.from(root.querySelectorAll<HTMLElement>('.certCarousel-slide'));
//     this.prevBtn = root.querySelector('.certCarousel-prev') as HTMLButtonElement;
//     this.nextBtn = root.querySelector('.certCarousel-next') as HTMLButtonElement;
//     this.pagination = root.querySelector('.certCarousel-pagination') as HTMLElement;
//     this.progressBar = root.querySelector('.certCarousel-progressBar') as HTMLElement;
//     this.n = this.slides.length;
//     this.state = {
//       index: 0, pos: 0, width: 0, gap: 24,
//       dragging: false, pointerId: null, x0: 0, v: 0, t0: 0,
//       animating: false, hovering: false, startTime: 0, pausedAt: 0, rafId: 0,
//     };
//     this.opts = Object.assign(
//       {
//         gap: 24, peek: 0.24, rotateY: 24, zDepth: 140, scaleDrop: 0.14,
//         blurMax: 1, interval: 4500, transitionMs: 800, keyboard: true,
//         breakpoints: [
//           { mq: '(max-width: 1200px)', gap: 20, peek: 0.2, rotateY: 20, zDepth: 110, scaleDrop: 0.13 },
//           { mq: '(max-width: 1000px)', gap: 16, peek: 0.15, rotateY: 16, zDepth: 90, scaleDrop: 0.12 },
//           { mq: '(max-width: 768px)', gap: 12, peek: 0.1, rotateY: 12, zDepth: 70, scaleDrop: 0.11 },
//           { mq: '(max-width: 560px)', gap: 10, peek: 0.07, rotateY: 8, zDepth: 55, scaleDrop: 0.1 },
//         ],
//       },
//       opts
//     ) as Required<CertCarouselOptions>;
//     this._init();
//   }

//   private _init() {
//     this._setupDots();
//     this._bind();
//     this._measure();
//     this.goTo(0, false);
//     this._startCycle();
//     this._loop();
//   }

//   private _setupDots() {
//     this.pagination.innerHTML = '';
//     this.dots = this.slides.map((_, i) => {
//       const b = document.createElement('button');
//       b.type = 'button';
//       b.className = 'certCarousel-dot';
//       b.setAttribute('role', 'tab');
//       b.setAttribute('aria-label', `Go to slide ${i + 1}`);
//       b.addEventListener('click', () => this.goTo(i));
//       this.pagination.appendChild(b);
//       return b;
//     });
//   }

//   private _bind() {
//     this.prevBtn.addEventListener('click', () => this.prev());
//     this.nextBtn.addEventListener('click', () => this.next());
//     if (this.opts.keyboard) {
//       this.root.addEventListener('keydown', (e: KeyboardEvent) => {
//         if (e.key === 'ArrowLeft') this.prev();
//         if (e.key === 'ArrowRight') this.next();
//       });
//     }
//     const pe = this.viewport;
//     pe.addEventListener('pointerdown', (e: PointerEvent) => this._onDragStart(e));
//     pe.addEventListener('pointermove', (e: PointerEvent) => this._onDragMove(e));
//     pe.addEventListener('pointerup', (e: PointerEvent) => this._onDragEnd(e));
//     pe.addEventListener('pointercancel', (e: PointerEvent) => this._onDragEnd(e));
//     this.root.addEventListener('mouseenter', () => {
//       this.state.hovering = true;
//       this.state.pausedAt = performance.now();
//     });
//     this.root.addEventListener('mouseleave', () => {
//       if (this.state.pausedAt) {
//         this.state.startTime += performance.now() - this.state.pausedAt;
//         this.state.pausedAt = 0;
//       }
//       this.state.hovering = false;
//     });
//     this.ro = new ResizeObserver(() => this._measure());
//     this.ro.observe(this.viewport);
//     this.opts.breakpoints.forEach((bp) => {
//       const m = window.matchMedia(bp.mq);
//       const apply = () => {
//         (Object.keys(bp) as (keyof Breakpoint)[]).forEach((k) => {
//           if (k !== 'mq') {
//             (this.opts as unknown as Record<string, number>)[k] = bp[k] as number;
//           }
//         });
//         this._measure();
//         this._render();
//       };
//       if (m.addEventListener) m.addEventListener('change', apply);
//       else m.addListener(apply);
//       if (m.matches) apply();
//       this._mqHandlers.push({ mq: m, fn: apply });
//     });
//     window.addEventListener('orientationchange', this._onResize);
//   }

//   private _measure() {
//     const viewRect = this.viewport.getBoundingClientRect();
//     this.state.width = viewRect.width;
//     this.state.gap = this.opts.gap;
//     this.slideW = Math.min(400, this.state.width * (1 - this.opts.peek * 2));
//   }

//   private _onDragStart(e: PointerEvent) {
//     if (e.pointerType === 'mouse' && e.button !== 0) return;
//     e.preventDefault();
//     this.state.dragging = true;
//     this.state.pointerId = e.pointerId;
//     this.viewport.setPointerCapture(e.pointerId);
//     this.state.x0 = e.clientX;
//     this.state.t0 = performance.now();
//     this.state.v = 0;
//     this.state.pausedAt = performance.now();
//   }

//   private _onDragMove(e: PointerEvent) {
//     if (!this.state.dragging || e.pointerId !== this.state.pointerId) return;
//     const dx = e.clientX - this.state.x0;
//     const dt = Math.max(16, performance.now() - this.state.t0);
//     this.state.v = dx / dt;
//     const slideSpan = this.slideW + this.state.gap;
//     this.state.pos = this._mod(this.state.index - dx / slideSpan, this.n);
//     this._render();
//   }

//   private _onDragEnd(e?: PointerEvent) {
//     if (!this.state.dragging || (e && e.pointerId !== this.state.pointerId)) return;
//     this.state.dragging = false;
//     try {
//       if (this.state.pointerId != null) this.viewport.releasePointerCapture(this.state.pointerId);
//     } catch {
//       /* noop */
//     }
//     this.state.pointerId = null;
//     if (this.state.pausedAt) {
//       this.state.startTime += performance.now() - this.state.pausedAt;
//       this.state.pausedAt = 0;
//     }
//     const v = this.state.v;
//     const threshold = 0.18;
//     const target = Math.round(this.state.pos - Math.sign(v) * (Math.abs(v) > threshold ? 0.5 : 0));
//     this.goTo(this._mod(target, this.n));
//   }

//   private _startCycle() {
//     this.state.startTime = performance.now();
//     this._renderProgress(0);
//   }

//   private _loop() {
//     const step = (t: number) => {
//       if (!this.state.dragging && !this.state.hovering && !this.state.animating) {
//         const elapsed = t - this.state.startTime;
//         const p = Math.min(1, elapsed / this.opts.interval);
//         this._renderProgress(p);
//         if (elapsed >= this.opts.interval) this.next();
//       }
//       this.state.rafId = requestAnimationFrame(step);
//     };
//     this.state.rafId = requestAnimationFrame(step);
//   }

//   private _renderProgress(p: number) {
//     this.progressBar.style.transform = `scaleX(${p})`;
//   }

//   prev() {
//     this.goTo(this._mod(this.state.index - 1, this.n));
//   }

//   next() {
//     this.goTo(this._mod(this.state.index + 1, this.n));
//   }

//   goTo(i: number, animate = true) {
//     const start = this.state.pos || this.state.index;
//     const end = this._nearest(start, i);
//     const dur = animate ? this.opts.transitionMs : 0;
//     const t0 = performance.now();
//     const ease = (x: number) => 1 - Math.pow(1 - x, 4);
//     this.state.animating = true;
//     const step = (now: number) => {
//       const t = Math.min(1, (now - t0) / dur);
//       const p = dur ? ease(t) : 1;
//       this.state.pos = start + (end - start) * p;
//       this._render();
//       if (t < 1) requestAnimationFrame(step);
//       else this._afterSnap();
//     };
//     requestAnimationFrame(step);
//   }

//   private _afterSnap() {
//     this.state.index = this._mod(Math.round(this.state.pos), this.n);
//     this.state.pos = this.state.index;
//     this.state.animating = false;
//     this._render(true);
//     this._startCycle();
//   }

//   private _nearest(from: number, target: number) {
//     let d = target - Math.round(from);
//     if (d > this.n / 2) d -= this.n;
//     if (d < -this.n / 2) d += this.n;
//     return Math.round(from) + d;
//   }

//   private _mod(i: number, n: number) {
//     return ((i % n) + n) % n;
//   }

//   private _render(markActive = false) {
//     const span = this.slideW + this.state.gap;
//     for (let i = 0; i < this.n; i++) {
//       let d = i - this.state.pos;
//       if (d > this.n / 2) d -= this.n;
//       if (d < -this.n / 2) d += this.n;
//       const absD = Math.abs(d);
//       const tx = d * span;
//       const depth = -absD * this.opts.zDepth;
//       const rot = -d * this.opts.rotateY;
//       const scale = 1 - Math.min(absD * this.opts.scaleDrop, 0.4);
//       const blur = Math.min(absD * this.opts.blurMax, this.opts.blurMax);
//       const z = Math.round(1000 - absD * 10);
//       const opacity = absD <= 1.05 ? 1 - absD * 0.32 : Math.max(0, 0.35 - (absD - 1) * 0.5);
//       const s = this.slides[i];
//       s.style.transform = `translate3d(calc(-50% + ${tx}px),-50%,${depth}px) rotateY(${rot}deg) scale(${scale})`;
//       s.style.filter = `blur(${blur}px)`;
//       s.style.opacity = String(opacity);
//       s.style.zIndex = String(z);
//       s.style.pointerEvents = absD < 0.5 ? 'auto' : 'none';
//       if (markActive) s.dataset.state = Math.round(this.state.index) === i ? 'active' : 'rest';
//     }
//     const active = this._mod(Math.round(this.state.pos), this.n);
//     this.dots.forEach((d, i) => d.setAttribute('aria-selected', i === active ? 'true' : 'false'));
//   }

//   destroy() {
//     cancelAnimationFrame(this.state.rafId);
//     this.ro?.disconnect();
//     window.removeEventListener('orientationchange', this._onResize);
//     this._mqHandlers.forEach(({ mq, fn }) => {
//       if (mq.removeEventListener) mq.removeEventListener('change', fn);
//       else mq.removeListener(fn);
//     });
//   }
// }

// /* ----------------------------------------------------------------------
//  * Component
//  * ------------------------------------------------------------------- */

// const categoryBadge: Record<Certification['category'], string> = {
//   'web-development': '🌐 Web Dev',
//   internship: '💼 Internship',
//   diploma: '🎓 Diploma',
// };

// export default function CertificationsSection() {
//   const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const rootRef = useRef<HTMLDivElement>(null);
//   const engineRef = useRef<CertCarouselEngine | null>(null);

//   useEffect(() => {
//     if (titleRef.current) {
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: 'top bottom-=100',
//             toggleActions: 'play none none none',
//           },
//         }
//       );
//     }
//   }, []);

//   useEffect(() => {
//     if (!rootRef.current) return;
//     engineRef.current = new CertCarouselEngine(rootRef.current, { transitionMs: 800 });
//     return () => {
//       engineRef.current?.destroy();
//       engineRef.current = null;
//     };
//   }, []);

//   const handleReview = (certification: Certification) => {
//     setSelectedCert(certification);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedCert(null);
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: certCarouselCss }} />
//       <section>
//         <div className="container mx-auto">
//           <div className="text-center mb-14">
//             <div className="inline-flex items-center gap-3 mb-4">
//               <Code2 className="text-blue-500" size={32} />
//               <h1
//                 ref={titleRef}
//                 className="text-3xl md:text-4xl text-gray-800 font-bold shimmer-text"
//               >
//                 My Certifications
//               </h1>
//               <Sparkles className="text-purple-500" size={32} />
//             </div>
//             <p className="text-gray-600 text-sm max-w-md mx-auto">
//               Showcasing my professional certifications and achievements
//             </p>
//           </div>

//           <div
//             className="certCarousel"
//             ref={rootRef}
//             aria-roledescription="carousel"
//             aria-label="Certifications"
//           >
//             <div className="certCarousel-viewport" tabIndex={0}>
//               <div className="certCarousel-track">
//                 {certifications.map((certification, i) => (
//                   <article
//                     className="certCarousel-slide"
//                     role="group"
//                     aria-roledescription="slide"
//                     aria-label={`${i + 1} of ${certifications.length}`}
//                     key={certification.id}
//                   >
//                     <div className="certCard-box">
//                       <div className="certCard-imageWrap">
//                         <Image
//                           src={certification.image}
//                           alt={certification.title}
//                           fill
//                           sizes="400px"
//                           className="object-cover object-top"
//                         />
//                         <Badge className="certCard-badge">
//                           {categoryBadge[certification.category]}
//                         </Badge>
//                       </div>
//                       <div className="certCard-body">
//                         <h3 className="certCard-title">{certification.title}</h3>
//                         <p className="certCard-issuer">{certification.issuer}</p>
//                         <p className="certCard-date">{certification.date}</p>
//                         <p className="certCard-desc">{certification.fullDescription}</p>
//                       </div>
//                       <button
//                         type="button"
//                         className="certReviewLink"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleReview(certification);
//                         }}
//                       >
//                         Review Certificate
//                         <ArrowUpRight size={15} />
//                       </button>

//                       <BorderBeam
//                         duration={4}
//                         size={300}
//                         reverse
//                         borderWidth={2}
//                         className="from-transparent via-primary to-transparent"
//                       />
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </div>

//             <div className="certCarousel-controls" aria-label="Controls">
//               <button className="certCarousel-prev" aria-label="Previous slide" type="button">
//                 ‹
//               </button>
//               <button className="certCarousel-next" aria-label="Next slide" type="button">
//                 ›
//               </button>
//             </div>
//             <div className="certCarousel-pagination" role="tablist" aria-label="Slide navigation" />
//             <div className="certCarousel-progress" aria-hidden="true">
//               <span className="certCarousel-progressBar" />
//             </div>
//           </div>
//         </div>

//         {selectedCert && (
//           <CertificationModal
//             certification={selectedCert}
//             isOpen={isModalOpen}
//             onClose={handleCloseModal}
//           />
//         )}
//       </section>
//     </>
//   );
// }