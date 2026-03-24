import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VR & 360° Virtual Tours Japan",
  description:
    "Immersive VR and 360° virtual tour production across Japan — facilities, heritage sites, educational tours and more. UNITAR Hiroshima Peace Park. VR・360°バーチャルツアー制作。",
  alternates: { canonical: "https://www.move-ment.co/vr-360-tours-japan" },
  openGraph: {
    title: "VR & 360° Virtual Tours Japan | move-ment",
    description: "Professional 360° virtual tour and VR production across Japan. Educational, heritage, facility and tourism tours.",
    url: "https://www.move-ment.co/vr-360-tours-japan",
    images: [{ url: "/images/360_virtual_tour_japan.jpg", width: 1200, height: 630, alt: "360 VR virtual tour Japan" }],
  },
};

export default function VRPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/360_virtual_tour_japan.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative px-8 max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Virtual tours, 360 and spatial 180 <span className="text-accent-warm">immersive content</span>
          </h1>
          <p className="text-white/80 text-xl sm:text-2xl mt-4">
            Virtually <span className="text-accent-warm">done</span>
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 text-center lg:text-left leading-tight">
                Our expertise in immersive virtual content in Japan
              </h2>
              <div className="border border-neutral-300 bg-white p-8">
                <ul className="space-y-4 text-neutral-700 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-warm mt-1">&#8226;</span>
                    360 VR promotional videos, 360 photos
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-warm mt-1">&#8226;</span>
                    180 VR spatial video
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-warm mt-1">&#8226;</span>
                    Matterport tours of real estate
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-warm mt-1">&#8226;</span>
                    360 panorama photo virtual tours
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-warm mt-1">&#8226;</span>
                    Photogrammetry and LiDAR mapping
                  </li>
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 360 VR promotional videos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-300 mb-8">
              360 VR promotional videos
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-neutral-600 text-lg leading-relaxed">
                We have designed and produced a range of 360 VR immersive videos, including for the <strong className="text-accent-warm">United Nations</strong> and local authorities in Japan.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Our most recent 360 tour is this one of the climb up Mt Fuji on the Fujinomiya Route, including cultural and historical locations at the base of Mt Fuji.
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                国連や地方自治体向けに、様々な360度VR動画実績はあります。最新の360度ツアーでは、富士山の富士宮ルートを登りながら、山麓の文化的および歴史的な場所を紹介しています。<a href="https://vimeo.com/898013465" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-accent-warm transition-colors">日本語ナレーション版</a>はこちら。
              </p>
            </div>

            <div className="aspect-video bg-neutral-900 mb-4">
              <iframe
                src="https://player.vimeo.com/video/925655971"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="360 VR tour of the climb up Mt Fuji"
              />
            </div>
            <p className="text-sm text-neutral-500 mb-12">360 VR tour of the climb up Mt Fuji</p>

            {/* Mt Fuji photos */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/vr-fuji-day.jpeg"
                alt="Mt Fuji torii gate"
                className="w-full aspect-video object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/vr-fuji-night.jpeg"
                alt="Mt Fuji night view"
                className="w-full aspect-video object-cover"
              />
            </div>

          </FadeInSection>
        </div>
      </section>

      {/* 360 VR promotional photos */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-300 mb-8">
              360 VR promotional photos
            </h2>
            <div className="aspect-video bg-neutral-900 mb-4">
              <iframe
                src="https://momento360.com/e/u/9661be96efc041c387cd793871df9a25?utm_campaign=embed&utm_source=other&heading=7.54&pitch=3.06&field-of-view=75&size=medium&display-plan=true"
                className="w-full h-full"
                allowFullScreen
                title="360 VR photo of Mt Fuji from Lake Kawaguchi"
              />
            </div>
            <p className="text-sm text-neutral-500">360 VR photo of Mt Fuji taken by drone from Lake Kawaguchi</p>
          </FadeInSection>
        </div>
      </section>

      {/* 180 VR spatial video */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-8">
              180 VR spatial video
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              With our <strong>Canon RC5</strong> and the <strong>Canon RF5.2mm F2.8 L dual fisheye lens</strong> we are able to film VR 180 spatial video
            </p>
            <div className="grid grid-cols-3 gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/180_VR_spatial_video_japan_canon2.jpg"
                alt="Canon RC5 VR camera setup"
                className="w-full aspect-square object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/180_VR_spatial_video_japan_canon.png"
                alt="180 VR spatial video preview"
                className="w-full aspect-square object-cover"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/180_VR_spatial_video_japan_canon3.jpg"
                alt="Canon RC5 VR camera rig"
                className="w-full aspect-square object-cover"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Matterport tours */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-300 mb-8">
              Matterport tours of real estate
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-neutral-600 text-lg leading-relaxed">
                As part of our comprehensive real estate photo and video promotion services, we have made Matterport tours of real estate properties in Japan with the <strong>Matterport Pro3 3D camera</strong>. An example of a Matterport 3D virtual tour below. More information on how we can showcase your commercial real estate assets on our <a href="https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors">corporate filming site, Filming in Japan</a>.
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                商業用不動産を中心にMatterport 3D ツアーの実績あります。<a href="https://www.filminginjapan.com/jpn/real-estate-photo-video" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-accent-warm transition-colors">Matterportツアーの詳細については企業映像専用サイトへ</a>。
              </p>
            </div>

            <div className="aspect-video bg-neutral-900 mb-4">
              <iframe
                src="https://my.matterport.com/show/?m=14HzQMjL4RW&wmode=opaque"
                className="w-full h-full"
                allowFullScreen
                title="Matterport 3D tour — Yoyogi 5 Chome"
              />
            </div>
            <p className="text-sm text-neutral-500">Yoyogi 5 Chome — Matterport 3D virtual tour</p>
          </FadeInSection>
        </div>
      </section>

      {/* 360 panorama photo interactive tours */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-300 mb-8">
              360 panorama photo interactive tours
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-neutral-600 text-lg leading-relaxed">
                We have designed and produced 360 virtual immersive tours of commercial properties, public spaces and national parks in Japan.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                <a href="https://www.filminginjapan.com/real-estate-photo-video-tokyo-japan" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors">Examples of 360 panorama photo tours for commercial real estate on our corporate video site here</a>.
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                国内の国立公園などの360度バーチャルツアーを設計し、制作した実績はあります。
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                また、倉庫などの商業施設で<a href="https://www.filminginjapan.com/jpn/real-estate-photo-video" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-accent-warm transition-colors">360度ツアーの実績は企業映像の専用サイトへ</a>。
              </p>
            </div>
          </FadeInSection>

          {/* Hiroshima Peace Park */}
          <FadeInSection>
            <h3 className="text-2xl font-black text-neutral-900 mb-1">
              Interactive tour of the Hiroshima Peace Park
            </h3>
            <p className="text-2xl font-black text-neutral-900 font-jp mb-6">
              広島平和公園の体験型バーチャルツアー
            </p>
            <div className="space-y-6 mb-8">
              <p className="text-neutral-600 leading-relaxed">
                We designed and produced an educational interactive tour of the Hiroshima Peace Park, including a <a href="http://cphotographic.com/unitar_pp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors">360 tour of the normally off-limits interior of the A-bomb dome written up on the blog here</a>, for the United Nations training entity, UNITAR.
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                普段立ち入り禁止の原爆ドーム敷地内も含めた広島平和記念公園全体を体験できる360ツアーを設計し、制作しました。広島平和記念公園のバーチャルツアー撮影現場が<a href="/images/22_1_18_NHK_dome_360_filming.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-warm font-bold underline hover:text-accent-warm-dark transition-colors">NHK広島</a>と<a href="/images/RCC_TV_Hiroshima_A-bomb-dome-inside-virtual-tour.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-warm font-bold underline hover:text-accent-warm-dark transition-colors">RCC広島放送</a>で取り上げられた。
              </p>
            </div>

            <a href="http://cphotographic.com/unitar_pp/" target="_blank" rel="noopener noreferrer" className="block mb-4 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/360_virtual_tour_japan.jpg"
                alt="Hiroshima Peace Park 360 virtual tour"
                className="w-full aspect-video object-cover group-hover:opacity-80 transition-opacity"
              />
            </a>
            <p className="text-sm text-neutral-500 mb-8">Click through for a 360 virtual tour of the Hiroshima Peace Park</p>

            {/* Hiroshima photos */}
            <a href="http://cphotographic.com/unitar_pp/" target="_blank" rel="noopener noreferrer" className="grid grid-cols-4 gap-4 mb-16 group">
              {["/images/peace-park-dome-360-tour1.jpg", "/images/peace-park-dome-360-tour2.jpg", "/images/peace-park-dome-360-tour3.jpeg", "/images/peace-park-dome-360-tour4.jpg"].map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={img}
                  alt={`Hiroshima Peace Park 360 tour ${i + 1}`}
                  className="w-full aspect-square object-cover group-hover:opacity-80 transition-opacity"
                />
              ))}
            </a>
          </FadeInSection>

          {/* Mt Fuji interactive tour */}
          <FadeInSection>
            <div className="border-t border-neutral-300 pt-12">
              <h3 className="text-2xl font-black text-neutral-900 mb-1">
                Interactive 360 panorama tour of Mt Fuji
              </h3>
              <p className="text-2xl font-black text-neutral-900 font-jp mb-6">
                富士山の下山・登山体験型バーチャルツアー
              </p>
              <div className="space-y-6 mb-8">
                <p className="text-neutral-600 leading-relaxed">
                  We designed and photographed an interactive 360 panorama tour of Mt Fuji for Fujinomiya City, introducing the cultural history of the climb through locations around the base of Mt Fuji, and also an immersive experience of climbing Mt Fuji.
                </p>
                <p className="text-neutral-500 font-jp leading-relaxed">
                  富士登山信仰の歴史と文化を紹介しながら、登山体験ができるインタラクティブな360度パノラマツアーを設計し、撮影しました。
                </p>
              </div>

              <a href="https://cphotographic.com/23/t/3/index.htm" target="_blank" rel="noopener noreferrer" className="block mb-4 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/fuji-360-panorama-virtual-tour.jpg"
                  alt="Interactive 360 panorama tour of Mt Fuji"
                  className="w-full aspect-video object-cover group-hover:opacity-80 transition-opacity"
                />
              </a>
              <p className="text-sm text-neutral-500">Click through for a 360 virtual tour of climbing Mt Fuji</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Photogrammetry, LiDAR mapping */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-300 mb-8">
              photogrammetry, LiDAR mapping
            </h2>

            <div className="aspect-video bg-neutral-900 mb-12">
              <iframe
                src="https://player.vimeo.com/video/427933502"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Photogrammetry point cloud visualization"
              />
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-neutral-600 text-lg leading-relaxed">
                We can use LiDAR or photogrammetry to make point cloud data of a real location that then can be manipulated as the beach side shrine example above, or layered over a location to analyze and explain, as the screenshots from the promotion video for a infrastructure inspection service, below
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We partnered with <a href="https://www.imgee.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors font-bold">Imgee</a> on a customer testimonial project to showcase how photogrammetry can be used for infrastructure inspection work. Click the screenshots below for the full video.
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                LiDARやフォトグラメトリー（あるいはその併用）を使ってリアル3Dモデル（3D点群）を作成すれば表現力の幅が広がる。
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                次のスクリーンショットをクリックすると<a href="https://www.imgee.jp/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-accent-warm transition-colors">Imgee</a>と組んで制作したインフラ点検システムのPR映像がみられます。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href="https://vimeo.com/509386729" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/imgee_point_cloud_data_japan.jpg"
                  alt="Infrastructure inspection photogrammetry"
                  className="w-full aspect-video object-cover hover:opacity-80 transition-opacity"
                />
              </a>
              <a href="https://vimeo.com/509386729" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/imgee_point_cloud_data_japan2.jpg"
                  alt="LiDAR point cloud overlay"
                  className="w-full aspect-video object-cover hover:opacity-80 transition-opacity"
                />
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
            VR・360°ツアーのご相談<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-neutral-500 text-lg mb-3">
            Ready to go immersive?
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
