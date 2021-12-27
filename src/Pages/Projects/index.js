import React from "react";
import MyProjects from "./Main";
import { useGlobalContext } from "../../Components/state/useContext";
import { motion } from "framer-motion";

function index() {
  return <Projects></Projects>;
}

export default index;

function Projects() {
  const { pageVariants, pageTransitions } = useGlobalContext();

  return (
    <motion.div
      exit="off"
      animate="on"
      initial="off"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <MyProjects />
    </motion.div>
  );
}
