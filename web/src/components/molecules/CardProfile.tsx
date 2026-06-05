import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ImageProfile } from "../atoms/ImageProfile";
import { TextBody } from "../atoms/TextBody";

export const CardProfile: React.FC = () => (
  <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" gap={{ base: 8, md: 12 }} w="full">
    <ImageProfile />
    <Box flex="1" maxW={{ md: "600px" }}>
      <TextBody
        content="愛知県出身のエンジニア。前職は病院で管理栄養士として勤務していましたが、
        幅広く情報を発信できるエンジニアになるために転職を決意しました。SESで
        Iotを活用したシステム開発に携わり、AWSを使用したサーバーレスアーキテクチャの構築などを主な業務としておりました。
        現在は食品関係の自社開発企業でアプリエンジニアとして勤務しています。趣味は謎解きとボードゲームです。"
      />
    </Box>
  </Flex>
);
