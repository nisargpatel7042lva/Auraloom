import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Player from './Player';

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      <Player />
    </div>
  );
}