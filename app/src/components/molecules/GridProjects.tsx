import React from "react";
import { Grid } from "@chakra-ui/react";
import { CardProject } from "./CardProject";

const PROJECTS = [
  {
    title: "Webアプリケーション開発",
    description: "ユーザーが簡単に情報を収集し共有できるWebアプリを開発しました。TypeScriptとReactを用いてモダンなUIを実現。",
    imageUrl: require("../../assets/web-app.png"),
  },
  {
    title: "ホームページ作成",
    description: "企業のブランドに合わせたデザインで、WordPressを活用した動的なホームページを制作。",
    imageUrl: require("../../assets/homepage.png"),
  },
  {
    title: "ネイティブアプリケーションの開発",
    description: "React NativeでiOSおよびAndroid向けに開発したアプリです。効率的で直感的なUXを提供。",
    imageUrl: require("../../assets/native-app.png"),
  },
  {
    title: "ブログ運営",
    description: "自身の技術や栄養に関する知識を共有する『Tech & Nutrition Lab』を運営し、広範なトピックに関する情報を発信。",
    imageUrl: require("../../assets/blog.png"),
    link: "https://t-n-lab.com/",
  },
  {
    title: "AWSインフラ構築",
    description: "AWSを使用して信頼性の高いインフラ環境を構築し、セキュアなデプロイメントを実現。",
    imageUrl: require("../../assets/aws.png"),
  },
  {
    title: "AI人材育成研修プログラムへの参画",
    description: "次世代のAIリーダーを育成するプログラムで講師として参画。実践的なスキルを重視した内容を提供。",
    imageUrl: require("../../assets/ai-training.png"),
  },
];

export const GridProjects: React.FC = () => (
  <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
    {PROJECTS.map((project) => (
      <CardProject key={project.title} {...project} />
    ))}
  </Grid>
);
