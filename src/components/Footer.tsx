import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              move<span className="text-accent-warm">-</span>ment
            </h3>
            <p className="text-white/50 text-sm font-jp">
              株式会社ムーブメント
            </p>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              A bilingual video production company based in Japan.
              <br />
              <span className="font-jp">日本を拠点とするバイリンガル映像制作会社。</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-accent-warm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Programme Content", href: "/programme-content" },
                { label: "Drone Video", href: "/japan-drone-video-photo" },
                { label: "VR / 360° Tours", href: "/vr-360-tours-japan" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-sm font-semibold text-accent-warm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Ready to tell your story? Let&apos;s create something that moves people.
              <br />
              <span className="font-jp">お問い合わせはこちらから。</span>
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-accent-warm text-dark-900 font-semibold text-sm rounded hover:bg-accent-warm/90 transition-colors"
            >
              Contact Us / お問い合わせ
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} move-ment Company / 株式会社ムーブメント. All rights reserved.
          </p>
          <p className="text-white/20 text-xs italic">
            we are -ment to -move
          </p>
        </div>
      </div>
    </footer>
  );
}
