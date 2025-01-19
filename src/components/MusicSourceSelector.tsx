import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMusicStore } from '../store/musicStore';
import { moods } from '../data/moods';
import { moodSongs } from '../data/moodSongs';
import SongCard from '../components/SongCard';
import MusicLoader from '../components/MusicLoader';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{
    mood: string;
    songs: typeof moodSongs[keyof typeof moodSongs];
  }>>([]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const results = Object.entries(moodSongs)
      .map(([mood, songs]) => ({
        mood,
        songs: songs.filter(song =>
          song.title.toLowerCase().includes(query.toLowerCase()) ||
          song.artist.toLowerCase().includes(query.toLowerCase()) ||
          song.album.toLowerCase().includes(query.toLowerCase())
        )
      }))
      .filter(result => result.songs.length > 0);

    setSearchResults(results);
    setIsLoading(false);
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
            {moods.map((mood) => (
              <motion.div
                key={mood.id}
                className={`aspect-square relative overflow-hidden rounded-lg cursor-pointer bg-gradient-to-br ${mood.color}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-4xl mb-2">{mood.emoji}</span>
                  <h3 className="text-xl font-bold mb-2">{mood.name}</h3>
                  <p className="text-sm opacity-80">{mood.description}</p>
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
              searchResults.map(({ mood, songs }) => (
                <div key={mood} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 capitalize">
                    {moods.find(m => m.id === mood)?.emoji} {mood} Songs
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {songs.map((song) => (
                      <SongCard key={song.id} song={song} />
                    ))}
                  </div>
                </div>
              ))
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