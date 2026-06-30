"use client";

import { useState, useEffect, useCallback } from "react";

const teamMembers = [
  { name: "Emily Kim", role: "Founder" },
  { name: "Michael Steward", role: "Creative Director" },
  { name: "Emma Rodriguez", role: "Lead Developer" },
  { name: "Julia Gimmel", role: "UX Designer" },
  { name: "Lisa Anderson", role: "Marketing Manager" },
  { name: "James Wilson", role: "Product Manager" },
];

const cardImages = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop",
];

type CardPosition = "center" | "left-1" | "left-2" | "right-1" | "right-2" | "hidden";

function getPosition(i: number, currentIndex: number, total: number): CardPosition {
  const offset = (i - currentIndex + total) % total;
  if (offset === 0) return "center";
  if (offset === 1) return "right-1";
  if (offset === 2) return "right-2";
  if (offset === total - 1) return "left-1";
  if (offset === total - 2) return "left-2";
  return "hidden";
}

const positionStyles: Record<CardPosition, string> = {
  center:
    "z-10 scale-110 translate-x-0 translate-z-0 opacity-100 brightness-100 grayscale-0",
  "left-1":
    "z-[5] scale-90 -translate-x-[200px] opacity-90 grayscale brightness-75",
  "left-2":
    "z-[1] scale-80 -translate-x-[400px] opacity-70 grayscale brightness-50",
  "right-1":
    "z-[5] scale-90 translate-x-[200px] opacity-90 grayscale brightness-75",
  "right-2":
    "z-[1] scale-80 translate-x-[400px] opacity-70 grayscale brightness-50",
  hidden: "opacity-0 pointer-events-none",
};

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nameVisible, setNameVisible] = useState(true);
  const total = teamMembers.length;

  const updateCarousel = useCallback(
    (newIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setNameVisible(false);

      setTimeout(() => {
        setCurrentIndex((newIndex + total) % total);
        setNameVisible(true);
      }, 300);

      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    },
    [isAnimating, total]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
      if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, updateCarousel]);

  useEffect(() => {
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        updateCarousel(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, updateCarousel]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      {/* Title */}
      <h1
        className="-m-30 text-transparent font-black uppercase tracking-tight"
        style={{
          fontSize: "clamp(3rem, 8vw, 7.5rem)",
          fontFamily: '"Arial Black", "Arial Bold", Arial, sans-serif',
          background:
            "linear-gradient(to bottom, rgba(8,42,123,0.35) 30%, rgba(255,255,255,0) 76%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
       Inspirations
      </h1>

      {/* Carousel */}
      <div
        className="relative flex justify-center items-center mt-20"
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "450px",
          perspective: "1000px",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={() => updateCarousel(currentIndex - 1)}
          className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl border-0 outline-none cursor-pointer transition-all duration-300 hover:scale-110 pb-1 pr-[3px]"
          style={{ background: "rgba(8,42,123,0.6)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "rgba(0,0,0,0.8)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "rgba(8,42,123,0.6)")
          }
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Cards */}
        <div
          className="w-full h-full flex justify-center items-center relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          {cardImages.map((src, i) => {
            const pos = getPosition(i, currentIndex, total);
            return (
              <div
                key={i}
                onClick={() => updateCarousel(i)}
                className={`absolute cursor-pointer rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${positionStyles[pos]}`}
                style={{ width: "280px", height: "380px" }}
              >
                <img
                  src={src}
                  alt={`Team Member ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-[800ms]"
                  style={{
                    filter:
                      pos === "center"
                        ? "none"
                        : pos === "hidden"
                        ? "none"
                        : "grayscale(100%)",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => updateCarousel(currentIndex + 1)}
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl border-0 outline-none cursor-pointer transition-all duration-300 hover:scale-110 pb-1 pl-[3px]"
          style={{ background: "rgba(8,42,123,0.6)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "rgba(0,0,0,0.8)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "rgba(8,42,123,0.6)")
          }
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Member Info */}
      <div
        className="text-center mt-10 transition-all duration-500"
        style={{ opacity: nameVisible ? 1 : 0 }}
      >
        <h2
          className="font-bold relative inline-block mb-[10px]"
          style={{
            color: "rgb(8,42,123)",
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          <span
            className="absolute top-full left-0 -translate-x-[120px] h-[2px] w-[100px]"
            style={{ background: "rgb(8,42,123)" }}
          />
          {teamMembers[currentIndex].name}
          <span
            className="absolute top-full right-0 translate-x-[120px] h-[2px] w-[100px]"
            style={{ background: "rgb(8,42,123)" }}
          />
        </h2>
        <p
          className="uppercase tracking-widest font-medium -mt-[15px] pt-[10px] pb-[10px]"
          style={{ color: "#848696", fontSize: "clamp(1rem, 1.5vw, 1.5rem)", opacity: 0.8 }}
        >
          {teamMembers[currentIndex].role}
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-[10px] mt-[60px]">
        {teamMembers.map((_, i) => (
          <button
            key={i}
            onClick={() => updateCarousel(i)}
            className={`w-3 h-3 rounded-full border-0 cursor-pointer transition-all duration-300 ${
              i === currentIndex ? "scale-125" : ""
            }`}
            style={{
              background:
                i === currentIndex
                  ? "rgb(8,42,123)"
                  : "rgba(8,42,123,0.2)",
            }}
            aria-label={`Go to member ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}