import React from "react";
import { Box, VStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import StarField from "./StarField";

interface HeroProps {
  scrollToAbout: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToAbout }) => (
  <Box
    as="section"
    id="home"
    h="100vh"
    position="relative"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    overflow="hidden"
  >
    <StarField />
    <Box
      position="absolute"
      inset={0}
      bgGradient="linear(to-b, blue.900, blue.600, purple.900)"
      opacity={0.5}
    />
    <VStack zIndex={10} textAlign="center" spacing={8}>
      <Heading as="h1" size="4xl" color="white">
        TI Lab
      </Heading>
      <Text fontSize="2xl" color="blue.200">
        Technology Innovation Laboratory
      </Text>
      <Image
        src="/api/placeholder/200/100"
        alt="TI Lab Logo"
        mb={8}
        mx="auto"
      />
      <Button onClick={scrollToAbout} colorScheme="whiteAlpha" rounded="full">
        <ChevronDownIcon boxSize={6} color="white" />
      </Button>
    </VStack>
  </Box>
);

export default Hero;
