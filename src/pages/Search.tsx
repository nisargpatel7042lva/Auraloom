import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMusicStore } from '../store/musicStore';
import SongCard from '../components/SongCard';
import MusicLoader from '../components/MusicLoader';

const musicGenres = [
  { id: 'pop', name: 'Pop', color: 'from-pink-500 to-rose-500', icon: '🎵' },
  { id: 'rock', name: 'Rock', color: 'from-purple-500 to-indigo-500', icon: '🎸' },
  { id: 'jazz', name: 'Jazz', color: 'from-blue-500 to-cyan-500', icon: '🎷' },
  { id: 'classical', name: 'Classical', color: 'from-emerald-500 to-teal-500', icon: '🎻' },
  { id: 'electronic', name: 'Electronic', color: 'from-violet-500 to-purple-500', icon: '🎧' },
  { id: 'hiphop', name: 'Hip Hop', color: 'from-orange-500 to-amber-500', icon: '🎤' },
  { id: 'rnb', name: 'R&B', color: 'from-red-500 to-pink-500', icon: '🎹' },
  { id: 'country', name: 'Country', color: 'from-yellow-500 to-orange-500', icon: '🤠' }
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { searchSongs } = useMusicStore();
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const results = await searchSongs(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-surface py-4 pl-12 pr-4 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <MusicLoader />
          </div>
        ) : searchQuery.length < 2 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {musicGenres.map((genre) => (
              <motion.div
                key={genre.id}
                className={`aspect-square relative overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br ${genre.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSearch(genre.name)}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-4xl mb-2">{genre.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{genre.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {searchResults.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                No results found for "{searchQuery}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}