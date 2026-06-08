"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ImageData {
  src: string;
  alt?: string;
  label?: string;
  subtitle?: string;
}

interface OrbitalImageWheelProps {
  images?: ImageData[];
  className?: string;
}

export function OrbitalImageWheel({ images = [], className }: OrbitalImageWheelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
    }

    autoAdvanceTimerRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, [activeIndex, images.length]);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex];

  return (
    <section className={cn("relative w-full py-20", className)}>
      <div className="mx-auto container px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
          <div className="relative w-full aspect-video">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt || img.label || `Image ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {activeImage && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-gray-300 text-sm mb-2">
                {activeImage.subtitle || activeImage.alt || "Visual Story"}
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-bold">
                {activeImage.label || `Image ${activeIndex + 1}`}
              </h3>
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-center mt-8 flex-wrap">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "px-4 py-2 rounded-full border transition-all duration-300",
                idx === activeIndex
                  ? "border-teal-500 text-white bg-teal-500/20"
                  : "border-gray-600 text-gray-400 hover:border-gray-400"
              )}
            >
              {img.label || `Image ${idx + 1}`}
            </button>
          ))}
        </div>

        <div className="flex gap-1 justify-center mt-6">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                idx === activeIndex ? "w-8 bg-teal-500" : "w-2 bg-gray-600"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OrbitalImageWheel;
