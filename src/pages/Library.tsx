import React from 'react';
import { Clock, Play, Heart } from 'lucide-react';

const libraryItems = [
  {
    id: '1',
    title: 'Liked Songs',
    type: 'Playlist',
    owner: 'You',
    songCount: 123,
    coverUrl: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80'
  },
  {
    id: '2',
    title: 'Your Top Songs 2023',
    type: 'Playlist',
    owner: 'Music Player',
    songCount: 100,
    coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80'
  },
  {
    id: '3',
    title: 'Discover Weekly',
    type: 'Playlist',
    owner: 'Music Player',
    songCount: 30,
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80'
  }
];

export default function Library() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Library</h1>
        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition">
          New Playlist
        </button>
      </div>
      
      <div className="grid gap-6">
        {libraryItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-surface p-4 rounded-lg hover:bg-surface/80 transition cursor-pointer group"
          >
            <img
              src={item.coverUrl}
              alt={item.title}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.type} • {item.owner}</p>
              <p className="text-text-secondary text-sm">{item.songCount} songs</p>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition bg-primary rounded-full p-3 mr-4">
              <Play className="w-5 h-5" />
            </button>
            {item.title === 'Liked Songs' && (
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}