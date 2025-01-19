import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import AuthModal from './auth/AuthModal';

export default function ProfileButton() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user, isAuthenticated } = useAuthStore();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 bg-primary/90 hover:bg-primary px-6 py-3 rounded-full transition"
        onClick={() => setIsAuthModalOpen(true)}
      >
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          {isAuthenticated ? (
            <img
              src={user?.photoURL || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80'}
              alt={user?.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="w-5 h-5" />
          )}
        </div>
        <span className="text-sm font-medium">
          {isAuthenticated ? user?.name : 'Sign In'}
        </span>
      </motion.button>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
}