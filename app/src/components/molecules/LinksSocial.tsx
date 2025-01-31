import React from "react";
import { Stack } from "@chakra-ui/react";
import { FaGithub, FaXTwitter } from "react-icons/fa6"; // X (Twitter) のアイコン
import { SiQiita } from "react-icons/si"; // Qiita のアイコン
import { ButtonSocial } from "../atoms/ButtonSocial";

export const LinksSocial: React.FC = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    spacing={{ base: 4, md: 6 }}
    justify={{ base: "center", md: "flex-start" }}
    align="center"
  >
    {/* GitHub */}
    <ButtonSocial href="https://github.com/hazure0806" icon={FaGithub} label="GitHub" />
    
    {/* X (旧 Twitter) */}
    <ButtonSocial href="https://x.com/hazure_engineer?s=21&t=bBwEVdYUqVfMv7L_kDlc5A" icon={FaXTwitter}/>
    
    {/* Qiita */}
    <ButtonSocial href="https://qiita.com/hazure_engineer" icon={SiQiita} label="Qiita" />
  </Stack>
);
