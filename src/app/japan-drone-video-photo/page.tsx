import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import Lightbox from "@/components/Lightbox";
import Link from "next/link";

const dronePhotos = [
  "/images/japan_drone_photos_dji_1.jpg",
  "/images/japan_drone_photos_dji_2.jpg",
  "/images/japan_drone_photos_dji_4.jpg",
  "/images/japan_drone_photos_dji_5.jpg",
  "/images/japan_drone_photos_dji_6.jpg",
  "/images/japan_drone_photos_dji_7.jpg",
  "/images/japan_drone_photos_dji_8.jpg",
  "/images/japan_drone_photos_dji_9.jpg",
  "/images/japan_drone_photos_dji_10.jpg",
  "/images/japan_drone_photos_dji_12.jpg",
  "/images/japan_drone_photos_dji_13.jpg",
  "/images/japan_drone_photos_dji_14.jpg",
  "/images/japan_drone_photos_dji_15.jpg",
  "/images/japan_drone_photos_dji_16.jpg",
  "/images/japan_drone_photos_dji_17.jpg",
  "/images/japan_drone_photos_dji_18.jpg",
  "/images/japan_drone_photos_dji_19.jpg",
  "/images/japan_drone_photos_dji_20.jpg",
];

export const metadata: Metadata = {
  title: "Japan Drone Video & Photo",
  description:
    "Professional drone video and aerial photography across Japan. DJI Mavic 3 Pro Cine, licensed with Japan-wide flight permit (無人航空機全国包括飛行許可). ドローン空撮映像・写真制作。",
  alternates: { canonical: "https://www.move-ment.co/japan-drone-video-photo" },
  openGraph: {
    title: "Drone Video & Aerial Photography Japan | move-ment",
    description: "Licensed drone video and aerial photo production across Japan. Cinematic 4K footage, nationwide flight permit, fully insured.",
    url: "https://www.move-ment.co/japan-drone-video-photo",
    images: [{ url: "/images/japan_drone_photos_dji_123.jpg", width: 1200, height: 630, alt: "Japan drone aerial video" }],
  },
};

export default function DronePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/drone1.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/90" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Aerial Services</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
            Drone<br />Video &amp; Photo<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-500 text-lg font-jp mt-3">日本全国ドローン撮影</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-12">
              we can give you <span className="text-accent-warm">air cover</span> throughout Japan
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-neutral-600 text-lg leading-relaxed">
                Looking for compelling, dynamic photos and video from the air in Japan?
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We have filmed with drones in downtown Tokyo, Kyoto&apos;s Yasaka Pagoda, the Arashiyama bamboo forest, castles, rivers, factories, outdoor hot springs, lighthouses, and lakes throughout Japan.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We carry full <strong className="text-accent-warm">accident liability insurance</strong> and hold <strong className="text-accent-warm">nationwide comprehensive drone flight permission</strong>. Our main system is the <strong>DJI Mavic 3 Pro Cine</strong> with 3 onboard cameras for quick focal length switching, backed up by a <strong>DJI Mini 3 Pro</strong> for scouting and tight spaces.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Getting permission to fly drones where you want to in Japan can be tricky (or, in some cases, surprisingly easy) so get in touch and we can help out.
              </p>
            </div>

            <div className="aspect-video bg-neutral-900 mb-12">
              <iframe
                src="https://player.vimeo.com/video/508302023"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Japan drone reel"
              />
            </div>

            <div className="space-y-6">
              <p className="text-neutral-500 font-jp leading-relaxed">
                私たちはこれまで、東京のビル屋上や街中、京都・八坂の塔や嵐山の竹林、歴史ある城や川辺、工場、露天温泉、灯台、湖など、日本各地のさまざまな場所でドローン撮影を行ってきました。
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                安心してご依頼いただけるよう、<strong className="text-accent-warm">全国包括飛行許可</strong>と<strong className="text-accent-warm">賠償責任保険</strong>を完備。メイン機材の <strong>DJI Mavic 3 Pro Cine</strong> には3つのカメラを搭載しており、シーンに最適な焦点距離に素早く切り替えることができます。さらに、軽量で機動力に優れた <strong>DJI Mini 3 Pro</strong> を予備機として用意しており、ロケハンにも最適です。
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                日本でドローンを飛ばすには場所ごとに許可が必要ですが、手続きが複雑なケースもあれば、意外とすんなり飛ばせるケースもあります。ぜひお気軽にご相談ください。
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Drone Videography */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-4">
              drone <span className="text-accent-warm">videography</span> in Japan
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-12 max-w-3xl">
              We have filmed from the air all around Japan, including ruined castles, life-sized Gundam figures, on the slopes of Mt Fuji, remote islands, and more.
            </p>

            <div className="space-y-12 mb-8">
              <div>
                <p className="text-sm text-neutral-500 mb-3 font-medium">Tokyo and Japan drone reel</p>
                <div className="aspect-video bg-neutral-900">
                  <iframe
                    src="https://player.vimeo.com/video/411378660"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Tokyo and Japan drone reel"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-3 font-medium">Yamagata Prefecture — terraced rice fields, Haguro Pagoda, Mt Gassan, Yamadera</p>
                <div className="aspect-video bg-neutral-900">
                  <iframe
                    src="https://player.vimeo.com/video/605239748"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Yamagata drone footage"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-3 font-medium">Fujinomiya Route on Mt Fuji by drone</p>
                <div className="aspect-video bg-neutral-900">
                  <iframe
                    src="https://player.vimeo.com/video/893190904"
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Fujinomiya Route on Mt Fuji by drone"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 border-accent-warm/20 p-8 text-center mt-8">
              <p className="text-neutral-500 mb-4">More Japan drone videos</p>
              <a
                href="https://vimeo.com/showcase/10888329"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
              >
                Vimeo Showcase →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Drone Photography */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-4">
              drone <span className="text-accent-warm">photography</span> in Japan
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6 max-w-4xl">
              A selection of photographs of Japan from the air taken for clients, including drone shots of Mt Fuji, Hachijyojima island, Oshima Island, the Kyoto Amanohashidate and more. <a href="https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors">Real estate drone photography is here</a>.
            </p>
            <p className="text-neutral-500 font-jp leading-relaxed mb-12 max-w-4xl">
              クライアントのご依頼で撮影した空撮写真も多数あります。富士山や八丈島、大島、京都・天橋立など、日本を代表する景観をドローンで切り取った写真の一部をご紹介します。<a href="https://www.filminginjapan.com/jpn/real-estate-photo-video" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-accent-warm transition-colors">不動産向けのドローン写真</a>はこちらをご覧ください。
            </p>

            <Lightbox images={dronePhotos} columns={3} />
          </FadeInSection>
        </div>
      </section>

      {/* filminginjapan.com link */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="border-2 border-accent-warm/20 p-10 lg:p-16 text-center">
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
                Sister Site
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-3 mb-4">
                filminginjapan.com
              </h3>
              <p className="text-neutral-500 leading-relaxed text-lg mb-8 max-w-2xl mx-auto">
                Drone photo and video services for commercial real estate here
              </p>
              <a
                href="https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
              >
                filminginjapan.com →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/5 to-transparent" />
        <FadeInSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 font-jp mb-4">
            ドローン撮影のご相談<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-3">
            We can give you air cover throughout Japan.
          </p>
          <p className="text-neutral-400 font-jp mb-10">
            お気軽にご相談ください。
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
