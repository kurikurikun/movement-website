"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    tagline: "we believe people should change the world,",
    taglineBold: "for the better",

    image: "/images/hero1.jpg",
  },
  {
    tagline: "we believe video should -move that change",
    taglineBold: "and connect the world",
    image: "/images/hero2.jpeg",
  },
  {
    tagline: "we believe life is an",
    taglineBold: "experi-ment",
    image: "/images/hiroshima-peace-tourim-short-film.jpg",
  },
  {
    tagline: "we are move-ment,",
    taglineBold: "we are -ment to -move",
    image: "/images/tokyo_film_production.jpeg",
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
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background images with dark overlay */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover scale-105"
            style={{
              transform: current === i ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 6s ease-out',
            }}
          />
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
        </div>
      ))}

      {/* Left accent line */}
      <div className="absolute left-8 lg:left-16 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-accent-warm to-transparent opacity-40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="px-8 lg:px-20 max-w-5xl">
          {/* Slide counter */}
          <div className="font-mono text-xs tracking-[0.3em] text-neutral-500 mb-6">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>

          <p
            key={`line1-${current}`}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-wide text-neutral-600 animate-fade-in"
          >
            {slides[current].tagline}
          </p>
          <p
            key={`line2-${current}`}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-neutral-900 mt-2 animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0 }}
          >
            {slides[current].taglineBold}
          </p>

          {/* Accent line under text */}
          <div
            key={`line-${current}`}
            className="mt-6 h-[3px] bg-accent-warm animate-line-grow origin-left"
            style={{ width: '120px' }}
          />
        </div>
      </div>

      {/* Slide indicators — vertical on right side */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 ${
              current === i
                ? "w-[3px] h-10 bg-accent-warm"
                : "w-[2px] h-6 bg-neutral-300 hover:bg-neutral-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase">scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-neutral-500 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
