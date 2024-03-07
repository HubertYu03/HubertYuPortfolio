import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import "./styles/BigCard.css";

const ClickableBigCard = ({ title, to }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${to}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="projectCard"
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <p className="cardTitle">{title}</p>
    </motion.div>
  );
};

export default ClickableBigCard;
