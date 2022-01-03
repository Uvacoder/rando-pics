import React from "react";
import "../index.css";
import { motion } from "framer-motion";

const Card = ({ pics, setSelectedImg }) => {
  return (
    <div className="img-grid">
      {pics &&
        pics.map((pic, i) => (
          <motion.div
            className="img-wrap"
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedImg(pic.urls.regular)}
          >
            <motion.img
              src={pic.urls.small}
              alt="imgs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default Card;
