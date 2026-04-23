"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";

const founders = [
  { initials: "A", name: "Armand", role: "CEO & Ingénieur" },
  { initials: "Am", name: "Ambre", role: "Product & Growth" },
  { initials: "C", name: "Christopher", role: "Design & Brand" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Histoire: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="bg-rawr-black py-[clamp(80px,10vw,140px)]">
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Visual */}
          <motion.div
            variants={sectionVariants}
            className="flex items-center justify-center"
          >
            {!imageError ? (
              <div className="relative w-full aspect-square rounded-card overflow-hidden bg-white/5 flex items-center justify-center">
                <Image
                  src="/assets/design/Meet_throught_your_pet.png"
                  alt="Notre histoire"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="w-full aspect-square rounded-card overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex flex-col items-center justify-center space-y-8">
                {/* Avatar Stack */}
                <div className="relative h-64 w-48">
                  {[
                    { initials: "A", top: "0px" },
                    { initials: "Am", top: "60px" },
                    { initials: "C", top: "120px" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-rawr-beige/20 flex items-center justify-center"
                      style={{ top: item.top }}
                    >
                      <span className="text-rawr-white font-display font-bold text-lg">
                        {item.initials}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Names */}
                <div className="text-center">
                  <p className="text-rawr-white/70 font-body font-400 text-sm">
                    Armand · Ambre · Christopher
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col space-y-6"
          >
            {/* Section Tag */}
            <motion.div variants={itemVariants}>
              <SectionTag className="!items-start">NOTRE HISTOIRE</SectionTag>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-rawr-white leading-[1.05]"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              Trois amis, deux chiens, une idée.
            </motion.h2>

            {/* Body Text */}
            <motion.p
              variants={itemVariants}
              className="font-body font-400 text-[17px] text-[#AAAAAA] leading-[1.75]"
            >
              Rawr est né à Paris, dans un parc du 15e. Armand, Ambre et
              Christopher se retrouvaient chaque semaine avec leurs chiens —
              et réalisaient que ces rencontres étaient les meilleures de leur
              semaine. Pas de profil trafiqué. Pas de pression. Juste des
              chiens heureux, et des humains qui se découvraient naturellement.
              On a voulu que tout le monde puisse vivre ça.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={itemVariants}
              className="border-l-[3px] border-rawr-purple pl-6 mt-10"
            >
              <p
                className="font-display italic text-rawr-white leading-[1.4]"
                style={{ fontSize: "22px" }}
              >
                Le chien est le meilleur algorithme de compatibilité qu'on ait
                jamais inventé.
              </p>
              <p className="font-body font-500 text-[13px] text-rawr-purple mt-3">
                — Armand, co-fondateur
              </p>
            </motion.blockquote>

            {/* Founders */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mt-12"
            >
              {founders.map((founder) => (
                <div key={founder.initials} className="flex flex-col items-center gap-3">
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-display font-bold text-rawr-white"
                    style={{ backgroundColor: "rgba(188, 74, 216, 0.3)" }}
                  >
                    {founder.initials}
                  </div>
                  <p className="font-body font-600 text-[14px] text-rawr-white text-center">
                    {founder.name}
                  </p>
                  <p className="font-body font-400 text-[12px] text-[#888888] text-center">
                    {founder.role}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
