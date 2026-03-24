"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/contact-drone.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/90" />
        <div className="relative px-8 lg:px-20 max-w-7xl mx-auto w-full">
          <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Get in touch</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mt-3 text-neutral-900 leading-none">
            Contact<span className="text-accent-warm">.</span>
          </h1>
          <p className="text-neutral-500 text-lg font-jp mt-3">お問い合わせ</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-28 px-4">
        <FadeInSection className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-accent-warm text-6xl mb-6">✓</div>
              <h2 className="text-3xl font-black mb-4 text-neutral-900">Thank you<span className="text-accent-warm">.</span></h2>
              <p className="text-neutral-400 font-jp">
                ありがとうございます！お返事をお待ちください。
              </p>
              <p className="text-neutral-500 mt-2">
                We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <>
              <span className="font-mono text-xs tracking-[0.3em] text-accent-warm uppercase">Make Contact</span>
              <h2 className="text-3xl font-black mt-3 mb-2 text-neutral-900">
                We can help<span className="text-accent-warm">.</span>
              </h2>
              <p className="text-neutral-400 font-jp mb-6">お気軽に日本語でもどうぞ</p>

              <div className="mb-10 text-neutral-500 text-sm leading-relaxed space-y-1">
                <p><strong className="text-neutral-700">Move-ment Co. Ltd.</strong> / 株式会社move-ment</p>
                <p>1-18-5-503 Higashi Gotanda, Shinagawa, Tokyo</p>
                <p>
                  <a href="mailto:we-are@move-ment.co" className="text-accent-warm hover:text-accent-warm-dark transition-colors">we-are@move-ment.co</a>
                  {" "}&middot;{" "}
                  <a href="tel:+819038800895" className="hover:text-accent-warm transition-colors">+81 90 3880 0895</a> (WhatsApp)
                </p>
                <p className="text-neutral-400 text-xs mt-1">Chris Moore / 代表取締役</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono tracking-wider text-neutral-500 mb-2 uppercase">
                    Name / お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white border-b-2 border-neutral-200 px-0 py-3 text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-accent-warm transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono tracking-wider text-neutral-500 mb-2 uppercase">
                    Email / メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white border-b-2 border-neutral-200 px-0 py-3 text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-accent-warm transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-mono tracking-wider text-neutral-500 mb-2 uppercase">
                    Subject / 件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-white border-b-2 border-neutral-200 px-0 py-3 text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-accent-warm transition-colors"
                    placeholder="What can we help with?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-mono tracking-wider text-neutral-500 mb-2 uppercase">
                    Message / メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-white border-b-2 border-neutral-200 px-0 py-3 text-neutral-900 placeholder-neutral-300 focus:outline-none focus:border-accent-warm transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-accent-warm text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-accent-warm-dark transition-colors glitch-hover"
                >
                  Submit 送信
                </button>
              </form>
            </>
          )}
        </FadeInSection>
      </section>
    </div>
  );
}
