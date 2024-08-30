import React from "react";
import { Box, VStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MotionBox = motion(Box);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => (
  <MotionBox
    position="fixed"
    top={0}
    right={0} // 右側にメニューを配置
    bottom={0}
    width="250px"
    bg="rgba(30, 64, 175, 0.95)"
    zIndex="9999"
    initial={{ x: "100%" }} // 初期位置を画面の外（右側）に設定
    animate={{ x: isOpen ? 0 : "100%" }} // 右からスライドイン・スライドアウト
    transition={{ duration: 0.3 }}
  >
    <VStack spacing={8} align="center" justify="center" h="full" mt={12}>
      {["Home", "About", "Works", "Skills", "Contact"].map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase()}`}
          fontSize="2xl"
          color="white"
          _hover={{ color: "blue.300" }}
          transition="color 0.3s ease"
          onClick={() => setIsOpen(false)} // メニューを閉じる
        >
          {item}
        </Link>
      ))}
    </VStack>
  </MotionBox>
);

export default MobileMenu;
