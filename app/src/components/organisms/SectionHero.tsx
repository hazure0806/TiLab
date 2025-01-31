import React from "react";
import { Box } from "@chakra-ui/react";
import { ContentHero } from "../molecules/ContentHero";
import { BackgroundStarField } from "../atoms/BackgroundStarField";

interface HeroSectionProps {
  scrollToAbout: () => void;
}

export const SectionHero: React.FC<HeroSectionProps> = ({ scrollToAbout }) => (
  <Box
    as="section"
    id="home"
    h="100vh"
    position="relative"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    overflow="hidden"
    px={{ base: 4, md: 0 }}
  >
    <BackgroundStarField />
    <ContentHero scrollToAbout={scrollToAbout} />
  </Box>
);
