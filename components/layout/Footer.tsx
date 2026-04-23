import React from "react";
import { Container } from "@/components/ui";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rawr-black text-rawr-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <span className="font-display text-2xl font-bold text-rawr-white">
              RAWR
            </span>
            <p className="text-sm text-rawr-white/80">
              Find your dog's best friend, find yours.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#privacy"
                className="hover:text-rawr-purple transition-colors"
              >
                Confidentialité
              </a>
              <span className="text-rawr-white/40">·</span>
              <a href="#cgu" className="hover:text-rawr-purple transition-colors">
                CGU
              </a>
              <span className="text-rawr-white/40">·</span>
              <a
                href="#contact"
                className="hover:text-rawr-purple transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end gap-4">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-rawr-purple transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <circle cx="17.5" cy="6.5" r="1.5"></circle>
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              aria-label="TikTok"
              className="hover:text-rawr-purple transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-rawr-white/20 pt-8 text-center text-sm text-rawr-white/60">
          © {currentYear} RAWR — The dating app for dog owners.
        </div>
      </Container>
    </footer>
  );
};
