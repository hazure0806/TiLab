import React from "react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface ButtonScrollProps {
  onClick: () => void;
}

export const ButtonScroll: React.FC<ButtonScrollProps> = ({ onClick }) => (
  <Button onClick={onClick} colorScheme="blue" rounded="full" size={{ base: "md", md: "lg" }}>
    <ChevronDownIcon boxSize={{ base: 6, md: 8 }} />
  </Button>
);
