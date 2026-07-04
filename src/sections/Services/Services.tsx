'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
  Quote,
  Star,
  MessageSquareQuote,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/* ----------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------- */

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectType: string;
  highlights: string[];
  techStack: string[];
}

/* ----------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------- */

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-01',
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    company: 'Lumen Retail Co.',
    avatar: '/testimonials/sarah-mitchell.jpg',
    quote:
      "The team rebuilt our storefront from the ground up and it completely changed how customers experience the brand. Page speed, checkout flow, everything just works now.",
    rating: 5,
    projectType: 'Full-Stack Rebuild',
    highlights: [
      'Cut page load time by 68%',
      'Checkout conversion up 34%',
      'Zero downtime migration',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 'testimonial-02',
    name: 'David Okafor',
    role: 'Product Director',
    company: 'Northbeam Studio',
    avatar: '/testimonials/david-okafor.jpg',
    quote:
      "Communication was clear from day one. Every sprint shipped exactly what was promised, and the UI polish was far beyond what we expected for the timeline we gave.",
    rating: 5,
    projectType: 'Frontend Redesign',
    highlights: [
      'Delivered 2 weeks early',
      'Design system adopted company-wide',
      '98 Lighthouse score',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'testimonial-03',
    name: 'Priya Raman',
    role: 'CTO',
    company: 'Fieldwork Logistics',
    avatar: '/testimonials/priya-raman.jpg',
    quote:
      "Our old API was the bottleneck for everything. After the rebuild it handles ten times the traffic without breaking a sweat, and the docs made handoff painless.",
    rating: 5,
    projectType: 'Backend Architecture',
    highlights: [
      '10x throughput improvement',
      'Sub-100ms average response',
      'Full API documentation',
    ],
    techStack: ['Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'testimonial-04',
    name: 'Marcus Chen',
    role: 'Head of Data',
    company: 'Ashgrove Analytics',
    avatar: '/testimonials/marcus-chen.jpg',
    quote:
      "Migrating years of messy data into a clean schema sounded impossible until this project. Query times dropped dramatically and reporting finally feels trustworthy.",
    rating: 4,
    projectType: 'Database Architecture',
    highlights: [
      'Query time down 80%',
      'Automated backup strategy',
      'Zero data loss migration',
    ],
    techStack: ['PostgreSQL', 'Prisma', 'Redis'],
  },
  {
    id: 'testimonial-05',
    name: 'Elena Vasquez',
    role: 'VP of Engineering',
    company: 'Cobalt Systems',
    avatar: '/testimonials/elena-vasquez.jpg',
    quote:
      "Setting up CI/CD used to eat a full day every release. Now it's a five minute merge to production, and the monitoring dashboards catch problems before our users do.",
    rating: 5,
    projectType: 'DevOps & Deployment',
    highlights: [
      'Deploy time cut from hours to minutes',
      'Automated rollback safety net',
      '99.98% uptime since launch',
    ],
    techStack: ['Docker', 'AWS', 'GitHub Actions'],
  },
  {
    id: 'testimonial-06',
    name: 'James Whitfield',
    role: 'Founder',
    company: 'Trailhead Outdoors App',
    avatar: '/testimonials/james-whitfield.jpg',
    quote:
      "Launching on both iOS and Android from a single codebase saved us months of budget. The offline mode alone has become our most praised feature in reviews.",
    rating: 5,
    projectType: 'Mobile Development',
    highlights: [
      'Shipped on iOS and Android together',
      'Offline-first architecture',
      '4.8 star average app rating',
    ],
    techStack: ['React Native', 'Expo', 'Firebase'],
  },
];

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ----------------------------------------------------------------------
 * Inline CSS
 * ------------------------------------------------------------------- */

const testimonialCarouselCss = `
.testimonialCarouselSection { width: 100%; max-width: 1550px; margin-inline: auto; padding-inline: 20px; padding-block: 24px; }
@media (min-width: 640px) { .testimonialCarouselSection { padding-inline: 32px; padding-block: 32px; } }
@media (min-width: 1024px) { .testimonialCarouselSection { padding-inline: 48px; padding-block: 48px; } }
@media (min-width: 1440px) { .testimonialCarouselSection { padding-inline: 64px; padding-block: 64px; } }
.testimonialCarousel, .testimonialCarousel * { box-sizing: border-box; }
.testimonialCarousel {
  --testC-slideW: min(420px, 78%);
  --testPagH: 56px;
  --testCardH: clamp(450px, 68vh, 600px);
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 18px;
  overflow: hidden;
  contain: layout paint;
  touch-action: none;
}
.testimonialCarousel-viewport { position: relative; outline: none; overflow: hidden; height: 100%; }
.testimonialCarousel-track {
  position: relative;
  height: calc(100% - var(--testPagH) - 12px);
  transform-style: preserve-3d;
  perspective: 1700px;
  overflow: visible;
}
.testimonialCarousel-slide {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--testC-slideW);
  height: auto;
  max-height: min(var(--testCardH), calc(100% - 20px));
  transform-style: preserve-3d;
  display: flex;
  will-change: transform, filter, opacity;
  transition: opacity 500ms cubic-bezier(0.2, 0.7, 0, 1);
}

/* ---- The 3D card itself (shadcn-card look: white surface, soft ring, centered content) ---- */
.testimonialCard-box {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  border-radius: 22px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #e6e9f0;
  box-shadow: none;
  cursor: grab;
  display: flex;
  flex-direction: column;
  transition: box-shadow 400ms ease, transform 400ms ease;
  align-items: center;
  text-align: center;
  padding: 20px 22px 16px 22px;
  justify-content: flex-start;
  gap: 8px;
}
.testimonialCarousel-slide[data-state="active"] .testimonialCard-box {
  box-shadow: 2px solid rgba(67, 56, 202, 0.08), 0 8px 20px rgba(15, 23, 42, 0.14);
  border-color: #d8dcf0;
}
.testimonialCard-box::before {
  content: '';
  position: absolute;
  top: -24px;
  left: -24px;
  width: 96px;
  height: auto;
  border-radius: 999px;
  background: #fff2e2;
  filter: blur(6px);
  z-index: 0;
}
.testimonialCard-box::after {
  content: '';
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 110px;
  height: 110px;
  border-radius: 999px;
  background: #fff7ec;
  filter: blur(6px);
  z-index: 0;
}

.testimonialCard-quoteMark {
  position: absolute;
  top: 14px;
  left: 14px;
  color: #fde3c4;
  z-index: 1;
  transform: rotate(180deg);
}
.testimonialCard-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  background: #4338ca;
  color: #ffffff;
  border: none;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.testimonialCard-person {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.testimonialCard-avatarRing {
  position: relative;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  border: 4px solid #ffffff;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.18);
  overflow: hidden;
  flex-shrink: 0;
  background: #f1f5f9;
}
.testimonialCard-avatarRing img { object-fit: cover; object-position: center; }
.testimonialCard-personInfo { display: flex; flex-direction: column; gap: 2px; align-items: center; margin-top: 6px; }
.testimonialCard-name {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  color: #1e293b;
  line-height: 1.2;
}
.testimonialCard-role {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #f59e0b;
  line-height: 1.2;
}

.testimonialCard-body {
  position: relative;
  z-index: 2;
  flex: 0 0 auto;
  min-height: 0;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.testimonialCard-rating {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 14px;
}
.testimonialCard-star { color: #f59e0b; }
.testimonialCard-starEmpty { color: #e2e8f0; }
.testimonialCard-quote {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.65;
  color: #475569;
  font-style: normal;
  max-width: 34ch;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.testimonialCarousel-controls { position: absolute; inset: 0; display: flex; align-items: center; justify-content: space-between; pointer-events: none; }
.testimonialCarousel-prev, .testimonialCarousel-next {
  pointer-events: auto;
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  color: #1e293b;
  font-size: 20px;
  display: grid;
  place-items: center;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.14);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 1001;
}
.testimonialCarousel-prev { margin-left: 4px; }
.testimonialCarousel-next { margin-right: 4px; }
.testimonialCarousel-prev:hover, .testimonialCarousel-next:hover {
  background: #4338ca;
  color: #ffffff;
  box-shadow: 0 10px 24px rgba(67, 56, 202, 0.3);
}
.testimonialCarousel-prev:active, .testimonialCarousel-next:active { transform: scale(0.96); }
.testimonialCarousel-pagination {
  position: absolute;
  left: 0; right: 0; bottom: 14px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  z-index: 1001;
}
.testimonialCarousel-dot {
  width: 10px; height: 10px;
  border-radius: 999px;
  background: #cbd5e1;
  border: 0;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}
.testimonialCarousel-dot[aria-selected="true"] {
  background: #4338ca;
  transform: scale(1.35);
}
.testimonialCarousel-progress { position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: #eef0f5; z-index: 999; overflow: hidden; }
.testimonialCarousel-progressBar {
  display: block; height: 100%; width: 100%;
  transform-origin: left; transform: scaleX(0); will-change: transform;
  background: #4338ca;
}
@media (max-width: 1000px) { .testimonialCarousel { --testC-slideW: min(88vw, 400px); } }
@media (max-width: 560px) { .testimonialCarousel { --testC-slideW: min(92vw, 360px); } }
`;

/* ----------------------------------------------------------------------
 * Carousel Engine - unchanged mechanics
 * ------------------------------------------------------------------- */

interface Breakpoint {
  mq: string;
  gap: number;
  peek: number;
  rotateY: number;
  zDepth: number;
  scaleDrop: number;
}

interface TestimonialCarouselOptions {
  gap?: number;
  peek?: number;
  rotateY?: number;
  zDepth?: number;
  scaleDrop?: number;
  blurMax?: number;
  interval?: number;
  transitionMs?: number;
  keyboard?: boolean;
  breakpoints?: Breakpoint[];
}

interface TestimonialCarouselState {
  index: number;
  pos: number;
  width: number;
  gap: number;
  dragging: boolean;
  pointerId: number | null;
  x0: number;
  v: number;
  t0: number;
  animating: boolean;
  hovering: boolean;
  startTime: number;
  pausedAt: number;
  rafId: number;
}

class TestimonialCarouselEngine {
  root: HTMLElement;
  viewport: HTMLElement;
  prevBtn: HTMLButtonElement;
  nextBtn: HTMLButtonElement;
  pagination: HTMLElement;
  progressBar: HTMLElement;
  n: number;
  slides: HTMLElement[];
  state: TestimonialCarouselState;
  opts: Required<TestimonialCarouselOptions>;
  dots: HTMLButtonElement[] = [];
  ro!: ResizeObserver;
  slideW = 0;
  private _mqHandlers: { mq: MediaQueryList; fn: () => void }[] = [];
  private _onResize = () => setTimeout(() => this._measure(), 200);

  constructor(root: HTMLElement, opts: TestimonialCarouselOptions = {}) {
    this.root = root;
    this.viewport = root.querySelector('.testimonialCarousel-viewport') as HTMLElement;
    this.slides = Array.from(root.querySelectorAll<HTMLElement>('.testimonialCarousel-slide'));
    this.prevBtn = root.querySelector('.testimonialCarousel-prev') as HTMLButtonElement;
    this.nextBtn = root.querySelector('.testimonialCarousel-next') as HTMLButtonElement;
    this.pagination = root.querySelector('.testimonialCarousel-pagination') as HTMLElement;
    this.progressBar = root.querySelector('.testimonialCarousel-progressBar') as HTMLElement;
    this.n = this.slides.length;
    this.state = {
      index: 0, pos: 0, width: 0, gap: 24,
      dragging: false, pointerId: null, x0: 0, v: 0, t0: 0,
      animating: false, hovering: false, startTime: 0, pausedAt: 0, rafId: 0,
    };
    this.opts = Object.assign(
      {
        gap: 24, peek: 0.24, rotateY: 26, zDepth: 150, scaleDrop: 0.14,
        blurMax: 1, interval: 4500, transitionMs: 800, keyboard: true,
        breakpoints: [
          { mq: '(max-width: 1200px)', gap: 20, peek: 0.2, rotateY: 22, zDepth: 120, scaleDrop: 0.13 },
          { mq: '(max-width: 1000px)', gap: 16, peek: 0.15, rotateY: 17, zDepth: 95, scaleDrop: 0.12 },
          { mq: '(max-width: 768px)', gap: 12, peek: 0.1, rotateY: 13, zDepth: 75, scaleDrop: 0.11 },
          { mq: '(max-width: 560px)', gap: 10, peek: 0.07, rotateY: 9, zDepth: 58, scaleDrop: 0.1 },
        ],
      },
      opts
    ) as Required<TestimonialCarouselOptions>;
    this._init();
  }

  private _init() {
    this._setupDots();
    this._bind();
    this._measure();
    this.goTo(0, false);
    this._startCycle();
    this._loop();
  }

  private _setupDots() {
    this.pagination.innerHTML = '';
    this.dots = this.slides.map((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'testimonialCarousel-dot';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      b.addEventListener('click', () => this.goTo(i));
      this.pagination.appendChild(b);
      return b;
    });
  }

  private _bind() {
    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    if (this.opts.keyboard) {
      this.root.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') this.prev();
        if (e.key === 'ArrowRight') this.next();
      });
    }
    const pe = this.viewport;
    pe.addEventListener('pointerdown', (e: PointerEvent) => this._onDragStart(e));
    pe.addEventListener('pointermove', (e: PointerEvent) => this._onDragMove(e));
    pe.addEventListener('pointerup', (e: PointerEvent) => this._onDragEnd(e));
    pe.addEventListener('pointercancel', (e: PointerEvent) => this._onDragEnd(e));
    this.root.addEventListener('mouseenter', () => {
      this.state.hovering = true;
      this.state.pausedAt = performance.now();
    });
    this.root.addEventListener('mouseleave', () => {
      if (this.state.pausedAt) {
        this.state.startTime += performance.now() - this.state.pausedAt;
        this.state.pausedAt = 0;
      }
      this.state.hovering = false;
    });
    this.ro = new ResizeObserver(() => this._measure());
    this.ro.observe(this.viewport);
    this.opts.breakpoints.forEach((bp) => {
      const m = window.matchMedia(bp.mq);
      const apply = () => {
        (Object.keys(bp) as (keyof Breakpoint)[]).forEach((k) => {
          if (k !== 'mq') {
            (this.opts as unknown as Record<string, number>)[k] = bp[k] as number;
          }
        });
        this._measure();
        this._render();
      };
      if (m.addEventListener) m.addEventListener('change', apply);
      else m.addListener(apply);
      if (m.matches) apply();
      this._mqHandlers.push({ mq: m, fn: apply });
    });
    window.addEventListener('orientationchange', this._onResize);
  }

  private _measure() {
    const viewRect = this.viewport.getBoundingClientRect();
    this.state.width = viewRect.width;
    this.state.gap = this.opts.gap;
    this.slideW = Math.min(420, this.state.width * (1 - this.opts.peek * 2));
  }

  private _onDragStart(e: PointerEvent) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    this.state.dragging = true;
    this.state.pointerId = e.pointerId;
    this.viewport.setPointerCapture(e.pointerId);
    this.state.x0 = e.clientX;
    this.state.t0 = performance.now();
    this.state.v = 0;
    this.state.pausedAt = performance.now();
  }

  private _onDragMove(e: PointerEvent) {
    if (!this.state.dragging || e.pointerId !== this.state.pointerId) return;
    const dx = e.clientX - this.state.x0;
    const dt = Math.max(16, performance.now() - this.state.t0);
    this.state.v = dx / dt;
    const slideSpan = this.slideW + this.state.gap;
    this.state.pos = this._mod(this.state.index - dx / slideSpan, this.n);
    this._render();
  }

  private _onDragEnd(e?: PointerEvent) {
    if (!this.state.dragging || (e && e.pointerId !== this.state.pointerId)) return;
    this.state.dragging = false;
    try {
      if (this.state.pointerId != null) this.viewport.releasePointerCapture(this.state.pointerId);
    } catch {
      /* noop */
    }
    this.state.pointerId = null;
    if (this.state.pausedAt) {
      this.state.startTime += performance.now() - this.state.pausedAt;
      this.state.pausedAt = 0;
    }
    const v = this.state.v;
    const threshold = 0.18;
    const target = Math.round(this.state.pos - Math.sign(v) * (Math.abs(v) > threshold ? 0.5 : 0));
    this.goTo(this._mod(target, this.n));
  }

  private _startCycle() {
    this.state.startTime = performance.now();
    this._renderProgress(0);
  }

  private _loop() {
    const step = (t: number) => {
      if (!this.state.dragging && !this.state.hovering && !this.state.animating) {
        const elapsed = t - this.state.startTime;
        const p = Math.min(1, elapsed / this.opts.interval);
        this._renderProgress(p);
        if (elapsed >= this.opts.interval) this.next();
      }
      this.state.rafId = requestAnimationFrame(step);
    };
    this.state.rafId = requestAnimationFrame(step);
  }

  private _renderProgress(p: number) {
    if (!this.progressBar) return;
    try {
      this.progressBar.style.transform = `scaleX(${p})`;
    } catch {
      /* ignore if element detached */
    }
  }

  prev() {
    this.goTo(this._mod(this.state.index - 1, this.n));
  }

  next() {
    this.goTo(this._mod(this.state.index + 1, this.n));
  }

  goTo(i: number, animate = true) {
    const start = this.state.pos || this.state.index;
    const end = this._nearest(start, i);
    const dur = animate ? this.opts.transitionMs : 0;
    const t0 = performance.now();
    const ease = (x: number) => 1 - Math.pow(1 - x, 4);
    this.state.animating = true;
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      const p = dur ? ease(t) : 1;
      this.state.pos = start + (end - start) * p;
      this._render();
      if (t < 1) requestAnimationFrame(step);
      else this._afterSnap();
    };
    requestAnimationFrame(step);
  }

  private _afterSnap() {
    this.state.index = this._mod(Math.round(this.state.pos), this.n);
    this.state.pos = this.state.index;
    this.state.animating = false;
    this._render(true);
    this._startCycle();
  }

  private _nearest(from: number, target: number) {
    let d = target - Math.round(from);
    if (d > this.n / 2) d -= this.n;
    if (d < -this.n / 2) d += this.n;
    return Math.round(from) + d;
  }

  private _mod(i: number, n: number) {
    return ((i % n) + n) % n;
  }

  private _render(markActive = false) {
    const span = this.slideW + this.state.gap;
    for (let i = 0; i < this.n; i++) {
      let d = i - this.state.pos;
      if (d > this.n / 2) d -= this.n;
      if (d < -this.n / 2) d += this.n;
      const absD = Math.abs(d);
      const tx = d * span;
      const depth = -absD * this.opts.zDepth;
      const rot = -d * this.opts.rotateY;
      const scale = 1 - Math.min(absD * this.opts.scaleDrop, 0.4);
      const blur = Math.min(absD * this.opts.blurMax, this.opts.blurMax);
      const z = Math.round(1000 - absD * 10);
      const opacity = absD <= 1.05 ? 1 - absD * 0.32 : Math.max(0, 0.35 - (absD - 1) * 0.5);
      const s = this.slides[i];
      s.style.transform = `translate3d(calc(-50% + ${tx}px),-50%,${depth}px) rotateY(${rot}deg) scale(${scale})`;
      s.style.filter = `blur(${blur}px)`;
      s.style.opacity = String(opacity);
      s.style.zIndex = String(z);
      s.style.pointerEvents = absD < 0.5 ? 'auto' : 'none';
      if (markActive) s.dataset.state = Math.round(this.state.index) === i ? 'active' : 'rest';
    }
    const active = this._mod(Math.round(this.state.pos), this.n);
    this.dots.forEach((d, i) => d.setAttribute('aria-selected', i === active ? 'true' : 'false'));
  }

  destroy() {
    cancelAnimationFrame(this.state.rafId);
    this.ro?.disconnect();
    window.removeEventListener('orientationchange', this._onResize);
    this._mqHandlers.forEach(({ mq, fn }) => {
      if (mq.removeEventListener) mq.removeEventListener('change', fn);
      else mq.removeListener(fn);
    });
  }
}

