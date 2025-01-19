import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useMusicStore } from '../store/musicStore';
import type { Song } from '../types/music';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  song: Song;
}

export default function AddToPlaylistModal({ isOpen, onClose, song }: Props) {
  const { playlists, addSongToPlaylist } = useMusicStore();

  const handleAddToPlaylist = (playlistId: string) => {
    addSongToPlaylist(playlistId, song);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface p-6 rounded-xl w-full max-w-md"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Add to Playlist</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto">
              {playlists.map((playlist) => (
                <motion.button
                  key={playlist.id}
                  className="w-full flex items-center space-x-4 p-4 rounded-lg hover:bg-white/10 transition"
                  onClick={() => handleAddToPlaylist(playlist.id)}
                  whileHover={{ x: 4 }}
                >
                  <img
                    src={playlist.coverUrl}
                    alt={playlist.name}
                    className="w-12 h-12 rounded"
                  />
                  <div className="text-left">
                    <h3 className="font-medium">{playlist.name}</h3>
                    <p className="text-sm text-text-secondary">
                      {playlist.songs.length} songs
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}