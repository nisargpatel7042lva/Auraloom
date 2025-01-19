import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-10 h-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-lg"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-2 bg-surface rounded-lg"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
        AuraLoom
      </span>
    </motion.div>
  );
}