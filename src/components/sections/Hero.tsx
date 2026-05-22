"use client";

import { useState, useEffect } from "react";
import { GradientText } from "@/components/ui/GradientText";
import { personal } from "@/data/portfolio";

export const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const tagline = personal.taglines[currentTagline];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === tagline) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(tagline.slice(0, displayText.length + 1));
      }, 100);
    } else if (displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50);
    } else {
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % personal.taglines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTagline]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-white/50 text-lg font-medium tracking-wide">Hi, I&apos;m</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap">
              <GradientText>{personal.name}</GradientText>
            </h1>
            <div className="flex items-center h-12">
              <span className="text-xl sm:text-2xl text-white/75 font-medium">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 align-middle animate-pulse" />
              </span>
            </div>
          </div>

          <p className="text-white/55 text-base sm:text-lg max-w-md leading-relaxed">
            {personal.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity duration-200 text-sm"
            >
              View Projects
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-white/5 backdrop-blur-md border border-white/15 rounded-xl font-semibold text-white/80 hover:bg-white/10 transition-all duration-200 text-sm"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: decorative circle */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-3xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <GradientText className="text-8xl font-bold opacity-70">SS</GradientText>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 text-xs">
        <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/20" />
        <span className="tracking-widest uppercase text-[10px]">scroll</span>
      </div>
    </section>
  );
};
