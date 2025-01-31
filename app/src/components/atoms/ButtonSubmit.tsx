import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonSubmitProps {
  onClick: (e: React.FormEvent) => void;
  isLoading?: boolean;
  label?: string;
}

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ onClick, isLoading = false, label = "SEND" }) => (
  <Button
    type="submit"
    colorScheme="blue"
    w="full"
    onClick={onClick}
    isLoading={isLoading}
    loadingText="送信中..."
  >
    {label}
  </Button>
);
