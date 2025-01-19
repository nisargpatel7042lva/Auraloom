import React from 'react';
import { motion } from 'framer-motion';
import { moodSongs } from '../data/moodSongs';
import { useMusicStore } from '../store/musicStore';
import SongCard from './SongCard';

export default function MoodRecommendations() {
  const { currentMood } = useMusicStore();

  if (!currentMood) {
    return null;
  }

  const recommendedSongs = moodSongs[currentMood.id] || [];

  return (
    <div className="mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-bold mb-2">
          {currentMood.emoji} {currentMood.name} Recommendations
        </h2>
        <p className="text-gray-400">{currentMood.description}</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {recommendedSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      {recommendedSongs.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          No songs available for this mood yet.
        </div>
      )}
    </div>
  );
}