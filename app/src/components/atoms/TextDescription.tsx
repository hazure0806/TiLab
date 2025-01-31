import React from "react";
import { Text } from "@chakra-ui/react";

interface TextDescriptionProps {
  children: React.ReactNode;
  fontSize?: { base: string; md?: string; lg?: string };
}

export const TextDescription: React.FC<TextDescriptionProps> = ({ children, fontSize }) => (
  <Text textAlign="center" color="blue.200" mb={10} fontSize={fontSize || { base: "md", md: "lg" }}>
    {children}
  </Text>
);
