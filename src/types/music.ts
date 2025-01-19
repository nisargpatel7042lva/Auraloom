export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  mood?: string[];
  genre?: string;
}

export interface Playlist {
  id: string;
  name: string;
  coverUrl: string;
  songs: Song[];
}

export interface Mood {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
}