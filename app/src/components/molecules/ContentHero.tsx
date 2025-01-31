import React from "react";
import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LogoAnimated } from "../atoms/LogoAnimated";
import { TextSubtitle } from "../atoms/TextSubtitle";
import { ButtonScroll } from "../atoms/ButtonScroll";

interface HeroContentProps {
  scrollToAbout: () => void;
}

export const ContentHero: React.FC<HeroContentProps> = ({ scrollToAbout }) => (
  <VStack zIndex={10} textAlign="center" spacing={{ base: 6, md: 8 }}>
    <LogoAnimated />
    <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.5 }}>
      <TextSubtitle />
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 3 }}>
      <ButtonScroll onClick={scrollToAbout} />
    </motion.div>
  </VStack>
);
