import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Container,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About: React.FC = () => (
  <Box
    as="section"
    id="about"
    minHeight="100vh" // 画面の高さを100vhに設定
    py={20}
    bgGradient="linear(to-br, blue.800, purple.800)"
    display="flex" // Flexboxを使用
    justifyContent="center" // 横方向の中央揃え
    alignItems="center" // 縦方向の中央揃え
  >
    <Container maxW="container.lg" textAlign="center">
      <Heading as="h2" size="2xl" mb={10} color="white">
        About me
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} alignItems="center">
        <Box mb={{ base: 10, md: 0 }} w={{ md: "1/3" }}>
          <Image
            src="/api/placeholder/200/200"
            alt="Profile"
            rounded="full"
            mx="auto"
            borderWidth={4}
            borderColor="blue.300"
          />
        </Box>
        <Box w={{ md: "2/3" }}>
          <Text color="blue.100" fontSize="lg" lineHeight="relaxed">
            石川県出身のエンジニア。高専で機械工学、技科大で材料工学を学んだのち、メーカーで
            樹脂フィラー材料開発・生産に従事。その後ITの魅力にひかれ、31才でIT業界へ転職。運用・
            テクニカルサポートからキャリアをスタートし、AWSクラウドサーバー構築、Webページ作
            成、Python/djangoのツール開発など、インフラからフロントサイドまで幅広く業務を経験し
            てきました。
          </Text>
          <VStack mt={6} justifyContent="center" spacing={4}>
            <Link
              href="#"
              isExternal
              color="white"
              _hover={{ color: "blue.300" }}
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="#"
              isExternal
              color="white"
              _hover={{ color: "blue.300" }}
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="#"
              isExternal
              color="white"
              _hover={{ color: "blue.300" }}
            >
              <FaEnvelope size={24} />
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  </Box>
);

export default About;
