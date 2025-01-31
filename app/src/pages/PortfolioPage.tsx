import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/template/Header";
import { MobileMenu } from "../components/template/MobileMenu";
import { TemplatePortfolioPage } from "../components/template/TemplatePortfolioPage";

export const PortfolioPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Box bg="black" color="white">
      <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <TemplatePortfolioPage />
    </Box>
  );
};

