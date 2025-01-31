import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { ProgressSkill } from "./ProgressSkill";

interface Skill {
  name: string;
  level: number;
}

interface CardSkillCategoryProps {
  category: string;
  skills: Skill[];
  getLevelColor: (level: number) => string;
}

export const CardSkillCategory: React.FC<CardSkillCategoryProps> = ({ category, skills, getLevelColor }) => (
  <Box
    bg="whiteAlpha.100"
    p={6}
    borderRadius="xl"
    backdropFilter="blur(10px)"
    border="1px solid"
    borderColor="whiteAlpha.200"
    _hover={{ transform: "translateY(-4px)", transition: "all 0.2s" }}
  >
    <VStack align="stretch" spacing={4}>
      <Heading size="md" color="white">
        {category}
      </Heading>
      {skills.map((skill) => (
        <ProgressSkill key={skill.name} name={skill.name} level={skill.level} color={getLevelColor(skill.level)} />
      ))}
    </VStack>
  </Box>
);
