import React from 'react';
import { Heart, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMusicStore } from '../../store/musicStore';

export default function LikedPlaylist() {
  const { likedSongs } = useMusicStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" fill="white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Liked Songs</h3>
            <p className="text-sm text-white/80">{likedSongs?.length || 0} songs</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary p-3 rounded-full"
        >
          <Play className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  );
}