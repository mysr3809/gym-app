import React, { useState, useEffect } from "react";
import "./Header.css";
import gif from "../../assets/gif.gif";
import { motion } from "framer-motion";

const Header = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [leftDIvX, setLeftDivX] = useState(100);
  const [rightDIvX, setRightDivX] = useState(-100);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY);
      if (window.scrollY < 100) {
        setLeftDivX(100 - scrollValue);
        setRightDivX(-100 + scrollValue);
      }
    });
  }, [scrollValue]);

  const text = "If you can dream it";
  const text2 = "you can do it.";
  const splitText = text.toUpperCase().split("");
  const splitText2 = text2.toUpperCase().split("");
  return (
    <div className="header">
      <div className="header-content">
        <motion.div
          animate={{ x: leftDIvX }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className="left-text"
        >
          <span className="header-text">NO</span>
          <span className="header-text">PAIN</span>
          <img className="gif" src={gif} alt="" />
        </motion.div>
        <motion.div
          animate={{ x: rightDIvX }}
          transition={{
            ease: "linear",
            duration: 1,
          }}
          className="right-text"
        >
          <span className="header-text">NO</span>
          <span className="header-text">GAIN</span>
          <img className="gif" src={gif} alt="" />
        </motion.div>
      </div>
      <div className="animated-text">
        {splitText.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className="animated-text2">
        {splitText2.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Header;
