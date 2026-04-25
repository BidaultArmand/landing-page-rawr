"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface DogCard {
  name: string;
  age: number;
  image: string;
  fallbackGradient: string;
}

const dogCards: DogCard[] = [
  {
    name: "Josh",
    age: 27,
    image: "/assets/photos/homme1.png",
    fallbackGradient: "from-rawr-purple-lt to-rawr-purple",
  },
  {
    name: "Dana",
    age: 29,
    image: "/assets/photos/femme1.png",
    fallbackGradient: "from-rawr-beige to-rawr-brown",
  },
  {
    name: "Ele",
    age: 33,
    image: "/assets/photos/femme2.png",
    fallbackGradient: "from-rawr-purple to-rawr-purple-lt",
  },
];

interface Transform {
  y: number;
  x: number;
  scale: number;
  rotate: number;
  zIndex: number;
}

const getCardTransform = (cardIndex: number, hoveredCard: number | null): Transform => {
  // État de repos (aucun hover)
  if (hoveredCard === null) {
    if (cardIndex === 0) return { y: 20, x: 0, scale: 1, rotate: -12, zIndex: 11 };
    if (cardIndex === 1) return { y: -10, x: 0, scale: 1.05, rotate: 0, zIndex: 13 };
    return { y: 30, x: 0, scale: 1, rotate: 10, zIndex: 12 };
  }

  // Hover sur card 0 (gauche)
  if (hoveredCard === 0) {
    if (cardIndex === 0) return { y: -60, x: -30, scale: 1.08, rotate: -6, zIndex: 20 };
    if (cardIndex === 1) return { y: 10, x: 30, scale: 1, rotate: 4, zIndex: 13 };
    return { y: 40, x: 20, scale: 0.97, rotate: 13, zIndex: 12 };
  }

  // Hover sur card 1 (centre)
  if (hoveredCard === 1) {
    if (cardIndex === 0) return { y: 30, x: -40, scale: 0.97, rotate: -16, zIndex: 11 };
    if (cardIndex === 1) return { y: -70, x: 0, scale: 1.1, rotate: 0, zIndex: 20 };
    return { y: 45, x: 40, scale: 0.97, rotate: 14, zIndex: 12 };
  }

  // Hover sur card 2 (droite)
  if (cardIndex === 0) return { y: 30, x: -20, scale: 0.97, rotate: -14, zIndex: 11 };
  if (cardIndex === 1) return { y: 10, x: -30, scale: 1, rotate: -4, zIndex: 13 };
  return { y: -60, x: 30, scale: 1.08, rotate: 5, zIndex: 20 };
};

const springTransition = {
  y: { type: "spring" as const, stiffness: 350, damping: 28, mass: 0.8 },
  x: { type: "spring" as const, stiffness: 300, damping: 25, mass: 0.8 },
  scale: { type: "spring" as const, stiffness: 400, damping: 30 },
  rotate: { type: "spring" as const, stiffness: 250, damping: 22, mass: 1.0 },
};

export const Hero: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleImageError = (idx: number) => {
    setImageErrors((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between pt-24 md:pt-0" style={{ backgroundColor: "#fce3fa", marginTop: "-115px" }}>
      {/* Titre géant RAWR - position absolute devant les cartes */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="font-display font-bold whitespace-nowrap"
          style={{
            fontSize: "clamp(180px, 22vw, 320px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#2ecca2",
          }}
        >
          Rawr.
        </h1>
      </motion.div>

      {/* Cards en éventail - z-index 10 (derrière le titre) */}
      <motion.div
        className="relative z-10 flex items-center justify-center flex-1 px-4"
        style={{ perspective: "800px" }}
      >
        <div className="relative w-full flex items-flex-end justify-center gap-0">
          {dogCards.map((card, idx) => {
            const transform = getCardTransform(idx, hoveredCard);
            const hasError = imageErrors[idx];
            const isHovered = hoveredCard === idx;
            const animationDelay = idx === 0 ? 0.2 : idx === 1 ? 0.35 : 0.5;

            return (
              <motion.div
                key={idx}
                className={`relative flex-shrink-0 aspect-[2/3] rounded-[20px] overflow-hidden cursor-pointer transition-shadow duration-300 ${
                  isHovered
                    ? "shadow-[0_32px_80px_rgba(0,0,0,0.22)]"
                    : "shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
                }`}
                style={{
                  width: "clamp(180px, 15vw, 260px)",
                  transformOrigin: "bottom center",
                }}
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: transform.scale,
                  rotate: transform.rotate + (idx === 0 ? -8 : idx === 2 ? 8 : 0),
                }}
                animate={{
                  opacity: 1,
                  y: transform.y,
                  x: transform.x,
                  scale: transform.scale,
                  rotate: transform.rotate,
                  zIndex: transform.zIndex,
                }}
                transition={{
                  opacity: { duration: 0.6, delay: animationDelay, ease: "easeOut" },
                  ...springTransition,
                }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Image or Fallback */}
                {!hasError && card.image ? (
                  <img
                    src={card.image}
                    alt={`${card.name}, ${card.age} ans`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(idx)}
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-b ${card.fallbackGradient} flex items-center justify-center text-6xl`}
                  >
                    🐕
                  </div>
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Card Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-4 text-white">
                  <p className="font-body font-semibold text-sm md:text-base">
                    {card.name}, {card.age} ans
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contenu bas - gradient fade + subtitle + CTA - z-index 30 */}
      <div className="relative z-30 pt-12 pb-12 md:pb-20 px-4" style={{ background: "linear-gradient(180deg, rgba(252, 227, 250, 0) 0%, rgba(252, 227, 250, 0.95) 100%)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Sous-titre gauche */}
          <motion.p
            className="font-body font-bold text-lg md:text-xl text-[#444] leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            L'app de rencontres pour propriétaires de chiens.
            <br />
            Swipe le chien. Rencontre l'humain.
          </motion.p>

          {/* CTA Button droite */}
          <motion.button
            className="rounded-full px-8 py-4 font-body font-bold text-base md:text-lg whitespace-nowrap transition-all duration-200"
            style={{
              backgroundColor: "#fce3fa",
              color: "#2ecca2",
              border: "2px solid #2ecca2",
            }}
            whileHover={{
              backgroundColor: "#ffffff",
              boxShadow: "0_8px_24px_rgba(46,202,162,0.2)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Rejoindre la liste d'attente →
          </motion.button>
        </div>
      </div>
    </section>
  );
};
