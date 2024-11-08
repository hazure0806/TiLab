import React, { useState } from "react";
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://lgnq6lkbte.execute-api.ap-northeast-1.amazonaws.com/default/homepage_send_mail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({ name: "", email: "", comment: "" }); // フォームの内容をクリア
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
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
          最後までご覧いただきありがとうございました。このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
          もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
        </Text>
        <Box as="form" maxW="lg" mx="auto" onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <Input
              placeholder="Name"
              bg="blue.800"
              borderColor="blue.500"
              color="white"
              _placeholder={{ color: "blue.300" }}
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.comment}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" w="full">
            SEND
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
