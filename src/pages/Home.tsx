import React from 'react';
import RecentlyPlayed from '../components/home/RecentlyPlayed';
import LikedPlaylist from '../components/home/LikedPlaylist';
import ArtistRecommendations from '../components/home/ArtistRecommendations';
import MoodSelector from '../components/MoodSelector';
import ProfileButton from '../components/ProfileButton';

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <LikedPlaylist />
          <div className="flex justify-center">
            <ProfileButton />
          </div>
        </div>
        <RecentlyPlayed />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Recommended Artists</h2>
        <ArtistRecommendations />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">How are you feeling today?</h2>
        <MoodSelector />
      </section>
    </div>
  );
}