"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains('dark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(isDarkMode);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-500 ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="relative perspective-1000">
        {/* 3D Cube Container */}
        <motion.div
          animate={{ 
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 360]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative w-32 h-32 mx-auto"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Cube Faces - Theme Aware */}
          {[
            { transform: "translateZ(64px)" },
            { transform: "translateZ(-64px) rotateY(180deg)" },
            { transform: "translateX(64px) rotateY(90deg)" },
            { transform: "translateX(-64px) rotateY(-90deg)" },
            { transform: "translateY(64px) rotateX(90deg)" },
            { transform: "translateY(-64px) rotateX(-90deg)" },
          ].map((face, index) => (
            <div
              key={index}
              className="absolute w-32 h-32 border border-gray-200 dark:border-white/10 transition-all duration-300"
              style={{
                backgroundColor: isDark 
                  ? `rgba(255, 255, 255, ${[0.15, 0.08, 0.12, 0.1, 0.14, 0.09][index]})`
                  : `rgba(0, 0, 0, ${[0.08, 0.15, 0.06, 0.12, 0.1, 0.13][index]})`,
                transform: face.transform,
                boxShadow: isDark 
                  ? "0 0 20px rgba(255, 255, 255, 0.05)"
                  : "0 0 20px rgba(0, 0, 0, 0.05)"
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading Indicator */}
        <div className="text-center mt-12">
          {/* Animated Circles */}
          <div className="flex gap-2 justify-center mb-4">
            {[0, 0.15, 0.3].map((delay, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 1,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  isDark ? 'bg-white' : 'bg-gray-900'
                }`}
              />
            ))}
          </div>
          
          <p className={`text-xs font-mono tracking-[0.2em] transition-colors duration-300 ${
            isDark ? 'text-white/50' : 'text-gray-500'
          }`}>
            INITIALIZING
          </p>
        </div>
      </div>
    </div>
  );
}