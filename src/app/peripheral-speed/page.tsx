import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

// TODO: replace with the real Ko-fi page URL
const KOFI_URL = "https://ko-fi.com/movementchris";
const DOWNLOAD_URL =
  "https://github.com/kurikurikun/peripheral-speed/releases/latest/download/PeripheralSpeed.zip";
const GITHUB_URL = "https://github.com/kurikurikun/peripheral-speed";

export const metadata: Metadata = {
  title: "Peripheral Speed — free Mac app",
  description:
    "Free Mac menu-bar app that shows how fast your USB and Thunderbolt ports really copy data — and what's slowing them down. Macのポート実効速度を一目で。無料。",
  alternates: { canonical: "https://www.move-ment.co/peripheral-speed" },
  openGraph: {
    title: "Peripheral Speed — is your drive as fast as it should be?",
    description:
      "Free menu-bar app for Apple Silicon Macs. Real-world copy speeds, port-by-port, with the fix when something is slow.",
    url: "https://www.move-ment.co/peripheral-speed",
    images: [{ url: "/images/peripheralspeed_icon.png", width: 1024, height: 1024, alt: "Peripheral Speed app icon" }],
  },
};

const features = [
  {
    en: "Every port, laid out the way you see them on your desk — Mac first, then your display. Free ports show what a drive would get there.",
    jp: "ポートを机の上の配置どおりに表示。空きポートには「ここに挿すと何GB/s出るか」も。",
  },
  {
    en: "One honest unit: real-world GB/s. No bits-vs-bytes traps, no marketing numbers — the speed your copy dialog will actually show.",
    jp: "単位は実効GB/sに統一。カタログの「10Gbps」ではなく、実際のコピー速度で表示。",
  },
  {
    en: "Slow link? It goes red with the fix: wrong port, wrong cable, wrong hub — spelled out.",
    jp: "遅い接続は赤く警告。「左のポートに挿し替えて」「ケーブル交換」など対処法まで表示。",
  },
  {
    en: "Measure real speed with one click, eject safely, and see \"500 GB ≈ 8 min\" before a big offload.",
    jp: "ワンクリック実測スピードテスト、安全な取り外し、「500GB ≈ 8分」の目安時間。",
  },
  {
    en: "Watch copies live: open the menu mid-transfer and see \"Copying right now ≈ 0.8 GB/s\" — no more trusting Finder's progress bar.",
    jp: "コピー中の実速度をリアルタイム表示。「今 ≈ 0.8 GB/s で転送中」— 進捗バーを信じる必要なし。",
  },
  {
    en: "Capacity at a glance — \"1 TB drive · 487 GB free\", with a warning when a drive is nearly full. Fast enough AND big enough, checked together.",
    jp: "空き容量もひと目で。「1TBドライブ・残り487GB」、残量わずかなら警告。速度と容量を同時にチェック。",
  },
  {
    en: "Offload planner — pick a size and a source → destination (drive, card, or your Mac), see the time, and copy a checksum-verified command. The app plans it; it never touches your files.",
    jp: "取り込みプランナー — 容量とコピー元→先(ドライブ・カード・Mac)を選ぶと所要時間を表示、検証付きコピーコマンドをワンクリック。ファイルには触れず、あなたが実行。",
  },
];

