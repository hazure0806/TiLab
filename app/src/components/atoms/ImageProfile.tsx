import React from "react";
import { Image, Box } from "@chakra-ui/react";

const profileImage = require("../../assets/IMG_4759.PNG");

export const ImageProfile: React.FC = () => (
  <Box w={{ base: "200px", md: "250px" }} h={{ base: "200px", md: "250px" }} flexShrink={0} position="relative">
    <Image
      src={profileImage}
      alt="Profile"
      rounded="full"
      w="100%"
      h="100%"
      objectFit="cover"
      borderWidth={4}
      borderColor="blue.300"
      boxShadow="xl"
    />
  </Box>
);
