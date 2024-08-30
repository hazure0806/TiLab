import React from "react";
import { Box, Heading, Text, Container, Link } from "@chakra-ui/react";

const SkillSet: React.FC = () => (
  <Box
    as="section"
    id="skills"
    py={20}
    bgGradient="linear(to-b, blue.900, purple.900)"
    minHeight="100vh"
  >
    <Container maxW="container.lg">
      <Heading as="h2" size="2xl" mb={10} textAlign="center" color="white">
        My skill set
      </Heading>
      <Text textAlign="center" color="blue.200" mb={10}>
        経験のすき具にこだわったスキルをグラフィカルに表現しました。広く浅くではありますがフロントからバックエンドまで幅広くスキルアップに取り組んできました。オールラウンドに対応でき
        る点が強みですね。全体的に理解が浅く、専門的知識を有識していますが、今後はバックエンド系の開発（クラウド含む）の経験に積み重ねる比重を増やし、少しずつ専門性を高めていきたいと
        考えています。
      </Text>
      {/* ここにスキルチャートを追加 */}
      <Text textAlign="center" color="blue.200" mt={10}>
        チャートの見方としては「1: 軽く使用した程度」、「2:
        実務で数ヶ月ほど使用しているがそろそろ詳細が怪しい」、「3:
        実務レベルで自由に使用できる」、という感じです。その他、実務で2
        ヶ月以上使用した経験のある技術について、{" "}
        <Link
          href="#"
          color="blue.300"
          _hover={{ textDecoration: "underline" }}
        >
          こちらをご覧ください。
        </Link>
      </Text>
    </Container>
  </Box>
);

export default SkillSet;
