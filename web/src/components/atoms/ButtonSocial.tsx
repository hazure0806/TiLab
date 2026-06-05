import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ButtonSocialProps {
  href: string;
  icon: IconType;
  label?: string;
}

export const ButtonSocial: React.FC<ButtonSocialProps> = ({ href, icon: Icon, label }) => (
  <Button
    as="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    leftIcon={<Icon size={20} />}
    colorScheme="blue"
    variant="outline"
    size="md"
  >
    {label}
  </Button>
);
