import React from "react";
import { Box, Flex, Link, IconButton, Container, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logoSvg from "../../assets/ti-lab-space-logo.svg";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="rgba(30, 64, 175, 0.3)"
      backdropFilter="blur(8px)"
      zIndex="10000"
      transition="background-color 0.3s ease"
    >
      <Container maxW="container.lg" py={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("home");
            }}
            _hover={{ opacity: 0.8 }}
            transition="opacity 0.3s ease"
          >
            <Image src={logoSvg} alt="TI Lab Logo" width="100px" height="auto" />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} alignItems="center">
            {["Home", "About", "Works", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(item.toLowerCase());
                }}
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
};
