import React from "react";
import { Box, Grid, Heading, Text, Container, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";

const WEB_APP_IMAGE = require("../assets/web-app.png");
const HOMEPAGE_IMAGE = require("../assets/homepage.png");
const NATIVE_APP_IMAGE = require("../assets/native-app.png");
const BLOG_IMAGE = require("../assets/blog.png");
const AWS_IMAGE = require("../assets/aws.png");
const AI_TRAINING_IMAGE = require("../assets/ai-training.png");

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
        私が制作に携わったプロジェクトの一部をご紹介します。
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
        {[
          {
            title: "Webアプリケーション開発",
            description: "ユーザーが簡単に情報を収集し共有できるWebアプリを開発しました。TypeScriptとReactを用いてモダンなUIを実現。",
            imageUrl: WEB_APP_IMAGE,
          },
          {
            title: "ホームページ作成",
            description: "企業のブランドに合わせたデザインで、WordPressを活用した動的なホームページを制作。",
            imageUrl: HOMEPAGE_IMAGE,
          },
          {
            title: "ネイティブアプリケーションの開発",
            description: "React NativeでiOSおよびAndroid向けに開発したアプリです。効率的で直感的なUXを提供。",
            imageUrl: NATIVE_APP_IMAGE,
          },
          {
            title: "ブログ運営",
            description: "自身の技術や栄養に関する知識を共有する『Tech & Nutrition Lab』を運営し、広範なトピックに関する情報を発信。",
            imageUrl: BLOG_IMAGE,
            link: "https://t-n-lab.com/",
          },
          {
            title: "AWSインフラ構築",
            description: "AWSを使用して信頼性の高いインフラ環境を構築し、セキュアなデプロイメントを実現。",
            imageUrl: AWS_IMAGE,
          },
          {
            title: "AI人材育成研修プログラムへの参画",
            description: "次世代のAIリーダーを育成するプログラムで講師として参画。実践的なスキルを重視した内容を提供。",
            imageUrl: AI_TRAINING_IMAGE,
          },
        ].map((project) => (
          <LinkBox
            key={project.title}
            as="article"
            bg="whiteAlpha.100"
            rounded="lg"
            overflow="hidden"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{ transform: "translateY(-10px)", shadow: "2xl" }}
            mb={8}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              objectFit="cover"
              w="full"
              h="200px"
            />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2} color="blue.300">
                {project.link ? (
                  <LinkOverlay href={project.link} isExternal>
                    {project.title}
                  </LinkOverlay>
                ) : (
                  project.title
                )}
              </Heading>
              <Text color="blue.100">{project.description}</Text>
            </Box>
          </LinkBox>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Works;
