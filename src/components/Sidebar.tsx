import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, Library, Heart } from 'lucide-react';
import Logo from './Logo';
import { useMusicStore } from '../store/musicStore';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center space-x-3 transition ${
    isActive ? 'text-primary' : 'text-text-secondary hover:text-text'
  }`;

const NavItem = motion(NavLink);

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="w-64 bg-surface-low h-full flex flex-col text-text-secondary"
    >
      <div className="p-6">
        <div className="mb-8">
          <Logo />
        </div>
        <nav className="space-y-4">
          <NavItem
            to="/"
            className={navLinkClass}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Home className="w-6 h-6" />
            <span>Home</span>
          </NavItem>
          <NavItem
            to="/search"
            className={navLinkClass}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Search className="w-6 h-6" />
            <span>Search</span>
          </NavItem>
          <NavItem
            to="/library"
            className={navLinkClass}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Library className="w-6 h-6" />
            <span>Your Library</span>
          </NavItem>
          <NavItem
            to="/liked-songs"
            className={navLinkClass}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart className="w-6 h-6" />
            <span>Liked Songs</span>
          </NavItem>
        </nav>
      </div>
    </motion.div>
  );
}