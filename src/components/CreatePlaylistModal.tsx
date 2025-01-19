import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, description: string, coverUrl: string) => void;
}

export default function CreatePlaylistModal({ isOpen, onClose, onCreate }: Props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [coverUrl, setCoverUrl] = useState('https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&q=80');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(name, description, coverUrl);
    onClose();
    setName('');
    setDescription('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface p-6 rounded-xl w-full max-w-md"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Create Playlist</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Playlist Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="My Awesome Playlist"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
                  placeholder="What's this playlist about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Cover Image URL
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center">
                    {coverUrl ? (
                      <img
                        src={coverUrl}
                        alt="Cover"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <input
                    type="url"
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                    className="flex-1 bg-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-full font-medium transition transform hover:scale-105"
              >
                Create Playlist
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}