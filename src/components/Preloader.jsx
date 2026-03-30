import React from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ isLoading }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="preloader"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["20%", "50%", "20%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity
        }}
        style={{
          width: 80,
          height: 80,
          background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)'
        }}
      />
      <motion.h3 
        className="mt-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ 
          letterSpacing: '3px', 
          fontSize: '1.2rem',
          fontFamily: "'Space Grotesk', sans-serif"
        }}
      >
        PORTFOLIO
      </motion.h3>
    </motion.div>
  );
};

export default Preloader;
