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
  Stack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfileImage = require("../assets/IMG_4759.PNG");

const About: React.FC = () => (
  <Box
    as="section"
    id="about"
    minH="100vh"
    py={16}
    bgGradient="linear(to-br, blue.800, purple.800)"
    display="flex"
    alignItems="center"
  >
    <Container maxW="container.xl" px={{ base: 6, md: 8 }}>
      <VStack spacing={12}>
        <Heading
          as="h2"
          size="2xl"
          color="white"
          textAlign="center"
          fontWeight="bold"
        >
          About me
        </Heading>
        
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={{ base: 8, md: 12 }}
          w="full"
        >
          <Box
            flexShrink={0}
            w={{ base: "200px", md: "250px" }}
            h={{ base: "200px", md: "250px" }}
            position="relative"
          >
            <Image
              src={ProfileImage}
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

          <Box flex="1" maxW={{ md: "600px" }}>
            <Text
              color="blue.50"
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="tall"
              textAlign={{ base: "center", md: "left" }}
              mb={8}
            >
              愛知県出身のエンジニア。前職は病院で管理栄養士として勤務していましたが、
              幅広く情報を発信できるエンジニアになるために転職を決意しました。SESで
              Iotを活用したシステム開発に携わり、AWSを使用したサーバーレスアーキテクチャの構築などを主な業務としておりました。
              現在は食品関係の自社開発企業でアプリエンジニアとして勤務しています。趣味は謎解きとボードゲームです。
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 4, md: 6 }}
              justify={{ base: "center", md: "flex-start" }}
              align="center"
            >
              <Link
                href="https://github.com/hazure0806"
                isExternal
                display="flex"
                alignItems="center"
                px={4}
                py={2}
                bg="whiteAlpha.200"
                rounded="md"
                color="white"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s",
                }}
              >
                <FaGithub size={20} />
                <Text ml={2}>GitHub</Text>
              </Link>
              <Link
                href="#"
                isExternal
                display="flex"
                alignItems="center"
                px={4}
                py={2}
                bg="whiteAlpha.200"
                rounded="md"
                color="white"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s",
                }}
              >
                <FaLinkedin size={20} />
                <Text ml={2}>LinkedIn</Text>
              </Link>
              <Link
                href="#"
                isExternal
                display="flex"
                alignItems="center"
                px={4}
                py={2}
                bg="whiteAlpha.200"
                rounded="md"
                color="white"
                _hover={{
                  bg: "whiteAlpha.300",
                  transform: "translateY(-2px)",
                  transition: "all 0.2s",
                }}
              >
                <FaEnvelope size={20} />
                <Text ml={2}>Email</Text>
              </Link>
            </Stack>
          </Box>
        </Flex>
      </VStack>
    </Container>
  </Box>
);

export default About;