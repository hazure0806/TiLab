import React from "react";
import { Box, VStack, Container } from "@chakra-ui/react";
import { HeadingCustom } from "../atoms/HeadingCustom";
import { CardProfile } from "../molecules/CardProfile";
import { LinksSocial } from "../molecules/LinksSocial";

export const SectionAbout: React.FC = () => (
  <Box as="section" id="about" minH="100vh" py={16} bgGradient="linear(to-br, blue.800, purple.800)" display="flex" alignItems="center">
    <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
      <VStack spacing={12}>
        <HeadingCustom text="About me" />
        <CardProfile />
        <LinksSocial />
      </VStack>
    </Container>
  </Box>
);
