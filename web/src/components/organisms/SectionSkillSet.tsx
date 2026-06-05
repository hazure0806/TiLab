import React from "react";
import { Box, Container, VStack } from "@chakra-ui/react";
import { HeadingCustom } from "../atoms/HeadingCustom";
import { TextDescription } from "../atoms/TextDescription";
import { GridSkillCategories } from "./GridSkillCategories";
import { TextSkillLevelGuide } from "../atoms/TextSkillLevelGuide";

export const SectionSkillSet: React.FC = () => (
  <Box as="section" id="skills" py={20} bgGradient="linear(to-b, blue.900, purple.900)" minHeight="100vh">
    <Container maxW="container.xl">
      <VStack spacing={12}>
        <HeadingCustom text="My skill set" />
        <TextDescription>
          これまでの経験をもとに、スキルを視覚的に表現しました。<br />
          今後はバックエンド系の開発（クラウド含む）の経験を積み重ね、少しずつ専門性を高めていきたいと考えています。
        </TextDescription>
        <GridSkillCategories />
        <TextSkillLevelGuide />
      </VStack>
    </Container>
  </Box>
);
