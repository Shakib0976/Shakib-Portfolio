"use client";

import { useEffect, useRef } from "react";

/* ----------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------- */

interface Breakpoint {
    mq: string;
    gap: number;
    peek: number;
    rotateY: number;
    zDepth: number;
    scaleDrop: number;
    activeLeftBias: number;
}

interface MzaCarouselOptions {
    gap?: number;
    peek?: number;
    rotateY?: number;
    zDepth?: number;
    scaleDrop?: number;
    blurMax?: number;
    activeLeftBias?: number;
    interval?: number;
    transitionMs?: number;
    keyboard?: boolean;
    breakpoints?: Breakpoint[];
}

interface MzaCarouselState {
    index: number;
    pos: number;
    width: number;
    height: number;
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

declare global {
    interface Window {
        InstallTrigger?: unknown;
    }
}

interface Slide {
    id: number;
    image: string;
    title: string;
    kicker: string;
    text: string;
    cta: string;
}

/* ----------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------- */

const slides: Slide[] = [
    {
        id: 1,
        image: "https://picsum.photos/id/1015/1600/1000",
        title: "Edge Visuals",
        kicker: "Design systems that breathe",
        text: "Build adaptive UI foundations with tokens, motion, and accessible color ramps. Ship faster without sameness.",
        cta: "See case study",
    },
    {
        id: 2,
        image: "https://picsum.photos/id/1011/1600/1000",
        title: "Realtime Dashboards",
        kicker: "Signal over noise",
        text: "Stream metrics, smooth spikes, and highlight deltas. Clarity first, chrome last.",
        cta: "View live demo",
    },
    {
        id: 3,
        image: "https://picsum.photos/id/1018/1600/1000",
        title: "Brand Motion",
        kicker: "Identity in motion",
        text: "Translate marks into kinetic systems. Timing, easing, and restraint create memory.",
        cta: "Explore reels",
    },
    {
        id: 4,
        image: "https://picsum.photos/id/1021/1600/1000",
        title: "E-commerce UX",
        kicker: "Frictionless paths",
        text: "Model intent, compress choice, and keep the dopamine loop honest. Checkout in one breath.",
        cta: "See patterns",
    },
    {
        id: 5,
        image: "https://picsum.photos/id/1005/1600/1000",
        title: "Content Engines",
        kicker: "Scale without sludge",
        text: "Structured content, image policy, and smart defaults. Publish daily, stay sharp.",
        cta: "Read playbook",
    },
];

/* ----------------------------------------------------------------------
 * Inline CSS (injected via <style>, kept 1:1 with the original stylesheet)
 * NOTE: --mzaC-slideW was shrunk so the previous/next cards visibly peek
 * on both sides of the centered active card instead of being clipped
 * off-screen by the viewport edges.
 * ------------------------------------------------------------------- */

const mzaCarouselCss = `
.mzaCarouselSection { width: 100%; max-width: 1550px; margin-inline: auto; padding-inline: 20px; padding-block: 24px; }
@media (min-width: 640px) { .mzaCarouselSection { padding-inline: 32px; padding-block: 32px; } }
@media (min-width: 1024px) { .mzaCarouselSection { padding-inline: 48px; padding-block: 48px; } }
@media (min-width: 1440px) { .mzaCarouselSection { padding-inline: 64px; padding-block: 64px; } }
.mzaCarousel, .mzaCarousel * { box-sizing: border-box; }
.mzaCarousel {
  --mzaC-fg: #e7ecf2;
  --mzaC-accent: #9ef7d2;
  --mzaC-accent2: #82a0ff;
  --mzaC-glass: rgba(255, 255, 255, 0.06);
  --mzaC-glow: rgba(130, 160, 255, 0.75);
  --mzaC-slideW: min(640px, 76%);
  --mzaC-peek: 0.15;
  --mzaPagH: 64px;
  --mzaCardH: clamp(320px, 56vh, 560px);
  position: relative;
  width: 100%;
  height: clamp(420px, 70vh, 700px);
  max-width: 100%;
  margin: 0 auto;
  padding: 0 18px;
  border-radius: 1.25rem;
  overflow: hidden;
  contain: layout paint;
  touch-action: none;
  color: var(--mzaC-fg);
  font: 16px/1.4 system-ui, Segoe UI, Roboto, Ubuntu, "Helvetica Neue", Arial;
}
.mzaCarousel-viewport {
  position: relative;
  outline: none;
  overflow: hidden;
  height: 100%;
}
.mzaCarousel-track {
  position: relative;
  height: calc(100% - var(--mzaPagH) - max(env(safe-area-inset-bottom), 12px));
  transform-style: preserve-3d;
  perspective: 1200px;
  overflow: visible;
}
.mzaCarousel-slide {
  position: absolute;
  top: calc(50% + 5px);
  left: 50%;
  width: var(--mzaC-slideW);
  height: min(var(--mzaCardH), calc(100% - 50px));
  transform-style: preserve-3d;
  display: grid;
  place-items: center;
  border-radius: 22px;
  overflow: hidden;
  will-change: transform, filter, opacity;
  transition: opacity 500ms cubic-bezier(0.2, 0.7, 0, 1);
}
.mzaCard {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
  background: var(--mzaC-glass);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
  backdrop-filter: saturate(120%) blur(4px);
  transform: translateZ(0);
  cursor: grab;
}
.mzaCard::before {
  content: "";
  position: absolute;
  inset: -2%;
  background-image: var(--mzaCard-bg);
  background-size: cover;
  background-position: center;
  filter: contrast(1.02) saturate(1.08) brightness(0.9);
  transform: translateZ(-60px) scale(1.18)
    translate3d(var(--mzaParBgX, 0px), var(--mzaParBgY, 0px), 0);
  transition: transform 800ms cubic-bezier(0.2, 0.7, 0, 1),
    filter 800ms cubic-bezier(0.2, 0.7, 0, 1);
}
.mzaCard::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.45) 45%,
    rgba(0, 0, 0, 0.25) 100%
  );
}
.mzaCard-head { position: absolute; inset: 20px auto auto 20px; z-index: 2; }
.mzaCard-title {
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.2px;
  font-size: clamp(22px, 3.1vw, 38px);
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.6);
  line-height: 110%;
  cursor: text;
}
.mzaCard-kicker {
  margin: 0.5rem 0;
  color: var(--mzaC-accent);
  font-size: clamp(12px, 1.7vw, 14px);
  font-weight: 600;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
  cursor: text;
}
.mzaCard-text {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: absolute;
  inset: auto 20px 85px 20px;
  z-index: 2;
  max-width: 60ch;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  text-wrap: balance;
  cursor: text;
  color: #ddd;
}
.mzaCard-actions { position: absolute; inset: auto auto 18px 18px; z-index: 2; }
.mzaBtn {
  appearance: none;
  border: 1px solid #9ef7d2;
  border-radius: 14px;
  padding: 15px 20px;
  font-weight: 700;
  color: #0b0e13;
  background-image: linear-gradient(
    180deg, #9ef7d2, #97ebc8, #8fe0be, #88d5b5, #81c9ab, #7abea2,
    #73b398, #6ca88f, #659d86, #5e937d, #588874, #517e6b
  );
  box-shadow: 0 3px 15px var(--mzaC-glow);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.mzaBtn:active { transform: translateY(1px); box-shadow: 0 3px 10px rgba(130, 160, 255, 0.25); }
.mzaCarousel-controls {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
}
.mzaCarousel-prev, .mzaCarousel-next {
  pointer-events: auto;
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  color: var(--mzaC-fg);
  font-size: 22px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 1001;
}
.mzaCarousel-prev { margin-left: 6px; }
.mzaCarousel-next { margin-right: 6px; }
.mzaCarousel-prev:hover, .mzaCarousel-next:hover { background: rgba(255, 255, 255, 0.14); }
.mzaCarousel-prev:active, .mzaCarousel-next:active { transform: scale(0.98); }
.mzaCarousel-pagination {
  position: absolute;
  left: 0;
  right: 0;
  bottom: max(27px, env(safe-area-inset-bottom));
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  z-index: 1001;
}
.mzaCarousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.25);
  border: 0;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}
.mzaCarousel-dot[aria-selected="true"] {
  background: linear-gradient(180deg, var(--mzaC-accent2), var(--mzaC-accent));
  transform: scale(1.35);
}
.mzaCarousel-progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  z-index: 9999;
  overflow: hidden;
}
.mzaCarousel-progressBar {
  display: block;
  height: 100%;
  width: 100%;
  transform-origin: left;
  transform: scaleX(0);
  will-change: transform;
  background: linear-gradient(90deg, var(--mzaC-accent), var(--mzaC-accent2));
}
.mzaCarousel-slide[data-state="active"] .mzaCard::before {
  filter: contrast(1.06) saturate(1.12) brightness(1.02);
}
.mzaCarousel-slide[data-state="active"] .mzaCard {
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.04) inset;
}
.mzaPar-1, .mzaPar-2, .mzaPar-3 { will-change: transform; transition: transform 500ms cubic-bezier(0.2, 0.7, 0, 1); }
.mzaPar-1 { transform: translate3d(calc(var(--mzaParX, 0px) * 0.35), calc(var(--mzaParY, 0px) * 0.35), 0); }
.mzaPar-2 { transform: translate3d(calc(var(--mzaParX, 0px) * 0.25), calc(var(--mzaParY, 0px) * 0.25), 0); }
.mzaPar-3 { transform: translate3d(calc(var(--mzaParX, 0px) * 0.18), calc(var(--mzaParY, 0px) * 0.18), 0); }
@media (max-width: 1000px) {
  .mzaCarousel { --mzaC-slideW: min(86vw, 480px); }
  .mzaCard-head { inset: 16px auto auto 16px; }
  .mzaCard-title { font-size: clamp(20px, 5.4vw, 30px); }
  .mzaCard-kicker { font-size: clamp(12px, 3.6vw, 13px); }
  .mzaCard-text { inset: auto 16px 62px 16px; }
}
@media (max-width: 768px) {
  .mzaCarousel { --mzaC-slideW: min(88vw, 420px); }
  .mzaCard-text, .mzaCard-title, .mzaCard-kicker { max-width: 45%; }
  .mzaCard-text::after {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 1) 2%, rgba(0, 0, 0, 0) 25%);
    content: "";
    z-index: 1;
  }
}
@media (max-width: 560px) { .mzaCarousel { --mzaC-slideW: min(90vw, 380px); } }
@media (max-height: 400px) { .mzaCard-text { display: none; } }
@media (max-height: 280px) { .mzaCard-kicker { display: none; } }
@media (max-height: 240px) { .mzaBtn { display: none; } }
`;

/* ----------------------------------------------------------------------
 * Carousel engine (direct TypeScript port of the original class)
 * ------------------------------------------------------------------- */

class MzaCarouselEngine {
    root: HTMLElement;
    viewport: HTMLElement;
    track: HTMLElement;
    slides: HTMLElement[];
    prevBtn: HTMLButtonElement;
    nextBtn: HTMLButtonElement;
    pagination: HTMLElement;
    progressBar: HTMLElement;
    isFF: boolean;
    n: number;
    state: MzaCarouselState;
    opts: Required<MzaCarouselOptions>;
    dots: HTMLButtonElement[] = [];
    ro!: ResizeObserver;
    slideW = 0;

