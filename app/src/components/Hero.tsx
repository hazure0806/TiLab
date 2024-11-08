import React from "react";
import { Box, VStack, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import StarField from "./StarField";

interface HeroProps {
  scrollToAbout: () => void;
}

const AnimatedLogo: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)"); // 768px以下をモバイルとして判定

  return (
    <Box width={isMobile ? "300px" : "500px"} height={isMobile ? "120px" : "200px"}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 200"
        initial="hidden"
        animate="visible"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#4299E1", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#3182CE", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        <motion.circle
          cx="100" cy="100" r="80"
          fill="none" stroke="url(#grad1)" strokeWidth="4"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
          }}
        />

        <motion.line
          x1="20" y1="100" x2="180" y2="100"
          stroke="#4299E1" strokeWidth="2"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } }
          }}
        />

        <motion.line
          x1="100" y1="20" x2="100" y2="180"
          stroke="#4299E1" strokeWidth="2"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 0.7 } }
          }}
        />

        <motion.polygon
          points="100,60 130,110 100,140 70,110"
          fill="none" stroke="#4299E1" strokeWidth="3"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.2 } }
          }}
        />

        <motion.circle
          cx="100" cy="100" r="15"
          fill="#3182CE"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.5 } }
          }}
        />

        {[
          { points: "30,30 32,35 37,35 33,38 35,43 30,40 25,43 27,38 23,35 28,35" },
          { points: "170,160 172,165 177,165 173,168 175,173 170,170 165,173 167,168 163,165 168,165" }
        ].map((star, index) => (
          <motion.polygon
            key={index}
            points={star.points}
            fill="#4299E1"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.7 + index * 0.2 } }
            }}
          />
        ))}

        <motion.text
          x="240" y="120"
          fontFamily="'Montserrat', sans-serif"
          fontSize={isMobile ? "36px" : "72px"}  // モバイルの場合に小さいフォントサイズを使用
          fontWeight="bold"
          fill="#FFFFFF"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 2 } }
          }}
        >
          TI Lab
        </motion.text>
      </motion.svg>
    </Box>
  );
};

const Hero: React.FC<HeroProps> = ({ scrollToAbout }) => (
  <Box
    as="section"
    id="home"
    h="100vh"
    position="relative"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    overflow="hidden"
    px={{ base: 4, md: 0 }}
  >
    <StarField />
    <Box
      position="absolute"
      inset={0}
      bgGradient="linear(to-b, blue.900, blue.800, purple.900)"
      opacity={0.7}
    />
    <VStack zIndex={10} textAlign="center" spacing={{ base: 6, md: 8 }}>
      <AnimatedLogo />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <Text fontSize={{ base: "lg", md: "xl" }} color="blue.200" fontFamily="'Roboto', sans-serif">
          Technology Innovation Laboratory
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <Button onClick={scrollToAbout} colorScheme="blue" rounded="full" size={{ base: "md", md: "lg" }}>
          <ChevronDownIcon boxSize={{ base: 6, md: 8 }} />
        </Button>
      </motion.div>
    </VStack>
  </Box>
);

export default Hero;
