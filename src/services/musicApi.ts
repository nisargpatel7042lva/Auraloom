import axios from 'axios';
import { API_BASE_URL, RAPIDAPI_KEY, RAPIDAPI_HOST } from '../config/api';
import type { MusicAPI, SearchResult } from '../types/api';
import { moodSongs } from '../data/moodSongs';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-rapidapi-key': RAPIDAPI_KEY,
    'x-rapidapi-host': RAPIDAPI_HOST,
  },
});

class MusicAPIService {
  private sources: string[];
  private authSources: string[];

  constructor() {
    this.sources = ['youtube', 'spotify', 'appleMusic', 'soundCloud', 'deezer'];
    this.authSources = [
      'spotify',
      'appleMusic',
      'youtube',
      'soundCloud',
      'deezer'
    ];
  }

  async searchByMood(mood: string): Promise<SearchResult[]> {
    try {
      // First, get mood-specific songs from our local data
      const localSongs = moodSongs[mood] || [];
      
      // Then, fetch additional songs from the API
      const response = await api.get('/public/search', {
        params: {
          query: `${mood} music`,
          type: 'track',
          limit: 10
        }
      });

      // Combine local and API results
      const apiSongs = response.data.tracks.map((track: any) => ({
        title: track.title,
        artist: track.artist,
        album: track.album || 'Unknown Album',
        duration: track.duration || 180,
        coverUrl: track.coverUrl || 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80',
        sources: {
          youtube: track.youtubeUrl,
          spotify: track.spotifyUrl
        }
      }));

      return [...localSongs, ...apiSongs];
    } catch (error) {
      console.error('Error fetching mood-based songs:', error);
      // Fallback to local data if API fails
      return moodSongs[mood] || [];
    }
  }

  async getAvailableSources(): Promise<MusicAPI['sources']> {
    try {
      const response = await api.get('/public/search/introspection');
      return response.data.sources.map((source: string) => ({
        id: source,
        name: source.charAt(0).toUpperCase() + source.slice(1),
        isAuth: this.authSources.includes(source)
      }));
    } catch (error) {
      console.error('Error fetching available sources:', error);
      // Fallback to default sources if API fails
      return this.sources.map(source => ({
        id: source,
        name: source.charAt(0).toUpperCase() + source.slice(1),
        isAuth: this.authSources.includes(source)
      }));
    }
  }

  async searchSongs(query: string): Promise<SearchResult[]> {
    try {
      const response = await api.get('/public/search', {
        params: {
          query,
          type: 'track',
          limit: 20
        }
      });

      return response.data.tracks.map((track: any) => ({
        title: track.title,
        artist: track.artist,
        album: track.album || 'Unknown Album',
        duration: track.duration || 180,
        coverUrl: track.coverUrl || 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80',
        sources: {
          youtube: track.youtubeUrl,
          spotify: track.spotifyUrl
        }
      }));
    } catch (error) {
      console.error('Error searching songs:', error);
      return [];
    }
  }
}

export const musicApiService = new MusicAPIService();