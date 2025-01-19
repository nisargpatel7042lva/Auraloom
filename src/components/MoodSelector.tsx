import React from 'react';
import { motion } from 'framer-motion';
import { moods } from '../data/moods';
import { useMusicStore } from '../store/musicStore';

export default function MoodSelector() {
  const { setCurrentMood, currentMood } = useMusicStore();

  return (
    <div className="p-6 bg-surface rounded-xl">
      {/* <h2 className="text-2xl font-bold mb-4">How are you feeling today?</h2> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {moods.map((mood) => (
          <motion.button
            key={mood.id}
            className={`p-4 rounded-xl bg-gradient-to-br ${mood.color} 
              ${currentMood?.id === mood.id ? 'ring-2 ring-white' : ''}
              transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentMood(mood)}
          >
            <motion.span
              className="text-4xl block mb-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              {mood.emoji}
            </motion.span>
            <span className="font-medium block mb-1">{mood.name}</span>
            <span className="text-xs opacity-80">{mood.description}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}