export default function PeripheralSpeedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/peripheralspeed_icon.png"
              alt="Peripheral Speed app icon"
              className="w-32 h-32 md:w-40 md:h-40"
            />
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">
                Free Mac App
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
                Peripheral<br />Speed<span className="text-accent-warm">.</span>
              </h1>
              <p className="text-neutral-500 text-lg font-jp mt-3">
                Macのポート、本当は何GB/s出てる?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-8">
              your drive says 10Gbps.{" "}
              <span className="text-accent-warm">is it actually delivering?</span>
            </h2>
            <div className="space-y-6 mb-12 max-w-3xl">
              <p className="text-neutral-600 text-lg leading-relaxed">
                A wrong cable, a wrong hub, or the wrong hole and your &ldquo;fast&rdquo; SSD
                silently copies twenty times slower — a one-hour footage offload becomes an
                all-day one. Peripheral Speed is a tiny menu-bar app (⚡) that shows what every
                port and drive on your Mac actually negotiated, in real-world GB/s, and tells
                you exactly what to fix.
              </p>
              <p className="text-neutral-600 leading-relaxed font-jp">
                ケーブルやハブ、挿すポートを間違えるだけで、外付けSSDは静かに20倍遅くなります。
                Peripheral Speed はメニューバーの小さな ⚡ アプリ。各ポート・各ドライブの実効速度を表示し、
                遅い時は原因と直し方まで教えてくれます。撮影データの取り込み前チェックに。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((f) => (
                <div key={f.en} className="border-l-2 border-accent-warm pl-6">
                  <p className="text-neutral-700 leading-relaxed">{f.en}</p>
                  <p className="text-neutral-500 text-sm leading-relaxed font-jp mt-2">{f.jp}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Screenshots */}
          <FadeInSection>
            <p className="text-center text-neutral-700 text-lg font-semibold mb-2">
              It even tells you which port is fastest.
            </p>
            <p className="text-center text-neutral-500 font-jp mb-8">
              「そのドライブ、Macのポートに挿し替えた方が速いですよ」まで教えてくれます。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-start gap-8 mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/which-mac-port-is-fastest-for-your-drive.png"
                alt="Peripheral Speed advising which Mac USB-C port is fastest for an external drive"
                className="max-w-sm w-full rounded-xl shadow-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/check-mac-usb-c-thunderbolt-port-speed.png"
                alt="Check Mac USB-C and Thunderbolt port speed, capacity and copy time"
                className="max-w-sm w-full rounded-xl shadow-2xl"
              />
            </div>
            <p className="text-center text-neutral-700 text-lg font-semibold mb-2 mt-4">
              Don&apos;t trust the label — measure it.
            </p>
            <p className="text-center text-neutral-500 font-jp mb-8">
              カタログ値ではなく、実測。ボタン一つで本当の書き込み・読み込み速度を計測。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-start gap-8 mb-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/measure-external-drive-speed-on-mac.png"
                alt="Measure real external drive read and write speed on a Mac"
                className="max-w-sm w-full rounded-xl shadow-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/peripheral-speed-mac-menu-bar-app.png"
                alt="Peripheral Speed free Mac menu bar app for checking port speed"
                className="max-w-sm w-full rounded-xl shadow-2xl"
              />
            </div>
            <p className="text-center text-neutral-700 text-lg font-semibold mb-2 mt-4">
              Plan the offload — how long, and where.
            </p>
            <p className="text-center text-neutral-500 font-jp mb-8">
              取り込み前に、どこへ・何分かかるかを計算。ワンクリックで検証付きコピーコマンドも。
            </p>
            <div className="flex justify-center mb-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mac-offload-time-calculator.png"
                alt="Mac offload time calculator — pick a size, choose source and destination, get a checksum-verified copy command"
                className="max-w-sm w-full rounded-xl shadow-2xl"
              />
            </div>
          </FadeInSection>

          {/* Download */}
          <FadeInSection>
            <div className="text-center space-y-6 py-10">
              <a
                href={DOWNLOAD_URL}
                className="inline-block bg-neutral-900 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-accent-warm transition-colors"
              >
                Download for Mac — Free ↓
              </a>
              <p className="text-neutral-500 text-sm">
                Apple Silicon (M1 and later) · notarized by Apple — unzip, drag to
                Applications, open. That&apos;s it. Future updates install themselves
                with one click.
              </p>
              <p className="text-neutral-500 text-sm font-jp">
                Apple Silicon Mac 専用(M1以降)・Apple公証済み。解凍して
                アプリケーションフォルダに入れて開くだけ。以後のアップデートはワンクリックで自動インストール。
              </p>
              <p className="text-neutral-400 text-sm">
                Free &amp; open source ·{" "}
                <a href={GITHUB_URL} className="underline hover:text-accent-warm">
                  source on GitHub
                </a>
              </p>
            </div>
          </FadeInSection>

          {/* Donate */}
          <FadeInSection>
            <div className="border-t border-neutral-200 mt-10 pt-14 text-center space-y-4">
              <h3 className="text-xl font-black text-neutral-900">
                useful? <span className="text-accent-warm">buy us a matcha latte</span>
              </h3>
              <p className="text-neutral-600 max-w-xl mx-auto">
                Peripheral Speed is free, forever. If it saved your offload day, a ¥500
                matcha latte keeps it cared for.
              </p>
              <p className="text-neutral-500 text-sm font-jp max-w-xl mx-auto">
                このアプリはずっと無料です。役に立ったら、抹茶ラテ1杯(¥500ほど)の応援をいただけると嬉しいです。
              </p>
              <a
                href={KOFI_URL}
                className="inline-block border-2 border-accent-warm text-neutral-900 font-bold px-8 py-3 rounded-full hover:bg-accent-warm hover:text-white transition-colors"
              >
                🍵 Support on Ko-fi
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
