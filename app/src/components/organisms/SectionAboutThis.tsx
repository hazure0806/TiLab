import React from "react";
import { Container, Box } from "@chakra-ui/react";
import { HeadingCustom } from "../atoms/HeadingCustom";
import { TextDescription } from "../atoms/TextDescription";
import { BoxCentered } from "../molecules/BoxCentered";

interface SectionAboutProps {
  aboutRef: React.RefObject<HTMLElement>;
}

export const SectionAboutThis: React.FC<SectionAboutProps> = ({ aboutRef }) => (
  <BoxCentered
    ref={aboutRef}
    py={20}
    bgGradient="linear(to-br, blue.900, purple.900)"
    minHeight="100vh"
  >
    <Container maxW="container.lg">
      <HeadingCustom text="About This Page" size="2xl" mb={10} color="white" textAlign="center" />
      <Box w={{ md: "2/3" }} mx="auto" mt={10}>
        <TextDescription>
          エンジニアT.Iのポートフォリオサイトです。<br />
          経験したプロジェクト、身につけたスキルをまとめています。私のことをもっと深く知ってほしいと思い作りました。<br />
          どうぞ星でも眺めながら、ゆっくりとサイト内を散策してください。
        </TextDescription>
      </Box>
    </Container>
  </BoxCentered>
);
