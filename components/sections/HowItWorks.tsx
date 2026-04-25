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
      staggerChildren: 0.12,
      delayChildren: 0.1,
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

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface StepProps {
  number: number;
  emoji: string;
  title: string;
  description: string;
  isVisible: boolean;
  index: number;
}

const Step: React.FC<StepProps> = ({
  number,
  emoji,
  title,
  description,
  isVisible,
  index,
}) => (
  <motion.div
    variants={stepVariants}
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    transition={{ delay: index * 0.12 }}
    className="flex flex-col items-center text-center"
  >
    {/* Desktop: Circle number + emoji above, Mobile: border on left */}
    <div className="hidden md:block mb-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rawr-purple text-rawr-white font-body font-bold text-xl mb-4">
        {number}
      </div>
      <div className="text-3xl">{emoji}</div>
    </div>

    {/* Mobile: left border indicator */}
    <div className="block md:hidden w-full pb-6 border-l-4 border-rawr-purple pl-6">
      <div className="text-3xl mb-3 text-left">{emoji}</div>
      <h3 className="font-body font-bold text-lg text-rawr-black mb-2 text-left">
        {title}
      </h3>
      <p className="font-body font-normal text-sm text-rawr-brown opacity-80 leading-relaxed text-left">
        {description}
      </p>
    </div>

    {/* Desktop view */}
    <div className="hidden md:block">
      <h3 className="font-body font-bold text-lg text-rawr-black mb-3">
        {title}
      </h3>
      <p className="font-body font-normal text-sm text-rawr-brown opacity-80 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  </motion.div>
);

export const HowItWorks: React.FC = () => {
  const [ref, isVisible] = useInView(true, 0.15);

  const steps = [
    {
      number: 1,
      emoji: "👤",
      title: "Crée vos profils",
      description:
        "Un profil pour toi, un pour ton chien. Photos, race, âge, personnalité.",
    },
    {
      number: 2,
      emoji: "❤️",
      title: "Swipe & découvre",
      description:
        "Browse les dog owners près de chez toi. Swipe quand le feeling est là — pour vous deux.",
    },
    {
      number: 3,
      emoji: "💬",
      title: "Match & chat",
      description:
        "Quand c'est mutuel, la conversation commence. Vos chiens en commun, vos parcs préférés.",
    },
    {
      number: 4,
      emoji: "🚶",
      title: "Planifie une promenade",
      description:
        "Utilisez le planificateur intégré : lieu, date, itinéraire. Votre premier RDV nature.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-[clamp(80px,10vw,140px)] bg-rawr-white"
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
          <motion.div variants={headerVariants} className="mb-16 text-center">
            <p className="font-body font-medium text-sm uppercase tracking-wide text-rawr-purple mb-4">
              Comment ça marche
            </p>
            <h2 className="font-display font-bold text-[clamp(32px,4.5vw,56px)] leading-tight text-rawr-black">
              Quatre étapes simples, du swipe à la première promenade.
            </h2>
          </motion.div>

          {/* Steps Grid - Desktop Timeline / Mobile Vertical */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-rawr-purple via-rawr-purple to-rawr-purple opacity-30 border-t-2 border-dashed border-rawr-purple"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
              {steps.map((step, index) => (
                <Step
                  key={step.number}
                  number={step.number}
                  emoji={step.emoji}
                  title={step.title}
                  description={step.description}
                  isVisible={isVisible}
                  index={index}
                />
              ))}
            </div>
          </div>

        </motion.div>
      </Container>
    </section>
  );
};
