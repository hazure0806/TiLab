import React from "react";
import { Box, Container, VStack } from "@chakra-ui/react";
import { HeadingCustom } from "../atoms/HeadingCustom";
import { TextDescription } from "../atoms/TextDescription";
import { GridProjects } from "../molecules/GridProjects";

export const SectionWorks: React.FC = () => (
  <Box as="section" id="works" py={20} bgGradient="linear(to-br, blue.900, purple.900)">
    <Container maxW="container.lg">
      <VStack spacing={4}>
        <HeadingCustom text="Works" />
        <TextDescription>
          私が制作に携わったプロジェクトの一部をご紹介します。
        </TextDescription>
        <GridProjects />
      </VStack>
    </Container>
  </Box>
);
