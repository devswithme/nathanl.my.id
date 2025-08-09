import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import {AnimatePresence} from 'motion/react'
import Home from "./components/pages/home.jsx";
import Cloud from "./components/pages/cloud.jsx";
import AnCake from "./components/pages/ancake.jsx";
import Chakra from "./components/pages/chakra.jsx";
import Fysite from "./components/pages/fysite.jsx";
import Layout from "./components/layout.jsx";

function App() {
    const location = useLocation();
  return (
      <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='queenbee' element={<Cloud />} />
                <Route path='ancake' element={<AnCake />} />
                <Route path='chakra' element={<Chakra />} />
                <Route path='fysite' element={<Fysite />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
      </AnimatePresence>
  )
}

export default App