/* ----------------------------------------------------------------------
 * Component
 * ------------------------------------------------------------------- */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="testimonialCard-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < rating ? '#f59e0b' : 'none'}
          className={i < rating ? 'testimonialCard-star' : 'testimonialCard-starEmpty'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<TestimonialCarouselEngine | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    engineRef.current = new TestimonialCarouselEngine(rootRef.current, { transitionMs: 800 });
    return () => {
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: testimonialCarouselCss }} />
      <section>
        <div className="container mx-auto">
          <div className="text-center ">
            <div className="inline-flex items-center gap-3 mb-4">
              <MessageSquareQuote className="text-indigo-600" size={32} />
              <h1
                ref={titleRef}
                className="text-3xl md:text-4xl text-gray-800 font-bold"
              >
                Client Testimonials
              </h1>
              <Sparkles className="text-amber-500" size={32} />
            </div>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Real feedback from clients who trusted their projects to a MERN stack specialist
            </p>
          </div>

          <div
            className="testimonialCarousel    h-[60vh]"
            ref={rootRef}
            aria-roledescription="carousel"
            aria-label="Testimonials"
          >
            <div className="testimonialCarousel-viewport" tabIndex={0}>
              <div className="testimonialCarousel-track">
                {testimonials.map((testimonial, i) => (
                  <article
                    className="testimonialCarousel-slide"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${testimonials.length}`}
                    key={testimonial.id}
                  >
                    <div className="testimonialCard-box">
                      <Quote className="testimonialCard-quoteMark" size={40} strokeWidth={1.5} />

                      <div className="testimonialCard-person">
                        <div className="testimonialCard-avatarRing">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            sizes="88px"
                            className="object-cover object-center"
                          />
                        </div>
                      </div>

                      <div className="testimonialCard-body mt-2">
                        <StarRating rating={testimonial.rating} />
                        <p className="testimonialCard-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="testimonialCard-personInfo">
                          <p className="testimonialCard-name">{testimonial.name}</p>
                          <p className="testimonialCard-role">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="testimonialCarousel-controls" aria-label="Controls">
              <button className="testimonialCarousel-prev" aria-label="Previous testimonial" type="button">
                ‹
              </button>
              <button className="testimonialCarousel-next" aria-label="Next testimonial" type="button">
                ›
              </button>
            </div>
            <div className="testimonialCarousel-pagination" role="tablist" aria-label="Testimonial navigation" />
          </div>
        </div>
      </section>
    </>
  );
}