    private _onResizeOrientation = () => setTimeout(() => this._measure(), 250);
    private _mqHandlers: { mq: MediaQueryList; fn: () => void }[] = [];

    constructor(root: HTMLElement, opts: MzaCarouselOptions = {}) {
        this.root = root;
        this.viewport = root.querySelector(".mzaCarousel-viewport") as HTMLElement;
        this.track = root.querySelector(".mzaCarousel-track") as HTMLElement;
        this.slides = Array.from(root.querySelectorAll<HTMLElement>(".mzaCarousel-slide"));
        this.prevBtn = root.querySelector(".mzaCarousel-prev") as HTMLButtonElement;
        this.nextBtn = root.querySelector(".mzaCarousel-next") as HTMLButtonElement;
        this.pagination = root.querySelector(".mzaCarousel-pagination") as HTMLElement;
        this.progressBar = root.querySelector(".mzaCarousel-progressBar") as HTMLElement;
        this.isFF = typeof window.InstallTrigger !== "undefined";
        this.n = this.slides.length;
        this.state = {
            index: 0, pos: 0, width: 0, height: 0, gap: 28,
            dragging: false, pointerId: null, x0: 0, v: 0, t0: 0,
            animating: false, hovering: false, startTime: 0, pausedAt: 0, rafId: 0,
        };
        this.opts = Object.assign(
            {
                // peek / rotateY / zDepth / scaleDrop tuned up so the
                // previous & next cards stay clearly visible beside the
                // centered active card (was a tight coverflow before).
                gap: 24, peek: 0.24, rotateY: 30, zDepth: 160, scaleDrop: 0.16,
                blurMax: 1.2, activeLeftBias: 0, interval: 4500, transitionMs: 900,
                keyboard: true,
                breakpoints: [
                    { mq: "(max-width: 1200px)", gap: 20, peek: 0.21, rotateY: 26, zDepth: 130, scaleDrop: 0.15, activeLeftBias: 0 },
                    { mq: "(max-width: 1000px)", gap: 16, peek: 0.17, rotateY: 20, zDepth: 105, scaleDrop: 0.14, activeLeftBias: 0 },
                    { mq: "(max-width: 768px)", gap: 12, peek: 0.12, rotateY: 15, zDepth: 85, scaleDrop: 0.13, activeLeftBias: 0 },
                    { mq: "(max-width: 560px)", gap: 10, peek: 0.09, rotateY: 11, zDepth: 65, scaleDrop: 0.12, activeLeftBias: 0 },
                ],
            },
            opts
        ) as Required<MzaCarouselOptions>;
        if (this.isFF) {
            this.opts.rotateY = 10;
            this.opts.zDepth = 0;
            this.opts.blurMax = 0;
        }
        this._init();
    }

