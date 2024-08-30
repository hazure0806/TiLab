import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";

// カスタムテーマを拡張する
const theme = extendTheme({
  colors: {
    blue: {
      900: "#1A365D",
      800: "#153E75",
      700: "#2A69AC",
    },
  },
});

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
