import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { SectionAboutThis } from "../organisms/SectionAboutThis";
import { SectionHero } from "../organisms/SectionHero";
import { SectionAbout } from "../organisms/SectionAbout";
import { SectionWorks } from "../organisms/SectionWorks";
import { SectionSkillSet } from "../organisms/SectionSkillSet";
import { SectionContact } from "../organisms/SectionContact";

export const TemplatePortfolioPage: React.FC = () => {
  const aboutThisRef = useRef<HTMLElement>(null);

  return (
    <Box>
      <SectionHero scrollToAbout={() => aboutThisRef.current?.scrollIntoView({ behavior: "smooth" })} />
      <SectionAboutThis aboutRef={aboutThisRef} />
      <SectionAbout />
      <SectionWorks />
      <SectionSkillSet />
      <SectionContact />
    </Box>
  );
};
