import { useEffect } from "react";
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";

import "../styles/Home.css";

const Home = ({ setCurrentPage }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#403D39";
    setCurrentPage("home-link");
  }, []);

  const bannerVariant = {
    visible: {
      y: 0,
      transition: { duration: 2, ease: [0.01, 0.1, 0.2, 0.999] },
    },
    hidden: { y: 1000 },
  };

  return (
    <AnimatePresence>
      {/* Side Banner */}
      <motion.div
        className="banner"
        initial="hidden"
        animate="visible"
        variants={bannerVariant}
      >
        HOME HOME HOME
      </motion.div>

      {/* Page Header */}
    </AnimatePresence>
  );
};

export default Home;
