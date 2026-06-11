"use client";


import Link from "next/link";
import { IoLogoSkype } from "react-icons/io";
import {
  Menu, X, HomeIcon,
  User,
  Code,
  FolderGit2,
  GraduationCap,
  HelpCircle,
  Mail,
} from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);


export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);



  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: `#${id}`,
        offsetY: 90,
      },
      ease: "power3.inOut",
    });

    setOpen(false);
  };


  const dockItems = [
    { id: "home", to: "#home", name: "Home", icon: HomeIcon },
    { id: "about", to: "#about", name: "About", icon: User },
    { id: "skills", to: "#skills", name: "Skills", icon: Code },
    { id: "projects", to: "#projects", name: "Projects", icon: FolderGit2 },
    { id: "education", to: "#education", name: "Education", icon: GraduationCap },
    { id: "faq", to: "#faq", name: "Q&A", icon: HelpCircle },
    { id: "contact", to: "#contact", name: "Contact", icon: Mail },
  ];


  return (
    <div
      ref={navRef}
      className="fixed top-3 left-0 right-0 z-50 "
    >
      <div className="container mx-auto overflow-hidden">
        <nav className="bg-white border border-gray-200 rounded-2xl shadow-sm px-5 py-3">

          <div className="flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <IoLogoSkype className="text-white text-2xl" />
              </div>

              <h1 className="text-xs md:text-sm uppercase tracking-wider font-medium">
                DESIGN BY SHAKIB
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-7">
              {dockItems.map((item, index) => {

                return (
                  <div key={item.id} className="flex items-center gap-3">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="relative group text-[11px] uppercase font-medium cursor-pointer"
                    >
                      {item.name}

                      <span
                        className="
    absolute
    left-0
    -bottom-1
    h-[1.5px]
    w-0
    bg-black
    transition-all
    duration-300
    group-hover:w-full
  "
                      />
                    </button>

                    {index !== dockItems.length - 1 && (
                      <span className="text-gray-400">/</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-black rounded-lg px-7 py-2 text-[11px] uppercase font-medium transition-all hover:bg-black hover:text-white"
              >
                Hire Me
              </button>

            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pt-6" : "max-h-0"
              }`}
          >
            <div className="flex flex-col">

              {dockItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 rounded-xl px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
              <Link href="#contact">
                <button className="mt-3 border border-black rounded-xl py-3 font-medium hover:bg-black hover:text-white transition">
                  Hire Me
                </button>
              </Link>

            </div>
          </div>

        </nav>
      </div>
    </div>
  );
}