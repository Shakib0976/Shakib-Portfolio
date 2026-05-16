"use client";

import { useState, useEffect, ReactNode } from "react";
import Loader from "@/components/Loader";
import { Navbar } from "@/sections/Navbar/Navbar";
import { Dock } from "@/components/unlumen-ui/dock";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative z-10">
      <aside className="hidden md:flex">
        <Dock />
      </aside>

      <main>
        <Navbar />
        {children}
      </main>

      <footer className="bg-white text-black py-5 border-t-2 border-gray-300">
        <div className="container mx-auto justify-center px-4 flex flex-col md:flex-row items-center">
          <div className="flex flex-col-reverse gap-5 justify-center items-center">
            <p className="text-sm mb-4 md:mb-0">
              © 2025 - All rights reserved by <span className="font-semibold">Shakib</span>
            </p>

            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/md.shakib.khan.809698"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/shakib09/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/Shakib0976"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaGithub size={25} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
