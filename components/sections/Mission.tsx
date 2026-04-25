"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface DogCard {
  title: string;
  image: string;
  fallbackGradient: string;
  tagText: string;
  tagBg: string;
  tagTextColor: string;
}

const dogCards: DogCard[] = [
  {
    title: "Homme avec chien",
    image: "/assets/photos/homme_chien_1.png",
    fallbackGradient: "from-rawr-beige to-rawr-purple",
    tagText: "Aventurier 🐾",
    tagBg: "bg-rawr-purple",
    tagTextColor: "text-white",
  },
  {
    title: "Femme avec chien 1",
    image: "/assets/photos/femme_chien_1.png",
    fallbackGradient: "from-rawr-purple-lt to-rawr-purple",
    tagText: "Passionnée ❤️",
    tagBg: "bg-rawr-beige",
    tagTextColor: "text-rawr-brown",
  },
  {
    title: "Femme avec chien 2",
    image: "/assets/photos/femme_chien_2.png",
    fallbackGradient: "from-rawr-beige to-rawr-brown",
    tagText: "Complice 🎾",
    tagBg: "bg-rawr-beige",
    tagTextColor: "text-rawr-brown",
  },
];

export const Mission: React.FC = () => {
  const [ref, isVisible] = useInView(true, 0.15);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (idx: number) => {
    setImageErrors((prev) => ({ ...prev, [idx]: true }));
  };


  return (
    <section
      id="mission"
      className="relative w-full bg-white py-[clamp(80px,8vw,120px)]"
      ref={ref}
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,80px)]">
        {/* Desktop Grid: 2 colonnes | Mobile: 1 colonne */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center"
          style={{ gap: "clamp(32px, 8vw, 80px)" }}
        >
          {/* COLONNE GAUCHE - Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Headline */}
            <h2
              className="font-body font-bold text-rawr-black"
              style={{
                fontSize: "clamp(36px, 4.5vw, 60px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Notre mission : te
              <br />
              faire (re)découvrir
              <br />
              les chiens.
            </h2>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body font-normal text-[17px] text-[#555] leading-[1.65] max-w-[440px]"
              style={{ marginTop: "24px" }}
            >
              Nous voulons que chaque propriétaire de chien trouve des connexions
              sincères et joyeuses — à travers son compagnon à quatre pattes.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-rawr-black text-white font-body font-semibold text-[15px] rounded-full border-none transition-all duration-200 hover:bg-black hover:scale-[1.02]"
              style={{
                padding: "14px 28px",
                marginTop: "40px",
                width: "fit-content",
              }}
            >
              Rejoindre la liste d'attente
            </motion.button>
          </motion.div>

          {/* COLONNE DROITE - Stack de Cards */}
          <div className="relative h-[480px] md:h-[480px] overflow-visible">
            {dogCards.map((card, idx) => {
              const hasError = imageErrors[idx];

              // Card positions and dimensions
              const positions = [
                { left: "0", top: "0", zIndex: 3, rotation: 0, opacity: 1 },
                {
                  left: "clamp(160px, 16vw, 220px)",
                  top: "40px",
                  zIndex: 2,
                  rotation: 6,
                  opacity: 0.95,
                },
                {
                  left: "clamp(300px, 30vw, 400px)",
                  top: "80px",
                  zIndex: 1,
                  rotation: 10,
                  opacity: 0.85,
                },
              ];

              const pos = positions[idx];
              const width =
                idx === 0
                  ? "clamp(220px, 22vw, 300px)"
                  : idx === 1
                    ? "clamp(180px, 18vw, 240px)"
                    : "clamp(150px, 14vw, 200px)";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 + idx * 10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 + idx * 10 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + idx * 0.15,
                  }}
                  className="absolute rounded-[20px] overflow-visible"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: width,
                    aspectRatio: "3/4",
                    zIndex: pos.zIndex,
                    transform: `rotate(${pos.rotation}deg)`,
                  }}
                >
                  {/* Card Container with Image */}
                  <div
                    className="w-full h-full rounded-[20px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                    style={{ opacity: pos.opacity }}
                  >
                    {!hasError && card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(idx)}
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${card.fallbackGradient} flex items-center justify-center text-6xl`}
                      >
                        🐕
                      </div>
                    )}
                  </div>

                  {/* Horizontal Tag at Bottom Right */}
                  <div
                    className="hidden md:flex absolute"
                    style={{
                      right: "12px",
                      bottom: "12px",
                      zIndex: pos.zIndex + 1,
                    }}
                  >
                    <div
                      className={`${card.tagBg} ${card.tagTextColor} rounded-full px-3 py-1 font-body font-bold text-[15px] flex items-center justify-center whitespace-nowrap`}
                    >
                      {card.tagText}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Adjusted heights */}
        <style jsx>{`
          @media (max-width: 767px) {
            .md\:h-\[480px\] {
              height: 320px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
