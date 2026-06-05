import React from "react";
import { Box, Heading, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { ImageProject } from "../atoms/ImageProject";

interface CardProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export const CardProject: React.FC<CardProjectProps> = ({ title, description, imageUrl, link }) => (
  <LinkBox
    as="article"
    bg="whiteAlpha.100"
    rounded="lg"
    overflow="hidden"
    transition="transform 0.3s ease, box-shadow 0.3s ease"
    _hover={{ transform: "translateY(-10px)", shadow: "2xl" }}
    mb={4}
  >
    <ImageProject src={imageUrl} alt={title} />
    <Box p={4}>
      <Heading as="h3" size="md" mb={2} color="blue.300">
        {link ? (
          <LinkOverlay href={link} isExternal>
            {title}
          </LinkOverlay>
        ) : (
          title
        )}
      </Heading>
      <Text color="blue.100">{description}</Text>
    </Box>
  </LinkBox>
);
