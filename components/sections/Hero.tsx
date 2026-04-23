"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface DogCard {
  id: number;
  name: string;
  age: number;
  breed: string;
  tags: string[];
  image: string;
  fallbackColor: string;
}

const dogCards: DogCard[] = [
  {
    id: 1,
    name: "Luna",
    age: 2,
    breed: "Dachshund",
    tags: ["Energique", "Aime les câlins"],
    image: "/dogs/dog2.jpg",
    fallbackColor: "from-orange-200 to-amber-100",
  },
  {
    id: 2,
    name: "Max",
    age: 3,
    breed: "Golden Retriever",
    tags: ["Joueur", "Adore les parcs"],
    image: "/dogs/labrador.png",
    fallbackColor: "from-yellow-100 to-orange-100",
  },
  {
    id: 3,
    name: "Rocky",
    age: 4,
    breed: "German Shepherd",
    tags: ["Loyal", "Très intelligent"],
    image: "/assets/photos/chien_noir_frontpage.png",
    fallbackColor: "from-amber-100 to-yellow-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardStackVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.4 },
  },
};

export const Hero: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-rawr-white border-2 border-rawr-black pt-[clamp(60px,10vw,100px)] pb-[clamp(60px,10vw,100px)]">
      {/* Paw print decorations */}
      <div className="absolute top-12 left-8 text-rawr-black opacity-[0.04] text-3xl select-none pointer-events-none">
        🐾
      </div>
      <div className="absolute top-1/3 right-12 text-rawr-black opacity-[0.04] text-3xl select-none pointer-events-none">
        🐾
      </div>
      <div className="absolute bottom-20 left-1/4 text-rawr-black opacity-[0.04] text-3xl select-none pointer-events-none">
        🐾
      </div>

      <Container className="h-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-8 items-center min-h-[600px] md:min-h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="w-fit"
            >
              <span className="inline-block bg-rawr-beige text-rawr-brown text-[13px] font-[500] px-4 py-2 rounded-pill">
                🐾 Bientôt disponible à Paris
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="font-display font-bold text-rawr-black leading-[1.05]"
                style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
                Swipe le chien.
              </h1>
              <h1 className="font-display font-bold text-rawr-black leading-[1.05] pl-[1em]"
                style={{ fontSize: "clamp(40px, 6vw, 80px)" }}>
                Rencontre l'humain.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-rawr-black opacity-70 text-[18px] leading-[1.6] max-w-[480px]"
            >
              L'app de rencontres pour propriétaires de chiens. Swipez sur les
              profils de leurs chiens — la vraie magie commence au match.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  /* App download logic */
                }}
              >
                Télécharger l'app
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("how-it-works")}
              >
                Comment ça marche →
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-6"
            >
              <div className="flex -space-x-3">
                {["🐶", "🦮", "🐕", "🐩"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-rawr-beige border-2 border-rawr-white flex items-center justify-center text-lg"
                    style={{ zIndex: i }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <p className="text-rawr-brown font-[500] text-[14px]">
                10 000+ dog owners already waiting
              </p>
            </motion.div>
          </div>

          {/* Right Column - Card Stack */}
          <motion.div
            variants={cardStackVariants}
            className="relative hidden md:flex items-center justify-center h-full"
          >
            <div className="relative w-[320px] h-[420px] md:w-[320px] md:h-[420px]">
              {dogCards.map((card, idx) => {
                const rotation = idx === 0 ? -6 : idx === 1 ? 2 : 0;
                const translateY = idx === 0 ? 16 : idx === 1 ? 8 : 0;
                const zIndex = idx + 1;

                const hasError = imageErrors[card.id];

                return (
                  <motion.div
                    key={card.id}
                    className={`absolute w-[280px] aspect-[3/4] rounded-card overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12)] cursor-pointer transition-transform hover:scale-105`}
                    style={{
                      transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                      zIndex: zIndex,
                    }}
                    animate={idx === dogCards.length - 1 ? { y: [0, -10, 0] } : {}}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  >
                    {/* Card Background/Image */}
                    {!hasError && card.image ? (
                      <Image
                        src={card.image}
                        alt={`${card.name}, ${card.age} ans`}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(card.id)}
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-b ${card.fallbackColor} flex items-center justify-center text-6xl`}
                      >
                        🐕
                      </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                    {/* Card Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-rawr-white">
                      <h3 className="font-body font-bold text-[18px]">
                        {card.name}, {card.age} ans • {card.breed}
                      </h3>
                      <div className="flex gap-2 mt-3">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white bg-opacity-30 text-rawr-white text-[12px] font-[500] px-3 py-1 rounded-pill"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Top Card Only */}
                    {idx === dogCards.length - 1 && (
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between px-2">
                        <button
                          className="w-12 h-12 rounded-full bg-rawr-white shadow-card flex items-center justify-center text-[20px] text-[#666] hover:shadow-card-hover transition-shadow"
                          aria-label="Dislike"
                        >
                          ✕
                        </button>
                        <button
                          className="w-12 h-12 rounded-full bg-rawr-purple shadow-card flex items-center justify-center text-[20px] hover:shadow-glow transition-shadow"
                          aria-label="Like"
                        >
                          ❤️
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Mobile Card Stack */}
          <motion.div
            variants={cardStackVariants}
            className="md:hidden flex items-center justify-center w-full"
          >
            <div className="relative w-[260px] h-[345px]">
              {dogCards.map((card, idx) => {
                const rotation = idx === 0 ? -6 : idx === 1 ? 2 : 0;
                const translateY = idx === 0 ? 16 : idx === 1 ? 8 : 0;
                const zIndex = idx + 1;

                const hasError = imageErrors[card.id];

                return (
                  <motion.div
                    key={card.id}
                    className={`absolute w-[230px] aspect-[3/4] rounded-card overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.12)]`}
                    style={{
                      transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
                      zIndex: zIndex,
                    }}
                    animate={idx === dogCards.length - 1 ? { y: [0, -10, 0] } : {}}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  >
                    {!hasError && card.image ? (
                      <Image
                        src={card.image}
                        alt={`${card.name}, ${card.age} ans`}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(card.id)}
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-b ${card.fallbackColor} flex items-center justify-center text-6xl`}
                      >
                        🐕
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-rawr-white">
                      <h3 className="font-body font-bold text-[16px]">
                        {card.name}, {card.age} ans
                      </h3>
                      <div className="flex gap-2 mt-2">
                        {card.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white bg-opacity-30 text-rawr-white text-[11px] font-[500] px-2 py-1 rounded-pill"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
