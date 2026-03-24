"use client";

import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";
import Script from "next/script";

export default function ProgrammeContentPage() {
  return (
    <div className="min-h-screen">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      {/* Hero - dark cinematic */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/programme1.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            broadcast <span className="text-accent-warm">programme content</span> from Japan
          </h1>
          <p className="text-white/80 text-xl sm:text-2xl mt-4">
            <span className="text-accent-warm">ment</span> to move
          </p>
          <p className="text-white/70 text-lg mt-8 max-w-3xl mx-auto font-medium">
            We are experienced in producing video content for both web and broadcast that tells the stories of the people and places here in Japan to the world
          </p>
        </div>
      </section>

      {/* Okutama - Tokyo Nature Drift */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  Just two hours from central Tokyo, Okutama is a contrast of nature and cultural experiences — all within city limits. In this feature, we filmed rafting adventures, traditional <em>yomogi dango</em> making, and calming <em>shinrin-yoku</em> forest bathing to showcase the area&apos;s appeal.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  Produced with <strong className="text-accent-warm">JIBTV</strong> and aired on <strong className="text-accent-warm">NHK World</strong>, our team handled everything from planning and filming permissions to shooting and editing.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  We create destination and cultural videos that bring Japan&apos;s stories to life for global audiences.
                </p>
              </div>
              <div className="aspect-video bg-neutral-900">
                <iframe
                  src="https://www.youtube.com/embed/qp4OLMigB_o"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Tokyo Nature Drift: Okutama"
                />
              </div>
            </div>

            {/* Okutama photos */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {["/images/programme-rafting.jpg", "/images/programme-okutama1.jpg", "/images/programme-catch1.jpg"].map((img, j) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={j}
                  src={img}
                  alt={`Okutama screengrab ${j + 1}`}
                  className="w-full aspect-video object-cover"
                />
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Niijima / Shikinejima */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  Another segment for <strong className="text-accent-warm">NHK World&apos;s Catch Japan</strong>, produced with JIBTV, this time on Niijima and Shikinejima islands, part of Tokyo administratively but a couple of hours by boat, or less than hour away from Tokyo City central.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  Our location scout was great weather. The shoot itself was not. In fact our 2 day shoot was cut down to 1 day only as a typhoon arrived and we had to get an earlier boat back to the city. However, having thought that this exact scenario could happen, we had made sure to get some fine day scenery shots on the location scout, some with an iPhone 15 Pro, and others with a mirrorless camera. Those shots, coupled with some supplied shots from a videographer on Niijima, meant that, we could deliver the video, even with a shortened shoot in bad weather.
                </p>
              </div>
              <div className="aspect-video bg-neutral-900">
                <iframe
                  src="https://www.youtube.com/embed/Nfx2UCEAtQI"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Catch Japan - Niijima & Shikinejima"
                />
              </div>
            </div>

            {/* Island photos */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {["/images/25_11_10_catch_japan_tosho_2.jpg", "/images/25_11_10_catch_japan_tosho_10.jpg", "/images/25_11_10_catch_japan_tosho_13.jpg"].map((img, j) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={j}
                  src={img}
                  alt={`Niijima screengrab ${j + 1}`}
                  className="w-full aspect-video object-cover"
                />
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Channel Oishii */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="border border-neutral-200 p-8 sm:p-12 mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-2">
                <span className="text-accent-warm">Channel Oishii</span> : Japanese food streaming channel
              </h2>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-neutral-600 leading-relaxed">
                <strong className="text-accent-warm">Client:</strong> JIBTV (Japan International Broadcasting Inc.)
              </p>
              <p className="text-neutral-600 leading-relaxed">
                <strong className="text-accent-warm">Channel Oishii</strong> is a Japanese food-focused streaming channel available through AmasianTV in North America. Japanese food is more than flavor — it&apos;s stories waiting to be shared. Channel Oishii serves those stories to the world.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We produced the promotional video for the channel launch, as well as original content for the platform — exploring regional cuisines, fermentation traditions, and the personal food narratives of people across Japan.
              </p>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mv.jpg"
              alt="Channel Oishii"
              className="w-full mb-12"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-neutral-500 mb-2 font-medium">Channel Oishii — 30 sec Promotion Video</p>
                <p className="text-sm text-neutral-400 mb-3">Our concept: a <span className="text-accent-warm font-medium">noren</span> curtain as the visual motif — a symbol of welcome at Japanese restaurants — to reveal each scene.</p>
                <div className="aspect-video bg-neutral-900">
                  <iframe
                    src="https://www.youtube.com/embed/gW14zBPuo3c"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Channel Oishii Promotion Video"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2 font-medium">Channel Oishii — 15 sec Promotion Video</p>
                <p className="text-sm text-neutral-400 mb-3">Our concept for the shorter cut: a <span className="text-accent-warm font-medium">bento box</span> as the framing device — each compartment revealing a different taste of the channel.</p>
                <div className="aspect-video bg-neutral-900">
                  <iframe
                    src="https://www.youtube.com/embed/Ku08sQGhcdc"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Channel Oishii Stories"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Currypedia & Shibuyummy */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="border border-neutral-200 bg-white p-8 sm:p-12 mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-2">
                <span className="text-accent-warm">Currypedia</span> and <span className="text-accent-warm">Shibuyummy</span> : come taste the food and culture of Tokyo
              </h2>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-neutral-600 leading-relaxed">
                <strong className="text-accent-warm">Format:</strong> Two six-episode digital food culture series, presented by Shizuka Anderson
              </p>
              <p className="text-neutral-600 leading-relaxed">
                <strong className="text-accent-warm">Services:</strong> Creative concept development, branding, location coordination, filming permissions, full video production, post-production, and digital engagement strategy
              </p>
              <p className="text-neutral-600 leading-relaxed">
                To help JIBTV reach a global audience with engaging, culturally rich storytelling, we produced two original six-episode series — <em>Currypedia</em> and <em>Shibuyummy</em> — exploring Japan&apos;s vibrant food culture in fresh, innovative ways.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                <strong className="text-accent-warm">Currypedia</strong> dives into the world of Japanese curry, following the presenter as she visits unique curry restaurants across Tokyo, uncovering personal stories behind each dish. To elevate the viewing experience, we integrated original animation and playful visual devices — such as hand-drawn map sketches on restaurant tissues — blending digital storytelling with the real world.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                <strong className="text-accent-warm">Shibuyummy</strong> takes viewers inside the evolving food scene of Shibuya, from &quot;neo-sushi&quot; to over-the-top parfaits, while pushing the boundaries of how digital content connects with physical space. We designed the series&apos; visual identity — from the on-screen branding to the presenter&apos;s T-shirt — and created <em>Shibuyummy</em> NFC-enabled stickers distributed to featured shops. When scanned with a smartphone, the stickers instantly opened the series&apos; YouTube link, extending the storytelling beyond the screen and into the real world.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Together, these series showcase our ability to deliver not only cinematic, broadcast-ready storytelling but also creative audience engagement strategies that bridge physical experiences and digital platforms — making culture and content more interactive and memorable.
              </p>
            </div>

            {/* Elfsight YouTube Gallery */}
            <div
              className="elfsight-app-d0ec4d81-93c4-4742-8314-521b4a99a126"
              data-elfsight-app-lazy
            />
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent" />
        <FadeInSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-jp mb-4">
            番組制作のご相談<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-3">
            Binge (watch) on our food (content).
          </p>
          <p className="text-neutral-400 font-jp mb-10">
            企画段階からお気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
          >
            Contact Us / お問い合わせ
          </Link>
        </FadeInSection>
      </section>
    </div>
  );
}
