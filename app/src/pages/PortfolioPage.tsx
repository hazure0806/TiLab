import React, { useState, useRef } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import AboutThisPage from "../components/AboutThisPage";
import About from "../components/About";
import Works from "../components/Works";
import SkillSet from "../components/SkillSet";
import Contact from "../components/Contact";

const PortfolioPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box bg="black" color="white">
      <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <main>
        <Hero scrollToAbout={scrollToAbout} />
        <AboutThisPage aboutRef={aboutRef} />
        <About />
        <Works />
        <SkillSet />
        <Contact />
      </main>
    </Box>
  );
};

export default PortfolioPage;
