import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./components/pages/home.jsx";
import Layout from "./components/layout.jsx";
import Detail from "./components/pages/detail.jsx";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":slug" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
