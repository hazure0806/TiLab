import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { PortfolioPage } from "./pages/PortfolioPage";
import { initGA, logPageView } from "./libs/analytics";

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

// ページ遷移時にGoogle Analyticsに記録するコンポーネント
const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null; // 画面には何も表示しない
};

const App: React.FC = () => {
  useEffect(() => {
    initGA(); // 初回のみGoogle Analyticsを初期化
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
