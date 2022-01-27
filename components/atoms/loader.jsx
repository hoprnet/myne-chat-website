import React from 'react';
import { motion } from 'framer-motion';

export function Loader() {
  return (
    <motion.div
      animate="animate"
      className="main-loader"
      exit={{ opacity: 0 }}
      initial="initial"
    >
      <div className="loader-wrapper">
        <div className="element"></div>
      </div>
    </motion.div>
  );
}

export default Loader;
