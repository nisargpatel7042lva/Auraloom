import React from 'react';
import { Play, Heart } from 'lucide-react';
import { useMusicStore } from '../store/musicStore';
import type { Song } from '../types/music';

const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    duration: 354,
    coverUrl: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80'
  },
  {
    id: '2',
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    album: 'Led Zeppelin IV',
    duration: 482,
    coverUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&q=80'
  },
  {
    id: '3',
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    duration: 391,
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80'
  }
];

export default function MainContent() {
  const { setCurrentSong } = useMusicStore();

  return (
    <div className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-auto">
      <div className="p-8">
        <div className="flex items-center space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" 
            alt="Featured Playlist" 
            className="w-60 h-60 shadow-2xl"
          />
          <div>
            <p className="text-sm font-bold text-gray-300">PLAYLIST</p>
            <h1 className="text-5xl font-bold text-white mt-2 mb-6">Featured Playlist</h1>
            <p className="text-gray-300">Created by Music Player • 50 songs, 3 hr 25 min</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center space-x-4 mb-6">
            <button className="bg-green-500 text-black rounded-full p-4 hover:scale-105 transition">
              <Play className="w-6 h-6 fill-current" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Heart className="w-8 h-8" />
            </button>
          </div>

          <table className="w-full text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400">
                <th className="text-left pb-3 w-12">#</th>
                <th className="text-left pb-3">TITLE</th>
                <th className="text-left pb-3">ALBUM</th>
                <th className="text-left pb-3">DURATION</th>
              </tr>
            </thead>
            <tbody>
              {mockSongs.map((song, index) => (
                <tr 
                  key={song.id} 
                  className="hover:bg-white/10 cursor-pointer"
                  onClick={() => setCurrentSong(song)}
                >
                  <td className="py-4">{index + 1}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <img 
                        src={song.coverUrl} 
                        alt={song.title} 
                        className="w-10 h-10 mr-4"
                      />
                      <div>
                        <div className="font-semibold text-white">{song.title}</div>
                        <div className="text-gray-400">{song.artist}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">{song.album}</td>
                  <td className="py-4">{Math.floor(song.duration / 60)}:{(song.duration % 60).toString().padStart(2, '0')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}