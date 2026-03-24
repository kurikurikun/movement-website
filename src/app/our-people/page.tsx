import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet Chris Moore and the move-ment crew network — bilingual video producers, cinematographers and editors based in Tokyo, Japan. チームのご紹介。",
  alternates: { canonical: "https://www.move-ment.co/our-people" },
  openGraph: {
    title: "Our People | move-ment",
    description: "Meet the bilingual video production team behind move-ment, based in Tokyo Japan.",
    url: "https://www.move-ment.co/our-people",
  },
};

export default function OurPeoplePage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/new_zealand_wanaka.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/90" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">The Team</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
            Our People<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-500 mt-3 text-lg">the people behind the pretty pictures</p>
        </div>
      </section>

      {/* Crew network */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="grid lg:grid-cols-[3px,1fr] gap-8 mb-12">
              <div className="hidden lg:block bg-gradient-to-b from-accent-warm via-accent-warm/40 to-transparent" />
              <div>
                <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Our Network</span>
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-2 mb-6">
                  Move<span className="text-accent-warm">-</span>ment crew network{" "}
                  <span className="font-jp font-normal text-neutral-400 text-xl">人材ネットワーク</span>
                </h2>
                <div className="space-y-5">
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    The best crew for a 360 virtual tour production won&apos;t necessarily be the best suited for a lifestyle branding shoot. In addition to our Japanese in-house editor, Aya, we reach out to our large diverse network of independent video creators and put together a team that matches the skills required and the budget you have, ensuring that no matter the type of shoot or video production you have in mind you&apos;ll be getting the optimum crew.
                  </p>
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Although this kind of insurance is not yet common in Japan, we are fully insured for{" "}
                    <strong className="text-accent-warm">accidental damage liability</strong> to property or injury to people on location caused by our crew (and no, it has never happened).
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr,3px] gap-8">
              <div className="space-y-4">
                <p className="text-neutral-500 font-jp text-lg leading-relaxed">
                  360°カメラでバーチャルツアーを制作できる最適なチーム、そしてブランディング動画を制作できる最適なチームは必ずしも同じではない。案件や予算の規模に応じて弊社が持っている幅広いクリエイターネットワークからクルーを組むのでどんな撮影でも最適な体制で制作に臨む。
                </p>
                <p className="text-neutral-500 font-jp leading-relaxed">
                  万がーに備えた<strong className="text-accent-warm">事業活動包括保険（第三者賠償責任保険）</strong>に加入済み
                </p>
              </div>
              <div className="hidden lg:block bg-gradient-to-b from-accent-warm via-accent-warm/40 to-transparent" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Chris Moore */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Founder</span>
            <div className="h-[3px] bg-accent-warm w-16 mt-3 mb-12" />

            {/* Photo + title */}
            <div className="grid lg:grid-cols-[340px,1fr] gap-12 items-start mb-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/chris_moore_profile_photo_square.jpg"
                alt="Chris Moore — Move-ment Company Founder"
                className="w-full"
              />
              <div className="lg:pt-2">
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 leading-tight">
                  Chris Moore
                </h2>
                <p className="text-accent-warm font-jp text-lg mt-1">クリス・モア</p>
                <div className="h-[2px] bg-accent-warm w-12 my-4" />
                <p className="text-neutral-500 font-semibold mb-1">Move-ment Company Founder</p>
                <p className="text-neutral-400 font-jp text-sm mb-6">株式会社move-ment 代表取締役</p>

                <div className="flex gap-4 mb-8">
                  <a
                    href="https://www.instagram.com/move_ment.co.ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-neutral-700 underline hover:text-accent-warm transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.threads.net/@move_ment.co.ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-neutral-700 underline hover:text-accent-warm transition-colors"
                  >
                    Threads
                  </a>
                </div>

                <div className="space-y-4">
                  <p className="text-neutral-600 leading-relaxed">
                    Born and raised in the great outdoors of the South Island of New Zealand, Chris has been in Japan for more than 15 years. Probably more like 20 actually.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    Chris is able to adapt to both the very detailed instructions, requests and meetings that are characteristic of productions in Japan, to the wide level of independence and responsibility required by international productions.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    Chris is an experienced skier, kayaker, hiker, horse rider and all things outdoor enthusiast, a Haruki Murakami fan and comfortable working in both Japanese and English. Able to film and self-direct as a crew of one, Chris is also experienced in putting together and leading larger crews as the project requires, as well as having worked as a Tokyo DP for hire for clients such as <strong className="text-accent-warm">Sony</strong> and <strong className="text-accent-warm">Microsoft</strong>.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    Chris has a short introduction video to our corporate video-centered site,{" "}
                    <a href="https://www.filminginjapan.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors font-bold">FilmingInJapan</a>,{" "}
                    <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors">here on YouTube</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Japanese bio */}
            <div className="border-l-4 border-accent-warm/30 pl-6 space-y-4 mb-16">
              <p className="text-neutral-500 font-jp text-lg leading-relaxed">
                ニュージーランド生まれ育ち、日本在住は20年間以上になる。現在は4人家族で東京ですが、広島県に15年間以上に住んでいた影響で、以前から地方創生に強い関心を持ち続けている。プロジェクトによっては映像ディレクターやプロデューサーでも、カメラマン・DoP、ドローンパイロットでも。元々フォトグラファー（もっというとニュージーランドの弁護士）だが、人々のストーリーを引き出す映像の力に魅せられた。
              </p>
              <p className="text-neutral-500 font-jp leading-relaxed">
                現在は「日本中の『どこでも』と特別な繋がりを」というコンセプトで地方自治体が抱えている移住促進の悩み・課題解決に貢献できる地方創生に特化した
                <a href="/regional-migration" className="underline font-bold hover:text-accent-warm transition-colors">テスティモニアルビデオサービス</a>を立ち上がっています
              </p>
              <p className="text-neutral-400 font-jp text-sm leading-relaxed">
                広島大学大学院国際協力研究科修士修了（国際関係）
              </p>
            </div>

            {/* Media appearances */}
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Media</span>
              <h3 className="text-xl font-black text-neutral-900 font-jp mt-2 mb-6">
                メディア出演<span className="text-accent-warm">.</span>
              </h3>
              <div className="space-y-5">
                {[
                  {
                    date: "2025年2月21日",
                    active: true,
                    text: <>ノーベル平和賞を受賞した日本被団協の会長、箕牧（みまき）智之さんをアルジャジーラの取材でインタビューし、その様子が<a href="#" className="underline font-bold hover:text-accent-warm transition-colors">広島のTSSテレビ局で取り上げられた</a>。</>,
                  },
                  {
                    date: "2019年2月10",
                    active: false,
                    text: <>訪日外国人旅行者をターゲットにする映像についての記事、「高松PR動画39万回再生ー欧米向け 矢島や和三盆も」が読売新聞に掲載された。</>,
                  },
                  {
                    date: "2018年9月",
                    active: false,
                    text: <>「ストーリー」についてビデオSALONに掲載された。</>,
                  },
                  {
                    date: "2018年9月",
                    active: false,
                    text: <>【ビデオSALON特別セミナーダイジェスト】がキヤノンのサイトに掲載された。</>,
                  },
                  {
                    date: "2018年5月",
                    active: false,
                    text: <>キヤノン・ビデオサロン主催のパネルディスカッション「生き残る映像制作会社になるためには何が必要か？ 〜低予算・短期間・高クオリティに応えるには〜」に出演。<a href="#" className="underline hover:text-accent-warm transition-colors">part 1</a>, <a href="#" className="underline hover:text-accent-warm transition-colors">part 2</a>, <a href="#" className="underline hover:text-accent-warm transition-colors">part 3</a></>,
                  },
                  {
                    date: "2017年8月",
                    active: false,
                    text: <>ビデオサロンが発行する「ビデオグラファーのための映像制作機器ガイド2017」にCanon C200のファーストインプレッションが記載された。</>,
                  },
                ].map((item, i) => (
                  <div key={i} className={`border-l-4 ${item.active ? "border-accent-warm" : "border-neutral-200"} pl-5 py-1`}>
                    <p className="text-xs font-mono tracking-[0.15em] text-accent-warm mb-1">{item.date}</p>
                    <p className="text-neutral-600 font-jp leading-relaxed text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-warm/10 to-transparent" />
        <FadeInSection className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Work With Us</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-3">
            Get in touch<span className="text-accent-warm">.</span>
          </h2>
          <p className="text-white/60 font-jp mb-10">
            お気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors"
          >
            Contact Us / お問い合わせ
          </Link>
        </FadeInSection>
      </section>

    </div>
  );
}
