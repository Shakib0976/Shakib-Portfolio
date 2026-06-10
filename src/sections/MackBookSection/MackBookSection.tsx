"use client";
import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export default function MackBookSection() {
  return (
    <div className="w-full overflow-hidden ">
      <MacbookScroll
        title={
          <span>
            Building Modern Web Experiences.
            <br />
            Turning Ideas Into Scalable Applications.
          </span>
        }
        src="/video/video1.mp4" 
        showGradient={false}
      />
    </div>
  );
}

