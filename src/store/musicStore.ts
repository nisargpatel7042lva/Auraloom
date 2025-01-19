import { create } from 'zustand';
import type { Song, Mood } from '../types/music';
import { musicApiService } from '../services/musicApi';

interface MusicStore {
  currentSong: Song | null;
  currentMood: Mood | null;
  isPlaying: boolean;
  volume: number;
  queue: Song[];
  isLoading: boolean;
  availableSources: string[];
  playlists: any[];
  likedSongs: Song[];
  setCurrentSong: (song: Song) => void;
  setCurrentMood: (mood: Mood) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  addToQueue: (song: Song) => void;
  searchByMood: (mood: string) => Promise<void>;
  searchSongs: (query: string) => Promise<Song[]>;
  initializeSources: () => Promise<void>;
  addSongToPlaylist: (playlistId: string, song: Song) => void;
  toggleLikeSong: (song: Song) => void;
}

export const useMusicStore = create<MusicStore>((set, get) => ({
  currentSong: null,
  currentMood: null,
  isPlaying: false,
  volume: 1,
  queue: [],
  isLoading: false,
  availableSources: [],
  playlists: [],
  likedSongs: [],

  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
  setCurrentMood: async (mood) => {
    set({ currentMood: mood });
    if (mood) {
      await get().searchByMood(mood.id);
    }
  },
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
  addToQueue: (song) => set((state) => ({ queue: [...state.queue, song] })),

  searchByMood: async (mood) => {
    set({ isLoading: true });
    try {
      const results = await musicApiService.searchByMood(mood);
      const songs: Song[] = results.map(result => ({
        id: Math.random().toString(36).substr(2, 9),
        title: result.title,
        artist: result.artist,
        album: result.album,
        duration: result.duration,
        coverUrl: result.coverUrl,
        mood: [mood]
      }));
      set({ queue: songs });
    } catch (error) {
      console.error('Failed to search by mood:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  searchSongs: async (query) => {
    try {
      const results = await musicApiService.searchSongs(query);
      return results.map(result => ({
        id: Math.random().toString(36).substr(2, 9),
        title: result.title,
        artist: result.artist,
        album: result.album,
        duration: result.duration,
        coverUrl: result.coverUrl
      }));
    } catch (error) {
      console.error('Failed to search songs:', error);
      return [];
    }
  },

  initializeSources: async () => {
    try {
      const sources = await musicApiService.getAvailableSources();
      set({ availableSources: sources.map(s => s.id) });
    } catch (error) {
      console.error('Failed to initialize sources:', error);
    }
  },

  addSongToPlaylist: (playlistId, song) => {
    set((state) => ({
      playlists: state.playlists.map((playlist) =>
        playlist.id === playlistId
          ? { ...playlist, songs: [...playlist.songs, song] }
          : playlist
      ),
    }));
  },

  toggleLikeSong: (song) => {
    set((state) => {
      const isLiked = state.likedSongs.some(s => s.id === song.id);
      return {
        likedSongs: isLiked
          ? state.likedSongs.filter(s => s.id !== song.id)
          : [...state.likedSongs, song]
      };
    });
  },
}));