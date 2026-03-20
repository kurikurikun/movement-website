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
      <section className="relative h-[40vh] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/contact-hero/1920/800"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-light mb-4">Contact Us</h1>
          <p className="text-white/60 text-xl font-jp">お問い合わせ</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4">
        <FadeInSection className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-light mb-4">Thank you! / ありがとうございます！</h2>
              <p className="text-white/60">
                We&apos;ll get back to you soon. お返事をお待ちください。
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-light mb-2 text-center">Get in Touch</h2>
              <p className="text-white/50 text-center mb-10 font-jp">お気軽にお問い合わせください</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Name / お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-accent-warm/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email / メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-accent-warm/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                    Message / メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-accent-warm/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-accent-warm text-dark-900 font-semibold rounded-lg hover:bg-accent-warm/90 transition-colors"
                >
                  Send Message / 送信
                </button>
              </form>
            </>
          )}
        </FadeInSection>
      </section>
    </div>
  );
}
