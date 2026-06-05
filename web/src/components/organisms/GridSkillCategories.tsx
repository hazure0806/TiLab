import React from "react";
import { Grid } from "@chakra-ui/react";
import { CardSkillCategory } from "../molecules/CardSkillCategory";

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "ReactNative", level: 60 },
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", level: 80 },
      { name: "Node.js", level: 65 },
      { name: "PHP", level: 55 },
    ]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Firebase", level: 45 },
    ]
  },
  {
    category: "Database & Tools",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "NoSQL", level: 55 },
      { name: "Git", level: 75 },
    ]
  }
];

const getLevelColor = (level: number) => {
  if (level >= 70) return "blue.400";
  if (level >= 50) return "blue.300";
  return "blue.200";
};

export const GridSkillCategories: React.FC = () => (
  <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} w="full">
    {SKILL_CATEGORIES.map((category) => (
      <CardSkillCategory key={category.category} {...category} getLevelColor={getLevelColor} />
    ))}
  </Grid>
);
