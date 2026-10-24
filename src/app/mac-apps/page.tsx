import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

const KOFI_URL = "https://ko-fi.com/movementchris";

export const metadata: Metadata = {
  title: "Free Mac apps for shoots — Day Offload & Peripheral Speed",
  description:
    "Two free Mac apps for video shoots: Day Offload copies only the shoot days you choose from a camera card, verified; Peripheral Speed shows how fast your ports and drives really are. 撮影現場のための無料Macアプリ。",
  alternates: { canonical: "https://www.move-ment.co/mac-apps" },
  openGraph: {
    title: "Free Mac apps for shoots — Day Offload & Peripheral Speed",
    description:
      "Offload only the days you shot, verified to every drive. See what your ports and drives really deliver. Free and open source.",
    url: "https://www.move-ment.co/mac-apps",
    images: [{ url: "/images/dayoffload_icon.png", width: 512, height: 512, alt: "Day Offload app icon" }],
  },
};

type App = {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  taglineJp: string;
  points: { en: string; jp: string }[];
  shots: { src: string; alt: string }[];
  download: string;
  github: string;
  req: string;
  reqJp: string;
};

const apps: App[] = [
  {
    id: "day-offload",
    name: "Day Offload",
    icon: "/images/dayoffload_icon.png",
    tagline: "Offload today's footage — not the whole card.",
    taglineJp: "今日撮った分だけ、カードから取り込む。",
    points: [
      {
        en: "Copies only the shoot days you pick. Proxies and sidecar files go with their clips.",
        jp: "選んだ撮影日の素材だけコピー。プロキシ・サイドカーも一緒に。",
      },
      {
        en: "Put a card in and today's footage is ticked — or its latest day, the morning after.",
        jp: "カードを挿すと今日の素材を自動選択。翌朝なら最新の撮影日。",
      },
      {
        en: "Written to every drive at once, then read back and checksum-verified. The card is only read.",
        jp: "全ドライブへ同時に書き込み、チェックサムで照合。カードは読み込むだけ。",
      },
      {
        en: "Back at the office, checks the shoot copies against your Stow backup.",
        jp: "事務所でStowのバックアップと照合し、足りないファイルを表示。",
      },
    ],
    shots: [
      {
        src: "/images/offload-camera-card-by-shoot-day-mac.png",
        alt: "A camera card goes in: Day Offload shows its shoot days and the exact backup folders, ready to offload",
      },
      {
        src: "/images/compare-shoot-backup-with-stow-office-backup.png",
        alt: "Compare footage offloaded on the shoot with a Stow office backup, listing any missing files",
      },
    ],
    download: "https://github.com/kurikurikun/day-offload/releases/latest/download/DayOffload.zip",
    github: "https://github.com/kurikurikun/day-offload",
    req: "macOS 14+ · Apple Silicon & Intel",
    reqJp: "macOS 14以降・Apple Silicon/Intel対応",
  },
  {
    id: "peripheral-speed",
    name: "Peripheral Speed",
    icon: "/images/peripheralspeed_icon.png",
    tagline: "Is your drive as fast as it should be?",
    taglineJp: "Macのポート、本当は何GB/s出てる?",
    points: [
      {
        en: "Every port and drive in real-world GB/s, right in the menu bar.",
        jp: "各ポート・ドライブの実効速度をGB/sでメニューバーに表示。",
      },
      {
        en: "A slow link goes red and says why — wrong port, cable or hub.",
        jp: "遅い接続は赤く表示。ポート・ケーブル・ハブなど原因まで。",
      },
      {
        en: "One-click speed test, live copy speed and free space at a glance.",
        jp: "ワンクリック実測、コピー中の実速度、空き容量もひと目で。",
      },
      {
        en: "Offload planner: see “500 GB ≈ 8 min” before you start.",
        jp: "取り込みプランナー:「500GB ≈ 8分」を事前に確認。",
      },
    ],
    shots: [
      {
        src: "/images/which-mac-port-is-fastest-for-your-drive.png",
        alt: "Peripheral Speed advising which Mac USB-C port is fastest for an external drive",
      },
      {
        src: "/images/mac-offload-time-calculator.png",
        alt: "Mac offload time calculator — pick a size, choose source and destination, get a checksum-verified copy command",
      },
    ],
    download: "https://github.com/kurikurikun/peripheral-speed/releases/latest/download/PeripheralSpeed.zip",
    github: "https://github.com/kurikurikun/peripheral-speed",
    req: "Apple Silicon (M1 and later) · one-click updates",
    reqJp: "Apple Silicon Mac専用(M1以降)・ワンクリック更新",
  },
];

export default function MacAppsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-36 pb-10 px-8 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Free Mac Apps</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3 text-neutral-900 leading-none">
            tools for shoot days<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-600 text-lg mt-5 max-w-2xl">
            Two small apps we built for our own shoots. Free, open source and notarized by Apple.
          </p>
          <p className="text-neutral-500 font-jp mt-1">撮影現場のために作った無料Macアプリ。オープンソース・Apple公証済み。</p>
        </div>
      </section>

      {/* Apps */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {apps.map((a) => (
            <FadeInSection key={a.id}>
              <article id={a.id} className="scroll-mt-28 h-full flex flex-col border border-neutral-200 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.icon} alt={`${a.name} app icon`} className="w-16 h-16 sm:w-20 sm:h-20" />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 leading-tight">
                      {a.name}
                      <span className="text-accent-warm">.</span>
                    </h2>
                    <p className="text-neutral-700 font-semibold">{a.tagline}</p>
                    <p className="text-neutral-500 text-sm font-jp">{a.taglineJp}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {a.points.map((p) => (
                    <li key={p.en} className="border-l-2 border-accent-warm pl-4">
                      <p className="text-neutral-700 leading-snug">{p.en}</p>
                      <p className="text-neutral-500 text-sm leading-snug font-jp mt-0.5">{p.jp}</p>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mt-6 items-start">
                  {a.shots.map((s) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={s.src} src={s.src} alt={s.alt} className="w-full rounded-lg shadow-xl" />
                  ))}
                </div>

                <div className="mt-auto pt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href={a.download}
                    className="inline-block bg-neutral-900 text-white font-bold px-7 py-3 rounded-full hover:bg-accent-warm transition-colors"
                  >
                    Download — Free ↓
                  </a>
                  <div className="text-xs text-neutral-500 leading-relaxed">
                    <p>
                      {a.req} ·{" "}
                      <a href={a.github} className="underline hover:text-accent-warm">
                        GitHub
                      </a>
                    </p>
                    <p className="font-jp">{a.reqJp}</p>
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Install + donate */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto border-t border-neutral-200 pt-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-sm text-neutral-500">
            <p>Unzip, drag to Applications, open. That&apos;s it.</p>
            <p className="font-jp mt-1">解凍してアプリケーションフォルダに入れて開くだけ。</p>
          </div>
          <div className="md:text-right">
            <p className="text-neutral-700">
              Useful? <span className="text-accent-warm font-semibold">Buy us a ¥500 matcha latte.</span>
            </p>
            <p className="text-neutral-500 text-sm font-jp mb-3">役に立ったら、抹茶ラテ1杯の応援を。</p>
            <a
              href={KOFI_URL}
              className="inline-block border-2 border-accent-warm text-neutral-900 font-bold px-6 py-2 rounded-full hover:bg-accent-warm hover:text-white transition-colors"
            >
              🍵 Support on Ko-fi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
