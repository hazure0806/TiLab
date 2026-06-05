import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface HeadingCustomProps extends HeadingProps {
  text: string;
}

export const HeadingCustom: React.FC<HeadingCustomProps> = ({ text, ...props }) => (
  <Heading {...props}>{text}</Heading>
);
