import { useEffect } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";

import "../styles/Home.css";
import ClickableBigCard from "../components/BigCard";
import { useNavigate } from "react-router";

const Home = ({ setCurrentPage }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#403D39";
    setCurrentPage("home-link");
  }, []);

  let navigate = useNavigate();

  const height = window.innerHeight;

  const title = "Hubert Yu";
  const titleChars = title.split("");

  const bannerVariant = {
    visible: {
      y: 0,
      transition: { duration: 1.5, ease: [0.01, 0.1, 0.2, 0.999] },
    },
    hidden: { y: height },
  };

  const titleContainerVariant = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.01 * i },
    }),
  };

  const characterVariant = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: easeOut,
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      x: 10,
    },
  };

  const subTitleVariant = {
    visible: { opacity: 1, y: 0, transition: { delay: 1.5 } },
    hidden: { opacity: 0, y: 20 },
  };

  const handleClick = (page) => {
    navigate(`/${page}`);
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
      <div className="page-container">
        <div className="header-container">
          <div className="header">
            <motion.div
              className="title"
              variants={titleContainerVariant}
              initial="hidden"
              animate="visible"
            >
              {titleChars.map((char, index) => (
                <motion.span
                  variants={characterVariant}
                  key={index}
                  style={{ marginLeft: "3px" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="sub-title"
              initial="hidden"
              animate="visible"
              variants={subTitleVariant}
            >
              Aspiring Web Developer.
            </motion.div>
          </div>
        </div>
        <div className="bio">
          I am a computer science and engineering student at the University of
          California Merced. I am passionate about web development and creating
          clean and engaging web apps.
        </div>
        <div className="card-container">
          <ClickableBigCard title={"Projects"} to={"projects"} />
          <div className="small-card-container">
            <motion.div
              className="about-card"
              onClick={() => handleClick("experience")}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <p className="cardTitle">Experience</p>
            </motion.div>
            <motion.div
              className="contact-card"
              onClick={() => handleClick("contact")}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <p className="cardTitle">Contact</p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Home;
