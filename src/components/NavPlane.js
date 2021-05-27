import React, { Component, useEffect } from "react";
import { useCycle } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const PlaneVariants = {
  animationOne: {
    x: 0,
    y: 0,
    transition: { duration: 1.0},
  },
  animationTwo: {
    x: -210,
    y: -230,
    transition: { duration: 1.0},
  },
  animationThree: {
    x: -150,
    y: -170,
    transition: { duration: 1.0},
  },
  animationFour: {
    x: -270,
    y: -250,
    transition: { duration: 1.0},
  },
  animationFive: {
    x: -15,
    y: -670,
    transition: { duration: 1.0},
  },
};
export default function NavPlane() {
  const [animation, cycleAnimation] = useCycle(
    "animationOne",
    "animationTwo",
    "animationThree",
    "animationFour",
    "animationFive"
  );
  useEffect(() => {
    setTimeout(cycleAnimation, 1000);
    setTimeout(cycleAnimation, 2000);
    setTimeout(cycleAnimation, 3000);
    setTimeout(cycleAnimation, 4000);
  }, []);
  return (
    <motion.div
      className="text-2xl text-gray-600"
      variants={PlaneVariants}
      animate={animation}
    >
      <FaPaperPlane style={{ transform: [{ rotateY: "360deg" }] }} />
    </motion.div>
  );
}
