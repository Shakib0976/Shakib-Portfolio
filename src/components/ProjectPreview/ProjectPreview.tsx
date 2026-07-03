"use client";

import { useRef } from "react";
import gsap from "gsap";

interface Props {
    src: string;
    alt: string;
}

export default function ProjectPreview({ src, alt }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleEnter = () => {
        if (!wrapperRef.current || !imageRef.current) return;

        // Render হওয়ার পর image-এর আসল height
        const renderedHeight = imageRef.current.getBoundingClientRect().height;

        // Container height
        const wrapperHeight = wrapperRef.current.getBoundingClientRect().height;

        // যতটুকু scroll করা যাবে
        const distance = renderedHeight - wrapperHeight;

        console.log({
            renderedHeight,
            wrapperHeight,
            distance,
        });

        gsap.killTweensOf(imageRef.current);

        gsap.to(imageRef.current, {
            y: -distance,
            duration: 8,
            ease: "none",
        });
        console.log("naturalHeight", imageRef.current.naturalHeight);
        console.log("renderedHeight", imageRef.current.getBoundingClientRect().height);
        console.log("wrapperHeight", wrapperRef.current.getBoundingClientRect().height);
    };

    const handleLeave = () => {
        if (!imageRef.current) return;

        gsap.killTweensOf(imageRef.current);

        gsap.to(imageRef.current, {
            y: 0,
            duration: 1,
            ease: "power2.out",
        });
    };

    return (
        <div
            ref={wrapperRef}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative w-full h-full overflow-hidden rounded-[32px]"
        >
            <img
                ref={imageRef}
                src={src}
                alt={alt}
                draggable={false}
                className="absolute left-0 top-0 w-full max-w-none will-change-transform"
                style={{
                    height: "auto",
                }}
            />
        </div>
    );
}