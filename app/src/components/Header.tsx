import React from "react";
import { Box, Flex, Link, IconButton, Container } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => (
  <Box
    as="header"
    position="fixed"
    top={0}
    left={0}
    right={0}
    bg="rgba(30, 64, 175, 0.3)"
    backdropBlur="md"
    zIndex="10000" // メニューが確実に上に来るようにz-indexを設定
    transition="background-color 0.3s ease"
  >
    <Container maxW="container.lg" py={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Link href="#" fontSize="2xl" fontWeight="bold" color="white">
          TI Lab
        </Link>
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          {["Home", "About", "Works", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              px={4}
              color="white"
              _hover={{ color: "blue.300" }}
              transition="color 0.3s ease"
            >
              {item}
            </Link>
          ))}
        </Flex>
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={() => setIsOpen(!isOpen)}
          color="white"
          variant="ghost"
        />
      </Flex>
    </Container>
  </Box>
);

export default Header;