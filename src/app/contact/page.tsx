import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Video Production Enquiries Japan",
  description:
    "Get in touch with move-ment — Tokyo's bilingual video production company. Enquire about corporate video, drone, VR/360 tours, documentary and more. お気軽にご相談ください。",
  alternates: { canonical: "https://www.move-ment.co/contact" },
  openGraph: {
    title: "Contact move-ment | Bilingual Video Production Japan",
    description: "Get in touch to discuss your video production project in Japan. We reply in English and Japanese.",
    url: "https://www.move-ment.co/contact",
  },
};

export default function ContactPage() {
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

      <ContactForm />
    </div>
  );
}
