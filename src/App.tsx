import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import LikedSongs from './pages/LikedSongs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<Library />} />
          <Route path="liked-songs" element={<LikedSongs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;