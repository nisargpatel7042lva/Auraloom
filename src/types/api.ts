export interface MusicSource {
  id: string;
  name: string;
  isAuth: boolean;
}

export interface MusicAPI {
  sources: MusicSource[];
  authSources: string[];
  types: string[];
}

export interface SearchResult {
  title: string;
  artist: string;
  album: string;
  duration: number;
  coverUrl: string;
  sources: {
    [key: string]: string; // source: url
  };
}