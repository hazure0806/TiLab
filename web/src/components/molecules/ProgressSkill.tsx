import React from "react";
import { Box, Flex, HStack, Progress, Text } from "@chakra-ui/react";
import { BadgeSkill } from "../atoms/BadgeSkill";
import { CircleSkillIndicator } from "../atoms/CircleSkillIndicator";

interface ProgressSkillProps {
  name: string;
  level: number;
  color: string;
}

export const ProgressSkill: React.FC<ProgressSkillProps> = ({ name, level, color }) => (
  <Box>
    <Flex justify="space-between" mb={2}>
      <HStack spacing={2}>
        <CircleSkillIndicator color={color} />
        <Text color="blue.100">{name}</Text>
      </HStack>
      <BadgeSkill level={level} color={color} />
    </Flex>
    <Progress value={level} size="sm" colorScheme="blue" bg="whiteAlpha.200" borderRadius="full" />
  </Box>
);
