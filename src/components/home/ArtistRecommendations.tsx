import React from 'react';
import { motion } from 'framer-motion';

const recommendedArtists = [
  {
    id: '1',
    name: 'Taylor Swift',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    genre: 'Pop'
  },
  {
    id: '2',
    name: 'Ed Sheeran',
    imageUrl: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&q=80',
    genre: 'Pop'
  },
  {
    id: '3',
    name: 'Kendrick Lamar',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    genre: 'Hip Hop'
  },
  {
    id: '4',
    name: 'Billie Eilish',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
    genre: 'Pop'
  }
];

export default function ArtistRecommendations() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {recommendedArtists.map((artist) => (
        <motion.div
          key={artist.id}
          className="group cursor-pointer"
          whileHover={{ y: -8 }}
        >
          <div className="relative aspect-square rounded-full overflow-hidden mb-4">
            <img
              src={artist.imageUrl}
              alt={artist.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h4 className="font-medium text-center">{artist.name}</h4>
          <p className="text-sm text-text-secondary text-center">{artist.genre}</p>
        </motion.div>
      ))}
    </div>
  );
}