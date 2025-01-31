import React from "react";
import { Image } from "@chakra-ui/react";

interface ImageProjectProps {
  src: string;
  alt: string;
}

export const ImageProject: React.FC<ImageProjectProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} objectFit="cover" w="full" h="200px" />
);
