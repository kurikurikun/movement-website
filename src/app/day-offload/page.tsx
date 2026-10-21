import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

const KOFI_URL = "https://ko-fi.com/movementchris";
const DOWNLOAD_URL =
  "https://github.com/kurikurikun/day-offload/releases/latest/download/DayOffload.zip";
const GITHUB_URL = "https://github.com/kurikurikun/day-offload";

export const metadata: Metadata = {
  title: "Day Offload — free Mac app for multi-day shoots",
  description:
    "Free Mac app that offloads only the shoot days you choose from a camera card — checksum-verified to every drive, card never touched. 撮影日ごとにカードから取り込み。無料。",
  alternates: { canonical: "https://www.move-ment.co/day-offload" },
  openGraph: {
    title: "Day Offload — offload today's footage, not the whole card",
    description:
      "Free Mac app for multi-day shoots. Copies only the days you shot, verified to every drive, and checks it all against your office backup later.",
    url: "https://www.move-ment.co/day-offload",
    images: [{ url: "/images/dayoffload_icon.png", width: 512, height: 512, alt: "Day Offload app icon" }],
  },
};

const features = [
  {
    en: "Copies by shoot day. Each clip's day comes from the camera's own timestamps, and its proxy and sidecar files always travel with it.",
    jp: "撮影日ごとにコピー。カメラが記録した日時で判定し、プロキシやサイドカーファイルも必ず一緒にコピー。",
  },
  {
    en: "Night shoots stay in one day: clips before 04:00 count as the previous day (you set the hour).",
    jp: "深夜まで続く撮影も同じ日として扱います。午前4時より前の素材は前日扱い(時刻は変更可)。",
  },
  {
    en: "Set your shoot dates once. Plug in a card and the app opens by itself, ticks those days and asks where to back up. Several cards queue up one after another.",
    jp: "撮影期間を一度設定すれば、カードを挿すだけでアプリが起動し、該当日を選んでバックアップ先を確認。複数のカードも順番に処理。",
  },
  {
    en: "One read of the card, written to every drive at once — then every copy is read back from the drive and checksum-checked against the card.",
    jp: "カードは一度だけ読み込み、全てのバックアップ先へ同時に書き込み。その後、各ドライブから読み戻してチェックサムで照合。",
  },
  {
    en: "The card is only read. Nothing on it is changed, renamed or deleted — format it at the office, when you're ready.",
    jp: "カードは読み込むだけ。変更・削除は一切しません。フォーマットは事務所に戻ってから。",
  },
  {
    en: "Safe to run again: anything already copied and verified is skipped, so a lunch offload and a wrap offload never double up.",
    jp: "何度実行しても安全。確認済みのファイルはスキップするので、昼と撮影終わりに分けて取り込んでも重複しません。",
  },
  {
    en: "Knows a camera card from a backup drive — Blackmagic, Sony, Canon, RED, DJI and audio recorders are recognised; your drives are ignored.",
    jp: "カメラカードとバックアップ用ドライブを自動で見分けます。Blackmagic・Sony・Canon・RED・DJI・録音機に対応。",
  },
  {
    en: "Back at the office, compare everything you offloaded on the shoot with your whole-card Stow backup — and see exactly which files, if any, are missing.",
    jp: "事務所でStowによるカード丸ごとのバックアップと照合。足りないファイルがあれば、ファイル名まで表示。",
  },
];

export default function DayOffloadPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/dayoffload_icon.png" alt="Day Offload app icon" className="w-32 h-32 md:w-40 md:h-40" />
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Free Mac App</span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
                Day<br />Offload<span className="text-accent-warm">.</span>
              </h1>
              <p className="text-neutral-500 text-lg font-jp mt-3">今日撮った分だけ、カードから取り込む。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-8">
              offload today&apos;s footage.{" "}
              <span className="text-accent-warm">not the whole card.</span>
            </h2>
            <div className="space-y-6 mb-12 max-w-3xl">
              <p className="text-neutral-600 text-lg leading-relaxed">
                On a multi-day shoot you keep recording on the same cards and only format them back at
                the office. Every offload tool copies the whole card, every night — and dragging today&apos;s
                clips out in Finder is how footage goes missing. Day Offload copies just the shoot days
                you pick, checks every copy against the card, and leaves the card exactly as it was.
              </p>
              <p className="text-neutral-600 leading-relaxed font-jp">
                数日にわたる撮影では、同じカードを使い続けて、フォーマットは事務所に戻ってから。
                でも取り込みソフトは毎晩カードを丸ごとコピーするし、Finderで今日の分だけ選ぶのは不安。
                Day Offload は選んだ撮影日の素材だけをコピーし、全てのコピーをカードと照合。カードには一切手を加えません。
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
              Plug in a card. It already knows which days you want.
            </p>
            <p className="text-center text-neutral-500 font-jp mb-8">
              カードを挿すだけ。撮影期間の素材を選んで、バックアップ先を聞いてきます。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-start gap-8 mb-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/offload-camera-card-by-shoot-day-mac.png"
                alt="Day Offload asking where to back up a camera card's shoot days"
                className="max-w-sm w-full rounded-xl shadow-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/day-offload-choose-shoot-days-verified-copy.png"
                alt="Choose shoot days on a camera card and copy them verified to two drives on a Mac"
                className="max-w-sm w-full rounded-xl shadow-2xl"
              />
            </div>
            <p className="text-center text-neutral-700 text-lg font-semibold mb-2 mt-4">
              Back at the office: is everything really in the backup?
            </p>
            <p className="text-center text-neutral-500 font-jp mb-8">
              事務所で、撮影中のコピーとStowのバックアップを照合。足りないファイルはファイル名で表示。
            </p>
            <div className="flex justify-center mb-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/compare-shoot-backup-with-stow-office-backup.png"
                alt="Compare footage offloaded on the shoot with a Stow office backup, listing any missing files"
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
                macOS 14 or later · Apple Silicon &amp; Intel · notarized by Apple — unzip, drag to
                Applications, open. The first time it reads a card, click Allow.
              </p>
              <p className="text-neutral-500 text-sm font-jp">
                macOS 14以降・Apple Silicon/Intel対応・Apple公証済み。解凍してアプリケーションフォルダに入れて開くだけ。
                初めてカードを読む時に表示される許可は「許可」を選んでください。
              </p>
              <p className="text-neutral-400 text-sm">
                Free &amp; open source ·{" "}
                <a href={GITHUB_URL} className="underline hover:text-accent-warm">source on GitHub</a>
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
                Day Offload is free, forever. If it saved your shoot, a ¥500 matcha latte keeps it cared for.
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
