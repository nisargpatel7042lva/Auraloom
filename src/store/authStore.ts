import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  signIn: async (email, password) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({
        user: {
          id: '1',
          name: 'John Doe',
          email,
          photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80'
        },
        isAuthenticated: true
      });
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (name, email, password) => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      set({
        user: {
          id: '1',
          name,
          email,
          photoURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80'
        },
        isAuthenticated: true
      });
    } catch (error) {
      console.error('Sign up failed:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: () => {
    set({ user: null, isAuthenticated: false });
  }
}));