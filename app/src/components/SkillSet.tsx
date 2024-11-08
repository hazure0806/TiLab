import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Grid,
  VStack,
  Flex,
  Badge,
  Progress,
  Circle,
  HStack,
} from "@chakra-ui/react";

const SkillSet: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "ReactNative", level: 60 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", level: 80 },
        { name: "Node.js", level: 65 },
        { name: "PHP", level: 55 },
      ]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 70 },
        { name: "Docker", level: 60 },
        { name: "Iot", level: 45 },
      ]
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL", level: 70 },
        { name: "NoSQL", level: 55 },
        { name: "Git", level: 75 },
      ]
    }
  ];

  // スキルレベルに応じた色を返す関数
  const getLevelColor = (level: number) => {
    if (level >= 70) return "blue.400";
    if (level >= 50) return "blue.300";
    return "blue.200";
  };

  return (
    <Box
      as="section"
      id="skills"
      py={20}
      bgGradient="linear(to-b, blue.900, purple.900)"
      minHeight="100vh"
      position="relative"
      overflow="hidden"
    >
      {/* 装飾的な背景要素 */}
      {[...Array(5)].map((_, i) => (
        <Circle
          key={i}
          position="absolute"
          bg="whiteAlpha.100"
          size={["100px", "150px", "200px"][i % 3]}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          transform="translate(-50%, -50%)"
          zIndex={0}
          opacity={0.1}
        />
      ))}

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={12}>
          <Heading as="h2" size="2xl" textAlign="center" color="white">
            My skill set
          </Heading>

          <Text textAlign="center" color="blue.200" px={4}>
            経験のすき具にこだわったスキルをグラフィカルに表現しました。広く浅くではありますがフロントからバックエンドまで幅広くスキルアップに取り組んできました。オールラウンドに対応でき
            る点が強みですね。全体的に理解が浅く、専門的知識を有識していますが、今後はバックエンド系の開発（クラウド含む）の経験に積み重ねる比重を増やし、少しずつ専門性を高めていきたいと
            考えています。
          </Text>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)"
            }}
            gap={8}
            w="full"
          >
            {skillCategories.map((category) => (
              <Box
                key={category.category}
                bg="whiteAlpha.100"
                p={6}
                borderRadius="xl"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{
                  transform: "translateY(-4px)",
                  transition: "all 0.2s",
                }}
              >
                <VStack align="stretch" spacing={4}>
                  <Heading size="md" color="white">
                    {category.category}
                  </Heading>
                  {category.skills.map((skill) => (
                    <Box key={skill.name}>
                      <Flex justify="space-between" mb={2}>
                        <HStack spacing={2}>
                          <Circle size="8px" bg={getLevelColor(skill.level)} />
                          <Text color="blue.100">{skill.name}</Text>
                        </HStack>
                        <Badge
                          colorScheme="blue"
                          variant="solid"
                          bg={getLevelColor(skill.level)}
                        >
                          {skill.level}%
                        </Badge>
                      </Flex>
                      <Progress
                        value={skill.level}
                        size="sm"
                        colorScheme="blue"
                        bg="whiteAlpha.200"
                        borderRadius="full"
                      />
                    </Box>
                  ))}
                </VStack>
              </Box>
            ))}
          </Grid>

          <Text textAlign="center" color="blue.200" px={4}>
            スキルレベルの目安：
            <br />
            <strong>1（～50%）：</strong> 基礎的な知識やツールの使用経験
            <br />
            <strong>2（51%～70%）：</strong> 実務で数ヶ月使用しているスキル
            <br />
            <strong>3（71%～100%）：</strong> 実務で自由に使用できるレベル
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default SkillSet;