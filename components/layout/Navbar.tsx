"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { Container } from "@/components/ui";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Notre Mission", href: "#mission" },
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Notre Histoire", href: "#histoire" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-rawr-white/80 shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <Container className="h-[72px] md:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-display text-2xl font-bold text-rawr-black">
            RAWR
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-rawr-black hover:text-rawr-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Rejoindre la liste
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-rawr-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-rawr-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-rawr-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-rawr-white border-t border-rawr-beige">
          <Container className="py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-rawr-black hover:text-rawr-purple transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="md" className="w-full">
              Rejoindre la liste
            </Button>
          </Container>
        </div>
      )}
    </nav>
  );
};
