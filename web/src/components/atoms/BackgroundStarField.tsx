import React from "react";
import { Box } from "@chakra-ui/react";
import StarField from "./StarField";

export const BackgroundStarField: React.FC = () => (
  <>
    <StarField />
    <Box position="absolute" inset={0} bgGradient="linear(to-b, blue.900, blue.800, purple.900)" opacity={0.7} />
  </>
);
