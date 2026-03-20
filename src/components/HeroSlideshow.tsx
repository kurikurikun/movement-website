"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    tagline: "we believe people should change the world, for the better",
    image: "https://picsum.photos/seed/movement1/1920/1080",
  },
  {
    tagline: "we believe video should -move that change and connect the world",
    image: "https://picsum.photos/seed/movement2/1920/1080",
  },
  {
    tagline: "we believe life is an experi-ment",
    image: "https://picsum.photos/seed/movement3/1920/1080",
  },
  {
    tagline: "we are move-ment, we are -ment to -move",
    image: "https://picsum.photos/seed/movement4/1920/1080",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <p
            key={current}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-wide animate-fade-in"
          >
            {slides[current].tagline}
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === i ? "bg-white w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
