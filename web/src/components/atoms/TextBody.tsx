import React from "react";
import { Text } from "@chakra-ui/react";

interface TextBodyProps {
  content: string;
}

export const TextBody: React.FC<TextBodyProps> = ({ content }) => (
  <Text color="blue.50" fontSize={{ base: "md", md: "lg" }} lineHeight="tall" textAlign={{ base: "center", md: "left" }}>
    {content}
  </Text>
);
