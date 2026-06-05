'use client';

import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from '@/components/template/Header';
import { MobileMenu } from '@/components/template/MobileMenu';
import { TemplatePortfolioPage } from '@/components/template/TemplatePortfolioPage';
import { initGA, logPageView } from '@/analytics';

export function PortfolioClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    initGA();
    logPageView('/');
  }, []);

  return (
    <Box bg="black" color="white">
      <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <TemplatePortfolioPage />
    </Box>
  );
}
