'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    "Hi! I'm GiggleBot 🌈✨. How can I brighten your day?",
  ]);
  const [input, setInput] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      input,
      "Thanks for your message! 💡 I'm on it!",
    ]);
    setInput('');
  };

  if (!hasMounted) return null;

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-[9999]"
      drag
      dragElastic={0.15}
      dragTransition={{ bounceStiffness: 180, bounceDamping: 15 }}
      dragConstraints={{ top: -300, bottom: 200, left: -200, right: 200 }}
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chatbox"
            className="w-80 sm:w-72 bg-white rounded-3xl shadow-xl border border-gray-300 overflow-hidden backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-pink-300 to-yellow-200 border-b">
              <span className="text-xl font-semibold">GiggleBot 🤖</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>

            <div className="h-60 p-3 space-y-2 overflow-y-auto text-sm bg-pink-50">
              {messages.map((msg, idx) => (
                <div key={idx} className="bg-white p-2 rounded-xl shadow text-gray-800">
                  {msg}
                </div>
              ))}
            </div>

            <div className="flex items-center border-t p-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Say something..."
                className="flex-1 px-3 py-1 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-pink-500 text-white text-sm rounded-full px-3 py-1 hover:bg-pink-600"
              >
                Send
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="icon"
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 shadow-2xl flex items-center justify-center hover:scale-105"
            whileTap={{ scale: 0.9 }}
            title="Talk to GiggleBot!"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