    private _init() {
        this._setupDots();
        this._bind();
        this._preloadImages();
        this._measure();
        this.goTo(0, false);
        this._startCycle();
        this._loop();
    }

    private _preloadImages() {
        this.slides.forEach((sl) => {
            const card = sl.querySelector(".mzaCard") as HTMLElement;
            const bg = getComputedStyle(card).getPropertyValue("--mzaCard-bg");
            const m = /url\((?:'|")?([^'")]+)(?:'|")?\)/.exec(bg);
            if (m && m[1]) {
                const img = new Image();
                img.src = m[1];
            }
        });
    }

    private _setupDots() {
        this.pagination.innerHTML = "";
        this.dots = this.slides.map((_, i) => {
            const b = document.createElement("button");
            b.type = "button";
            b.className = "mzaCarousel-dot";
            b.setAttribute("role", "tab");
            b.setAttribute("aria-label", `Go to slide ${i + 1}`);
            b.addEventListener("click", () => this.goTo(i));
            this.pagination.appendChild(b);
            return b;
        });
    }

    private _bind() {
        this.prevBtn.addEventListener("click", () => this.prev());
        this.nextBtn.addEventListener("click", () => this.next());
        if (this.opts.keyboard) {
            this.root.addEventListener("keydown", (e: KeyboardEvent) => {
                if (e.key === "ArrowLeft") this.prev();
                if (e.key === "ArrowRight") this.next();
            });
        }
        const pe = this.viewport;
        pe.addEventListener("pointerdown", (e: PointerEvent) => this._onDragStart(e));
        pe.addEventListener("pointermove", (e: PointerEvent) => this._onDragMove(e));
        pe.addEventListener("pointerup", (e: PointerEvent) => this._onDragEnd(e));
        pe.addEventListener("pointercancel", (e: PointerEvent) => this._onDragEnd(e));
        this.root.addEventListener("mouseenter", () => {
            this.state.hovering = true;
            this.state.pausedAt = performance.now();
        });
        this.root.addEventListener("mouseleave", () => {
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
                    if (k !== "mq") {
                        (this.opts as unknown as Record<string, number>)[k] = bp[k] as number;
                    }
                });
                this._measure();
                this._render();
            };
            if (m.addEventListener) m.addEventListener("change", apply);
            else m.addListener(apply);
            if (m.matches) apply();
            this._mqHandlers.push({ mq: m, fn: apply });
        });
        this.viewport.addEventListener("pointermove", (e: PointerEvent) => this._onTilt(e));
        window.addEventListener("orientationchange", this._onResizeOrientation);
    }

    private _measure() {
        const viewRect = this.viewport.getBoundingClientRect();
        const rootRect = this.root.getBoundingClientRect();
        const pagRect = this.pagination.getBoundingClientRect();
        const bottomGap = Math.max(12, Math.round(rootRect.bottom - pagRect.bottom));
        const pagSpace = pagRect.height + bottomGap;
        const availH = viewRect.height - pagSpace;
        const cardH = Math.max(320, Math.min(640, Math.round(availH)));
        this.state.width = viewRect.width;
        this.state.height = viewRect.height;
        this.state.gap = this.opts.gap;
        // Active card width now leaves real room (via opts.peek) for the
        // neighbouring slides to be visible on both sides of the viewport.
        this.slideW = Math.min(640, this.state.width * (1 - this.opts.peek * 2));
        this.root.style.setProperty("--mzaPagH", `${pagSpace}px`);
        this.root.style.setProperty("--mzaCardH", `${cardH}px`);
    }

    private _onTilt(e: PointerEvent) {
        const r = this.viewport.getBoundingClientRect();
        const mx = (e.clientX - r.left) / r.width - 0.5;
        const my = (e.clientY - r.top) / r.height - 0.5;
        this.root.style.setProperty("--mzaTiltX", (my * -6).toFixed(3));
        this.root.style.setProperty("--mzaTiltY", (mx * 6).toFixed(3));
    }

    private _onDragStart(e: PointerEvent) {
        if (e.pointerType === "mouse" && e.button !== 0) return;
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
        this.progressBar.style.transform = `scaleX(${p})`;
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
            else this._afterSnap(i);
        };
        requestAnimationFrame(step);
    }

    private _afterSnap(i: number) {
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
        const tiltX = parseFloat(this.root.style.getPropertyValue("--mzaTiltX") || "0");
        const tiltY = parseFloat(this.root.style.getPropertyValue("--mzaTiltY") || "0");
        for (let i = 0; i < this.n; i++) {
            let d = i - this.state.pos;
            if (d > this.n / 2) d -= this.n;
            if (d < -this.n / 2) d += this.n;
            const absD = Math.abs(d);
            const weight = Math.max(0, 1 - absD * 2);
            const biasActive = -this.slideW * this.opts.activeLeftBias * weight;
            const tx = d * span + biasActive;
            const depth = -absD * this.opts.zDepth;
            const rot = -d * this.opts.rotateY;
            const scale = 1 - Math.min(absD * this.opts.scaleDrop, 0.42);
            const blur = Math.min(absD * this.opts.blurMax, this.opts.blurMax);
            const z = Math.round(1000 - absD * 10);
            // Keep the immediate left/right neighbours clearly visible
            // (only fade once a slide is further than one position away).
            const opacity = absD <= 1.05 ? 1 - absD * 0.32 : Math.max(0, 0.35 - (absD - 1) * 0.5);
            const s = this.slides[i];
            // IMPORTANT: the slide is positioned with `left: 50%`, so to truly
            // center the active card on that midpoint we must also shift it
            // back by -50% of its own width (calc(-50% + txpx)), then layer
            // the d-based offset on top. Previously only -50% on Y was applied,
            // which left the "active" card's left edge (not its center) sitting
            // on screen-center — i.e. it was always shifted right.
            if (this.isFF) {
                s.style.transform = `translate(calc(-50% + ${tx}px),-50%) scale(${scale})`;
                s.style.filter = "none";
            } else {
                s.style.transform = `translate3d(calc(-50% + ${tx}px),-50%,${depth}px) rotateY(${rot}deg) scale(${scale})`;
                s.style.filter = `blur(${blur}px)`;
            }
            s.style.opacity = String(opacity);
            s.style.zIndex = String(z);
            s.style.pointerEvents = absD < 0.5 ? "auto" : "none";
            if (markActive) s.dataset.state = Math.round(this.state.index) === i ? "active" : "rest";
            const card = s.querySelector(".mzaCard") as HTMLElement;
            const parBase = Math.max(-1, Math.min(1, -d));
            const parX = parBase * 48 + tiltY * 2.0;
            const parY = tiltX * -1.5;
            const bgX = parBase * -64 + tiltY * -2.4;
            card.style.setProperty("--mzaParX", `${parX.toFixed(2)}px`);
            card.style.setProperty("--mzaParY", `${parY.toFixed(2)}px`);
            card.style.setProperty("--mzaParBgX", `${bgX.toFixed(2)}px`);
            card.style.setProperty("--mzaParBgY", `${(parY * 0.35).toFixed(2)}px`);
        }
        const active = this._mod(Math.round(this.state.pos), this.n);
        this.dots.forEach((d, i) => d.setAttribute("aria-selected", i === active ? "true" : "false"));
    }

    destroy() {
        cancelAnimationFrame(this.state.rafId);
        this.ro?.disconnect();
        window.removeEventListener("orientationchange", this._onResizeOrientation);
        this._mqHandlers.forEach(({ mq, fn }) => {
            if (mq.removeEventListener) mq.removeEventListener("change", fn);
            else mq.removeListener(fn);
        });
    }
}

