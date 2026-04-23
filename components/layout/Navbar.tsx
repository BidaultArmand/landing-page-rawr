'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { Sheet } from '@/components/ui/sheet';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('FR');
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Comment ça marche', href: '#how-it-works' },
    { label: 'Notre Mission', href: '#mission' },
    { label: 'Notre Histoire', href: '#histoire' },
    { label: 'FAQ', href: '#faq' },
  ];

  const languages = [
    { label: 'Français', value: 'FR' },
    { label: 'English', value: 'EN' },
    { label: 'Español', value: 'ES' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCTAClick = () => {
    const element = document.querySelector('#download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languageDropdownItems = languages.map((lang) => ({
    label: lang.label,
    onClick: () => setCurrentLanguage(lang.value),
  }));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300">
      <div className="max-w-[1280px] mx-auto h-full px-[clamp(24px,4vw,64px)] grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        {/* COLONNE 1 — LOGO (gauche) */}
        <div className="justify-self-start">
          <Link href="/" className="inline-block">
            {!logoError ? (
              <Image
                src="/assets/logo/Plan de travail 1LogoRawr_Noir.png"
                width={80}
                height={28}
                alt="Rawr"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <span
                className="text-[26px] font-extrabold text-[#1A1A1A]"
                style={{ letterSpacing: '-0.02em' }}
              >
                Rawr
              </span>
            )}
          </Link>
        </div>

        {/* COLONNE 2 — PILL NAVIGATION (centre, desktop uniquement) */}
        <div className="justify-self-center hidden md:flex items-center bg-white border-[1.5px] border-[#E8E8E8] rounded-full px-1.5 py-1.5 gap-0.5 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleSmoothScroll}
              className="px-5 py-2.25 text-[15px] font-medium text-[#333333] rounded-full whitespace-nowrap transition-all duration-200 hover:bg-[#F2F2F2] hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* COLONNE 3 — GLOBE + LANGUE + CTA (droite) */}
        <div className="justify-self-end flex items-center gap-3 md:gap-3">
          {/* Language Dropdown (desktop uniquement) */}
          <div className="hidden md:block">
            <DropdownMenu
              trigger={
                <button
                  className="flex items-center gap-1.5 px-3.5 py-2 h-10 border-[1.5px] border-[#E8E8E8] rounded-full text-[14px] font-medium text-[#333] hover:border-[#D0D0D0] transition-colors duration-200"
                  aria-label="Select language"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>{currentLanguage}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M2 4.5L6 8l4-3.5" strokeWidth="1.5" />
                  </svg>
                </button>
              }
              items={languageDropdownItems}
              className="relative"
            />
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="hidden md:block bg-[#1A1A1A] text-white rounded-full px-6 h-11 text-[15px] font-bold transition-colors duration-200 hover:bg-black"
          >
            Rejoindre la liste
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div
              className={`w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* CTA Button Mobile */}
          <button
            onClick={handleCTAClick}
            className="md:hidden bg-[#1A1A1A] text-white rounded-full px-4 h-10 text-sm font-bold transition-colors duration-200 hover:bg-black"
          >
            Rejoindre
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <div className="flex flex-col h-full p-6">
          {/* Mobile Logo */}
          <div className="mb-6">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              {!logoError ? (
                <Image
                  src="/assets/logo/Plan de travail 1LogoRawr_Noir.png"
                  width={80}
                  height={28}
                  alt="Rawr"
                  onError={() => setLogoError(true)}
                  priority
                />
              ) : (
                <span
                  className="text-2xl font-extrabold text-[#1A1A1A]"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Rawr
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-4 mb-6 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleSmoothScroll(e);
                  setIsMobileMenuOpen(false);
                }}
                className="text-[18px] font-medium text-[#333333] py-4 border-b border-[#F0F0F0] transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="border-t border-[#F0F0F0] pt-4 mb-6">
            <div className="text-sm font-medium text-[#666] mb-3">Langue</div>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => {
                    setCurrentLanguage(lang.value);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    currentLanguage === lang.value
                      ? 'bg-[#1A1A1A] text-white'
                      : 'bg-[#F2F2F2] text-[#333] hover:bg-[#E0E0E0]'
                  }`}
                >
                  {lang.value}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile CTA Button */}
          <button
            onClick={() => {
              handleCTAClick();
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-[#1A1A1A] text-white rounded-full py-3 text-[15px] font-bold transition-colors duration-200 hover:bg-black"
          >
            Rejoindre la liste
          </button>
        </div>
      </Sheet>
    </nav>
  );
};
