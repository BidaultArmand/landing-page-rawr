"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const CTADownload: React.FC = () => {
  const [ref, isVisible] = useInView(true, 0.15);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const phoneVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 100,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  });

  return (
    <div
      ref={ref}
      className="relative w-full bg-white"
      style={{
        paddingTop: "clamp(20px, 2vw, 40px)",
        paddingBottom: "clamp(20px, 2vw, 40px)",
      }}
    >
      {/* Container outer */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1280px",
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
        }}
      >
        {/* Main tile */}
        <motion.div
          className="relative w-full bg-[#F4C2C2] rounded-[32px] overflow-hidden"
          style={{
            padding: "clamp(40px, 8vw, 56px) clamp(32px, 8vw, 64px)",
            display: "flex",
            alignItems: "center",
            minHeight: "380px",
          }}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left column - Text content */}
          <div className="w-full md:flex-1 md:max-w-[420px] flex flex-col justify-center">
            {/* Title */}
            <motion.h2
              className="font-black text-[#1A1A1A] leading-[0.95] tracking-[-0.03em] overflow-visible"
              style={{
                fontSize: "clamp(32px, 7vw, 55px)",
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={titleVariants}
            >
              Télécharge<br />
              Rawr.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="font-normal text-[#444444] text-base md:text-[17px] mt-4"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={subtitleVariants}
            >
              Rejoins la liste d'attente dès maintenant.
            </motion.p>

            {/* Mobile buttons */}
            <div className="md:hidden flex flex-col gap-3 mt-8 w-full">
              {/* App Store button */}
              <button className="w-full px-6 py-4 bg-[#1A1A1A] text-white rounded-full font-medium text-base flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                <span className="text-xl">🍎</span>
                App Store
              </button>

              {/* Google Play button */}
              <button className="w-full px-6 py-4 bg-[#1A1A1A] text-white rounded-full font-medium text-base flex items-center justify-center gap-3 hover:opacity-90 transition-opacity">
                <span className="text-xl">▶</span>
                Google Play
              </button>

              {/* Coming soon text */}
              <p className="text-center font-normal text-[13px] text-[#888] mt-2">
                (bientôt disponible)
              </p>
            </div>
          </div>

          {/* Center phones section - desktop only */}
          <div
            className="hidden md:flex absolute items-center"
            style={{
              left: "55%",
              top: "-30px",
              transform: "translateX(-50%)",
              height: "auto",
              gap: "-20px",
              zIndex: 2,
            }}
          >
            {/* Phone 1 - Left, behind */}
            <motion.div
              className="relative flex-shrink-0"
              style={{
                width: "clamp(140px, 12vw, 180px)",
                aspectRatio: "9 / 19.5",
                transform: "rotate(-18deg)",
                marginRight: "-30px",
                zIndex: 10,
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={phoneVariants(0.15)}
            >
              <PhoneMockup
                gradientFrom="#D6A6E2"
                gradientTo="#BC4AD8"
                emoji="🐕"
              />
            </motion.div>

            {/* Phone 2 - Center, front */}
            <motion.div
              className="relative flex-shrink-0"
              style={{
                width: "clamp(140px, 12vw, 180px)",
                aspectRatio: "9 / 19.5",
                transform: "scale(1.05)",
                zIndex: 30,
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={phoneVariants(0.3)}
            >
              <PhoneMockup
                gradientFrom="#EFCA9E"
                gradientTo="#BC4AD8"
                emoji=""
                showText="Rawr"
              />
            </motion.div>

            {/* Phone 3 - Right, behind */}
            <motion.div
              className="relative flex-shrink-0"
              style={{
                width: "clamp(140px, 12vw, 180px)",
                aspectRatio: "9 / 19.5",
                transform: "rotate(18deg)",
                marginLeft: "-30px",
                zIndex: 20,
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={phoneVariants(0.45)}
            >
              <PhoneMockup
                gradientFrom="#BC4AD8"
                gradientTo="#6A4125"
                emoji="❤️"
              />
            </motion.div>
          </div>

          {/* Right column - QR Code section - desktop only */}
          <motion.div
            className="hidden md:flex flex-col items-center justify-center flex-1"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={subtitleVariants}
            style={{
              zIndex: 1,
              marginRight: "-35%",
            }}
          >
            {/* QR Code placeholder */}
            <div className="w-40 h-40 bg-white rounded-[16px] p-3 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 160 160"
                className="w-full h-full"
              >
                {/* QR code pattern (fixed, deterministic) */}
                {/* Position finder patterns (corners) */}
                {/* Top-left */}
                <rect x="20" y="20" width="18" height="18" fill="#1A1A1A" />
                <rect x="40" y="20" width="18" height="18" fill="#1A1A1A" />
                <rect x="60" y="20" width="18" height="18" fill="#1A1A1A" />
                <rect x="20" y="40" width="18" height="18" fill="#1A1A1A" />
                <rect x="60" y="40" width="18" height="18" fill="#1A1A1A" />
                <rect x="20" y="60" width="18" height="18" fill="#1A1A1A" />
                <rect x="40" y="60" width="18" height="18" fill="#1A1A1A" />
                <rect x="60" y="60" width="18" height="18" fill="#1A1A1A" />
                {/* Top-right */}
                <rect x="100" y="20" width="18" height="18" fill="#1A1A1A" />
                <rect x="120" y="20" width="18" height="18" fill="#1A1A1A" />
                <rect x="100" y="40" width="18" height="18" fill="#1A1A1A" />
                <rect x="120" y="40" width="18" height="18" fill="#1A1A1A" />
                {/* Bottom-left */}
                <rect x="20" y="100" width="18" height="18" fill="#1A1A1A" />
                <rect x="40" y="100" width="18" height="18" fill="#1A1A1A" />
                <rect x="60" y="100" width="18" height="18" fill="#1A1A1A" />
                <rect x="20" y="120" width="18" height="18" fill="#1A1A1A" />
                <rect x="60" y="120" width="18" height="18" fill="#1A1A1A" />
                {/* Data pattern */}
                <rect x="80" y="80" width="18" height="18" fill="#1A1A1A" />
                <rect x="100" y="80" width="18" height="18" fill="#1A1A1A" />
                <rect x="120" y="80" width="18" height="18" fill="#1A1A1A" />
                <rect x="80" y="100" width="18" height="18" fill="#1A1A1A" />
                <rect x="100" y="100" width="18" height="18" fill="#1A1A1A" />
                <rect x="80" y="120" width="18" height="18" fill="#1A1A1A" />
                <rect x="120" y="120" width="18" height="18" fill="#1A1A1A" />
              </svg>
            </div>

            {/* QR Code text */}
            <p className="font-medium text-[14px] text-[#666] mt-3">
              Scanne pour rejoindre
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

interface PhoneMockupProps {
  gradientFrom: string;
  gradientTo: string;
  emoji?: string;
  showText?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({
  gradientFrom,
  gradientTo,
  emoji,
  showText,
}) => {
  return (
    <div
      className="w-full h-full overflow-hidden flex flex-col"
      style={{
        borderWidth: "6px",
        borderColor: "#1A1A1A",
        borderRadius: "36px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.20)",
        backgroundColor: "white",
      }}
    >
      {/* Status bar */}
      <div
        className="flex items-center justify-between px-3 flex-shrink-0"
        style={{
          height: "28px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "11px", color: "#1A1A1A" }}>
          9:41
        </span>
        <span style={{ fontSize: "10px", color: "#1A1A1A" }}>▪▪▪</span>
      </div>

      {/* Main content */}
      <div
        className="flex-1 flex items-center justify-center"
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {emoji && (
          <span style={{ fontSize: "40px", lineHeight: 1 }}>{emoji}</span>
        )}
        {showText && (
          <h3
            style={{
              fontWeight: 600,
              color: "white",
              fontSize: "24px",
              lineHeight: 1.2,
            }}
          >
            {showText}
          </h3>
        )}
      </div>

      {/* Bottom bar (home indicator) */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          height: "32px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#CCCCCC",
            borderRadius: "2px",
          }}
        ></div>
      </div>
    </div>
  );
};
