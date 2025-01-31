import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface TextCustomProps extends TextProps {
  content: string;
}

export const TextCustom: React.FC<TextCustomProps> = ({ content, ...props }) => (
  <Text {...props}>{content}</Text>
);
