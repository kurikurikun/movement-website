"use client";

import { useState, useEffect, useCallback } from "react";
import type { Artist } from "@/lib/artists";

interface ActiveShot {
  artist: number;
  photo: number;
}

export default function ArtistGallery({ artists }: { artists: Artist[] }) {
  const [active, setActive] = useState<ActiveShot | null>(null);

  const close = useCallback(() => setActive(null), []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) => {
        if (!cur) return cur;
        const shots = artists.flatMap((a, ai) => a.photos.map((_, pi) => ({ artist: ai, photo: pi })));
        const at = shots.findIndex((s) => s.artist === cur.artist && s.photo === cur.photo);
        return shots[(at + dir + shots.length) % shots.length];
      }),
    [artists]
  );

  useEffect(() => {
    if (!active) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    }
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [active, close, step]);

  const activeArtist = active ? artists[active.artist] : null;

  return (
    <>
      <div className="space-y-28">
        {artists.map((artist, ai) => (
          <article key={artist.slug} id={artist.slug} className="scroll-mt-28">
            <div className="grid lg:grid-cols-[1.15fr,1fr] gap-10 lg:gap-14 items-start">
              {/* Photos — lead image at its natural crop, any extras in a row beneath */}
              <div className="space-y-3">
                {artist.photos.length === 0 ? (
                  <div className="w-full aspect-[3/2] bg-neutral-100 flex items-center justify-center">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
                      Portrait coming soon
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => setActive({ artist: ai, photo: 0 })}
                    className="block w-full overflow-hidden group bg-neutral-100"
                    aria-label={`${artist.name} — photo 1`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={artist.photos[0]}
                      alt={`${artist.name} ${artist.nameJa} — portrait by Chris Moore`}
                      loading="lazy"
                      className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </button>
                )}

                {artist.photos.length > 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    {artist.photos.slice(1).map((src, i) => (
                      <button
                        key={src}
                        onClick={() => setActive({ artist: ai, photo: i + 1 })}
                        className="block overflow-hidden group bg-neutral-100"
                        aria-label={`${artist.name} — photo ${i + 2}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt={`${artist.name} ${artist.nameJa} — portrait by Chris Moore`}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="lg:pt-2">
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                  {artist.name}
                </h2>
                <p className="text-accent-warm font-jp text-xl mt-1">{artist.nameJa}</p>
                <div className="h-[2px] bg-accent-warm w-12 my-5" />

                <p className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase mb-1">
                  Medium / 表現手法
                </p>
                <p className="text-neutral-700 text-sm font-semibold">{artist.mediumEn}</p>
                <p className="text-neutral-500 font-jp text-sm mb-6">{artist.mediumJa}</p>

                <p className="text-neutral-600 leading-relaxed mb-4">{artist.bioEn}</p>
                <p className="text-neutral-500 font-jp leading-relaxed">{artist.bioJa}</p>

                {(artist.instagram || artist.website) && (
                  <div className="flex flex-wrap gap-5 mt-7">
                    {artist.instagram && (
                      <a
                        href={artist.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-neutral-700 underline hover:text-accent-warm transition-colors"
                      >
                        Instagram
                      </a>
                    )}
                    {artist.website && (
                      <a
                        href={artist.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-neutral-700 underline hover:text-accent-warm transition-colors"
                      >
                        Website
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {active && activeArtist && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl z-10 leading-none"
            aria-label="Close"
          >
            &times;
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-4 sm:left-8 text-white/50 hover:text-white text-5xl z-10 leading-none select-none"
            aria-label="Previous"
          >
            &#8249;
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeArtist.photos[active.photo]}
            alt={`${activeArtist.name} ${activeArtist.nameJa}`}
            className="max-h-[82vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-4 sm:right-8 text-white/50 hover:text-white text-5xl z-10 leading-none select-none"
            aria-label="Next"
          >
            &#8250;
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm font-bold">{activeArtist.name}</p>
            <p className="text-white/50 font-jp text-sm">{activeArtist.nameJa}</p>
          </div>
        </div>
      )}
    </>
  );
}
