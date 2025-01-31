import React from "react";
import { Box, Container, VStack } from "@chakra-ui/react";
import { HeadingCustom } from "../atoms/HeadingCustom";
import { TextDescription } from "../atoms/TextDescription";
import { FormContact } from "../molecules/FormContact";

export const SectionContact: React.FC = () => (
  <Box as="section" id="contact" py={20} bgGradient="linear(to-b, blue.800, purple.800)">
    <Container maxW="container.lg">
      <VStack spacing={12}>
        <HeadingCustom text="Contact me" />
        <TextDescription>
          最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
          もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
        </TextDescription>
      </VStack>
      <FormContact />
    </Container>
  </Box>
);
