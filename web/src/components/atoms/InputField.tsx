import React from "react";
import { FormControl, Input } from "@chakra-ui/react";

interface InputFieldProps {
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ id, type = "text", placeholder, value, onChange }) => (
  <FormControl id={id} mb={4}>
    <Input
      type={type}
      placeholder={placeholder}
      bg="blue.800"
      borderColor="blue.500"
      color="white"
      _placeholder={{ color: "blue.300" }}
      value={value}
      onChange={onChange}
    />
  </FormControl>
);
