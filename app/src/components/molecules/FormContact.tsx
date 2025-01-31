import React, { useState } from "react";
import { Box, Text, Fade, Icon } from "@chakra-ui/react";
import { InputField } from "../atoms/InputField";
import { TextareaField } from "../atoms/TextareaField";
import { ButtonSubmit } from "../atoms/ButtonSubmit";
import { CheckCircleIcon } from "@chakra-ui/icons";

export const FormContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // 送信中の状態にする

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
        setIsSuccess(true); // 成功エフェクトを表示
        setTimeout(() => setIsSuccess(false), 5000); // 5秒後にメッセージを消す
        setFormData({ name: "", email: "", comment: "" }); // フォームの内容をクリア
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false); // 送信中の状態を解除
    }
  };

  return (
    <Box as="form" maxW="lg" mx="auto" onSubmit={handleSubmit}>
      <InputField id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <InputField id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <TextareaField id="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} />
      
      {/* 送信ボタン（送信中は「送信中...」に変化） */}
      <ButtonSubmit onClick={handleSubmit} isLoading={isSubmitting} label={isSubmitting ? "送信中..." : "SEND"} />

      {/* 送信成功時のメッセージ（フェードイン） */}
      <Fade in={isSuccess}>
        <Box mt={4} display="flex" alignItems="center" justifyContent="center">
          <Icon as={CheckCircleIcon} w={6} h={6} color="green.400" mr={2} />
          <Text color="green.400" fontSize="lg">
            メッセージが送信されました！
          </Text>
        </Box>
      </Fade>
    </Box>
  );
};