/* ----------------------------------------------------------------------
 * Component
 * ------------------------------------------------------------------- */

export default function PersonalProject() {
    const rootRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<MzaCarouselEngine | null>(null);

    useEffect(() => {
        if (!rootRef.current) return;
        engineRef.current = new MzaCarouselEngine(rootRef.current, { transitionMs: 900 });
        return () => {
            engineRef.current?.destroy();
            engineRef.current = null;
        };
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: mzaCarouselCss }} />
            <section className="mzaCarouselSection">
                <div
                    className="mzaCarousel"
                    id="mzaCarousel"
                    ref={rootRef}
                    aria-roledescription="carousel"
                    aria-label="Featured cards"
                >
                    <div className="mzaCarousel-viewport" tabIndex={0}>
                        <div className="mzaCarousel-track">
                            {slides.map((slide, i) => (
                                <article
                                    className="mzaCarousel-slide"
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${i + 1} of ${slides.length}`}
                                    key={slide.id}
                                >
                                    <div
                                        className="mzaCard"
                                        style={{ "--mzaCard-bg": `url('${slide.image}')` } as React.CSSProperties}
                                    >
                                        <header className="mzaCard-head mzaPar-1">
                                            <h2 className="mzaCard-title">{slide.title}</h2>
                                            <p className="mzaCard-kicker">{slide.kicker}</p>
                                        </header>
                                        <p className="mzaCard-text mzaPar-2">{slide.text}</p>
                                        <footer className="mzaCard-actions mzaPar-3">
                                            <button className="mzaBtn">{slide.cta}</button>
                                        </footer>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div className="mzaCarousel-controls" aria-label="Controls">
                        <button className="mzaCarousel-prev" aria-label="Previous slide" type="button">
                            ‹
                        </button>
                        <button className="mzaCarousel-next" aria-label="Next slide" type="button">
                            ›
                        </button>
                    </div>
                    <div className="mzaCarousel-pagination" role="tablist" aria-label="Slide navigation"></div>
                    <div className="mzaCarousel-progress" aria-hidden="true">
                        <span className="mzaCarousel-progressBar"></span>
                    </div>
                </div>
            </section>
        </>
    );
}