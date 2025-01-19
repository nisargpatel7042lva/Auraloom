import React from 'react';
import { motion } from 'framer-motion';

export default function MusicLoader() {
  return (
    <motion.div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-primary"
          animate={{
            height: ['15px', '45px', '15px'],
            backgroundColor: ['#FF4081', '#651FFF', '#FF4081'],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: bar * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
}