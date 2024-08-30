import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  FormControl,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const Contact: React.FC = () => (
  <Box
    as="section"
    id="contact"
    py={20}
    bgGradient="linear(to-b, blue.800, purple.800)"
  >
    <Container maxW="container.lg">
      <Heading as="h2" size="2xl" mb={10} textAlign="center" color="white">
        Contact me
      </Heading>
      <Text textAlign="center" color="blue.200" mb={10}>
        最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいで
        す。もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
      </Text>
      <Box as="form" maxW="lg" mx="auto">
        <FormControl id="name" mb={4}>
          <Input
            placeholder="Name"
            bg="blue.800"
            borderColor="blue.500"
            color="white"
            _placeholder={{ color: "blue.300" }}
          />
        </FormControl>
        <FormControl id="email" mb={4}>
          <Input
            type="email"
            placeholder="Email"
            bg="blue.800"
            borderColor="blue.500"
            color="white"
            _placeholder={{ color: "blue.300" }}
          />
        </FormControl>
        <FormControl id="comment" mb={4}>
          <Textarea
            placeholder="Comment"
            rows={4}
            bg="blue.800"
            borderColor="blue.500"
            color="white"
            _placeholder={{ color: "blue.300" }}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">
          SEND
        </Button>
      </Box>
    </Container>
  </Box>
);

export default Contact;
