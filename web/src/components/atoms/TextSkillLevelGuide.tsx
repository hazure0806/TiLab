import React from "react";
import { Text } from "@chakra-ui/react";

export const TextSkillLevelGuide: React.FC = () => (
  <Text textAlign="center" color="blue.200" px={4}>
    スキルレベルの目安：
    <br />
    <strong>1（～50%）：</strong> 基礎的な知識やツールの使用経験
    <br />
    <strong>2（51%～70%）：</strong> 実務で数ヶ月使用しているスキル
    <br />
    <strong>3（71%～100%）：</strong> 実務で自由に使用できるレベル
  </Text>
);
