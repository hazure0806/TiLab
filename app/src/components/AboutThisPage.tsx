import React from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";

interface AboutProps {
  aboutRef: React.RefObject<HTMLElement>;
}

const AboutThisPage: React.FC<AboutProps> = ({ aboutRef }) => (
  <Box
    as="section"
    ref={aboutRef}
    id="about"
    py={20}
    bgGradient="linear(to-br, blue.900, purple.900)"
    minHeight="100vh"
    display="flex" // Flexboxを使用
    justifyContent="center" // 横方向の中央揃え
    alignItems="center" // 縦方向の中央揃え
  >
    <Container maxW="container.lg">
      <Heading as="h2" size="2xl" mb={10} textAlign="center" color="white">
        About This Page
      </Heading>
      <Box w={{ md: "2/3" }} textAlign="center">
        <Text color="blue.100" fontSize="lg" lineHeight="relaxed">
          ここはエンジニアT.Iのポートフォリオサイトです。<br />
          これまでに携わったプロジェクト、身につけたスキルをまとめています。<br />
          あなたに、私のことをもっと深く知ってほしいと思い作りました。<br />
          どうぞお茶でも飲みながらごゆるりとサイト内を散策してください。
        </Text>
      </Box>
    </Container>
  </Box>
);

export default AboutThisPage;
