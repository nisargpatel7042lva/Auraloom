import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Heart } from 'lucide-react';
import { useMusicStore } from '../store/musicStore';
import type { Song } from '../types/music';

interface Props {
  song: Song;
}

export default function SongCard({ song }: Props) {
  const { setCurrentSong, currentSong, toggleLikeSong, likedSongs } = useMusicStore();
  const isPlaying = currentSong?.id === song.id;
  const isLiked = likedSongs.some(s => s.id === song.id);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLikeSong(song);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-surface p-4 rounded-lg group relative"
      onClick={() => setCurrentSong(song)}
    >
      <div className="relative">
        <motion.img
          src={song.coverUrl}
          alt={song.title}
          className="w-full aspect-square object-cover rounded-md"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isPlaying ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          {isPlaying && (
            <motion.div
              className="w-12 h-12"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <div className="w-full h-full rounded-full border-2 border-primary border-t-transparent animate-spin" />
            </motion.div>
          )}
        </motion.div>
        <div className="absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary p-2 rounded-full"
          >
            <Play className="w-5 h-5 text-black" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full ${isLiked ? 'bg-primary' : 'bg-white/10'}`}
            onClick={handleLike}
          >
            <Heart
              className={`w-5 h-5 ${isLiked ? 'text-white' : ''}`}
              fill={isLiked ? 'currentColor' : 'none'}
            />
          </motion.button>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="font-semibold truncate">{song.title}</h3>
        <p className="text-gray-400 text-sm truncate">{song.artist}</p>
      </div>
    </motion.div>
  );
}