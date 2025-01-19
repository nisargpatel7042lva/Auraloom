import type { Song } from '../types/music';

export const moodSongs: Record<string, Song[]> = {
  happy: [
    {
      id: 'happy-1',
      title: "Don't Stop Believin'",
      artist: 'Journey',
      album: 'Escape',
      duration: 251,
      coverUrl: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=400&q=80',
      mood: ['happy', 'energetic']
    },
    {
      id: 'happy-2',
      title: 'Walking on Sunshine',
      artist: 'Katrina & The Waves',
      album: 'Walking on Sunshine',
      duration: 238,
      coverUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80',
      mood: ['happy']
    }
  ],
  chill: [
    {
      id: 'chill-1',
      title: 'Weightless',
      artist: 'Marconi Union',
      album: 'Ambient Translations',
      duration: 476,
      coverUrl: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af?w=400&q=80',
      mood: ['chill', 'focused']
    },
    {
      id: 'chill-2',
      title: 'Waves',
      artist: 'Ludovico Einaudi',
      album: 'Islands',
      duration: 324,
      coverUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
      mood: ['chill']
    }
  ],
  energetic: [
    {
      id: 'energetic-1',
      title: 'Eye of the Tiger',
      artist: 'Survivor',
      album: 'Eye of the Tiger',
      duration: 245,
      coverUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80',
      mood: ['energetic']
    }
  ],
  focused: [
    {
      id: 'focused-1',
      title: 'Experience',
      artist: 'Ludovico Einaudi',
      album: 'In a Time Lapse',
      duration: 315,
      coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80',
      mood: ['focused', 'chill']
    }
  ],
  romantic: [
    {
      id: 'romantic-1',
      title: 'At Last',
      artist: 'Etta James',
      album: 'At Last!',
      duration: 180,
      coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80',
      mood: ['romantic']
    }
  ],
  melancholic: [
    {
      id: 'melancholic-1',
      title: 'The Sound of Silence',
      artist: 'Simon & Garfunkel',
      album: 'Sounds of Silence',
      duration: 185,
      coverUrl: 'https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=400&q=80',
      mood: ['melancholic']
    }
  ]
};