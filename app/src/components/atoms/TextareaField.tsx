import React from "react";
import { FormControl, Textarea } from "@chakra-ui/react";

interface TextareaFieldProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({ id, placeholder, value, onChange }) => (
  <FormControl id={id} mb={4}>
    <Textarea
      placeholder={placeholder}
      rows={4}
      bg="blue.800"
      borderColor="blue.500"
      color="white"
      _placeholder={{ color: "blue.300" }}
      value={value}
      onChange={onChange}
    />
  </FormControl>
);
