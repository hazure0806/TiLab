import React from "react";
import { Box, Flex, Heading, Text, Container, Image } from "@chakra-ui/react";

const Works: React.FC = () => (
  <Box
    as="section"
    id="works"
    py={20}
    bgGradient="linear(to-br, blue.900, purple.900)"
  >
    <Container maxW="container.lg">
      <Heading as="h2" size="2xl" mb={10} textAlign="center" color="white">
        Works
      </Heading>
      <Text textAlign="center" color="blue.200" mb={10}>
        続によりをかけて制作した、要すべき成果物たちをご紹介します。
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justifyContent="space-between"
      >
        {[
          "Project 1",
          "Project 2",
          "Project 3",
          "Project 4",
          "Project 5",
          "Project 6",
        ].map((project) => (
          <Box
            key={project}
            bg="whiteAlpha.100"
            rounded="lg"
            overflow="hidden"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: "translateY(-10px)", shadow: "2xl" }}
            mb={8}
            w={{ base: "full", md: "48%" }}
          >
            <Image
              src="/api/placeholder/400/300"
              alt={project}
              objectFit="cover"
              w="full"
              h="200px"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2} color="blue.300">
                {project}
              </Heading>
              <Text color="blue.100">
                Brief description of the project goes here.
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  </Box>
);

export default Works;
