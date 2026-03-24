import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black mb-2 text-neutral-900">
              move<span className="text-accent-warm">-</span>ment
            </h3>
            <p className="text-neutral-400 text-sm font-jp mb-3">
              株式会社move-ment
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed">
              1-18-5-503 Higashi Gotanda<br />
              Shinagawa, Tokyo 141-0022
            </p>
            <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
              <a href="mailto:we-are@move-ment.co" className="hover:text-accent-warm transition-colors">we-are@move-ment.co</a><br />
              <a href="tel:+819038800895" className="hover:text-accent-warm transition-colors">+81 90 3880 0895</a> (WhatsApp)
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/move_ment.co.ltd/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent-warm transition-colors text-sm">
                Instagram
              </a>
              <a href="https://www.filminginjapan.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent-warm transition-colors text-sm">
                filminginjapan.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-accent-warm uppercase tracking-[0.2em] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Programme Content", href: "/programme-content" },
                { label: "Drone Video & Photo", href: "/japan-drone-video-photo" },
                { label: "VR / 360° Tours", href: "/vr-360-tours-japan" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-neutral-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-accent-warm uppercase tracking-[0.2em] mb-4">
              Get in Touch
            </h4>
            <p className="text-neutral-500 text-sm mb-4 leading-relaxed">
              Please do get in touch.<br />
              <span className="font-jp">お気軽に日本語でもどうぞ。</span>
            </p>
            <p className="text-neutral-400 text-xs mb-6">
              Chris Moore / 代表取締役
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-accent-warm text-white font-bold text-sm tracking-wider uppercase hover:bg-accent-warm-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-xs font-mono tracking-wider">
            &copy; {new Date().getFullYear()} move-ment Company / 株式会社ムーブメント
          </p>
          <p className="text-neutral-300 text-xs font-mono tracking-[0.2em] italic">
            we are -ment to -move
          </p>
        </div>
      </div>
    </footer>
  );
}
