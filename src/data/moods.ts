import type { Mood } from '../types/music';

export const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    emoji: '😊',
    color: 'from-yellow-400 to-orange-500',
    description: 'Upbeat and cheerful tunes to lift your spirits'
  },
  {
    id: 'chill',
    name: 'Chill',
    emoji: '😌',
    color: 'from-blue-400 to-purple-500',
    description: 'Relaxing melodies for a peaceful vibe'
  },
  {
    id: 'energetic',
    name: 'Energetic',
    emoji: '⚡',
    color: 'from-red-500 to-pink-500',
    description: 'High-energy tracks to get you moving'
  },
  {
    id: 'focused',
    name: 'Focused',
    emoji: '🎯',
    color: 'from-green-400 to-emerald-600',
    description: 'Concentration-enhancing music for productivity'
  },
  {
    id: 'romantic',
    name: 'Romantic',
    emoji: '💝',
    color: 'from-pink-400 to-red-400',
    description: 'Love songs and romantic melodies'
  },
  {
    id: 'melancholic',
    name: 'Melancholic',
    emoji: '🥺',
    color: 'from-indigo-400 to-blue-600',
    description: 'Emotional and reflective songs'
  }
];