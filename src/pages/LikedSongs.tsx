import React from 'react';
import { Heart, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMusicStore } from '../store/musicStore';

export default function LikedSongs() {
  const { likedSongs, setCurrentSong, toggleLikeSong } = useMusicStore();

  return (
    <div className="min-h-full bg-gradient-to-b from-pink-600 to-background">
      <div className="p-8">
        <div className="flex items-center space-x-6">
          <div className="w-60 h-60 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl">
            <Heart className="w-24 h-24" fill="white" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase">Playlist</p>
            <h1 className="text-6xl font-bold mt-4 mb-6">Liked Songs</h1>
            <p className="text-text-secondary">
              {likedSongs.length} songs
            </p>
          </div>
        </div>

        <div className="mt-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-3 w-12">#</th>
                <th className="pb-3">Title</th>
                <th className="pb-3">Album</th>
                <th className="pb-3">Duration</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {likedSongs.map((song, index) => (
                <motion.tr
                  key={song.id}
                  className="hover:bg-white/10 group cursor-pointer"
                  onClick={() => setCurrentSong(song)}
                  whileHover={{ x: 4 }}
                >
                  <td className="py-4">{index + 1}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <img
                        src={song.coverUrl}
                        alt={song.title}
                        className="w-12 h-12 rounded mr-4"
                      />
                      <div>
                        <div className="font-medium">{song.title}</div>
                        <div className="text-text-secondary">{song.artist}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-text-secondary">{song.album}</td>
                  <td className="py-4 text-text-secondary">
                    {Math.floor(song.duration / 60)}:{(song.duration % 60)
                      .toString()
                      .padStart(2, '0')}
                  </td>
                  <td className="py-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLikeSong(song);
                      }}
                    >
                      <Heart className="w-5 h-5" fill="currentColor" />
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {likedSongs.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No liked songs yet. Start liking songs to see them here!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}