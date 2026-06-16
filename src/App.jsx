import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingActions from "./components/common/FloatingActions";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-black">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </motion.main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
