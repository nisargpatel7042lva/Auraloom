import React from 'react';
import { Clock, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMusicStore } from '../../store/musicStore';

const recentlyPlayed = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    coverUrl: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80'
  },
  {
    id: '2',
    title: 'Hotel California',
    artist: 'Eagles',
    coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80'
  }
];

export default function RecentlyPlayed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold">Recently Played</h3>
        </div>
      </div>

      <div className="space-y-4">
        {recentlyPlayed.map((song) => (
          <motion.div
            key={song.id}
            className="flex items-center space-x-4 p-2 rounded-lg hover:bg-white/5 group"
            whileHover={{ x: 4 }}
          >
            <img
              src={song.coverUrl}
              alt={song.title}
              className="w-12 h-12 rounded"
            />
            <div className="flex-1">
              <p className="font-medium">{song.title}</p>
              <p className="text-sm text-text-secondary">{song.artist}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="opacity-0 group-hover:opacity-100 bg-primary p-2 rounded-full"
            >
              <Play className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}