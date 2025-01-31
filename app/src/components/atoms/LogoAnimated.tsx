import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

export const LogoAnimated: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box width={isMobile ? "300px" : "500px"} height={isMobile ? "120px" : "200px"}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 200"
        width="100%"
        height="100%"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#4299E1", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#3182CE", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* メインの円 */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="4"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
          }}
        />

        {/* アニメーションするライン */}
        <motion.line
          x1="20"
          y1="100"
          x2="180"
          y2="100"
          stroke="#4299E1"
          strokeWidth="2"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 0.5 } }
          }}
        />
        <motion.line
          x1="100"
          y1="20"
          x2="100"
          y2="180"
          stroke="#4299E1"
          strokeWidth="2"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1, delay: 0.7 } }
          }}
        />

        {/* アニメーションするポリゴン */}
        <motion.polygon
          points="100,60 130,110 100,140 70,110"
          fill="none"
          stroke="#4299E1"
          strokeWidth="3"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.2 } }
          }}
        />

        {/* 中央の小さい円 */}
        <motion.circle
          cx="100"
          cy="100"
          r="15"
          fill="#3182CE"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.5 } }
          }}
        />

        {/* 星のアニメーション */}
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

        {/* テキスト（タイトル） */}
        <motion.text
          x="240"
          y="120"
          fontFamily="'Montserrat', sans-serif"
          fontSize={isMobile ? "36px" : "72px"}
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
