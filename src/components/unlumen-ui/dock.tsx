"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  HelpCircle,
  Image,
  GraduationCap,
  FolderGit2,
  Code,
  User,
  HomeIcon,
} from "lucide-react";
import Link from "next/link";

const dockItems = [
  { id: "home", to: "#home", name: "Home", icon: HomeIcon, color: "bg-gray-700" },
  { id: "about", to: "#about", name: "About", icon: User, color: "bg-gray-700" },
  { id: "skills", to: "#skills", name: "Skills", icon: Code, color: "bg-gray-700" },
  { id: "projects", to: "#projects", name: "Projects", icon: FolderGit2, color: "bg-gray-700" },
  { id: "education", to: "#education", name: "Education", icon: GraduationCap, color: "bg-gray-700" },
  { id: "faq", to: "#faq", name: "Q&A", icon: HelpCircle, color: "bg-gray-700" },
  { id: "contact", to: "#contact", name: "Contact", icon: Mail, color: "bg-gray-700" },
];

interface DockIconProps {
  item: typeof dockItems[0];
  mouseY: any;
  isActive: boolean;
}

function DockIcon({ item, mouseY, isActive }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = item.icon;
  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const sizeSync = useTransform(distance, [-150, 0, 150], [32, 52, 32]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link href={item.to}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        className="aspect-square cursor-pointer z-50 flex items-center justify-center relative group"
        whileTap={{ scale: 0.95 }}
        animate={{ scale: isActive ? 1.25 : 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        <motion.div
          className={`w-full h-full rounded-2xl ${isActive ? "bg-white dark:bg-gray-400" : ""} shadow-lg flex p-1 items-center justify-center relative overflow-hidden ${item.color}`}
          animate={{
            x: isClicked ? -2 : isHovered ? 15 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="text-xl"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Icon size={20} color={isActive ? "#000000" : "#ffffff"} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 12 : -10,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none backdrop-blur-sm"
        >
          {item.name}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export function Dock() {
  const mouseY = useMotionValue(Infinity);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = dockItems.map((i) => i.id);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= docHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      let closest = sectionIds[0];
      let closestDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - windowHeight * 0.25);
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

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 p-8" onMouseMove={(e) => mouseY.set(e.clientY)} onMouseLeave={() => mouseY.set(Infinity)}>
      <motion.div
        className="flex flex-col w-fit items-center gap-8 rounded-3xl bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-teal-500/20 text-white px-2 py-4 border-2 border-white/20 shadow-xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
      >
        {dockItems.map((item) => (
          <DockIcon
            key={item.id}
            item={item}
            mouseY={mouseY}
            isActive={activeSection === item.id}
          />
        ))}
      </motion.div>
    </div>
  );
}
