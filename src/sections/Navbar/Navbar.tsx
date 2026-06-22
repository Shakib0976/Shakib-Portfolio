// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Home } from "lucide-react";
// import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoSkype } from "react-icons/io";
// import { ThemeToggle } from "@/components/ui/themeToggleButton";

// const dockItems = [
//   {
//     id: "linkedin",
//     to: "https://www.linkedin.com/feed/",
//     name: "LinkedIn",
//     icon: FaLinkedin,
//     external: true,
//   },
//   {
//     id: "github",
//     to: "https://github.com/Shakib0976",
//     name: "GitHub",
//     icon: FaGithub,
//     external: true,
//   },
//   {
//     id: "facebook",
//     to: "https://www.facebook.com/md.shakib.khan.809698",
//     name: "Facebook",
//     icon: FaFacebook,
//     external: true,
//   },
//   {
//     id: "twitter",
//     to: "https://x.com/ShakibMd5698",
//     name: "Twitter",
//     icon: FaXTwitter,
//     external: true,
//   },
// ];

// interface NavIconProps {
//   item: typeof dockItems[0];
//   isActive: boolean;
// }

// function NavIcon({ item, isActive }: NavIconProps) {
//   const [hovered, setHovered] = useState(false);
//   const Icon = item.icon;

//   const iconContent = (
//     <motion.div
//       className="relative flex items-center dark:text-white justify-center gap-5 rounded-full cursor-pointer"
//       style={{ width: 36, height: 36 }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       animate={{
//         backgroundColor: isActive
//           ? "rgba(255,255,255,0.12)"
//           : hovered
//             ? "rgba(255,255,255,0.07)"
//             : "rgba(255,255,255,0)",
//         scale: isActive ? 1.08 : 1,
//       }}
//       transition={{ type: "spring", stiffness: 400, damping: 25 }}
//     >
//       <Icon size={25} />

//       <AnimatePresence>
//         {isActive && (
//           <motion.span
//             key="dot"
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0 }}
//             style={{
//               position: "absolute",
//               bottom: 3,
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: 3,
//               height: 3,
//               borderRadius: "50%",
//               backgroundColor: "#fff",
//             }}
//           />
//         )}
//       </AnimatePresence>

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0, y: -4, scale: 0.85 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -4, scale: 0.85 }}
//             transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             style={{
//               position: "absolute",
//               top: "calc(100% + 8px)",
//               left: "50%",
//               transform: "translateX(-50%)",
//               background: "rgba(15,15,15,0.85)",
//               color: "#fff",
//               fontSize: 11,
//               padding: "3px 8px",
//               borderRadius: 6,
//               whiteSpace: "nowrap",
//               pointerEvents: "none",
//               border: "1px solid rgba(255,255,255,0.08)",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//               zIndex: 99,
//             }}
//           >
//             {item.name}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );

//   if (item.external) {
//     return (
//       <a href={item.to} target="_blank" rel="noopener noreferrer">
//         {iconContent}
//       </a>
//     );
//   }

//   return (
//     <Link href={item.to}>
//       {iconContent}
//     </Link>
//   );
// }

// export function Navbar() {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const sectionIds = ["home", "about", "skills", "projects", "education", "contact"];

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const docHeight = document.documentElement.scrollHeight;

//       if (scrollY + windowHeight >= docHeight - 10) {
//         setActiveSection(sectionIds[sectionIds.length - 1]);
//         return;
//       }

//       let closest = sectionIds[0];
//       let closestDistance = Infinity;

//       sectionIds.forEach((id) => {
//         const el = document.getElementById(id);
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const distance = Math.abs(rect.top - windowHeight * 0.25);
//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closest = id;
//         }
//       });

//       setActiveSection(closest);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="fixed container mx-auto top-4 left-4 right-4 z-50">
//       <div
//         className="flex items-center bg-gradient-to-l from-blue-500/20 via-purple-500/20 to-teal-500/20 text-black rounded-full px-4 py-4 backdrop-blur-[20px] border border-white/10 shadow-lg"
//       >
//         <span className="font-medium dark:text-white text-black text-sm mr-auto">
//           <IoLogoSkype size={35} />
//         </span>

//         <div className="flex items-center gap-3">
//           <div className="flex gap-3">
//             {dockItems.map((item) => (
//               <NavIcon
//                 key={item.id}
//                 item={item}
//                 isActive={activeSection === item.id}
//               />
//             ))}
//           </div>
//           <ThemeToggle />

//           <div>
// <Link href="#contact">
//   <button
//     className="text-xs cursor-pointer font-medium px-4 py-1.5 rounded-full active:scale-95 transition-all bg-white/90 text-gray-900"
//   >
//     Contact me
//   </button>
// </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ThemeToggle } from "@/components/ui/themeToggleButton";

gsap.registerPlugin(ScrollToPlugin);


export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = dockItems.map((item) => item.id);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      let closest = sectionIds[0];
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        const distance = Math.abs(rect.top - windowHeight * 0.2);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = id;
        }
      });

      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



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
      <div className=" w-full max-w-[1550px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 overflow-hidden">
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
                        className={`
absolute
left-0
-bottom-1
h-[1px]
bg-black
transition-all
duration-500
ease-out
${activeSection === item.id
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                          }
`}
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
            <div className="hidden lg:flex items-center gap-3">

              <div className="flex items-center justify-center rounded-lg border border-gray-200 p-1">
                <ThemeToggle />
              </div>

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