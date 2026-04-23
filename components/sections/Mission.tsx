"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/ui/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface PillarProps {
  emoji: string;
  title: string;
  description: string;
  isVisible: boolean;
  index: number;
}

const Pillar: React.FC<PillarProps> = ({
  emoji,
  title,
  description,
  isVisible,
  index,
}) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    transition={{ delay: index * 0.1 }}
    className="bg-rawr-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
  >
    <div className="p-8 flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-rawr-beige mb-5">
        <span className="text-3xl">{emoji}</span>
      </div>
      <h3 className="font-body font-bold text-xl text-rawr-black mb-3">
        {title}
      </h3>
      <p className="font-body font-normal text-base text-rawr-black opacity-70 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export const Mission: React.FC = () => {
  const [ref, isVisible] = useInView(true, 0.15);

  return (
    <section
      id="mission"
      className="relative py-[clamp(80px,10vw,140px)] bg-[rgba(239,202,158,0.25)]"
    >
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="w-full"
        >
          {/* Header Section */}
          <motion.div
            variants={headerVariants}
            className="mb-16 text-center"
          >
            <p className="font-body font-medium text-sm uppercase tracking-wide text-rawr-purple mb-4">
              Notre mission
            </p>
            <h2 className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-tight text-rawr-black mb-6">
              Nous croyons que les meilleures rencontres commencent par un chien.
            </h2>
            <p className="font-body font-normal text-lg text-rawr-black opacity-70 leading-relaxed max-w-2xl mx-auto">
              Rawr est né d'une conviction simple : les propriétaires de chiens partagent déjà quelque chose d'essentiel.
              La patience. L'amour inconditionnel. Le besoin de connexion. Notre app met le chien au centre — parce que son profil ne ment jamais.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Pillar
              emoji="🐾"
              title="Le chien d'abord"
              description="On swipe sur le chien, pas sur une photo retouchée. L'authenticité avant tout."
              isVisible={isVisible}
              index={0}
            />
            <Pillar
              emoji="❤️"
              title="Des vraies connexions"
              description="Quand les chiens matchent, les humains se découvrent naturellement. Moins de pression, plus de magie."
              isVisible={isVisible}
              index={1}
            />
            <Pillar
              emoji="🗺️"
              title="La promenade comme 1er RDV"
              description="Chaque match se transforme en rencontre IRL, au parc, dès la première semaine."
              isVisible={isVisible}
              index={2}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
