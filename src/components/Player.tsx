import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { useMusicStore } from '../store/musicStore';

const VolumeSlider = ({ volume }: { volume: number }) => (
  <div className="relative w-24 group">
    <div className="h-1 bg-gray-600 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary rounded-full relative"
        style={{ width: `${volume * 100}%` }}
        layoutId="volume-fill"
      >
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer"
          whileHover={{ scale: 1.2 }}
        />
      </motion.div>
    </div>
  </div>
);

const PlayButton = ({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="bg-primary rounded-full p-3 transition"
    onClick={onClick}
  >
    {isPlaying ? (
      <Pause className="w-5 h-5 text-black" />
    ) : (
      <Play className="w-5 h-5 text-black" />
    )}
  </motion.button>
);

export default function Player() {
  const { currentSong, isPlaying, togglePlay, volume } = useMusicStore();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="h-24 bg-gradient-to-r from-surface to-surface-low border-t border-white/10 px-4 flex items-center justify-between"
    >
      {/* Current Song Info */}
      <motion.div
        className="flex items-center w-1/4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        {currentSong && (
          <>
            <motion.img
              src={currentSong.coverUrl}
              alt={currentSong.title}
              className="h-14 w-14 rounded-md"
              whileHover={{ scale: 1.05 }}
            />
            <div className="ml-4">
              <motion.div
                className="text-sm font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {currentSong.title}
              </motion.div>
              <motion.div
                className="text-xs text-text-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {currentSong.artist}
              </motion.div>
            </div>
          </>
        )}
      </motion.div>

      {/* Player Controls */}
      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-text-secondary hover:text-text"
          >
            <Shuffle className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-text-secondary hover:text-text"
          >
            <SkipBack className="w-5 h-5" />
          </motion.button>
          <PlayButton isPlaying={isPlaying} onClick={togglePlay} />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-text-secondary hover:text-text"
          >
            <SkipForward className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-text-secondary hover:text-text"
          >
            <Repeat className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mt-2 flex items-center space-x-2">
          <span className="text-xs text-text-secondary">0:00</span>
          <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden group cursor-pointer">
            <motion.div
              className="w-1/3 h-full bg-primary group-hover:bg-primary-dark transition-colors relative"
              layoutId="progress-bar"
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>
          </div>
          <span className="text-xs text-text-secondary">3:45</span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2 w-1/4 justify-end">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Volume2 className="w-5 h-5" />
        </motion.div>
        <VolumeSlider volume={volume} />
      </div>
    </motion.div>
  );
}