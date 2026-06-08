import React from 'react';
import { MapPin, TrendingUp, Target, Wrench } from 'lucide-react'; // npm i lucide-react

export default function AboutMe() {
  return (
    <div className=" container text-gray-900 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden p-6 md:p-12 lg:p-24">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.03),transparent_50%)] pointer-events-none" />

      <div className=" relative z-10 space-y-12">

        {/* Header Section */}
        <header className="space-y-2">
          <span className="text-xs font-semibold tracking-[0.2em] text-black uppercase">
            Who Am I
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            About Me
          </h1>
          <div className="h-0.5 w-12 bg-cyan-500/20 rounded" />
        </header>

        {/* Main Sections: Location & Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Interactive Location Card */}
          <div className="lg:col-span-5 group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl h-72 p-6 shadow-[0_0_40px_rgba(6,182,212,0.08)] transition-all duration-500 hover:border-cyan-400/50">

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

            {/* Default Content */}
            <div className="relative z-10 h-full flex flex-col justify-between transition-all duration-500 group-hover:opacity-0">

              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                <MapPin size={14} className="animate-pulse" />
                <span>Location</span>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Sylhet, Bangladesh
                </h2>

                <div className="mt-3 space-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <p>Coordinates: 24.8949° N, 91.8687° E</p>
                  <p>Time Zone: GMT+6 (BST)</p>
                </div>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                Hover to Explore Map
              </div>
            </div>

            {/* Map Appears On Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100">

              <iframe
                title="Sylhet Map"
                src="https://maps.google.com/maps?q=Sylhet,Bangladesh&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-black/50 backdrop-blur-md px-4 py-2 text-white">
                <h3 className="font-semibold">Sylhet, Bangladesh</h3>
                <p className="text-xs text-slate-300">
                  The tea capital of Bangladesh 🍃
                </p>
              </div>
            </div>
          </div>

          {/* Brief Card */}
          <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur-sm p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-slate-700">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase block">
                Brief
              </span>
              <p className="text-base leading-relaxed text-slate-300 font-light">
                I am a software engineer who enjoys building useful digital products with
                clean architecture, scalable backend services, and thoughtful frontend
                experiences.
              </p>
            </div>

            <div className="border-l-2 border-emerald-500/50 pl-4 py-1 italic text-slate-300 text-sm font-medium tracking-wide">
              "Build with clarity, scale with discipline, and learn without ego."
            </div>
          </div>
        </div>

        {/* Lower Row Grid: Growth, Focus, Craft */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Growth Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 space-y-4 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <TrendingUp size={16} className="text-cyan-500" />
              <span>Growth</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              I grow by shipping real projects, learning from feedback, and improving one technical skill at a time.
            </p>
          </div>

          {/* Focus Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 space-y-4 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <Target size={16} className="text-cyan-500" />
              <span>Focus</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              My current focus is AI-backed applications, reliable backend systems, and performance-first product development.
            </p>
          </div>

          {/* Craft Card */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-6 space-y-4 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/40">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              <Wrench size={16} className="text-cyan-500" />
              <span>Craft</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              I care about craft: maintainable code, meaningful abstractions, and user experiences that feel smooth and intentional.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}