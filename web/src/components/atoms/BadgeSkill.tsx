import React from "react";
import { Badge } from "@chakra-ui/react";

interface BadgeSkillProps {
  level: number;
  color: string;
}

export const BadgeSkill: React.FC<BadgeSkillProps> = ({ level, color }) => (
  <Badge colorScheme="blue" variant="solid" bg={color}>
    {level}%
  </Badge>
);
