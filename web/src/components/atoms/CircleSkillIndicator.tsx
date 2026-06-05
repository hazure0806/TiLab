import React from "react";
import { Circle } from "@chakra-ui/react";

interface CircleSkillIndicatorProps {
  color: string;
}

export const CircleSkillIndicator: React.FC<CircleSkillIndicatorProps> = ({ color }) => (
  <Circle size="8px" bg={color} />
);
