import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Our Gear",
  description:
    "Video production equipment owned and operated by move-ment in Japan — Canon C80, R5C, DJI Mavic 3 Pro Cine drone, full lens kit, audio and lighting. カメラ・ドローン・レンズ・音響機材一覧。",
  alternates: { canonical: "https://www.move-ment.co/kizai-equipment-video-japan" },
  openGraph: {
    title: "Our Video Production Gear | move-ment Japan",
    description: "Full camera, drone, lens and audio kit owned and operated by move-ment in Tokyo, Japan.",
    url: "https://www.move-ment.co/kizai-equipment-video-japan",
  },
};

function GearSection({ title, titleJp, children }: { title: string; titleJp: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-sm font-mono text-accent-warm tracking-[0.15em] mb-3">
        // {title}：<span className="font-jp">{titleJp}</span>
      </p>
      <div className="space-y-1 text-neutral-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function GearLine({ brand, detail }: { brand: string; detail: React.ReactNode }) {
  return (
    <p>
      <strong className="text-neutral-900">{brand}</strong>{" "}{detail}
    </p>
  );
}

export default function OurGearPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/japan_drone_photos_dji_123.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative px-8 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Our video production gear
          </h1>
          <p className="text-white/80 text-xl sm:text-2xl mt-4">
            Things to get the job done, beautifully
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16">

              {/* Left sidebar */}
              <div className="lg:sticky lg:top-28 self-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/canon_R5_R5C_C70.jpg"
                  alt="Canon R5, R5C, C70"
                  className="w-full grayscale mb-6"
                />
                <p className="text-neutral-900 font-semibold text-sm leading-relaxed mb-3">
                  It&apos;s not about the gear.<br />Except when it is.
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  We own and operate the following kit but have close relationships with rental houses in Tokyo to get the gear you need.
                </p>
              </div>

              {/* Gear columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">

                {/* Left column */}
                <div>
                  <GearSection title="Cameras" titleJp="カメラ">
                    <GearLine brand="Canon" detail="C80" />
                    <GearLine brand="Canon" detail="R5C" />
                    <GearLine brand="Canon" detail="R5" />
                    <GearLine brand="Apple" detail={
                      <>iPhone 17 Pro Max&ensp;<span className="text-neutral-400 text-xs">(shot on the iPhone 14 Pro)</span></>
                    } />
                    <p className="mt-3 text-neutral-500 text-xs leading-relaxed">
                      Extensive experience using Sony FX3, FX6, FX9, Canon C300, Phantom Flex, Arri Alexa Mini, Arri Amira and others.
                    </p>
                  </GearSection>

                  <GearSection title="Other cameras" titleJp="その他カメラ">
                    <p><strong className="text-neutral-900">Blackmagicdesign</strong> Cinema Camera 6K (BMCC6K)</p>
                    <p><strong className="text-neutral-900">Blackmagicdesign</strong> Pocket Cinema Camera 4K (BMPCC4K)</p>
                    <p><strong className="text-neutral-900">Insta360</strong> One X</p>
                  </GearSection>

                  <GearSection title="Drones" titleJp="ドローン">
                    <GearLine brand="DJI" detail="Mavic 3 Pro Cine with 4 batteries to enable all day flying, with a power source." />
                    <GearLine brand="DJI" detail="Mini 3 Pro" />
                    <p className="mt-2 text-neutral-500">Japan countrywide flight permission</p>
                    <p className="font-jp text-neutral-400 text-xs">「無人航空機全国包括飛行許可取得」</p>
                  </GearSection>

                  <GearSection title="Lenses" titleJp="レンズ">
                    <p className="text-neutral-400 text-xs font-semibold tracking-widest uppercase mb-1">EF Mount</p>
                    <GearLine brand="Canon" detail="24mm f1.4 II, 35mm f2, 50mm f1.2, 85mm f1.2 II, 135mm f2, 70-200 f2.8 II + extender, 24-105 f4, 16-35mm F2.8" />
                    <GearLine brand="Tokina" detail="11-16mm f2.8" />
                    <GearLine brand="Sigma" detail="24-70mm 2.8" />
                    <GearLine brand="Samyang/Rokinon" detail="24mm f1.4, 35mm f1.4" />
                    <p className="text-neutral-400 text-xs font-semibold tracking-widest uppercase mt-3 mb-1">RF Mount</p>
                    <GearLine brand="Canon" detail="24-105 f2.8 L" />
                    <GearLine brand="Canon" detail="15-35mm f2.8 L" />
                    <GearLine brand="Canon" detail="50mm 1.4 L VCM" />
                    <GearLine brand="Canon" detail="24-105mm f4" />
                    <GearLine brand="TTartisans" detail="7.5mm f2" />
                  </GearSection>
                </div>

                {/* Right column */}
                <div>
                  <GearSection title="Camera support/stabilizers" titleJp="カメラ関連機材/スタビライザー">
                    <GearLine brand="DJI" detail="Ronin-RS3 gimbal" />
                    <GearLine brand="Rhino" detail="Slider EVO Carbon, Rhino Motion motor controller, Rhino Arc" />
                    <GearLine brand="Sachtler" detail="Flowtech 75 tripod with FSB 8 head" />
                    <p>various monopods, tripods</p>
                  </GearSection>

                  <GearSection title="Lighting" titleJp="照明">
                    <GearLine brand="Aputure" detail="Light Storm LS C120D II LED light" />
                    <GearLine brand="Amaran" detail="200x, 60x LED lights" />
                    <GearLine brand="Nanlite" detail="PavoTube II 6C" />
                    <p>Other small LED lights</p>
                    <GearLine brand="Matthews Road Flags" detail="" />
                    <p>Lighting stands, green screen</p>
                  </GearSection>

                  <GearSection title="Sound" titleJp="音響">
                    <GearLine brand="Zoom" detail="F6 32bit float audio field recorder" />
                    <GearLine brand="Countryman" detail="B6 lav mic" />
                    <GearLine brand="Rode" detail="NTG 5 mic" />
                    <GearLine brand="Rode" detail="VideoMic NTG mic" />
                    <GearLine brand="Hollyland" detail="Lark Max 2 wireless mic set" />
                    <GearLine brand="Hollyland" detail="Lark M2 wireless mic set" />
                    <GearLine brand="Sony" detail="UWP-D11 wireless lav mic set" />
                    <GearLine brand="Deity" detail="TC-1 Time Code Generator set" />
                    <GearLine brand="Deity" detail="Pr-2 32bit float lav mic" />
                    <GearLine brand="Blackmagicdesign" detail="UltraStudio Recorder 3G" />
                    <p>various other handheld recorders, mics, boom pole, mic stand and accessories</p>
                  </GearSection>

                  <GearSection title="Monitors" titleJp="モニター">
                    <GearLine brand="Hollyland" detail="M1 Mars Enhanced" />
                    <p>
                      <strong className="text-neutral-900">Swit</strong> CM-S75C /{" "}
                      <strong className="text-neutral-900">Osee</strong> G7 7&quot; 4K
                    </p>
                    <GearLine brand="Hollyland" detail='Mars 300 Pro Enhanced wireless HDMI transmitter' />
                  </GearSection>

                  <GearSection title="VR/360" titleJp="VR/360">
                    <GearLine brand="Meta/Oculus" detail="Quest 2 headset x2" />
                  </GearSection>
                </div>

              </div>
            </div>
          </FadeInSection>

          {/* BTS photo */}
          <FadeInSection>
            <div className="mt-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/japan_drone_photos_dji_113.jpg"
                alt="Japan aerial drone photography"
                className="w-full object-cover object-top grayscale"
              />
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
